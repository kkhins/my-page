#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
每天从 PubMed 抓取「线虫生态毒理」相关的新文献，追加到 data.js 的 papers 数组。

用法：
    python3 scripts/update_biblio.py            # 正式写入
    python3 scripts/update_biblio.py --dry-run  # 只打印，不写入
    python3 scripts/update_biblio.py --days 8   # 回看天数（默认 8）
    python3 scripts/update_biblio.py --data data.js

设计要点：
- 只用标准库，不装依赖。
- 按 PMID 去重，已存在的一律跳过。
- 相关度打分：污染物词与毒理/衰老词同时命中才收录，宁缺毋滥。
- 标签全部由关键词规则生成，不调用任何 AI 接口。
- 抓取失败时退出码非 0，但不会破坏现有 data.js（先写临时文件再替换）。
"""

import argparse
import json
import os
import re
import sys
import tempfile
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import date, datetime, timedelta

EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
DATA_PREFIX = "window.__BIBLIO_DATA__ = "
LOOKBACK_DAYS = 8
MAX_NEW_PER_RUN = 15

# ── 标签规则（关键词 → 图谱里的 id）─────────────────────────────
ORGAN_RULES = [
    ("ph", ["pharynx", "pharyngeal", "pumping", "pump rate", "eat-2", "feeding behavior"]),
    ("in", ["intestine", "intestinal", "gut", "lipofuscin", "autofluorescence", "defecation"]),
    ("ne", ["neuron", "neuronal", "nervous", "dopaminergic", "gaba", "acetylcholinesterase",
            "ache", "chemotaxis", "neurotoxicity", "synap", "axon"]),
    ("go", ["gonad", "germline", "reproduct", "brood", "fertility", "oocyte", "sperm",
            "fecundity", "egg", "offspring"]),
    ("mu", ["muscle", "body wall", "locomot", "motility", "thrash", "movement", "bend"]),
    ("cu", ["cuticle", "hypodermis", "epidermis", "collagen", "dauer", "seam cell"]),
    ("ex", ["excretory", "canal cell", "osmoregul"]),
]

DIR_RULES = [
    ("ag", ["aging", "ageing", "lifespan", "longevity", "senescence", "age-related", "healthspan"]),
    ("rp", ["transgenerational", "multigenerational", "parental exposure", "offspring",
            "generational", "inheritance", "f1 ", "f2 ", "f3 "]),
    ("bh", ["behavior", "behaviour", "locomot", "chemotaxis", "neurotoxicity",
            "acetylcholinesterase", "ache", "dopaminergic"]),
    ("ox", ["oxidative stress", "reactive oxygen", "antioxidant", "sod", "gst", "detoxif",
            "skn-1", "nrf2", "glutathione", "lipid peroxidation", "mda"]),
    ("mt", ["method", "protocol", "guideline", "standard", "iso 10872", "assay optimization"]),
]

MARKER_RULES = {
    "lifespan": ["lifespan", "longevity", "survival curve", "kaplan"],
    "maxvel": ["maximum velocity", "maximal velocity", "max velocity"],
    "bend": ["body bend", "bending"],
    "pump": ["pump"],
    "lipofuscin": ["lipofuscin", "autofluorescence"],
    "clock": ["aging clock", "transcriptomic clock"],
    "brood": ["brood size", "brood"],
    "hatch": ["hatching", "hatch rate"],
    "apoptosis": ["apoptosis", "apoptotic"],
    "telomere": ["telomere"],
    "daf16": ["daf-16"],
    "gst4": ["gst-4"],
    "sod3": ["sod-3"],
    "ros": ["reactive oxygen", "ros level", "ros accumulation"],
    "ache": ["acetylcholinesterase", "ache activity", "ache"],
    "uptake": ["uptake", "bioaccumulation", "accumulation"],
    "osmo": ["osmoregul", "osmotic"],
    "growth": ["body length", "growth"],
    "gene": ["gene expression", "transcriptom", "mrna", "qpcr", "rna-seq"],
    "feed": ["feeding", "food intake", "pharyngeal pumping"],
    "behav": ["behavior", "behaviour", "locomotion", "chemotaxis", "thigmotaxis"],
    "biochem": ["biochemical", "enzyme activity", "lipid peroxidation", "mda"],
    "hist": ["histolog", "microscopy", "morpholog"],
}

# 污染物类别（顺序有讲究：越具体的越靠前）
POLLUTANT_RULES = [
    ("pfas", ["pfas", "pfoa", "pfos", "perfluoro", "polyfluoro"]),
    ("op", ["organophosphate", "chlorpyrifos", "malathion", "parathion", "diazinon",
            "dimethoate", "profenofos", "acephate"]),
    ("plas", ["microplastic", "nanoplastic", "polystyrene", "polyethylene", "plastic particle"]),
    ("np", ["nanoparticle", "nanomaterial", "tio2", "titanium dioxide", "silver nanoparticle",
            "graphene oxide", "zno", "quantum dot", "carbon nanotube"]),
    ("metal", ["cadmium", "arsenic", "lead", "mercury", "copper", "zinc", "chromium",
               "nickel", "heavy metal", "metals"]),
    ("pest", ["pesticide", "herbicide", "insecticide", "fungicide", "glyphosate", "atrazine",
              "imidacloprid", "neonicotinoid"]),
    ("emerg", ["bisphenol", "bpa", "flame retardant", "antibiotic", "triclosan", "pharmaceutical",
               "microcystin", "dioxin", "pah", "polychlorinated", "surfactant"]),
    ("mix", ["mixture", "combined exposure", "co-exposure", "environmental sample"]),
]

POLLUTANT_ZH = {
    "cadmium": "镉", "arsenic": "砷", "lead": "铅", "mercury": "汞", "copper": "铜",
    "zinc": "锌", "chromium": "铬", "nickel": "镍", "chlorpyrifos": "毒死蜱",
    "malathion": "马拉硫磷", "parathion": "对硫磷", "diazinon": "二嗪磷",
    "glyphosate": "草甘膦", "atrazine": "阿特拉津", "imidacloprid": "吡虫啉",
    "microplastic": "微塑料", "nanoplastic": "纳米塑料", "polystyrene": "聚苯乙烯",
    "tio2": "二氧化钛", "titanium dioxide": "二氧化钛", "silver nanoparticle": "纳米银",
    "graphene oxide": "氧化石墨烯", "zno": "氧化锌", "pfas": "PFAS", "pfoa": "PFOA",
    "pfos": "PFOS", "bisphenol": "双酚类", "bpa": "双酚A", "triclosan": "三氯生",
    "microcystin": "微囊藻毒素", "dioxin": "二噁英", "antibiotic": "抗生素",
}

# 检索词：必须同时命中「线虫」+「污染物/毒理/衰老」
TERM = (
    '("Caenorhabditis elegans"[Title/Abstract] OR "C. elegans"[Title/Abstract]) '
    'AND ('
    'pollut*[Title/Abstract] OR toxic*[Title/Abstract] OR "heavy metal"[Title/Abstract] '
    'OR cadmium[Title/Abstract] OR arsenic[Title/Abstract] OR lead[Title/Abstract] '
    'OR mercury[Title/Abstract] OR copper[Title/Abstract] OR zinc[Title/Abstract] '
    'OR chromium[Title/Abstract] OR nickel[Title/Abstract] '
    'OR pesticide*[Title/Abstract] OR herbicide*[Title/Abstract] OR insecticide*[Title/Abstract] '
    'OR microplastic*[Title/Abstract] OR nanoplastic*[Title/Abstract] '
    'OR nanoparticle*[Title/Abstract] OR nanomaterial*[Title/Abstract] '
    'OR PFAS[Title/Abstract] OR perfluoro*[Title/Abstract] OR bisphenol[Title/Abstract] '
    'OR contaminant*[Title/Abstract] OR "environmental exposure"[Title/Abstract] '
    'OR "chemical exposure"[Title/Abstract] OR "pesticide residue"[Title/Abstract]'
    ')'
)


def http_get(url, retries=3, timeout=45):
    last = None
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "biblio-updater/1.0"})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except Exception as e:  # noqa: BLE001
            last = e
            time.sleep(2 * (i + 1))
    raise RuntimeError("请求失败: %s (%s)" % (url[:120], last))


def esearch(term, retmax=200):
    q = urllib.parse.urlencode({
        "db": "pubmed", "term": term, "retmax": retmax,
        "sort": "pub date", "retmode": "json",
    })
    raw = http_get("%s/esearch.fcgi?%s" % (EUTILS, q))
    j = json.loads(raw.decode("utf-8"))
    return j.get("esearchresult", {}).get("idlist", [])


def efetch(ids):
    if not ids:
        return []
    q = urllib.parse.urlencode({
        "db": "pubmed", "id": ",".join(ids), "retmode": "xml",
    })
    return http_get("%s/efetch.fcgi?%s" % (EUTILS, q))


def text_of(node):
    if node is None:
        return ""
    return re.sub(r"\s+", " ", "".join(node.itertext())).strip()


def parse_articles(xml_bytes):
    root = ET.fromstring(xml_bytes)
    out = []
    for art in root.findall(".//PubmedArticle"):
        rec = {}
        rec["pmid"] = text_of(art.find(".//PMID"))
        rec["title"] = text_of(art.find(".//ArticleTitle"))
        rec["abstract"] = re.sub(r"\s+", " ",
                                 " ".join(text_of(t) for t in art.findall(".//AbstractText"))).strip()
        rec["journal"] = text_of(art.find(".//Journal/ISOAbbreviation")) or \
                         text_of(art.find(".//Journal/Title"))
        year = text_of(art.find(".//PubDate/Year"))
        if not year:
            md = text_of(art.find(".//ArticleDate/Year"))
            year = md or text_of(art.find(".//JournalIssue/PubDate/Year"))
        rec["year"] = year
        rec["date"] = year
        authors = art.findall(".//Author")
        rec["author_first"] = text_of(authors[0].find("LastName")) if authors else ""
        rec["author_count"] = len(authors)
        # 只认本文的 PubmedData/ArticleIdList。早先这里用 .//ArticleId，
        # 会扫到 PubmedData/ReferenceList 里**被引文献**的 DOI/PMC，而它们在文档
        # 顺序上排在后面，循环最后一次赋值就把引文 DOI 当成了本文 DOI。
        rec["doi"] = ""
        rec["pmc"] = ""
        idlist = art.find("PubmedData/ArticleIdList")
        if idlist is not None:
            for aid in idlist.findall("ArticleId"):
                kind = aid.get("IdType")
                if kind == "doi":
                    rec["doi"] = text_of(aid)
                elif kind == "pmc":
                    rec["pmc"] = text_of(aid)
        if not rec["doi"]:
            for eid in art.findall("MedlineCitation/Article/ELocationID"):
                if eid.get("EIdType") == "doi":
                    rec["doi"] = text_of(eid)
                    break
        types = [text_of(t) for t in art.findall(".//PublicationType")]
        rec["is_review"] = any("review" in t.lower() for t in types)
        out.append(rec)
    return out


def hit(text, words):
    """短词用词边界，长词用前缀匹配，避免 lead/leading、metal/metalloproteinase 误伤。"""
    for w in words:
        if len(w) <= 5:
            if re.search(r"\b" + re.escape(w) + r"\b", text):
                return True
        elif w in text:
            return True
    return False


def classify(rec):
    t = (rec["title"] + " " + rec["abstract"]).lower()

    organs = [oid for oid, words in ORGAN_RULES if hit(t, words)]
    directions = [did for did, words in DIR_RULES if hit(t, words)]
    markers = [mid for mid, words in MARKER_RULES.items() if hit(t, words)]

    pol_class, pol_word = "none", ""
    for cid, words in POLLUTANT_RULES:
        for w in words:
            if hit(t, [w]):
                pol_class, pol_word = cid, w
                break
        if pol_word:
            break

    generation = ""
    if re.search(r"\bf3\b", t):
        generation = "F3"
    elif re.search(r"\bf2\b", t):
        generation = "F2"
    elif re.search(r"\bf1\b", t):
        generation = "F1"
    if "transgenerational" in t or "multigenerational" in t:
        generation = "跨代" if re.search(r"\bf[123]\b", t) else "跨代（推断）"

    return organs, directions, markers, pol_class, pol_word, generation


POLLUTANT_ALL = [w for _, ws in POLLUTANT_RULES for w in ws] + ["pollut"]


def relevance(rec):
    """必须有污染物命中；再看暴露语境与毒理/衰老语境，宁缺毋滥。"""
    t = (rec["title"] + " " + rec["abstract"]).lower()
    if "elegans" not in t:
        return 0
    if not hit(t, POLLUTANT_ALL):
        return 0
    score = 0
    if hit(t, ["exposure", "dose", "doses", "concentration", "toxicity", "toxic", "lethal",
               "sublethal", "pollution", "pollutant", "contaminat", "bioaccumul", "accumulat"]):
        score += 2
    if "elegans" in rec["title"].lower():
        score += 1
    if hit(t, ["aging", "ageing", "lifespan", "longevity", "senescence", "transgenerational",
               "multigenerational", "reproduct", "offspring", "behavior", "locomotion",
               "oxidative", "stress", "intestine", "gut", "neuron", "muscle", "germline",
               "brood", "fitness", "development"]):
        score += 1
    return score


def load_data(path):
    s = open(path, encoding="utf-8").read()
    if not s.startswith(DATA_PREFIX):
        raise SystemExit("data.js 格式不对，应以 %r 开头" % DATA_PREFIX)
    body = s[len(DATA_PREFIX):].strip()
    if body.endswith(";"):
        body = body[:-1]
    return json.loads(body)


def build_paper(rec, added):
    organs, directions, markers, pol_class, pol_word, gen = classify(rec)
    names = {"ph": "咽", "in": "肠道", "ne": "神经系统", "go": "性腺与子宫",
             "mu": "体壁肌", "cu": "表皮与角质层", "ex": "排泄系统"}
    dir_names = {"ag": "衰老", "rp": "生殖与子代（跨代）", "bh": "神经行为",
                 "ox": "氧化应激与解毒", "mt": "方法与标准"}
    pol_name = POLLUTANT_ZH.get(pol_word, pol_word or "—")
    summary = ""
    if rec["abstract"]:
        summary = "[自动收录] " + rec["abstract"][:180]
    pmid = rec["pmid"]
    doi = rec["doi"]
    return {
        "id": pmid,
        "pmid": pmid,
        "title": rec["title"],
        "authors": (rec["author_first"] + " 等") if rec["author_first"] else "",
        "author_first": rec["author_first"],
        "author_count": rec["author_count"],
        "journal": rec["journal"],
        "date": rec["date"],
        "year": int(rec["year"]) if rec["year"].isdigit() else 0,
        "url": "https://pubmed.ncbi.nlm.nih.gov/%s/" % pmid,
        "doi": doi,
        "doi_url": ("https://doi.org/" + doi) if doi else "",
        "abstract": rec["abstract"],
        "summary_zh": summary,
        "organ": organs,
        "organ_names": [names.get(o, o) for o in organs],
        "directions": directions,
        "markers": markers,
        "pollutant_class": pol_class,
        "pollutant": pol_name,
        "generation": gen,
        "is_review": bool(rec["is_review"]),
        "is_key": False,
        "source": "auto",
        "tags": [dir_names[d] for d in directions],
        "added": added,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--days", type=int, default=LOOKBACK_DAYS)
    ap.add_argument("--data", default="data.js")
    ap.add_argument("--max", type=int, default=MAX_NEW_PER_RUN)
    args = ap.parse_args()

    data = load_data(args.data)
    existing = {str(p.get("id")) for p in data.get("papers", [])}
    today = date.today()
    since = today - timedelta(days=args.days)
    term = TERM + (' AND ("%s"[EDAT] : "3000"[EDAT])' % since.isoformat().replace("-", "/"))

    ids = esearch(term)
    print("PubMed 命中 %d 条（%s 起）" % (len(ids), since.isoformat()), file=sys.stderr)
    fresh = [i for i in ids if i not in existing]
    print("其中 PMID 未收录 %d 条" % len(fresh), file=sys.stderr)

    # 分批 efetch
    recs = []
    for k in range(0, len(fresh), 50):
        recs.extend(parse_articles(efetch(fresh[k:k + 50])))

    scored = [(relevance(r), r) for r in recs]
    scored = [(s, r) for s, r in scored if s >= 3]
    scored.sort(key=lambda x: -x[0])

    new_papers = [build_paper(r, today.isoformat()) for s, r in scored[:args.max]]
    print("相关度过滤后收录 %d 篇" % len(new_papers), file=sys.stderr)

    for p in new_papers:
        print("- %s  %s  [%s/%s]" % (p["id"], p["title"][:70], p["pollutant_class"],
                                     ",".join(p["organ"]) or "-"))

    if args.dry_run:
        print("（dry-run，不写入）", file=sys.stderr)
        return 0

    data["papers"].extend(new_papers)
    # 无论本次有没有新文献，都记录巡检时间，页面据此显示「数据更新至」
    data.setdefault("meta", {})["last_run"] = datetime.now().strftime("%Y-%m-%d %H:%M")
    body = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    fd, tmp = tempfile.mkstemp(dir=os.path.dirname(os.path.abspath(args.data)) or ".", suffix=".js")
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        f.write(DATA_PREFIX + body + ";\n")
    os.replace(tmp, args.data)
    print("已写入 %s，新增 %d 篇，共 %d 篇" % (args.data, len(new_papers), len(data["papers"])),
          file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
