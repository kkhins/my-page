/* 文献数据：全部来自 PubMed（NCBI E-utilities），字段由 tools/merge_annot.py 生成。
 * 共 250 篇；zh 依据摘要人工/模型标注，摘要无结果时为空字符串。
 * DOI 均经 https://doi.org/ 逐条解析验证（见 work/doi_check.json）。
 */
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
   "edema"
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
   "gene"
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
   "morph"
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
  "pmid": "33849304",
  "title": "Ageing genetic signature of hypersomatotropism.",
  "author1": "Elbialy",
  "nAuthors": 1,
  "journal": "Open Biol",
  "year": 2021,
  "review": false,
  "organs": [
   "li",
   "br",
   "mu"
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
   "surv"
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
 }
];
