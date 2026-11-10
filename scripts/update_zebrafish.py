#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""每日增量：从 PubMed 抓「斑马鱼 + 生态毒理」新文献，追加到 data_papers.js。

设计边界（与人工标注的分工）：
  * 本脚本只做**规则**能做的事：检索、解析、按关键词打标签、抽取摘要首句。
  * zh 字段写「【自动收录·待复核】+ 英文摘要首句」，并在条目上打 auto=true，
    页面据此显示「自动收录」徽标——不与 430 篇人工标注的结果混淆。
  * 只追加，不删改既有条目；写临时文件后原子替换，抓取失败不破坏原数据。

用法：
  python3 scripts/update_zebrafish.py --dry-run          # 看会抓到什么
  python3 scripts/update_zebrafish.py --data zebrafish/data_papers.js
"""
import argparse, json, os, re, sys, time
import urllib.parse, urllib.request
import xml.etree.ElementTree as ET
from difflib import SequenceMatcher
from datetime import date, datetime, timedelta, timezone

EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
PREFIX_RE = re.compile(r"window\.PAPERS\s*=\s*")
LOOKBACK_DAYS = 10
MAX_NEW_PER_RUN = 30
MIN_SCORE = 3

TERM = (
    '("zebrafish"[Title/Abstract] OR "Danio rerio"[Title/Abstract]) '
    'AND ('
    'toxic*[Title/Abstract] OR pollutant*[Title/Abstract] OR contaminant*[Title/Abstract] '
    'OR pesticide*[Title/Abstract] OR herbicide*[Title/Abstract] OR insecticide*[Title/Abstract] '
    'OR microplastic*[Title/Abstract] OR nanoplastic*[Title/Abstract] '
    'OR nanoparticle*[Title/Abstract] OR nanomaterial*[Title/Abstract] '
    'OR PFAS[Title/Abstract] OR perfluoro*[Title/Abstract] OR bisphenol[Title/Abstract] '
    'OR cadmium[Title/Abstract] OR arsenic[Title/Abstract] OR lead[Title/Abstract] '
    'OR mercury[Title/Abstract] OR copper[Title/Abstract] OR chromium[Title/Abstract] '
    'OR "heavy metal"[Title/Abstract] OR "environmental exposure"[Title/Abstract] '
    'OR ecotoxic*[Title/Abstract] OR "water quality"[Title/Abstract]'
    ')'
)

# 污染物大类：命中顺序即优先级（越靠前越具体）
POLLUTANT_RULES = [
    ("op", ["organophosphat", "chlorpyrifos", "diazinon", "malathion", "parathion", "dimethoate"]),
    ("pest", ["pesticide", "herbicide", "insecticide", "fungicide", "atrazine", "glyphosate",
              "imidacloprid", "carbaryl", "fipronil", "tebuconazole", "azoxystrobin", "acetamiprid",
              "mancozeb", "boscalid"]),
    ("plas", ["microplastic", "nanoplastic", "polystyrene", "polyethylene", "polypropylene",
              "plastic particle", "plastic debris", "pvc"]),
    ("np", ["nanoparticle", "nanomaterial", "titanium dioxide", "tio2", "zno", "graphene",
            "quantum dot", "carbon nanotube", "nano-"]),
    ("metal", ["cadmium", "arsenic", "arsenite", "lead", "mercury", "methylmercury", "copper",
               "zinc", "chromium", "nickel", "manganese", "selenium", "heavy metal", "metalloid",
               "silver ion"]),
    ("pah", ["polycyclic aromatic", "pah", "benzo[a]pyrene", "pyrene", "fluoranthene",
             "naphthalene", "phenanthrene", "anthracene"]),
    ("emerg", ["pfas", "pfoa", "pfos", "bisphenol", "bpa", "triclosan", "pharmaceutical",
               "ibuprofen", "diclofenac", "antibiotic", "tetracycline", "ciprofloxacin",
               "microcystin", "cyanotoxin", "personal care", "artificial sweetener"]),
    ("edc", ["estrogen", "estradiol", "ethinylestradiol", "androgen", "thyroid hormone",
             "endocrine disrupt", "xenoestrogen", "anti-androgen"]),
    ("mix", ["mixture", "co-exposure", "combined exposure", "binary mixture"]),
]

# 必须落在环境暴露语境里，否则只是「用斑马鱼做药物/材料毒性」的研究
ENV_REQUIRED = ["environment", "aquatic", "water", "wastewater", "effluent", "sediment",
                "ecotoxic", "pollut", "contaminant", "bioaccumul", "ecosystem", "field study",
                "surface water", "drinking water"]

# 药物化学/材料合成的典型措辞，命中即视为非生态毒理
NEGATIVE = ["chemotherapy", "cancer therapy", "tumor growth", "xenograft", "patient",
            "clinical", "chemosensor", "fluorescent probe", "ligand", "catalyst",
            "drug delivery", "nanocarrier", "wound healing", "regenerative medicine",
            "stem cell therapy", "pharmacological", "synthesis of", "derivative of",
            "anticancer", "anti-inflammatory"]

POL_ZH = {
    "op": "有机磷农药", "pest": "农药", "metal": "重金属", "plas": "微塑料",
    "np": "纳米材料", "pah": "多环芳烃", "emerg": "新污染物", "edc": "内分泌干扰物",
    "mix": "混合暴露", "none": "未标注",
}

DIR_RULES = [
    ("dv", ["develop", "embryo", "teratogen", "malformation", "hatch", "swim bladder",
            "yolk", "somite", "larval development", "ontogeny"]),
    ("bh", ["behavior", "behaviour", "locomot", "anxiety", "learning", "memory", "social",
            "aggress", "startle", "swimming", "activity"]),
    ("cv", ["cardiovascular", "heart", "cardiac", "blood vessel", "angiogen", "pericardial",
            "heart rate", "erythrocyte"]),
    ("ed", ["endocrine", "hormone", "thyroid", "estrogen", "androgen", "steroid",
            "hypothalam", "pituitary", "vitellogenin"]),
    ("rp", ["reproduct", "fertil", "sperm", "oocyte", "ovary", "testis", "transgeneration",
            "multigeneration", "offspring", "brood", "fecundity", "gonad"]),
    ("ox", ["oxidative stress", "antioxidant", "ros", "sod", "cat", "gsh", "mda", "nrf2",
            "apoptosis", "detoxif", "cyp1a", "erod", "lipid peroxidation"]),
    ("ag", ["aging", "ageing", "lifespan", "senescence", "longevity", "telomere",
            "neurodegener", "alzheimer", "parkinson", "aging-related"]),
    ("mt", ["method", "protocol", "oecd", "guideline", "assay", "high-throughput",
            "machine learning", "qsar", "model", "review", "standard"]),
]

ORG_RULES = [
    ("li", ["liver", "hepat", "steatosis", "hepatocyte"]),
    ("he", ["heart", "cardiac", "cardiomyocyte", "pericard"]),
    ("br", ["brain", "neuro", "cns", "spinal cord", "neuron", "axon", "synap"]),
    ("gi", ["gill", "branchial", "lamella"]),
    ("gu", ["intestin", "gut", "bowel", "enterocyte"]),
    ("go", ["gonad", "testis", "ovary", "oocyte", "sperm", "germ cell", "vitellogenin"]),
    ("ki", ["kidney", "renal", "pronephros", "nephron"]),
    ("ll", ["lateral line", "hair cell", "neuromast"]),
    ("ey", ["eye", "retin", "visual", "photoreceptor", "optic"]),
    ("th", ["thyroid", "thyro", "t4", "t3"]),
    ("mu", ["muscle", "myotome", "sarcomere", "myofib", "myosin"]),
]

STAGE_RULES = [
    ("zyg", ["zygote", "fertilization", "fertilised egg"]),
    ("cle", ["cleavage", "blastomere"]),
    ("bla", ["blastula"]),
    ("gas", ["gastrula"]),
    ("seg", ["somite", "segmentation period"]),
    ("pha", ["pharyngula", "24 hpf", "48 hpf"]),
    ("hat", ["hatching", "hatch", "72 hpf", "eleutheroembryo"]),
    ("lar", ["larva", "larval", "5 dpf", "7 dpf", "10 dpf"]),
    ("juv", ["juvenile"]),
    ("sex", ["sex differentiation", "sexual differentiation"]),
    ("adu", ["adult"]),
    ("old", ["aged", "aging", "ageing", "old fish"]),
]


def http_get(url, retries=3, timeout=45):
    last = None
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "zebrafish-updater/1.0"})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except Exception as e:  # noqa: BLE001
            last = e
            time.sleep(2 * (i + 1))
    raise RuntimeError("请求失败: %s (%s)" % (url[:120], last))


def esearch(term, retmax=100):
    q = urllib.parse.urlencode({"db": "pubmed", "term": term, "retmax": retmax,
                                "sort": "pub date", "retmode": "json"})
    j = json.loads(http_get("%s/esearch.fcgi?%s" % (EUTILS, q)).decode("utf-8"))
    return j.get("esearchresult", {}).get("idlist", [])


def efetch(ids):
    if not ids:
        return b""
    q = urllib.parse.urlencode({"db": "pubmed", "id": ",".join(ids), "retmode": "xml"})
    return http_get("%s/efetch.fcgi?%s" % (EUTILS, q))


def text_of(node):
    if node is None:
        return ""
    return re.sub(r"\s+", " ", "".join(node.itertext())).strip()


def parse_articles(xml_bytes):
    """注意：一律走精确路径。

    这里曾经用 `.//ArticleId` 取 DOI，结果扫到了
    PubmedData/ReferenceList/Reference/ArticleIdList 里**被引文献**的 DOI/PMC，
    而它们在文档里排在 PubmedData/ArticleIdList 之后，循环最后一次赋值就把它
    当成了本文的 DOI——一个格式完美、能打开、却属于别的论文的 DOI。
    """
    root = ET.fromstring(xml_bytes)
    out = []
    for art in root.findall(".//PubmedArticle"):
        mc = art.find("MedlineCitation")
        a = mc.find("Article") if mc is not None else None
        rec = {
            "pmid": text_of(mc.find("PMID")) if mc is not None else "",
            "title": text_of(a.find("ArticleTitle")) if a is not None else "",
            "abstract": "",
            "journal": "",
            "year": "",
            "review": False, "doi": "", "pmc": "",
        }
        if a is not None:
            ab = a.find("Abstract")
            if ab is not None:
                rec["abstract"] = re.sub(r"\s+", " ", " ".join(text_of(t) for t in ab.findall("AbstractText"))).strip()
            j = a.find("Journal")
            if j is not None:
                rec["journal"] = text_of(j.find("ISOAbbreviation")) or text_of(j.find("Title"))
                rec["year"] = text_of(j.find("JournalIssue/PubDate/Year"))
            if not rec["year"]:
                rec["year"] = text_of(a.find("ArticleDate/Year"))
            authors = a.findall("AuthorList/Author")
            rec["author1"] = text_of(authors[0].find("LastName")) if authors else ""
            rec["nAuthors"] = len(authors)
            types = [text_of(t) for t in a.findall("PublicationTypeList/PublicationType")]
            rec["review"] = any("Review" in t for t in types)

        # 本文自身的标识符：只认 PubmedData/ArticleIdList
        idlist = art.find("PubmedData/ArticleIdList")
        if idlist is not None:
            for aid in idlist.findall("ArticleId"):
                kind = aid.get("IdType")
                if kind == "doi":
                    rec["doi"] = text_of(aid)
                elif kind == "pmc":
                    rec["pmc"] = text_of(aid)
        # 兜底只看 Article 自己的 ELocationID，不看任何引用
        if not rec["doi"] and a is not None:
            for eid in a.findall("ELocationID"):
                if eid.get("EIdType") == "doi":
                    rec["doi"] = text_of(eid)
                    break

        rec["year"] = int(rec["year"]) if str(rec["year"]).isdigit() else 0
        out.append(rec)
    return out


def score(rec):
    t = (rec["title"] + " " + rec["abstract"]).lower()
    if "zebrafish" not in t and "danio rerio" not in t:
        return 0
    if not any(k in t for cls, keys in POLLUTANT_RULES for k in keys):
        return 0
    if any(k in t for k in NEGATIVE):
        return 0
    title_l = rec["title"].lower()
    if not ("zebrafish" in title_l or "danio rerio" in title_l):
        # 标题完全没提斑马鱼、却写了人/小鼠：是别的物种的机制研究，顺带提到斑马鱼比对
        if any(k in title_l for k in ["human", "mouse", "murine", "rat ", "patients"]):
            return 0
    if not any(k in t for k in ENV_REQUIRED):
        # 标题点名斑马鱼、且能归到具体污染物类别的，本身就是生态毒理研究。
        # 典型是汞/镉这类金属的组织分布与形态研究：摘要写的是 accumulated /
        # administration，不会出现 water/exposure 字样，旧规则会把它们整批漏掉。
        named = "zebrafish" in title_l or "danio rerio" in title_l
        typed = any(k in t for cls, keys in POLLUTANT_RULES for k in keys)
        if not (named and typed):
            return 0
    s = 0
    if any(k in t for k in ["exposure", "dose", "concentration", "toxicity", "toxic",
                            "lethal", "sublethal", "bioaccumul", "accumulat", "pollut"]):
        s += 2
    if "zebrafish" in rec["title"].lower() or "danio rerio" in rec["title"].lower():
        s += 1
    if any(k in t for k in ["develop", "reproduct", "offspring", "behavior", "oxidative",
                            "stress", "liver", "heart", "brain", "gut", "gill", "thyroid",
                            "muscle", "aging", "transgeneration"]):
        s += 1
    return s


def first_sentence(abstract, limit=120):
    if not abstract:
        return ""
    m = re.split(r"(?<=[.!?])\s+", abstract)
    s = m[0] if m else abstract
    if len(s) > limit:
        s = s[:limit].rstrip() + "…"
    return s


def tag(rec):
    t = (rec["title"] + " " + rec["abstract"]).lower()
    pol = "none"
    for cls, keys in POLLUTANT_RULES:
        if any(k in t for k in keys):
            pol = cls
            break
    dirs = [d for d, keys in DIR_RULES if any(k in t for k in keys)][:3] or ["mt"]
    organs = [o for o, keys in ORG_RULES if any(k in t for k in keys)][:3]
    stages = [s for s, keys in STAGE_RULES if any(k in t for k in keys)][:4]
    gen = ""
    if any(k in t for k in ["transgeneration", "multigeneration", "f1 generation",
                            "f2 generation", "maternal transfer"]):
        gen = "F1"
    return pol, dirs, organs, stages, gen


def build(rec, added):
    pol, dirs, organs, stages, gen = tag(rec)
    zh = ""
    if rec["abstract"]:
        zh = "【自动收录·待复核】" + first_sentence(rec["abstract"])
    out = {
        "pmid": rec["pmid"],
        "title": rec["title"],
        "author1": rec["author1"],
        "nAuthors": rec["nAuthors"],
        "journal": rec["journal"],
        "year": rec["year"],
        "review": rec["review"],
        "organs": organs,
        "dirs": dirs,
        "marks": [],
        "polClass": pol,
        "polName": POL_ZH.get(pol, "未标注"),
        "gen": gen,
        "stage": stages,
        "zh": zh,
        "auto": True,
        "added": added,
    }
    if rec["doi"]:
        out["doi"] = rec["doi"]
    if rec["pmc"]:
        out["pmc"] = rec["pmc"]
    return out


def norm_title(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    s = re.sub(r"&[a-zA-Z]+;|&#\d+;", " ", s).lower()
    s = re.sub(r"[^a-z0-9\u4e00-\u9fff]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def titles_agree(a, b):
    """两个标题是否指向同一篇文章。返回 None 表示无法判断（标题为空）。"""
    na, nb = norm_title(a), norm_title(b)
    if not na or not nb:
        return None
    if na in nb or nb in na:
        return True
    return SequenceMatcher(None, na, nb).ratio() >= 0.72


def crossref_title(doi):
    """用 Crossref 反查 DOI 对应的标题；查不到返回 None。"""
    url = "https://api.crossref.org/works/" + urllib.parse.quote(doi, safe="")
    try:
        raw = http_get(url, retries=1, timeout=25)
        j = json.loads(raw.decode("utf-8"))
        t = j.get("message", {}).get("title") or []
        return t[0] if t else None
    except Exception:  # noqa: BLE001
        return None


def verify_dois(recs):
    """DOI 是外链，错了比没有更糟：逐条拿 Crossref 的标题比对，不符就清空。"""
    kept = cleared = unknown = 0
    for r in recs:
        doi = r.get("doi") or ""
        if not doi:
            continue
        ct = crossref_title(doi)
        if ct is None:
            unknown += 1
            print("  ? %s Crossref 未确认 %s（保留，人工复核）" % (r["pmid"], doi), file=sys.stderr)
            continue
        ok = titles_agree(ct, r["title"])
        if ok is False:
            print("  ! %s 的 DOI %s 指向《%s》，与本文标题不符 → 已清空"
                  % (r["pmid"], doi, ct[:60]), file=sys.stderr)
            r["doi"] = ""
            cleared += 1
        else:
            kept += 1
    print("DOI 校验：通过 %d，清空 %d，未确认 %d" % (kept, cleared, unknown), file=sys.stderr)


def load(path):
    s = open(path, encoding="utf-8").read()
    m = PREFIX_RE.search(s)
    if not m:
        raise SystemExit("%s 里找不到 window.PAPERS =" % path)
    header = s[:m.start()]
    header = re.sub(r"window\.PAPERS_META\s*=\s*\{[^}]*\};\s*\n?", "", header)
    body = s[m.end():].strip()
    if body.endswith(";"):
        body = body[:-1]
    return header, json.loads(body)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--days", type=int, default=LOOKBACK_DAYS)
    ap.add_argument("--data", default="zebrafish/data_papers.js")
    ap.add_argument("--max", type=int, default=MAX_NEW_PER_RUN)
    ap.add_argument("--no-crossref", action="store_true", help="跳过 Crossref DOI 校验")
    args = ap.parse_args()

    header, papers = load(args.data)
    have = {str(p.get("pmid")) for p in papers}
    since = (date.today() - timedelta(days=args.days)).strftime("%Y/%m/%d")
    term = TERM + ' AND ("%s"[EDAT] : "3000"[EDAT])' % since
    print("检索范围：%s 起；现有 %d 篇" % (since, len(papers)), file=sys.stderr)

    ids = esearch(term)
    print("PubMed 命中 %d 条" % len(ids), file=sys.stderr)
    new_ids = [i for i in ids if i not in have]
    print("其中未收录 %d 条" % len(new_ids), file=sys.stderr)
    fresh = []
    if new_ids:
        recs = parse_articles(efetch(new_ids[:80]))
        picked = [r for r in recs if score(r) >= MIN_SCORE]
        picked.sort(key=lambda r: (r["year"], r["pmid"]), reverse=True)
        picked = picked[:args.max]
        if not args.no_crossref:
            verify_dois(picked)
        print("通过相关性阈值 %d 篇，本次写入 %d 篇" % (len(picked), len(picked)), file=sys.stderr)

        added = date.today().isoformat()
        fresh = [build(r, added) for r in picked]
        for p in fresh:
            print("  + %s  %s  [%s]  %s" % (p["pmid"], (p["title"][:70] + "…") if len(p["title"]) > 70 else p["title"],
                                            p["polClass"], ",".join(p["dirs"])), file=sys.stderr)

    if args.dry_run:
        print("（dry-run，不写文件）", file=sys.stderr)
        return 0

    papers.extend(fresh)
    auto_n = sum(1 for x in papers if x.get("auto"))
    # 先清掉所有旧的括号说明，避免每跑一次就叠加一层
    header = re.sub(r"（其中 \d+ 篇为每日自动收录，中文要点取摘要首句，待人工复核）", "", header)
    header = re.sub(r"共 \d+ 篇", "共 %d 篇（其中 %d 篇为每日自动收录，中文要点取摘要首句，待人工复核）" % (len(papers), auto_n), header)
    body = json.dumps(papers, indent=1, ensure_ascii=False)
    tmp = args.data + ".tmp"
    meta = {"last_run": datetime.now(timezone(timedelta(hours=8))).strftime("%Y-%m-%d %H:%M")}
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(header + "window.PAPERS_META = " + json.dumps(meta, ensure_ascii=False) + ";\n"
                + "window.PAPERS = " + body + ";\n")
    os.replace(tmp, args.data)
    print("已写入 %d 篇，总计 %d 篇（巡检时间 %s）" % (len(fresh), len(papers), meta["last_run"]), file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
