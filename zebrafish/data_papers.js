/* 文献数据：全部来自 PubMed（NCBI E-utilities），字段由 tools/merge_annot.py 生成。
 * 共 445 篇（其中 15 篇为每日自动收录，中文要点取摘要首句，待人工复核）；zh 依据摘要人工/模型标注，摘要无结果时为空字符串。
 * DOI 均经 https://doi.org/ 逐条解析验证（见 work/doi_check.json）。
 */
window.PAPERS_META = {"last_run": "2026-11-10 09:45"};
window.PAPERS = [
 {
  "pmid": "41780485",
  "title": "Fipronil-based insecticide induces developmental toxicity and skeletal deformities in zebrafish (Danio rerio).",
  "author1": "Mamboungou",
  "nAuthors": 4,
  "journal": "Aquat Toxicol",
  "year": 2026,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "bh",
   "cv"
  ],
  "marks": [
   "surv",
   "morph",
   "len"
  ],
  "polClass": "pest",
  "polName": "氟虫腈",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "5–100 µg/L 氟虫腈制剂暴露 168 h 显著提高死亡率、降低孵化率，并引起神经与心脏毒性及骨骼结构缺失。",
  "doi": "10.1016/j.aquatox.2026.107770"
 },
 {
  "pmid": "42501522",
  "title": "Assay conditions matter: plate material and pH alter lithium responses in zebrafish embryos.",
  "author1": "Geuer",
  "nAuthors": 5,
  "journal": "Aquat Toxicol",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "dv"
  ],
  "marks": [
   "conc",
   "gene"
  ],
  "polClass": "metal",
  "polName": "锂",
  "stage": [
   "lar"
  ],
  "zh": "聚丙烯板中锂回收率高于聚苯乙烯板，pH 6 时高浓度锂致运动反应下降更强；锂形态分布不变且未见发育与畸形改变，提示试验材料与 pH 影响结果。",
  "doi": "10.1016/j.aquatox.2026.107946"
 },
 {
  "pmid": "42047700",
  "title": "Pesticide bioavailability, bioaccumulation, and bioconcentration in zebrafish: a critical review with emphasis on methodological inadequacies.",
  "author1": "Pamanji",
  "nAuthors": 2,
  "journal": "Arch Toxicol",
  "year": 2026,
  "review": true,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "body",
   "conc"
  ],
  "polClass": "pest",
  "polName": "农药",
  "stage": [],
  "zh": "斑马鱼农药 BCF 跨越四个数量级，草甘膦小于 2、虫螨腈大于 1300，幼鱼数据不能外推成鱼，生物转化可使内暴露降低 5–90 倍。",
  "doi": "10.1007/s00204-026-04389-w"
 },
 {
  "pmid": "42595017",
  "title": "Ibogaine as a double-edged sword: Developmental cardiotoxicity and neurobehavioral alterations in zebrafish.",
  "author1": "de Oliveira",
  "nAuthors": 5,
  "journal": "Behav Brain Res",
  "year": 2026,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "bh"
  ],
  "marks": [
   "hr",
   "edema",
   "dive"
  ],
  "polClass": "emerg",
  "polName": "伊博格碱",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "伊博格碱在 100 ng/mL 即致胚胎心动过缓、500 ng/mL 出现心包水肿，同时改变胚胎运动活性与仔鱼探索行为，行为改变阈值低于形态毒性。",
  "doi": "10.1016/j.bbr.2026.116429"
 },
 {
  "pmid": "41968204",
  "title": "Zebrafish Model Reveals Early Electrocardiographic and Molecular Signatures of Doxorubicin-Induced Cardiotoxicity.",
  "author1": "Lai",
  "nAuthors": 8,
  "journal": "Cardiovasc Toxicol",
  "year": 2026,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "mt"
  ],
  "marks": [
   "avb",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "阿霉素",
  "stage": [
   "adu"
  ],
  "zh": "阿霉素使成鱼心室扩大、心肌纤维紊乱、肌钙蛋白I升高，ECG 呈剂量依赖 PR 与 QRS 延长，PR 间期可作早期传导损伤指标，scn5lab、cx43 表达随之改变。",
  "doi": "10.1007/s12012-026-10113-y",
  "pmc": "PMC13070985"
 },
 {
  "pmid": "41265543",
  "title": "Polystyrene microplastics and nanoplastics induce neurotoxicity in zebrafish via oxidative stress and neurotransmitter disruption.",
  "author1": "Li",
  "nAuthors": 7,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "coil",
   "morph",
   "hr",
   "len",
   "ntx"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯微塑料、聚苯乙烯纳米颗粒",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "PS 微/纳米塑料致脊柱弯曲与心包水肿，仔鱼自发卷曲减少、光刺激下过度活跃，多巴胺与乙酰胆碱等递质水平下降。",
  "doi": "10.1016/j.cbpc.2025.110397"
 },
 {
  "pmid": "42806154",
  "title": "UHRF1 overexpression generates distinct senescent states with different Tp53 dependencies.",
  "author1": "Magnani",
  "nAuthors": 7,
  "journal": "EMBO Rep",
  "year": 2026,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "sabg",
   "meth",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "斑马鱼肝细胞过表达 UHRF1 经 DNA 损伤与甲基化重塑诱导 atm/tp53 依赖衰老，单细胞测序揭示两类衰老细胞对 tp53 与 navitoclax 反应不同。",
  "doi": "10.1038/s44319-026-00941-y",
  "pmc": "PMC13743750"
 },
 {
  "pmid": "42119383",
  "title": "Polygonatum sibiricum polysaccharides mitigate bisphenol S-induced thyroid endocrine disruption and neurodevelopment toxicity in zebrafish larvae.",
  "author1": "Guo",
  "nAuthors": 8,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2026,
  "review": false,
  "organs": [
   "ey",
   "th"
  ],
  "dirs": [
   "ed",
   "bh",
   "dv"
  ],
  "marks": [
   "th",
   "ntx",
   "eyesize",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚S、黄精多糖",
  "stage": [
   "lar"
  ],
  "zh": "双酚S 扰乱仔鱼甲状腺激素与 HPT 轴、单胺类递质，致眼径减小、视网膜变薄与运动异常；黄精多糖可逆转上述内分泌与神经眼毒性。",
  "doi": "10.1016/j.ecoenv.2026.120242"
 },
 {
  "pmid": "41706324",
  "title": "Chlorpyrifos causes histopathological changes and modulates vitellogenin levels in zebrafish (Danio rerio).",
  "author1": "Öztürk",
  "nAuthors": 6,
  "journal": "Ecotoxicology",
  "year": 2026,
  "review": false,
  "organs": [
   "gi",
   "li",
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "vtg",
   "hist",
   "sperm"
  ],
  "polClass": "op",
  "polName": "毒死蜱",
  "stage": [
   "adu"
  ],
  "zh": "10 与 100 µg/L 毒死蜱 24 h 与 7 天使雄鱼卵黄蛋白原显著升高，并致鳃上皮增生脱落、肝淤血水样变与睾丸退化精子减少。",
  "doi": "10.1007/s10646-025-03016-1"
 },
 {
  "pmid": "42492427",
  "title": "Parental ochratoxin A exposure induces multigenerational and transgenerational neurotoxicity and visual impairment in zebrafish.",
  "author1": "Li",
  "nAuthors": 11,
  "journal": "Environ Int",
  "year": 2026,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "rp",
   "bh",
   "dv"
  ],
  "marks": [
   "meth",
   "ntx",
   "shoal",
   "eyesize"
  ],
  "polClass": "emerg",
  "polName": "赭曲霉毒素A",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "亲代赭曲霉毒素A 暴露致未暴露 F1 仔鱼多巴胺、5-羟色胺与去甲肾上腺素下降，泳速升高伴焦虑与社交缺陷、晶状体变小；F2 社交与视觉损伤加重。",
  "doi": "10.1016/j.envint.2026.110428",
  "gen": "F2"
 },
 {
  "pmid": "42520495",
  "title": "Nanoplastics disrupt thyroid hormone homeostasis and neurodevelopment in zebrafish: a systems-level assessment.",
  "author1": "Iglesias-Hernandez",
  "nAuthors": 7,
  "journal": "Environ Int",
  "year": 2026,
  "review": false,
  "organs": [
   "th",
   "ey"
  ],
  "dirs": [
   "ed",
   "dv",
   "bh"
  ],
  "marks": [
   "th",
   "eyesize",
   "morph",
   "hr",
   "edema"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯纳米塑料",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "0.01 mg/L 起即致仔鱼 TSH、T4、T3 下降与 tshb 下调，伴色素减少、眼与耳石发育受损、心动过缓与心包水肿。",
  "doi": "10.1016/j.envint.2026.110434"
 },
 {
  "pmid": "41643984",
  "title": "Trichloroethylene induces cardiomyocyte senescence through an AhR-ROS-IL-1 axis and amplified by Wnt/β-catenin suppression.",
  "author1": "Feng",
  "nAuthors": 9,
  "journal": "Environ Pollut",
  "year": 2026,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ag",
   "ox"
  ],
  "marks": [
   "sabg",
   "ros",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "三氯乙烯",
  "stage": [
   "lar"
  ],
  "zh": "60 µg/L 三氯乙烯经 AhR–ROS–ATM 轴并抑制 Wnt/β-catenin 引发心肌细胞衰老与 IL-1 炎症环，斑马鱼仔鱼在体验证 p53/p21 通路。",
  "doi": "10.1016/j.envpol.2026.127741"
 },
 {
  "pmid": "41961730",
  "title": "An Integrated Approach Combining Regulatory Tests in tg(cyp19a1b:GFP) Zebrafish Embryos to Assess Toxicity, Developmental Effects, and Estrogenic Activity of Chemicals: A Case Study with Bisphenol A Substitutes.",
  "author1": "Geffroy",
  "nAuthors": 12,
  "journal": "Environ Sci Technol",
  "year": 2026,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "mt",
   "ed",
   "dv"
  ],
  "marks": [
   "morph",
   "arom",
   "gene",
   "surv"
  ],
  "polClass": "edc",
  "polName": "双酚A及其替代物",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "联合 FET 与 EASZY 显示多种双酚替代物毒性高于 BPA 并致畸，除 TCBPA 外均激活胚胎脑芳香化酶，雌激素活性多更强。",
  "doi": "10.1021/acs.est.5c17875",
  "pmc": "PMC13130965"
 },
 {
  "pmid": "42975500",
  "title": "Paternal Preconception Calcitriol Intervention Rescued DBDPE-Induced Transgenerational Developmental and Visual Toxicity in Zebrafish.",
  "author1": "Zhang",
  "nAuthors": 12,
  "journal": "Environ Sci Technol",
  "year": 2026,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "rp",
   "dv"
  ],
  "marks": [
   "sperm",
   "morph",
   "eyesize",
   "gene",
   "f1"
  ],
  "polClass": "emerg",
  "polName": "十溴二苯乙烷",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "父系十溴二苯乙烷暴露损害 F0 精子质量，致 F2 仔鱼畸形与眼畸形、视网膜变薄及光转导基因紊乱；补充骨化三醇可恢复精子质量并减轻子代视觉毒性。",
  "doi": "10.1021/acs.est.6c09071",
  "gen": "F2"
 },
 {
  "pmid": "41804872",
  "title": "Modeling diseases of aging in larval zebrafish, a paradoxical yet powerful strategy.",
  "author1": "Özcan",
  "nAuthors": 2,
  "journal": "Genetics",
  "year": 2026,
  "review": true,
  "organs": [
   "br"
  ],
  "dirs": [
   "mt",
   "ag",
   "bh"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "提出以斑马鱼仔鱼结合 CRISPR、高通量行为测试与全脑活动成像，在神经退行性变临床前期捕捉衰老相关功能改变。",
  "doi": "10.1093/genetics/iyag027",
  "pmc": "PMC13050203"
 },
 {
  "pmid": "42217922",
  "title": "Environmentally relevant concentrations of tris(2-chloroethyl) phosphate disrupt zebrafish hypothalamus-pituitary-gonad-liver axis and transgenerational reproduction.",
  "author1": "Qiao",
  "nAuthors": 5,
  "journal": "J Environ Sci (China)",
  "year": 2026,
  "review": false,
  "organs": [
   "go",
   "li"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "vtg",
   "steroid",
   "fec",
   "f1"
  ],
  "polClass": "emerg",
  "polName": "磷酸三(2-氯乙基)酯",
  "stage": [
   "zyg",
   "lar",
   "juv",
   "adu"
  ],
  "zh": "0.2–200 µg/L TCEP 暴露 120 天致生长抑制、性激素与 VTG 失衡、性比偏雌、产卵减少及 F1 发育受损，呈倒 U 形。",
  "doi": "10.1016/j.jes.2025.08.015",
  "gen": "F1"
 },
 {
  "pmid": "42680396",
  "title": "Early-life exposure to flusilazole causes transgenerational cardiac developmental defects in zebrafish and its potential causes.",
  "author1": "Wang",
  "nAuthors": 5,
  "journal": "J Environ Sci (China)",
  "year": 2026,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "rp"
  ],
  "marks": [
   "avb",
   "vasc",
   "gene"
  ],
  "polClass": "pest",
  "polName": "氟硅唑",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "氟硅唑暴露使 F0 与 F1 仔鱼均出现心律失常和血流加快，心肌细胞凋亡增强、心脏发育与钙稳态基因上调，具跨代心脏毒性。",
  "doi": "10.1016/j.jes.2026.01.060",
  "gen": "F1"
 },
 {
  "pmid": "42680431",
  "title": "Avermectin induces developmental toxicity and immunotoxicity in zebrafish larvae.",
  "author1": "Wang",
  "nAuthors": 9,
  "journal": "J Environ Sci (China)",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "hr",
   "morph",
   "edema",
   "gene"
  ],
  "polClass": "pest",
  "polName": "阿维菌素",
  "stage": [
   "hat",
   "lar"
  ],
  "zh": "阿维菌素 0.15–0.60 µg/mL 致心率下降、脊柱弯曲与水肿，减少中性粒细胞、T 细胞与巨噬细胞，并上调 NO、TNF-α、IL-1β、IL-6 激活 TLR4/MyD88/NF-κB 通路。",
  "doi": "10.1016/j.jes.2026.03.025"
 },
 {
  "pmid": "42822925",
  "title": "Transgenerational and endocrine-disrupting effects of polylactic acid MPs and bisphenol TMC in zebrafish: A sex-specific study.",
  "author1": "Gao",
  "nAuthors": 5,
  "journal": "J Environ Sci (China)",
  "year": 2026,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "steroid",
   "f1",
   "hr",
   "len",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚TMC、聚乳酸微塑料",
  "stage": [
   "adu"
  ],
  "zh": "双酚TMC 使雄鱼 E2 升高、雌鱼 E2 下降并显著降低雄鱼睾酮，F1 死亡与畸形增加、心率与体长下降；聚乳酸微塑料吸附使其水相浓度降低 35% 而减轻毒性。",
  "doi": "10.1016/j.jes.2025.12.031",
  "gen": "F1"
 },
 {
  "pmid": "41192695",
  "title": "ShengHui Decoction mitigates oxidative stress and neuroinflammation in AlCl3-induced AD zebrafish via activating Nrf2/HO-1 and inhibiting NF-κB signaling pathway.",
  "author1": "Kong",
  "nAuthors": 7,
  "journal": "J Ethnopharmacol",
  "year": 2026,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "gene",
   "mda",
   "hist"
  ],
  "polClass": "metal",
  "polName": "氯化铝",
  "stage": [
   "adu"
  ],
  "zh": "参慧汤激活 Nrf2/HO-1、抑制 NF-κB，降低 AlCl3 斑马鱼脑 MDA 与 TNF-α、IL-6 水平，改善认知与 Aβ 沉积。",
  "doi": "10.1016/j.jep.2025.120785"
 },
 {
  "pmid": "41297726",
  "title": "Quansanqi (derived from Panax notoginseng (Burk.) F. H. Chen) tablets extend the lifespan and ameliorate cellular inflammaging via regulating CD38 and senescence-associated secretory phenotype.",
  "author1": "Guo",
  "nAuthors": 13,
  "journal": "J Ethnopharmacol",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [
   "lifespan",
   "sabg"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "三七全株提取物 PSQ 在酵母、线虫与小鼠延长寿命，并降低 H2O2 衰老斑马鱼 p16、p21、p53 与 β-gal，机制涉及抑制 CD38 与 SASP。",
  "doi": "10.1016/j.jep.2025.120959"
 },
 {
  "pmid": "41371140",
  "title": "Developmental and multi-organ toxicity of fludioxonil in zebrafish through apoptosis, oxidative stress, and mitochondrial dysfunction.",
  "author1": "Kim",
  "nAuthors": 8,
  "journal": "J Hazard Mater",
  "year": 2026,
  "review": false,
  "organs": [
   "he",
   "br",
   "li"
  ],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "morph",
   "ros"
  ],
  "polClass": "pest",
  "polName": "咯菌腈",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "咯菌腈降低存活并致多器官毒性：心血管发育受损、神经发育紊乱与脑结构改变、肝胰发育异常，机制涉及 DNA 断裂、ROS 升高与线粒体功能障碍。",
  "doi": "10.1016/j.jhazmat.2025.140748"
 },
 {
  "pmid": "41512756",
  "title": "Mechanisms of D‑tetramethrin‑induced neurotoxicity and locomotor abnormalities in zebrafish embryos revealed by transcriptomic analysis.",
  "author1": "Xie",
  "nAuthors": 9,
  "journal": "J Hazard Mater",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ox",
   "dv"
  ],
  "marks": [
   "escape",
   "vmr",
   "ache",
   "ntx",
   "ros"
  ],
  "polClass": "pest",
  "polName": "胺菊酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "胺菊酯降低仔鱼 AChE 与 ATPase 活性及 GABA 水平，削弱触碰与光暗反应，并使 ROS 与 MDA 升高、抗氧化酶下降。",
  "doi": "10.1016/j.jhazmat.2026.141082"
 },
 {
  "pmid": "42139782",
  "title": "Benzo[a]pyrene induces non-alcoholic fatty liver disease by exacerbating hepatic senescence and disrupting gut-liver axis in zebrafish.",
  "author1": "Shu",
  "nAuthors": 9,
  "journal": "J Hazard Mater",
  "year": 2026,
  "review": false,
  "organs": [
   "li",
   "gu"
  ],
  "dirs": [
   "ag",
   "ox"
  ],
  "marks": [
   "hist",
   "gene",
   "sabg"
  ],
  "polClass": "pah",
  "polName": "苯并[a]芘",
  "stage": [
   "adu"
  ],
  "zh": "环境相关浓度苯并[a]芘暴露四周经 AHR 通路加重肝细胞衰老与脂质蓄积，并破坏肠屏障与菌群、升高 LPS 激活肠肝轴。",
  "doi": "10.1016/j.jhazmat.2026.142365"
 },
 {
  "pmid": "42430924",
  "title": "Co-exposure to lead and copper induces ferroptosis-related neurotoxicity in zebrafish larvae via oxidative stress and mitochondrial dysfunction.",
  "author1": "Samra",
  "nAuthors": 11,
  "journal": "J Hazard Mater",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "ache",
   "ros",
   "mda",
   "gene",
   "morph"
  ],
  "polClass": "metal",
  "polName": "铅、铜",
  "stage": [
   "lar"
  ],
  "zh": "10 μg/L 铅与 20 μg/L 铜共暴露抑制 AChE、升高脂质过氧化并激活铁死亡，致仔鱼运动减弱与发育畸形。",
  "doi": "10.1016/j.jhazmat.2026.142954"
 },
 {
  "pmid": "42223444",
  "title": "Trifloxystrobin-triggered Drp1 hyperactivation biases mitophagy and imposes long-lasting SVCV susceptibility in teleost.",
  "author1": "Wang",
  "nAuthors": 4,
  "journal": "J Virol",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "ox"
  ],
  "marks": [],
  "polClass": "pest",
  "polName": "肟菌酯",
  "stage": [],
  "zh": "2.5–25 µg/L 肟菌酯经 Drp1 Ser616 磷酸化过度激活线粒体自噬，撤除后仍持续削弱抗病毒能力，提高 SVCV 易感。",
  "doi": "10.1128/jvi.00445-26",
  "pmc": "PMC13288995"
 },
 {
  "pmid": "42346423",
  "title": "Exposure to Glyphosate and Chlorpyrifos Induces Oxidative Stress, Potentially Impacting Sex Determination in Zebrafish (Danio rerio).",
  "author1": "Arias-Camacho",
  "nAuthors": 8,
  "journal": "J Xenobiot",
  "year": 2026,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ox",
   "ed"
  ],
  "marks": [
   "mda",
   "gene",
   "hist",
   "sexratio",
   "surv"
  ],
  "polClass": "op",
  "polName": "草甘膦、毒死蜱",
  "stage": [
   "zyg",
   "lar",
   "juv",
   "adu"
  ],
  "zh": "草甘膦与毒死蜱单用及联合均升高丙二醛，草甘膦致更多未分化个体，毒死蜱改变 amh 表达，联合降低存活并使性比偏雄。",
  "doi": "10.3390/jox16030101",
  "pmc": "PMC13301101"
 },
 {
  "pmid": "41492641",
  "title": "Combined exposure to titanium nanoparticles and nanoplastics damages the male reproductive system and sperm activity.",
  "author1": "Xiang",
  "nAuthors": 8,
  "journal": "Mater Today Bio",
  "year": 2026,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp"
  ],
  "marks": [
   "sperm",
   "steroid",
   "f1",
   "gene"
  ],
  "polClass": "plas",
  "polName": "二氧化钛、纳米聚苯乙烯",
  "stage": [
   "adu"
  ],
  "zh": "二氧化钛纳米颗粒与纳米塑料共暴露 30 天在精巢蓄积，降低雄鱼第二性征、性激素与精子质量，并加重子代发育毒性，涉及 PPARγ/RIPK3 凋亡通路。",
  "doi": "10.1016/j.mtbio.2025.102665",
  "pmc": "PMC12765340",
  "gen": "F1"
 },
 {
  "pmid": "41448279",
  "title": "Power calculations for larval zebrafish in light-dark transition test for developmental neurotoxicity.",
  "author1": "Konrad",
  "nAuthors": 16,
  "journal": "Neurotoxicology",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "vmr"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "基于四实验室光暗转换数据的功效计算显示，Movement Similarity 与 Distance Change 终点变异最低，达 80% 功效通常仅需 8–32 个样本。",
  "doi": "10.1016/j.neuro.2025.103371",
  "pmc": "PMC12776591"
 },
 {
  "pmid": "42493050",
  "title": "Dimefluthrin-induced multigenerational endocrine toxicity in zebrafish (Danio rerio) offspring via parental exposure.",
  "author1": "Wang",
  "nAuthors": 7,
  "journal": "Pestic Biochem Physiol",
  "year": 2026,
  "review": false,
  "organs": [
   "go",
   "th"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "fec",
   "th",
   "steroid",
   "f1",
   "hist"
  ],
  "polClass": "pest",
  "polName": "四氟甲醚菊酯",
  "stage": [
   "adu"
  ],
  "zh": "长期低剂量四氟甲醚菊酯致成鱼体况异常、性腺结构损伤与交配行为异常；子代产卵量、受精率、孵化率与存活率下降，HPT、HPA 与 HPG 三轴激素紊乱。",
  "doi": "10.1016/j.pestbp.2026.107239",
  "gen": "F1"
 },
 {
  "pmid": "42919549",
  "title": "Effects of fenpropathrin on adult zebrafish reproduction and offspring development.",
  "author1": "Li",
  "nAuthors": 7,
  "journal": "Pestic Biochem Physiol",
  "year": 2026,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp"
  ],
  "marks": [
   "fec",
   "hist",
   "sperm",
   "gene",
   "f1"
  ],
  "polClass": "pest",
  "polName": "甲氰菊酯",
  "stage": [
   "adu"
  ],
  "zh": "28 天甲氰菊酯暴露使雌鱼未成熟卵母细胞增多、雄鱼精子细胞减少，性腺凋亡升高、HPG 轴紊乱；F1 幼鱼生长与行为受损，F2 未见显著差异。",
  "doi": "10.1016/j.pestbp.2026.107353",
  "gen": "F1"
 },
 {
  "pmid": "41496214",
  "title": "Multi-organ toxicity via oxidative stress and disrupting mitochondrial plasticity induced by bendiocarb in zebrafish.",
  "author1": "Seomoon",
  "nAuthors": 8,
  "journal": "Redox Biol",
  "year": 2026,
  "review": false,
  "organs": [
   "he",
   "li",
   "br"
  ],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "morph",
   "ros",
   "gene",
   "vasc"
  ],
  "polClass": "pest",
  "polName": "恶虫威",
  "stage": [
   "lar"
  ],
  "zh": "恶虫威降低仔鱼存活并致多器官毒性，心管血流受损、肝胰与神经元发育异常，伴 ROS 升高与线粒体复合物基因下调。",
  "doi": "10.1016/j.redox.2025.104001",
  "pmc": "PMC12810503"
 },
 {
  "pmid": "42674148",
  "title": "Translating zebrafish science into regulatory utility: A critical gap analysis of OECD test guidelines.",
  "author1": "Pamanji",
  "nAuthors": 1,
  "journal": "Regul Toxicol Pharmacol",
  "year": 2026,
  "review": true,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "系统评估斑马鱼相关 OECD 指南（TG 203/210/236/250 等）在绒毛膜通透性、神经毒性与甲状腺轴覆盖等方面的缺口，并提出逐项改进建议。",
  "doi": "10.1016/j.yrtph.2026.106227"
 },
 {
  "pmid": "39921881",
  "title": "Development of a Short Telomere Zebrafish Model for Accelerated Aging Research and Antiaging Drug Screening.",
  "author1": "Hernández-Silva",
  "nAuthors": 6,
  "journal": "Aging Cell",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ag",
   "mt"
  ],
  "marks": [
   "telo",
   "lifespan",
   "sabg"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "短端粒 ST2 品系仔鱼端粒酶活性降低、端粒缩短，出现细胞衰老与早死；白藜芦醇改善端粒维持而 navitoclax 无效。",
  "doi": "10.1111/acel.70007",
  "pmc": "PMC12151894"
 },
 {
  "pmid": "40995852",
  "title": "Muscle Regeneration Can Be Rescued in a Telomerase Deficient Zebrafish Model of Ageing by MMP Inhibition.",
  "author1": "Yuan",
  "nAuthors": 3,
  "journal": "Aging Cell",
  "year": 2025,
  "review": false,
  "organs": [
   "mu"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "regen"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "tert 突变仔鱼损伤后肌卫星细胞迁移与增殖受损，抑制 MMP9/13 或清除巨噬细胞可部分恢复再生能力。",
  "doi": "10.1111/acel.70238",
  "pmc": "PMC12608090"
 },
 {
  "pmid": "41147684",
  "title": "Telomerase Depletion Accelerates Ageing of the Zebrafish Brain.",
  "author1": "Martins",
  "nAuthors": 18,
  "journal": "Aging Cell",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "ag",
   "bh"
  ],
  "marks": [
   "sabg",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "端粒酶缺失（tert-/-）加速斑马鱼脑衰老，衰老标志与炎症在非增殖区亦累积，伴血脑屏障通透性升高与焦虑样行为增强。",
  "doi": "10.1111/acel.70280",
  "pmc": "PMC12686574"
 },
 {
  "pmid": "39655654",
  "title": "Rapid determination of chemical losses in a microplate bioassay using fluorescence spectroscopy.",
  "author1": "Huizenga",
  "nAuthors": 3,
  "journal": "Anal Methods",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "conc",
   "morph"
  ],
  "polClass": "none",
  "polName": "2-羟基萘、吖啶",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "荧光光谱可在 96 孔板中快速定量 2-羟基萘与吖啶的水相浓度，测得胚胎摄取分别约占总投加量 50% 与 21%。",
  "doi": "10.1039/d4ay01980f",
  "pmc": "PMC11806944"
 },
 {
  "pmid": "39799758",
  "title": "Developmental and neurotoxic effects of dimethyl phthalate on zebrafish embryos and larvae.",
  "author1": "Yang",
  "nAuthors": 8,
  "journal": "Aquat Toxicol",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "morph",
   "coil",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "邻苯二甲酸二甲酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "25–50 mg/L DMP 降低孵化率与存活、致脊柱弯曲与心包水肿，24 hpf 自发卷曲增多、120 hpf 游距缩短并下调 gap43、mbp 等基因。",
  "doi": "10.1016/j.aquatox.2025.107241"
 },
 {
  "pmid": "40983052",
  "title": "Endocrine effects of Imazalil on aromatase expression, vitellogenesis and ovarian histology using cyp19a1a-eGFP-casper transgenic zebrafish.",
  "author1": "De Oliveira",
  "nAuthors": 14,
  "journal": "Aquat Toxicol",
  "year": 2025,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "mt"
  ],
  "marks": [
   "arom",
   "vtg",
   "steroid",
   "hist"
  ],
  "polClass": "pest",
  "polName": "抑霉唑",
  "stage": [
   "adu"
  ],
  "zh": "140.7 µg/L 抑霉唑 21 天使雌鱼 E2 与卵黄蛋白原下降、大卵母细胞堆积，卵巢 cyp19a1a 先升后维持，示芳香化酶抑制的补偿。",
  "doi": "10.1016/j.aquatox.2025.107580"
 },
 {
  "pmid": "40996552",
  "title": "Microplastics and Copper Affect Zebrafish Behavior and Responses to Predation Threat.",
  "author1": "Al Jabri",
  "nAuthors": 4,
  "journal": "Arch Environ Contam Toxicol",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "body",
   "gene"
  ],
  "polClass": "metal",
  "polName": "铜、聚乙烯",
  "stage": [
   "adu"
  ],
  "zh": "老化聚乙烯微塑料降低斑马鱼游速并改变其对同类警报物质的反应，大粒径微塑料还提高铜蓄积与金属硫蛋白诱导。",
  "doi": "10.1007/s00244-025-01160-7"
 },
 {
  "pmid": "40239885",
  "title": "Developmental and organ toxicity of fenpropimorph in zebrafish: Involvement of apoptosis and inflammation.",
  "author1": "Kweon",
  "nAuthors": 8,
  "journal": "Chem Biol Interact",
  "year": 2025,
  "review": false,
  "organs": [
   "li",
   "br"
  ],
  "dirs": [
   "dv",
   "cv"
  ],
  "marks": [
   "surv",
   "len",
   "vasc",
   "gene"
  ],
  "polClass": "pest",
  "polName": "苯锈啶",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "苯锈啶降低斑马鱼胚胎存活率并缩小头与体长，引起血管网络异常、肝缩小及凋亡与炎症反应。",
  "doi": "10.1016/j.cbi.2025.111512"
 },
 {
  "pmid": "40132347",
  "title": "Developmental toxicity of formulated insecticide mixture containing imidacloprid and beta-cyfluthrin in fish: Insights using zebrafish.",
  "author1": "Pitombeira de Figueirêdo",
  "nAuthors": 5,
  "journal": "Chemosphere",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "coil",
   "hr",
   "morph"
  ],
  "polClass": "pest",
  "polName": "吡虫啉、高效氯氟氰菊酯",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "吡虫啉与高效氯氟氰菊酯混合制剂在最高浓度致 50% 死亡，低浓度即致心动过速与提前孵化，高浓度致卵黄囊与心包水肿、脊柱改变及软骨骨化缺失。",
  "doi": "10.1016/j.chemosphere.2025.144314"
 },
 {
  "pmid": "39694813",
  "title": "Telomere Dynamics in Zebrafish Aging and Disease.",
  "author1": "Ferreira",
  "nAuthors": 1,
  "journal": "Cold Spring Harb Perspect Biol",
  "year": 2025,
  "review": true,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [
   "telo"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "斑马鱼端粒动态与人类相近，单一组织端粒缩短可经生物网络扩散引起多器官功能障碍，是研究端粒与组织对话的关键模型。",
  "doi": "10.1101/cshperspect.a041696",
  "pmc": "PMC11960697"
 },
 {
  "pmid": "39653098",
  "title": "Impacts of an environmental ototoxic pollutant on fish fighting behaviors.",
  "author1": "Horng",
  "nAuthors": 4,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "hair",
   "shoal"
  ],
  "polClass": "emerg",
  "polName": "新霉素",
  "stage": [
   "adu"
  ],
  "zh": "新霉素损毁侧线毛细胞后斑马鱼打斗获胜次数与持续时间减少、焦虑与咬击增加，但社会偏好与适合度未变。",
  "doi": "10.1016/j.cbpc.2024.110103"
 },
 {
  "pmid": "39864716",
  "title": "Reproductive toxicity and transgenerational effects of co-exposure to polystyrene microplastics and arsenic in zebrafish.",
  "author1": "Luo",
  "nAuthors": 10,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "steroid",
   "f1"
  ],
  "polClass": "metal",
  "polName": "砷、聚苯乙烯微塑料",
  "stage": [
   "adu"
  ],
  "zh": "聚苯乙烯微塑料与砷共暴露加重雌鱼生殖毒性，性腺指数下降、卵母细胞成熟异常、E2 与 T 比值升高，子代死亡率升高、孵化率与心率下降。",
  "doi": "10.1016/j.cbpc.2025.110134",
  "gen": "F1"
 },
 {
  "pmid": "40222697",
  "title": "Dinotefuran exposure induces immunotoxicity in zebrafish embryos.",
  "author1": "Cheng",
  "nAuthors": 9,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "enz",
   "ros",
   "gene"
  ],
  "polClass": "pest",
  "polName": "呋虫胺",
  "stage": [
   "lar"
  ],
  "zh": "呋虫胺使仔鱼中性粒细胞与巨噬细胞减少、溶菌酶与 IgM 活性受抑，氧化应激升高并激活 NF-κB 与 JNK-STAT 通路。",
  "doi": "10.1016/j.cbpc.2025.110206"
 },
 {
  "pmid": "40339675",
  "title": "Polystyrene nanoplastics cause developmental abnormalities, oxidative damage and immune toxicity in early zebrafish development.",
  "author1": "Saputra",
  "nAuthors": 4,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "len",
   "morph",
   "eyesize",
   "gene"
  ],
  "polClass": "np",
  "polName": "聚苯乙烯纳米颗粒",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "PS 纳米塑料蓄积于绒毛膜与卵黄囊，致孵化延迟、存活与体长下降、眼径变小，并扰乱抗氧化与免疫基因表达。",
  "doi": "10.1016/j.cbpc.2025.110216"
 },
 {
  "pmid": "40523590",
  "title": "Developmental and neurobehavioral toxicity of di-(2-ethylhexyl) phthalate (DEHP) in zebrafish larvae.",
  "author1": "Jindal",
  "nAuthors": 9,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "dv",
   "bh",
   "ox"
  ],
  "marks": [
   "surv",
   "ache",
   "gsh",
   "mda",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "邻苯二甲酸二(2-乙基己)酯",
  "stage": [
   "lar"
  ],
  "zh": "DEHP 降低仔鱼 AChE 与 GSH、升高 LPO 与 GST，并降低皮质醇、甲状腺素及 mbp、sox10、olig2 表达，提示脱髓鞘。",
  "doi": "10.1016/j.cbpc.2025.110254"
 },
 {
  "pmid": "40633706",
  "title": "Bisphenol AF (BPAF) jeopardizes male fertility and triggers intergenerational defects in zebrafish (Danio rerio).",
  "author1": "Costa",
  "nAuthors": 9,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "sperm",
   "f1",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚AF",
  "stage": [
   "adu"
  ],
  "zh": "0.15 µg/L 双酚AF 暴露 14 天促进精子发生却降低精子活力，改变精巢表观调控基因；F1 出现孵化延迟、死亡率升高及 vegfa 与 cyp19a1b 上调。",
  "doi": "10.1016/j.cbpc.2025.110278",
  "gen": "F1"
 },
 {
  "pmid": "40633707",
  "title": "Environmental toxicity of tire wear and latex particle leachates in zebrafish embryos: Oxidative stress and ferroptosis as key mechanisms.",
  "author1": "Zhao",
  "nAuthors": 7,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "mda",
   "enz",
   "gene"
  ],
  "polClass": "plas",
  "polName": "轮胎磨损颗粒、乳胶颗粒",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "乳胶颗粒渗滤液毒性高于轮胎磨损颗粒，致 100% 死亡与严重畸形，MDA 升高、GST 受抑并激活铁死亡通路。",
  "doi": "10.1016/j.cbpc.2025.110285"
 },
 {
  "pmid": "40803497",
  "title": "Zearalenone accelerates aging and mitochondrial dysfunction: Evidence from network toxicology and zebrafish models.",
  "author1": "Li",
  "nAuthors": 3,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ag",
   "dv",
   "ox"
  ],
  "marks": [
   "morph",
   "hr",
   "ros",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "玉米赤霉烯酮",
  "stage": [
   "lar"
  ],
  "zh": "2 µM 玉米赤霉烯酮 72 h 内致仔鱼孵化延迟、心率减慢与骨骼畸形，升高 ROS 并下调 igf1、sirt1，加速机体衰老。",
  "doi": "10.1016/j.cbpc.2025.110325"
 },
 {
  "pmid": "38910278",
  "title": "Cadmium and ketoprofen accumulation influences aquatic ecosystem demonstrated using in-vivo zebrafish model.",
  "author1": "Madesh",
  "nAuthors": 9,
  "journal": "Drug Chem Toxicol",
  "year": 2025,
  "review": false,
  "organs": [
   "gi",
   "ki",
   "li"
  ],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "body",
   "hist",
   "ros"
  ],
  "polClass": "metal",
  "polName": "镉、酮洛芬",
  "stage": [
   "zyg",
   "adu"
  ],
  "zh": "镉与酮洛芬单独或联合降低胚胎存活并致脊柱侧弯与卵黄囊水肿，42 天暴露引起组织蓄积、ROS 升高及鳃、肠、肾、肝结构损伤。",
  "doi": "10.1080/01480545.2024.2364240"
 },
 {
  "pmid": "40490553",
  "title": "cGAS-STING are responsible for premature aging of telomerase-deficient zebrafish.",
  "author1": "Şerifoğlu",
  "nAuthors": 9,
  "journal": "EMBO J",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [
   "lifespan",
   "fec",
   "sabg"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "敲除 sting 全面挽救 tert-/- 斑马鱼早衰：衰老与炎症减轻、DNA 损伤应答与 p53 降低，恢复生育力并延长健康寿命。",
  "doi": "10.1038/s44318-025-00482-5",
  "pmc": "PMC12402478"
 },
 {
  "pmid": "41120592",
  "title": "Telomerase and alternative lengthening of telomeres coexist in the regenerating zebrafish caudal fins.",
  "author1": "Martínez-Balsalobre",
  "nAuthors": 8,
  "journal": "EMBO Rep",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [
   "regen",
   "telo"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "尾鳍反复截断后再生效率随年龄下降，但各基因型端粒长度均维持，提示再生细胞经 ALT 重组途径延长端粒以支持增殖。",
  "doi": "10.1038/s44319-025-00602-6",
  "pmc": "PMC12678820"
 },
 {
  "pmid": "40373714",
  "title": "Thallium-induced neurocardiotoxicity in zebrafish: Protective role of adaptive UPR and DNA repair.",
  "author1": "Chang",
  "nAuthors": 5,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "he",
   "br"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "surv",
   "edema",
   "morph",
   "gene"
  ],
  "polClass": "metal",
  "polName": "铊",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "铊暴露使胚胎死亡率升高、孵化率下降、泳囊发育受损并致心包水肿与脑异常，转录组显示内质网应激与 UPR 激活；XBP1 激活剂 IXA4 上调 DNA 修复基因。",
  "doi": "10.1016/j.ecoenv.2025.118321"
 },
 {
  "pmid": "40460771",
  "title": "6PPD and 6PPDQ embryonic exposure induced distinct developmental neurotoxicity in zebrafish.",
  "author1": "Yang",
  "nAuthors": 11,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "ey",
   "br",
   "gu"
  ],
  "dirs": [
   "bh",
   "dv",
   "ox"
  ],
  "marks": [
   "vmr",
   "shoal",
   "gene",
   "ros"
  ],
  "polClass": "emerg",
  "polName": "6PPD、6PPD-醌",
  "stage": [
   "zyg",
   "lar",
   "juv"
  ],
  "zh": "6PPD 与 6PPDQ 均抑制仔鱼暗期运动并致幼鱼焦虑升高，前者经眼-脑轴、后者经肠-脑通讯诱导不同神经毒性通路。",
  "doi": "10.1016/j.ecoenv.2025.118456"
 },
 {
  "pmid": "40555089",
  "title": "PFOA and its substitutes disrupt fatty acid metabolism and impair erythrocyte homeostasis in zebrafish.",
  "author1": "Wu",
  "nAuthors": 8,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ox"
  ],
  "marks": [
   "gene",
   "ros"
  ],
  "polClass": "emerg",
  "polName": "全氟辛酸、Gen-X",
  "stage": [],
  "zh": "PFOA 及替代物经 PPARα 扰乱脂肪酸氧化与合成致脂质蓄积，PFOA 与 HFPO-TA 还经 ROS 与 tp53 异常活化减少红细胞。",
  "doi": "10.1016/j.ecoenv.2025.118546"
 },
 {
  "pmid": "40683229",
  "title": "Thyroid disruption and the association with multi-toxicity endpoints in zebrafish embryos exposed to hymexazol.",
  "author1": "Niu",
  "nAuthors": 9,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv",
   "ox"
  ],
  "marks": [
   "th",
   "gene",
   "enz",
   "mda",
   "erod"
  ],
  "polClass": "pest",
  "polName": "噁霉灵",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "噁霉灵降低胚胎甲状腺激素并扰乱 DEIO1、DEIO2、TRα、TTR 基因，黑色素减少，SOD 与 CAT 下降、CYP1A1 升高。",
  "doi": "10.1016/j.ecoenv.2025.118697"
 },
 {
  "pmid": "40850113",
  "title": "Polystyrene nanoplastics carrying copper ion induce FDX1-mediated cuproptosis.",
  "author1": "Li",
  "nAuthors": 8,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯、铜离子",
  "stage": [
   "lar"
  ],
  "zh": "聚苯乙烯纳米塑料作为铜离子载体促胞内蓄积，经 FDX1 依赖途径促 DLAT 寡聚与线粒体损伤，首次报道纳米塑料介导铜死亡。",
  "doi": "10.1016/j.ecoenv.2025.118923"
 },
 {
  "pmid": "40858025",
  "title": "Disruption of reproductive and thyroid endocrine systems in zebrafish following early life and whole life cycle exposure to low-dose norgestrel.",
  "author1": "Mai",
  "nAuthors": 10,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "go",
   "th"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "steroid",
   "th",
   "len",
   "gene"
  ],
  "polClass": "edc",
  "polName": "炔诺孕酮",
  "stage": [
   "zyg",
   "lar",
   "juv",
   "adu"
  ],
  "zh": "低剂量炔诺孕酮 90 天暴露抑制 FSH 与 LH、致性比偏雄与睾丸发育受阻，早期 TSH 下降提示甲减，全周期暴露损伤加重。",
  "doi": "10.1016/j.ecoenv.2025.118936"
 },
 {
  "pmid": "40934570",
  "title": "Evaluation of developmental and behavioral toxicity of Resmetirom in zebrafish larvae (Danio rerio).",
  "author1": "Shan",
  "nAuthors": 10,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "morph",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "瑞美替罗",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "10 与 100 µM 瑞美替罗不增加畸形率，却引起发育延迟与自发行为减少，伴 hsd11b2 上调及 fads2、elovl2、gck 下调。",
  "doi": "10.1016/j.ecoenv.2025.118929"
 },
 {
  "pmid": "41046703",
  "title": "Dicofol induces developmental cardiotoxicity in zebrafish embryos through oxidative stress mechanisms.",
  "author1": "He",
  "nAuthors": 14,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox",
   "dv"
  ],
  "marks": [
   "edema",
   "hr",
   "ros",
   "mda",
   "enz"
  ],
  "polClass": "pest",
  "polName": "三氯杀螨醇",
  "stage": [
   "lar"
  ],
  "zh": "三氯杀螨醇致胚胎心室缩小、心房扩大、心包水肿与心率下降，ROS 与脂质过氧化升高、抗氧化酶降低，虾青素可逆转该损伤。",
  "doi": "10.1016/j.ecoenv.2025.119166"
 },
 {
  "pmid": "41115342",
  "title": "Neurotoxicity and cardiotoxicity alleviation by polystyrene microplastics in cadmium sulfide-exposed zebrafish larvae.",
  "author1": "Huang",
  "nAuthors": 5,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "ox",
   "cv"
  ],
  "marks": [
   "hr",
   "ros",
   "enz",
   "gene"
  ],
  "polClass": "metal",
  "polName": "硫化镉、聚苯乙烯",
  "stage": [
   "lar"
  ],
  "zh": "日光照射下硫化镉颜料致仔鱼自发运动与游动距离下降、心率升高，聚苯乙烯微塑料虽促进 Cd²⁺ 释放，却通过降低 ROS、提高抗氧化酶活性缓解毒性。",
  "doi": "10.1016/j.ecoenv.2025.119248"
 },
 {
  "pmid": "41313981",
  "title": "Parental exposure to hexafluoropropylene oxide trimer acid induces transgenerational developmental toxicity and thyroid endocrine disruption effects in zebrafish.",
  "author1": "Zhao",
  "nAuthors": 10,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "rp",
   "ed",
   "dv"
  ],
  "marks": [
   "hr",
   "th",
   "meth",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "六氟环氧丙烷三聚酸",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "亲代暴露 90 天使未暴露 F1、F2 心率与漩涡逃逸率下降，三代均见甲状腺滤泡组织学改变、甲状腺激素稳态与 HPT 轴基因紊乱及关键基因启动子甲基化改变。",
  "doi": "10.1016/j.ecoenv.2025.119476",
  "gen": "F2"
 },
 {
  "pmid": "41317617",
  "title": "Sex-specific reproductive toxicity of polystyrene nanoplastics and DEHP in adult zebrafish (Danio rerio).",
  "author1": "Chen",
  "nAuthors": 5,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2025,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "steroid",
   "gene",
   "hist",
   "arom"
  ],
  "polClass": "edc",
  "polName": "邻苯二甲酸二(2-乙基己基)酯、聚苯乙烯纳米塑料",
  "stage": [
   "adu"
  ],
  "zh": "PS 纳米塑料与 DEHP 共暴露致两性性腺损伤与氧化应激，雌鱼 E2 与 T 显著降低并抑制卵巢 cyp19a，雄鱼仅 T 下降、E2/T 升高。",
  "doi": "10.1016/j.ecoenv.2025.119488"
 },
 {
  "pmid": "41043219",
  "title": "Microbiota modulates compound-specific toxicity of environmental chemicals: A multi-omics analysis in zebrafish embryos.",
  "author1": "Gugescu",
  "nAuthors": 6,
  "journal": "Environ Int",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "edc",
  "polName": "全氟辛烷磺酸、双酚F、啶酰菌胺",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "PFOS 的转录与代谢扰动最依赖肠道菌群，无菌与常规胚胎差异显著，双酚F与啶酰菌胺的菌群调控模式各不相同。",
  "doi": "10.1016/j.envint.2025.109828"
 },
 {
  "pmid": "39694312",
  "title": "Innovative transgenic zebrafish biosensor for heavy metal detection.",
  "author1": "Herath",
  "nAuthors": 10,
  "journal": "Environ Pollut",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [],
  "polClass": "metal",
  "polName": "镉、锌",
  "stage": [
   "pha",
   "lar"
  ],
  "zh": "mt2-DsRed2 转基因斑马鱼对 Cd²⁺ 与 Zn²⁺ 呈浓度依赖荧光响应，检出限 4 ppb 且对 Ni²⁺ 无响应，2–10 ppb 下 FET-236 未见毒性。",
  "doi": "10.1016/j.envpol.2024.125547"
 },
 {
  "pmid": "40222611",
  "title": "Transgenerational thyroid hormone disruption in zebrafish induced by environmentally relevant concentrations of triclosan.",
  "author1": "Ding",
  "nAuthors": 7,
  "journal": "Environ Pollut",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "th",
   "gene",
   "body"
  ],
  "polClass": "emerg",
  "polName": "三氯生",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "1–10 µg/L 三氯生长期蓄积并剂量依赖改变甲状腺激素，干扰 P0 至 F1 甲状腺轴基因，分子对接显示与甲状腺球蛋白强结合。",
  "doi": "10.1016/j.envpol.2025.126242",
  "gen": "F1"
 },
 {
  "pmid": "40466997",
  "title": "Elucidating the mechanisms of environmental pollutant BPA inducing neurotoxicity through metabolomics and network toxicology strategy.",
  "author1": "Xu",
  "nAuthors": 11,
  "journal": "Environ Pollut",
  "year": 2025,
  "review": false,
  "organs": [
   "br",
   "he"
  ],
  "dirs": [
   "bh",
   "dv"
  ],
  "marks": [
   "morph"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "seg",
   "pha",
   "hat",
   "lar"
  ],
  "zh": "BPA 0.05–2 mg/L 致仔鱼中枢神经发生受抑、心脏功能改变与神经行为缺陷，谷氨酸代谢紊乱及 ESR2、PRKACA 结合是关键机制。",
  "doi": "10.1016/j.envpol.2025.126591"
 },
 {
  "pmid": "40618871",
  "title": "Detrimental impacts of chronic bisphenol A (BPA) exposure on follicular signalling modulation and ovulatory competence in zebrafish (Danio rerio).",
  "author1": "Ghosh",
  "nAuthors": 8,
  "journal": "Environ Pollut",
  "year": 2025,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "hist",
   "gene",
   "meth",
   "fec"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "adu"
  ],
  "zh": "1–100 µg/L 双酚A 暴露 45 天降低雌鱼性腺指数、卵母细胞成熟与排卵数，经孕激素受体拮抗与雌激素受体激动扰乱类固醇合成与排卵基因，并伴卵泡甲基化改变。",
  "doi": "10.1016/j.envpol.2025.126779"
 },
 {
  "pmid": "41077166",
  "title": "Adverse adult-onset and multigenerational effects in zebrafish (Danio rerio) developmentally exposed to polystyrene nanoplastics.",
  "author1": "Llewellyn",
  "nAuthors": 9,
  "journal": "Environ Pollut",
  "year": 2025,
  "review": false,
  "organs": [
   "br",
   "go"
  ],
  "dirs": [
   "rp",
   "bh"
  ],
  "marks": [
   "fec",
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "早期 5 天纳米聚苯乙烯暴露降低成年斑马鱼产卵量与受精率，未暴露子代同样多动，脑与性腺转录组仍见神经肌肉、内分泌与氧化应激通路改变。",
  "doi": "10.1016/j.envpol.2025.127223",
  "pmc": "PMC13599327",
  "gen": "F1"
 },
 {
  "pmid": "40120740",
  "title": "Co-exposure of TMPs and antibiotics in zebrafish: The influence of additives on the risk of hepatotoxicity.",
  "author1": "Wen",
  "nAuthors": 7,
  "journal": "Environ Res",
  "year": 2025,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox",
   "mt"
  ],
  "marks": [
   "gene",
   "hist"
  ],
  "polClass": "plas",
  "polName": "轮胎微塑料、抗生素",
  "stage": [],
  "zh": "轮胎微塑料与抗生素共暴露的肝毒性风险因添加剂而异，丁苯橡胶最显著，增塑剂经 CYP1A、CYP3A65 等产生协同效应。",
  "doi": "10.1016/j.envres.2025.121430"
 },
 {
  "pmid": "40180266",
  "title": "ADB-FUBINACA-induced developmental toxicity, neurotoxicity, and cardiotoxicity in embryonic zebrafish (Danio rerio).",
  "author1": "Wu",
  "nAuthors": 8,
  "journal": "Environ Res",
  "year": 2025,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "bh",
   "cv"
  ],
  "marks": [
   "hr",
   "len",
   "morph",
   "ros",
   "mda"
  ],
  "polClass": "emerg",
  "polName": "ADB-FUBINACA",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "ADB-FUBINACA 致心率下降、体长缩短、脊柱变形与心包水肿，并引起运动受损、神经元发育异常、ROS 与 MDA 升高及丙氨酸与嘌呤代谢紊乱。",
  "doi": "10.1016/j.envres.2025.121517"
 },
 {
  "pmid": "40817413",
  "title": "Identification of chlorpyrifos and carbofuran residues in Kumari Beel, Bangladesh, and their coexposure effect on the cartilage development during zebrafish embryogenesis.",
  "author1": "Zaman",
  "nAuthors": 16,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2025,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "dv"
  ],
  "marks": [
   "len",
   "morph",
   "gene",
   "telo"
  ],
  "polClass": "op",
  "polName": "毒死蜱、克百威",
  "stage": [
   "zyg",
   "seg",
   "lar"
  ],
  "zh": "Kumari Beel 鱼体毒死蜱与克百威残留达 0.21–0.27 ppm；共暴露使胚胎体长缩短、躯干弯曲，颅面软骨 Meckel 角改变，晶状体端粒直径受影响。",
  "doi": "10.1007/s11356-025-36791-9"
 },
 {
  "pmid": "40012510",
  "title": "Leveraging Zebrafish Embryo Phenotypic Observations to Advance Data-Driven Analyses in Toxicology.",
  "author1": "Michaelis",
  "nAuthors": 19,
  "journal": "Environ Sci Technol",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "morph",
   "conc"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "INTOB 以受控词表标准化 600 余项 ZFET 实验的元数据与表型，显示效应浓度跨越 7 个数量级并支持形态指纹 read-across。",
  "doi": "10.1021/acs.est.4c11757",
  "pmc": "PMC11912306"
 },
 {
  "pmid": "40358985",
  "title": "Transgenerational Inheritance of Cognitive Deficits Induced by Ancestral Arsenic Exposure in Zebrafish (Danio rerio) via Maternal and Paternal Lineages.",
  "author1": "Rachamalla",
  "nAuthors": 4,
  "journal": "Environ Sci Technol",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "rp",
   "bh"
  ],
  "marks": [
   "meth",
   "gene",
   "ros"
  ],
  "polClass": "metal",
  "polName": "砷",
  "stage": [
   "adu"
  ],
  "zh": "祖代膳食砷经母系与父系均致 F1、F2 认知功能受损，伴脑内氧化应激升高及 Drd1、MAO、BDNF 启动子超甲基化与表达下调，母系在更低剂量即出现效应。",
  "doi": "10.1021/acs.est.5c00409",
  "gen": "F2"
 },
 {
  "pmid": "40957726",
  "title": "Developmental and Neurobehavioral Toxicity of Hexaphenoxycyclotriphosphazene: Implications for Its Safety as a Flame-Retardant Alternative to Triphenyl Phosphate.",
  "author1": "Bai",
  "nAuthors": 15,
  "journal": "Environ Sci Technol",
  "year": 2025,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "bh",
   "cv"
  ],
  "marks": [
   "len",
   "morph",
   "vmr",
   "ntx",
   "body"
  ],
  "polClass": "emerg",
  "polName": "HPCTP、磷酸三苯酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "HPCTP 蓄积性强于磷酸三苯酯，经抑制 5-HT1A 引发剂量依赖的抑郁样行为，而磷酸三苯酯经 CD83 依赖神经炎症引起焦虑样表型。",
  "doi": "10.1021/acs.est.5c07209"
 },
 {
  "pmid": "39655881",
  "title": "Effects of Flurochloridone on the Developmental Toxicity in Zebrafish (Danio rerio) Embryo.",
  "author1": "Yang",
  "nAuthors": 6,
  "journal": "Environ Toxicol",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "morph",
   "ros",
   "mda",
   "nrf2"
  ],
  "polClass": "pest",
  "polName": "氟咯草酮",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "氟咯草酮 144 hpf LC50 为 36.9 µg/mL，致心包水肿、脊柱弯曲与生长迟缓，并升高 ROS、MDA，激活 Keap1-Nrf2 通路诱导凋亡。",
  "doi": "10.1002/tox.24460"
 },
 {
  "pmid": "40172026",
  "title": "Effects of Glyphosate on Zebrafish (Danio rerio) Developmental Toxicity.",
  "author1": "Zhou",
  "nAuthors": 7,
  "journal": "Environ Toxicol",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "dv"
  ],
  "marks": [
   "hr",
   "morph",
   "gene",
   "vmr"
  ],
  "polClass": "pest",
  "polName": "草甘膦",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "草甘膦暴露下调 Elavl3、上调 GAP-43 与 GFAP，致心率减慢、体节缩短及脊柱与脑畸形，仔鱼对光暗刺激反应延迟。",
  "doi": "10.1002/tox.24503"
 },
 {
  "pmid": "38804632",
  "title": "Development of a Zebrafish embryo-based test system for thyroid hormone system disruption: 3Rs in ecotoxicological research.",
  "author1": "Gölz",
  "nAuthors": 10,
  "journal": "Environ Toxicol Chem",
  "year": 2025,
  "review": false,
  "organs": [
   "th",
   "ey"
  ],
  "dirs": [
   "mt",
   "ed"
  ],
  "marks": [
   "th",
   "eyesize",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "丙硫氧嘧啶、高氯酸钾、三碘甲状腺原氨酸",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "基于 OECD FET 扩展甲状腺与眼相关终点，四种作用模式不同的 THSDC 均改变甲状腺滤泡形态并损害眼发育与游泳能力，支持建立符合 3R 的整合测试方案。",
  "doi": "10.1002/etc.5878"
 },
 {
  "pmid": "39887270",
  "title": "Freshwater pollution: cardiotoxicity effect of perfluorooctane sulfonic acid and neonicotinoid imidacloprid mixture.",
  "author1": "Palazzolo",
  "nAuthors": 8,
  "journal": "Environ Toxicol Chem",
  "year": 2025,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "morph",
   "edema",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "全氟辛烷磺酸、吡虫啉",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "各自无毒的 PFOS 与吡虫啉共暴露致胚胎畸形加重、心包细胞死亡增加，并上调 casp3、bax、bcl-2 与扰动 cat、sod1、gstp2。",
  "doi": "10.1093/etojnl/vgae013"
 },
 {
  "pmid": "40617460",
  "title": "Polystyrene microplastics and 17α-Methyltestosterone induce sphingolipid metabolic disruption, leading to liver and brain damage via the liver-brain axis in zebrafish (Danio rerio).",
  "author1": "Li",
  "nAuthors": 13,
  "journal": "Free Radic Biol Med",
  "year": 2025,
  "review": false,
  "organs": [
   "li",
   "br"
  ],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "hist",
   "gene",
   "enz"
  ],
  "polClass": "edc",
  "polName": "聚苯乙烯、17α-甲基睾酮",
  "stage": [
   "adu"
  ],
  "zh": "PS 微塑料与 17α-甲基睾酮联合暴露 21 天致肝脂质蓄积与脑氧化应激，经肝脑轴扰乱鞘脂代谢与神经递质稳态。",
  "doi": "10.1016/j.freeradbiomed.2025.07.006"
 },
 {
  "pmid": "40521127",
  "title": "A systematic review of the effects of nanoplastics on fish.",
  "author1": "Dasmahapatra",
  "nAuthors": 3,
  "journal": "Front Toxicol",
  "year": 2025,
  "review": true,
  "organs": [
   "gi",
   "li"
  ],
  "dirs": [
   "mt",
   "ox"
  ],
  "marks": [
   "ros",
   "body"
  ],
  "polClass": "plas",
  "polName": "纳米塑料",
  "stage": [],
  "zh": "114 篇文献显示纳米塑料研究以斑马鱼与聚苯乙烯为主，可蓄积于鳃、肠、肝、心、性腺与脑，引起氧化应激、运动下降及跨代影响。",
  "doi": "10.3389/ftox.2025.1530209",
  "pmc": "PMC12163001"
 },
 {
  "pmid": "39796206",
  "title": "Abamectin Causes Neurotoxicity in Zebrafish Embryos.",
  "author1": "Zhang",
  "nAuthors": 13,
  "journal": "Int J Mol Sci",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "hr",
   "edema",
   "ache",
   "ros"
  ],
  "polClass": "pest",
  "polName": "阿维菌素",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "0.055–0.11 mg/L 阿维菌素损伤胚胎脑发育与运动行为，降低 AChE 与 ATPase 活性，并经 ROS 蓄积诱发脑内神经凋亡。",
  "doi": "10.3390/ijms26010349",
  "pmc": "PMC11719719"
 },
 {
  "pmid": "41515939",
  "title": "Integrated Assessment of the Cardiotoxic and Neurobehavioral Effects of 3,4-Methylenedioxypyrovalerone (MDPV) in Zebrafish Embryos.",
  "author1": "Aljabasini",
  "nAuthors": 6,
  "journal": "Int J Mol Sci",
  "year": 2025,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "bh"
  ],
  "marks": [
   "hr",
   "avb",
   "co",
   "startle"
  ],
  "polClass": "emerg",
  "polName": "MDPV",
  "stage": [
   "lar"
  ],
  "zh": "MDPV 致 3 dpf 胚胎浓度依赖心动过缓与房室传导阻滞（EC50=228 µM）、心输出量下降；5 dpf 基础运动降低（EC50=2.51 µM）但不影响前脉冲抑制。",
  "doi": "10.3390/ijms27010059",
  "pmc": "PMC12785441"
 },
 {
  "pmid": "39402722",
  "title": "Arsenic and Chromium Induced Toxicity on Zebrafish Kidney: Mixture Effects on Oxidative Stress and Involvement of Nrf2-Keap1-ARE, DNA Repair, and Intrinsic Apoptotic Pathways.",
  "author1": "Kamila",
  "nAuthors": 3,
  "journal": "J Appl Toxicol",
  "year": 2025,
  "review": false,
  "organs": [
   "ki"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "ros",
   "mda",
   "gsh",
   "enz",
   "gene"
  ],
  "polClass": "metal",
  "polName": "砷、铬",
  "stage": [
   "adu"
  ],
  "zh": "砷铬联合暴露激活肾 Nrf2-Keap1 通路、抑制碱基切除修复并诱导内源凋亡，联合组损伤最重。",
  "doi": "10.1002/jat.4709"
 },
 {
  "pmid": "40045741",
  "title": "Samarium Oxide Exposure Induces Toxicity and Cardiotoxicity in Zebrafish Embryos Through Apoptosis Pathway.",
  "author1": "Liu",
  "nAuthors": 11,
  "journal": "J Appl Toxicol",
  "year": 2025,
  "review": false,
  "organs": [
   "he",
   "br"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "edema",
   "morph",
   "len",
   "hr",
   "ros"
  ],
  "polClass": "metal",
  "polName": "氧化钐",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "24 hpf 起暴露 3 天的氧化钐致胚胎心包水肿、脊柱轻弯与体长缩短，心室代偿性肿胀、萎缩与心律失常，心脑 ROS 蓄积，Bcl-2 下降、caspase-3 升高。",
  "doi": "10.1002/jat.4774"
 },
 {
  "pmid": "40749460",
  "title": "Linking contaminant levels in Tepetitlán reservoir to zebrafish (Danio rerio) embryotoxicity and gene expression responses.",
  "author1": "SanJuan-Reyes",
  "nAuthors": 14,
  "journal": "J Contam Hydrol",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "morph",
   "mda",
   "gene"
  ],
  "polClass": "mix",
  "polName": "水库水样",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "水库水致胚胎脊柱变形、发育延迟与心包及卵黄囊水肿，并引起脂质与蛋白损伤及抗氧化基因表达改变。",
  "doi": "10.1016/j.jconhyd.2025.104690"
 },
 {
  "pmid": "39556913",
  "title": "Short-term polystyrene nanoplastic exposure alters zebrafish male and female germline and reproductive outcomes, unveiling pollutant-impacted molecular pathways.",
  "author1": "Pujol",
  "nAuthors": 9,
  "journal": "J Hazard Mater",
  "year": 2025,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp"
  ],
  "marks": [
   "sperm",
   "hist",
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯",
  "stage": [
   "adu"
  ],
  "zh": "96 小时 5 mg/L、45 nm 聚苯乙烯纳米塑料可穿透精巢屏障进入生殖细胞，致精子聚集、染色质浓缩与活力下降，雌鱼卵母细胞各期比例改变。",
  "doi": "10.1016/j.jhazmat.2024.136529"
 },
 {
  "pmid": "40865224",
  "title": "Gut-brain axis dysfunction mediates neurotoxicity of embryonic p-phenylenediamine exposure in zebrafish.",
  "author1": "Xu",
  "nAuthors": 9,
  "journal": "J Hazard Mater",
  "year": 2025,
  "review": false,
  "organs": [
   "br",
   "gu"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "shoal",
   "ntx",
   "hist",
   "enz"
  ],
  "polClass": "emerg",
  "polName": "对苯二胺类抗氧剂",
  "stage": [
   "lar"
  ],
  "zh": "0.05 mg/L 对苯二胺类抗氧剂胚胎暴露致仔鱼多动、攻击与社交缺陷，头部氧化应激与神经递质升高，肠绒毛损伤、菌群失调，甲硝唑可缓解。",
  "doi": "10.1016/j.jhazmat.2025.139650"
 },
 {
  "pmid": "41092707",
  "title": "Microplastics modulate neutrophil migration via an ROShistone lactylation positive feedback loop.",
  "author1": "Wang",
  "nAuthors": 10,
  "journal": "J Hazard Mater",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ox"
  ],
  "marks": [
   "ros",
   "gene"
  ],
  "polClass": "plas",
  "polName": "微塑料",
  "stage": [
   "lar"
  ],
  "zh": "100 μg/L 微塑料经 ROS-组蛋白乳酸化正反馈上调 H3K18la 与 duox，使斑马鱼中性粒细胞迁移增加 1.7 倍。",
  "doi": "10.1016/j.jhazmat.2025.140113"
 },
 {
  "pmid": "41273970",
  "title": "Polystyrene microplastics-induced gut microbiota dysbiosis with altered short chain fatty acid is associated with reproductive physiology and endocrine disorder in female zebrafish.",
  "author1": "Adhikari",
  "nAuthors": 4,
  "journal": "J Hazard Mater",
  "year": 2025,
  "review": false,
  "organs": [
   "gu",
   "go"
  ],
  "dirs": [
   "rp",
   "ed",
   "ox"
  ],
  "marks": [
   "vtg",
   "steroid",
   "hist",
   "fec"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯微塑料",
  "stage": [
   "adu"
  ],
  "zh": "微塑料致雌鱼肠道菌群失调与短链脂肪酸减少，经 gpr43 与 TLR4-NF-κB 抑制 HPG 轴，E2、睾酮与 VTG 下降、卵泡闭锁。",
  "doi": "10.1016/j.jhazmat.2025.140468"
 },
 {
  "pmid": "41313855",
  "title": "Acute toxicity, behaviour, metabolism, and transcriptomic points of departure in embryo-larval zebrafish exposed to nine different PFAS.",
  "author1": "Lee",
  "nAuthors": 9,
  "journal": "J Hazard Mater",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "全氟化合物",
  "stage": [
   "lar"
  ],
  "zh": "9 种 PFAS 的效价随碳链延长与磺酸基增强，转录组 POD 通常比整体毒性 POD 低 10 倍以内，为最敏感终点。",
  "doi": "10.1016/j.jhazmat.2025.140599"
 },
 {
  "pmid": "40558862",
  "title": "Ecotoxicity of Fire Retardants to Zebrafish (Danio rerio) in Early Life Stages.",
  "author1": "Brito",
  "nAuthors": 5,
  "journal": "J Xenobiot",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "mt"
  ],
  "marks": [
   "surv",
   "morph"
  ],
  "polClass": "emerg",
  "polName": "N-Phosphate-、N-Borate",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "三种灭火阻燃剂中 N-Phosphate- 毒性最高（96 h LC50 60 mg/L），其余 >432 与 >1181 mg/L，均致卵黄囊吸收减少与变暗，毒性差异主要源于表面活性剂含量。",
  "doi": "10.3390/jox15030079",
  "pmc": "PMC12194123"
 },
 {
  "pmid": "40283093",
  "title": "Combined Neurotoxic Effects of Commercial Formulations of Pyrethroid (Deltamethrin) and Neonicotinoid (Imidacloprid) Pesticides on Adult Zebrafish (Danio rerio): Behavioral, Molecular, and Histopathological Analysis.",
  "author1": "Petrovici",
  "nAuthors": 5,
  "journal": "Life (Basel)",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "gene",
   "hist"
  ],
  "polClass": "pest",
  "polName": "溴氰菊酯、吡虫啉",
  "stage": [
   "adu"
  ],
  "zh": "21 天环境相关浓度暴露使成鱼出现剂量依赖的异常游动与焦虑样行为，神经营养因子及其受体基因改变，脑内见神经元变性、胶质增生与空泡化。",
  "doi": "10.3390/life15040538",
  "pmc": "PMC12028659"
 },
 {
  "pmid": "40993327",
  "title": "Herbal terpenoids activate autophagy and mitophagy through modulation of bioenergetics and protect from metabolic stress, sarcopenia and epigenetic aging.",
  "author1": "Civiletto",
  "nAuthors": 36,
  "journal": "Nat Aging",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "斑马鱼全生物体筛选发现百里香酚与香芹酚经瞬时降低线粒体膜电位激活自噬与线粒体自噬，减少小鼠肝脂并延缓表观遗传衰老。",
  "doi": "10.1038/s43587-025-00957-4",
  "pmc": "PMC12532568"
 },
 {
  "pmid": "40187569",
  "title": "Environmental concentrations of glyphosate through direct or parental exposure alter nervous system development and reduce the fertility rate in zebrafish.",
  "author1": "Terrazas-Salgado",
  "nAuthors": 4,
  "journal": "Neurotoxicology",
  "year": 2025,
  "review": true,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "bh"
  ],
  "marks": [
   "fec",
   "gene"
  ],
  "polClass": "pest",
  "polName": "草甘膦",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "环境浓度草甘膦降低亲代受精率，100 µg/L 使雌鱼性腺与肝体指数升高；仔鱼转录组显示直接暴露与亲代暴露均靶向神经系统发育。",
  "doi": "10.1016/j.neuro.2025.04.002",
  "gen": "F1"
 },
 {
  "pmid": "40024697",
  "title": "[Assessment of developmental neurotoxicity of pharmaceuticals using zebrafish behavior].",
  "author1": "Nishimura",
  "nAuthors": 1,
  "journal": "Nihon Yakurigaku Zasshi",
  "year": 2025,
  "review": true,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [],
  "polClass": "emerg",
  "polName": "丙戊酸",
  "stage": [
   "lar"
  ],
  "zh": "综述以丙戊酸为例说明仔鱼神经行为可检出发育神经毒性，结果与啮齿类和人类一致，可支撑替代方法需求。",
  "doi": "10.1254/fpj.24085"
 },
 {
  "pmid": "40500058",
  "title": "Dietary supplementation of Lactobacillus casei alleviates permethrin exposure-induced zebrafish testis damage through modulation of TLR4/NF-κB and AKT/Nrf2 pathways: Oxidative stress, inflammation and ferroptosis.",
  "author1": "Huo",
  "nAuthors": 6,
  "journal": "Pestic Biochem Physiol",
  "year": 2025,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ox",
   "rp"
  ],
  "marks": [
   "hist",
   "sperm",
   "steroid",
   "gene"
  ],
  "polClass": "pest",
  "polName": "氯菊酯",
  "stage": [
   "adu"
  ],
  "zh": "1 μg/L 氯菊酯经 TLR4/NF-κB 与 AKT/Nrf2 通路诱发睾丸氧化炎症与铁死亡，108 CFU/g 干酪乳杆菌可逆转。",
  "doi": "10.1016/j.pestbp.2025.106450"
 },
 {
  "pmid": "40715525",
  "title": "Neurotoxic effects of rotenone and deltamethrin prolonged exposure on adult zebrafish.",
  "author1": "Grisotto",
  "nAuthors": 7,
  "journal": "Sci Rep",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "hist",
   "dive"
  ],
  "polClass": "pest",
  "polName": "鱼藤酮、溴氰菊酯",
  "stage": [
   "adu"
  ],
  "zh": "慢性低剂量鱼藤酮与溴氰菊酯均致成鱼多脑区细胞死亡与多巴胺神经元丢失，新缸试验显示运动与焦虑样行为改变。",
  "doi": "10.1038/s41598-025-13273-z",
  "pmc": "PMC12297469"
 },
 {
  "pmid": "39708463",
  "title": "Polystyrene microplastics induce depression-like behavior in zebrafish via neuroinflammation and circadian rhythm disruption.",
  "author1": "Yang",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2025,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "dive",
   "shoal",
   "ntx",
   "hist",
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯",
  "stage": [],
  "zh": "25–250 µg/L 聚苯乙烯微塑料暴露 40 天诱导抑郁样行为，脑组织空泡化与尼氏体减少，炎性因子与 clock 基因改变，多巴胺、5-羟色胺等递质下降。",
  "doi": "10.1016/j.scitotenv.2024.178085"
 },
 {
  "pmid": "40022978",
  "title": "Incorporating benchmark dose into sediment toxicity testing using zebrafish (Danio rerio).",
  "author1": "Nash",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2025,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "surv",
   "morph",
   "conc"
  ],
  "polClass": "mix",
  "polName": "沉积物有机提取物",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "将基准剂量法引入 zFET 评估沉积物提取物，检出 45 种有机污染物，畸形与行为改变在低于化学可生物利用浓度时即出现。",
  "doi": "10.1016/j.scitotenv.2025.178953"
 },
 {
  "pmid": "40048949",
  "title": "Toxic interactions between fluoxetine and microplastics in zebrafish embryonic development.",
  "author1": "Orozco-Hernández",
  "nAuthors": 8,
  "journal": "Sci Total Environ",
  "year": 2025,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "enz",
   "gene"
  ],
  "polClass": "plas",
  "polName": "氟西汀、微塑料",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "氟西汀与微塑料混合暴露致心包水肿、脊柱与尾部畸形及孵化延迟，SOD 与 CAT 升高，并见脑肿胀与神经丘丢失。",
  "doi": "10.1016/j.scitotenv.2025.179040"
 },
 {
  "pmid": "39875058",
  "title": "Bisphenol F (BPF) exposure impairs sperm quality and offspring development in male zebrafish.",
  "author1": "Wu",
  "nAuthors": 9,
  "journal": "Toxicol Appl Pharmacol",
  "year": 2025,
  "review": false,
  "organs": [
   "go",
   "li"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "sperm",
   "steroid",
   "vtg",
   "f1"
  ],
  "polClass": "edc",
  "polName": "双酚F",
  "stage": [
   "adu"
  ],
  "zh": "500–2500 nM 双酚F 暴露 21 天使雄鱼精子数减少、活力改变，血清 T 降低而肝 VTG 升高；子代死亡率升高、发育延迟并出现尾卷曲与心率异常。",
  "doi": "10.1016/j.taap.2025.117245",
  "gen": "F1"
 },
 {
  "pmid": "41260412",
  "title": "Transgenerational toxicity of tralomethrin in zebrafish: Parental exposure induces developmental defects in offspring.",
  "author1": "Huang",
  "nAuthors": 6,
  "journal": "Toxicol Lett",
  "year": 2025,
  "review": false,
  "organs": [
   "gi",
   "go"
  ],
  "dirs": [
   "rp",
   "ox",
   "dv"
  ],
  "marks": [
   "fec",
   "surv",
   "morph",
   "edema",
   "enz"
  ],
  "polClass": "pest",
  "polName": "四溴菊酯",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "150 天四溴菊酯暴露致雄鱼体重增加、产卵率下降，鳃与卵巢异常伴氧化应激和凋亡；F1 存活率与孵化率下降，并出现心包水肿、脊柱弯曲与泳囊未充气。",
  "doi": "10.1016/j.toxlet.2025.111777",
  "gen": "F1"
 },
 {
  "pmid": "41012390",
  "title": "The Role of Danio rerio in Understanding Pollutant-Induced Gut Microbiome Dysbiosis in Aquatic Ecosystems.",
  "author1": "Frolova",
  "nAuthors": 6,
  "journal": "Toxics",
  "year": 2025,
  "review": true,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "mix",
  "polName": "农药、重金属、抗生素、微塑料",
  "stage": [],
  "zh": "综述汇总农药、重金属、抗生素与微塑料在斑马鱼中引起的肠道菌群失调，强调菌群改变可作为污染物暴露的敏感指标。",
  "doi": "10.3390/toxics13090769",
  "pmc": "PMC12473707"
 },
 {
  "pmid": "41280077",
  "title": "Butyrate rescues chlorpyrifos-induced social deficits through inhibition of class I histone deacetylases.",
  "author1": "Diaz",
  "nAuthors": 14,
  "journal": "bioRxiv",
  "year": 2025,
  "review": false,
  "organs": [
   "br",
   "gu"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "shoal",
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "胚胎期毒死蜱暴露导致持久社交缺陷与脑内神经元基因抑制，丁酸经抑制 HDAC1 部分逆转，并伴肠道菌群与氮代谢改变。",
  "doi": "10.1101/2025.10.19.683261",
  "pmc": "PMC12633377"
 },
 {
  "pmid": "37633541",
  "title": "Ethyl glucuronide and ethyl sulfate in the zebrafish after ethanol exposure.",
  "author1": "Małkowska",
  "nAuthors": 5,
  "journal": "Alcohol",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "edema",
   "len",
   "hr"
  ],
  "polClass": "emerg",
  "polName": "乙醇",
  "stage": [
   "hat",
   "lar"
  ],
  "zh": "0.5%–2.5% 乙醇致胚胎心包与卵黄囊水肿、体弯曲、孵化率与体长心率改变，并首次在斑马鱼体内检出非氧化代谢物 EtG 与 EtS。",
  "doi": "10.1016/j.alcohol.2023.08.010"
 },
 {
  "pmid": "38185038",
  "title": "Bioaccumulation and thyroid endcrione disruption of 2-ethylhexyl diphenyl phosphate at environmental concentration in zebrafish larvae.",
  "author1": "Shu",
  "nAuthors": 9,
  "journal": "Aquat Toxicol",
  "year": 2024,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "body",
   "th",
   "gene",
   "morph",
   "surv"
  ],
  "polClass": "emerg",
  "polName": "2-乙基己基二苯基磷酸酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "0.1 与 1 µg/L EHDPP 即降低仔鱼 T4、T3 并改变 HPT 轴与 TTR 表达，100 µg/L 组蓄积达 59.77 µg/g，畸形率升高。",
  "doi": "10.1016/j.aquatox.2023.106815"
 },
 {
  "pmid": "38492288",
  "title": "Reproductive endocrine disruption effect and mechanism in male zebrafish after life cycle exposure to environmental relevant triclosan.",
  "author1": "Wang",
  "nAuthors": 1,
  "journal": "Aquat Toxicol",
  "year": 2024,
  "review": false,
  "organs": [
   "br",
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "hist",
   "vtg",
   "steroid",
   "sperm",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "三氯生",
  "stage": [
   "zyg",
   "lar",
   "juv",
   "adu"
  ],
  "zh": "全生命周期 10 与 50 µg/L 三氯生使雄鱼睾丸系数升高、成熟精子减少、性激素失衡与 VTG 升高，转录组富集 PPAR 与 GnRH 通路。",
  "doi": "10.1016/j.aquatox.2024.106899"
 },
 {
  "pmid": "38744123",
  "title": "Building methodological consensus to ensure rigor and reproducibility in zebrafish fertility research.",
  "author1": "Kossack",
  "nAuthors": 4,
  "journal": "Aquat Toxicol",
  "year": 2024,
  "review": true,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "综述指出斑马鱼生殖毒理研究缺乏统一产卵评估流程，不同产卵参数可显著改变产卵量与产卵成功率，呼吁建立方法学共识以保证结果可重复。",
  "doi": "10.1016/j.aquatox.2024.106930",
  "pmc": "PMC11261831",
  "key": true
 },
 {
  "pmid": "38875953",
  "title": "Toxicological effects of nodularin on the reproductive endocrine system of female zebrafish (Danio rerio).",
  "author1": "Biswas",
  "nAuthors": 3,
  "journal": "Aquat Toxicol",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed",
   "ox"
  ],
  "marks": [
   "steroid",
   "gene",
   "vtg",
   "enz"
  ],
  "polClass": "emerg",
  "polName": "节球藻毒素",
  "stage": [
   "adu"
  ],
  "zh": "14 天节球藻毒素暴露降低雌鱼性腺指数与生发泡破裂，FSH、LH、E2 降而睾酮升，cyp19a1a 与 vtg 下调、sod 上调。",
  "doi": "10.1016/j.aquatox.2024.107000"
 },
 {
  "pmid": "38878329",
  "title": "Co-exposure to microplastic and plastic additives causes development impairment in zebrafish embryos.",
  "author1": "Kim",
  "nAuthors": 6,
  "journal": "Aquat Toxicol",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "morph",
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯、双酚S、邻苯二甲酸单乙基己酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "非致毒浓度的聚苯乙烯、双酚 S 与 MEHP 三元混合即致胚胎显著畸形，协同效应明显，并下调氧化应激与甲状腺激素合成相关基因、上调 cyp1a1 与 p53。",
  "doi": "10.1016/j.aquatox.2024.107001"
 },
 {
  "pmid": "39366191",
  "title": "Possible mechanisms for adverse effects on zebrafish sperm and testes associated with low-level chronic PFOA exposure.",
  "author1": "Wang",
  "nAuthors": 5,
  "journal": "Aquat Toxicol",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp"
  ],
  "marks": [
   "sperm",
   "steroid",
   "f1"
  ],
  "polClass": "emerg",
  "polName": "全氟辛酸",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "414 ng/L PFOA 慢性暴露 60 天致雄鱼精子畸形、活力与浓度下降及 E2/T 失衡，子代畸形率与死亡率升高。",
  "doi": "10.1016/j.aquatox.2024.107108",
  "gen": "F1"
 },
 {
  "pmid": "39426365",
  "title": "Thyroid endocrine disruption effects of OBS in adult zebrafish and offspring after parental exposure at early life stage.",
  "author1": "Zhao",
  "nAuthors": 8,
  "journal": "Aquat Toxicol",
  "year": 2024,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "th",
   "gene",
   "hist",
   "escape"
  ],
  "polClass": "emerg",
  "polName": "全氟壬烯氧基苯磺酸钠",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "3–300 µg/L OBS 早期暴露至 180 dpf 仍见甲状腺滤泡上皮增生与胶质耗竭，雌鱼 T4 降低，F1 激素改变且旋转逃逸率下降。",
  "doi": "10.1016/j.aquatox.2024.107125",
  "gen": "F1"
 },
 {
  "pmid": "39276696",
  "title": "Heat stress sensitizes zebrafish embryos to neurological and cardiac toxicity.",
  "author1": "Haapanen-Saaristo",
  "nAuthors": 7,
  "journal": "Biochem Biophys Res Commun",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "bh"
  ],
  "marks": [
   "hr"
  ],
  "polClass": "pah",
  "polName": "菲、拉帕替尼、紫杉醇",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "斑马鱼胚胎行为热适应上限为 37 °C、心脏为 38 °C；菲完全阻断行为适应，而拉帕替尼、菲与紫杉醇的心脏毒性仅在热应激条件下才显现。",
  "doi": "10.1016/j.bbrc.2024.150682"
 },
 {
  "pmid": "38273312",
  "title": "Copper nanoparticles and silver nanoparticles impair lymphangiogenesis in zebrafish.",
  "author1": "Jing",
  "nAuthors": 3,
  "journal": "Cell Commun Signal",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "vasc",
   "meth",
   "gene"
  ],
  "polClass": "np",
  "polName": "纳米铜、纳米银",
  "stage": [
   "lar"
  ],
  "zh": "纳米铜经 ROS 诱导 CCBE1 启动子 E2F7/8 结合位点高甲基化，纳米银则下调 E2F7/8，二者均致仔鱼胸导管缺失。",
  "doi": "10.1186/s12964-023-01403-x",
  "pmc": "PMC10809531"
 },
 {
  "pmid": "39643971",
  "title": "The absence of telomerase leads to immune response and tumor regression in zebrafish melanoma.",
  "author1": "Lopes-Bastos",
  "nAuthors": 13,
  "journal": "Cell Rep",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "tert 缺失斑马鱼黑色素瘤初期发生与侵袭性不变，后期因增殖降低、凋亡增加与免疫浸润而消退，移植至免疫缺陷宿主可恢复生长。",
  "doi": "10.1016/j.celrep.2024.115035"
 },
 {
  "pmid": "37918535",
  "title": "Prediction of acute fish toxicity (AFT) and fish embryo toxicity (FET) tests by cytotoxicity assays using liver and embryo zebrafish cell lines (ZFL and ZEM2S).",
  "author1": "Rodrigues de Souza",
  "nAuthors": 9,
  "journal": "Chemosphere",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "ZFL 细胞毒性 IC50 与急性鱼毒及胚胎毒性试验高度相关（R² 0.73–0.90），可正确分类 76.9%–90.9% 的化学品，优于 ZEM2S。",
  "doi": "10.1016/j.chemosphere.2023.140592"
 },
 {
  "pmid": "38048833",
  "title": "Exploring the impact of antibiotics, microplastics, nanoparticles, and pesticides on zebrafish gut microbiomes: Insights into composition, interactions, and health implications.",
  "author1": "Pamanji",
  "nAuthors": 5,
  "journal": "Chemosphere",
  "year": 2024,
  "review": true,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "mix",
  "polName": "农药、抗生素、纳米颗粒、微塑料",
  "stage": [],
  "zh": "综述汇总农药、抗生素、纳米颗粒与微塑料改变斑马鱼肠道菌群组成与代谢通路，指出菌群失调与宿主代谢及免疫损伤相关。",
  "doi": "10.1016/j.chemosphere.2023.140867"
 },
 {
  "pmid": "38340991",
  "title": "Chlorothalonil as a potential endocrine disruptor in male zebrafish (Danio rerio): Impact on the hypothalamus-pituitary-gonad axis and sperm quality.",
  "author1": "Guillante",
  "nAuthors": 9,
  "journal": "Chemosphere",
  "year": 2024,
  "review": false,
  "organs": [
   "br",
   "go",
   "li"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "gene",
   "vtg",
   "ros",
   "mda"
  ],
  "polClass": "pest",
  "polName": "百菌清",
  "stage": [
   "adu"
  ],
  "zh": "0.1 与 10 µg/L 百菌清暴露 7 天使雄鱼脑 gnrh2 及性腺 lhr、star、hsd17b1 表达下降、肝 VTG 降低，精子 ROS 减少、线粒体电位升高而膜流动性下降。",
  "doi": "10.1016/j.chemosphere.2024.141423"
 },
 {
  "pmid": "38508462",
  "title": "Endocrine disrupting effects of parabens in zebrafish (Danio rerio): New insights from transcriptomics, metabolomics, and molecular dynamics simulation.",
  "author1": "Wei",
  "nAuthors": 5,
  "journal": "Chemosphere",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed"
  ],
  "marks": [
   "hist",
   "vtg",
   "steroid"
  ],
  "polClass": "edc",
  "polName": "对羟基苯甲酸甲酯、乙酯、丙酯",
  "stage": [
   "adu"
  ],
  "zh": "四种对羟基苯甲酸酯致性腺发育受损、VTG 与雌二醇升高，转录与代谢组指向酪氨酸与脂质代谢，优先激活 zfERβ2。",
  "doi": "10.1016/j.chemosphere.2024.141682"
 },
 {
  "pmid": "38657690",
  "title": "Thyroid and sex hormone disrupting effects of DEHTP at different life stages of zebrafish (Danio rerio).",
  "author1": "Ihn",
  "nAuthors": 7,
  "journal": "Chemosphere",
  "year": 2024,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed"
  ],
  "marks": [
   "th",
   "gene",
   "steroid"
  ],
  "polClass": "emerg",
  "polName": "对苯二甲酸二(2-乙基己基)酯",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "DEHTP 暴露 5 与 7 天使仔鱼甲状腺激素升高并下调 trh、tshβ、nis、dio2，21 天使雄鱼 T3 降低、TSH 升高、E2 下降。",
  "doi": "10.1016/j.chemosphere.2024.142105"
 },
 {
  "pmid": "38735493",
  "title": "Vitamin E alleviates chlorpyrifos induced glutathione depletion, lipid peroxidation and iron accumulation to inhibit ferroptosis in hepatocytes and mitigate toxicity in zebrafish.",
  "author1": "Sen Gupta",
  "nAuthors": 8,
  "journal": "Chemosphere",
  "year": 2024,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "ros",
   "enz",
   "mda",
   "gsh",
   "nrf2"
  ],
  "polClass": "op",
  "polName": "毒死蜱",
  "stage": [],
  "zh": "300 µg/L 毒死蜱经 GSH 耗竭、脂质过氧化与铁蓄积诱导肝细胞铁死亡，饲料添加 500 mg/kg 维生素E 经 Nrf2 上调 GST/GPx 逆转该过程并降低鱼体残留。",
  "doi": "10.1016/j.chemosphere.2024.142252"
 },
 {
  "pmid": "39067820",
  "title": "Cardiotoxicity risk induced by sanitary insecticide Dimefluthrin.",
  "author1": "Li",
  "nAuthors": 9,
  "journal": "Chemosphere",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "len",
   "morph",
   "ros",
   "gene"
  ],
  "polClass": "pest",
  "polName": "四氟甲醚菊酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "四氟甲醚菊酯致胚胎孵化率下降、体长缩短与心脏畸形、心室线性化，抗氧化酶活性降低、心脏 ROS 蓄积与凋亡，p53/cyto-C/caspase-9/3 上调。",
  "doi": "10.1016/j.chemosphere.2024.142910"
 },
 {
  "pmid": "38479676",
  "title": "Pesticide-induced alterations in zebrafish (Danio rerio) behavior, histology, DNA damage and mRNA expression: An integrated approach.",
  "author1": "Bianchi",
  "nAuthors": 6,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2024,
  "review": false,
  "organs": [
   "gi"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "hist",
   "gene"
  ],
  "polClass": "pest",
  "polName": "草甘膦、2,4-滴、吡虫啉",
  "stage": [
   "adu"
  ],
  "zh": "草甘膦、2,4-D、吡虫啉及混合物 96 h 暴露降低成鱼游动距离与速度、减弱趋触性，鳃损伤以 2,4-D 与混合物最重，伴 DNA 损伤与氧化应激基因上调。",
  "doi": "10.1016/j.cbpc.2024.109895"
 },
 {
  "pmid": "38925284",
  "title": "Evaluation of behavioral and neurochemical changes induced by carbofuran in zebrafish (Danio rerio).",
  "author1": "Oliveira",
  "nAuthors": 11,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2024,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "dive",
   "shoal",
   "ache"
  ],
  "polClass": "pest",
  "polName": "克百威",
  "stage": [
   "adu"
  ],
  "zh": "5–500 µg/L 克百威 96 h 暴露未改变成鱼新缸与社交偏好行为，脑内 AChE、非蛋白巯基与 TBARS 水平亦无显著变化。",
  "doi": "10.1016/j.cbpc.2024.109969"
 },
 {
  "pmid": "38832580",
  "title": "Zebrafish and nematodes as whole organism models to measure developmental neurotoxicity.",
  "author1": "Hughes",
  "nAuthors": 2,
  "journal": "Crit Rev Toxicol",
  "year": 2024,
  "review": true,
  "organs": [
   "br"
  ],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "主张在 OECD 443/426 与体外 NAM 之外，用斑马鱼与线虫等全生物体 3R 模型补足发育神经毒性终点，其脑发育通路与人类高度保守。",
  "doi": "10.1080/10408444.2024.2342448"
 },
 {
  "pmid": "38311823",
  "title": "Preclinical toxicological assessment of polydatin in zebrafish model.",
  "author1": "Schimith",
  "nAuthors": 7,
  "journal": "Drug Chem Toxicol",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "mt"
  ],
  "marks": [
   "surv",
   "hr",
   "morph"
  ],
  "polClass": "none",
  "polName": "虎杖苷",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "虎杖苷至 435 µM 未致胚胎死亡、孵化延迟、心率改变或畸形，运动与刺激反应正常，提示该浓度范围内无明显发育与心脏毒性。",
  "doi": "10.1080/01480545.2024.2311287"
 },
 {
  "pmid": "38176185",
  "title": "Effects of water fluoridation on early embryonic development of zebrafish.",
  "author1": "Wei",
  "nAuthors": 7,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2024,
  "review": false,
  "organs": [
   "li",
   "gu",
   "ey"
  ],
  "dirs": [
   "dv",
   "cv",
   "bh"
  ],
  "marks": [
   "morph",
   "len",
   "edema",
   "vasc",
   "ros"
  ],
  "polClass": "metal",
  "polName": "氟化物",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "氟化物经卵黄囊吸收致脂质过氧化与超氧在卵黄囊、肝和肠累积，引起心包水肿、脊柱弯曲、体长缩短与血管畸形，仔鱼活动减少、反应延迟。",
  "doi": "10.1016/j.ecoenv.2023.115907"
 },
 {
  "pmid": "38593498",
  "title": "Combined toxic effects of polyethylene microplastics and lambda-cyhalothrin on gut of zebrafish (Danio rerio).",
  "author1": "Zhao",
  "nAuthors": 11,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2024,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "surv",
   "mda",
   "enz",
   "gene"
  ],
  "polClass": "pest",
  "polName": "高效氯氟氰菊酯、聚乙烯",
  "stage": [
   "adu"
  ],
  "zh": "PE 微塑料吸附高效氯氟氰菊酯（34.4–39.0 mg/g）并提高其急性毒性，共暴露加重肠道氧化应激与脂质过氧化、抑制 myd88-nf-κb 通路并改变菌群。",
  "doi": "10.1016/j.ecoenv.2024.116296"
 },
 {
  "pmid": "39423504",
  "title": "Danio rerio embryo as in vivo model for the evaluation of the toxicity and metabolism of pyrovalerone cathinones.",
  "author1": "García-Atienza",
  "nAuthors": 4,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "edema",
   "hr",
   "escape"
  ],
  "polClass": "emerg",
  "polName": "α-PHP、TH-PVP",
  "stage": [
   "hat",
   "lar"
  ],
  "zh": "四种吡咯戊酮类卡西酮中 TH-PVP 毒性最强，急性暴露致心包与卵黄囊水肿、心动过缓、孵化延迟及仔鱼触碰无反应，主要经羟化与双羟化代谢。",
  "doi": "10.1016/j.ecoenv.2024.117174"
 },
 {
  "pmid": "39497475",
  "title": "Nonylphenol and Cetyl Alcohol Polyethoxylates Disrupt Thyroid Hormone Receptor Signaling to Disrupt Metabolic Health.",
  "author1": "Bérubé",
  "nAuthors": 5,
  "journal": "Endocrinology",
  "year": 2024,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed"
  ],
  "marks": [
   "th",
   "gene"
  ],
  "polClass": "edc",
  "polName": "壬基酚、鲸蜡醇聚氧乙烯醚",
  "stage": [
   "lar"
  ],
  "zh": "壬基酚与鲸蜡醇聚氧乙烯醚通过拮抗甲状腺激素受体信号致发育暴露斑马鱼甘油三酯蓄积，人细胞与鱼模型结果一致。",
  "doi": "10.1210/endocr/bqae149",
  "pmc": "PMC11574291"
 },
 {
  "pmid": "38857550",
  "title": "Developmental effects and lipid disturbances of zebrafish embryos exposed to three newly recognized bisphenol A analogues.",
  "author1": "Zhao",
  "nAuthors": 11,
  "journal": "Environ Int",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ed"
  ],
  "marks": [
   "hr",
   "morph",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚G、双酚M、双酚TMC",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "三种新型双酚类似物抑制卵黄囊吸收、改变心率并致畸，油红 O 显示卵黄囊脂质蓄积，伴甘油三酯与神经酰胺谱改变。",
  "doi": "10.1016/j.envint.2024.108795"
 },
 {
  "pmid": "38570156",
  "title": "Effects of developmental exposure to individual and combined PFAS on development and behavioral stress responses in larval zebrafish.",
  "author1": "Hamed",
  "nAuthors": 5,
  "journal": "Environ Pollut",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh",
   "ed"
  ],
  "marks": [
   "surv",
   "morph",
   "edema",
   "swim"
  ],
  "polClass": "emerg",
  "polName": "全氟辛烷磺酸、全氟辛酸、PFHxS",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "0.07 µg/L 起 PFOA、PFOS、PFHxS 即升高死亡率至 23.1%，并增加体轴、鳔、眼畸形与心包、卵黄囊水肿，四者混合效应更广。",
  "doi": "10.1016/j.envpol.2024.123912"
 },
 {
  "pmid": "38679130",
  "title": "Polystyrene microplastics enhance microcystin-LR-induced cardiovascular toxicity and oxidative stress in zebrafish embryos.",
  "author1": "Xiao",
  "nAuthors": 9,
  "journal": "Environ Pollut",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "hr",
   "edema",
   "vasc",
   "ros",
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯微塑料、微囊藻毒素-LR",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "PS 微/纳米塑料加重 MC-LR 致心率下降、心包水肿与静脉血栓，抑制 myh6、nkx2.5 等心血管基因并加剧 ROS 与凋亡。",
  "doi": "10.1016/j.envpol.2024.124022"
 },
 {
  "pmid": "38960114",
  "title": "Pyraclostrobin induces developmental toxicity and cardiotoxicity through oxidative stress and inflammation in zebrafish embryos.",
  "author1": "Wu",
  "nAuthors": 8,
  "journal": "Environ Pollut",
  "year": 2024,
  "review": false,
  "organs": [
   "he",
   "ey"
  ],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "morph",
   "len",
   "eyesize",
   "hr",
   "ros"
  ],
  "polClass": "pest",
  "polName": "吡唑醚菌酯",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "吡唑醚菌酯 20–60 µg/L 致脊柱弯曲、体长缩短、眼变小及心包水肿与心动过缓，ROS、MDA 升高并激活 NF-κB 炎症通路。",
  "doi": "10.1016/j.envpol.2024.124490"
 },
 {
  "pmid": "39245201",
  "title": "Toxicological mechanisms and molecular impacts of tire particles and antibiotics on zebrafish.",
  "author1": "Wen",
  "nAuthors": 8,
  "journal": "Environ Pollut",
  "year": 2024,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "plas",
  "polName": "轮胎微塑料、抗生素",
  "stage": [],
  "zh": "SBR 轮胎微塑料添加剂与抗生素经范德华力作用于细胞色素 P450，64 种组合中低阶组合肝毒性突出，吸附能力与疏水性影响毒性。",
  "doi": "10.1016/j.envpol.2024.124912"
 },
 {
  "pmid": "37993046",
  "title": "Tissue-specific toxic effects of nano-copper on zebrafish.",
  "author1": "Liu",
  "nAuthors": 5,
  "journal": "Environ Res",
  "year": 2024,
  "review": false,
  "organs": [
   "gi",
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "np",
  "polName": "纳米铜",
  "stage": [],
  "zh": "纳米铜毒性具组织特异性：鳃经 CB1 受体影响突触可塑性，肠嘧啶代谢受阻，肌肉 RAD51 异常影响 DNA 修复。",
  "doi": "10.1016/j.envres.2023.117717"
 },
 {
  "pmid": "39233032",
  "title": "Insights into the developmental and cardiovascular toxicity of bixafen using zebrafish embryos and larvae.",
  "author1": "Fang",
  "nAuthors": 5,
  "journal": "Environ Res",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "hr",
   "vasc",
   "gene"
  ],
  "polClass": "pest",
  "polName": "联苯吡菌胺",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "联苯吡菌胺致死亡率与孵化失败升高、心腔扩张、心率下降与血流迟缓，并改变 myl7、vmhc、nkx2.5、tbx5 与 flt1 表达。",
  "doi": "10.1016/j.envres.2024.119916"
 },
 {
  "pmid": "38374504",
  "title": "Developmental toxicity and metabolomics analyses of zebrafish (Danio rerio) embryos exposed to Fenoxaprop-p-ethyl.",
  "author1": "Zhao",
  "nAuthors": 7,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "hr",
   "morph",
   "mda",
   "enz"
  ],
  "polClass": "pest",
  "polName": "精噁唑禾草灵",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "精噁唑禾草灵 96 h 暴露降低心率与孵化率、升高畸形率并致氧化损伤，代谢组检出 102 与 60 个差异代谢物，主要涉及叶酸与 ABC 转运通路。",
  "doi": "10.1007/s11356-024-32507-7"
 },
 {
  "pmid": "38587780",
  "title": "Mixture of pesticides based on dimethylamine and imidacloprid affects locomotion of adult zebrafish.",
  "author1": "Siqueira",
  "nAuthors": 14,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ed"
  ],
  "marks": [
   "dive",
   "cort"
  ],
  "polClass": "pest",
  "polName": "二甲胺类除草剂、吡虫啉",
  "stage": [
   "adu"
  ],
  "zh": "320 µg/L 二甲胺类除草剂与吡虫啉混合急性暴露降低成鱼运动活性，单独或混合均不改变皮质醇水平。",
  "doi": "10.1007/s11356-024-33212-1"
 },
 {
  "pmid": "39557764",
  "title": "Molecular insights: zebrafish embryo damage linked to hospital effluent.",
  "author1": "Rosales-Pérez",
  "nAuthors": 8,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv",
   "mt"
  ],
  "marks": [
   "surv",
   "morph",
   "mda",
   "gene"
  ],
  "polClass": "mix",
  "polName": "医院废水",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "医院废水 LC50 2.328%、致畸 EC50 2.607%，引起卵黄囊与心包水肿、脊柱弯曲及眼色素减退，伴脂质与蛋白氧化损伤。",
  "doi": "10.1007/s11356-024-35533-7"
 },
 {
  "pmid": "38113251",
  "title": "Maternal or Paternal Antibiotics? Intergenerational Transmission and Reproductive Toxicity in Zebrafish.",
  "author1": "Xu",
  "nAuthors": 8,
  "journal": "Environ Sci Technol",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp"
  ],
  "marks": [
   "body",
   "f1",
   "fec"
  ],
  "polClass": "emerg",
  "polName": "抗生素混合物",
  "stage": [
   "adu"
  ],
  "zh": "15 种抗生素混合物在 F0 卵巢与精巢高蓄积并经母体优势传递至 F1，F1 卵的繁殖与发育指标受损，F2 虽已基本清除抗生素仍出现毒性反应。",
  "doi": "10.1021/acs.est.3c06090",
  "gen": "F2"
 },
 {
  "pmid": "38589735",
  "title": "A comparative study on targeted gene expression in zebrafish and its gill cell line exposed to chlorpyrifos.",
  "author1": "M J",
  "nAuthors": 8,
  "journal": "In Vitro Cell Dev Biol Anim",
  "year": 2024,
  "review": false,
  "organs": [
   "gi"
  ],
  "dirs": [
   "ox",
   "mt"
  ],
  "marks": [
   "ros",
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱",
  "stage": [],
  "zh": "毒死蜱 LC50 为 18.03 µg/L，亚致死浓度下鳃细胞系与活体均见 ROS 升高及 cox2a/cox2b、cyp1a、bax、cas3、p53 与 ache 表达改变，支持 DrG 细胞替代整体鱼。",
  "doi": "10.1007/s11626-024-00892-5"
 },
 {
  "pmid": "38396822",
  "title": "Inflammation in Development and Aging: Insights from the Zebrafish Model.",
  "author1": "Mastrogiovanni",
  "nAuthors": 4,
  "journal": "Int J Mol Sci",
  "year": 2024,
  "review": true,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "斑马鱼中同一炎症信号通路在胚胎期常具指导或有益作用，而在成体中与恶性肿瘤相关，体现炎症的双重角色。",
  "doi": "10.3390/ijms25042145",
  "pmc": "PMC10889087"
 },
 {
  "pmid": "39519279",
  "title": "Honey Enriched with Additives Alleviates Behavioral, Oxidative Stress, and Brain Alterations Induced by Heavy Metals and Imidacloprid in Zebrafish.",
  "author1": "Paduraru",
  "nAuthors": 18,
  "journal": "Int J Mol Sci",
  "year": 2024,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "ache",
   "mda",
   "enz",
   "shoal",
   "hist"
  ],
  "polClass": "metal",
  "polName": "汞、镉、吡虫啉",
  "stage": [
   "adu"
  ],
  "zh": "21 天亚慢性暴露中吡虫啉与汞、镉降低 AChE、升高 MDA 与 SOD/GPx，损害集群与游动，并在视顶盖与小脑引起星形胶质细胞活化。",
  "doi": "10.3390/ijms252111730",
  "pmc": "PMC11546825"
 },
 {
  "pmid": "37483114",
  "title": "Development of the integrated fish endocrine disruptor test (iFEDT)-Part A: Merging of existing fish test guidelines.",
  "author1": "Pannetier",
  "nAuthors": 13,
  "journal": "Integr Environ Assess Manag",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "mt",
   "ed"
  ],
  "marks": [
   "vtg",
   "sexratio",
   "hist",
   "morph"
  ],
  "polClass": "edc",
  "polName": "炔雌醇、丙基硫氧嘧啶",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "合并 OECD TG229 与 TG234 的 iFEDT 方案可行，PTU 与 EE2 均按预期改变生殖、卵黄蛋白原、性比与性腺成熟终点。",
  "doi": "10.1002/ieam.4819"
 },
 {
  "pmid": "37718569",
  "title": "Narcissin induces developmental toxicity and cardiotoxicity in zebrafish embryos via Nrf2/HO-1 and calcium signaling pathways.",
  "author1": "Gao",
  "nAuthors": 9,
  "journal": "J Appl Toxicol",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "morph",
   "len",
   "hr",
   "edema",
   "co"
  ],
  "polClass": "none",
  "polName": "水仙苷",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "水仙苷降低孵化率、致体长缩短与心包水肿，并出现心动过缓、SV-BA 距离增大与射血分数下降，经 Nrf2/HO-1 与钙信号通路。",
  "doi": "10.1002/jat.4545"
 },
 {
  "pmid": "37980041",
  "title": "Full sexual maturity-cycle exposure to environmentally relevant concentrations of 17β-estradiol decreases reproductive capacity of zebrafish.",
  "author1": "Zhang",
  "nAuthors": 7,
  "journal": "J Environ Sci (China)",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "fec",
   "sperm",
   "steroid",
   "gene"
  ],
  "polClass": "edc",
  "polName": "雌二醇",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "10–100 ng/L 雌二醇自胚胎至成鱼暴露使雌鱼增多、产卵量与卵母细胞成熟下降，雄鱼精子成熟与活力降低，性激素及 HPG 轴基因改变致受精率下降。",
  "doi": "10.1016/j.jes.2023.02.041"
 },
 {
  "pmid": "37741212",
  "title": "Toxic effects and potential mechanisms of zinc pyrithione (ZPT) exposure on sperm and testicular injury in zebrafish.",
  "author1": "Hu",
  "nAuthors": 7,
  "journal": "J Hazard Mater",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ox"
  ],
  "marks": [
   "sperm",
   "steroid",
   "ros",
   "hist",
   "gene"
  ],
  "polClass": "metal",
  "polName": "吡啶硫酮锌",
  "stage": [
   "adu"
  ],
  "zh": "吡啶硫酮锌致雄鱼睾酮剂量依赖性下降、精子畸形率升高与浓度活力降低，ROS 引起精巢 DNA 损伤，伴氧化应激、凋亡与线粒体膜超极化。",
  "doi": "10.1016/j.jhazmat.2023.132575"
 },
 {
  "pmid": "38959826",
  "title": "Oxidative damage and cardiotoxicity induced by 2-aminobenzothiazole in zebrafish (Danio rerio).",
  "author1": "Chen",
  "nAuthors": 6,
  "journal": "J Hazard Mater",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "hr",
   "avb",
   "vasc",
   "ros",
   "morph"
  ],
  "polClass": "emerg",
  "polName": "2-氨基苯并噻唑",
  "stage": [
   "pha",
   "hat",
   "lar",
   "adu"
  ],
  "zh": "2-氨基苯并噻唑致心脏环化失败与房室管分化异常，经铁死亡与氧化损伤致心脏畸形；成鱼心室扩大、心率与血流下降、RR/QRS/QTc 延长。",
  "doi": "10.1016/j.jhazmat.2024.135032"
 },
 {
  "pmid": "39018602",
  "title": "miR-29b-triggered epigenetic regulation of cardiotoxicity following exposure to deltamethrin in zebrafish.",
  "author1": "Wang",
  "nAuthors": 13,
  "journal": "J Hazard Mater",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "rp"
  ],
  "marks": [
   "hr",
   "edema",
   "srna",
   "gene"
  ],
  "polClass": "pest",
  "polName": "溴氰菊酯",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "0.5 µg/L 溴氰菊酯使 F1 心率下降 15.75%，miR-29b 靶向 dnmts 致心包水肿、心动过缓与心脏基因异常，提示表观修饰跨代影响子代心功能。",
  "doi": "10.1016/j.jhazmat.2024.135213",
  "gen": "F1"
 },
 {
  "pmid": "39191009",
  "title": "Transfer from ciliate to zebrafish: Unveiling mechanisms and combined effects of microplastics and heavy metals.",
  "author1": "Zhang",
  "nAuthors": 10,
  "journal": "J Hazard Mater",
  "year": 2024,
  "review": false,
  "organs": [
   "li",
   "gu"
  ],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "body",
   "hist",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉、微塑料",
  "stage": [
   "adu"
  ],
  "zh": "经草履虫摄食后微塑料可携带低于 0.1 µg/L 的镉进入斑马鱼体内，致代谢指标改变、肝发育延迟、肠道菌群紊乱、DNA 损伤与炎症。",
  "doi": "10.1016/j.jhazmat.2024.135645"
 },
 {
  "pmid": "38459561",
  "title": "Integrated mRNA- and miRNA-sequencing analyses unveil the underlying mechanism of tobacco pollutant-induced developmental toxicity in zebrafish embryos.",
  "author1": "Chen",
  "nAuthors": 9,
  "journal": "J Transl Med",
  "year": 2024,
  "review": false,
  "organs": [
   "br",
   "he"
  ],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "morph",
   "gene"
  ],
  "polClass": "mix",
  "polName": "香烟烟雾提取物",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "0.25–2.5% 香烟烟雾提取物剂量依赖地升高胚胎死亡率、降低孵化率并引起头与心脏畸形，ctsba 与 fads2 分别介导凋亡与脂代谢毒性。",
  "doi": "10.1186/s12967-024-05050-9",
  "pmc": "PMC10924323"
 },
 {
  "pmid": "38792660",
  "title": "Neurotoxicity of Some Environmental Pollutants to Zebrafish.",
  "author1": "Buzenchi Proca",
  "nAuthors": 3,
  "journal": "Life (Basel)",
  "year": 2024,
  "review": true,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [],
  "polClass": "mix",
  "polName": "微塑料、氟虫腈、溴氰菊酯",
  "stage": [],
  "zh": "综述汇总纳米与微塑料、氟虫腈、溴氰菊酯及鱼藤酮在斑马鱼中引起行为改变、脑组织损伤与氧化状态失衡，支持其作为神经毒性模型。",
  "doi": "10.3390/life14050640",
  "pmc": "PMC11122474"
 },
 {
  "pmid": "38285358",
  "title": "Alcian Blue Staining for Chondrocranium Development in Zebrafish.",
  "author1": "Beler",
  "nAuthors": 4,
  "journal": "Methods Mol Biol",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "dv"
  ],
  "marks": [
   "morph"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "Alcian 蓝染色在 2 dpf 即可显示斑马鱼颅面软骨，72–120 hpf 可测量颅骨长度与角度，用于定量评估化学物暴露后的颅面畸形。",
  "doi": "10.1007/978-1-0716-3625-1_27"
 },
 {
  "pmid": "38821665",
  "title": "Indigo dyes: Toxicity, teratogenicity, and genotoxicity studies in zebrafish embryos.",
  "author1": "Porkodi",
  "nAuthors": 7,
  "journal": "Mutat Res Genet Toxicol Environ Mutagen",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "edema",
   "hist",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "靛蓝染料",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "天然与合成靛蓝染料 96 h LC50 约 350 与 300 mg/L，均致卵凝结、尾分离、卵黄囊与心包水肿及尾部弯曲，彗星试验显示 DNA 损伤，FEN1、ERCC1 上调。",
  "doi": "10.1016/j.mrgentox.2024.503752"
 },
 {
  "pmid": "38278424",
  "title": "DDT and titanium dioxide nanoparticle coexposure induced neurobehavioral deficits in zebrafish.",
  "author1": "Lin",
  "nAuthors": 8,
  "journal": "Neurotoxicol Teratol",
  "year": 2024,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "shoal",
   "ntx",
   "gene",
   "body"
  ],
  "polClass": "pest",
  "polName": "滴滴涕、二氧化钛纳米颗粒",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "DDT 与二氧化钛纳米颗粒共暴露提高体内 DDT 蓄积与仔鱼运动量，成鱼社交、集群与攻击受损，脑与肌肉乙酰胆碱升高。",
  "doi": "10.1016/j.ntt.2024.107323"
 },
 {
  "pmid": "38443436",
  "title": "Lack of telomerase reduces cancer incidence and increases lifespan of zebrafish tp53M214K mutants.",
  "author1": "Şerifoğlu",
  "nAuthors": 3,
  "journal": "Sci Rep",
  "year": 2024,
  "review": false,
  "organs": [
   "gi"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "lifespan",
   "fec"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "tp53 突变消除 tert-/- 斑马鱼早衰并延长雄性生育力与寿命，而 tert 缺失又使 tp53 突变体肿瘤发生率减半、寿命延长。",
  "doi": "10.1038/s41598-024-56153-8",
  "pmc": "PMC10914805"
 },
 {
  "pmid": "38509148",
  "title": "Age-related changes in the zebrafish and killifish inner ear and lateral line.",
  "author1": "Coffin",
  "nAuthors": 6,
  "journal": "Sci Rep",
  "year": 2024,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "hair",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "老年斑马鱼内耳三个上皮区毛细胞减少、增殖下降且炎症基因上调，侧线毛细胞亦减少但仍保留损伤后再生的能力。",
  "doi": "10.1038/s41598-024-57182-z",
  "pmc": "PMC10954678"
 },
 {
  "pmid": "39424622",
  "title": "Long-term exposure to environmentally relevant Bisphenol-A levels affects growth, swimming, condition factor, sex ratio and histology of juvenile zebrafish.",
  "author1": "Senarath Pathirajage",
  "nAuthors": 2,
  "journal": "Sci Rep",
  "year": 2024,
  "review": false,
  "organs": [
   "go",
   "li",
   "ki"
  ],
  "dirs": [
   "ed",
   "bh",
   "dv"
  ],
  "marks": [
   "sexratio",
   "len",
   "hist",
   "surv"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "juv",
   "adu"
  ],
  "zh": "1 与 10 µg/L BPA 暴露 60 天使幼鱼死亡率升高、体长增长加快、性比偏雌、游泳速度下降，性腺、肝与肾出现病变。",
  "doi": "10.1038/s41598-024-73538-x",
  "pmc": "PMC11489671"
 },
 {
  "pmid": "39558027",
  "title": "Developmental toxicity and mechanism of dibutyl phthalate on the development of subintestinal vessels in zebrafish.",
  "author1": "Peng",
  "nAuthors": 5,
  "journal": "Sci Rep",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "cv",
   "dv",
   "ox"
  ],
  "marks": [
   "len",
   "hr",
   "ros",
   "vasc"
  ],
  "polClass": "emerg",
  "polName": "邻苯二甲酸二丁酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "DBP 升高胚胎 ROS、降低 SOD/CAT 并经 HIF 通路扰乱血管发育基因，致仔鱼肠下血管萌芽减少，抗氧化剂与 VEGF 抑制剂可逆转。",
  "doi": "10.1038/s41598-024-80088-9",
  "pmc": "PMC11574295"
 },
 {
  "pmid": "38030006",
  "title": "Studying mixture effects on uptake and tissue distribution of PFAS in zebrafish (Danio rerio) using physiologically based kinetic (PBK) modelling.",
  "author1": "Golosovskaia",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "br",
   "li",
   "go"
  ],
  "dirs": [
   "mt"
  ],
  "marks": [
   "body"
  ],
  "polClass": "emerg",
  "polName": "全氟化合物",
  "stage": [
   "adu"
  ],
  "zh": "PBK 模型预测 7 种 PFAS 组织浓度 85% 落在 10 倍误差内，FOSA 脑内 Cmax 超 15 µg/g，且全部可母源传递至卵。",
  "doi": "10.1016/j.scitotenv.2023.168738"
 },
 {
  "pmid": "38176558",
  "title": "Proximal discrepancies in intrinsic atomic interaction determines comparative in vivo biotoxicity of Chlorpyrifos and 3,5,6-trichloro-2-pyridinol in embryonic zebrafish.",
  "author1": "Ghosh",
  "nAuthors": 15,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "morph",
   "ros",
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱、3,5,6-三氯-2-吡啶酚",
  "stage": [
   "zyg"
  ],
  "zh": "胚胎暴露中毒死蜱代谢物 TCP 比母体诱导更强的形态畸形、氧化应激与凋亡，伴 Zhe1a、Sod1、p53 上调，差异源于原子相互作用与蓄积不同。",
  "doi": "10.1016/j.scitotenv.2023.169780"
 },
 {
  "pmid": "38181941",
  "title": "Combined toxic effects of polystyrene microplastics and 3,6-dibromocarbazole on zebrafish (Danio rerio) embryos.",
  "author1": "Zhang",
  "nAuthors": 10,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "morph",
   "ros",
   "body"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯、3,6-二溴咔唑",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "单独暴露聚苯乙烯微塑料或 3,6-二溴咔唑均升高 ROS 与凋亡并增加畸形，联合呈拮抗；50 µm 微塑料经摄食促进后者蓄积与二𫫇英样毒性。",
  "doi": "10.1016/j.scitotenv.2023.169787"
 },
 {
  "pmid": "38395170",
  "title": "Effects of single and combined exposure of virgin or aged polyethylene microplastics and penthiopyrad on zebrafish (Danio rerio).",
  "author1": "Zhao",
  "nAuthors": 8,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "surv",
   "body",
   "hist",
   "gene"
  ],
  "polClass": "pest",
  "polName": "吡噻菌胺、聚乙烯",
  "stage": [
   "adu"
  ],
  "zh": "聚乙烯微塑料提高吡噻菌胺急性毒性并增加其蓄积，第 7 天肠道氧化损伤加重，同时改变肠道菌群组成与促炎基因表达。",
  "doi": "10.1016/j.scitotenv.2024.171160"
 },
 {
  "pmid": "38402821",
  "title": "Arsenic and chromium induced hepatotoxicity in zebrafish (Danio rerio) at environmentally relevant concentrations: Mixture effects and involvement of Nrf2-Keap1-ARE pathway.",
  "author1": "Kamila",
  "nAuthors": 4,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "ros",
   "mda",
   "gsh",
   "enz",
   "hist"
  ],
  "polClass": "metal",
  "polName": "砷、铬",
  "stage": [
   "adu"
  ],
  "zh": "砷与铬单独及混合暴露均升高肝 ROS、MDA 与 GSH 并改变组织构架，Nrf2-Keap1 通路基因上调，效应呈相加性。",
  "doi": "10.1016/j.scitotenv.2024.171221"
 },
 {
  "pmid": "38735312",
  "title": "Metabolic perturbations in zebrafish (Danio rerio) larvae exposed to sulfentrazone and imidacloprid.",
  "author1": "Wang",
  "nAuthors": 8,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "ntx"
  ],
  "polClass": "pest",
  "polName": "吡虫啉、磺酰唑草酮",
  "stage": [
   "lar"
  ],
  "zh": "吡虫啉与磺酰唑草酮单暴露均抑制糖酵解、扰乱核苷酸代谢并升高乙酰胆碱，联合暴露在代谢层面呈拮抗、减轻急性与发育毒性。",
  "doi": "10.1016/j.scitotenv.2024.173150"
 },
 {
  "pmid": "38735319",
  "title": "Bromuconazole exposure induces cardiac dysfunction by upregulating the expression LEF1.",
  "author1": "Huang",
  "nAuthors": 4,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "len",
   "gene"
  ],
  "polClass": "pest",
  "polName": "溴康唑",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "环境相关浓度溴康唑暴露使斑马鱼体长缩短、肥满度升高，心室扩大、室壁变薄，心脏能量代谢通路受抑、ATP 减少，LEF1 异常激活被视为关键机制。",
  "doi": "10.1016/j.scitotenv.2024.173113"
 },
 {
  "pmid": "38788937",
  "title": "Parental exposure to Cypermethrin causes intergenerational toxicity in zebrafish offspring.",
  "author1": "Han",
  "nAuthors": 4,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "dv"
  ],
  "marks": [
   "surv",
   "hr",
   "morph",
   "gene"
  ],
  "polClass": "pest",
  "polName": "氯氰菊酯",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "亲代 28 天 5–20 µg/L 氯氰菊酯暴露降低 F1 仔鱼孵化率与心率，泳囊发育受损伴中性粒细胞浸润与炎症因子升高，PI3K-Akt 通路介导，Akt 抑制剂可缓解。",
  "doi": "10.1016/j.scitotenv.2024.173456",
  "gen": "F1"
 },
 {
  "pmid": "38925398",
  "title": "Simulated climate change and atrazine contamination can synergistically impair zebrafish testicular function.",
  "author1": "Souza",
  "nAuthors": 12,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ox"
  ],
  "marks": [
   "sperm",
   "steroid",
   "fec",
   "gene"
  ],
  "polClass": "pest",
  "polName": "阿特拉津",
  "stage": [
   "adu"
  ],
  "zh": "2100 年气候情景与低浓度阿特拉津叠加降低雄鱼性腺指数与精子产量，加重生殖细胞脱落与死亡，11-KT 下降、E2 升高，极端情景下氧化应激与 DNA 损伤更强。",
  "doi": "10.1016/j.scitotenv.2024.174173"
 },
 {
  "pmid": "38997031",
  "title": "Synergistic risk in the gut and liver: Insights into the toxic mechanisms and molecular interactions of combined exposure to triazophos and fenvalerate in zebrafish.",
  "author1": "An",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "gu",
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "surv",
   "hist",
   "gene"
  ],
  "polClass": "op",
  "polName": "三唑磷、氰戊菊酯",
  "stage": [
   "adu"
  ],
  "zh": "氰戊菊酯 96 h LC50 0.096 mg/L 毒性远高于三唑磷，共暴露加重肠屏障与肝损伤，富集 P53 通路并改变凋亡相关基因表达。",
  "doi": "10.1016/j.scitotenv.2024.174710"
 },
 {
  "pmid": "39084380",
  "title": "Parental exposure to acrylamide disrupts sphingolipid metabolism and impairs transgenerational neurodevelopment in zebrafish (Danio rerio) offspring.",
  "author1": "Wang",
  "nAuthors": 18,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "hr",
   "f1"
  ],
  "polClass": "emerg",
  "polName": "丙烯酰胺",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "亲代丙烯酰胺暴露 180 天使 F1 仔鱼死亡率升高、心率异常、游泳减慢并焦虑增强，鞘脂代谢紊乱与神经发育受损。",
  "doi": "10.1016/j.scitotenv.2024.175134",
  "gen": "F1"
 },
 {
  "pmid": "39260506",
  "title": "Adolescent exposure to tris(1,3-dichloro-2-propyl) phosphate (TCPP) induces reproductive toxicity in zebrafish through hypothalamic-pituitary-gonadal axis disruption.",
  "author1": "Yan",
  "nAuthors": 12,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "fec",
   "hist",
   "steroid",
   "gene",
   "sperm"
  ],
  "polClass": "emerg",
  "polName": "磷酸三(1-氯-2-丙基)酯",
  "stage": [
   "juv",
   "adu"
  ],
  "zh": "10 mg/L TCPP 自 30 至 120 dpf 暴露扰乱性别分化，雌鱼未成熟卵母细胞增多、雄鱼成熟精子减少，性激素失衡与 HPG 轴及类固醇合成通路改变，他莫昔芬可拮抗其效应。",
  "doi": "10.1016/j.scitotenv.2024.176096"
 },
 {
  "pmid": "39374705",
  "title": "Black phosphorus quantum dots induced neurotoxicity, intestinal microbiome and metabolome dysbiosis in zebrafish (Danio rerio).",
  "author1": "Cao",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [
   "br",
   "gu"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "ntx",
   "ache",
   "hist"
  ],
  "polClass": "np",
  "polName": "黑磷量子点",
  "stage": [],
  "zh": "5–500 µg/mL 黑磷量子点暴露 35 天致运动异常、脑 AChE 抑制与多巴胺酶活性改变，肠屏障损伤、菌群多样性下降，脑肠轴代谢与免疫通路受扰。",
  "doi": "10.1016/j.scitotenv.2024.176644"
 },
 {
  "pmid": "39401590",
  "title": "Toxicity of parental co-exposure of microplastic and bisphenol compounds on adult zebrafish: Multi-omics investigations on offspring.",
  "author1": "Xue",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚A、双酚S、聚乙烯微塑料",
  "stage": [
   "adu"
  ],
  "zh": "微塑料加重双酚A 与双酚S 的生殖毒性，子代多组学显示两者分别经 MAPK 与电压门控钙通道、光转导与视黄醇代谢影响神经与视觉发育。",
  "doi": "10.1016/j.scitotenv.2024.176897",
  "gen": "F1"
 },
 {
  "pmid": "39025157",
  "title": "Natural pyrethrins induced developmental toxicity of zebrafish swim bladder in vivo and genotoxicity of lung cells in vitro.",
  "author1": "Li",
  "nAuthors": 7,
  "journal": "Toxicol In Vitro",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "cv"
  ],
  "marks": [
   "surv",
   "hr",
   "gene",
   "swim"
  ],
  "polClass": "pest",
  "polName": "天然除虫菊素",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "天然除虫菊素降低斑马鱼胚胎存活率、孵化率与心率，并经 Wnt 与 Hedgehog 通路抑制鱼鳔发育。",
  "doi": "10.1016/j.tiv.2024.105896"
 },
 {
  "pmid": "39107868",
  "title": "Aryl hydrocarbon receptor-dependent toxicity by retene requires metabolic competence.",
  "author1": "Rude",
  "nAuthors": 9,
  "journal": "Toxicol Sci",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv",
   "mt"
  ],
  "marks": [
   "morph",
   "gene"
  ],
  "polClass": "pah",
  "polName": "惹烯",
  "stage": [
   "zyg"
  ],
  "zh": "惹烯需经代谢活化才激活 Ahr2 致畸，cyp1a 缺失鱼更敏感、cyp1b1 缺失鱼更耐受，24–48 hpf 为敏感窗。",
  "doi": "10.1093/toxsci/kfae098",
  "pmc": "PMC11514837"
 },
 {
  "pmid": "39058153",
  "title": "Using Zebrafish to Screen Developmental Toxicity of Per- and Polyfluoroalkyl Substances (PFAS).",
  "author1": "Britton",
  "nAuthors": 10,
  "journal": "Toxics",
  "year": 2024,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "surv",
   "morph",
   "edema"
  ],
  "polClass": "emerg",
  "polName": "全氟辛烷磺酸、全氟辛酸",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "182 种 PFAS 中约三成在 ≤100 µM 即可引起胚胎发育毒性，全氟辛烷磺酸的 BMC 为 7.48 µM，PFOSA、N-MeFOSA 等结构类似物毒性更强。",
  "doi": "10.3390/toxics12070501",
  "pmc": "PMC11281043"
 },
 {
  "pmid": "39590963",
  "title": "Neurotoxicity Assessment of Amicarbazone Using Larval Zebrafish.",
  "author1": "Baek",
  "nAuthors": 4,
  "journal": "Toxics",
  "year": 2024,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "morph",
   "hr",
   "gene"
  ],
  "polClass": "pest",
  "polName": "阿米卡巴宗",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "阿米卡巴宗降低胚胎存活率与心率、增加畸形，100–200 mg/L 抑制仔鱼运动，并破坏运动轴突与少突胶质发育、下调胆碱能与多巴胺能信号。",
  "doi": "10.3390/toxics12110783",
  "pmc": "PMC11598559"
 },
 {
  "pmid": "39728807",
  "title": "Rice Straw-Derived Biochar Mitigates Microcystin-LR-Induced Hepatic Histopathological Injury and Oxidative Damage in Male Zebrafish via the Nrf2 Signaling Pathway.",
  "author1": "Lin",
  "nAuthors": 8,
  "journal": "Toxins (Basel)",
  "year": 2024,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "hist",
   "mda",
   "enz",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "微囊藻毒素-LR、生物炭",
  "stage": [
   "adu"
  ],
  "zh": "稻秸生物炭降低肝脏 MC-LR 生物利用度，减轻肝组织病变，降低 MDA 并提高 CAT 与 SOD，激活 Nrf2 通路基因。",
  "doi": "10.3390/toxins16120549",
  "pmc": "PMC11679041"
 },
 {
  "pmid": "37611966",
  "title": "Exposure to Polystyrene Nanoplastics Led to Learning and Memory Deficits in Zebrafish by Inducing Oxidative Damage and Aggravating Brain Aging.",
  "author1": "Zhou",
  "nAuthors": 13,
  "journal": "Adv Healthc Mater",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ag",
   "ox"
  ],
  "marks": [
   "sabg",
   "ros",
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯纳米塑料",
  "stage": [
   "adu"
  ],
  "zh": "聚苯乙烯纳米塑料使斑马鱼 T 迷宫首次进入潜伏期延长、奖赏区停留减少，脑内 β-半乳糖苷酶与脂褐素升高并伴氧化损伤。",
  "doi": "10.1002/adhm.202301799"
 },
 {
  "pmid": "37673133",
  "title": "Effects of nanomaterial exposure on telomere dysfunction, hallmarks of mammalian and zebrafish cell senescence, and zebrafish mortality.",
  "author1": "Yin",
  "nAuthors": 5,
  "journal": "Ageing Res Rev",
  "year": 2023,
  "review": true,
  "organs": [],
  "dirs": [
   "ag",
   "ox"
  ],
  "marks": [
   "telo",
   "sabg"
  ],
  "polClass": "np",
  "polName": "纳米材料",
  "stage": [
   "lar"
  ],
  "zh": "Meta 分析显示纳米材料暴露显著缩短端粒（SMD −1.88）、升高衰老相关 β-半乳糖苷酶并增加斑马鱼死亡率（SMD 3.83）。",
  "doi": "10.1016/j.arr.2023.102062"
 },
 {
  "pmid": "37039087",
  "title": "A p21-GFP zebrafish model of senescence for rapid testing of senolytics in vivo.",
  "author1": "Morsli",
  "nAuthors": 8,
  "journal": "Aging Cell",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "ag",
   "mt"
  ],
  "marks": [
   "sabg",
   "gross"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "p21:GFP 转基因斑马鱼可实时追踪衰老细胞，辐照后衰老细胞增多伴肌纤维变薄与活动下降，槲皮素与达沙替尼 5 天内可减少之。",
  "doi": "10.1111/acel.13835",
  "pmc": "PMC10265157"
 },
 {
  "pmid": "37307698",
  "title": "Developmental and cardiac toxicity assessment of Ethyl 3-(N-butylacetamido) propanoate (EBAAP) in zebrafish embryos.",
  "author1": "Luo",
  "nAuthors": 12,
  "journal": "Aquat Toxicol",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "len",
   "morph",
   "hr",
   "co"
  ],
  "polClass": "emerg",
  "polName": "EBAAP",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "EBAAP 72 hpf LC50 为 140 mg/L，致体长缩短、脊柱弯曲、心包水肿与心率下降，心脏线性延长、泵血能力减弱，并伴 ROS 升高与凋亡基因上调。",
  "doi": "10.1016/j.aquatox.2023.106572"
 },
 {
  "pmid": "36052857",
  "title": "Genotoxicity of thiacloprid in zebrafish liver.",
  "author1": "Yavuz Türel",
  "nAuthors": 3,
  "journal": "Arch Environ Occup Health",
  "year": 2023,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [],
  "polClass": "pest",
  "polName": "噻虫啉",
  "stage": [
   "adu"
  ],
  "zh": "21 天 0.82 与 1.64 mg/L 噻虫啉使肝细胞彗星尾 DNA 损伤值由 4.37 升至 8.51 与 9.30，呈剂量依赖。",
  "doi": "10.1080/19338244.2022.2118212"
 },
 {
  "pmid": "36167911",
  "title": "Exposure to acetaminophen impairs gametogenesis and fertility in zebrafish (Danio rerio).",
  "author1": "Moreira",
  "nAuthors": 5,
  "journal": "Arch Toxicol",
  "year": 2023,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "fec",
   "sperm",
   "steroid",
   "hist"
  ],
  "polClass": "emerg",
  "polName": "对乙酰氨基酚",
  "stage": [
   "adu"
  ],
  "zh": "0.5–50 µg/L 对乙酰氨基酚暴露 28 天以上降低斑马鱼产卵量与受精率，雌鱼卵泡闭锁增多，雄鱼精子发生受损，E2 升高而 11-KT 与 PGE2 下降。",
  "doi": "10.1007/s00204-022-03390-3"
 },
 {
  "pmid": "36422735",
  "title": "Effects of bepridil on early cardiac development of zebrafish.",
  "author1": "Wei",
  "nAuthors": 7,
  "journal": "Cell Tissue Res",
  "year": 2023,
  "review": false,
  "organs": [
   "he",
   "li"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "edema",
   "vasc",
   "len",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "苄普地尔",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "苄普地尔致胚胎心包增大、卵黄囊水肿与生长迟缓，心血管循环异常、心肌收缩无力，仔鱼肝脏异位与发育不足，RNA-seq 显示相关基因与代谢应答改变。",
  "doi": "10.1007/s00441-022-03706-w",
  "pmc": "PMC9686465"
 },
 {
  "pmid": "37830599",
  "title": "The Effects of Aging on Rod Bipolar Cell Ribbon Synapses.",
  "author1": "Shrestha",
  "nAuthors": 8,
  "journal": "Cells",
  "year": 2023,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "hist"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "36 月龄斑马鱼视网膜双极细胞突触带数量减半、带长增加、局部钙信号降低，内网状层与丛状层变薄。",
  "doi": "10.3390/cells12192385",
  "pmc": "PMC10572008"
 },
 {
  "pmid": "36272627",
  "title": "Abamectin promotes behavior changes and liver injury in zebrafish.",
  "author1": "Santos",
  "nAuthors": 8,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "hist"
  ],
  "polClass": "pest",
  "polName": "阿维菌素",
  "stage": [
   "adu"
  ],
  "zh": "阿维菌素 96 h LC50 为 105.68 µg/L，暴露致成鱼肝细胞形态改变、糖原蓄积与核固缩，HSP70 与 P-gp 表达随浓度下降，并改变体姿、游动与摄食行为。",
  "doi": "10.1016/j.chemosphere.2022.136941"
 },
 {
  "pmid": "36849025",
  "title": "Diafenthiuron causes developmental toxicity in zebrafish (Danio rerio).",
  "author1": "Su",
  "nAuthors": 6,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "dv"
  ],
  "marks": [
   "len",
   "enz",
   "gene"
  ],
  "polClass": "pest",
  "polName": "丁醚脲",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "丁醚脲 0.01–1 µM 即缩短仔鱼体长、降低 SOD 活性，并下调垂体标志基因 pomc、prl 与肝标志 fabp10a，抑制肝脏发育。",
  "doi": "10.1016/j.chemosphere.2023.138253"
 },
 {
  "pmid": "36868414",
  "title": "Adverse thyroid hormone and behavioral alterations induced by three frequently used synthetic musk compounds in embryo-larval zebrafish (Danio rerio).",
  "author1": "Chae",
  "nAuthors": 5,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "bh"
  ],
  "marks": [
   "th",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "麝香酮、佳乐麝香、吐纳麝香",
  "stage": [
   "lar"
  ],
  "zh": "麝香酮与佳乐麝香在 0.13 µg/L 即降低仔鱼 T4 并致活动低下，吐纳麝香仅上调 crhβ、nis、dio2 等基因而不改变 T4 水平。",
  "doi": "10.1016/j.chemosphere.2023.138273"
 },
 {
  "pmid": "37080469",
  "title": "Realistic concentrations of Bisphenol-A trigger a neurotoxic response in the brain of zebrafish: Oxidative stress, behavioral impairment, acetylcholinesterase inhibition, and gene expression disruption.",
  "author1": "Heredia-García",
  "nAuthors": 7,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "dive",
   "ros",
   "ache",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "adu"
  ],
  "zh": "1500 ng/L 双酚A 暴露 96 h 使成鱼游动距离下降、冻结时间延长，脑内 ROS 升高、AChE 活性增强，mbp、α1-tubulin 与 manf 过表达，呈焦虑样神经毒性。",
  "doi": "10.1016/j.chemosphere.2023.138729"
 },
 {
  "pmid": "37211164",
  "title": "Neurotoxicity of an emerging organophosphorus flame retardant, resorcinol bis(diphenyl phosphate), in zebrafish larvae.",
  "author1": "Shi",
  "nAuthors": 7,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "dv"
  ],
  "marks": [
   "hr",
   "morph",
   "ache",
   "ntx",
   "vmr"
  ],
  "polClass": "emerg",
  "polName": "间苯二酚双(二苯基磷酸酯)",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "RDP 从 0.3 nM 起即降低仔鱼光暗转换与闪光刺激反应，抑制 AChE 活性、改变 GABA 与谷氨酸等递质含量，并下调 α1-tubulin、mbp、syn2a 等 CNS 基因。",
  "doi": "10.1016/j.chemosphere.2023.138944"
 },
 {
  "pmid": "37244557",
  "title": "Additive effects of microplastics on accumulation and toxicity of cadmium in male zebrafish.",
  "author1": "Al Marshoudi",
  "nAuthors": 4,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "gu",
   "li"
  ],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "body",
   "hist",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉、聚乙烯",
  "stage": [
   "adu"
  ],
  "zh": "21 天共暴露下水体镉与微塑料对雄性蓄积呈相加作用，镉蓄积增约 2 倍，并加重肠肝损伤与焦虑样行为。",
  "doi": "10.1016/j.chemosphere.2023.138969"
 },
 {
  "pmid": "37394195",
  "title": "Size-specific effects of microplastics and lead on zebrafish.",
  "author1": "Yu",
  "nAuthors": 3,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "gu",
   "li",
   "br"
  ],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "gene",
   "hist"
  ],
  "polClass": "metal",
  "polName": "铅、聚苯乙烯",
  "stage": [
   "adu"
  ],
  "zh": "0.1 µm 聚苯乙烯微塑料与铅共暴露最大改变肠道菌群多样性，下调 zo-1 与 occludin 并经 TLR4/NF-κB 致肝炎症，同时扰动胆汁酸与神经递质基因。",
  "doi": "10.1016/j.chemosphere.2023.139383"
 },
 {
  "pmid": "37597622",
  "title": "Dopaminergic and serotoninergic neurotoxicity of lanthanide phosphate (TbPO4) in developing zebrafish.",
  "author1": "Chen",
  "nAuthors": 10,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "bh"
  ],
  "marks": [
   "ntx",
   "gene"
  ],
  "polClass": "metal",
  "polName": "磷酸铽",
  "stage": [
   "lar"
  ],
  "zh": "20 mg/L 磷酸铽致仔鱼多动并扰乱胆碱能系统，多巴胺、5-羟色胺及其前体代谢物下降，TH 与 MAO 转录与蛋白下调，提示 DA 代谢参与行为改变。",
  "doi": "10.1016/j.chemosphere.2023.139861"
 },
 {
  "pmid": "37758082",
  "title": "Developmental toxicity and estrogenicity of glyphosate in zebrafish in vivo and in silico studies.",
  "author1": "Lu",
  "nAuthors": 8,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ed"
  ],
  "marks": [
   "edema",
   "vtg",
   "arom",
   "gene"
  ],
  "polClass": "pest",
  "polName": "草甘膦",
  "stage": [],
  "zh": "环境浓度草甘膦即致卵黄囊与心包水肿，并上调 ERα 蛋白及 cyp19a、vtg1/2、esr1/2 表达，提示其经雌激素受体发挥内分泌干扰作用。",
  "doi": "10.1016/j.chemosphere.2023.140275"
 },
 {
  "pmid": "37778644",
  "title": "Identification and characterization of long non-coding RNA (lncRNA) in cypermethrin and chlorpyrifos exposed zebrafish (Danio rerio) brain.",
  "author1": "Özdemir",
  "nAuthors": 4,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱、氯氰菊酯",
  "stage": [],
  "zh": "氯氰菊酯与毒死蜱急性暴露分别使斑马鱼脑 200 与 482 个 lncRNA 差异表达，靶通路集中于 MAPK、FoxO、PPAR 与 Wnt，提示 lncRNA 参与农药脑毒性调控。",
  "doi": "10.1016/j.chemosphere.2023.140324"
 },
 {
  "pmid": "37806324",
  "title": "Behavioural, developmental and biochemical effects in zebrafish caused by ibuprofen, irgarol and terbuthylazine.",
  "author1": "Islam",
  "nAuthors": 7,
  "journal": "Chemosphere",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "dv"
  ],
  "marks": [
   "surv",
   "ache"
  ],
  "polClass": "pest",
  "polName": "布洛芬、Irgarol、特丁津",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "布洛芬、Irgarol 与特丁津在 50–500 µg/L 延迟孵化，5–500 µg/L 即剂量依赖抑制游动距离，仔鱼 4 h 内即可回避（AC50 64–131 µg/L）。",
  "doi": "10.1016/j.chemosphere.2023.140373"
 },
 {
  "pmid": "36681757",
  "title": "Lateral line ablation by ototoxic compounds results in distinct rheotaxis profiles in larval zebrafish.",
  "author1": "Newton",
  "nAuthors": 6,
  "journal": "Commun Biol",
  "year": 2023,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "bh",
   "mt"
  ],
  "marks": [
   "hair"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "侧线损伤仔鱼仍能逆流，但游距更长、持续时间更短、角度变异更大，硫酸铜与新霉素造成各自特异的流变行为谱。",
  "doi": "10.1038/s42003-023-04449-2",
  "pmc": "PMC9867717"
 },
 {
  "pmid": "36717045",
  "title": "Evaluation of the oxidative toxicity induced by lead, manganese, and cadmium using genetically modified nrf2a-mutant zebrafish.",
  "author1": "Xu",
  "nAuthors": 7,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "ox",
   "mt"
  ],
  "marks": [
   "surv",
   "morph",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉、锰、铅",
  "stage": [
   "lar"
  ],
  "zh": "nrf2a 缺失使镉暴露仔鱼死亡率与畸形率升高、脑神经元凋亡并出现运动异常，镉毒性最强、铅最弱。",
  "doi": "10.1016/j.cbpc.2023.109550"
 },
 {
  "pmid": "36516622",
  "title": "Thyroid hormone disrupting potentials of benzisothiazolinone in embryo-larval zebrafish and rat pituitary GH3 cell line.",
  "author1": "Lee",
  "nAuthors": 5,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2023,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "th",
   "gene",
   "surv"
  ],
  "polClass": "emerg",
  "polName": "苯并异噻唑啉酮",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "30 µg/L 苯并异噻唑啉酮致胚胎凝血与孵化延迟、存活下降，T4 与 T3 降低而 tshβ、tshr、trh 上调，trα 下调。",
  "doi": "10.1016/j.ecoenv.2022.114406"
 },
 {
  "pmid": "36640570",
  "title": "Maternal exposure to chiral triazole fungicide tebuconazole induces enantioselective thyroid disruption in zebrafish offspring.",
  "author1": "Xu",
  "nAuthors": 10,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2023,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "rp",
   "dv"
  ],
  "marks": [
   "morph",
   "th",
   "gene"
  ],
  "polClass": "pest",
  "polName": "戊唑醇",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "母体 28 天摄食暴露戊唑醇使 F1 畸形率升高、游泳变慢，R-体比 S-体更强地降低 F1 的 T3/T4 并下调 HPT 轴基因。",
  "doi": "10.1016/j.ecoenv.2023.114540",
  "gen": "F1"
 },
 {
  "pmid": "36805134",
  "title": "Structure-based developmental toxicity and ASD-phenotypes of bisphenol A analogues in embryonic zebrafish.",
  "author1": "Bai",
  "nAuthors": 8,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "dv",
   "bh",
   "ed"
  ],
  "marks": [
   "morph",
   "shoal",
   "surv"
  ],
  "polClass": "edc",
  "polName": "双酚A、双酚F、双酚S",
  "stage": [
   "lar"
  ],
  "zh": "多种双酚类似物致畸与致死强于双酚 A，亚致死浓度下仔鱼社交距离增大、活动过多与焦虑增强，伴神经发生加速。",
  "doi": "10.1016/j.ecoenv.2023.114643"
 },
 {
  "pmid": "37418940",
  "title": "Additive cardiotoxicity of a bisphenol mixture in zebrafish embryos: The involvement of calcium channel and pump.",
  "author1": "Arrokhman",
  "nAuthors": 3,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ed"
  ],
  "marks": [
   "hr",
   "surv",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚A、双酚F、双酚AF",
  "stage": [
   "lar"
  ],
  "zh": "BPA、BPF、BPAF 与 BPB 单用或混合均致胚胎死亡与心动过缓，混合呈加和效应，机制为抑制 SERCA 与 L 型钙通道。",
  "doi": "10.1016/j.ecoenv.2023.115225"
 },
 {
  "pmid": "37418944",
  "title": "Particulate matter induces arrhythmia-like cardiotoxicity in zebrafish embryos by altering the expression levels of cardiac development- and ion channel-related genes.",
  "author1": "Park",
  "nAuthors": 9,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "avb",
   "gene"
  ],
  "polClass": "mix",
  "polName": "颗粒物（PM）",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "颗粒物暴露致斑马鱼胚胎心律失常，Tbx20、nppa、gata4 等心脏发育基因及 scn5lab、kcnq1、kcnh2a/b 等离子通道基因表达异常，提示经基因调控致心脏毒性。",
  "doi": "10.1016/j.ecoenv.2023.115201"
 },
 {
  "pmid": "37774545",
  "title": "Maternal exposure to dietary uranium causes oxidative stress and thyroid disruption in zebrafish offspring.",
  "author1": "Xu",
  "nAuthors": 9,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2023,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "rp",
   "ed",
   "ox"
  ],
  "marks": [
   "body",
   "th",
   "enz",
   "mda",
   "morph"
  ],
  "polClass": "metal",
  "polName": "铀",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "母体膳食铀可转移至子代且在 F1 浓度更高，F1 畸形增多、泳速下降，T3 降低而 T4 不变，CAT、SOD 与 MDA 显著改变。",
  "doi": "10.1016/j.ecoenv.2023.115501",
  "gen": "F1"
 },
 {
  "pmid": "37839186",
  "title": "Exposure to echimidine impairs the heart development and function of zebrafish larvae.",
  "author1": "Lin",
  "nAuthors": 10,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "surv",
   "len",
   "hr",
   "co",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "蓝蓟定",
  "stage": [
   "zyg",
   "lar",
   "hat"
  ],
  "zh": "0.02–2 mg/L 蓝蓟定致胚胎孵化延迟、体长缩短，仔鱼心动过速、每搏量与心输出量下降，心房扩张与壁变薄，gata4、tbx5、nkx2.5 及钙转运基因异常。",
  "doi": "10.1016/j.ecoenv.2023.115574"
 },
 {
  "pmid": "37597064",
  "title": "Bixafen causes hepatotoxicity and pancreas toxicity in zebrafish (Danio rerio).",
  "author1": "Wang",
  "nAuthors": 3,
  "journal": "Ecotoxicology",
  "year": 2023,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "dv"
  ],
  "marks": [
   "morph",
   "hr",
   "edema",
   "surv",
   "gene"
  ],
  "polClass": "pest",
  "polName": "联苯吡菌胺",
  "stage": [
   "zyg",
   "lar",
   "hat"
  ],
  "zh": "0.1–0.3 µM 联苯吡菌胺致胚胎脊柱弯曲、心包水肿、心率下降与孵化延迟，显著影响肝与胰腺发育，并下调 fabp10a 表达。",
  "doi": "10.1007/s10646-023-02687-y"
 },
 {
  "pmid": "37027337",
  "title": "Assessment of Nonalcoholic Fatty Liver Disease Symptoms and Gut-Liver Axis Status in Zebrafish after Exposure to Polystyrene Microplastics and Oxytetracycline, Alone and in Combination.",
  "author1": "Zhou",
  "nAuthors": 16,
  "journal": "Environ Health Perspect",
  "year": 2023,
  "review": false,
  "organs": [
   "li",
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "hist",
   "gene",
   "enz"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯、土霉素",
  "stage": [
   "adu"
  ],
  "zh": "PS 微塑料与土霉素共暴露 28 天致肝脂质蓄积、炎症与氧化应激，并破坏肠屏障与肝肠轴，共暴露更严重。",
  "doi": "10.1289/EHP11600",
  "pmc": "PMC10081693"
 },
 {
  "pmid": "37966802",
  "title": "Evaluation of Neural Regulation and Microglial Responses to Brain Injury in Larval Zebrafish Exposed to Perfluorooctane Sulfonate.",
  "author1": "Paquette",
  "nAuthors": 9,
  "journal": "Environ Health Perspect",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "emerg",
  "polName": "全氟辛烷磺酸",
  "stage": [
   "lar"
  ],
  "zh": "PFOS 使发育中小胶质细胞偏离稳态、上调 p2ry12，加重脑损伤反应并升高神经元活动，脑代谢组呈兴奋-抑制失衡。",
  "doi": "10.1289/EHP12861",
  "pmc": "PMC10650473"
 },
 {
  "pmid": "36805811",
  "title": "Intergenerational reproductive toxicity of parental exposure to prothioconazole and its metabolite on offspring and epigenetic regulation associated with DNA methylation in zebrafish.",
  "author1": "Tian",
  "nAuthors": 11,
  "journal": "Environ Int",
  "year": 2023,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "fec",
   "f1",
   "len",
   "meth"
  ],
  "polClass": "pest",
  "polName": "丙硫菌唑",
  "stage": [
   "adu"
  ],
  "zh": "0.5 与 10 µg/L 丙硫菌唑及其脱硫代谢物暴露 21 天使雌鱼受精率与配子发生下降更明显，F1 出现孵化延迟、体长缩短与运动异常，伴性激素与 DNA 甲基化改变。",
  "doi": "10.1016/j.envint.2023.107830",
  "gen": "F1"
 },
 {
  "pmid": "37748373",
  "title": "Mechanism of thyroid hormone and its structurally similar contaminant bisphenol S exposure on retinoid metabolism in zebrafish larval eyes.",
  "author1": "Qiu",
  "nAuthors": 6,
  "journal": "Environ Int",
  "year": 2023,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "okr",
   "eyesize",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚S",
  "stage": [
   "lar"
  ],
  "zh": "100 µg/L 双酚S 经 TRβ 诱导 cyp26a1、扰乱视黄醛代谢并削弱仔鱼视动反应，CYP26A1 或 TRβ 缺失时该效应消失。",
  "doi": "10.1016/j.envint.2023.108217"
 },
 {
  "pmid": "36356886",
  "title": "Influence of ultraviolet-aging and adsorbed pollutants on toxicological effects of polyvinyl chloride microplastics to zebrafish.",
  "author1": "Zhong",
  "nAuthors": 8,
  "journal": "Environ Pollut",
  "year": 2023,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "ros",
   "hist",
   "body"
  ],
  "polClass": "op",
  "polName": "聚氯乙烯、毒死蜱、红霉素",
  "stage": [
   "lar",
   "juv"
  ],
  "zh": "紫外老化改变 PVC 微塑料表面自由基与对毒死蜱、红霉素的吸附，老化颗粒致更重肠损伤与氧化应激，载药颗粒更强影响游泳行为。",
  "doi": "10.1016/j.envpol.2022.120617"
 },
 {
  "pmid": "37442323",
  "title": "New insights into triazole fungicide-caused hematopoietic abnormality in zebrafish based on GRα screening developmental toxicity.",
  "author1": "Wang",
  "nAuthors": 7,
  "journal": "Environ Pollut",
  "year": 2023,
  "review": false,
  "organs": [
   "ki"
  ],
  "dirs": [
   "dv"
  ],
  "marks": [
   "gene",
   "hist"
  ],
  "polClass": "pest",
  "polName": "氟硅唑",
  "stage": [
   "lar"
  ],
  "zh": "氟硅唑具最强 GRα 激动活性，下调 gata1、pu.1 与 cmyb，损伤后血岛与定向造血，并致肾组织炎症与肾小管塌陷。",
  "doi": "10.1016/j.envpol.2023.122182"
 },
 {
  "pmid": "37516295",
  "title": "The neurodevelopmental toxicity induced by combined exposure of nanoplastics and penicillin in embryonic zebrafish: The role of aging processes.",
  "author1": "Chen",
  "nAuthors": 8,
  "journal": "Environ Pollut",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "bh",
   "dv",
   "ox"
  ],
  "marks": [
   "hr",
   "coil",
   "escape",
   "ros"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯纳米塑料、青霉素",
  "stage": [
   "lar",
   "juv"
  ],
  "zh": "原始与老化聚苯乙烯纳米塑料均与青霉素协同抑制胚胎心率、自发运动与触碰反应，老化颗粒吸附更多青霉素而改变联合毒性模式。",
  "doi": "10.1016/j.envpol.2023.122281"
 },
 {
  "pmid": "36264459",
  "title": "Leaching behavior and evaluation of zebrafish embryo toxicity of microplastics and phthalates in take-away plastic containers.",
  "author1": "Xu",
  "nAuthors": 8,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv"
  ],
  "marks": [
   "avb",
   "edema",
   "morph"
  ],
  "polClass": "plas",
  "polName": "聚丙烯、聚苯乙烯、邻苯二甲酸酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "PS 容器在脂性食品模拟物中释放微塑料最多，PP 与 PS 醇性、脂性浸出液显著影响胚胎发育，引起心律失常、心包囊肿与脊柱弯曲。",
  "doi": "10.1007/s11356-022-23675-5"
 },
 {
  "pmid": "37002518",
  "title": "Toxicity and ecological risk assessment for two AhR agonistic pesticides mepanipyrim and cyprodinil and their metabolites.",
  "author1": "Shen",
  "nAuthors": 6,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "mt"
  ],
  "marks": [
   "gene",
   "erod"
  ],
  "polClass": "pest",
  "polName": "嘧菌胺、嘧霉胺",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "嘧菌胺与嘧霉胺按发育阶段动态诱导 cyp1a、ahr2 与 EROD，其多种代谢物具强 AhR 激动活性并构成生态风险。",
  "doi": "10.1007/s11356-023-26735-6"
 },
 {
  "pmid": "37213015",
  "title": "The sensitivity of the zebrafish embryo coiling assay for the detection of neurotoxicity by compounds with diverse modes of action.",
  "author1": "von Hellfeld",
  "nAuthors": 5,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "coil"
  ],
  "polClass": "pest",
  "polName": "西维因、鱼藤酮",
  "stage": [
   "seg",
   "pha"
  ],
  "zh": "自发尾部卷曲试验对多种作用模式神经毒物敏感：西维因、六氯酚与鱼藤酮在约 30 hpf 即引起严重行为改变，37–38 hpf 暗期变化呈严格浓度依赖。",
  "doi": "10.1007/s11356-023-27662-2",
  "pmc": "PMC10293418"
 },
 {
  "pmid": "37222891",
  "title": "Short-term exposure of Cannabidiol on Zebrafish (Danio Rerio): Reproductive Toxicity.",
  "author1": "Li",
  "nAuthors": 8,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2023,
  "review": false,
  "organs": [
   "go",
   "li"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "fec",
   "vtg",
   "steroid",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "大麻二酚",
  "stage": [
   "adu"
  ],
  "zh": "CBD 使雌鱼产卵减少、卵与精子早熟、卵黄蛋白原下降及 E2/T 失衡，脑、性腺与肝凋亡基因上调。",
  "doi": "10.1007/s11356-023-27792-7"
 },
 {
  "pmid": "38082038",
  "title": "Bisphenol B induces developmental toxicity in zebrafish via oxidative stress.",
  "author1": "Wang",
  "nAuthors": 7,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2023,
  "review": false,
  "organs": [
   "br",
   "he"
  ],
  "dirs": [
   "dv",
   "ox",
   "bh"
  ],
  "marks": [
   "morph",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚B",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "10–1000 µg/L 双酚 B 经氧化损伤抑制神经与心血管发育关键基因，致仔鱼早期发育毒性，N-乙酰半胱氨酸可缓解。",
  "doi": "10.1007/s11356-023-31161-9"
 },
 {
  "pmid": "36779393",
  "title": "Multi- and Transgenerational Developmental Impairments Are Induced by Decabromodiphenyl Ethane (DBDPE) in Zebrafish Larvae.",
  "author1": "Sun",
  "nAuthors": 11,
  "journal": "Environ Sci Technol",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "dv",
   "bh"
  ],
  "marks": [
   "morph",
   "surv",
   "ntx",
   "meth"
  ],
  "polClass": "emerg",
  "polName": "十溴二苯乙烷",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "全生命周期暴露于环境浓度十溴二苯乙烷使未再暴露的 F2 仔鱼畸形率升高、存活率下降，转录组与 DNA 甲基化显示糖脂代谢、能量代谢与神经发育受损。",
  "doi": "10.1021/acs.est.3c00032",
  "gen": "F2"
 },
 {
  "pmid": "37651267",
  "title": "Chronic Paternal/Maternal Exposure to Environmental Concentrations of Imidacloprid and Thiamethoxam Causes Intergenerational Toxicity in Zebrafish Offspring.",
  "author1": "Zhang",
  "nAuthors": 7,
  "journal": "Environ Sci Technol",
  "year": 2023,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed",
   "dv"
  ],
  "marks": [
   "fec",
   "steroid",
   "vtg",
   "hr"
  ],
  "polClass": "pest",
  "polName": "吡虫啉、噻虫嗪",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "F0 连续 144 天暴露 50–500 ng/L 吡虫啉或噻虫嗪降低产卵量、性激素与 VTG，F1 出现心率与自发运动升高及性腺转录改变。",
  "doi": "10.1021/acs.est.3c04371",
  "gen": "F1"
 },
 {
  "pmid": "37847870",
  "title": "Parental Exposure to Environmentally Relevant Concentrations of Bisphenol-A Bis(diphenyl phosphate) Impairs Vascular Development in Offspring through DNA/RNA Methylation-Dependent Transmission.",
  "author1": "Wang",
  "nAuthors": 16,
  "journal": "Environ Sci Technol",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "cv"
  ],
  "marks": [
   "vasc",
   "meth",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "双酚A双(二苯基磷酸酯)",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "亲代 30–300 ng/L 双酚A双(二苯基磷酸酯)暴露无母体传递，仍致子代多类血管形态异常，伴 Notch/Vegf 通路基因 m6A 高或低甲基化及 m5C 与 m6A 调节基因改变。",
  "doi": "10.1021/acs.est.3c03579",
  "gen": "F1"
 },
 {
  "pmid": "37880149",
  "title": "Evaluation and Mechanistic Study of Transgenerational Neurotoxicity in Zebrafish upon Life Cycle Exposure to Decabromodiphenyl Ethane (DBDPE).",
  "author1": "Sun",
  "nAuthors": 10,
  "journal": "Environ Sci Technol",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "bh"
  ],
  "marks": [
   "shoal",
   "len",
   "meth",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "十溴二苯乙烷",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "环境浓度十溴二苯乙烷全生命周期暴露致 F1、F2 成鱼社会行为缺陷；母体传递未检出，但亲代向受精卵传递神经递质的过程被扰乱。",
  "doi": "10.1021/acs.est.3c04578",
  "gen": "F2"
 },
 {
  "pmid": "37890152",
  "title": "Waterborne Tebuconazole Exposure Induces Male-Biased Sex Differentiation in Zebrafish (Danio rerio) Larvae via Aromatase Inhibition.",
  "author1": "Qiao",
  "nAuthors": 13,
  "journal": "Environ Sci Technol",
  "year": 2023,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "steroid",
   "arom",
   "gene"
  ],
  "polClass": "pest",
  "polName": "戊唑醇",
  "stage": [
   "lar",
   "sex",
   "adu"
  ],
  "zh": "0.5 mg/L 戊唑醇性分化期暴露提高雄鱼比例，睾酮升高、E2 与 cyp19a1a 下降，与雌二醇共暴露可恢复性比，机制为抑制芳香化酶。",
  "doi": "10.1021/acs.est.3c03181"
 },
 {
  "pmid": "36331003",
  "title": "Chlorphoxim induces neurotoxicity in zebrafish embryo through activation of oxidative stress.",
  "author1": "Xiong",
  "nAuthors": 6,
  "journal": "Environ Toxicol",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox",
   "dv"
  ],
  "marks": [
   "surv",
   "hr",
   "edema",
   "ache",
   "ros"
  ],
  "polClass": "op",
  "polName": "氯辛硫磷",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "高浓度氯辛硫磷提高胚胎死亡率与心包水肿率、降低孵化率与心率，抑制 SOD 与 CAT 并升高 ROS，虾青素可缓解其神经毒性。",
  "doi": "10.1002/tox.23702"
 },
 {
  "pmid": "37471628",
  "title": "Tralomethrin causes cardiovascular toxicity in zebrafish (Danio rerio) embryos.",
  "author1": "Guo",
  "nAuthors": 4,
  "journal": "Environ Toxicol",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "hr",
   "edema",
   "morph",
   "gene",
   "ros"
  ],
  "polClass": "pest",
  "polName": "四溴菊酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "16.63–49.88 µg/L 四溴菊酯致胚胎心包水肿、卵黄吸收延迟、泳囊未充气、心率升高与红细胞生成障碍，alas2、gata1a、nkx2.5、myl7 表达紊乱。",
  "doi": "10.1002/tox.23911"
 },
 {
  "pmid": "36920003",
  "title": "Reversibility of Thyroid Hormone System-Disrupting Effects on Eye and Thyroid Follicle Development in Zebrafish (Danio rerio) Embryos.",
  "author1": "Pannetier",
  "nAuthors": 10,
  "journal": "Environ Toxicol Chem",
  "year": 2023,
  "review": false,
  "organs": [
   "ey",
   "th"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "eyesize",
   "th"
  ],
  "polClass": "edc",
  "polName": "丙硫氧嘧啶、四溴双酚A",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "PTU 与四溴双酚A 持续暴露改变眼径、色素与视网膜细胞结构及甲状腺滤泡形态，停药 3 天后效应部分可逆，提示眼发育是敏感的甲状腺干扰终点。",
  "doi": "10.1002/etc.5608"
 },
 {
  "pmid": "36596390",
  "title": "Chronic estrone exposure affects spermatogenesis and sperm quality in zebrafish (Danio rerio).",
  "author1": "Ribeiro",
  "nAuthors": 6,
  "journal": "Environ Toxicol Pharmacol",
  "year": 2023,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "sperm",
   "steroid",
   "hist",
   "gene"
  ],
  "polClass": "edc",
  "polName": "雌酮",
  "stage": [
   "adu"
  ],
  "zh": "20–2000 ng/L 雌酮暴露 49 天使雄鱼精巢精原细胞与支持细胞增多、精子数减少，性腺指数与 11-KT 下降、精巢雌二醇与 IGF1R 升高，精子前向运动与速度降低。",
  "doi": "10.1016/j.etap.2022.104058"
 },
 {
  "pmid": "37183669",
  "title": "Optimizing assays of zebrafish larvae swimming performance for drug discovery.",
  "author1": "Widrick",
  "nAuthors": 4,
  "journal": "Expert Opin Drug Discov",
  "year": 2023,
  "review": true,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "综述整合仔鱼游泳行为的高通量测定方法，指出饲养、实验设计与数据采集规范可降低个体间变异并提升筛选灵敏度。",
  "doi": "10.1080/17460441.2023.2211802",
  "pmc": "PMC10485652"
 },
 {
  "pmid": "36470324",
  "title": "Endocrine disruption and reproductive impairment of methylparaben in adult zebrafish.",
  "author1": "Hu",
  "nAuthors": 5,
  "journal": "Food Chem Toxicol",
  "year": 2023,
  "review": false,
  "organs": [
   "go",
   "li"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "vtg",
   "steroid",
   "sperm",
   "f1"
  ],
  "polClass": "edc",
  "polName": "对羟基苯甲酸甲酯",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "1 µg/L 起对羟基苯甲酸甲酯即阻断精子与卵子发生，10 µg/L 提高性腺指数；雌二醇、睾酮与 11-酮睾酮下降，肝 VTG 下调，子代死亡升高、提前孵化。",
  "doi": "10.1016/j.fct.2022.113545",
  "gen": "F1"
 },
 {
  "pmid": "37898232",
  "title": "Icariin induces developmental toxicity via thyroid hormone disruption in zebrafish larvae.",
  "author1": "Wu",
  "nAuthors": 7,
  "journal": "Food Chem Toxicol",
  "year": 2023,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "len",
   "th",
   "gene",
   "morph",
   "swim"
  ],
  "polClass": "emerg",
  "polName": "淫羊藿苷",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "10 与 40 µM 淫羊藿苷降低孵化率与体长、致鳔异常与运动受损，40 µM 改变 T4 并降低 T3/T4 比，dio1 下调。",
  "doi": "10.1016/j.fct.2023.114155"
 },
 {
  "pmid": "36966979",
  "title": "Comparative analysis of two new zebrafish models: The cyp1a low-expression line and cyp1a knockout line under PAHs exposure.",
  "author1": "Xie",
  "nAuthors": 5,
  "journal": "Gene",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "ox"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "pah",
  "polName": "多环芳烃",
  "stage": [
   "lar"
  ],
  "zh": "cyp1a 低表达荧光品系对 PAHs 更敏感，而 cyp1a 敲除品系通过上调 cyp1b 补偿，敏感性未显著增加。",
  "doi": "10.1016/j.gene.2023.147391"
 },
 {
  "pmid": "36900939",
  "title": "Molecular Mechanisms of Tebuconazole Affecting the Social Behavior and Reproduction of Zebrafish.",
  "author1": "Yan",
  "nAuthors": 10,
  "journal": "Int J Environ Res Public Health",
  "year": 2023,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "bh",
   "ed"
  ],
  "marks": [
   "fec",
   "sperm",
   "steroid",
   "shoal",
   "hist"
  ],
  "polClass": "pest",
  "polName": "戊唑醇",
  "stage": [
   "adu"
  ],
  "zh": "0.4–1.6 mg/L 戊唑醇暴露 21 天在性腺蓄积，降低累计产卵量与 F1 受精率，改变精子活力、性腺组织、社交行为及 E2、T 与 HPG 轴基因。",
  "doi": "10.3390/ijerph20053928",
  "pmc": "PMC10002025",
  "gen": "F1"
 },
 {
  "pmid": "37446277",
  "title": "Developmental Neurotoxicity of Trichlorfon in Zebrafish Larvae.",
  "author1": "Shi",
  "nAuthors": 8,
  "journal": "Int J Mol Sci",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "dv"
  ],
  "marks": [
   "surv",
   "hr",
   "len",
   "ache",
   "ntx"
  ],
  "polClass": "op",
  "polName": "敌百虫",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "敌百虫 0.1–5 mg/L 降低仔鱼存活率、孵化率、心率与体长，抑制 AChE 并减少乙酰胆碱、多巴胺与 5-HT 含量。",
  "doi": "10.3390/ijms241311099",
  "pmc": "PMC10342510"
 },
 {
  "pmid": "37762171",
  "title": "First-Generation Synthetic Cathinones Produce Arrhythmia in Zebrafish Eleutheroembryos: A New Approach Methodology for New Psychoactive Substances Cardiotoxicity Evaluation.",
  "author1": "Teixidó",
  "nAuthors": 7,
  "journal": "Int J Mol Sci",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "mt"
  ],
  "marks": [
   "hr",
   "avb",
   "surv"
  ],
  "polClass": "emerg",
  "polName": "甲氧麻黄酮、亚甲二氧基甲卡西酮、MDPV",
  "stage": [
   "lar"
  ],
  "zh": "五种滥用药物均致 4 dpf 胚胎心动过缓、心律失常与房室阻滞，MDPV 最强，可用作致 QT 延长药物筛查模型。",
  "doi": "10.3390/ijms241813869",
  "pmc": "PMC10531093"
 },
 {
  "pmid": "36182181",
  "title": "Mepanipyrim induces visual developmental toxicity and vision-guided behavioral alteration in zebrafish larvae.",
  "author1": "Shen",
  "nAuthors": 5,
  "journal": "J Environ Sci (China)",
  "year": 2023,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "eyesize",
   "escape",
   "gene"
  ],
  "polClass": "pest",
  "polName": "嘧菌胺",
  "stage": [
   "lar"
  ],
  "zh": "嘧菌胺致仔鱼视网膜损伤并改变强光与单色光诱发的逃逸行为，grk1b 受 AhR 调控，中长波长视蛋白受影响是行为改变主因。",
  "doi": "10.1016/j.jes.2021.11.008"
 },
 {
  "pmid": "36503748",
  "title": "Joint effects of micro-sized polystyrene and chlorpyrifos on zebrafish based on multiple endpoints and gut microbial effects.",
  "author1": "Huang",
  "nAuthors": 6,
  "journal": "J Environ Sci (China)",
  "year": 2023,
  "review": false,
  "organs": [
   "gu",
   "li"
  ],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "ros",
   "hist",
   "body"
  ],
  "polClass": "op",
  "polName": "毒死蜱、聚苯乙烯",
  "stage": [
   "adu"
  ],
  "zh": "微聚苯乙烯蓄积于肠道与肝并致氧化应激、多动与肠菌紊乱，吸附毒死蜱后个体毒性增强，源于微塑料在鱼体内释放毒死蜱。",
  "doi": "10.1016/j.jes.2022.06.001"
 },
 {
  "pmid": "36272374",
  "title": "Developmental toxicity of prometryn induces mitochondrial dysfunction, oxidative stress, and failure of organogenesis in zebrafish (Danio rerio).",
  "author1": "Min",
  "nAuthors": 6,
  "journal": "J Hazard Mater",
  "year": 2023,
  "review": false,
  "organs": [
   "he",
   "li",
   "br"
  ],
  "dirs": [
   "dv",
   "ox",
   "cv"
  ],
  "marks": [
   "surv",
   "len",
   "edema",
   "hr",
   "ros"
  ],
  "polClass": "pest",
  "polName": "扑草净",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "扑草净缩短体长、致卵黄囊与心包水肿、心率异常及存活下降，并抑制线粒体呼吸、升高 ROS 与凋亡，fli1a、olig2、L-fabp 转基因显示器官发育缺陷。",
  "doi": "10.1016/j.jhazmat.2022.130202"
 },
 {
  "pmid": "37084512",
  "title": "Potential effects of natural aging process on the characteristics and toxicity of facial masks: A zebrafish-based study.",
  "author1": "Kim",
  "nAuthors": 4,
  "journal": "J Hazard Mater",
  "year": 2023,
  "review": false,
  "organs": [
   "li",
   "gi",
   "gu"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "hist",
   "feed"
  ],
  "polClass": "plas",
  "polName": "口罩源微塑料",
  "stage": [
   "adu"
  ],
  "zh": "自然老化八周的一次性口罩碎片表面开裂并吸附化学物，新旧碎片均损伤斑马鱼肝、鳃与肠，降低消化能力与运动攻击性。",
  "doi": "10.1016/j.jhazmat.2023.131425"
 },
 {
  "pmid": "37156044",
  "title": "Bensulide-induced oxidative stress causes developmental defects of cardiovascular system and liver in zebrafish (Danio rerio).",
  "author1": "Kim",
  "nAuthors": 5,
  "journal": "J Hazard Mater",
  "year": 2023,
  "review": false,
  "organs": [
   "he",
   "li",
   "ey"
  ],
  "dirs": [
   "dv",
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "len",
   "hr",
   "ros"
  ],
  "polClass": "op",
  "polName": "地散磷",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "3 mg/L 地散磷使 96 hpf 仔鱼心率降至对照的 16.37%、肝面积降至 41.98%，同时 ROS 升高 238% 并抑制抗氧化酶。",
  "doi": "10.1016/j.jhazmat.2023.131577"
 },
 {
  "pmid": "37163897",
  "title": "Transgenerational endocrine disruptor effects of cadmium in zebrafish and contribution of standing epigenetic variation to adaptation.",
  "author1": "Pierron",
  "nAuthors": 9,
  "journal": "J Hazard Mater",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "meth",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉",
  "stage": [
   "adu"
  ],
  "zh": "镉诱导的 esr1 DNA 甲基化改变呈性别依赖并遗传至第四代，但由单核苷酸多态性造成的甲基化位点增减驱动，既引起跨代紊乱也促进快速适应。",
  "doi": "10.1016/j.jhazmat.2023.131579",
  "gen": "F3+"
 },
 {
  "pmid": "37185102",
  "title": "Effects of Chloramine T on zebrafish embryos malformations associated with cardiotoxicity and neurotoxicity.",
  "author1": "Rivero-Wendt",
  "nAuthors": 7,
  "journal": "J Toxicol Environ Health A",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "cv"
  ],
  "marks": [
   "surv",
   "hr",
   "edema",
   "ache",
   "morph"
  ],
  "polClass": "emerg",
  "polName": "氯胺T",
  "stage": [
   "zyg",
   "hat",
   "lar"
  ],
  "zh": "氯胺T 24 与 96 h 的 LC50 为 143.05 与 130.97 mg/L，暴露致孵化延迟、心率下降、心包水肿与平衡失调，64–128 mg/L 抑制 AChE 活性。",
  "doi": "10.1080/15287394.2023.2205271"
 },
 {
  "pmid": "37374200",
  "title": "Neonicotinoid Imidacloprid Affects the Social Behavior of Adult Zebrafish by Damaging Telencephalon Neurons through Oxidation Stress, Inflammation, and Apoptosis.",
  "author1": "Chung",
  "nAuthors": 4,
  "journal": "Life (Basel)",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "shoal",
   "hist"
  ],
  "polClass": "pest",
  "polName": "吡虫啉",
  "stage": [
   "adu"
  ],
  "zh": "吡虫啉暴露降低成鱼游速、距离与加减速能力，削弱异性吸引与雄鱼防御警觉，端脑神经元出现氧化应激、炎症与凋亡损伤。",
  "doi": "10.3390/life13061418",
  "pmc": "PMC10304127"
 },
 {
  "pmid": "36828229",
  "title": "Zn-Al layered double hydroxides induce embryo malformations and impair locomotion behavior in Danio rerio.",
  "author1": "Carneiro",
  "nAuthors": 9,
  "journal": "NanoImpact",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "morph"
  ],
  "polClass": "np",
  "polName": "锌铝层状双氢氧化物",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "ZnAl-LDH 96 h LC50 为 559.9 mg/L，致心包水肿、卵黄囊吸收不全与尾部畸形，并损害仔鱼暗期运动，但生化与分子指标无显著改变。",
  "doi": "10.1016/j.impact.2023.100457"
 },
 {
  "pmid": "37142828",
  "title": "Gut-specific telomerase expression counteracts systemic aging in telomerase-deficient zebrafish.",
  "author1": "El Maï",
  "nAuthors": 11,
  "journal": "Nat Aging",
  "year": 2023,
  "review": false,
  "organs": [
   "gu",
   "go"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "lifespan",
   "sabg"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "肠道特异性表达端粒酶可挽救 tert-/- 斑马鱼的肠道衰老，使寿命延长 40%，并改善生殖与造血等远端器官的衰老。",
  "doi": "10.1038/s43587-023-00401-5",
  "pmc": "PMC10191862"
 },
 {
  "pmid": "36423854",
  "title": "Adapting classic paradigms to analyze alterations of shoal-wide behavior in early-life stages of zebrafish (Danio rerio) - A case study with fluoxetine.",
  "author1": "Frese",
  "nAuthors": 2,
  "journal": "Neurotoxicol Teratol",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "mt"
  ],
  "marks": [
   "dive",
   "shoal"
  ],
  "polClass": "emerg",
  "polName": "氟西汀",
  "stage": [
   "juv"
  ],
  "zh": "将新缸试验与捕食者反应试验改造为可记录群游行为，氟西汀在低于 OECD 236 急性 EC10 三个数量级的浓度即改变幼鱼趋底反应与群体一致性。",
  "doi": "10.1016/j.ntt.2022.107136",
  "key": true
 },
 {
  "pmid": "36493994",
  "title": "Glyphosate-based herbicide (GBH) causes damage in embryo-larval stages of zebrafish (Danio rerio).",
  "author1": "Ames",
  "nAuthors": 8,
  "journal": "Neurotoxicol Teratol",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox",
   "bh"
  ],
  "marks": [
   "surv",
   "hr",
   "morph",
   "ache"
  ],
  "polClass": "pest",
  "polName": "草甘膦",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "饮水浓度 250–1000 µg/L 的草甘膦基除草剂降低存活、加速孵化、致心包与卵黄囊水肿及脊柱弯曲，并抑制 GST 与 AChE 活性，自发运动与触碰反应无变化。",
  "doi": "10.1016/j.ntt.2022.107147"
 },
 {
  "pmid": "37739188",
  "title": "Unveiling the molecular mechanisms and developmental consequences of mercury (Hg) toxicity in zebrafish embryo-larvae: A comprehensive approach.",
  "author1": "Henriques",
  "nAuthors": 7,
  "journal": "Neurotoxicol Teratol",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh",
   "ox"
  ],
  "marks": [
   "surv",
   "morph",
   "ache",
   "enz",
   "gene"
  ],
  "polClass": "metal",
  "polName": "汞",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "汞 96 hpf LC50 为 139 µg/L，致心包水肿与脊柱尾部畸形；100 µg/L 时 AChE 活性下降、GST 升高、PP1γ 表达降低，亚致死浓度下运动受损。",
  "doi": "10.1016/j.ntt.2023.107302"
 },
 {
  "pmid": "37244562",
  "title": "Assessing CaMPARI as new approach methodology for evaluating neurotoxicity.",
  "author1": "Biechele-Speziale",
  "nAuthors": 6,
  "journal": "Neurotoxicology",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "vmr"
  ],
  "polClass": "emerg",
  "polName": "PCB 95、邻苯二甲酸单乙基己酯、乙醇",
  "stage": [
   "lar"
  ],
  "zh": "光暗行为与 CaMPARI 脑活动成像结果并不总是一致，仅凭行为表型不足以推断毒物作用的脑区与神经机制。",
  "doi": "10.1016/j.neuro.2023.05.013",
  "pmc": "PMC10527633"
 },
 {
  "pmid": "37976248",
  "title": "Consecutive treatments of methamphetamine promote the development of cardiac pathological symptoms in zebrafish.",
  "author1": "Zhang",
  "nAuthors": 8,
  "journal": "PLoS One",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "hr",
   "avb"
  ],
  "polClass": "emerg",
  "polName": "甲基苯丙胺",
  "stage": [
   "adu"
  ],
  "zh": "两周甲基苯丙胺处理使斑马鱼心率持续下降、心率变异性早升后降、QTc 缩短，cAMP 上调与 Ca²⁺ 调控紊乱，胶原染色显示明显心肌纤维化。",
  "doi": "10.1371/journal.pone.0294322",
  "pmc": "PMC10655962"
 },
 {
  "pmid": "37532338",
  "title": "Developmental toxicity, immunotoxicity and cardiotoxicity induced by methidathion in early life stages of zebrafish.",
  "author1": "Wu",
  "nAuthors": 8,
  "journal": "Pestic Biochem Physiol",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "cv",
   "bh"
  ],
  "marks": [
   "surv",
   "morph",
   "len",
   "ros",
   "mda"
  ],
  "polClass": "op",
  "polName": "杀扑磷",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "杀扑磷 96 hpf LC50 约 30.7 mg/L，降低存活、孵化率与体长并诱发心脏发育毒性和运动能力下降，伴 ROS、MDA 升高与心包区凋亡。",
  "doi": "10.1016/j.pestbp.2023.105526"
 },
 {
  "pmid": "36934645",
  "title": "Genetic hyperactivation of Nrf2 causes larval lethality in Keap1a and Keap1b-double-knockout zebrafish.",
  "author1": "Bian",
  "nAuthors": 7,
  "journal": "Redox Biol",
  "year": 2023,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "ox",
   "mt"
  ],
  "marks": [
   "surv",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "keap1a;keap1b 双敲除使 Nrf2 靶基因超表达并致孵化后一周内死亡，Nrf2 突变可挽救，视觉周期基因下调。",
  "doi": "10.1016/j.redox.2023.102673",
  "pmc": "PMC10031532"
 },
 {
  "pmid": "36115403",
  "title": "Ethalfluralin induces developmental toxicity in zebrafish via oxidative stress and inflammation.",
  "author1": "Hong",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "br",
   "gu"
  ],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "hr",
   "edema",
   "vasc",
   "ros"
  ],
  "polClass": "pest",
  "polName": "乙丁烯氟灵",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "乙丁烯氟灵降低存活与孵化率、致心包与卵黄囊水肿，并经 ROS 升高、凋亡与抗血管生成抑制脑和肠血管发育。",
  "doi": "10.1016/j.scitotenv.2022.158780"
 },
 {
  "pmid": "36356732",
  "title": "Effect of thiamethoxam on the behavioral profile alteration and toxicity of adult zebrafish at environmentally relevant concentrations.",
  "author1": "Yang",
  "nAuthors": 7,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "dive",
   "ache",
   "cort",
   "hist",
   "body"
  ],
  "polClass": "pest",
  "polName": "噻虫嗪",
  "stage": [
   "adu"
  ],
  "zh": "0.1 µg/L 噻虫嗪在脑内 BCF 最高，45 天暴露增强活动与聚群但破坏食物区记忆，并致脑坏死与 AChE、皮质醇改变。",
  "doi": "10.1016/j.scitotenv.2022.159883"
 },
 {
  "pmid": "36403845",
  "title": "Environmental exposure to triazole fungicide causes left-right asymmetry defects and contributes to abnormal heart development in zebrafish embryos by activating PPARγ-coupled Wnt/β-catenin signaling pathway.",
  "author1": "Wang",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "edema",
   "hr",
   "vasc",
   "gene"
  ],
  "polClass": "pest",
  "polName": "苯醚甲环唑",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "苯醚甲环唑激活 PPARγ 抑制 Wnt/β-catenin，改变 Kupffer 囊大小与左右不对称基因，致心包水肿、心率与心功能下降。",
  "doi": "10.1016/j.scitotenv.2022.160286"
 },
 {
  "pmid": "36473658",
  "title": "PFAS-induced lipidomic dysregulations and their associations with developmental toxicity in zebrafish embryos.",
  "author1": "Yang",
  "nAuthors": 11,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "morph",
   "hr",
   "edema"
  ],
  "polClass": "emerg",
  "polName": "全氟辛酸、全氟辛烷磺酸",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "PFOA/PFOS 微注射致 72 hpf 心包水肿、心脏出血、脊柱弯曲与心率升高，含 DHA 链磷脂酰乙醇胺下调提示氧化损伤。",
  "doi": "10.1016/j.scitotenv.2022.160691"
 },
 {
  "pmid": "36566849",
  "title": "Endocrine disrupting effect and reproductive toxicity of the separate exposure and co-exposure of nano-polystyrene and diethylstilbestrol to zebrafish.",
  "author1": "Lin",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "li",
   "go"
  ],
  "dirs": [
   "ed",
   "rp",
   "dv"
  ],
  "marks": [
   "steroid",
   "vtg",
   "fec",
   "f1",
   "morph"
  ],
  "polClass": "edc",
  "polName": "己烯雌酚、纳米聚苯乙烯",
  "stage": [
   "adu"
  ],
  "zh": "纳米聚苯乙烯与己烯雌酚共暴露加重肝与性腺损伤，性激素及 VTG 抑制呈相加效应，产卵量由 1031 降至 306，胚胎畸形率达 65.0%。",
  "doi": "10.1016/j.scitotenv.2022.161100",
  "gen": "F1"
 },
 {
  "pmid": "36642268",
  "title": "Combined toxicity of acetamiprid and cadmium to larval zebrafish (Danio rerio) based on metabolomic analysis.",
  "author1": "Hu",
  "nAuthors": 7,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "len",
   "morph",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉、啶虫脒",
  "stage": [
   "lar"
  ],
  "zh": "镉与啶虫脒单独或联合均抑制仔鱼生长并致畸形，联合组差异代谢物最多（294 个），扰乱核黄素、糖脂与氨基酸代谢。",
  "doi": "10.1016/j.scitotenv.2023.161539"
 },
 {
  "pmid": "36702264",
  "title": "Studying paraben-induced estrogen receptor- and steroid hormone-related endocrine disruption effects via multi-level approaches.",
  "author1": "Liang",
  "nAuthors": 10,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "ed"
  ],
  "marks": [
   "vtg",
   "steroid",
   "gene"
  ],
  "polClass": "edc",
  "polName": "对羟基苯甲酸甲酯、乙酯、丙酯",
  "stage": [
   "lar"
  ],
  "zh": "四种对羟基苯甲酸酯均诱导仔鱼卵黄蛋白原并扰乱 E2 与睾酮合成，丙酯与丁酯可结合雌激素受体，活性随结构复杂度升高。",
  "doi": "10.1016/j.scitotenv.2023.161793"
 },
 {
  "pmid": "36841402",
  "title": "Neurotoxicity and endocrine disruption caused by polystyrene nanoparticles in zebrafish embryo.",
  "author1": "Torres-Ruiz",
  "nAuthors": 7,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "br",
   "ey",
   "ll"
  ],
  "dirs": [
   "bh",
   "ed"
  ],
  "marks": [
   "coil",
   "vmr",
   "startle",
   "ache",
   "th"
  ],
  "polClass": "np",
  "polName": "聚苯乙烯纳米塑料",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "聚苯乙烯纳米塑料蓄积于眼、神经丘、脑与消化道，抑制 AChE 并改变甲状腺与糖皮质激素轴基因，低剂量致活动与焦虑增加、高剂量致迟钝。",
  "doi": "10.1016/j.scitotenv.2023.162406"
 },
 {
  "pmid": "37068667",
  "title": "Photoaged microplastics induce neurotoxicity via oxidative stress and abnormal neurotransmission in zebrafish larvae (Danio rerio).",
  "author1": "Ding",
  "nAuthors": 12,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "ntx",
   "ache",
   "enz",
   "mda",
   "gene"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯微塑料",
  "stage": [
   "lar"
  ],
  "zh": "光老化 PS 微塑料比原生颗粒更降低仔鱼运动，升高 MDA 并改变 SOD、CAT 与 GST，5-HT、GABA、DA 及 ACh 水平与 AChE 活性升高。",
  "doi": "10.1016/j.scitotenv.2023.163480"
 },
 {
  "pmid": "37087015",
  "title": "The perturbation of parabens on the neuroendocrine system in zebrafish larvae.",
  "author1": "Liang",
  "nAuthors": 12,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "ed",
   "bh"
  ],
  "marks": [
   "cort",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "对羟基苯甲酸甲酯、对羟基苯甲酸乙酯、对羟基苯甲酸丙酯",
  "stage": [
   "lar"
  ],
  "zh": "四种对羟基苯甲酸酯均降低仔鱼游动距离，使 ACTH 升高、皮质醇下降，下调 HPI 轴 gr/mr/crhr2 并直接激活 GR。",
  "doi": "10.1016/j.scitotenv.2023.163593"
 },
 {
  "pmid": "37245804",
  "title": "Dietary crude oil exposure during sex differentiation skewed adult sex ratio towards males in the zebrafish.",
  "author1": "Bautista",
  "nAuthors": 4,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "len",
   "hr"
  ],
  "polClass": "pah",
  "polName": "原油",
  "stage": [
   "sex",
   "adu"
  ],
  "zh": "性分化期膳食原油暴露使成鱼雌雄比降至 0.34:1，而体长、心率与耐低氧能力无变化，说明性比是更敏感的终点。",
  "doi": "10.1016/j.scitotenv.2023.164449"
 },
 {
  "pmid": "37598958",
  "title": "Molecular mechanisms of cardiotoxicity induced by acetamide and its chiral isomers.",
  "author1": "Wang",
  "nAuthors": 8,
  "journal": "Sci Total Environ",
  "year": 2023,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "ros",
   "gene"
  ],
  "polClass": "pest",
  "polName": "乙酰胺",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "(+)-S-乙酰胺是外消旋体心脏毒性主要成分，经 ROS 蓄积降低线粒体膜电位、促细胞色素 c 释放并激活 caspase-3/9 致凋亡，心脏可见 γH2AX 标志。",
  "doi": "10.1016/j.scitotenv.2023.166349"
 },
 {
  "pmid": "38060659",
  "title": "ROS-induced ribosome impairment underlies ZAKα-mediated metabolic decline in obesity and aging.",
  "author1": "Snieckute",
  "nAuthors": 30,
  "journal": "Science",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "ag",
   "ox"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "斑马鱼仔鱼缺失 ZAKα 可抵抗 ROS 诱导的病理损伤，核糖体停滞经 ZAKα 激活成为肥胖与衰老代谢衰退的共同信号。",
  "doi": "10.1126/science.adf3208"
 },
 {
  "pmid": "36951524",
  "title": "Triazole fungicides induce adipogenesis and repress osteoblastogenesis in zebrafish.",
  "author1": "Thrikawala",
  "nAuthors": 11,
  "journal": "Toxicol Sci",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "morph",
   "gene"
  ],
  "polClass": "pest",
  "polName": "环丙唑醇、多效唑、三唑醇",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "环丙唑醇、多效唑与三唑醇致仔鱼骨与软骨畸形，转录组与 qPCR 显示骨软骨标志基因下调、脂肪生成基因上调，提示三唑类促脂肪生成而抑骨骼发育。",
  "doi": "10.1093/toxsci/kfad031",
  "pmc": "PMC10230286"
 },
 {
  "pmid": "36851053",
  "title": "Sulfamethoxazole (SMX) Alters Immune and Apoptotic Endpoints in Developing Zebrafish (Danio rerio).",
  "author1": "Iftikhar",
  "nAuthors": 7,
  "journal": "Toxics",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "morph",
   "edema",
   "gene",
   "vmr"
  ],
  "polClass": "emerg",
  "polName": "磺胺甲噁唑",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "磺胺甲噁唑高浓度降低存活、延迟孵化并致卵黄囊与心包水肿及脊柱弯曲，低浓度上调 ifn-γ、il-1β 与 bax，500–2500 µg/L 使仔鱼光暗偏好试验中活动过度。",
  "doi": "10.3390/toxics11020178",
  "pmc": "PMC9959310"
 },
 {
  "pmid": "37071853",
  "title": "Tetrahydroxystilbene Glucoside Attenuates Oxidative Stress-Induced Aging by Regulating Oxidation Resistance and Inflammation in Larval Zebrafish.",
  "author1": "Xia",
  "nAuthors": 7,
  "journal": "Zebrafish",
  "year": 2023,
  "review": false,
  "organs": [],
  "dirs": [
   "ag",
   "ox"
  ],
  "marks": [
   "sabg",
   "gene",
   "ros"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "H2O2 诱导衰老仔鱼中，TSG 降低 β-半乳糖苷酶阳性率、提高游泳速度，并上调 sirt1 与 tert、抑制 il-1β 等炎症基因。",
  "doi": "10.1089/zeb.2022.0045"
 },
 {
  "pmid": "35507640",
  "title": "Polystyrene Nanoplastics Toxicity to Zebrafish: Dysregulation of the Brain-Intestine-Microbiota Axis.",
  "author1": "Teng",
  "nAuthors": 9,
  "journal": "ACS Nano",
  "year": 2022,
  "review": false,
  "organs": [
   "gu",
   "br"
  ],
  "dirs": [
   "bh",
   "rp"
  ],
  "marks": [
   "ntx",
   "len",
   "f1"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯",
  "stage": [
   "lar"
  ],
  "zh": "44 nm 聚苯乙烯纳米塑料暴露 30 天抑制生长、增加肠道通透性与炎症，42 种神经递质相关代谢物改变并与菌群相关，子代胚胎自发运动、孵化率与体长下降。",
  "doi": "10.1021/acsnano.2c01872",
  "gen": "F1"
 },
 {
  "pmid": "35229877",
  "title": "Zebrafish embryo neonicotinoid developmental neurotoxicity in the FET test and behavioral assays.",
  "author1": "Von Hellfeld",
  "nAuthors": 9,
  "journal": "ALTEX",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "coil",
   "surv",
   "morph"
  ],
  "polClass": "pest",
  "polName": "噻虫啉、啶虫脒、吡虫啉",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "OECD 236 下新烟碱类亚致死效应在 100 µM 以下不明显，但卷曲试验中 50 µM 噻虫啉与啶虫脒、吡虫啉即改变爆发时长与次数，行为终点更敏感。",
  "doi": "10.14573/altex.2111021"
 },
 {
  "pmid": "34933138",
  "title": "Thyroid disruption and growth inhibition of zebrafish embryos/larvae by phenanthrene treatment at environmentally relevant concentrations.",
  "author1": "Wu",
  "nAuthors": 6,
  "journal": "Aquat Toxicol",
  "year": 2022,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "th",
   "gene",
   "morph",
   "surv",
   "len"
  ],
  "polClass": "pah",
  "polName": "菲",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "低至 0.1 µg/L 菲暴露 7 天即降低仔鱼 T4、升高 T3，畸形率上升、存活与体长下降，GH 与 IGF-1 降低。",
  "doi": "10.1016/j.aquatox.2021.106053"
 },
 {
  "pmid": "35180455",
  "title": "Oxidative stress and metal homeostasis alterations in Danio rerio (zebrafish) under single and combined carbamazepine, acetamiprid and cadmium exposures.",
  "author1": "Araujo",
  "nAuthors": 9,
  "journal": "Aquat Toxicol",
  "year": 2022,
  "review": false,
  "organs": [
   "br",
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "enz",
   "mda",
   "gene"
  ],
  "polClass": "pest",
  "polName": "卡马西平、啶虫脒、镉",
  "stage": [
   "adu"
  ],
  "zh": "卡马西平、啶虫脒与镉单暴露均引起脑与肝氧化应激及金属稳态改变，联合暴露脂质过氧化反而降低，提示相互拮抗。",
  "doi": "10.1016/j.aquatox.2022.106122"
 },
 {
  "pmid": "35561629",
  "title": "Long-term exposure of zebrafish to bisphenol F: Adverse effects on parental reproduction and offspring neurodevelopment.",
  "author1": "Gu",
  "nAuthors": 10,
  "journal": "Aquat Toxicol",
  "year": 2022,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "dv",
   "bh"
  ],
  "marks": [
   "fec",
   "f1",
   "len",
   "hr",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚F",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "全生命周期环境浓度双酚F 暴露升高氧化应激、增加性腺凋亡并降低 F0 产卵量；经母体传递使 F1 孵化率、心率、体长与运动行为下降。",
  "doi": "10.1016/j.aquatox.2022.106190",
  "gen": "F1"
 },
 {
  "pmid": "35623197",
  "title": "The toxic effects of combined exposure of chlorpyrifos and p, p'-DDE to zebrafish (Danio rerio) and tissue bioaccumulation.",
  "author1": "Jiang",
  "nAuthors": 9,
  "journal": "Aquat Toxicol",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "surv",
   "enz",
   "mda",
   "ache",
   "body"
  ],
  "polClass": "op",
  "polName": "毒死蜱、p,p'-DDE",
  "stage": [
   "adu"
  ],
  "zh": "毒死蜱与 p,p'-DDE 共暴露对成鱼急性毒性呈相加效应（MDR=1.64），CAT/SOD/GST 升高、MDA 增加而 AChE 与 CarE 降低，组织蓄积模式改变。",
  "doi": "10.1016/j.aquatox.2022.106194"
 },
 {
  "pmid": "35640362",
  "title": "Enantioselective bioaccumulation, oxidative stress, and thyroid disruption assessment of cis-metconazole enantiomers in zebrafish (Danio rerio).",
  "author1": "He",
  "nAuthors": 5,
  "journal": "Aquat Toxicol",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "ed"
  ],
  "marks": [
   "conc",
   "enz",
   "mda",
   "th"
  ],
  "polClass": "pest",
  "polName": "叶菌唑",
  "stage": [],
  "zh": "顺式叶菌唑两对映体毒性不同，(1R,5S) 富集与丙二醛更高，(1S,5R) 抗氧化酶诱导更强，(1R,5S) 甲状腺干扰更显著。",
  "doi": "10.1016/j.aquatox.2022.106205"
 },
 {
  "pmid": "36279691",
  "title": "Stereoselective toxicity, bioaccumulation, and metabolic pathways of triazole fungicide cyproconazole in zebrafish.",
  "author1": "He",
  "nAuthors": 6,
  "journal": "Aquat Toxicol",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox"
  ],
  "marks": [
   "surv",
   "enz",
   "body"
  ],
  "polClass": "pest",
  "polName": "环丙唑醇",
  "stage": [],
  "zh": "环丙唑醇四种立体异构体 96 h LC50 为 15.9–27.0 mg/L，SR 体富集最强，POD 升高而 CAT 随浓度下降，鉴定出 7 种 I 相与 25 种 II 相代谢物。",
  "doi": "10.1016/j.aquatox.2022.106330"
 },
 {
  "pmid": "34403049",
  "title": "Investigation of the Oxidative Stress Response of a Green Synthesis Nanoparticle (RP-Ag/ACNPs) in Zebrafish.",
  "author1": "Kokturk",
  "nAuthors": 8,
  "journal": "Biol Trace Elem Res",
  "year": 2022,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "edema",
   "morph"
  ],
  "polClass": "np",
  "polName": "银/活性炭纳米颗粒",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "RP-Ag/AC 纳米颗粒 96 h LC50 为 217.2 mg/L，致剂量依赖死亡与卵黄囊、心包水肿及脊柱尾畸形，并升高脑内 nNOS 与 8-OHdG，提示绿色合成未消除氧化损伤。",
  "doi": "10.1007/s12011-021-02855-3"
 },
 {
  "pmid": "35158142",
  "title": "Pharmacological assessment of zebrafish-based cardiotoxicity models.",
  "author1": "Maciag",
  "nAuthors": 4,
  "journal": "Biomed Pharmacother",
  "year": 2022,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "mt"
  ],
  "marks": [],
  "polClass": "emerg",
  "polName": "多柔比星、特非那定",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "以统一给药方案建立多柔比星、肾上腺素与特非那定胚胎心脏毒性模型并头对头比较，阻断肾素-血管紧张素系统、其次 β 肾上腺素系统可改善心功能。",
  "doi": "10.1016/j.biopha.2022.112695"
 },
 {
  "pmid": "36084721",
  "title": "Mixture toxicity of cadmium and acetamiprid to the early life stages of zebrafish (Danio rerio).",
  "author1": "Hu",
  "nAuthors": 8,
  "journal": "Chem Biol Interact",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "surv",
   "enz",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉、啶虫脒",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "镉 96 h LC50 4.77 mg/L 低于啶虫脒 152.6 mg/L，混合呈协同毒性，显著改变 T-SOD、POD、CarE 及 TRα、crh、Tnf 等 5 个基因表达。",
  "doi": "10.1016/j.cbi.2022.110150"
 },
 {
  "pmid": "34861263",
  "title": "Heterogeneity effects of nanoplastics and lead on zebrafish intestinal cells identified by single-cell sequencing.",
  "author1": "Yu",
  "nAuthors": 5,
  "journal": "Chemosphere",
  "year": 2022,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "mda",
   "gene"
  ],
  "polClass": "metal",
  "polName": "铅、聚苯乙烯纳米塑料",
  "stage": [
   "adu"
  ],
  "zh": "200 µg/L 纳米塑料与铅共暴露致肠 MDA、8-OHdG、TNF-α 最高，单细胞测序显示巨噬细胞与肠上皮细胞为主要靶细胞，仅杯状细胞呈协同。",
  "doi": "10.1016/j.chemosphere.2021.133133"
 },
 {
  "pmid": "34995633",
  "title": "Antagonistic effects and mechanisms of carbendazim and chlorpyrifos on the neurobehavior of larval zebrafish.",
  "author1": "Zhang",
  "nAuthors": 10,
  "journal": "Chemosphere",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "bh"
  ],
  "marks": [
   "vmr",
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱、多菌灵",
  "stage": [
   "lar"
  ],
  "zh": "多菌灵使光暗转换下角速度与转向增加，毒死蜱降低平均游速，二者对游速与光暗加速度呈强拮抗。",
  "doi": "10.1016/j.chemosphere.2022.133522"
 },
 {
  "pmid": "35304207",
  "title": "circRNA-based biomarker candidates for acute cypermethrin and chlorpyrifos toxication in the brain of Zebrafish (Danio rerio).",
  "author1": "Özdemir",
  "nAuthors": 2,
  "journal": "Chemosphere",
  "year": 2022,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱、氯氰菊酯",
  "stage": [],
  "zh": "急性氯氰菊酯与毒死蜱暴露使斑马鱼脑分别有 16 与 60 个 circRNA 差异表达，靶基因富集于 MAPK、内吞、凋亡与 p53 通路，提示 circRNA 可作脑毒性标志物。",
  "doi": "10.1016/j.chemosphere.2022.134330"
 },
 {
  "pmid": "36075364",
  "title": "Influence of co-exposure to sulfamethazine on the toxicity and bioaccumulation kinetics of chlorpyrifos in zebrafish (Danio rerio).",
  "author1": "Jiang",
  "nAuthors": 6,
  "journal": "Chemosphere",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "ache",
   "enz",
   "body",
   "ros"
  ],
  "polClass": "op",
  "polName": "毒死蜱、磺胺二甲嘧啶",
  "stage": [
   "adu"
  ],
  "zh": "1 mg/L 磺胺二甲嘧啶未显著改变毒死蜱 96 h LC50，但 30 天共暴露加重氧化应激、降低 CarE 与 AChE 活性并延长两者消除时间。",
  "doi": "10.1016/j.chemosphere.2022.136317"
 },
 {
  "pmid": "36223820",
  "title": "Histology and metabonomics reveal the toxic effects of kresoxim-methyl on adult zebrafish.",
  "author1": "Fang",
  "nAuthors": 7,
  "journal": "Chemosphere",
  "year": 2022,
  "review": false,
  "organs": [
   "li",
   "go",
   "gu"
  ],
  "dirs": [
   "ox",
   "rp"
  ],
  "marks": [
   "hist",
   "enz",
   "mda",
   "gene"
  ],
  "polClass": "pest",
  "polName": "醚菌酯",
  "stage": [
   "adu"
  ],
  "zh": "环境浓度醚菌酯暴露 21 天使雌鱼肝细胞空泡化、卵母细胞发育停滞、肠杯状细胞减少，并伴肝脏脂质与氨基酸代谢紊乱。",
  "doi": "10.1016/j.chemosphere.2022.136739"
 },
 {
  "pmid": "35525464",
  "title": "Oxidative stress, apoptosis and serotonergic system changes in zebrafish (Danio rerio) gills after long-term exposure to microplastics and copper.",
  "author1": "Santos",
  "nAuthors": 5,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2022,
  "review": false,
  "organs": [
   "gi"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "ros",
   "enz",
   "mda",
   "gene"
  ],
  "polClass": "metal",
  "polName": "铜、微塑料",
  "stage": [
   "adu"
  ],
  "zh": "微塑料与铜联合暴露 30 天使鳃 ROS 升高、CAT 与 GPx 受抑、LPO 增加，tph1a 与 casp3 上调提示血清素与凋亡紊乱。",
  "doi": "10.1016/j.cbpc.2022.109363"
 },
 {
  "pmid": "36087705",
  "title": "Persistent and transgenerational effects of pesticide residues in zebrafish.",
  "author1": "Pompermaier",
  "nAuthors": 4,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "rp",
   "ox"
  ],
  "marks": [
   "dive",
   "ache",
   "enz",
   "f1"
  ],
  "polClass": "pest",
  "polName": "草甘膦、2,4-滴",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "草甘膦暴露成鱼表现多动与反捕食反应受损，F1 出现行为与存活改变及 AChE 与抗氧化酶变化；2,4-D 组虽无持久效应却丧失繁殖能力。",
  "doi": "10.1016/j.cbpc.2022.109461",
  "gen": "F1"
 },
 {
  "pmid": "34995954",
  "title": "Quantitative measurements of zebrafish heartrate and heart rate variability: A survey between 1990-2020.",
  "author1": "Ling",
  "nAuthors": 4,
  "journal": "Comput Biol Med",
  "year": 2022,
  "review": true,
  "organs": [
   "he"
  ],
  "dirs": [
   "mt",
   "cv"
  ],
  "marks": [
   "hr",
   "avb"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "综述比较 1990–2020 年斑马鱼心率与心率变异性检测流程、信号分析算法及 LabVIEW、Rvlpulse、ZebraLab 等软件，指出 HR 与 HRV 负相关并受自主神经调控。",
  "doi": "10.1016/j.compbiomed.2021.105045"
 },
 {
  "pmid": "35182799",
  "title": "Carboxin can induce cardiotoxicity in zebrafish embryos.",
  "author1": "Huang",
  "nAuthors": 9,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2022,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "ros",
   "gene",
   "hist"
  ],
  "polClass": "pest",
  "polName": "萎锈灵",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "萎锈灵致胚胎心脏结构改变与心脏发育基因表达紊乱，ROS 蓄积造成线粒体损伤、ATP 酶活性下降，心脏血细胞减少、心肌增殖受抑，最终心力衰竭死亡。",
  "doi": "10.1016/j.ecoenv.2022.113318"
 },
 {
  "pmid": "35304337",
  "title": "The developmental toxicity and transcriptome analyses of zebrafish (Danio rerio) embryos exposed to carbon nanoparticles.",
  "author1": "Shi",
  "nAuthors": 6,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "morph",
   "surv",
   "gene"
  ],
  "polClass": "np",
  "polName": "碳纳米颗粒",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "碳纳米颗粒 50–200 µg/mL 致畸形率升高与孵化延迟，转录组检出 236 个差异基因，主要富集于类固醇激素合成与光转导通路。",
  "doi": "10.1016/j.ecoenv.2022.113417"
 },
 {
  "pmid": "35512469",
  "title": "Combined effects of S-metolachlor and benoxacor on embryo development in zebrafish (Danio rerio).",
  "author1": "Liu",
  "nAuthors": 9,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "morph",
   "enz",
   "nrf2"
  ],
  "polClass": "pest",
  "polName": "异丙甲草胺、解草酮",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "解草酮单用毒性高于与异丙甲草胺混用，混合暴露呈拮抗，但两者均破坏 ROS 平衡并致胚胎畸形与凋亡异常。",
  "doi": "10.1016/j.ecoenv.2022.113565"
 },
 {
  "pmid": "35816841",
  "title": "Isoprocarb causes neurotoxicity of zebrafish embryos through oxidative stress-induced apoptosis.",
  "author1": "Wang",
  "nAuthors": 8,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2022,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox",
   "dv"
  ],
  "marks": [
   "surv",
   "ache",
   "ros",
   "enz",
   "gene"
  ],
  "polClass": "pest",
  "polName": "异丙威",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "异丙威致胚胎后脑发育缺陷与运动能力抑制，降低 AChE 与 SOD 活性、升高 ROS，并经氧化应激诱导凋亡。",
  "doi": "10.1016/j.ecoenv.2022.113870"
 },
 {
  "pmid": "35930835",
  "title": "Microplastics and copper induce apoptosis, alter neurocircuits, and cause behavioral changes in zebrafish (Danio rerio) brain.",
  "author1": "Santos",
  "nAuthors": 6,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2022,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "enz",
   "ache",
   "gene",
   "shoal"
  ],
  "polClass": "metal",
  "polName": "铜、微塑料",
  "stage": [
   "adu"
  ],
  "zh": "30 天暴露中微塑料与铜改变脑抗氧化系统、升高 AChE 活性、下调 pcna 并上调多巴胺通路基因，伴游动与集群行为改变及凋亡基因上调。",
  "doi": "10.1016/j.ecoenv.2022.113926"
 },
 {
  "pmid": "36474803",
  "title": "Genetic and epigenetic interplay allows rapid transgenerational adaptation to metal pollution in zebrafish.",
  "author1": "Pierron",
  "nAuthors": 9,
  "journal": "Environ Epigenet",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "rp"
  ],
  "marks": [
   "meth",
   "len",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉",
  "stage": [
   "adu"
  ],
  "zh": "仅 F1 暴露环境浓度镉，cep19 外显子3 的甲基化改变可遗传至第四代并伴生长异常，但该表观变化由单核苷酸多态性造成的甲基化位点增减驱动。",
  "doi": "10.1093/eep/dvac022",
  "pmc": "PMC9716877",
  "gen": "F3+"
 },
 {
  "pmid": "36283474",
  "title": "Chronic toxic effects of isoflucypram on reproduction and intestinal energy metabolism in zebrafish (Danio rerio).",
  "author1": "Xiao",
  "nAuthors": 4,
  "journal": "Environ Pollut",
  "year": 2022,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "rp",
   "dv"
  ],
  "marks": [
   "morph",
   "hist",
   "f1"
  ],
  "polClass": "pest",
  "polName": "异氟菌胺",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "0.08 µM 异氟菌胺暴露 120 天致 F1 胚胎死亡、孵化延迟与心包水肿、小眼畸形，F0 肠绒毛肿胀伴线粒体能量代谢基因改变。",
  "doi": "10.1016/j.envpol.2022.120479",
  "gen": "F1"
 },
 {
  "pmid": "34643865",
  "title": "Specificity of time- and dose-dependent morphological endpoints in the fish embryo acute toxicity (FET) test for substances with diverse modes of action: the search for a \"fingerprint\".",
  "author1": "von Hellfeld",
  "nAuthors": 3,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "morph"
  ],
  "polClass": "pest",
  "polName": "多种化学品",
  "stage": [
   "lar"
  ],
  "zh": "18 种作用模式各异的化合物在 FET 中的形态学观察多不具毒物特异性，仅 ≤EC10 亚致死浓度下才较特异，难以据此建立急性毒性指纹。",
  "doi": "10.1007/s11356-021-16354-4",
  "pmc": "PMC8827326"
 },
 {
  "pmid": "35467190",
  "title": "Polyethylene microplastic exposure and concurrent effect with Aeromonas hydrophila infection on zebrafish.",
  "author1": "Ding",
  "nAuthors": 10,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2022,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "len",
   "enz",
   "hist"
  ],
  "polClass": "plas",
  "polName": "聚乙烯",
  "stage": [
   "adu"
  ],
  "zh": "35 天聚乙烯微塑料降低成鱼生长，低浓度刺激肠 GSH、GST，10 mg/L 抑制 SOD、CAT，并致肠损伤与菌群改变。",
  "doi": "10.1007/s11356-022-20308-9"
 },
 {
  "pmid": "36006007",
  "title": "Long-Term Exposure to Neonicotinoid Insecticide Acetamiprid at Environmentally Relevant Concentrations Impairs Endocrine Functions in Zebrafish: Bioaccumulation, Feminization, and Transgenerational Effects.",
  "author1": "Ma",
  "nAuthors": 5,
  "journal": "Environ Sci Technol",
  "year": 2022,
  "review": false,
  "organs": [
   "br",
   "go",
   "li"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "body",
   "steroid",
   "sexratio",
   "gene",
   "f1"
  ],
  "polClass": "pest",
  "polName": "啶虫脒",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "0.19 µg/L 啶虫脒暴露 154 天即在成鱼体内蓄积并致雌性化，性腺 E2 升高、雄烯二酮下降，HPG 轴基因呈性别相反改变，F1 孵化率降低、畸形率升高。",
  "doi": "10.1021/acs.est.2c04014",
  "gen": "F1"
 },
 {
  "pmid": "35750255",
  "title": "Cylindrospermopsin induces oocyte maturation and disrupts gene expression in zebrafish ovarian follicles.",
  "author1": "Moraes",
  "nAuthors": 4,
  "journal": "Environ Toxicol Pharmacol",
  "year": 2022,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "gene",
   "steroid"
  ],
  "polClass": "emerg",
  "polName": "柱孢藻毒素",
  "stage": [
   "adu"
  ],
  "zh": "1000 µg/L 柱孢藻毒素使离体卵泡生发泡破裂率与 caspase-3 活性升高，3βhsd 与 fshr 转录下降而 cyp19a1a 升高。",
  "doi": "10.1016/j.etap.2022.103915"
 },
 {
  "pmid": "35597397",
  "title": "Toxic effects of polystyrene nanoplastics and polybrominated diphenyl ethers to zebrafish (Danio rerio).",
  "author1": "Wang",
  "nAuthors": 10,
  "journal": "Fish Shellfish Immunol",
  "year": 2022,
  "review": false,
  "organs": [
   "ey",
   "gi",
   "li"
  ],
  "dirs": [
   "dv",
   "ed"
  ],
  "marks": [
   "surv",
   "morph",
   "len",
   "gene",
   "hist"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯、BDE-47",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "共暴露使心包与卵黄囊水肿、弯尾加重、存活与体长下降，并更显著上调 TSHβ、TG、Dio2、TRβ，提示甲状腺轴受累。",
  "doi": "10.1016/j.fsi.2022.05.025"
 },
 {
  "pmid": "35595038",
  "title": "Transgenerational effects of parental bisphenol S exposure on zebrafish (Danio rerio) reproduction.",
  "author1": "Hao",
  "nAuthors": 8,
  "journal": "Food Chem Toxicol",
  "year": 2022,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "meth",
   "steroid",
   "sexratio",
   "fec"
  ],
  "polClass": "edc",
  "polName": "双酚S",
  "stage": [
   "adu"
  ],
  "zh": "100 µg/L 双酚S 使 F1 精巢、1 µg/L 使 F2 卵巢 DNA 甲基化升高，cyp11a、cyp17 与 3βhsd 表达下降，雌二醇升高、睾酮降低，性比偏雌且雄鱼繁殖力受损。",
  "doi": "10.1016/j.fct.2022.113142",
  "gen": "F2"
 },
 {
  "pmid": "35055782",
  "title": "Evaluation of the Toxicity of Bisphenol A in Reproduction and Its Effect on Fertility and Embryonic Development in the Zebrafish (Danio rerio).",
  "author1": "Reis",
  "nAuthors": 6,
  "journal": "Int J Environ Res Public Health",
  "year": 2022,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "dv"
  ],
  "marks": [
   "fec",
   "f1",
   "morph",
   "hist"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "亲代 BPA 暴露 21 天使雌雄配子发生异常、生育力下降，子代死亡与心脏、骨骼畸形随暴露浓度升高。",
  "doi": "10.3390/ijerph19020962",
  "pmc": "PMC8775542",
  "gen": "F1"
 },
 {
  "pmid": "35563633",
  "title": "Soy-Derived Equol Induces Antioxidant Activity in Zebrafish in an Nrf2-Independent Manner.",
  "author1": "Watanabe",
  "nAuthors": 4,
  "journal": "Int J Mol Sci",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "mt"
  ],
  "marks": [
   "gene",
   "ros"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "七种异黄酮中雌马酚抗氧化作用最强，且在 Nrf2 敲除斑马鱼中仍有效，提示其不依赖 Keap1-Nrf2 通路。",
  "doi": "10.3390/ijms23095243",
  "pmc": "PMC9105299"
 },
 {
  "pmid": "35897817",
  "title": "Microglia Remodelling and Neuroinflammation Parallel Neuronal Hyperactivation Following Acute Organophosphate Poisoning.",
  "author1": "Somkhit",
  "nAuthors": 3,
  "journal": "Int J Mol Sci",
  "year": 2022,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "ache",
   "gene"
  ],
  "polClass": "op",
  "polName": "二异丙基氟磷酸酯",
  "stage": [
   "lar"
  ],
  "zh": "DFP 中毒迅速诱导小胶质细胞变形并大量表达 Il1β、Tnfα 与 Il8，去除小胶质细胞后有机磷引起的神经元过度兴奋明显减轻。",
  "doi": "10.3390/ijms23158240",
  "pmc": "PMC9332153"
 },
 {
  "pmid": "35955574",
  "title": "Cardiotoxicity of Zebrafish Induced by 6-Benzylaminopurine Exposure and Its Mechanism.",
  "author1": "Yang",
  "nAuthors": 6,
  "journal": "Int J Mol Sci",
  "year": 2022,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "bh"
  ],
  "marks": [
   "hr",
   "cort",
   "gene"
  ],
  "polClass": "pest",
  "polName": "6-苄氨基嘌呤",
  "stage": [
   "lar"
  ],
  "zh": "6-BA 致仔鱼 myl7、vmhc、myh6 及 AVC 分化基因 bmp4、tbx2b、notch1b 表达异常，心功能减弱、心肌凋亡增加，皮质醇升高并伴焦虑行为。",
  "doi": "10.3390/ijms23158438",
  "pmc": "PMC9369308"
 },
 {
  "pmid": "36233243",
  "title": "Diflubenzuron Induces Cardiotoxicity in Zebrafish Embryos.",
  "author1": "Han",
  "nAuthors": 9,
  "journal": "Int J Mol Sci",
  "year": 2022,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "surv",
   "hr",
   "ros",
   "mda",
   "gene"
  ],
  "polClass": "pest",
  "polName": "除虫脲",
  "stage": [
   "zyg",
   "lar",
   "hat"
  ],
  "zh": "0.5–4.5 mg/L 除虫脲使胚胎 SV-BA 距离增大、心肌增殖受抑、血管发育受损，ROS 与 MDA 升高、SOD 与 CAT 降低，bax、p53、caspase3/9 上调。",
  "doi": "10.3390/ijms231911932",
  "pmc": "PMC9570284"
 },
 {
  "pmid": "35470462",
  "title": "Combined effects of chlorpyrifos and cyfluthrin on neurobehavior and neurotransmitter levels in larval zebrafish.",
  "author1": "Zhang",
  "nAuthors": 10,
  "journal": "J Appl Toxicol",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "bh"
  ],
  "marks": [
   "ache",
   "ntx"
  ],
  "polClass": "op",
  "polName": "毒死蜱、氟氯氰菊酯",
  "stage": [
   "lar"
  ],
  "zh": "毒死蜱与氟氯氰菊酯单用及混用均降低仔鱼 AChE 活性，混合暴露对游泳距离与速度的抑制呈拮抗，并改变 5-HT 与多巴胺前体等递质水平。",
  "doi": "10.1002/jat.4334"
 },
 {
  "pmid": "36261670",
  "title": "Prolonged Dexamethasone Exposure Enhances Zebrafish Lateral-Line Regeneration But Disrupts Mitochondrial Homeostasis and Hair Cell Function.",
  "author1": "Saettele",
  "nAuthors": 5,
  "journal": "J Assoc Res Otolaryngol",
  "year": 2022,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "hair"
  ],
  "polClass": "emerg",
  "polName": "地塞米松",
  "stage": [
   "lar"
  ],
  "zh": "地塞米松促进硫酸铜损伤后侧线毛细胞及传入神经再生，但使毛细胞线粒体膜电位超极化、钙内流减少并更易受新霉素损伤。",
  "doi": "10.1007/s10162-022-00875-x",
  "pmc": "PMC9789251"
 },
 {
  "pmid": "34240810",
  "title": "Carbofuran affects cellular autophagy and developmental senescence through the impairment of Nrf2 signalling.",
  "author1": "Khan",
  "nAuthors": 7,
  "journal": "J Cell Mol Med",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ag",
   "ox"
  ],
  "marks": [
   "lifespan",
   "nrf2",
   "gene"
  ],
  "polClass": "pest",
  "polName": "克百威",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "克百威抑制 Nrf2 与 Gstp1 表达、破坏自噬溶酶体生成，缩短野生型斑马鱼寿命并加重 spns1 突变体自噬缺陷与衰老。",
  "doi": "10.1111/jcmm.16774",
  "pmc": "PMC8742233"
 },
 {
  "pmid": "35086039",
  "title": "Toxicity of 4-(methylnitrosamino)-1-(3-pyridyl)-1-butanone (NNK) in early development: A wide-scope metabolomics assay in zebrafish embryos.",
  "author1": "Merino",
  "nAuthors": 5,
  "journal": "J Hazard Mater",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "surv",
   "morph"
  ],
  "polClass": "emerg",
  "polName": "NNK",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "NNK 暴露致胚胎致死与畸形，体内检出母体及 HPBA、NNAL-N-oxide 两种代谢物，并扰乱嘌呤嘧啶代谢、激活碱基切除修复通路。",
  "doi": "10.1016/j.jhazmat.2021.127746"
 },
 {
  "pmid": "35997487",
  "title": "TERT distal promoter GC islands are critical for telomerase and together with DNMT3B silencing may serve as a senescence-inducing agent in gliomas.",
  "author1": "Şerifoğlu",
  "nAuthors": 4,
  "journal": "J Neurogenet",
  "year": 2022,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "meth",
   "telo"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "斑马鱼脑 tert 远端启动子低甲基化位点随衰老与端粒缩短出现；胶质瘤细胞任一 GC 位点突变即废除启动子活性，DNMT3B 沉默诱导衰老。",
  "doi": "10.1080/01677063.2022.2106371"
 },
 {
  "pmid": "35123182",
  "title": "Cylindrospermopsin impairs zebrafish (Danio rerio) embryo development.",
  "author1": "Moraes",
  "nAuthors": 4,
  "journal": "Mar Environ Res",
  "year": 2022,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "dv",
   "ox",
   "ed"
  ],
  "marks": [
   "surv",
   "morph",
   "edema",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "柱孢藻毒素",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "柱孢藻毒素降低仔鱼生长、致心包与卵黄囊水肿及泳囊缺失，并改变甲状腺与氧化应激相关基因表达，阈值约 10 μg/L。",
  "doi": "10.1016/j.marenvres.2022.105567"
 },
 {
  "pmid": "35364423",
  "title": "Effects of microplastics on the accumulation and neurotoxicity of methylmercury in zebrafish larvae.",
  "author1": "Zhu",
  "nAuthors": 7,
  "journal": "Mar Environ Res",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "body",
   "dive",
   "gene",
   "gsh"
  ],
  "polClass": "metal",
  "polName": "甲基汞、微塑料",
  "stage": [
   "lar"
  ],
  "zh": "微塑料吸附甲基汞形成复合物被仔鱼摄入，提高汞蓄积并加重运动抑制，伴 GSH 代谢紊乱与 sod、gpx4a 上调。",
  "doi": "10.1016/j.marenvres.2022.105615"
 },
 {
  "pmid": "35559893",
  "title": "Abiotic factors and aging alter the physicochemical characteristics and toxicity of Phosphorus nanomaterials to zebrafish embryos.",
  "author1": "Priyam",
  "nAuthors": 4,
  "journal": "NanoImpact",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "surv",
   "hr"
  ],
  "polClass": "np",
  "polName": "纳米羟基磷灰石、纳米磷",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "环境老化与腐殖酸、紫外照射改变磷基纳米材料粒径，但在真实环境条件下对斑马鱼胚胎无急性毒性、亚致死效应极小。",
  "doi": "10.1016/j.impact.2022.100387"
 },
 {
  "pmid": "35142995",
  "title": "3-Pyridinylboronic Acid Ameliorates Rotenone-Induced Oxidative Stress Through Nrf2 Target Genes in Zebrafish Embryos.",
  "author1": "Üstündağ",
  "nAuthors": 10,
  "journal": "Neurochem Res",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "gene",
   "mda"
  ],
  "polClass": "pest",
  "polName": "鱼藤酮",
  "stage": [
   "lar"
  ],
  "zh": "3-吡啶硼酸改善鱼藤酮暴露仔鱼运动、降低 LPO 与 NO，并使 bdnf、dj1、hmox1a 与 nqo1 表达正常化，但对对照组有氧化损伤。",
  "doi": "10.1007/s11064-022-03548-6"
 },
 {
  "pmid": "36341947",
  "title": "Propranolol hydrochloride induces neurodevelopmental toxicity and locomotor disorders in zebrafish larvae.",
  "author1": "Li",
  "nAuthors": 17,
  "journal": "Neurotoxicology",
  "year": 2022,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "ache",
   "ros",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "普萘洛尔",
  "stage": [
   "lar"
  ],
  "zh": "普萘洛尔致仔鱼头部神经发育异常与运动障碍，氧化应激升高、AChE 与 ATP 酶活性改变，帕金森相关基因表达紊乱，虾青素与 Wnt 激活剂可缓解。",
  "doi": "10.1016/j.neuro.2022.10.016"
 },
 {
  "pmid": "36103040",
  "title": "Functional Teas from Penthorum chinense Pursh Alleviates Ethanol-Induced Hepatic Oxidative Stress and Autophagy Impairment in Zebrafish via Modulating the AMPK/p62/Nrf2/mTOR Signaling Axis.",
  "author1": "Zhao",
  "nAuthors": 8,
  "journal": "Plant Foods Hum Nutr",
  "year": 2022,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "hist",
   "ros",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "赶黄草经 AMPK/p62/Nrf2/mTOR 轴下调 CYP2E1、降低 ROS 与肝脂蓄积并恢复自噬，减轻乙醇性肝损伤。",
  "doi": "10.1007/s11130-022-01010-0"
 },
 {
  "pmid": "35247598",
  "title": "Transgenerational effects of bisphenol A on zebrafish reproductive tissues and sperm motility.",
  "author1": "Mostari",
  "nAuthors": 6,
  "journal": "Reprod Toxicol",
  "year": 2022,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "fec",
   "f1",
   "sperm",
   "hist"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "adu"
  ],
  "zh": "饲料中仅 1 µg/g 双酚A 即使 F0 性腺萎缩、子代存活率下降与畸形率升高并延续至 F3，子代精子活力下降持续至 F2。",
  "doi": "10.1016/j.reprotox.2022.02.005",
  "gen": "F3+"
 },
 {
  "pmid": "36163367",
  "title": "Combined toxicities of cadmium and five agrochemicals to the larval zebrafish (Danio rerio).",
  "author1": "Hu",
  "nAuthors": 6,
  "journal": "Sci Rep",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "surv"
  ],
  "polClass": "mix",
  "polName": "镉、毒死蜱、联苯菊酯",
  "stage": [
   "lar"
  ],
  "zh": "联苯菊酯与毒死蜱对仔鱼 LC50 最低（0.15、0.36 mg/L），含毒死蜱的二元混合及镉-啶虫脒、镉-毒死蜱组合均呈协同毒性。",
  "doi": "10.1038/s41598-022-20364-8",
  "pmc": "PMC9512934"
 },
 {
  "pmid": "34699814",
  "title": "A comprehensive review of 1,2,4-triazole fungicide toxicity in zebrafish (Danio rerio): A mitochondrial and metabolic perspective.",
  "author1": "Huang",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2022,
  "review": true,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox",
   "ed"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "pest",
  "polName": "三唑类杀菌剂",
  "stage": [],
  "zh": "综述指出三唑类杀菌剂抑制线粒体氧化磷酸化、诱导氧化应激与脂代谢紊乱，进而致发育延迟、畸形与运动行为异常。",
  "doi": "10.1016/j.scitotenv.2021.151177"
 },
 {
  "pmid": "35131240",
  "title": "Thyroid endocrine disruption and hepatotoxicity induced by bisphenol AF: Integrated zebrafish embryotoxicity test and deep learning.",
  "author1": "Chen",
  "nAuthors": 7,
  "journal": "Sci Total Environ",
  "year": 2022,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ed",
   "mt"
  ],
  "marks": [
   "th",
   "gene",
   "hist"
  ],
  "polClass": "edc",
  "polName": "双酚AF",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "12.5 与 125 µg/L 双酚AF 降低仔鱼甲状腺激素与脱碘酶、升高 TTR 并抑制激素受体；125 µg/L 致肝细胞坏死。",
  "doi": "10.1016/j.scitotenv.2022.153639"
 },
 {
  "pmid": "35143790",
  "title": "Intergenerational toxic effects of parental exposure to bisphenol AF on offspring and epigenetic modulations in zebrafish.",
  "author1": "Zhang",
  "nAuthors": 7,
  "journal": "Sci Total Environ",
  "year": 2022,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "f1",
   "len",
   "meth",
   "enz"
  ],
  "polClass": "edc",
  "polName": "双酚AF",
  "stage": [
   "adu"
  ],
  "zh": "10 µg/L 双酚AF 父系暴露降低 F1 孵化率、增加死亡并缩短体长，改变 F0 精巢与 F1 幼鱼 DNA 及 m6A RNA 甲基化基因表达；母系暴露主要升高 F1 抗氧化酶活性。",
  "doi": "10.1016/j.scitotenv.2022.153714",
  "gen": "F1"
 },
 {
  "pmid": "35395305",
  "title": "Low doses and lifecycle exposure of waterborne antidepressants in zebrafish model: A survey on sperm traits, reproductive behaviours, and transcriptome responses.",
  "author1": "Hong",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2022,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp"
  ],
  "marks": [
   "fec",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "文拉法辛、西酞普兰",
  "stage": [
   "adu"
  ],
  "zh": "全生命周期 10 µg/L 文拉法辛或 1 µg/L 西酞普兰即降低产卵量，1–10 µg/L 缩短交配持续时间与间隔，精子质量未变，卵巢转录组显示神经递质转运体信号改变。",
  "doi": "10.1016/j.scitotenv.2022.155017"
 },
 {
  "pmid": "35427626",
  "title": "Toxic effects and mechanisms of common pesticides (Roundup and chlorpyrifos) and their mixtures in a zebrafish model (Danio rerio).",
  "author1": "Falfushynska",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2022,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ox",
   "bh"
  ],
  "marks": [
   "ros",
   "enz",
   "hist",
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱、草甘膦",
  "stage": [
   "adu"
  ],
  "zh": "毒死蜱与农达均耗竭肝抗氧化能力并升高 ROS 与 DNA 损伤，毒死蜱氧化损伤更强并致亚硝化应激，混合毒性主要由毒死蜱驱动。",
  "doi": "10.1016/j.scitotenv.2022.155236"
 },
 {
  "pmid": "35842152",
  "title": "Melanin interference toxicity or transgenerational toxicity of organic UV filter ethylhexyl salicylate on zebrafish.",
  "author1": "Xie",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "dv"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "emerg",
  "polName": "水杨酸乙基己酯",
  "stage": [
   "adu",
   "lar"
  ],
  "zh": "紫外线吸收剂水杨酸乙基己酯经抑制 mitfa 及其 tyr、dct、tyrp1 级联减少亲代黑色素合成，该效应经母源 mitfa 异常与污染物传递延续至子代。",
  "doi": "10.1016/j.scitotenv.2022.157365",
  "gen": "F1"
 },
 {
  "pmid": "36058320",
  "title": "Polystyrene microplastics mitigate the embryotoxic damage of metformin and guanylurea in Danio rerio.",
  "author1": "Elizalde-Velázquez",
  "nAuthors": 9,
  "journal": "Sci Total Environ",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "ox"
  ],
  "marks": [
   "surv",
   "morph",
   "mda",
   "ros"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯微塑料、二甲双胍",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "微塑料降低二甲双胍与胍基脲的胚胎死亡率与畸形率并减轻其脂质过氧化与蛋白羰基化，机制为微塑料在卵黄囊累积阻断药物进入胚胎。",
  "doi": "10.1016/j.scitotenv.2022.158503"
 },
 {
  "pmid": "35377459",
  "title": "The Ahr2-Dependent wfikkn1 Gene Influences Zebrafish Transcriptome, Proteome, and Behavior.",
  "author1": "Shankar",
  "nAuthors": 12,
  "journal": "Toxicol Sci",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "bh",
   "mt"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "emerg",
  "polName": "二𫫇英",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "wfikkn1 表达依赖 Ahr2，其缺失改变 700 余基因与 325 个蛋白表达并致各阶段行为缺陷，但不改变 TCDD 的明显毒性。",
  "doi": "10.1093/toxsci/kfac037",
  "pmc": "PMC9308396"
 },
 {
  "pmid": "35933024",
  "title": "Effect of monosultap on notochord development in zebrafish (Danio rerio) embryos.",
  "author1": "Che",
  "nAuthors": 9,
  "journal": "Toxicology",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "cv"
  ],
  "marks": [
   "len",
   "hr",
   "surv",
   "morph",
   "gene"
  ],
  "polClass": "pest",
  "polName": "杀虫单",
  "stage": [
   "zyg",
   "lar",
   "hat"
  ],
  "zh": "0.25–0.75 mg/L 杀虫单致胚胎体长缩短、心率与孵化率下降及脊索畸形，脊索发育基因 shha、col2a、ptch2 随浓度上调，脊索局部凋亡与增殖异常。",
  "doi": "10.1016/j.tox.2022.153276"
 },
 {
  "pmid": "35736942",
  "title": "Multi- and Transgenerational Effects of Developmental Exposure to Environmental Levels of PFAS and PFAS Mixture in Zebrafish (Danio rerio).",
  "author1": "Haimbaugh",
  "nAuthors": 9,
  "journal": "Toxics",
  "year": 2022,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "bh"
  ],
  "marks": [
   "morph",
   "fec",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "全氟辛酸、全氟辛烷磺酸",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "环境浓度 PFOA、PFOS 及混合物暴露 0–5 dpf 后 F1、F2 才出现形态异常，行为与基因表达紊乱可遗传并跨代持续。",
  "doi": "10.3390/toxics10060334",
  "pmc": "PMC9228135",
  "gen": "F2"
 },
 {
  "pmid": "33933832",
  "title": "Microplastics alone or co-exposed with copper induce neurotoxicity and behavioral alterations on zebrafish larvae after a subchronic exposure.",
  "author1": "Santos",
  "nAuthors": 6,
  "journal": "Aquat Toxicol",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "surv",
   "len",
   "ache",
   "shoal"
  ],
  "polClass": "metal",
  "polName": "铜、微塑料",
  "stage": [
   "lar"
  ],
  "zh": "2 mg/L 微塑料与 60–125 µg/L 铜单用或联用均降低仔鱼存活并抑制 AChE，高铜与混合组显著降低游速与总游程。",
  "doi": "10.1016/j.aquatox.2021.105814"
 },
 {
  "pmid": "34051627",
  "title": "Effects of 2,4-dichlorophenol exposure on zebrafish: Implications for the sex hormone synthesis.",
  "author1": "Hu",
  "nAuthors": 7,
  "journal": "Aquat Toxicol",
  "year": 2021,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "vtg",
   "steroid",
   "meth",
   "gene"
  ],
  "polClass": "edc",
  "polName": "2,4-二氯酚",
  "stage": [
   "lar",
   "sex"
  ],
  "zh": "80 与 160 µg/L 2,4-二氯酚使性比偏雌、E2 与 VTG 升高、雄激素下降，伴 cyp19a1a 启动子低甲基化，氟佐唑可部分逆转。",
  "doi": "10.1016/j.aquatox.2021.105868"
 },
 {
  "pmid": "34598048",
  "title": "Dinitramine induces cardiotoxicity and morphological alterations on zebrafish embryo development.",
  "author1": "Park",
  "nAuthors": 4,
  "journal": "Aquat Toxicol",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "hr",
   "vasc",
   "gene"
  ],
  "polClass": "pest",
  "polName": "敌乐胺",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "1.6–6.4 mg/L 敌乐胺 96 h 暴露致胚胎心室与心房扩大、心率下降、心功能受损，血管生成受抑并激活炎症反应，6.4 mg/L 还诱导凋亡与细胞死亡。",
  "doi": "10.1016/j.aquatox.2021.105982"
 },
 {
  "pmid": "33111190",
  "title": "Neurotoxic effects in zebrafish embryos by valproic acid and nine of its analogues: the fish-mouse connection?",
  "author1": "Brotzmann",
  "nAuthors": 4,
  "journal": "Arch Toxicol",
  "year": 2021,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "bh",
   "mt",
   "dv"
  ],
  "marks": [
   "morph",
   "eyesize"
  ],
  "polClass": "emerg",
  "polName": "丙戊酸",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "丙戊酸及 9 种类似物在扩展 FET 中仅 4/10 与小鼠一致，改用抖动、小眼与颅面畸形等特异终点后一致性升至 75%，提示按作用模式细化终点可提高预测力。",
  "doi": "10.1007/s00204-020-02928-7",
  "pmc": "PMC7870776"
 },
 {
  "pmid": "34339841",
  "title": "Deficiency of heat shock factor 4 promotes lens epithelial cell senescence through upregulating p21cip1 expression.",
  "author1": "Cui",
  "nAuthors": 16,
  "journal": "Biochim Biophys Acta Mol Basis Dis",
  "year": 2021,
  "review": false,
  "organs": [
   "ey"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "sabg",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "HSF4 经招募 EZH2 提高 p21cip1 启动子 H3K27me3 抑制其表达；Hsf4 缺失小鼠与斑马鱼晶状体上皮均现 SA-β-gal 阳性与衰老因子升高。",
  "doi": "10.1016/j.bbadis.2021.166233"
 },
 {
  "pmid": "33726560",
  "title": "Short telomeres drive pessimistic judgement bias in zebrafish.",
  "author1": "Espigares",
  "nAuthors": 5,
  "journal": "Biol Lett",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ag"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "建立斑马鱼模糊刺激判断偏倚范式，tert-/- 个体更悲观，首次在脊椎动物中证明短端粒与判断偏倚的遗传因果关系。",
  "doi": "10.1098/rsbl.2020.0745",
  "pmc": "PMC8086985"
 },
 {
  "pmid": "34440088",
  "title": "Standardized Method for the Assessment of Behavioral Responses of Zebrafish Larvae.",
  "author1": "Maeda",
  "nAuthors": 3,
  "journal": "Biomedicines",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "vmr",
   "startle"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "6–7 dpf 仔鱼接受 50 次光暗刺激，5 分钟间隔第 5 次重复后游动距离即稳定，15 分钟间隔需第 16 次；建议适应 1 h 后取 5 分钟间隔第 5 次数据。",
  "doi": "10.3390/biomedicines9080884",
  "pmc": "PMC8389650"
 },
 {
  "pmid": "33939334",
  "title": "Embryonic ethanol exposure on zebrafish early development.",
  "author1": "Pinheiro-da-Silva",
  "nAuthors": 2,
  "journal": "Brain Behav",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "dv",
   "cv"
  ],
  "marks": [
   "len",
   "hr"
  ],
  "polClass": "emerg",
  "polName": "乙醇",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "0.5% 与 1% 乙醇胚胎暴露使 120 hpf 仔鱼体长缩短、心率下降、凋亡细胞增多并延迟孵化。",
  "doi": "10.1002/brb3.2062",
  "pmc": "PMC8213935"
 },
 {
  "pmid": "33710386",
  "title": "Effects of Low Concentration Benzophenone-3 Exposure on the Sex Ratio and Offspring Development of Zebrafish (Danio rerio).",
  "author1": "Xu",
  "nAuthors": 3,
  "journal": "Bull Environ Contam Toxicol",
  "year": 2021,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp",
   "dv"
  ],
  "marks": [
   "sexratio",
   "gene",
   "surv",
   "len",
   "hr"
  ],
  "polClass": "edc",
  "polName": "二苯酮-3",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "0.056 与 38 µg/L 二苯酮-3 暴露至 42 dpf 改变 F0 性比与基因表达，F1 胚胎孵化率、体长与心跳受影响。",
  "doi": "10.1007/s00128-021-03166-y",
  "gen": "F1"
 },
 {
  "pmid": "32651933",
  "title": "Protective Effects of Spermidine and Melatonin on Deltamethrin-Induced Cardiotoxicity and Neurotoxicity in Zebrafish.",
  "author1": "Liu",
  "nAuthors": 7,
  "journal": "Cardiovasc Toxicol",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "bh"
  ],
  "marks": [
   "gene",
   "dive"
  ],
  "polClass": "pest",
  "polName": "溴氰菊酯",
  "stage": [
   "lar"
  ],
  "zh": "0.025 mg/L 溴氰菊酯下调 Scn5lab、gata4、nkx2.5 并扰乱心脏环化，致心形态功能缺陷与仔鱼多动，亚精胺和褪黑素可逆转。",
  "doi": "10.1007/s12012-020-09591-5"
 },
 {
  "pmid": "33297050",
  "title": "Effects of pyriproxyfen on zebrafish brain mitochondria and acetylcholinesterase.",
  "author1": "Azevedo",
  "nAuthors": 12,
  "journal": "Chemosphere",
  "year": 2021,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "ache",
   "ros"
  ],
  "polClass": "pest",
  "polName": "吡丙醚",
  "stage": [
   "adu"
  ],
  "zh": "吡丙醚对斑马鱼脑 AChE 的体内 IC20 为 0.30 µmol/L，并降低复合体 I/II 呼吸控制、剂量依赖增加 O2- 生成、破坏线粒体钙转运。",
  "doi": "10.1016/j.chemosphere.2020.128029"
 },
 {
  "pmid": "33773317",
  "title": "Single and combined acute and subchronic toxic effects of microplastics and copper in zebrafish (Danio rerio) early life stages.",
  "author1": "Santos",
  "nAuthors": 6,
  "journal": "Chemosphere",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "dv"
  ],
  "marks": [
   "surv",
   "enz",
   "ache",
   "ros"
  ],
  "polClass": "metal",
  "polName": "铜、微塑料",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "2 hpf 至 14 dpf 暴露中微塑料与铜单用或联用均致仔鱼高死亡率与氧化应激并抑制 AChE，Cu+MPs 组生物标志物响应更强提示协同。",
  "doi": "10.1016/j.chemosphere.2021.130262"
 },
 {
  "pmid": "34004283",
  "title": "Developmental toxicity of procymidone to larval zebrafish based on physiological and transcriptomic analysis.",
  "author1": "Wu",
  "nAuthors": 8,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "edema",
   "hr",
   "gene"
  ],
  "polClass": "pest",
  "polName": "腐霉利",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "腐霉利 100 µg/L 致仔鱼心包水肿与心率升高，并改变糖脂代谢指标及 gabrg2、gabbr1 等 GABA 受体基因表达，游动距离下降。",
  "doi": "10.1016/j.cbpc.2021.109081"
 },
 {
  "pmid": "30895830",
  "title": "Cardiotoxicity evaluation and comparison of diterpene alkaloids on zebrafish.",
  "author1": "Ye",
  "nAuthors": 10,
  "journal": "Drug Chem Toxicol",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "hr",
   "morph"
  ],
  "polClass": "emerg",
  "polName": "乌头碱、新乌头碱、次乌头碱",
  "stage": [
   "lar"
  ],
  "zh": "双酯型二萜生物碱在 15.6–31.3 µM 降低胚胎心率、高剂量反升，并致严重器质性损伤；单酯型同类物毒性明显较弱，C-8 乙酰基与 A 环质子化氮决定差异。",
  "doi": "10.1080/01480545.2019.1586916"
 },
 {
  "pmid": "34330038",
  "title": "Long-term low-dose oxytetracycline potentially leads to neurobehavioural changes.",
  "author1": "Qiu",
  "nAuthors": 9,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ed"
  ],
  "marks": [
   "ntx",
   "th",
   "dive"
  ],
  "polClass": "emerg",
  "polName": "土霉素",
  "stage": [
   "adu"
  ],
  "zh": "环境浓度土霉素 30 天暴露经升高 T3 激活单胺氧化酶、降低 5-HT 与多巴胺，使斑马鱼更大胆冲动并延长白区停留时间。",
  "doi": "10.1016/j.ecoenv.2021.112546"
 },
 {
  "pmid": "34619474",
  "title": "Effects of low-concentration glyphosate and aminomethyl phosphonic acid on zebrafish embryo development.",
  "author1": "Zhang",
  "nAuthors": 10,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "hr",
   "avb",
   "edema",
   "gene"
  ],
  "polClass": "pest",
  "polName": "草甘膦、氨甲基膦酸",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "1–700 ng/mL 草甘膦与 AMPA 暴露 72 h 使胚胎与仔鱼心率升高并出现明显心律失常，心包水肿与骨骼变形，伴 TBX5、NKX2.5、BMP4 与 Bcl-2/Bax 改变。",
  "doi": "10.1016/j.ecoenv.2021.112854"
 },
 {
  "pmid": "34678628",
  "title": "Imidacloprid and thiamethoxam affect synaptic transmission in zebrafish.",
  "author1": "Zhang",
  "nAuthors": 7,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "bh"
  ],
  "marks": [
   "ache",
   "gene"
  ],
  "polClass": "pest",
  "polName": "吡虫啉、噻虫嗪",
  "stage": [
   "lar",
   "juv"
  ],
  "zh": "50 ng/L–50 mg/L 暴露后 28–35 dpf 仔鱼活动显著改变，噻虫嗪升高 AChE 活性，并扰动 GABA、多巴胺与 5-羟色胺通路关键基因转录。",
  "doi": "10.1016/j.ecoenv.2021.112917"
 },
 {
  "pmid": "33288291",
  "title": "Combined toxicity assessment of myclobutanil and thiamethoxam to zebrafish embryos employing multi-endpoints.",
  "author1": "Shen",
  "nAuthors": 9,
  "journal": "Environ Pollut",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "ox",
   "ed"
  ],
  "marks": [
   "surv",
   "enz",
   "gene"
  ],
  "polClass": "pest",
  "polName": "腈菌唑、噻虫嗪",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "腈菌唑 96 h LC50 5.2–10.3 mg/L 远低于噻虫嗪的 147–246 mg/L，二者联合对胚胎呈协同毒性并改变抗氧化酶与 8 个相关基因表达。",
  "doi": "10.1016/j.envpol.2020.116116"
 },
 {
  "pmid": "33316505",
  "title": "Low-dose cadmium stress increases the bioaccumulation and toxicity of dinotefuran enantiomers in zebrafish (Danio rerio)?",
  "author1": "Di",
  "nAuthors": 9,
  "journal": "Environ Pollut",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "ox"
  ],
  "marks": [
   "body",
   "mda",
   "gene"
  ],
  "polClass": "metal",
  "polName": "镉、呋虫胺",
  "stage": [
   "adu"
  ],
  "zh": "呋虫胺对映体在斑马鱼体内富集具组织特异性，S-体在头与内脏更高；共暴露镉使 R-体蓄积增至 3.4 倍并上调 cz-sod、cas3 与 p53。",
  "doi": "10.1016/j.envpol.2020.116191"
 },
 {
  "pmid": "33352483",
  "title": "New insights into cardiotoxicity induced by chiral fluoxetine at environmental-level: Enantioselective arrhythmia in developmental zebrafish (Danio rerio).",
  "author1": "Chai",
  "nAuthors": 6,
  "journal": "Environ Pollut",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "edema",
   "avb",
   "hist",
   "body"
  ],
  "polClass": "emerg",
  "polName": "氟西汀",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "氟西汀在胚胎中代谢为去甲氟西汀，S-型富集更高；暴露致心包水肿、循环异常与血栓，S-氟西汀毒性强于 R-型，心肌纤维化参与对映选择性心律失常。",
  "doi": "10.1016/j.envpol.2020.116182"
 },
 {
  "pmid": "33549839",
  "title": "Bifenazate exposure induces cardiotoxicity in zebrafish embryos.",
  "author1": "Ma",
  "nAuthors": 10,
  "journal": "Environ Pollut",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "ros",
   "gene"
  ],
  "polClass": "pest",
  "polName": "联苯肼酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "联苯肼酯致胚胎严重心脏毒性伴心脏发育基因紊乱与氧化应激，ATP 酶活性与钙信号通路基因改变使血液淤积于心外而致死，虾青素可部分缓解。",
  "doi": "10.1016/j.envpol.2021.116539"
 },
 {
  "pmid": "33694115",
  "title": "Bixafen causes cardiac toxicity in zebrafish (Danio rerio) embryos.",
  "author1": "Yuan",
  "nAuthors": 3,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "hr",
   "edema",
   "gene"
  ],
  "polClass": "pest",
  "polName": "联苯吡菌胺",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "0.1–0.9 µM 联苯吡菌胺致胚胎心包水肿、心率降低与心脏区红细胞锐减，红细胞生成及 myh6、nkx2.5、myh7 表达下调，并诱导细胞凋亡。",
  "doi": "10.1007/s11356-021-13238-5"
 },
 {
  "pmid": "33270929",
  "title": "Approaches to Test the Neurotoxicity of Environmental Contaminants in the Zebrafish Model: From Behavior to Molecular Mechanisms.",
  "author1": "Fitzgerald",
  "nAuthors": 5,
  "journal": "Environ Toxicol Chem",
  "year": 2021,
  "review": true,
  "organs": [
   "br"
  ],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "综述给出从行为到结构、功能与分子的斑马鱼仔鱼神经毒性评价路径，可弥补体外体系缺失整体行为反应的不足。",
  "doi": "10.1002/etc.4951",
  "key": true
 },
 {
  "pmid": "33672782",
  "title": "Paternal Inheritance of Bisphenol A Cardiotoxic Effects: The Implications of Sperm Epigenome.",
  "author1": "Lombó",
  "nAuthors": 2,
  "journal": "Int J Mol Sci",
  "year": 2021,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "rp",
   "cv"
  ],
  "marks": [
   "gene",
   "f1"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "adu",
   "zyg"
  ],
  "zh": "父系 BPA 暴露使精子组蛋白 H3K9ac 超乙酰化并传至子代，上调 hand2、esr2b 与 kat6a，EGCG 可逆转心脏发育损伤。",
  "doi": "10.3390/ijms22042125",
  "pmc": "PMC7924642",
  "gen": "F1"
 },
 {
  "pmid": "34830252",
  "title": "SDHI Fungicide Toxicity and Associated Adverse Outcome Pathways: What Can Zebrafish Tell Us?",
  "author1": "Yanicostas",
  "nAuthors": 2,
  "journal": "Int J Mol Sci",
  "year": 2021,
  "review": true,
  "organs": [
   "li",
   "ki"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "morph",
   "gene"
  ],
  "polClass": "pest",
  "polName": "联苯吡菌胺、啶酰菌胺、氟唑菌酰胺",
  "stage": [],
  "zh": "综述指出 9 种 SDHI 杀菌剂在斑马鱼中致发育毒性、心血管异常、肝肾损伤与氧化应激，糖代谢缺陷、氧化应激与凋亡是核心通路。",
  "doi": "10.3390/ijms222212362",
  "pmc": "PMC8618699"
 },
 {
  "pmid": "33111391",
  "title": "Developmental neurotoxicity and toxic mechanisms induced by olaquindox in zebrafish.",
  "author1": "Guo",
  "nAuthors": 7,
  "journal": "J Appl Toxicol",
  "year": 2021,
  "review": false,
  "organs": [
   "br",
   "li"
  ],
  "dirs": [
   "bh",
   "dv"
  ],
  "marks": [
   "coil",
   "len",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "喹乙醇",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "25–1000 mg/L 喹乙醇增加胚胎自发尾卷曲却降低运动能力，缩短体长并致脑凋亡与轴突损伤，九个神经发育标记基因均显著下调。",
  "doi": "10.1002/jat.4062"
 },
 {
  "pmid": "33247449",
  "title": "Changes of embryonic development, locomotor activity, and metabolomics in zebrafish co-exposed to chlorpyrifos and deltamethrin.",
  "author1": "Hu",
  "nAuthors": 5,
  "journal": "J Appl Toxicol",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "morph",
   "vmr"
  ],
  "polClass": "op",
  "polName": "毒死蜱、溴氰菊酯",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "毒死蜱与溴氰菊酯单用均提高胚胎死亡率与畸形率，仅联合组降低孵化率，高剂量联合组游速下降且对重复光暗刺激失去适应性。",
  "doi": "10.1002/jat.4124"
 },
 {
  "pmid": "34492931",
  "title": "Physiological and transcriptomic changes of zebrafish (Danio rerio) embryos-larvae in response to 2-MIB exposure.",
  "author1": "Zhou",
  "nAuthors": 10,
  "journal": "J Hazard Mater",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "bh",
   "ox"
  ],
  "marks": [
   "len",
   "ache",
   "nrf2",
   "th"
  ],
  "polClass": "emerg",
  "polName": "2-甲基异莰醇",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "2-MIB 在 0.5–42.8 µg/L 不增加死亡与畸形，却剂量依赖地增加仔鱼体长和游泳活动，并提高 AChE 活性、激活 Nrf2 氧化应激通路。",
  "doi": "10.1016/j.jhazmat.2021.126142"
 },
 {
  "pmid": "34833056",
  "title": "Evaluating the Death and Recovery of Lateral Line Hair Cells Following Repeated Neomycin Treatments.",
  "author1": "Venuto",
  "nAuthors": 2,
  "journal": "Life (Basel)",
  "year": 2021,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "bh",
   "mt"
  ],
  "marks": [
   "hair",
   "surv"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "3–4 dpf 反复新霉素处理可持续消融侧线功能毛细胞，新功能毛细胞出现快于细胞再生，4 dpf 恢复快于 3 dpf。",
  "doi": "10.3390/life11111180",
  "pmc": "PMC8625531"
 },
 {
  "pmid": "33423228",
  "title": "Early Life Stage Assays in Zebrafish.",
  "author1": "Abe",
  "nAuthors": 4,
  "journal": "Methods Mol Biol",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "morph"
  ],
  "polClass": "none",
  "polName": "3,4-二氯苯胺",
  "stage": [
   "lar"
  ],
  "zh": "详述斑马鱼 FET 试验全流程，以参考物 3,4-二氯苯胺验证可检出亚致死与致畸效应，支持其作为化学品与污染物风险评估的替代方法。",
  "doi": "10.1007/978-1-0716-1091-6_7"
 },
 {
  "pmid": "34224825",
  "title": "The organophosphate insecticide diazinon and aging: Neurobehavioral and mitochondrial effects in zebrafish exposed as embryos or during aging.",
  "author1": "Boyda",
  "nAuthors": 6,
  "journal": "Neurotoxicol Teratol",
  "year": 2021,
  "review": false,
  "organs": [
   "br",
   "go"
  ],
  "dirs": [
   "bh",
   "ag"
  ],
  "marks": [],
  "polClass": "op",
  "polName": "二嗪磷",
  "stage": [
   "lar",
   "juv",
   "adu",
   "old"
  ],
  "zh": "胚胎期暴露二嗪磷使斑马鱼在仔鱼至衰老各阶段行为持续异常、脑与精巢线粒体呼吸增强，成年急性暴露则无明显影响。",
  "doi": "10.1016/j.ntt.2021.107011",
  "pmc": "PMC8440393"
 },
 {
  "pmid": "33849304",
  "title": "Ageing genetic signature of hypersomatotropism.",
  "author1": "Elbialy",
  "nAuthors": 1,
  "journal": "Open Biol",
  "year": 2021,
  "review": false,
  "organs": [
   "mu",
   "li",
   "br"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "生长激素过量的斑马鱼肌肉、肝与脑约半数差异表达基因与自然衰老重叠，肌肉衰老基因富集最显著。",
  "doi": "10.1098/rsob.200265",
  "pmc": "PMC8059514"
 },
 {
  "pmid": "32889257",
  "title": "Developmental toxicity triggered by benzyl alcohol in the early stage of zebrafish embryos: Cardiovascular defects with inhibited liver formation and degenerated neurogenesis.",
  "author1": "Manjunatha",
  "nAuthors": 3,
  "journal": "Sci Total Environ",
  "year": 2021,
  "review": false,
  "organs": [
   "he",
   "li"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "surv",
   "edema",
   "avb",
   "vasc",
   "morph"
  ],
  "polClass": "emerg",
  "polName": "苯甲醇",
  "stage": [
   "zyg",
   "lar",
   "hat"
  ],
  "zh": "4 hpf 起 72 h 苯甲醇暴露致死亡率升高、孵化受抑、体节数减少，心包水肿与节律不齐，头躯血管减少，肝脏发育退化，运动神经元轴突完整性受损。",
  "doi": "10.1016/j.scitotenv.2020.141631"
 },
 {
  "pmid": "33418331",
  "title": "In vivo evaluation of Nano-palladium toxicity on larval stages and adult of zebrafish (Danio rerio).",
  "author1": "Anila",
  "nAuthors": 4,
  "journal": "Sci Total Environ",
  "year": 2021,
  "review": false,
  "organs": [
   "gi",
   "li",
   "br"
  ],
  "dirs": [
   "ox",
   "dv",
   "bh"
  ],
  "marks": [
   "surv",
   "hr",
   "morph",
   "ros",
   "ache"
  ],
  "polClass": "np",
  "polName": "纳米钯",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "0.4 与 22 ng/L 纳米钯使 96 hpf 仔鱼孵化率与存活下降、心率改变并致畸，ROS 升高、AChE 下降，成鱼游动异常，鳃肝脑出现病理损伤。",
  "doi": "10.1016/j.scitotenv.2020.144268"
 },
 {
  "pmid": "33582354",
  "title": "Modeling acetylcholine esterase inhibition resulting from exposure to a mixture of atrazine and chlorpyrifos using a physiologically-based kinetic model in fish.",
  "author1": "Mit",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "ache"
  ],
  "polClass": "op",
  "polName": "毒死蜱、阿特拉津",
  "stage": [
   "adu"
  ],
  "zh": "PBTK-TD 模型可预测阿特拉津与毒死蜱对鱼 AChE 及羧酸酯酶的联合抑制，但成鱼数据未能证实二者存在协同效应。",
  "doi": "10.1016/j.scitotenv.2020.144734"
 },
 {
  "pmid": "33524444",
  "title": "Multistate models of developmental toxicity: Application to valproic acid-induced malformations in the zebrafish embryo.",
  "author1": "Siméon",
  "nAuthors": 5,
  "journal": "Toxicol Appl Pharmacol",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "dv"
  ],
  "marks": [
   "morph",
   "surv"
  ],
  "polClass": "emerg",
  "polName": "丙戊酸",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "多状态模型联合分析斑马鱼胚胎 5 天内畸形发生与孵化，丙戊酸主要提高孵化与未孵化胚胎的畸形发生率并降低畸形逆转率，较 OECD 分段分析更精细。",
  "doi": "10.1016/j.taap.2021.115424"
 },
 {
  "pmid": "34941692",
  "title": "Combined Developmental Toxicity of the Pesticides Difenoconazole and Dimethomorph on Embryonic Zebrafish.",
  "author1": "Fan",
  "nAuthors": 9,
  "journal": "Toxins (Basel)",
  "year": 2021,
  "review": false,
  "organs": [],
  "dirs": [
   "dv"
  ],
  "marks": [
   "morph",
   "surv",
   "gene"
  ],
  "polClass": "pest",
  "polName": "苯醚甲环唑、烯酰吗啉",
  "stage": [
   "pha",
   "hat",
   "lar"
  ],
  "zh": "苯醚甲环唑与烯酰吗啉单独及联合暴露均以 96 hpf 畸形率最敏感（BMDL10 0.30 与 1.10 mg/L），联合呈协同效应，并下调 mcm 家族、cdk1 与 cdc20。",
  "doi": "10.3390/toxins13120854",
  "pmc": "PMC8706556"
 },
 {
  "pmid": "33353889",
  "title": "A DNA methylation age predictor for zebrafish.",
  "author1": "Mayne",
  "nAuthors": 6,
  "journal": "Aging (Albany NY)",
  "year": 2020,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "ag"
  ],
  "marks": [
   "clock",
   "meth"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "基于尾鳍 26 个 CpG 位点的多重 PCR 甲基化年龄预测器，在 10.9–78.1 周龄斑马鱼中平均绝对误差仅 3.2 周。",
  "doi": "10.18632/aging.202400",
  "pmc": "PMC7803548",
  "key": true
 },
 {
  "pmid": "32343929",
  "title": "Reprogramming Müller Glia to Regenerate Retinal Neurons.",
  "author1": "Lahne",
  "nAuthors": 4,
  "journal": "Annu Rev Vis Sci",
  "year": 2020,
  "review": true,
  "organs": [
   "ey"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "regen"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "综述总结斑马鱼 Müller 胶质细胞自发重编程再生视网膜神经元的机制，与哺乳动物比较，指出其治疗视网膜退行病的潜力。",
  "doi": "10.1146/annurev-vision-121219-081808",
  "pmc": "PMC8384111"
 },
 {
  "pmid": "31927064",
  "title": "Refinement of an OECD test guideline for evaluating the effects of endocrine disrupting chemicals on aromatase gene expression and reproduction using novel transgenic cyp19a1a-eGFP zebrafish.",
  "author1": "De Oliveira",
  "nAuthors": 11,
  "journal": "Aquat Toxicol",
  "year": 2020,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "mt",
   "ed"
  ],
  "marks": [
   "arom",
   "vtg",
   "fec",
   "gene"
  ],
  "polClass": "pest",
  "polName": "咪鲜胺",
  "stage": [
   "adu"
  ],
  "zh": "OECD TG229 中用 cyp19a1a-eGFP 转基因斑马鱼，172.6 µg/L 咪鲜胺降低产卵量与卵黄蛋白原，卵巢 GFP 于 21 天升高。",
  "doi": "10.1016/j.aquatox.2020.105403"
 },
 {
  "pmid": "32638588",
  "title": "Systems Toxicology Approach for Testing Chemical Cardiotoxicity in Larval Zebrafish.",
  "author1": "Li",
  "nAuthors": 11,
  "journal": "Chem Res Toxicol",
  "year": 2020,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "mt",
   "cv"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "构建首个斑马鱼幼虫心脏毒性可计算网络模型，用公开转录组数据在 5 种化学物中检出 4 种的心脏扰动，其中 2 例早于可见表型 3 天。",
  "doi": "10.1021/acs.chemrestox.0c00095"
 },
 {
  "pmid": "31437630",
  "title": "Does hepatotoxicity interfere with endocrine activity in zebrafish (Danio rerio)?",
  "author1": "Baumann",
  "nAuthors": 9,
  "journal": "Chemosphere",
  "year": 2020,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ed",
   "mt"
  ],
  "marks": [
   "vtg",
   "hist",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "对乙酰氨基酚、异烟肼、阿司匹林",
  "stage": [
   "adu"
  ],
  "zh": "对乙酰氨基酚、异烟肼与阿司匹林均致轻度肝细胞坏死与肝毒性基因改变，却未降低肝脏 VTG 合成，提示按 OECD TG 229/230 肝毒物不易干扰 VTG 判读。",
  "doi": "10.1016/j.chemosphere.2019.124589"
 },
 {
  "pmid": "31563099",
  "title": "Dysregulation of endocrine disruption, apoptosis and the transgenerational toxicity induced by spirotetramat.",
  "author1": "Zhang",
  "nAuthors": 10,
  "journal": "Chemosphere",
  "year": 2020,
  "review": false,
  "organs": [
   "li",
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "steroid",
   "vtg",
   "f1"
  ],
  "polClass": "pest",
  "polName": "螺虫乙酯",
  "stage": [
   "adu"
  ],
  "zh": "螺虫乙酯暴露降低雌雄斑马鱼血浆 E2、T 与 11-KT 及雌鱼 VTG，改变性腺 HPG 轴基因与凋亡通路，并使子代发育延迟。",
  "doi": "10.1016/j.chemosphere.2019.124900",
  "gen": "F1"
 },
 {
  "pmid": "31995874",
  "title": "The pyrethroid esfenvalerate induces hypoactivity and decreases dopamine transporter expression in embryonic/larval zebrafish (Danio rerio).",
  "author1": "Wang",
  "nAuthors": 6,
  "journal": "Chemosphere",
  "year": 2020,
  "review": false,
  "organs": [],
  "dirs": [
   "bh"
  ],
  "marks": [
   "vmr",
   "gene"
  ],
  "polClass": "pest",
  "polName": "氰戊菊酯",
  "stage": [
   "lar"
  ],
  "zh": "环境浓度氰戊菊酯不致死致畸但使 6 dpf 仔鱼视觉运动反应降低，并下调多巴胺转运体表达，效应具年龄依赖。",
  "doi": "10.1016/j.chemosphere.2019.125416"
 },
 {
  "pmid": "31985398",
  "title": "celsr1a is essential for tissue homeostasis and onset of aging phenotypes in the zebrafish.",
  "author1": "Li",
  "nAuthors": 8,
  "journal": "Elife",
  "year": 2020,
  "review": false,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [
   "gross",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "celsr1a 缺失突变体在年轻成鱼即现早衰表型，与细胞衰老和端粒长度无关，源于祖细胞库维持失败，热量限制可缓解。",
  "doi": "10.7554/eLife.50523",
  "pmc": "PMC7010407"
 },
 {
  "pmid": "32841905",
  "title": "Parental exposure to environmental concentrations of tris(1,3-dichloro-2-propyl)phosphate induces abnormal DNA methylation and behavioral changes in F1 zebrafish larvae.",
  "author1": "Ding",
  "nAuthors": 9,
  "journal": "Environ Pollut",
  "year": 2020,
  "review": false,
  "organs": [],
  "dirs": [
   "rp",
   "bh"
  ],
  "marks": [
   "len",
   "meth",
   "gene"
  ],
  "polClass": "emerg",
  "polName": "磷酸三(1,3-二氯-2-丙基)酯",
  "stage": [
   "lar",
   "adu"
  ],
  "zh": "亲代环境浓度 TDCIPP 暴露使 F1 卵残留污染物、仔鱼体长缩短与泳动下降，dnmt3aa 与 dnmt1 下调，slc1a2b 启动子超甲基化致其表达降低。",
  "doi": "10.1016/j.envpol.2020.115305",
  "gen": "F1"
 },
 {
  "pmid": "31887561",
  "title": "Genetic evidence for estrogenicity of bisphenol A in zebrafish gonadal differentiation and its signalling mechanism.",
  "author1": "Song",
  "nAuthors": 6,
  "journal": "J Hazard Mater",
  "year": 2020,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "hist",
   "fec"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "lar",
   "sex"
  ],
  "zh": "BPA 可挽救 cyp19a1a 缺失突变体全雄表型并致性腺发育延迟与不育，该雌性化依赖核雌激素受体，尤其 esr2a。",
  "doi": "10.1016/j.jhazmat.2019.121886"
 },
 {
  "pmid": "32854587",
  "title": "An acetylcholinesterase inhibitor, donepezil, increases anxiety and cortisol levels in adult zebrafish.",
  "author1": "Giacomini",
  "nAuthors": 9,
  "journal": "J Psychopharmacol",
  "year": 2020,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "dive",
   "vmr",
   "shoal",
   "ache",
   "cort"
  ],
  "polClass": "emerg",
  "polName": "多奈哌齐",
  "stage": [
   "adu"
  ],
  "zh": "多奈哌齐 24 h 暴露剂量依赖性降低成鱼运动活性与光照时间，抑制脑 AChE 并升高全身皮质醇，提示胆碱能抑制增强焦虑样行为与内分泌反应。",
  "doi": "10.1177/0269881120944155"
 },
 {
  "pmid": "31911208",
  "title": "Adult exposure to insecticides causes persistent behavioral and neurochemical alterations in zebrafish.",
  "author1": "Hawkey",
  "nAuthors": 8,
  "journal": "Neurotoxicol Teratol",
  "year": 2020,
  "review": false,
  "organs": [],
  "dirs": [
   "bh"
  ],
  "marks": [
   "dive",
   "shoal",
   "startle"
  ],
  "polClass": "op",
  "polName": "滴滴涕、毒死蜱",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "5 周 DDT 暴露致成鱼低活动与焦虑性趋底增强，14 月龄仍低活动且惊吓反应增强；5 周毒死蜱暴露则致长期多动与捕食回避受损。",
  "doi": "10.1016/j.ntt.2019.106853",
  "pmc": "PMC7061078"
 },
 {
  "pmid": "33259761",
  "title": "Loss of the glucocorticoid receptor causes accelerated ovarian ageing in zebrafish.",
  "author1": "Faught",
  "nAuthors": 3,
  "journal": "Proc Biol Sci",
  "year": 2020,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ag",
   "rp"
  ],
  "marks": [
   "fec",
   "f1",
   "hist"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu"
  ],
  "zh": "糖皮质激素受体敲除斑马鱼卵巢提前衰老，卵泡闭锁、卵质下降、卵巢 tert 表达降低，产卵量、受精率与子代存活均下降。",
  "doi": "10.1098/rspb.2020.2190",
  "pmc": "PMC7739937"
 },
 {
  "pmid": "32554492",
  "title": "Telomere shortening produces an inflammatory environment that increases tumor incidence in zebrafish.",
  "author1": "Lex",
  "nAuthors": 8,
  "journal": "Proc Natl Acad Sci U S A",
  "year": 2020,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "sabg",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "bla",
   "lar",
   "adu"
  ],
  "zh": "短端粒经非细胞自主方式造成系统性炎症：tert 突变斑马鱼局部与远处组织衰老炎症升高，黑色素瘤发生与转移增加，抗炎药可逆转。",
  "doi": "10.1073/pnas.1920049117",
  "pmc": "PMC7334448"
 },
 {
  "pmid": "32173372",
  "title": "Thyroid disruption and developmental toxicity caused by triphenyltin (TPT) in zebrafish embryos/larvae.",
  "author1": "Yao",
  "nAuthors": 8,
  "journal": "Toxicol Appl Pharmacol",
  "year": 2020,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "th",
   "gene",
   "surv",
   "len"
  ],
  "polClass": "metal",
  "polName": "三苯基锡",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "低至 0.039 nM 三苯基锡暴露 7 与 14 天即降低仔鱼 T4、T3，反馈性上调 crh、tshβ、nis、tpo、tg，存活与体长下降。",
  "doi": "10.1016/j.taap.2020.114957"
 },
 {
  "pmid": "31384916",
  "title": "Chlorpyrifos exposure induces lipid metabolism disorder at the physiological and transcriptomic levels in larval zebrafish.",
  "author1": "Wang",
  "nAuthors": 6,
  "journal": "Acta Biochim Biophys Sin (Shanghai)",
  "year": 2019,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "op",
  "polName": "毒死蜱",
  "stage": [
   "lar"
  ],
  "zh": "30–300 µg/L 毒死蜱暴露 7 天使仔鱼脂滴减少、TG/TC 与丙酮酸下降，心脏组织凋亡增加、心血管基因转录改变，465 个差异基因集中于糖脂代谢。",
  "doi": "10.1093/abbs/gmz074"
 },
 {
  "pmid": "31077968",
  "title": "Medroxyprogesterone acetate affects sex differentiation and spermatogenesis in zebrafish.",
  "author1": "Shi",
  "nAuthors": 10,
  "journal": "Aquat Toxicol",
  "year": 2019,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "gene",
   "hist"
  ],
  "polClass": "edc",
  "polName": "醋酸甲羟孕酮",
  "stage": [
   "lar",
   "juv",
   "sex",
   "adu"
  ],
  "zh": "42 ng/L 醋酸甲羟孕酮使雄鱼比例达 60%，上调 dmrt1、hsd17b3，睾丸未成熟精母细胞增多，雌鱼 lhb 与 fshb 受抑。",
  "doi": "10.1016/j.aquatox.2019.04.014"
 },
 {
  "pmid": "31319296",
  "title": "Male-biased zebrafish sex differentiation and metabolomics profile changes caused by dydrogesterone.",
  "author1": "Jiang",
  "nAuthors": 7,
  "journal": "Aquat Toxicol",
  "year": 2019,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "gene"
  ],
  "polClass": "edc",
  "polName": "地屈孕酮",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "4.4–440 ng/L 地屈孕酮剂量依赖性使雄鱼比例达 98%，仔鱼脂肪酸与牛磺酸升高、胆汁酸下降，或经 p53 致卵母细胞凋亡。",
  "doi": "10.1016/j.aquatox.2019.105242"
 },
 {
  "pmid": "31518776",
  "title": "Comparative thyroid disruption by o,p'-DDT and p,p'-DDE in zebrafish embryos/larvae.",
  "author1": "Wu",
  "nAuthors": 9,
  "journal": "Aquat Toxicol",
  "year": 2019,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "th",
   "gene",
   "surv",
   "len",
   "morph"
  ],
  "polClass": "pest",
  "polName": "o,p'-滴滴涕、p,p'-滴滴伊",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "o,p'-DDT 使仔鱼 T4、T3 升高、ugt1ab 与 dio3 下调，p,p'-DDE 则使其降低，二者均降低存活与体长、升高畸形率。",
  "doi": "10.1016/j.aquatox.2019.105280"
 },
 {
  "pmid": "31251046",
  "title": "Accumulation, Biotransformation, and Endocrine Disruption Effects of Fluorotelomer Surfactant Mixtures on Zebrafish.",
  "author1": "Shi",
  "nAuthors": 6,
  "journal": "Chem Res Toxicol",
  "year": 2019,
  "review": false,
  "organs": [
   "li",
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "body",
   "vtg",
   "steroid",
   "th",
   "f1"
  ],
  "polClass": "emerg",
  "polName": "6:2 FTAB、6:2 FTAA",
  "stage": [
   "adu"
  ],
  "zh": "共暴露 180 天后 6:2 FTAA 占组织 PFAS 约 92%，雄鱼肝蓄积更高，50 与 500 µg/L 使产卵减少、子代畸形死亡增加。",
  "doi": "10.1021/acs.chemrestox.9b00127"
 },
 {
  "pmid": "30537588",
  "title": "Cardiovascular toxicity and anxiety-like behavior induced by deltamethrin in zebrafish (Danio rerio) larvae.",
  "author1": "Li",
  "nAuthors": 3,
  "journal": "Chemosphere",
  "year": 2019,
  "review": false,
  "organs": [
   "he",
   "ey"
  ],
  "dirs": [
   "cv",
   "bh",
   "dv"
  ],
  "marks": [
   "len",
   "morph",
   "vasc",
   "gene"
  ],
  "polClass": "pest",
  "polName": "溴氰菊酯",
  "stage": [
   "lar"
  ],
  "zh": "溴氰菊酯致 72 hpf 仔鱼体长与头眼面积减小、心脑血管形态受损并诱导凋亡，同时增加贴壁行为提示焦虑。",
  "doi": "10.1016/j.chemosphere.2018.12.011"
 },
 {
  "pmid": "31255755",
  "title": "Cardiotoxicity of forchlorfenuron (CPPU) in zebrafish (Danio rerio) and H9c2 cardiomyocytes.",
  "author1": "Gong",
  "nAuthors": 4,
  "journal": "Chemosphere",
  "year": 2019,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv"
  ],
  "marks": [
   "surv",
   "morph",
   "co",
   "gene"
  ],
  "polClass": "pest",
  "polName": "氯吡脲",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "2.5–12.5 µg/mL 氯吡脲致斑马鱼心脏形态变形、收缩功能障碍与红细胞减少，myl7、gata4、mef2c、amhc、vmhc、gata1 表达改变，H9c2 细胞骨架破坏。",
  "doi": "10.1016/j.chemosphere.2019.06.027"
 },
 {
  "pmid": "31195222",
  "title": "Monitoring estrogenic activities of waste and surface waters using a novel in vivo zebrafish embryonic (EASZY) assay: Comparison with in vitro cell-based assays and determination of effect-based trigger values.",
  "author1": "Brion",
  "nAuthors": 14,
  "journal": "Environ Int",
  "year": 2019,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "mt",
   "ed"
  ],
  "marks": [
   "arom",
   "gene"
  ],
  "polClass": "mix",
  "polName": "地表水与废水水样",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "33 份欧洲水样中 18 份浓度依赖性上调胚胎脑 cyp19a1b，活体 EEQ 与体外及化学分析相关，据此推导触发值。",
  "doi": "10.1016/j.envint.2019.06.006"
 },
 {
  "pmid": "31342352",
  "title": "Propiconazole induces abnormal behavior and oxidative stress in zebrafish.",
  "author1": "Valadas",
  "nAuthors": 8,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2019,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [
   "dive",
   "enz"
  ],
  "polClass": "pest",
  "polName": "丙环唑",
  "stage": [
   "adu"
  ],
  "zh": "丙环唑 1700–8500 ng/L 使斑马鱼新缸试验中上层停留减少、底部时间增加，脑 SOD 与 CAT 活性升高。",
  "doi": "10.1007/s11356-019-05977-3"
 },
 {
  "pmid": "31068624",
  "title": "Microbiota alter metabolism and mediate neurodevelopmental toxicity of 17β-estradiol.",
  "author1": "Catron",
  "nAuthors": 13,
  "journal": "Sci Rep",
  "year": 2019,
  "review": false,
  "organs": [
   "gu"
  ],
  "dirs": [
   "bh",
   "ed"
  ],
  "marks": [
   "vmr"
  ],
  "polClass": "edc",
  "polName": "雌二醇",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "雌二醇对光照期运动的抑制依赖肠道菌群，无菌仔鱼体内雌二醇浓度显著更高，提示菌群经代谢改变其毒代动力学。",
  "doi": "10.1038/s41598-019-43346-9",
  "pmc": "PMC6506524"
 },
 {
  "pmid": "31272786",
  "title": "Transgenerational effects of BPA on female reproduction.",
  "author1": "Santangeli",
  "nAuthors": 5,
  "journal": "Sci Total Environ",
  "year": 2019,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "rp",
   "ed"
  ],
  "marks": [
   "fec",
   "meth",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚A",
  "stage": [
   "adu"
  ],
  "zh": "20 µg/L 双酚A 母系暴露使雌鱼生育力下降延续至 F2，amh 启动子超甲基化伴 H3K4me3 与 H3K27me3 改变，其转录下调可持续至 F3。",
  "doi": "10.1016/j.scitotenv.2019.06.029",
  "gen": "F3+"
 },
 {
  "pmid": "30521027",
  "title": "Detection and Prioritization of Developmentally Neurotoxic and/or Neurotoxic Compounds Using Zebrafish.",
  "author1": "Quevedo",
  "nAuthors": 7,
  "journal": "Toxicol Sci",
  "year": 2019,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "surv",
   "morph",
   "vmr",
   "body"
  ],
  "polClass": "mix",
  "polName": "90 种化合物库",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "90 化合物库经斑马鱼胚胎毒性、体内浓度测定与光暗运动功能测试，证明该流程可作为可靠高效的神经毒性初筛与优先排序工具。",
  "doi": "10.1093/toxsci/kfy291",
  "pmc": "PMC6390653"
 },
 {
  "pmid": "31359052",
  "title": "Comparison of Zebrafish Larvae and hiPSC Cardiomyocytes for Predicting Drug-Induced Cardiotoxicity in Humans.",
  "author1": "Dyballa",
  "nAuthors": 9,
  "journal": "Toxicol Sci",
  "year": 2019,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "mt",
   "cv"
  ],
  "marks": [
   "hr",
   "avb",
   "co",
   "vasc"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "92 种药物筛查显示斑马鱼仔鱼预测人体心脏毒性的准确性优于 hiPSC 心肌细胞，与犬类临床前模型相当。",
  "doi": "10.1093/toxsci/kfz165",
  "pmc": "PMC6760275"
 },
 {
  "pmid": "29282212",
  "title": "MUSCLEMOTION: A Versatile Open Software Tool to Quantify Cardiomyocyte and Cardiac Muscle Contraction In Vitro and In Vivo.",
  "author1": "Sala",
  "nAuthors": 27,
  "journal": "Circ Res",
  "year": 2018,
  "review": true,
  "organs": [
   "he"
  ],
  "dirs": [
   "mt",
   "cv"
  ],
  "marks": [
   "co"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "MUSCLEMOTION 由高速视频自动量化收缩，适用于心肌细胞、心肌薄层、类器官与斑马鱼心脏，结果与光流法、边缘检测几乎一致，可用于心律失常与药效评价。",
  "doi": "10.1161/CIRCRESAHA.117.312067",
  "pmc": "PMC5805275",
  "key": true
 },
 {
  "pmid": "29758382",
  "title": "Effects of exposure to BPF on development and sexual differentiation during early life stages of zebrafish (Danio rerio).",
  "author1": "Yang",
  "nAuthors": 5,
  "journal": "Comp Biochem Physiol C Toxicol Pharmacol",
  "year": 2018,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "dv",
   "rp"
  ],
  "marks": [
   "morph",
   "sexratio",
   "steroid"
  ],
  "polClass": "edc",
  "polName": "双酚F",
  "stage": [
   "lar",
   "sex",
   "juv"
  ],
  "zh": "双酚F 在 1–1000 µg/L 下致胚胎畸形并使性比偏雌、出现卵睾，睾酮下降、雌二醇升高，dmrt1、sox9a、amh 受抑而 foxl2 与 cyp19a1a 上调。",
  "doi": "10.1016/j.cbpc.2018.05.004"
 },
 {
  "pmid": "29022183",
  "title": "In search of a comprehensible set of endpoints for the routine monitoring of neurotoxicity in vertebrates: sensory perception and nerve transmission in zebrafish (Danio rerio) embryos.",
  "author1": "Stengel",
  "nAuthors": 3,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2018,
  "review": false,
  "organs": [
   "ll",
   "ey"
  ],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "ache",
   "hair"
  ],
  "polClass": "mix",
  "polName": "敌敌畏、氯氰菊酯、全氟辛烷磺酸",
  "stage": [
   "hat",
   "lar"
  ],
  "zh": "建立视觉、嗅觉、侧线与 AChE 的神经毒性终点组合，9 种化合物中 5 种阳性：敌敌畏与氯氰菊酯抑制 AChE，敌敌畏、2,4-二氯酚、壬基酚及 PFOS 致神经丘毛细胞退化。",
  "doi": "10.1007/s11356-017-0399-y",
  "key": true
 },
 {
  "pmid": "29397701",
  "title": "Developmental Effects and Estrogenicity of Bisphenol A Alternatives in a Zebrafish Embryo Model.",
  "author1": "Mu",
  "nAuthors": 8,
  "journal": "Environ Sci Technol",
  "year": 2018,
  "review": false,
  "organs": [],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "surv",
   "hr",
   "morph",
   "vtg",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚AF、双酚A、双酚F",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "双酚 AF 致死与雌激素活性最强，其次双酚 A、双酚 F，双酚 S 最弱；BPAF/BPF 降低心率、抑制孵化并上调 esr 与 vtg1。",
  "doi": "10.1021/acs.est.7b06255"
 },
 {
  "pmid": "29926976",
  "title": "Is fish embryo test (FET) according to OECD 236 sensible enough for delivering quality data for effluent risk assessment?",
  "author1": "Stelzer",
  "nAuthors": 6,
  "journal": "Environ Toxicol Chem",
  "year": 2018,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "surv",
   "morph",
   "edema"
  ],
  "polClass": "mix",
  "polName": "医院污水",
  "stage": [
   "zyg",
   "hat",
   "lar",
   "juv"
  ],
  "zh": "同一医院出水的三种标准试验敏感性为仔鱼>幼鱼≥胚胎，OECD 236 加不孵化与心包水肿等亚致死指标后敏感性提高 30% 以上。",
  "doi": "10.1002/etc.4215"
 },
 {
  "pmid": "29896702",
  "title": "Analysis of Lethality and Malformations During Zebrafish (Danio rerio) Development.",
  "author1": "Raghunath",
  "nAuthors": 2,
  "journal": "Methods Mol Biol",
  "year": 2018,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "dv"
  ],
  "marks": [
   "morph",
   "surv"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "提出二项式与相对形态学两套畸形评分系统，据此可在斑马鱼胚胎与仔鱼中判定受试物致畸性并评估其致畸潜力。",
  "doi": "10.1007/978-1-4939-7883-0_18"
 },
 {
  "pmid": "28963892",
  "title": "Unsuitable use of DMSO for assessing behavioral endpoints in aquatic model species.",
  "author1": "Huang",
  "nAuthors": 6,
  "journal": "Sci Total Environ",
  "year": 2018,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "二甲基亚砜",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "DMSO 在 1% 以下不致死亡，却使斑马鱼仔鱼运动距离与爆发运动显著下降，行为学试验须设溶剂对照并谨慎选择载体。",
  "doi": "10.1016/j.scitotenv.2017.09.260"
 },
 {
  "pmid": "28982082",
  "title": "Modification and quantification of in vivo EROD live-imaging with zebrafish (Danio rerio) embryos to detect both induction and inhibition of CYP1A.",
  "author1": "Kais",
  "nAuthors": 4,
  "journal": "Sci Total Environ",
  "year": 2018,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "ox"
  ],
  "marks": [
   "erod"
  ],
  "polClass": "op",
  "polName": "毒死蜱、β-萘黄酮",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "改进的活体 EROD 成像可同时检出 CYP1A 诱导与抑制，毒死蜱在 ≤EC10 即强抑制 CYP1A 并致水肿毒性。",
  "doi": "10.1016/j.scitotenv.2017.09.257"
 },
 {
  "pmid": "29202294",
  "title": "Comparative live-imaging of in vivo EROD (ethoxyresorufin-O-deethylase) induction in zebrafish (Danio rerio) and fathead minnow (Pimephales promelas) embryos after exposure to PAHs and river sediment extracts.",
  "author1": "Boehler",
  "nAuthors": 4,
  "journal": "Sci Total Environ",
  "year": 2018,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "ox"
  ],
  "marks": [
   "erod"
  ],
  "polClass": "pah",
  "polName": "苯并[a]芘、苯并[k]荧蒽",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "斑马鱼胚胎活体 EROD 信号强于黑头呆鱼，河流沉积物提取物在两物种均诱导更强 EROD，可用于生物监测。",
  "doi": "10.1016/j.scitotenv.2017.11.101"
 },
 {
  "pmid": "29203887",
  "title": "Age-dependent increase of oxidative stress regulates microRNA-29 family preserving cardiac health.",
  "author1": "Heid",
  "nAuthors": 19,
  "journal": "Sci Rep",
  "year": 2017,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "ag",
   "cv"
  ],
  "marks": [
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "衰老青鳉鱼心脏 miR-29 家族上调伴胶原与 5mC 下降；斑马鱼敲低 miR-29 引起心脏形态功能改变并激活缺氧通路。",
  "doi": "10.1038/s41598-017-16829-w",
  "pmc": "PMC5715159"
 },
 {
  "pmid": "27002526",
  "title": "Development and recovery of histopathological alterations in the gonads of zebrafish (Danio rerio) after single and combined exposure to endocrine disruptors (17α-ethinylestradiol and fadrozole).",
  "author1": "Luzio",
  "nAuthors": 5,
  "journal": "Aquat Toxicol",
  "year": 2016,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "hist",
   "sexratio",
   "len"
  ],
  "polClass": "edc",
  "polName": "炔雌醇、法屈唑",
  "stage": [
   "zyg",
   "lar",
   "juv",
   "adu"
  ],
  "zh": "法屈唑单用或与 EE2 联合永久扰乱性腺分化，致雄性化、间性与生精管扩张；EE2 单独所致改变在净化期部分可逆。",
  "doi": "10.1016/j.aquatox.2016.03.014"
 },
 {
  "pmid": "27482813",
  "title": "Telomeres in aging and disease: lessons from zebrafish.",
  "author1": "Carneiro",
  "nAuthors": 3,
  "journal": "Dis Model Mech",
  "year": 2016,
  "review": true,
  "organs": [],
  "dirs": [
   "ag"
  ],
  "marks": [
   "telo"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "斑马鱼端粒长度与人类相近并随龄缩短，是研究端粒损耗驱动细胞衰老、器官功能障碍与疾病的互补模型。",
  "doi": "10.1242/dmm.025130",
  "pmc": "PMC4958310"
 },
 {
  "pmid": "27496563",
  "title": "Chronic perfluorooctanesulphonic acid (PFOS) exposure produces estrogenic effects in zebrafish.",
  "author1": "Chen",
  "nAuthors": 10,
  "journal": "Environ Pollut",
  "year": 2016,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "steroid",
   "gene",
   "hist"
  ],
  "polClass": "emerg",
  "polName": "全氟辛烷磺酸",
  "stage": [
   "lar",
   "sex",
   "adu"
  ],
  "zh": "250 µg/L 全氟辛烷磺酸暴露 5 个月使性分化期雌二醇升高、睾酮下降，成鱼精巢 esr1 显著上调，性腺组织与超微结构改变，可解释其雌性化与精子质量下降。",
  "doi": "10.1016/j.envpol.2016.07.064"
 },
 {
  "pmid": "26950772",
  "title": "Uptake and Accumulation of Polystyrene Microplastics in Zebrafish (Danio rerio) and Toxic Effects in Liver.",
  "author1": "Lu",
  "nAuthors": 8,
  "journal": "Environ Sci Technol",
  "year": 2016,
  "review": false,
  "organs": [
   "gi",
   "li",
   "gu"
  ],
  "dirs": [
   "ox"
  ],
  "marks": [
   "body",
   "hist",
   "enz"
  ],
  "polClass": "plas",
  "polName": "聚苯乙烯",
  "stage": [
   "adu"
  ],
  "zh": "5 µm 聚苯乙烯微塑料 7 天暴露后蓄积于鳃、肝与肠，5 µm 与 70 nm 颗粒均致肝炎症与脂质蓄积，并升高 SOD、CAT 活性。",
  "doi": "10.1021/acs.est.6b00183",
  "key": true
 },
 {
  "pmid": "27525560",
  "title": "Glyphosate induces cardiovascular toxicity in Danio rerio.",
  "author1": "Roy",
  "nAuthors": 4,
  "journal": "Environ Toxicol Pharmacol",
  "year": 2016,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "dv"
  ],
  "marks": [
   "hr",
   "vasc",
   "morph"
  ],
  "polClass": "pest",
  "polName": "草甘膦",
  "stage": [
   "gas",
   "seg",
   "lar"
  ],
  "zh": "从原肠期起 50 µg/mL 草甘膦浸泡致胚胎心房心室结构异常、心脏环化不规则与内脏反转，48 h 心率下降，体血管受影响，早期 mef2ca 表达改变。",
  "doi": "10.1016/j.etap.2016.08.010"
 },
 {
  "pmid": "27047331",
  "title": "Estrogenic Effects of Several BPA Analogs in the Developing Zebrafish Brain.",
  "author1": "Cano-Nicolau",
  "nAuthors": 6,
  "journal": "Front Neurosci",
  "year": 2016,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "ed",
   "mt"
  ],
  "marks": [
   "arom",
   "gene"
  ],
  "polClass": "edc",
  "polName": "双酚S、双酚F、双酚AF",
  "stage": [
   "lar"
  ],
  "zh": "BPS、BPF 与 BPAF 同 BPA 一样经 zfERα 激活 7 dpf 仔鱼脑 cyp19a1b 表达，双酚AP 则无雌激素活性。",
  "doi": "10.3389/fnins.2016.00112",
  "pmc": "PMC4805609"
 },
 {
  "pmid": "26723187",
  "title": "Thyroid endocrine disruption and external body morphology of Zebrafish.",
  "author1": "Sharma",
  "nAuthors": 3,
  "journal": "Gen Comp Endocrinol",
  "year": 2016,
  "review": false,
  "organs": [
   "th"
  ],
  "dirs": [
   "ed",
   "dv"
  ],
  "marks": [
   "morph",
   "len",
   "hist"
  ],
  "polClass": "edc",
  "polName": "甲巯咪唑、甲状腺素",
  "stage": [
   "lar",
   "juv"
  ],
  "zh": "甲巯咪唑致甲减使 45 dpf 斑马鱼胸鳍与腹鳍后移、胸鳍变短及体重体长下降，补 T4 可挽救鳍位置但不能恢复体长。",
  "doi": "10.1016/j.ygcen.2015.12.023"
 },
 {
  "pmid": "27255368",
  "title": "Effects of thyroid endocrine manipulation on sex-related gene expression and population sex ratios in Zebrafish.",
  "author1": "Sharma",
  "nAuthors": 4,
  "journal": "Gen Comp Endocrinol",
  "year": 2016,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "gene",
   "hist"
  ],
  "polClass": "edc",
  "polName": "甲状腺素、甲巯咪唑",
  "stage": [
   "lar",
   "juv"
  ],
  "zh": "甲状腺素处理使群体偏雄并伴 amh、ar 升高、cyp19a1a 下调，甲巯咪唑增加卵巢个体比例但雌化不持久。",
  "doi": "10.1016/j.ygcen.2016.05.028"
 },
 {
  "pmid": "26026258",
  "title": "A high throughput passive dosing format for the Fish Embryo Acute Toxicity test.",
  "author1": "Vergauwen",
  "nAuthors": 8,
  "journal": "Chemosphere",
  "year": 2015,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "conc",
   "body",
   "surv",
   "swim"
  ],
  "polClass": "pah",
  "polName": "菲",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "硅胶 O 形环被动给药的 120 hpf 鱼胚胎试验维持菲的线性暴露浓度，LC50 310 µg/L，游泳下降并非继发于鳔充气障碍。",
  "doi": "10.1016/j.chemosphere.2015.05.041",
  "key": true
 },
 {
  "pmid": "26518561",
  "title": "DNA methylation of genes of the main components of the telomerase complex in Danio rerio.",
  "author1": "Belova",
  "nAuthors": 6,
  "journal": "Dokl Biochem Biophys",
  "year": 2015,
  "review": false,
  "organs": [
   "br"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "meth"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "斑马鱼 tert 调控区终生完全甲基化、编码区始终非甲基化，terc 编码区下游甲基化水平随年龄改变且各组织间不一致。",
  "doi": "10.1134/S1607672915050166"
 },
 {
  "pmid": "25163568",
  "title": "Prochloraz causes irreversible masculinization of zebrafish (Danio rerio).",
  "author1": "Baumann",
  "nAuthors": 6,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2015,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "hist"
  ],
  "polClass": "pest",
  "polName": "咪鲜胺",
  "stage": [
   "lar",
   "juv",
   "adu"
  ],
  "zh": "10–300 µg/L 咪鲜胺暴露至 60 dph 使性比偏雄并出现间性，净化 40 天后间性消失但雄性化性比仍存，提示不可逆。",
  "doi": "10.1007/s11356-014-3486-3"
 },
 {
  "pmid": "25532870",
  "title": "Zebrafish cardiotoxicity: the effects of CYP1A inhibition and AHR2 knockdown following exposure to weak aryl hydrocarbon receptor agonists.",
  "author1": "Brown",
  "nAuthors": 4,
  "journal": "Environ Sci Pollut Res Int",
  "year": 2015,
  "review": false,
  "organs": [
   "he"
  ],
  "dirs": [
   "cv",
   "ox"
  ],
  "marks": [
   "edema",
   "erod"
  ],
  "polClass": "pah",
  "polName": "菲、荧蒽、西维因",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "弱 AhR 激动剂单独暴露不致病，与 CYP1A 抑制剂荧蒽共暴露显著增加心包水肿，CYP1A 敲低可复制该效应。",
  "doi": "10.1007/s11356-014-3969-2",
  "pmc": "PMC4442063"
 },
 {
  "pmid": "26118430",
  "title": "Endocrine-disrupting effect of the ultraviolet filter benzophenone-3 in zebrafish, Danio rerio.",
  "author1": "Kinnberg",
  "nAuthors": 9,
  "journal": "Environ Toxicol Chem",
  "year": 2015,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "sexratio",
   "vtg"
  ],
  "polClass": "edc",
  "polName": "二苯酮-3",
  "stage": [
   "zyg",
   "lar",
   "sex",
   "adu"
  ],
  "zh": "191–388 µg/L 二苯酮-3 致斑马鱼性比偏雌、性腺成熟延迟，成鱼 268 µg/L 诱导卵黄蛋白原，符合内分泌干扰物定义。",
  "doi": "10.1002/etc.3129"
 },
 {
  "pmid": "24832558",
  "title": "Endocrine disruption effects of p,p'-DDE on juvenile zebrafish.",
  "author1": "Monteiro",
  "nAuthors": 10,
  "journal": "J Appl Toxicol",
  "year": 2015,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "ed",
   "rp"
  ],
  "marks": [
   "vtg",
   "hist",
   "sexratio"
  ],
  "polClass": "pest",
  "polName": "p,p'-DDE",
  "stage": [
   "juv",
   "sex"
  ],
  "zh": "性分化期 0.2 与 2.0 µg/L p,p'-DDE 使整体卵黄蛋白原升高、雌鱼成熟卵母细胞减少，性比与性腺指数无变化。",
  "doi": "10.1002/jat.3014"
 },
 {
  "pmid": "24874798",
  "title": "OECD validation study to assess intra- and inter-laboratory reproducibility of the zebrafish embryo toxicity test for acute aquatic toxicity testing.",
  "author1": "Busquet",
  "nAuthors": 27,
  "journal": "Regul Toxicol Pharmacol",
  "year": 2014,
  "review": false,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [
   "surv",
   "morph"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "zyg",
   "seg",
   "hat",
   "lar"
  ],
  "zh": "20 种化学品三实验室验证显示 ZFET 批内与批间 CV<30%，成为 OECD TG 236，可替代急性鱼毒试验用于法规评估。",
  "doi": "10.1016/j.yrtph.2014.05.018",
  "key": true
 },
 {
  "pmid": "23349637",
  "title": "Telomerase is required for zebrafish lifespan.",
  "author1": "Henriques",
  "nAuthors": 5,
  "journal": "PLoS Genet",
  "year": 2013,
  "review": false,
  "organs": [
   "gi"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "lifespan",
   "fec",
   "sabg",
   "gene"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "第一代 tert-/- 斑马鱼端粒缩短、早死，出现不育、胃肠萎缩与肌少症，伴增殖受损、DNA 损伤及 p53 依赖凋亡与衰老细胞累积。",
  "doi": "10.1371/journal.pgen.1003214",
  "pmc": "PMC3547866",
  "key": true
 },
 {
  "pmid": "20134420",
  "title": "Scototaxis as anxiety-like behavior in fish.",
  "author1": "Maximino",
  "nAuthors": 5,
  "journal": "Nat Protoc",
  "year": 2010,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "vmr"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "建立鱼类明暗偏好（scototaxis）焦虑模型：15 分钟内记录白/黑箱进入次数与时长，白区活动增强反映抗焦虑，黑区活动增强反映致焦虑，单次测试约 20 分钟。",
  "doi": "10.1038/nprot.2009.225",
  "key": true
 },
 {
  "pmid": "19268529",
  "title": "Zebrafish provide a sensitive model of persisting neurobehavioral effects of developmental chlorpyrifos exposure: comparison with nicotine and pilocarpine effects and relationship to dopamine deficits.",
  "author1": "Eddins",
  "nAuthors": 5,
  "journal": "Neurotoxicol Teratol",
  "year": 2010,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "dv"
  ],
  "marks": [
   "startle",
   "ntx"
  ],
  "polClass": "op",
  "polName": "毒死蜱",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "发育期毒死蜱暴露使成鱼惊吓反应增强且恢复延迟，仔鱼多巴胺与 5-HT 下降，仅多巴胺降低持续至成鱼。",
  "doi": "10.1016/j.ntt.2009.02.005",
  "pmc": "PMC2885770",
  "key": true
 },
 {
  "pmid": "20211722",
  "title": "Locomotor activity in zebrafish embryos: a new method to assess developmental neurotoxicity.",
  "author1": "Selderslaghs",
  "nAuthors": 4,
  "journal": "Neurotoxicol Teratol",
  "year": 2010,
  "review": false,
  "organs": [],
  "dirs": [
   "mt",
   "bh"
  ],
  "marks": [
   "coil"
  ],
  "polClass": "op",
  "polName": "毒死蜱",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "24–26 hpf 胚胎自发卷曲频率与时长在 0.039–10 mg/L 毒死蜱下浓度依赖增加，96 hpf 仔鱼运动终点最稳定可重复。",
  "doi": "10.1016/j.ntt.2010.03.002",
  "key": true
 },
 {
  "pmid": "16459035",
  "title": "Lateral line hair cell maturation is a determinant of aminoglycoside susceptibility in zebrafish (Danio rerio).",
  "author1": "Santos",
  "nAuthors": 4,
  "journal": "Hear Res",
  "year": 2006,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "bh"
  ],
  "marks": [
   "hair"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "毛细胞成熟度而非机械转导活性启动决定氨基糖苷易感性，FM1-43 摄取与药物摄取能力均不能解释年龄差异。",
  "doi": "10.1016/j.heares.2005.12.009",
  "key": true
 },
 {
  "pmid": "15953964",
  "title": "Towards an alternative for the acute fish LC(50) test in chemical assessment: the fish embryo toxicity test goes multi-species -- an update.",
  "author1": "Braunbeck",
  "nAuthors": 8,
  "journal": "ALTEX",
  "year": 2005,
  "review": true,
  "organs": [],
  "dirs": [
   "mt"
  ],
  "marks": [],
  "polClass": "none",
  "polName": "—",
  "stage": [],
  "zh": "鱼类胚胎试验协议可由斑马鱼推广至青鳉与黑头呆鱼，胚胎与急性鱼试验 LC50 相关性可靠但预测区间偏宽，绒毛膜屏障随化合物亲脂性增强。",
  "key": true
 },
 {
  "pmid": "15247079",
  "title": "Functional aging and gradual senescence in zebrafish.",
  "author1": "Kishi",
  "nAuthors": 1,
  "journal": "Ann N Y Acad Sci",
  "year": 2004,
  "review": true,
  "organs": [
   "mu"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [
   "sabg",
   "telo"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "衰老斑马鱼皮肤出现 SA-β-gal 活性、肌肉氧化蛋白累积，但无脂褐素、心肌细胞持续增殖且体细胞端粒酶活性高，衰老非常缓慢。",
  "doi": "10.1196/annals.1297.097"
 },
 {
  "pmid": "12943374",
  "title": "Neomycin-induced hair cell death and rapid regeneration in the lateral line of zebrafish (Danio rerio).",
  "author1": "Harris",
  "nAuthors": 6,
  "journal": "J Assoc Res Otolaryngol",
  "year": 2003,
  "review": false,
  "organs": [
   "ll"
  ],
  "dirs": [
   "bh",
   "mt"
  ],
  "marks": [
   "hair"
  ],
  "polClass": "none",
  "polName": "—",
  "stage": [
   "lar"
  ],
  "zh": "500 µM 新霉素 1 小时即清除全部神经丘 DASPEI 标记毛细胞，12–24 h 后支持细胞增殖并再生毛细胞，建立标准化制备。",
  "doi": "10.1007/s10162-002-3022-x",
  "pmc": "PMC3202713",
  "key": true
 },
 {
  "pmid": "42998651",
  "title": "Physicochemical determinants of zinc oxide nanoparticle developmental toxicity in zebrafish (Danio rerio): A systematic review and structured quantitative synthesis.",
  "author1": "Boran",
  "nAuthors": 1,
  "journal": "Aquat Toxicol",
  "year": 2026,
  "review": true,
  "organs": [],
  "dirs": [
   "dv",
   "bh",
   "ox"
  ],
  "marks": [],
  "polClass": "np",
  "polName": "纳米材料",
  "gen": "",
  "stage": [
   "hat",
   "lar"
  ],
  "zh": "【自动收录·待复核】Zinc oxide nanoparticles (ZnO NPs) are widely used, but their developmental toxicity varies substantially across experim…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.aquatox.2026.108078"
 },
 {
  "pmid": "42992772",
  "title": "EGFP Reporter Assay in Transgenic Zebrafish Embryos for Assessing Formulation-Dependent dsRNA Bioavailability.",
  "author1": "Dey",
  "nAuthors": 9,
  "journal": "J Vis Exp",
  "year": 2026,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "dv",
   "bh",
   "ox"
  ],
  "marks": [],
  "polClass": "np",
  "polName": "纳米材料",
  "gen": "",
  "stage": [],
  "zh": "【自动收录·待复核】RNA interference (RNAi) is a sequence-specific gene silencing mechanism increasingly exploited for the development of sp…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.3791/74036"
 },
 {
  "pmid": "42989638",
  "title": "pH/laccase dual-responsive sodium boscalid@lignosulfonate/ε-polylysine/Fe microcapsules for controlled pesticide release with enhanced efficacy and biosafety.",
  "author1": "Jia",
  "nAuthors": 6,
  "journal": "Pest Manag Sci",
  "year": 2026,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [],
  "polClass": "pest",
  "polName": "农药",
  "gen": "",
  "stage": [],
  "zh": "【自动收录·待复核】Environmentally responsive pesticide delivery systems have gained significant attention for their ability to enhance pes…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1002/ps.71446"
 },
 {
  "pmid": "42982382",
  "title": "Developmental toxicity induced by waterborne Mancozeb exposure in zebrafish larvae: Morphological, cardiac and oxidative alterations.",
  "author1": "Dall Agnol",
  "nAuthors": 7,
  "journal": "Environ Toxicol Pharmacol",
  "year": 2026,
  "review": false,
  "organs": [
   "he",
   "th"
  ],
  "dirs": [
   "dv",
   "bh",
   "cv"
  ],
  "marks": [],
  "polClass": "pest",
  "polName": "农药",
  "gen": "",
  "stage": [
   "zyg",
   "hat",
   "lar"
  ],
  "zh": "【自动收录·待复核】Mancozeb (MZ) is a widely used dithiocarbamate fungicide associated with environmental and developmental toxicity.",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.etap.2026.105225"
 },
 {
  "pmid": "42981994",
  "title": "Sweet but toxic? An ecotoxicity assessment of the artificial sweetener sucralose using transcriptomics.",
  "author1": "Loll",
  "nAuthors": 6,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "bh",
   "ox",
   "mt"
  ],
  "marks": [],
  "polClass": "emerg",
  "polName": "新污染物",
  "gen": "",
  "stage": [],
  "zh": "【自动收录·待复核】Sucralose is a widely used artificial sweetener that is highly persistent and mobile in aquatic environments.",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.ecoenv.2026.121012"
 },
 {
  "pmid": "42978646",
  "title": "Sub-chronic toxicity of polystyrene microplastics in Danio rerio: evidence from hematological, biochemical, oxidative stress, and histopathological biomarkers.",
  "author1": "Devapriya",
  "nAuthors": 5,
  "journal": "Front Toxicol",
  "year": 2026,
  "review": false,
  "organs": [
   "br",
   "gi",
   "gu"
  ],
  "dirs": [
   "bh",
   "ox"
  ],
  "marks": [],
  "polClass": "plas",
  "polName": "微塑料",
  "gen": "",
  "stage": [],
  "zh": "【自动收录·待复核】Polystyrene microplastics (PS-MPs) have emerged as widespread aquatic contaminants with the potential to induce multiple…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.3389/ftox.2026.1960709",
  "pmc": "PMC13727540"
 },
 {
  "pmid": "42975506",
  "title": "Early Life Stage Exposure to Environmentally Relevant Concentrations of TCPP Induces Multigenerational Reproductive Toxicity in Estuarine Fish: A Study Based on Whole-Genome Methylation and Steroidogenesis Pathway.",
  "author1": "Ren",
  "nAuthors": 11,
  "journal": "Environ Sci Technol",
  "year": 2026,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "dv",
   "ed",
   "rp"
  ],
  "marks": [],
  "polClass": "edc",
  "polName": "内分泌干扰物",
  "gen": "F1",
  "stage": [
   "hat",
   "lar"
  ],
  "zh": "【自动收录·待复核】Tris (1-chloro-2-propyl) phosphate (TCPP) is ubiquitous in estuarine environments.",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1021/acs.est.6c07960"
 },
 {
  "pmid": "42973610",
  "title": "The teleost inflammasome as a biosensor in developmental toxicology.",
  "author1": "Gusso",
  "nAuthors": 5,
  "journal": "Front Toxicol",
  "year": 2026,
  "review": true,
  "organs": [],
  "dirs": [
   "dv",
   "ox",
   "mt"
  ],
  "marks": [],
  "polClass": "pest",
  "polName": "农药",
  "gen": "",
  "stage": [
   "cle"
  ],
  "zh": "【自动收录·待复核】Standard environmental risk assessment frameworks, such as the OECD 236 Fish Embryo Acute Toxicity (FET) test, rely heav…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.3389/ftox.2026.1952628",
  "pmc": "PMC13724541"
 },
 {
  "pmid": "42971457",
  "title": "Integrated Assessment of Cyanobacterial Blooms, Pesticides, and Reproductive Toxicity in a Eutrophic Reservoir.",
  "author1": "Moraes",
  "nAuthors": 8,
  "journal": "Environ Pollut",
  "year": 2026,
  "review": false,
  "organs": [
   "go"
  ],
  "dirs": [
   "dv",
   "ed",
   "rp"
  ],
  "marks": [],
  "polClass": "pest",
  "polName": "农药",
  "gen": "",
  "stage": [],
  "zh": "【自动收录·待复核】The Barra Bonita Reservoir (São Paulo, Brazil) is a eutrophic system subject to intense anthropogenic pressures, includi…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.envpol.2026.129426"
 },
 {
  "pmid": "42967438",
  "title": "Whole-effluent toxicity of hospital and pharmaceutical manufacturing discharges: A systematic review.",
  "author1": "Ramdy",
  "nAuthors": 5,
  "journal": "Aquat Toxicol",
  "year": 2026,
  "review": false,
  "organs": [
   "li",
   "br"
  ],
  "dirs": [
   "dv",
   "bh",
   "ox"
  ],
  "marks": [],
  "polClass": "emerg",
  "polName": "新污染物",
  "gen": "",
  "stage": [],
  "zh": "【自动收录·待复核】Hospital and pharmaceutical manufacturing facilities discharge complex effluents containing active pharmaceutical ingred…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.aquatox.2026.108065"
 },
 {
  "pmid": "42966525",
  "title": "PPAR/RXR dysregulation involved in hepatic lipid accumulation in HFPO-TeA-exposed zebrafish: Insights from multi-omics and spatial imaging.",
  "author1": "Shi",
  "nAuthors": 6,
  "journal": "Environ Res",
  "year": 2026,
  "review": false,
  "organs": [
   "li",
   "ey"
  ],
  "dirs": [
   "ox",
   "ag",
   "mt"
  ],
  "marks": [],
  "polClass": "emerg",
  "polName": "新污染物",
  "gen": "",
  "stage": [
   "adu",
   "old"
  ],
  "zh": "【自动收录·待复核】Perfluorooctanoic acid (PFOA) is known to induce hepatotoxicity in wildlife and humans.",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.envres.2026.126059"
 },
 {
  "pmid": "42966290",
  "title": "Life stage-specific endocrine disruption by Tris(2-ethylhexyl) trimellitate (TOTM) in zebrafish: Thyroid-neurobehavioral effects and metabolic-reproductive alterations.",
  "author1": "Ihn",
  "nAuthors": 7,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2026,
  "review": false,
  "organs": [
   "li",
   "br",
   "th"
  ],
  "dirs": [
   "dv",
   "bh",
   "ed"
  ],
  "marks": [],
  "polClass": "edc",
  "polName": "内分泌干扰物",
  "gen": "",
  "stage": [
   "zyg",
   "lar",
   "adu"
  ],
  "zh": "【自动收录·待复核】Tris(2-ethylhexyl) trimellitate (TOTM) is a widely used plasticizer alternative to bis(2-ethylhexyl) phthalate in medica…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.ecoenv.2026.120988"
 },
 {
  "pmid": "42966287",
  "title": "Co-exposure to octocrylene and polystyrene nanoplastics induces neuro- and reproductive toxicity in zebrafish: Association with circadian rhythm and HPG axis disruption.",
  "author1": "Zhou",
  "nAuthors": 4,
  "journal": "Ecotoxicol Environ Saf",
  "year": 2026,
  "review": false,
  "organs": [
   "br",
   "go"
  ],
  "dirs": [
   "dv",
   "bh",
   "ed"
  ],
  "marks": [],
  "polClass": "plas",
  "polName": "微塑料",
  "gen": "",
  "stage": [
   "adu"
  ],
  "zh": "【自动收录·待复核】Octocrylene (OC) is a widely used ultraviolet filter frequently detected in aquatic environments.",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.ecoenv.2026.120987"
 },
 {
  "pmid": "42959891",
  "title": "Transcriptomic data of larval zebrafish exposed to environmentally relevant levels of uranyl nitrate and sodium arsenite.",
  "author1": "Kalaniopio",
  "nAuthors": 3,
  "journal": "Data Brief",
  "year": 2026,
  "review": false,
  "organs": [],
  "dirs": [
   "dv",
   "rp",
   "ox"
  ],
  "marks": [],
  "polClass": "metal",
  "polName": "重金属",
  "gen": "",
  "stage": [
   "zyg",
   "lar"
  ],
  "zh": "【自动收录·待复核】Uranium (U) and arsenic (As) are both ubiquitous contaminants in the American southwest, posing risks to humans, animals…",
  "auto": true,
  "added": "2026-11-09",
  "doi": "10.1016/j.dib.2026.113352",
  "pmc": "PMC13718654"
 },
 {
  "pmid": "42965494",
  "title": "Selenium Alters the Tissue Distribution of Inorganic but Not Methylmercury in Zebrafish Larvae.",
  "author1": "Dolgova",
  "nAuthors": 11,
  "journal": "Metallomics",
  "year": 2026,
  "review": false,
  "organs": [
   "li"
  ],
  "dirs": [
   "ag"
  ],
  "marks": [],
  "polClass": "metal",
  "polName": "重金属",
  "gen": "",
  "stage": [
   "lar",
   "old"
  ],
  "zh": "【自动收录·待复核】Mercury toxicity is strongly influenced by its chemical speciation, with interactions between mercury and selenium speci…",
  "auto": true,
  "added": "2026-11-10",
  "doi": "10.1093/mtomcs/mfag032"
 }
];
