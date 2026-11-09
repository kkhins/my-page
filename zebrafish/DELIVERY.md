# 斑马鱼生态毒理图谱 · 交付文档（供外部代码审查）

> 生成时间：2026-11-09 · 在线：https://kkhins.github.io/my-page/zebrafish/
> 本文件是给审查者（Claude）的入口。源码分片在 `_review/`，完整目录见文末「打包内容」。

---

## 1. 这是什么

一个**纯静态、可离线双击打开**的斑马鱼（*Danio rerio*）生态毒理知识图谱。三栏布局：

- **左栏**：8 个一级导航（简介、饲养与暴露、器官解剖 11、研究方向 8、生物标志物 48、生命周期 12、最新发表、我的书单），手风琴式。
- **中栏**：SVG 解剖图三视图（侧视 / 躯干横截面 / 胚胎 48 hpf）+ 12 阶段生命周期时间轴。
- **右栏**：当前选中节点的详情（描述、统计、关联标志物/基因、文献列表、筛选与排序）。

数据是 **430 篇**真实 PubMed 文献，每篇带依据摘要写成的中文发现陈述（`zh`）、器官/方向/标志物/阶段标签、污染物大类、DOI（逐条验证可解析）。

## 2. 硬约束（审查时请以此为准）

1. 纯静态：`file://` 双击可用，**不发起任何网络请求**（无 fetch/XHR/WebSocket/外部字体/CDN）。
2. 无第三方库、无构建步骤、无 ES module（普通 `<script>` 顺序加载）。
3. 数据与页面分离：`data_struct.js`、`data_papers.js` 只声明全局对象。
4. 结构数据 `data_struct.js` 来自任务书第 3 节**原文照抄**，唯一例外见 §7.1（追加了第 11 个器官 `mu`）。
5. 统计数字一律由 `PAPERS`/`STRUCT` 运行时计算，代码里没有写死的计数。
6. localStorage 键固定为 `zfatlas-read-status`、`zfatlas-notes`。

## 3. 文件地图

| 文件 | 行数 | 大小 | 职责 | 关键入口 |
| --- | --- | --- | --- | --- |
| `index.html` | 539 | 37 KB | DOM 骨架 + 全部 CSS（无内联脚本、无外部资源） | `.app` 三栏、`#anatomyHost`、`#detail`、`#nav` |
| `data_struct.js` | 304 | 36 KB | `window.STRUCT = {organs, directions, marks, stages, pages}` | 11 器官 / 8 方向 / 48 标志物 / 12 阶段 |
| `data_papers.js` | 12,164 | 249 KB | `window.PAPERS = [...]`，430 条 | 字段见 §4.2 |
| `anatomy.js` | 969 | 50 KB | 三视图 SVG，`window.Anatomy` | `init/setView/getView/setLabels/setGhost/selectOrgan/setStage` |
| `app.js` | 1,838 | 83 KB | 导航、路由、筛选、搜索、渲染、localStorage | IIFE，`boot()` |
| `README.md` | 82 | 4 KB | 面向用户的说明与自检清单 | — |
| `anatomy-preview.html` | — | 11 KB | 解剖图独立自测页（非交付文件） | — |
| `tools/*.py` | — | 40 KB | 数据管线（抓取、结构提取、合并、DOI 验证、自检） | 见 §5 |

## 4. 数据结构

### 4.1 `window.STRUCT`

```js
{
  organs:    [{ id, name, en, color, desc, genes[], marks[], note, dirs[] }, ...11],
  directions:[{ id, name, short, en, desc, focus, organs[], marks[], pols[], papers? }, ...8],
  marks:     [{ id, name, cat, unit, organ, desc }, ...48],
  stages:    [{ id, name, hpf, dpf, desc, organs[], note }, ...12],
  pages:     { intro: {...}, culture: {...} }
}
```

器官 id：`li` 肝、`he` 心脏、`br` 脑与中枢神经、`gi` 鳃、`gu` 肠、`go` 性腺、`ki` 肾、`ll` 侧线与内耳毛细胞、`ey` 眼与视网膜、`th` 甲状腺、`mu` 肌肉。
方向 id：`dv` 发育毒性、`bh` 神经行为、`cv` 心血管、`ed` 内分泌干扰、`rp` 生殖与跨代、`ox` 氧化应激与解毒、`ag` 衰老、`mt` 方法与标准。

### 4.2 `window.PAPERS[i]`

