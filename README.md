# 线虫生态毒理图谱

一个纯静态的文献地图网页：左栏选主题，中间看解剖位置，右栏看证据。不依赖任何后端、不需要登录。

- 在线地址：https://kkhins.github.io/my-page/
- 数据文件：`data.js`（页面唯一的文献来源）
- 页面本体：`index.html`（含内联 three.js，可离线打开）

## 文件结构

```
index.html                     页面（含 3D 视图，内联 three.js）
data.js                        全部文献数据 window.__BIBLIO_DATA__
scripts/update_biblio.py       从 PubMed 抓新文献并写回 data.js
.github/workflows/update-biblio.yml   每天自动运行一次
```

## 自动更新

每天北京时间约 06:00，GitHub Actions 会运行 `scripts/update_biblio.py`：

1. 用 PubMed E-utilities 检索最近 8 天里与线虫 + 污染物相关的文献；
2. 按 PMID 去重，跳过已收录的；
3. 用关键词规则打标签（器官、研究方向、生物标志物、污染物类别）；
4. 追加到 `data.js` 的 `papers` 数组，`added` 记为当天日期；
5. 有变化就提交并推送，GitHub Pages 自动重新发布。

也可以在仓库的 Actions 页面手动点 "Run workflow" 立即跑一次。

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://127.0.0.1:8000/
```

## 手动更新

```bash
python3 scripts/update_biblio.py --dry-run   # 先看会抓什么
python3 scripts/update_biblio.py             # 正式写入
```

## 书签与笔记

「待读 / 已读」和笔记存在浏览器 localStorage（键 `biblio-read-status`、`biblio-notes`），
换浏览器或清缓存会丢，书单页提供导出 JSON 备份。

## 「最新发表」的规则

- 只显示 `added` 日期在最近 7 天内的条目，按天分组；
- 更早的文献不会消失，它们仍出现在器官、研究方向、生物标志物等视图里；
- 没有新文献时显示"最近 7 天里没有新入库的文献"。

## 斑马鱼毒理图谱（2026-11 新增）

- 在线地址：https://kkhins.github.io/my-page/zebrafish/
- 目录：`zebrafish/`，5 个纯静态文件（无 CDN、无框架，可离线双击打开）
- 数据：250 篇 PubMed 文献，8 个研究方向 / 11 个器官 / 47 个生物标志物 / 12 个生命阶段；DOI 逐条验证
- 说明：斑马鱼的文献标注是逐篇读摘要完成的（`zh` 为发现陈述），**不参与本仓库的每日自动更新**；`scripts/update_biblio.py` 只服务线虫站。斑马鱼数据更新需重跑本地 `zebrafish-atlas/tools/` 下的抓取与合并脚本后重新上传。