```js
{
  pmid: "29022183",          // 必填，全部来自 PubMed
  title: "...",              // 去 HTML 标签后的标题
  author1: "Lu",             // 第一作者姓
  nAuthors: 5,
  journal: "Environ Sci Technol",
  year: 2016,
  doi: "10.1021/acs.est.6b...",  // 可选；唯一缺失是 15953964
  pmc: "PMC...",             // 可选
  review: false,
  organs: ["gu","li","gi"],  // 0–3 个，146 篇为空（行为/方法学/综述）
  dirs: ["ox","dv"],         // 1–3 个，dirs[0] 是主方向（配额按它算）
  marks: ["erod","gsh","hist"], // 0–5 个
  polClass: "plas",          // op|pest|metal|plas|np|pah|emerg|edc|mix|none
  polName: "聚苯乙烯",
  gen: "F2",                 // 可选：F1|F2|F3+
  stage: ["lar","adu"],      // 0–4 个
  zh: "5 μm 聚苯乙烯微塑料 7 天暴露后蓄积于鳃、肝与肠……", // 0–60 字，依摘要写发现
  key: true                  // 可选，16 篇
}
```

## 5. 数据管线（可复现）

```
tools/fetch_pubmed.py     36 条检索式 → esearch（retmax 200, sort=relevance）→ efetch XML
  → work/search_results.json / work/pool.json / work/candidates.json（695 篇去重候选）
tools/split_annot.py      切 9 批 work/annot/input_01..09.json（每批 78/71 篇，摘要截 2400 字）
   ── 9 个并行标注 subagent，按 work/annot/RUBRIC.md 逐篇打分与打标 ──
  → work/annot/output_01..09.json（695 篇全覆盖，score≥2 共 595 篇）
tools/merge_annot.py      按主方向配额选 430 篇 → data_papers.js + work/selected.json
tools/verify_doi.py       并发 curl https://doi.org/<doi>，失败重试 → work/doi_check.json
tools/check_delivery.py   交付前校验（数量、PMID 来源、语法、禁用字符串、DOM 假设）
tools/build_struct.py     从任务书提取第 3 节结构数据（逐字校验 + 引号转义 + 追加 mu）
```

复现顺序：`fetch_pubmed.py` → 标注（人工/模型）→ `merge_annot.py` → `verify_doi.py` → `check_delivery.py`。

## 6. 关键实现说明

### 6.1 路由与状态（`app.js`）

- 无 hash 路由：`state.view = {type, id}`，`navTo(name)` 解析 `"organ:he"`、`"dir:dv"`、`"mark:erod"`、`"stage:hat"`、`"page:intro"`、`"latest"`、`"library"`。
- 单一 `state` 对象持有：当前视图、筛选条件（`q/pol/dir/stage/gen/review/read/sort`）、解剖图状态（`anatomyView/labels/ghost/stageId`）、搜索面板状态。
- `renderAll()` 全量重渲染（导航 + 中央标题 + 时间轴 + 右栏），无虚拟 DOM。
- 已读/笔记直接读写 localStorage，`toggleRead` 后局部刷新卡片与计数。

### 6.2 解剖图（`anatomy.js`）

- `init()` 一次建好三个 `<svg>` 并 append，`setView()` 只切 `display`（避免每次重建）。
- 统一 `viewBox="0 0 1000 600"`、`preserveAspectRatio="xMidYMid meet"`。
- 10+1 个器官用 `<g data-organ="id">`，颜色/名称全部经 `colorOf()/nameOf()` 从 `STRUCT` 取，不硬编码。
- 事件委托到根节点：`closest('[data-organ]')` → `onSelect(id)` / `onHover(id)`。
- 12 阶段 `STAGE_CFG` 控制各层可见度（受精卵→老年），胚胎视图随阶段变化（体节、卵黄囊、器官出现顺序）。
- 肌肉 `mu` 画在内脏下层（侧视肌节线、横截面肌肉环、胚胎体节块），不抢内脏点击。

### 6.3 搜索

- `⌘K`/`Ctrl+K` 聚焦 `#gsearch`；输入后匹配器官、方向、标志物、基因、污染物名、标题、`zh`。
- 结果分组（器官/方向/标志物/文献），键盘 ↑↓ 选择、Enter 跳转、Esc 关闭；命中词 `<mark>` 高亮。
- `buildSearchIndex()` 在启动时建一次索引。

## 7. 已知问题与刻意取舍（审查重点）

### 7.1 唯一超出「原文照抄」的改动：第 11 个器官 `mu`

任务书 3.1 只定义 10 个器官，但 `directions.bh.organs`、`directions.ag.organs` 及 `marks.telo/sabg/gross/regen` 共 6 处引用 `"mu"`。用户明确要求补肌肉后，`tools/build_struct.py` 在 organs 数组末尾追加：

```js
{ id:"mu", name:"肌肉", en:"Muscle (myotome)", color:"#9AB0C0",
  desc:"...", genes:["myod1","myog","mylz2","acta1a","desma","cav3"],
  marks:["hist","gene","regen","sabg","gross"], note:"..." }
```

其余结构数据文字未动（`build_struct.py` 有 verbatim check）。

### 7.2 卵裂期 0 篇、原肠期 1 篇

标注后 `stage` 计数：zyg 118、cle 0、bla 1、gas 1、seg 5、pha 39、hat 49、lar 278、juv 20、sex 9、adu 168、old 12。点「卵裂期」会显示空态。这是候选池本身的覆盖问题，不是渲染缺漏。

### 7.3 146 篇没有 `organs`

行为学、方法学、综述类文献没有器官归属，只出现在方向页、最新发表、书单。这是数据事实。

### 7.4 解剖图是示意性的

未画鳃耙/鳃血管网、胰/脾、内耳半规管、胚胎血管网与脑室；侧视图未画鳔；侧线神经丘为示意分布。按任务书「不确定宁可不画」处理，比例不作为解剖学依据。

### 7.5 `zh` 是 AI 辅助标注

9 批按 `work/annot/RUBRIC.md` 逐篇读摘要打标，`zh` 只依据摘要、不引入摘要外结论；20–60 字、必须陈述发现。存在个别漏标/过度标注的可能，建议先人工抽检 16 篇 `key`。

### 7.6 其他

- 2026 年的 33 篇是 online-first 记录，卷期页码可能变化。
- 「最新发表」按任务书取 `year` 降序前 30，不是滚动 7 天。
- 未做单元测试与 a11y 完整适配（见 §9）。
- 斑马鱼站不参与同仓库的每日自动更新（`zh` 是逐篇写的，规则脚本复现不了）。

## 8. 自检结果

`python3 tools/check_delivery.py` 当前输出：

```
PAPERS: 430
main dirs: dv70 bh65 cv42 ed52 rp52 ox65 ag34 mt50
key: 16  zhEmpty: 0  review: 24
noDoi: ['15953964']
STRUCT: {"o":11,"d":8,"m":47,"s":12,"p":["intro","culture"]}
PMID 来源校验: OK (430)
ERRORS: 0  WARNINGS: 0
```

DOI：429/429 返回 2xx/3xx（`work/doi_check.json`）。
JS 语法：`node --check` 四个文件全部通过。
DOM 回归：jsdom 全流程 0 error（8 导航、11 器官、8 方向、47 标志物、12 阶段、筛选、搜索、书单、已读持久化）。

## 9. 建议审查的重点（给 Claude）

按优先级：

1. **`app.js` 的正确性**：`renderAll` 全量重渲染在 430 篇、多次筛选切换下是否有状态残留（`state.expanded`、`state.openNote`、`libraryTab`）；`navTo` 与 `applyAnatomyState` 是否存在视图/解剖图不同步的分支。
2. **XSS/转义**：所有 `innerHTML` 拼接是否都过了 `esc()`（标题、`zh`、`polName`、笔记内容）。
3. **筛选与排序语义**：`applyFilters` 的 q 匹配范围、`relevance()` 打分、`sortPapers` 的稳定性（同分时的次序）。
4. **解剖图**：三视图 id 前缀是否可能冲突；`display:none` 视图里的标签坐标是否影响布局；事件委托在 SVG 上的兼容性。
5. **性能**：430 篇列表一次渲染的耗时；`buildSearchIndex` 的内存；是否有必要做增量渲染。
6. **可访问性**：键盘可达（导航手风琴、文献卡、筛选控件）、`aria-*`、焦点管理。
7. **数据一致性**：`data_papers.js` 中 `organs/dirs/marks/stage` 是否都在 `STRUCT` 定义内（`tools/check_delivery.py` 只做了部分校验）；`dirs[0]` 是否都应为主方向。
8. **localStorage 版本迁移**：键名固定、无 schema 版本，未来字段变化会静默丢弃。

## 10. 打包内容

`zebrafish-atlas-2026-11-09.zip`：

```
zebrafish-atlas/
├── index.html  data_struct.js  data_papers.js  anatomy.js  app.js
├── README.md  DELIVERY.md  CONTRACT.md  anatomy-preview.html
├── tools/        fetch_pubmed.py build_struct.py split_annot.py merge_annot.py verify_doi.py check_delivery.py
├── work/annot/   RUBRIC.md  input_01..09.json  output_01..09.json
├── work/         candidates.json pool.json selected.json doi_check.json selection_meta.json
└── _review/      01-frontend.md 02-anatomy.md 03-data-tools.md
```

`_selftest/`（约 9.7 MB 的解剖图渲染证据）与 `work/` 下其余中间文件未打包。

`_review/` 下另有三个便于直接粘贴给模型的源码分片（见下）：

| 分片 | 内容 | 约 tokens |
| --- | --- | --- |
| `01-frontend.md` | `index.html` + `app.js` 全文 | ~35k |
| `02-anatomy.md` | `anatomy.js` 全文 | ~15k |
| `03-data-tools.md` | `data_struct.js` 全文 + `data_papers.js` schema 与样例 + `tools/*.py` | ~25k |

审查建议顺序：先读本文件 → `01-frontend.md`（交互主体）→ `02-anatomy.md`（图形层）→ `03-data-tools.md`（数据与管线）。
