/* 斑马鱼毒理图谱 · app.js
 * 职责：界面层——导航、筛选、全局搜索、右栏渲染、localStorage（已读/笔记）
 * 数据：data_struct.js → window.STRUCT；data_papers.js → window.PAPERS
 * 解剖图：anatomy.js → window.Anatomy（可选；缺失或初始化失败时舞台显示占位）
 * 约束：无网络请求（fetch/XHR）、无第三方库、file:// 双击可用。
 */
(function () {
  'use strict';

  /* ────────────────────────────── 基础工具 ────────────────────────────── */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  var ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(v) {
    if (v == null) return '';
    return String(v).replace(/[&<>"']/g, function (c) { return ESC_MAP[c]; });
  }
  function toArr(v) {
    if (v == null) return [];
    return Array.isArray(v) ? v.slice() : [v];
  }
  function cssq(v) { return String(v).replace(/["\\]/g, '\\$&'); }

  var LS_READ = 'zfatlas-read-status';
  var LS_NOTES = 'zfatlas-notes';

  var POL = [
    { id: 'op', name: '有机磷农药' },
    { id: 'pest', name: '其他农药' },
    { id: 'metal', name: '重金属' },
    { id: 'plas', name: '微塑料与纳米塑料' },
    { id: 'np', name: '工程纳米材料' },
    { id: 'pah', name: '多环芳烃与石油类' },
    { id: 'emerg', name: '新污染物' },
    { id: 'edc', name: '内分泌干扰物' },
    { id: 'mix', name: '混合暴露 / 环境实样' },
    { id: 'none', name: '非污染物研究' }
  ];
  var POL_BY_ID = {};
  POL.forEach(function (p) { POL_BY_ID[p.id] = p; });

  var VIEW_NAME = { side: '侧视图', cross: '横截面', embryo: '胚胎视图' };

  var DIR_COLORS = ['#0B6E6B', '#4F97AE', '#C0505F', '#C9A21F', '#8A7CD0', '#5E8C5A', '#3FA394', '#D06A9A'];

  var ICON = {
    info: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.6"/><path d="M8 7.2v4"/><circle cx="8" cy="4.9" r=".75" fill="currentColor" stroke="none"/></svg>',
    drop: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2.3c2.6 3.1 4.2 5 4.2 6.9a4.2 4.2 0 1 1-8.4 0c0-1.9 1.6-3.8 4.2-6.9Z"/></svg>',
    organ: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="4.4"/><circle cx="8" cy="8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    compass: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><circle cx="8" cy="8" r="5.4"/><path d="M10.5 5.5 9.1 9.1 5.5 10.5 6.9 6.9Z"/></svg>',
    pulse: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1.7 8.2h2.4l1.5-3.9 2.2 7.6 1.5-5 1.1 2.3h3.9"/></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.4"/><path d="M8 4.7V8l2.3 1.4"/></svg>',
    spark: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M8 1.9l1.6 3.9 3.9 1.6-3.9 1.6L8 13l-1.6-3.9-3.9-1.6 3.9-1.6z"/></svg>',
    bookmark: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4.1 2.3h7.8v11.4L8 10.9l-3.9 2.8z"/></svg>',
    search: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="7" cy="7" r="4.6"/><path d="m10.5 10.5 3.4 3.4"/></svg>',
    chev: '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.4 1.7 6.9 5 3.4 8.3"/></svg>',
    fish: '<svg width="88" height="88" viewBox="0 0 44 44" fill="none" stroke="#6E8B87" stroke-width="1.2"><path d="M6.5 23c5.5-8.6 13.2-10.3 20.4-5.6 2.3 1.5 4.1 3.7 5.2 5.6-1.1 1.9-2.9 4.1-5.2 5.6-7.2 4.7-14.9 3-20.4-5.6Z"/><path d="M32.5 23 39 18.2v9.6Z"/><circle cx="29.2" cy="21.4" r="1.1" fill="#6E8B87"/><path d="M13.5 20.4v5.2M18.6 18.7v8.6M23.8 19.3v7.4" stroke-width="1" opacity=".7"/></svg>'
  };

  /* ────────────────────────────── 状态 ────────────────────────────── */
  var DATA_OK = false;
  var organs = [], directions = [], marks = [], stages = [], pages = {};
  var organById = {}, dirById = {}, markById = {}, stageById = {};
  var papers = [];
  var markGroups = [];
  var counts = { organ: {}, dir: {}, mark: {}, stage: {}, pol: {}, gen: {}, read: 0, notes: 0, total: 0 };
  var searchIndex = { organs: [], dirs: [], marks: [], papers: [] };

  var readStatus = loadLS(LS_READ, {});
  var notes = loadLS(LS_NOTES, {});
  var lsWarned = false;

  var state = {
    view: null,
    filters: { q: '', pol: '', dir: '', stage: '', gen: '', review: false, read: '', sort: 'rel' },
    expanded: { organ: false, dir: false, mark: false, stage: false },
    ready: false,
    libraryTab: 'unread',
    openNote: null,
    anatomyReady: false,
    anatomyView: 'side',
    labels: true,
    ghost: false,
    stageId: null,
    searchItems: [],
    searchSel: -1
  };

  /* ────────────────────────────── 本地存储 ────────────────────────────── */
  function loadLS(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      var v = JSON.parse(raw);
      return (v && typeof v === 'object') ? v : fallback;
    } catch (e) { return fallback; }
  }
  function saveLS(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      if (!lsWarned) {
        lsWarned = true;
        toast('本机存储不可用，已读与笔记无法保存');
      }
      return false;
    }
  }

  /* ────────────────────────────── 数据初始化 ────────────────────────────── */
  function initData() {
    var s = window.STRUCT;
    if (!s || !Array.isArray(s.organs) || !s.organs.length) {
      DATA_OK = false;
      return;
    }
    organs = s.organs.slice();
    directions = Array.isArray(s.directions) ? s.directions.slice() : [];
    marks = Array.isArray(s.marks) ? s.marks.slice() : [];
    stages = Array.isArray(s.stages) ? s.stages.slice() : [];
    pages = (s.pages && typeof s.pages === 'object') ? s.pages : {};

    organs.forEach(function (o) { organById[o.id] = o; });
    directions.forEach(function (d) { dirById[d.id] = d; });
    marks.forEach(function (m) { markById[m.id] = m; });
    stages.forEach(function (st) { stageById[st.id] = st; });

    // 通用防御：只保留器官表里真实存在的 id，未知 id 静默忽略（不改变任何计数）。
    directions.forEach(function (d) {
      d._organs = toArr(d.organs).filter(function (id) { return !!organById[id]; });
    });
    marks.forEach(function (m) {
      m._organs = toArr(m.organ).filter(function (id) { return !!organById[id]; });
    });
    organs.forEach(function (o) {
      var arr = toArr(o.marks);
      o._marks = arr.map(function (id) { return markById[id]; }).filter(Boolean);
    });

    // 生物标志物按 cat 分组（保持数据顺序）
    var order = [], map = {};
    marks.forEach(function (m) {
      var c = m.cat || '其他';
      if (!map[c]) { map[c] = []; order.push(c); }
      map[c].push(m);
    });
    markGroups = order.map(function (c) { return { cat: c, list: map[c] }; });

    papers = normalizePapers(window.PAPERS);
    buildSearchIndex();
    DATA_OK = true;
  }

  function normalizePapers(raw) {
    if (!Array.isArray(raw)) return [];
    var seen = {}, out = [];
    raw.forEach(function (p, i) {
      if (!p || typeof p !== 'object') return;
      var pmid = p.pmid != null ? String(p.pmid).trim() : '';
      var key = pmid || ('x' + i);
      if (seen[key]) return;
      seen[key] = 1;
      out.push({
        key: key,
        pmid: pmid,
        title: String(p.title || '').trim() || '（无标题）',
        author1: String(p.author1 || '').trim(),
        nAuthors: Number(p.nAuthors) || 0,
        journal: String(p.journal || '').trim(),
        year: Number(p.year) || 0,
        doi: p.doi ? String(p.doi).replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').trim() : '',
        pmc: p.pmc ? String(p.pmc).trim() : '',
        review: !!p.review,
        organs: toArr(p.organs).filter(function (id) { return !!organById[id]; }),
        dirs: toArr(p.dirs).filter(function (id) { return !!dirById[id]; }),
        marks: toArr(p.marks).filter(function (id) { return !!markById[id]; }),
        polClass: POL_BY_ID[p.polClass] ? p.polClass : 'none',
        polName: String(p.polName || '').trim() || '—',
        gen: p.gen ? String(p.gen).trim() : '',
        stage: toArr(p.stage).filter(function (id) { return !!stageById[id]; }),
        zh: String(p.zh || '').trim(),
        keyFlag: !!p.key,
        auto: !!p.auto,
        added: p.added ? String(p.added) : ''
      });
    });
    return out;
  }

  function buildSearchIndex() {
    searchIndex = {
      organs: organs.map(function (o) {
        return { id: o.id, name: o.name, hay: (o.name + ' ' + o.en + ' ' + toArr(o.genes).join(' ')).toLowerCase() };
      }),
      dirs: directions.map(function (d) {
        return { id: d.id, name: d.name, hay: (d.name + ' ' + (d.en || '') + ' ' + (d.desc || '')).toLowerCase() };
      }),
      marks: marks.map(function (m) {
        return { id: m.id, name: m.name, hay: (m.name + ' ' + (m.en || '') + ' ' + (m.cat || '') + ' ' + (m.desc || '')).toLowerCase() };
      }),
      papers: papers.map(function (p) {
        return { key: p.key, title: p.title, hay: (p.title + ' ' + p.zh + ' ' + p.author1 + ' ' + p.journal + ' ' + p.polName).toLowerCase() };
      })
    };
  }

  function computeCounts() {
    counts = { organ: {}, dir: {}, mark: {}, stage: {}, pol: {}, gen: {}, read: 0, notes: 0, total: papers.length };
    papers.forEach(function (p) {
      p.organs.forEach(function (id) { counts.organ[id] = (counts.organ[id] || 0) + 1; });
      p.dirs.forEach(function (id) { counts.dir[id] = (counts.dir[id] || 0) + 1; });
      p.marks.forEach(function (id) { counts.mark[id] = (counts.mark[id] || 0) + 1; });
      p.stage.forEach(function (id) { counts.stage[id] = (counts.stage[id] || 0) + 1; });
      counts.pol[p.polClass] = (counts.pol[p.polClass] || 0) + 1;
      if (p.gen) counts.gen[p.gen] = (counts.gen[p.gen] || 0) + 1;
      if (readStatus[p.key] === 'read') counts.read++;
      if (notes[p.key] && notes[p.key].trim()) counts.notes++;
    });
  }

  function lastUpdateText() {
    /* 优先用自动巡检时间（data_papers.js 的 window.PAPERS_META.last_run），
       这样没有新文献的日子也能看出脚本跑过 */
    if (window.PAPERS_META && window.PAPERS_META.last_run) {
      return String(window.PAPERS_META.last_run).slice(0, 10);
    }
    if (!papers.length) return '—';
    var dates = papers.map(function (p) { return p.added; }).filter(Boolean).sort();
    if (dates.length) return dates[dates.length - 1];
    var y = 0;
    papers.forEach(function (p) { if (p.year > y) y = p.year; });
    return y ? (y + ' 年') : '—';
  }

  function lastAddedText() {
    var dates = papers.map(function (p) { return p.added; }).filter(Boolean).sort();
    return dates.length ? dates[dates.length - 1] : '—';
  }

  /* ────────────────────────────── 小工具 ────────────────────────────── */
  function isAct(type, id) {
    return !!state.view && state.view.type === type && String(state.view.id) === String(id);
  }
  function dirsOfOrgan(id) {
    return directions.filter(function (d) { return d._organs && d._organs.indexOf(id) >= 0; });
  }
  function dirsOfMark(m) {
    var set = {};
    (m._organs || []).forEach(function (oid) {
      dirsOfOrgan(oid).forEach(function (d) { set[d.id] = d; });
    });
    return directions.filter(function (d) { return set[d.id]; });
  }
  function marksOfDir(d) {
    var set = {}, out = [];
    (d._organs || []).forEach(function (oid) {
      var o = organById[oid];
      if (!o) return;
      (o._marks || []).forEach(function (m) { if (!set[m.id]) { set[m.id] = 1; out.push(m); } });
    });
    return out;
  }
  function polDisplay(p) {
    // TODO: 数据里部分文献的 polName 为占位符 "—"（无具体污染物），展示时统一改为“未标注”。
    return (!p.polName || p.polName === '—') ? '未标注' : p.polName;
  }
  function pollutantStats(list) {
    var map = {};
    list.forEach(function (p) {
      var name = polDisplay(p);
      if (name === '未标注') return;
      map[name] = (map[name] || 0) + 1;
    });
    return Object.keys(map).map(function (k) { return { name: k, n: map[k] }; })
      .sort(function (a, b) { return b.n - a.n || a.name.localeCompare(b.name); });
  }
  function relatedPapers(p) {
    var scored = [];
    papers.forEach(function (x) {
      if (x.key === p.key) return;
      var s = 0;
      if (x.dirs.some(function (d) { return p.dirs.indexOf(d) >= 0; })) s += 2;
      if (x.organs.some(function (o) { return p.organs.indexOf(o) >= 0; })) s += 1;
      if (s > 0) scored.push({ p: x, s: s });
    });
    scored.sort(function (a, b) { return b.s - a.s || (b.p.year - a.p.year); });
    return scored.slice(0, 5).map(function (r) { return r.p; });
  }
  function genOptions() {
    var known = ['F1', 'F2', 'F3+'], out = [];
    known.forEach(function (g) { if (counts.gen[g]) out.push(g); });
    Object.keys(counts.gen).forEach(function (g) {
      if (known.indexOf(g) < 0) out.push(g);
    });
    return out;
  }

  /* ────────────────────────────── 视图切换 ────────────────────────────── */
  function defaultView() {
    if (organById['li']) return { type: 'organ', id: 'li' };
    if (organs.length) return { type: 'organ', id: organs[0].id };
    return { type: 'latest', id: 'latest' };
  }

  /* ── URL 路由：#organ/li、#dir/dv、#paper/29022183 … ──
     目的是让某个器官 / 方向 / 单篇文献可以被收藏成书签、可以发给别人，
     并让浏览器的后退键有作用。不引入任何库。 */
  var HASH_TYPES = ['organ', 'dir', 'mark', 'stage', 'page', 'pollutant', 'paper'];

  function viewToHash(v) {
    if (!v || !v.type) return '';
    if (v.type === 'latest' || v.type === 'library') return '#' + v.type;
    if (HASH_TYPES.indexOf(v.type) >= 0) return '#' + v.type + '/' + encodeURIComponent(String(v.id));
    return '';
  }

  function hashToView(h) {
    var raw = String(h || '').replace(/^#/, '');
    if (!raw) return null;
    if (raw === 'latest') return { type: 'latest', id: 'latest' };
    if (raw === 'library') return { type: 'library', id: 'library' };
    var i = raw.indexOf('/');
    if (i < 0) return null;
    var type = raw.slice(0, i);
    var id;
    try { id = decodeURIComponent(raw.slice(i + 1)); } catch (e) { id = raw.slice(i + 1); }
    if (HASH_TYPES.indexOf(type) < 0 || !id) return null;
    /* 只接受真实存在的条目，坏链接不要把界面带到空状态 */
    if (type === 'organ' && !organById[id]) return null;
    if (type === 'dir' && !dirById[id]) return null;
    if (type === 'mark' && !markById[id]) return null;
    if (type === 'stage' && !stageById[id]) return null;
    if (type === 'page' && !pages[id]) return null;
    if (type === 'paper' && !findPaper(id)) return null;
    if (type === 'pollutant') {
      var hit = papers.some(function (p) { return p.polName === id; });
      if (!hit) return null;
    }
    return { type: type, id: id };
  }

  function syncHash() {
    var want = viewToHash(state.view);
    if (!want) return;
    if (String(location.hash || '') === want) return;
    /* 首屏用 replaceState，避免在历史里多出一条「空 hash」记录；
       之后用 location.hash，这样每次切换都进历史，浏览器后退键才有作用。
       这里不加「忽略自己写入」的锁——onHashChange 已经用「视图是否已一致」
       做判断，那是唯一可靠的判据；加锁反而会吞掉紧随其后的真实后退事件。 */
    try {
      if (!state.ready && history && history.replaceState) history.replaceState(null, '', want);
      else location.hash = want;
    } catch (e) {
      try { location.hash = want; } catch (e2) {}
    }
  }

  function onHashChange() {
    var v = hashToView(location.hash);
    if (!v) return;
    if (state.view && state.view.type === v.type && String(state.view.id) === String(v.id)) return;
    setView(v);
  }

  function setView(v) {
    var prev = state.view;
    var changed = !prev || prev.type !== v.type || String(prev.id || '') !== String(v.id || '');
    state.view = v;
    if (v.type === 'stage') state.stageId = v.id;
    if (changed) {
      state.filters = { q: '', pol: '', dir: '', stage: '', gen: '', review: false, read: '', sort: state.filters.sort || 'rel' };
      state.openNote = null;
    }
    /* 手风琴式导航：进入某类视图时只展开该组（首屏渲染不展开，保证 8 个顶层导航项完整可见） */
    if (state.ready && (v.type === 'organ' || v.type === 'dir' || v.type === 'mark' || v.type === 'stage')) {
      var ex = state.expanded;
      Object.keys(ex).forEach(function (k) { ex[k] = false; });
      ex[v.type] = true;
    }

    renderAll();
    applyAnatomyState();
    syncHash();
    var ds = $('#dscroll');
    if (ds) ds.scrollTop = 0;
    if (window.innerWidth < 1100) openAside();
    setTimeout(function () {
      var el = $('#navScroll .nitem.on');
      if (el && el.scrollIntoView) { try { el.scrollIntoView({ block: 'nearest' }); } catch (e) {} }
    }, 0);
  }

  function navTo(name) {
    if (name === 'intro' || name === 'culture') {
      if (!pages[name]) { toast('文字页数据尚未加载'); return; }
      setView({ type: 'page', id: name });
    } else if (name === 'latest') {
      setView({ type: 'latest', id: 'latest' });
    } else if (name === 'library') {
      setView({ type: 'library', id: 'library' });
    }
  }

  /* ────────────────────────────── 解剖图桥接 ────────────────────────────── */
  var suppressAnatomy = false;

  function initAnatomy() {
    var host = $('#anatomyHost');
    if (!host) return;
    state.anatomyReady = false;
    host.innerHTML = '';

    if (!window.Anatomy || typeof window.Anatomy.init !== 'function') {
      stagePlaceholder(
        '解剖图模块尚未就绪',
        '未找到 window.Anatomy。anatomy.js 可能还在编写，或加载失败；本页其余功能（导航、详情、文献、搜索）不受影响。',
        'window.Anatomy = ' + (typeof window.Anatomy)
      );
      return;
    }
    try {
      window.Anatomy.init({
        host: host,
        onSelect: onAnatomySelect,
        onHover: onAnatomyHover
      });
      state.anatomyReady = true;
      applyAnatomyState();
      if (!host.children.length) {
        stagePlaceholder(
          '解剖图未输出内容',
          'window.Anatomy.init() 已执行，但舞台容器仍是空的。请检查 anatomy.js 是否把 SVG 插入 host。',
          'host.children.length = 0'
        );
      }
    } catch (err) {
      state.anatomyReady = false;
      stagePlaceholder(
        '解剖图初始化失败',
        'anatomy.js 在执行 init() 时抛出异常。页面其余部分继续可用；可打开控制台查看堆栈。',
        String(err && err.message ? err.message : err)
      );
      try { console.error('[atlas] anatomy init failed', err); } catch (e) {}
    }
  }

  function stagePlaceholder(title, body, code) {
    var host = $('#anatomyHost');
    if (!host) return;
    host.innerHTML = '<div class="stageload">' + ICON.fish +
      '<b>' + esc(title) + '</b><p>' + esc(body) + '</p>' +
      (code ? '<div class="mono">' + esc(code) + '</div>' : '') +
      '<button class="tbtn" type="button" data-act="retry-anatomy">重新检测</button>' +
      '</div>';
  }

  function applyAnatomyState() {
    if (!state.anatomyReady) return;
    var A = window.Anatomy || {};
    suppressAnatomy = true;
    try {
      if (typeof A.setView === 'function') A.setView(state.anatomyView);
      if (typeof A.setLabels === 'function') A.setLabels(state.labels);
      if (typeof A.setGhost === 'function') A.setGhost(state.ghost);
      if (state.stageId && typeof A.setStage === 'function') A.setStage(state.stageId);
      /* 横截面只画躯干中段的器官。若当前视图没有这个器官，自动切到画了它的视图，
         否则点左栏的「脑」在横截面上毫无反馈，看起来像坏了。 */
      var want = (state.view && state.view.type === 'organ') ? state.view.id : null;
      if (want && typeof A.hasOrgan === 'function' && !A.hasOrgan(state.anatomyView, want)) {
        var alt = (typeof A.viewsWithOrgan === 'function') ? A.viewsWithOrgan(want) : [];
        if (alt.length && alt.indexOf(state.anatomyView) < 0) {
          var fromName = VIEW_NAME[state.anatomyView] || state.anatomyView;
          setAnatomyView(alt[0]);
          toast((organById[want] ? organById[want].name : '该器官') + '不在' + fromName + '里，已切到' + (VIEW_NAME[alt[0]] || alt[0]));
        }
      }
      if (typeof A.selectOrgan === 'function') {
        A.selectOrgan(want);
      }
    } catch (err) {
      try { console.warn('[atlas] anatomy 同步失败', err); } catch (e) {}
    }
    suppressAnatomy = false;
  }

  function onAnatomySelect(id) {
    if (suppressAnatomy) return;
    if (id && organById[id]) setView({ type: 'organ', id: id });
  }

  function onAnatomyHover(id) {
    var h = $('#hoverHint');
    if (!h) return;
    if (id && organById[id]) {
      h.textContent = organById[id].name + (organById[id].en ? ' · ' + organById[id].en : '');
      h.classList.add('on');
    } else {
      h.classList.remove('on');
    }
  }

  function setAnatomyView(v) {
    state.anatomyView = v;
    $$('.seg [data-view]').forEach(function (b) {
      var on = b.getAttribute('data-view') === v;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    if (state.anatomyReady) {
      try { if (typeof window.Anatomy.setView === 'function') window.Anatomy.setView(v); } catch (e) {}
    }
  }

  /* ────────────────────────────── 渲染：外壳 ────────────────────────────── */
  function renderAll() {
    renderHeaderStats();
    renderNav();
    renderCenterHead();
    renderTimeline();
    renderDetail();
  }

  function renderHeaderStats() {
    var a = $('#statTotal'), b = $('#statUpdated');
    if (a) a.textContent = papers.length;
    if (b) b.textContent = lastUpdateText();
  }

  function renderNav() {
    var host = $('#navScroll');
    if (!host) return;
    var st = host.scrollTop;
    var e = state.expanded;
    var html = '';

    html += '<div class="navsec">概览</div>'
      + navBtn('intro', 'info', '斑马鱼简介', null, isAct('page', 'intro'))
      + navBtn('culture', 'drop', '饲养与暴露', null, isAct('page', 'culture'));

    html += '<div class="navsec">图谱</div>'
      + grpHead('organ', 'organ', '器官解剖', organs.length, e.organ)
      + '<div class="nsub' + (e.organ ? ' on' : '') + '">'
      + organs.map(function (o) {
          return '<button class="nitem' + (isAct('organ', o.id) ? ' on' : '') + '" data-organ="' + esc(o.id) + '" title="' + esc(o.name) + '">'
            + '<span class="dot" style="background:' + esc(o.color || '#0B6E6B') + '"></span>'
            + '<span class="nm">' + esc(o.name) + '</span>'
            + '<span class="cnt">' + (counts.organ[o.id] || 0) + '</span></button>';
        }).join('')
      + '</div>'
      + grpHead('dir', 'compass', '研究方向', directions.length, e.dir)
      + '<div class="nsub' + (e.dir ? ' on' : '') + '">'
      + directions.map(function (d, i) {
          return '<button class="nitem' + (isAct('dir', d.id) ? ' on' : '') + '" data-dir="' + esc(d.id) + '">'
            + '<span class="dot" style="background:' + esc(d.color || DIR_COLORS[i % DIR_COLORS.length]) + '"></span>'
            + '<span class="nm">' + esc(d.name) + '</span>'
            + '<span class="cnt">' + (counts.dir[d.id] || 0) + '</span></button>';
        }).join('')
      + '</div>'
      + grpHead('mark', 'pulse', '生物标志物', marks.length, e.mark)
      + '<div class="nsub' + (e.mark ? ' on' : '') + '">' + markNavHtml() + '</div>'
      + grpHead('stage', 'clock', '生命周期', stages.length, e.stage)
      + '<div class="nsub' + (e.stage ? ' on' : '') + '">'
      + stages.map(function (s) {
          return '<button class="nitem' + (isAct('stage', s.id) ? ' on' : '') + '" data-stage="' + esc(s.id) + '">'
            + '<span class="nm">' + esc(s.name) + '</span>'
            + '<span class="cnt">' + (counts.stage[s.id] || 0) + '</span></button>';
        }).join('')
      + '</div>';

    var unread = papers.filter(function (p) { return readStatus[p.key] !== 'read'; }).length;
    html += '<div class="navsec">文献</div>'
      + navBtn('latest', 'spark', '最新发表', Math.min(30, papers.length), isAct('latest', 'latest'))
      + navBtn('library', 'bookmark', '我的书单', unread, isAct('library', 'library'));

    host.innerHTML = html;
    host.scrollTop = st;
    renderNavFoot();
    updateNavToggle();
  }

  function navBtn(nav, icon, label, count, on) {
    return '<button class="nitem' + (on ? ' on' : '') + '" data-nav="' + nav + '" title="' + esc(label) + '">'
      + '<span class="ic">' + ICON[icon] + '</span>'
      + '<span class="nm">' + esc(label) + '</span>'
      + (count == null ? '' : '<span class="cnt">' + count + '</span>')
      + '</button>';
  }

  function grpHead(key, icon, label, count, open) {
    return '<button class="nitem grp' + (state.view && state.view.type === key ? ' on' : '') + '" data-grp="' + key + '" aria-expanded="' + (open ? 'true' : 'false') + '" title="' + esc(label) + '">'
      + '<span class="ic">' + ICON[icon] + '</span>'
      + '<span class="nm">' + esc(label) + '</span>'
      + '<span class="cnt">' + count + '</span>'
      + '<span class="chev">' + ICON.chev + '</span>'
      + '</button>';
  }

  function markNavHtml() {
    if (!markGroups.length) return '';
    return markGroups.map(function (g) {
      return '<div class="ncat">' + esc(g.cat) + '</div>'
        + g.list.map(function (m) {
            return '<button class="nitem' + (isAct('mark', m.id) ? ' on' : '') + '" data-mark="' + esc(m.id) + '" title="' + esc(m.name) + '">'
              + '<span class="nm">' + esc(m.name) + '</span>'
              + '<span class="cnt">' + (counts.mark[m.id] || 0) + '</span></button>';
          }).join('');
    }).join('');
  }

  function renderNavFoot() {
    var f = $('#navFoot');
    if (!f) return;
    f.innerHTML = '<div class="mini"><span>已收录</span><b>' + papers.length + ' 篇</b></div>'
      + '<div class="mini"><span>最近更新</span><b>' + esc(lastUpdateText()) + '</b></div>'
      + '<div class="mini"><span>已读 / 笔记</span><b>' + counts.read + ' / ' + counts.notes + '</b></div>';
  }

  function renderCenterHead() {
    var meta = centerMeta();
    var t = $('#title'), sub = $('#subtitle'), path = $('#path');
    if (t) { t.textContent = meta.title; t.title = meta.title; }
    if (sub) { sub.textContent = meta.sub || ''; sub.title = meta.sub || ''; }
    if (path) {
      path.innerHTML = (meta.path || []).map(function (x, i) {
        return (i ? '<i>/</i>' : '') + esc(x);
      }).join('');
    }
    document.title = meta.title + ' · 斑马鱼毒理图谱';
  }

  function centerMeta() {
    var v = state.view;
    if (!DATA_OK) return { title: '数据未就绪', sub: '', path: ['错误', 'data_struct.js'] };
    if (!v) return { title: '斑马鱼毒理图谱', sub: '', path: [] };
    if (v.type === 'organ') {
      var o = organById[v.id];
      return o ? { title: o.name, sub: (o.en || '') + ' · 器官解剖', path: ['器官', o.name] }
               : { title: '未找到器官', sub: '', path: ['器官'] };
    }
    if (v.type === 'dir') {
      var d = dirById[v.id];
      return d ? { title: d.name, sub: (d.en || '') + ' · 研究方向', path: ['研究方向', d.name] }
               : { title: '未找到方向', sub: '', path: ['研究方向'] };
    }
    if (v.type === 'mark') {
      var m = markById[v.id];
      return m ? { title: m.name, sub: (m.cat || '生物标志物') + (m.en ? ' · ' + m.en : ''), path: ['生物标志物', m.name] }
               : { title: '未找到标志物', sub: '', path: ['生物标志物'] };
    }
    if (v.type === 'stage') {
      var s = stageById[v.id];
      return s ? { title: s.name, sub: s.t + ' · 生命周期', path: ['生命周期', s.name] }
               : { title: '未找到阶段', sub: '', path: ['生命周期'] };
    }
    if (v.type === 'page') {
      var pg = pages[v.id];
      return pg ? { title: pg.title || '专题', sub: pg.sub || '', path: ['专题', pg.title || ''] }
                : { title: '专题', sub: '', path: ['专题'] };
    }
    if (v.type === 'latest') return { title: '最新发表', sub: '按年份倒序 · 前 30 篇', path: ['文献', '最新发表'] };
    if (v.type === 'library') return { title: '我的书单', sub: '待读 / 已读 / 笔记 · 保存在本机', path: ['文献', '我的书单'] };
    if (v.type === 'pollutant') return { title: v.id, sub: '污染物 · 文献聚合', path: ['污染物', v.id] };
    if (v.type === 'paper') {
      var p = findPaper(v.id);
      return p ? { title: p.title, sub: (p.year || '') + ' · ' + (p.journal || '文献'), path: ['文献', '详情'] }
               : { title: '文献详情', sub: '', path: ['文献'] };
    }
    return { title: '斑马鱼毒理图谱', sub: '', path: [] };
  }

  function findPaper(key) {
    for (var i = 0; i < papers.length; i++) if (papers[i].key === key) return papers[i];
    return null;
  }

  /* ────────────────────────────── 时间轴 ────────────────────────────── */
  function renderTimeline() {
    var grid = $('#tlgrid'), meta = $('#tlMeta'), desc = $('#tldesc'), note = $('#stageNote');
    if (!grid) return;
    if (!DATA_OK) {
      grid.innerHTML = '';
      if (meta) meta.textContent = '数据不可用';
      if (desc) { desc.classList.add('idle'); desc.textContent = '生命周期数据未加载。'; }
      if (note) note.textContent = '';
      return;
    }
    grid.innerHTML = stages.map(function (s) {
      var on = state.stageId === s.id;
      return '<button class="tl' + (on ? ' on' : '') + '" type="button" data-stage="' + esc(s.id) + '"'
        + ' aria-pressed="' + on + '" title="' + esc(s.name + ' · ' + s.t) + '">'
        + '<span class="tn">' + esc(s.name) + '</span><small>' + esc(s.t) + '</small></button>';
    }).join('');

    var cur = state.stageId ? stageById[state.stageId] : null;
    if (meta) meta.textContent = cur ? ('当前：' + cur.name + ' · ' + cur.t) : (stages.length + ' 阶段 · 点击切换');
    if (note) note.textContent = cur ? ('阶段 ' + (stages.indexOf(cur) + 1) + ' / ' + stages.length + ' · ' + cur.t) : '';
    if (desc) {
      if (cur) {
        desc.classList.remove('idle');
        desc.innerHTML = '<span class="tph">' + esc(cur.t) + '</span>' + esc(cur.desc || '');
      } else {
        desc.classList.add('idle');
        desc.innerHTML = '点击任一阶段查看说明；解剖图会按所选阶段联动。';
      }
    }
  }

  /* ────────────────────────────── 右栏：详情 ────────────────────────────── */
  function renderDetail() {
    var aside = $('#detail'), dk = $('#dkind'), dt = $('#dtitle'), host = $('#dscroll');
    if (!host || !aside) return;
    var v = state.view || { type: 'latest', id: 'latest' };
    var kind = '详情', title = '', html = '';

    aside.classList.toggle('wide', v.type === 'latest' || v.type === 'library' || v.type === 'pollutant' || v.type === 'paper');
    aside.classList.toggle('reading', v.type === 'page');

    if (!DATA_OK) {
      kind = '数据'; title = '数据未就绪'; html = dataWarn();
    } else if (v.type === 'organ') {
      var o = organById[v.id];
      if (o) { kind = '器官解剖'; title = o.name; html = organDetail(o); }
      else { kind = '器官'; title = '未找到'; html = missing('未找到该器官'); }
    } else if (v.type === 'dir') {
      var d = dirById[v.id];
      if (d) { kind = '研究方向'; title = d.name; html = dirDetail(d); }
      else { kind = '研究方向'; title = '未找到'; html = missing('未找到该研究方向'); }
    } else if (v.type === 'mark') {
      var m = markById[v.id];
      if (m) { kind = '生物标志物'; title = m.name; html = markDetail(m); }
      else { kind = '生物标志物'; title = '未找到'; html = missing('未找到该标志物'); }
    } else if (v.type === 'stage') {
      var s = stageById[v.id];
      if (s) { kind = '生命周期'; title = s.name; html = stageDetail(s); }
      else { kind = '生命周期'; title = '未找到'; html = missing('未找到该阶段'); }
    } else if (v.type === 'page') {
      var pg = pages[v.id];
      if (pg) { kind = '专题'; title = pg.title || v.id; html = pageDetail(pg); }
      else { kind = '专题'; title = '未找到'; html = missing('未找到该专题页'); }
    } else if (v.type === 'latest') {
      kind = '文献'; title = '最新发表'; html = latestDetail();
    } else if (v.type === 'library') {
      kind = '文献'; title = '我的书单'; html = libraryDetail();
    } else if (v.type === 'pollutant') {
      kind = '污染物'; title = v.id; html = pollutantDetail(v.id);
    } else if (v.type === 'paper') {
      var p = findPaper(v.id);
      if (p) { kind = '文献'; title = p.title; html = paperDetail(p); }
      else { kind = '文献'; title = '未找到'; html = missing('未找到该文献'); }
    }

    if (dk) dk.textContent = kind;
    if (dt) dt.textContent = title;
    host.innerHTML = html;
    if ($('#paperList')) renderPaperList();
  }

  function hero(color, kind, name, sub) {
    return '<div class="dhero">'
      + (color ? '<span class="dot" style="background:' + esc(color) + '"></span>' : '')
      + '<div class="h"><div class="kind">' + esc(kind) + '</div>'
      + (name ? '<div class="name">' + esc(name) + '</div>' : '')
      + (sub ? '<div class="sub">' + esc(sub) + '</div>' : '')
      + '</div></div>';
  }

  function stat(n, label, teal) {
    return '<span class="stat' + (teal ? ' teal' : '') + '"><b>' + n + '</b>' + esc(label) + '</span>';
  }

  function missing(msg) {
    return '<div class="empty"><div class="eic">' + ICON.info + '</div><b>' + esc(msg) + '</b>'
      + '<p>该条目可能已被移除，或数据尚未加载。</p></div>';
  }

  function dataWarn() {
    return '<div class="datawarn"><b>数据结构未就绪</b>'
      + '未读取到 window.STRUCT，或器官数组为空。data_struct.js 可能加载失败（一个语法错误会让整个文件不执行）。'
      + '本页其他交互已按防御模式运行，不显示错误数据。'
      + '<div class="mono">typeof window.STRUCT === ' + esc(typeof window.STRUCT) + '</div></div>'
      + '<div class="empty"><div class="eic">' + ICON.info + '</div><b>修复后刷新即可</b>'
      + '<p>数据文件恢复后无需改动 app.js：导航、计数、时间轴、文献列表会自动出现。</p></div>';
  }

  /* ── 器官 ── */
  function organDetail(o) {
    var ms = o._marks || [];
    var ds = dirsOfOrgan(o.id);
    var base = getBasePapers();
    var pols = pollutantStats(base);
    var genes = toArr(o.genes).filter(Boolean);

    return hero(o.color || '#0B6E6B', 'ORGAN · 器官解剖', '',
        (o.en || '') + (o.latin ? ' · ' + o.latin : ''))
      + (o.desc ? '<div class="card"><p class="lead">' + esc(o.desc) + '</p></div>' : '')
      + (o.exposure ? '<div class="note"><b>暴露与损伤　</b>' + esc(o.exposure) + '</div>' : '')
      + '<div class="statrow">'
      + stat(counts.organ[o.id] || 0, '篇文献', true)
      + stat(ms.length, '个标志物')
      + stat(ds.length, '个方向')
      + '</div>'
      + (ms.length
          ? '<div class="flab">关联标志物<span>' + ms.length + ' 个</span></div><div class="chips">'
            + ms.map(function (m) {
                return '<button class="chip" type="button" data-mark="' + esc(m.id) + '">' + esc(m.name) + '</button>';
              }).join('') + '</div>'
          : '')
      + (genes.length
          ? '<div class="flab">相关基因<span>点击搜索</span></div><div class="chips">'
            + genes.map(function (g) {
                return '<button class="chip ghost mono" type="button" data-search="' + esc(g) + '">' + esc(g) + '</button>';
              }).join('') + '</div>'
          : '')
      + (ds.length
          ? '<div class="flab">研究方向</div><div class="chips">'
            + ds.map(function (d) {
                return '<button class="chip ghost" type="button" data-dir="' + esc(d.id) + '">' + esc(d.name) + '</button>';
              }).join('') + '</div>'
          : '')
      + (pols.length
          ? '<div class="flab">典型污染物<span>按该器官文献统计</span></div><div class="chips">'
            + pols.slice(0, 7).map(function (x) {
                return '<button class="chip ghost" type="button" data-pol="' + esc(x.name) + '">'
                  + esc(x.name) + ' · ' + x.n + '</button>';
              }).join('') + '</div>'
          : '')
      + listBlock(base, '该器官文献');
  }

  /* ── 研究方向 ── */
  function dirDetail(d) {
    var orgs = (d._organs || []).map(function (id) { return organById[id]; }).filter(Boolean);
    var mks = marksOfDir(d);
    var base = getBasePapers();

    return hero(d.color || '#0B6E6B', 'DIRECTION · 研究方向', '', d.en || '')
      + (d.desc ? '<div class="card"><p class="lead">' + esc(d.desc) + '</p></div>' : '')
      + (d.question ? '<div class="note"><b>核心问题　</b>' + esc(d.question) + '</div>' : '')
      + '<div class="statrow">'
      + stat(counts.dir[d.id] || 0, '篇文献', true)
      + stat(orgs.length, '个器官')
      + stat(mks.length, '个标志物')
      + '</div>'
      + (orgs.length
          ? '<div class="flab">涉及器官</div><div class="chips">'
            + orgs.map(function (o) {
                return '<button class="chip ghost" type="button" data-organ="' + esc(o.id) + '">'
                  + esc(o.name) + '</button>';
              }).join('') + '</div>'
          : '')
      + (mks.length
          ? '<div class="flab">相关标志物</div><div class="chips">'
            + mks.slice(0, 12).map(function (m) {
                return '<button class="chip" type="button" data-mark="' + esc(m.id) + '">' + esc(m.name) + '</button>';
              }).join('') + '</div>'
            + (mks.length > 12
                ? '<div class="fnote">共 <b>' + mks.length + '</b> 个标志物，仅列出前 12 个；左侧「生物标志物」可按类别浏览全部。</div>'
                : '')
          : '')
      + listBlock(base, '该方向文献');
  }

  /* ── 生物标志物 ── */
  function markDetail(m) {
    var orgs = (m._organs || []).map(function (id) { return organById[id]; }).filter(Boolean);
    var ds = dirsOfMark(m);
    var base = getBasePapers();

    return hero('#0B6E6B', 'MARKER · ' + (m.cat || '生物标志物'), '', m.en || '')
      + (m.desc ? '<div class="card"><p class="lead">' + esc(m.desc) + '</p></div>' : '')
      + (m.note ? '<div class="note"><b>判读提示　</b>' + esc(m.note) + '</div>' : '')
      + '<div class="statrow">'
      + stat(counts.mark[m.id] || 0, '篇文献', true)
      + stat(orgs.length, '个器官')
      + stat(ds.length, '个方向')
      + '</div>'
      + '<div class="card flat"><dl class="kv">'
      + '<dt>类别</dt><dd>' + esc(m.cat || '—') + '</dd>'
      + '<dt>英文</dt><dd>' + esc(m.en || '—') + '</dd>'
      + '<dt>缩写 / ID</dt><dd class="mono">' + esc(m.id) + '</dd>'
      + '</dl></div>'
      + (orgs.length
          ? '<div class="flab">适用器官</div><div class="chips">'
            + orgs.map(function (o) {
                return '<button class="chip ghost" type="button" data-organ="' + esc(o.id) + '">'
                  + esc(o.name) + '</button>';
              }).join('') + '</div>'
          : '')
      + (ds.length
          ? '<div class="flab">所属方向</div><div class="chips">'
            + ds.map(function (d) {
                return '<button class="chip ghost" type="button" data-dir="' + esc(d.id) + '">'
                  + esc(d.name) + '</button>';
              }).join('') + '</div>'
          : '')
      + listBlock(base, '该标志物文献');
  }

  /* ── 生命周期阶段 ── */
  function stageDetail(s) {
    var idx = stages.indexOf(s);
    var prev = idx > 0 ? stages[idx - 1] : null;
    var next = idx >= 0 && idx < stages.length - 1 ? stages[idx + 1] : null;
    var base = getBasePapers();

    return hero('#3FA394', 'STAGE ' + (idx + 1) + ' / ' + stages.length, '', s.t)
      + (s.desc ? '<div class="card"><p class="lead">' + esc(s.desc) + '</p></div>' : '')
      + '<div class="statrow">' + stat(counts.stage[s.id] || 0, '篇文献', true) + '</div>'
      + ((prev || next)
          ? '<div class="card flat"><div class="chips">'
            + (prev ? '<button class="chip ghost" type="button" data-stage="' + esc(prev.id) + '">← ' + esc(prev.name) + '</button>' : '')
            + (next ? '<button class="chip ghost" type="button" data-stage="' + esc(next.id) + '">' + esc(next.name) + ' →</button>' : '')
            + '</div></div>'
          : '')
      + listBlock(base, '该阶段文献');
  }

  /* ── 文字页 ── */
  function normSections(arr) {
    return toArr(arr).map(function (s) {
      if (typeof s === 'string') return { h: '', p: s };
      if (!s || typeof s !== 'object') return null;
      return { h: s.h || s.title || s.heading || '', p: s.p || s.text || s.desc || s.body || '' };
    }).filter(function (s) { return s && (s.h || s.p); });
  }

  function pageDetail(pg) {
    var secs = normSections(pg.sections || pg.blocks || pg.items || []);
    /* 右栏顶部 #dtitle 已经显示页名，正文不再重复大标题，只留有信息量的元信息 */
    var html = '<div class="readpane"><article>';

    if (pg.desc) html += '<section><p>' + esc(pg.desc) + '</p></section>';
    secs.forEach(function (s) {
      html += '<section>'
        + (s.h ? '<h3><span class="bar"></span>' + esc(s.h) + '</h3>' : '')
        + (s.p ? '<p>' + esc(s.p) + '</p>' : '') + '</section>';
    });
    if (!pg.desc && !secs.length) {
      html += '<section><p class="pz miss">本页内容尚未提供。</p></section>';
    }
    html += '</article>';

    html += '<div class="card flat"><h3>从这里开始</h3><div class="chips">'
      + organs.map(function (o) {
          return '<button class="chip ghost" type="button" data-organ="' + esc(o.id) + '">' + esc(o.name) + '</button>';
        }).join('')
      + directions.map(function (d) {
          return '<button class="chip ghost" type="button" data-dir="' + esc(d.id) + '">' + esc(d.name) + '</button>';
        }).join('')
      + '</div></div></div>';

    return html;
  }

  /* ── 最新发表 ── */
  function latestDetail() {
    var base = getBasePapers();
    return '<div class="card flat"><p class="lead">按发表年份从新到旧展示前 ' + base.length
      + ' 篇（库内共 ' + papers.length + ' 篇）。数据更新至 ' + esc(lastUpdateText())
      + '；最近一次入库 ' + esc(lastAddedText()) + '；可继续用筛选与排序收窄。</p></div>'
      + listBlock(base, '最新发表');
  }

  /* ── 我的书单 ── */
  function tabBtn(tab, label, n, cur) {
    return '<button class="tab' + (cur === tab ? ' on' : '') + '" type="button" data-tab="' + tab + '">'
      + esc(label) + '<span class="n">' + n + '</span></button>';
  }

  function libraryDetail() {
    var base = getBasePapers();
    var unread = papers.filter(function (p) { return readStatus[p.key] !== 'read'; }).length;
    var readN = papers.length - unread;
    var noteN = papers.filter(function (p) { return notes[p.key] && notes[p.key].trim(); }).length;
    var titleMap = { unread: '待读文献', read: '已读文献', notes: '有笔记的文献' };

    return '<div class="card flat"><p class="lead">待读 / 已读与笔记保存在本机浏览器（localStorage），不会上传；'
      + '换浏览器或清理站点数据会丢失。</p></div>'
      + '<div class="tabs">'
      + tabBtn('unread', '待读', unread, state.libraryTab)
      + tabBtn('read', '已读', readN, state.libraryTab)
      + tabBtn('notes', '有笔记', noteN, state.libraryTab)
      + '</div>'
      + listBlock(base, titleMap[state.libraryTab] || '文献');
  }

  /* ── 污染物 ── */
  function pollutantDetail(name) {
    var base = getBasePapers();
    var cls = base.length ? base[0].polClass : '';
    var label = cls && POL_BY_ID[cls] ? POL_BY_ID[cls].name : '污染物';
    var orgSet = {}, dirSet = {};
    base.forEach(function (p) {
      p.organs.forEach(function (id) { orgSet[id] = (orgSet[id] || 0) + 1; });
      p.dirs.forEach(function (id) { dirSet[id] = (dirSet[id] || 0) + 1; });
    });
    var orgList = organs.filter(function (o) { return orgSet[o.id]; });
    var dirList = directions.filter(function (d) { return dirSet[d.id]; });

    return hero('#8A3D10', '污染物 · ' + label, '', '相关文献 ' + base.length + ' 篇')
      + '<div class="statrow">' + stat(base.length, '篇文献', true) + '</div>'
      + (orgList.length
          ? '<div class="flab">涉及器官</div><div class="chips">'
            + orgList.map(function (o) {
                return '<button class="chip ghost" type="button" data-organ="' + esc(o.id) + '">'
                  + esc(o.name) + ' · ' + orgSet[o.id] + '</button>';
              }).join('') + '</div>'
          : '')
      + (dirList.length
          ? '<div class="flab">涉及方向</div><div class="chips">'
            + dirList.map(function (d) {
                return '<button class="chip ghost" type="button" data-dir="' + esc(d.id) + '">'
                  + esc(d.name) + '</button>';
              }).join('') + '</div>'
          : '')
      + listBlock(base, '相关文献');
  }

  /* ── 单篇文献 ── */
  function paperDetail(p) {
    var read = readStatus[p.key] === 'read';
    var hasNote = !!(notes[p.key] && notes[p.key].trim());
    var orgs = p.organs.map(function (id) {
      var o = organById[id];
      return '<button class="tag org" style="background:' + esc(o.color) + '" type="button" data-organ="' + esc(id) + '">'
        + esc(o.name) + '</button>';
    }).join('');
    var pol = p.polClass !== 'none'
      ? (polDisplay(p) === '未标注'
          ? '<span class="tag">未标注污染物</span>'
          : '<button class="tag pol" type="button" data-pol="' + esc(polDisplay(p)) + '">' + esc(polDisplay(p)) + '</button>')
      : '<span class="tag">非污染物研究</span>';
    var gen = p.gen ? '<span class="tag gen">' + esc(p.gen) + ' 代</span>' : '';
    var st = p.stage.map(function (id) {
      return '<span class="tag stage">' + esc(stageById[id].name) + '</span>';
    }).join('');
    var mk = p.marks.map(function (id) {
      return '<button class="tag mk" type="button" data-mark="' + esc(id) + '">' + esc(markById[id].name) + '</button>';
    }).join('');
    var rel = relatedPapers(p);
    var links = (p.pmid ? '<a href="https://pubmed.ncbi.nlm.nih.gov/' + encodeURIComponent(p.pmid) + '/" target="_blank" rel="noopener">PubMed ↗</a>' : '')
      + (p.doi ? '<a href="https://doi.org/' + encodeURIComponent(p.doi) + '" target="_blank" rel="noopener">DOI ↗</a>' : '')
      + (p.pmc ? '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/' + encodeURIComponent(p.pmc) + '/" target="_blank" rel="noopener">PMC ↗</a>' : '');

    return hero(null, '文献 · ' + (p.review ? 'REVIEW · 综述' : 'RESEARCH · 研究论文'), '',
        (p.author1 || '—') + (p.nAuthors > 1 ? ' 等' : '') + ' · ' + (p.journal || '—') + ' · ' + (p.year || '—'))
      + '<div class="card">'
      + '<div class="tags">' + orgs + pol + gen + st + mk + (p.keyFlag ? '<span class="tag key">重点</span>' : '') + '</div>'
      + '<p class="pz">' + (p.zh ? esc(p.zh) : '暂无中文要点。') + '</p>'
      + '<div class="acts">' + links + '<span class="sp"></span>'
      + '<button class="actbtn' + (read ? ' on' : '') + '" type="button" data-read="' + esc(p.key) + '">'
      + (read ? '✓ 已读' : '标记已读') + '</button>'
      + '<button class="actbtn' + (hasNote ? ' on' : '') + '" type="button" data-note="' + esc(p.key) + '">笔记'
      + (hasNote ? '<span class="dotn"></span>' : '') + '</button>'
      + '</div>'
      + '<div class="noteedit' + (state.openNote === p.key ? ' on' : '') + '" data-note-editor="' + esc(p.key) + '">'
      + '<textarea data-note-input placeholder="写下要点、方法或可引用的结论…">' + esc(notes[p.key] || '') + '</textarea>'
      + '<div class="nerow"><button class="mini-btn primary" type="button" data-note-save="' + esc(p.key) + '">保存笔记</button>'
      + '<span class="hint">存于本机 · zfatlas-notes</span></div></div>'
      + '</div>'
      + '<div class="flab">文献信息</div>'
      + '<div class="card flat"><dl class="kv">'
      + '<dt>PMID</dt><dd class="mono">' + esc(p.pmid || '—') + '</dd>'
      + '<dt>DOI</dt><dd class="mono">' + esc(p.doi || '—') + '</dd>'
      + '<dt>PMC</dt><dd class="mono">' + esc(p.pmc || '—') + '</dd>'
      + '<dt>类型</dt><dd>' + (p.review ? '综述' : '研究论文') + '</dd>'
      + '<dt>代际</dt><dd>' + esc(p.gen || '—') + '</dd>'
      + '<dt>暴露阶段</dt><dd>' + (p.stage.map(function (id) { return esc(stageById[id].name); }).join('、') || '—') + '</dd>'
      + '<dt>污染物大类</dt><dd>' + esc(POL_BY_ID[p.polClass] ? POL_BY_ID[p.polClass].name : '—') + '</dd>'
      + '<dt>污染物</dt><dd>' + esc(polDisplay(p)) + '</dd>'
      + '<dt>入库</dt><dd>' + esc(p.added || '—') + '</dd>'
      + '</dl></div>'
      + (rel.length
          ? '<div class="flab">相关文献<span>同方向 / 同器官</span></div>' + rel.map(paperCard).join('')
          : '');
  }

  /* ────────────────────────────── 右栏：文献列表 ────────────────────────────── */
  function getBasePapers() {
    var v = state.view || {};
    if (v.type === 'organ') return papers.filter(function (p) { return p.organs.indexOf(v.id) >= 0; });
    if (v.type === 'dir') return papers.filter(function (p) { return p.dirs.indexOf(v.id) >= 0; });
    if (v.type === 'mark') return papers.filter(function (p) { return p.marks.indexOf(v.id) >= 0; });
    if (v.type === 'stage') return papers.filter(function (p) { return p.stage.indexOf(v.id) >= 0; });
    if (v.type === 'pollutant') return papers.filter(function (p) { return p.polName === v.id; });
    if (v.type === 'paper') {
      var p = findPaper(v.id);
      return p ? [p] : [];
    }
    if (v.type === 'latest') {
      return papers.slice().sort(function (a, b) { return (b.year - a.year) || a.title.localeCompare(b.title); }).slice(0, 30);
    }
    if (v.type === 'library') {
      if (state.libraryTab === 'read') return papers.filter(function (p) { return readStatus[p.key] === 'read'; });
      if (state.libraryTab === 'notes') return papers.filter(function (p) { return !!(notes[p.key] && notes[p.key].trim()); });
      return papers.filter(function (p) { return readStatus[p.key] !== 'read'; });
    }
    return papers.slice();
  }

  function listBlock(base, title) {
    var showFilters = papers.length > 0 && base.length > 0;
    var h = '<div class="secline"><h3>' + esc(title || '文献') + ' <span class="n" id="listN"></span></h3>'
      + (showFilters ? sortSelectHtml() : '') + '</div>';
    if (showFilters) h += filtersHtml() + exportHtml();
    h += '<div id="paperList"></div>';
    return h;
  }

  /* ── 引文导出 ──
     本库每篇只存了第一作者、期刊、年份、DOI、PMID，没有完整作者表与卷期页码，
     所以 BibTeX / RIS 是不完整的。要拿到完整记录，用「标识符清单」导入文献管理软件
     （Zotero 的「通过标识符添加」、EndNote 的 Online Search），由软件去 PubMed 取全套字段。 */
  function exportHtml() {
    return '<div class="fchips" style="margin-top:2px">'
      + '<button class="fchip" type="button" data-export="ids" title="每行一个 DOI 或 PMID，可直接粘进 Zotero 的「通过标识符添加」">导出标识符</button>'
      + '<button class="fchip" type="button" data-export="bib" title="字段不完整：缺完整作者表与卷期页码">导出 BibTeX</button>'
      + '<button class="fchip" type="button" data-export="ris" title="字段不完整：缺完整作者表与卷期页码">导出 RIS</button>'
      + '<span class="fcount">按当前筛选结果</span>'
      + '</div>';
  }

  function citeKey(p) {
    var a = (p.author1 || 'anon').replace(/[^A-Za-z]/g, '') || 'anon';
    return a.toLowerCase() + (p.year || '') + '_' + (p.pmid || p.key);
  }
  function bibEsc(v) { return String(v == null ? '' : v).replace(/[{}\\]/g, ''); }

  function buildExport(list, fmt) {
    var lines = [];
    if (fmt === 'ids') {
      lines.push('# 斑马鱼毒理图谱 · ' + list.length + ' 篇 · 每行一个标识符');
      lines.push('# Zotero：「通过标识符添加」粘贴全部行，由 Zotero 去 PubMed 取完整元数据');
      list.forEach(function (p) { lines.push(p.doi || ('PMID:' + p.pmid)); });
      return { text: lines.join('\n'), name: 'zebrafish-ids.txt', mime: 'text/plain' };
    }
    if (fmt === 'bib') {
      lines.push('% 斑马鱼毒理图谱导出 · ' + list.length + ' 篇');
      lines.push('% 注意：本库只存第一作者，author 字段为「第一作者 and others」，且无卷期页码。');
      lines.push('% 需要完整记录请改用「导出标识符」并由文献管理软件补全。');
      list.forEach(function (p) {
        lines.push('');
        lines.push('@' + (p.review ? 'article' : 'article') + '{' + citeKey(p) + ',');
        lines.push('  title   = {' + bibEsc(p.title) + '},');
        lines.push('  author  = {' + bibEsc(p.author1 || 'Anonymous') + (p.nAuthors > 1 ? ' and others' : '') + '},');
        lines.push('  journal = {' + bibEsc(p.journal) + '},');
        if (p.year) lines.push('  year    = {' + p.year + '},');
        if (p.doi) lines.push('  doi     = {' + bibEsc(p.doi) + '},');
        if (p.pmid) lines.push('  pmid    = {' + bibEsc(p.pmid) + '},');
        lines.push('  note    = {' + bibEsc(p.zh) + '}');
        lines.push('}');
      });
      return { text: lines.join('\n'), name: 'zebrafish.bib', mime: 'text/plain' };
    }
    list.forEach(function (p) {
      lines.push('TY  - JOUR');
      lines.push('TI  - ' + p.title);
      if (p.author1) lines.push('AU  - ' + p.author1);
      if (p.journal) lines.push('JO  - ' + p.journal);
      if (p.year) lines.push('PY  - ' + p.year);
      if (p.doi) lines.push('DO  - ' + p.doi);
      if (p.pmid) lines.push('AN  - ' + p.pmid);
      if (p.zh) lines.push('N1  - ' + p.zh);
      lines.push('ER  - ');
      lines.push('');
    });
    return { text: lines.join('\n'), name: 'zebrafish.ris', mime: 'text/plain' };
  }

  function doExport(fmt) {
    var list = sortPapers(applyFilters(getBasePapers()));
    if (!list.length) { toast('当前筛选结果为空，没有可导出的条目'); return; }
    var out = buildExport(list, fmt);
    var ok = false;
    try {
      var blob = new Blob([out.text], { type: out.mime + ';charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = out.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { try { URL.revokeObjectURL(url); } catch (e) {} }, 1000);
      ok = true;
    } catch (e) { ok = false; }
    if (ok) {
      toast('已导出 ' + list.length + ' 篇 · ' + out.name);
    } else {
      /* 浏览器拦了下载（某些 file:// 场景），退回到可全选复制的文本框 */
      showExportFallback(out, list.length);
    }
  }

  function showExportFallback(out, n) {
    var body = $('#modalBody');
    if (!body) { toast('导出失败：浏览器拒绝了下载'); return; }
    body.innerHTML = '<p>浏览器拦下了文件下载，这里直接给出文本（已全选，Ctrl/⌘+C 复制）：'
      + n + ' 篇 · ' + esc(out.name) + '</p>'
      + '<textarea id="exportText" readonly style="width:100%;height:46vh;font-family:ui-monospace,monospace;'
      + 'font-size:12px;line-height:1.5;padding:10px;border:1px solid var(--line2);border-radius:8px"></textarea>';
    var ta = $('#exportText');
    if (ta) { ta.value = out.text; }
    var mt = $('#mTitle');
    if (mt) mt.textContent = '导出';
    var modal = $('#modal');
    if (modal) modal.hidden = false;
    setTimeout(function () { if (ta) { try { ta.focus(); ta.select(); } catch (e) {} } }, 0);
  }

  function sortSelectHtml() {
    var opts = [['rel', '相关度优先'], ['yd', '年份（新→旧）'], ['ya', '年份（旧→新）'], ['au', '第一作者'], ['jn', '期刊']];
    return '<label class="fsel" style="width:150px" title="排序"><select data-filter="sort" aria-label="排序">'
      + opts.map(function (o) {
          return '<option value="' + o[0] + '"' + (state.filters.sort === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
        }).join('')
      + '</select></label>';
  }

  function selHtml(key, label, opts) {
    return '<div class="fsel"><select data-filter="' + key + '" aria-label="' + esc(label) + '">'
      + opts.map(function (o) {
          return '<option value="' + esc(o.v) + '"'
            + (String(state.filters[key]) === String(o.v) ? ' selected' : '') + '>' + esc(o.t) + '</option>';
        }).join('')
      + '</select></div>';
  }

  function filtersHtml() {
    var f = state.filters;
    var polOpts = [{ v: '', t: '全部污染物大类' }].concat(POL.filter(function (p) {
      return (counts.pol[p.id] || 0) > 0;
    }).map(function (p) {
      return { v: p.id, t: p.name + ' (' + (counts.pol[p.id] || 0) + ')' };
    }));
    var dirOpts = [{ v: '', t: '全部研究方向' }].concat(directions.map(function (d) {
      return { v: d.id, t: d.name + ' (' + (counts.dir[d.id] || 0) + ')' };
    }));
    var stageOpts = [{ v: '', t: '全部生命阶段' }].concat(stages.map(function (s) {
      return { v: s.id, t: s.name + ' (' + (counts.stage[s.id] || 0) + ')' };
    }));
    var genOpts = [{ v: '', t: '全部代际' }].concat(genOptions().map(function (g) {
      return { v: g, t: g + ' (' + (counts.gen[g] || 0) + ')' };
    }));

    return '<div class="filters">'
      + '<div class="fsearch">' + ICON.search
      + '<input id="fq" type="search" autocomplete="off" placeholder="在结果中筛选：标题、要点、污染物" value="' + esc(f.q) + '" aria-label="在结果中筛选">'
      + '<button class="fx" type="button" data-act="reset-filters" title="清空全部筛选" aria-label="清空全部筛选">✕</button></div>'
      + '<div class="frow">'
      + selHtml('pol', '污染物大类', polOpts)
      + selHtml('dir', '研究方向', dirOpts)
      + selHtml('stage', '生命阶段', stageOpts)
      + selHtml('gen', '代际深度', genOpts)
      + '</div>'
      + '<div class="fchips">'
      + '<button class="fchip' + (f.review ? ' on' : '') + '" type="button" data-toggle="review" aria-pressed="' + (!!f.review) + '">仅综述</button>'
      + '<button class="fchip' + (f.read === 'unread' ? ' on' : '') + '" type="button" data-readfilter="unread" aria-pressed="' + (f.read === 'unread') + '">待读</button>'
      + '<button class="fchip' + (f.read === 'read' ? ' on' : '') + '" type="button" data-readfilter="read" aria-pressed="' + (f.read === 'read') + '">已读</button>'
      + '<span class="fcount" id="fcount"></span>'
      + '</div></div>';
  }

  function renderPaperList() {
    var host = $('#paperList');
    if (!host) return;
    var base = getBasePapers();
    var list = sortPapers(applyFilters(base));
    host.innerHTML = list.length ? list.map(paperCard).join('') : emptyListHtml(base.length);
    var fc = $('#fcount');
    if (fc) fc.innerHTML = '显示 <b>' + list.length + '</b><span class="sep">/</span>共 ' + base.length + ' 篇';
    var n = $('#listN');
    if (n) n.textContent = list.length + ' / ' + base.length;
  }

  function applyFilters(base) {
    var f = state.filters;
    var q = (f.q || '').trim().toLowerCase();
    return base.filter(function (p) {
      if (f.pol && p.polClass !== f.pol) return false;
      if (f.dir && p.dirs.indexOf(f.dir) < 0) return false;
      if (f.stage && p.stage.indexOf(f.stage) < 0) return false;
      if (f.gen && p.gen !== f.gen) return false;
      if (f.review && !p.review) return false;
      if (f.read === 'read' && readStatus[p.key] !== 'read') return false;
      if (f.read === 'unread' && readStatus[p.key] === 'read') return false;
      if (q) {
        var hay = (p.title + ' ' + p.zh + ' ' + p.author1 + ' ' + p.journal + ' ' + p.polName);
        p.organs.forEach(function (id) { hay += ' ' + organById[id].name; });
        p.dirs.forEach(function (id) { hay += ' ' + dirById[id].name; });
        p.marks.forEach(function (id) { hay += ' ' + markById[id].name + ' ' + (markById[id].en || ''); });
        if (hay.toLowerCase().indexOf(q) < 0) return false;
      }
      return true;
    });
  }

  function relevance(p, q) {
    var s = 0;
    if (p.keyFlag) s += 40;
    if (p.review) s += 5;
    if (q) {
      var t = (p.title + ' ' + p.zh).toLowerCase();
      var pos = t.indexOf(q);
      if (pos === 0) s += 40;
      else if (pos > 0) s += 22;
      if (p.polName.toLowerCase().indexOf(q) >= 0) s += 10;
      if (p.author1.toLowerCase().indexOf(q) >= 0) s += 6;
      if (p.journal.toLowerCase().indexOf(q) >= 0) s += 6;
    }
    if (p.year) s += Math.max(0, Math.min(20, p.year - 2005)) * 0.6;
    return s;
  }

  function sortPapers(list) {
    var f = state.filters;
    var q = (f.q || '').trim().toLowerCase();
    var arr = list.slice();
    if (f.sort === 'yd') {
      arr.sort(function (a, b) { return (b.year - a.year) || a.title.localeCompare(b.title); });
    } else if (f.sort === 'ya') {
      arr.sort(function (a, b) { return (a.year - b.year) || a.title.localeCompare(b.title); });
    } else if (f.sort === 'au') {
      arr.sort(function (a, b) { return (a.author1 || '').localeCompare(b.author1 || '') || (b.year - a.year); });
    } else if (f.sort === 'jn') {
      arr.sort(function (a, b) { return (a.journal || '').localeCompare(b.journal || '') || (b.year - a.year); });
    } else {
      arr.sort(function (a, b) {
        return (relevance(b, q) - relevance(a, q)) || (b.year - a.year) || a.title.localeCompare(b.title);
      });
    }
    return arr;
  }

  function emptyListHtml(baseLen) {
    if (!papers.length) {
      return '<div class="empty"><div class="eic">' + ICON.bookmark + '</div>'
        + '<b>文献库是空的</b>'
        + '<p>这一版没有载入任何文献数据。</p></div>';
    }
    if (!baseLen) {
      return '<div class="empty"><div class="eic">' + ICON.info + '</div>'
        + '<b>这一项还没有收录文献</b>'
        + '<p>库里 ' + papers.length + ' 篇文献中，暂时没有标注到这一项的。'
        + '这通常说明该方向本身的文献很少，而不是漏收——换相邻的条目看看，'
        + '或用右上角的搜索直接找关键词。</p></div>';
    }
    return '<div class="empty"><div class="eic">' + ICON.search + '</div>'
      + '<b>筛选没有命中</b>'
      + '<p>试着放宽条件：清空关键词、把污染物大类与研究阶段设为「全部」，或取消「仅综述 / 已读」限制。</p>'
      + '<button class="mini-btn" type="button" data-act="reset-filters">清空全部筛选</button></div>';
  }

  function paperCard(p) {
    var read = readStatus[p.key] === 'read';
    var hasNote = !!(notes[p.key] && notes[p.key].trim());
    var orgs = p.organs.map(function (id) {
      var o = organById[id];
      return '<button class="tag org" style="background:' + esc(o.color) + '" type="button" data-organ="' + esc(id) + '">'
        + esc(o.name) + '</button>';
    }).join('');
    var pol = p.polClass !== 'none'
      ? (polDisplay(p) === '未标注'
          ? '<span class="tag">未标注污染物</span>'
          : '<button class="tag pol" type="button" data-pol="' + esc(polDisplay(p)) + '">' + esc(polDisplay(p)) + '</button>')
      : '<span class="tag">非污染物</span>';
    var gen = p.gen ? '<span class="tag gen">' + esc(p.gen) + ' 代</span>' : '';
    var st = p.stage.slice(0, 2).map(function (id) {
      return '<span class="tag stage">' + esc(stageById[id].name) + '</span>';
    }).join('');
    var mk = p.marks.slice(0, 3).map(function (id) {
      return '<button class="tag mk" type="button" data-mark="' + esc(id) + '">' + esc(markById[id].name) + '</button>';
    }).join('');
    if (p.marks.length > 3) mk += '<span class="tag">+' + (p.marks.length - 3) + '</span>';

    var links = (p.pmid ? '<a href="https://pubmed.ncbi.nlm.nih.gov/' + encodeURIComponent(p.pmid) + '/" target="_blank" rel="noopener">PubMed ↗</a>' : '')
      + (p.doi ? '<a href="https://doi.org/' + encodeURIComponent(p.doi) + '" target="_blank" rel="noopener">DOI ↗</a>' : '');

    return '<article class="paper' + (read ? ' read' : '') + (p.keyFlag ? ' key' : '') + '" data-paper="' + esc(p.key) + '">'
      + '<p class="pt" data-paper-open="' + esc(p.key) + '"><a href="#" data-paper-open="' + esc(p.key) + '">' + esc(p.title) + '</a></p>'
      + '<div class="pmeta"><span>' + esc(p.author1 || '—') + (p.nAuthors > 1 ? ' 等' : '') + '</span>'
      + '<span class="sep">·</span><span>' + esc(p.journal || '—') + '</span>'
      + '<span class="sep">·</span><span>' + esc(p.year || '—') + '</span>'
      + (p.review ? '<span class="tag rev">综述</span>' : '')
      + (p.auto ? '<span class="tag auto" title="每日由 PubMed 自动抓取，中文要点取摘要首句，尚未人工复核">自动收录</span>' : '')
      + '</div>'
      + '<div class="tags">' + orgs + pol + gen + st + mk + '</div>'
      + (p.zh ? '<p class="pz">' + esc(p.zh) + '</p>' : '<p class="pz miss">暂无中文要点</p>')
      + '<div class="acts">' + links + '<span class="sp"></span>'
      + '<button class="actbtn' + (read ? ' on' : '') + '" type="button" data-read="' + esc(p.key) + '">'
      + (read ? '✓ 已读' : '标记已读') + '</button>'
      + '<button class="actbtn' + (hasNote ? ' on' : '') + '" type="button" data-note="' + esc(p.key) + '">笔记'
      + (hasNote ? '<span class="dotn"></span>' : '') + '</button>'
      + '</div>'
      + '<div class="noteedit' + (state.openNote === p.key ? ' on' : '') + '" data-note-editor="' + esc(p.key) + '">'
      + '<textarea data-note-input placeholder="写下要点、方法或可引用的结论…">' + esc(notes[p.key] || '') + '</textarea>'
      + '<div class="nerow"><button class="mini-btn primary" type="button" data-note-save="' + esc(p.key) + '">保存笔记</button>'
      + '<span class="hint">存于本机 · zfatlas-notes</span></div></div>'
      + '</article>';
  }

  /* ────────────────────────────── 已读 / 笔记 ────────────────────────────── */
  function toggleRead(key) {
    if (readStatus[key] === 'read') {
      delete readStatus[key];
      toast('已标为待读');
    } else {
      readStatus[key] = 'read';
      toast('已标为已读');
    }
    saveLS(LS_READ, readStatus);
    computeCounts();
    renderHeaderStats();
    renderNav();
    renderNavFoot();
    refreshAfterRead();
    updateNoteIndicators();
  }

  function refreshAfterRead() {
    var t = state.view && state.view.type;
    if (t === 'library' || t === 'paper') { renderDetail(); return; }
    if ($('#paperList')) renderPaperList();
  }

  function refreshLibraryTabCounts() {
    if (!state.view || state.view.type !== 'library') return;
    var unread = papers.filter(function (p) { return readStatus[p.key] !== 'read'; }).length;
    var readN = papers.length - unread;
    var noteN = papers.filter(function (p) { return !!(notes[p.key] && notes[p.key].trim()); }).length;
    $$('.tab[data-tab]').forEach(function (b) {
      var n = b.querySelector('.n');
      if (!n) return;
      var t = b.getAttribute('data-tab');
      n.textContent = t === 'read' ? readN : t === 'notes' ? noteN : unread;
    });
  }

  function setNote(key, text) {
    text = (text || '').trim();
    if (text) notes[key] = text;
    else delete notes[key];
    saveLS(LS_NOTES, notes);
    computeCounts();
    renderNavFoot();
    updateNoteIndicators();
    refreshLibraryTabCounts();
    if (state.view && state.view.type === 'paper') {
      var dt = $('#dtitle');
      if (dt) dt.textContent = (findPaper(key) || {}).title || dt.textContent;
    }
  }

  function updateNoteIndicators() {
    $$('.actbtn[data-note]').forEach(function (btn) {
      var key = btn.getAttribute('data-note');
      var has = !!(notes[key] && notes[key].trim());
      btn.classList.toggle('on', has);
      btn.innerHTML = '笔记' + (has ? '<span class="dotn"></span>' : '');
    });
  }

  function toggleNoteEditor(key) {
    state.openNote = state.openNote === key ? null : key;
    $$('[data-note-editor]').forEach(function (box) {
      var on = box.getAttribute('data-note-editor') === state.openNote;
      box.classList.toggle('on', on);
      if (on) {
        var ta = box.querySelector('textarea');
        if (ta) { try { ta.focus(); } catch (e) {} }
      }
    });
  }

  function saveNoteFromBtn(btn) {
    var key = btn.getAttribute('data-note-save');
    var box = btn.closest('[data-note-editor]');
    var ta = box ? box.querySelector('textarea') : null;
    setNote(key, ta ? ta.value : '');
    toast('笔记已保存');
  }

  var noteTimers = {};
  function scheduleNoteSave(key, value) {
    if (noteTimers[key]) clearTimeout(noteTimers[key]);
    noteTimers[key] = setTimeout(function () {
      setNote(key, value);
    }, 700);
  }

  /* ────────────────────────────── 全局搜索 ────────────────────────────── */
  function hl(text, q) {
    var s = String(text == null ? '' : text);
    if (!q) return esc(s);
    var ql = q.toLowerCase();
    var sl = s.toLowerCase();
    var out = '', i = 0, guard = 0;
    while (guard++ < 200) {
      var j = sl.indexOf(ql, i);
      if (j < 0) { out += esc(s.slice(i)); break; }
      out += esc(s.slice(i, j)) + '<mark>' + esc(s.slice(j, j + ql.length)) + '</mark>';
      i = j + ql.length;
      if (i >= s.length) { out += esc(s.slice(i)); break; }
    }
    return out;
  }

  function pushGroup(groups, items, title, list, make, limit) {
    if (!list.length) return;
    var rows = [];
    list.slice(0, limit).forEach(function (x) {
      var row = make(x);
      if (!row) return;
      var idx = items.length;
      items.push(row.view);
      rows.push({ i: idx, label: row.label, sub: row.sub });
    });
    if (rows.length) groups.push({ title: title, total: list.length, rows: rows });
  }

  function runSearch(raw) {
    var box = $('#gresults');
    if (!box) return;
    var q = (raw || '').trim();
    if (!q) { closeSearch(); return; }
    var ql = q.toLowerCase();
    var groups = [], items = [];

    var orgHits = searchIndex.organs.filter(function (x) { return x.hay.indexOf(ql) >= 0; });
    pushGroup(groups, items, '器官', orgHits, function (x) {
      var o = organById[x.id];
      var genes = toArr(o.genes).filter(function (g) { return g.toLowerCase().indexOf(ql) >= 0; });
      return {
        view: { type: 'organ', id: x.id },
        label: x.name,
        sub: genes.length ? ('基因 ' + genes.slice(0, 3).join('、')) : (o.en || '')
      };
    }, 6);

    var dirHits = searchIndex.dirs.filter(function (x) { return x.hay.indexOf(ql) >= 0; });
    pushGroup(groups, items, '研究方向', dirHits, function (x) {
      var d = dirById[x.id];
      return { view: { type: 'dir', id: x.id }, label: x.name, sub: d.en || '' };
    }, 5);

    var markHits = searchIndex.marks.filter(function (x) { return x.hay.indexOf(ql) >= 0; });
    pushGroup(groups, items, '生物标志物', markHits, function (x) {
      var m = markById[x.id];
      return { view: { type: 'mark', id: x.id }, label: x.name, sub: (m.cat || '') + (m.en ? ' · ' + m.en : '') };
    }, 8);

    var polMap = {};
    papers.forEach(function (p) {
      if (!p.polName || p.polName === '—') return;
      if (p.polName.toLowerCase().indexOf(ql) >= 0) polMap[p.polName] = (polMap[p.polName] || 0) + 1;
    });
    var polList = Object.keys(polMap).map(function (k) { return { name: k, n: polMap[k] }; })
      .sort(function (a, b) { return b.n - a.n; });
    pushGroup(groups, items, '污染物', polList, function (x) {
      return {
        view: { type: 'pollutant', id: x.name },
        label: x.name,
        sub: x.n + ' 篇文献'
      };
    }, 5);

    var paperHits = searchIndex.papers.filter(function (x) { return x.hay.indexOf(ql) >= 0; });
    pushGroup(groups, items, '文献标题', paperHits, function (x) {
      var p = findPaper(x.key);
      return {
        view: { type: 'paper', id: x.key },
        label: x.title,
        sub: [(p.author1 || ''), (p.journal || ''), (p.year || '')].filter(Boolean).join(' · ')
      };
    }, 8);

    var html = groups.length ? groups.map(function (g) {
      return '<div class="rgroup"><h4>' + esc(g.title) + '<em>'
        + (g.total > g.rows.length ? (g.rows.length + ' / ' + g.total) : g.total)
        + '</em></h4>'
        + g.rows.map(function (r) {
            return '<button class="ritem" type="button" role="option" data-si="' + r.i + '">'
              + '<b>' + hl(r.label, q) + '</b><span>' + esc(r.sub) + '</span><span class="go">↵</span></button>';
          }).join('')
        + '</div>';
    }).join('') : '';

    html += '<div class="rfoot">' + (groups.length
      ? '↑↓ 选择 · Enter 打开 · Esc 关闭'
      : '没有匹配结果，试试基因名（如 cyp1a）、器官名或污染物。') + '</div>';

    box.innerHTML = html;
    box.classList.add('on');
    state.searchItems = items;
    state.searchSel = -1;
  }

  function closeSearch() {
    var box = $('#gresults');
    if (box) { box.classList.remove('on'); box.innerHTML = ''; }
    state.searchItems = [];
    state.searchSel = -1;
  }

  function moveSearchSel(dir) {
    var n = state.searchItems.length;
    if (!n) return;
    state.searchSel = state.searchSel < 0
      ? (dir > 0 ? 0 : n - 1)
      : (state.searchSel + dir + n) % n;
    $$('#gresults .ritem').forEach(function (el) {
      el.classList.toggle('sel', Number(el.getAttribute('data-si')) === state.searchSel);
    });
    var cur = $('#gresults .ritem.sel');
    if (cur && cur.scrollIntoView) { try { cur.scrollIntoView({ block: 'nearest' }); } catch (e) {} }
  }

  function activateSearchItem(idx) {
    var it = state.searchItems[idx];
    if (!it) return;
    closeSearch();
    var gi = $('#gsearch');
    if (gi) gi.blur();
    setView(it);
  }

  /* ────────────────────────────── 响应式 / 面板 ────────────────────────────── */
  function openAside() {
    var a = $('#detail'), bd = $('#backdrop');
    if (!a) return;
    if (window.innerWidth < 1100) {
      a.classList.add('open');
      a.classList.remove('collapsed');
      if (bd) bd.classList.add('on');
    }
    updateDetailToggle();
  }

  function closeAside() {
    var a = $('#detail'), bd = $('#backdrop');
    if (a) a.classList.remove('open');
    if (bd) bd.classList.remove('on');
    updateDetailToggle();
  }

  function updateDetailToggle() {
    var a = $('#detail'), b = $('#detailToggle');
    if (!a || !b) return;
    var open = window.innerWidth < 1100 ? a.classList.contains('open') : !a.classList.contains('collapsed');
    b.setAttribute('aria-expanded', String(open));
  }

  function updateNavToggle() {
    var nav = $('#nav'), btn = $('#navToggle');
    if (!nav || !btn) return;
    var expanded = !nav.classList.contains('collapsed');
    btn.setAttribute('aria-expanded', String(expanded));
    btn.title = expanded ? '收起导航' : '展开导航';
    btn.setAttribute('aria-label', btn.title);
  }

  function syncResponsive() {
    var w = window.innerWidth;
    var nav = $('#nav');
    if (!nav) return;
    if (w < 820) {
      if (!nav.classList.contains('open')) nav.classList.add('collapsed');
    } else {
      nav.classList.remove('open');
      nav.classList.remove('collapsed');
    }
    if (w >= 1100) closeAside();
    if (w < 820) closeAside();
    updateNavToggle();
    updateDetailToggle();
  }

  /* ────────────────────────────── 互动事件 ────────────────────────────── */
  function onClick(e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var q = function (sel) { return t.closest(sel); };

    if (!t.closest('.searchwrap')) closeSearch();

    var si = q('[data-si]');
    if (si) { activateSearchItem(Number(si.getAttribute('data-si'))); return; }

    var nav = q('[data-nav]');
    if (nav) { navTo(nav.getAttribute('data-nav')); return; }

    var grp = q('[data-grp]');
    if (grp) {
      if (window.innerWidth < 820) {
        var navEl = $('#nav');
        if (navEl) { navEl.classList.add('open'); navEl.classList.remove('collapsed'); }
      }
      var g = grp.getAttribute('data-grp');
      var opening = !state.expanded[g];
      Object.keys(state.expanded).forEach(function (k) { state.expanded[k] = false; });
      state.expanded[g] = opening;
      /* 展开分组时若当前不在该类视图，顺带进入该类第一个条目，保证“点导航有内容” */
      if (opening && state.view && state.view.type !== g) {
        var firsts = {
          organ: organs[0] && organs[0].id,
          dir: directions[0] && directions[0].id,
          mark: marks[0] && marks[0].id,
          stage: stages[0] && stages[0].id
        };
        if (firsts[g]) { setView({ type: g, id: firsts[g] }); return; }
      }
      renderNav();
      return;
    }

    var org = q('[data-organ]');
    if (org) { e.preventDefault(); setView({ type: 'organ', id: org.getAttribute('data-organ') }); return; }

    var dir = q('[data-dir]');
    if (dir) { e.preventDefault(); setView({ type: 'dir', id: dir.getAttribute('data-dir') }); return; }

    var mark = q('[data-mark]');
    if (mark) { e.preventDefault(); setView({ type: 'mark', id: mark.getAttribute('data-mark') }); return; }

    var stage = q('[data-stage]');
    if (stage) { e.preventDefault(); setView({ type: 'stage', id: stage.getAttribute('data-stage') }); return; }

    var pol = q('[data-pol]');
    if (pol) { e.preventDefault(); setView({ type: 'pollutant', id: pol.getAttribute('data-pol') }); return; }

    var po = q('[data-paper-open]');
    if (po) { e.preventDefault(); setView({ type: 'paper', id: po.getAttribute('data-paper-open') }); return; }

    var rd = q('[data-read]');
    if (rd) { e.preventDefault(); toggleRead(rd.getAttribute('data-read')); return; }

    var nt = q('[data-note]');
    if (nt) { e.preventDefault(); toggleNoteEditor(nt.getAttribute('data-note')); return; }

    var ns = q('[data-note-save]');
    if (ns) { e.preventDefault(); saveNoteFromBtn(ns); return; }

    var rf = q('[data-readfilter]');
    if (rf) {
      var val = rf.getAttribute('data-readfilter');
      state.filters.read = state.filters.read === val ? '' : val;
      renderDetail();
      return;
    }

    var tg = q('[data-toggle]');
    if (tg) {
      if (tg.getAttribute('data-toggle') === 'review') {
        state.filters.review = !state.filters.review;
        renderDetail();
      }
      return;
    }

    var tab = q('[data-tab]');
    if (tab) {
      state.libraryTab = tab.getAttribute('data-tab');
      renderDetail();
      return;
    }

    var ex = q('[data-export]');
    if (ex) { e.preventDefault(); doExport(ex.getAttribute('data-export')); return; }

    var act = q('[data-act]');
    if (act) {
      var a = act.getAttribute('data-act');
      if (a === 'reset-filters') { resetFilters(); return; }
      if (a === 'retry-anatomy') { initAnatomy(); return; }
      return;
    }

    var dv = q('[data-view]');
    if (dv) { setAnatomyView(dv.getAttribute('data-view')); return; }

    var srch = q('[data-search]');
    if (srch) {
      e.preventDefault();
      var term = srch.getAttribute('data-search');
      var gi = $('#gsearch');
      if (gi) { gi.value = term; gi.focus(); runSearch(term); }
      return;
    }
  }

  function resetFilters() {
    var sort = state.filters.sort || 'rel';
    state.filters = { q: '', pol: '', dir: '', stage: '', gen: '', review: false, read: '', sort: sort };
    renderDetail();
    toast('筛选已清空');
  }

  function onDscrollChange(e) {
    var sel = e.target;
    if (!sel || !sel.getAttribute) return;
    var key = sel.getAttribute('data-filter');
    if (!key) return;
    state.filters[key] = sel.value;
    renderPaperList();
  }

  function onDscrollInput(e) {
    var t = e.target;
    if (!t || !t.getAttribute) return;
    if (t.id === 'fq') {
      state.filters.q = t.value;
      renderPaperList();
      return;
    }
    if (t.getAttribute('data-note-input') != null) {
      var box = t.closest('[data-note-editor]');
      if (box) scheduleNoteSave(box.getAttribute('data-note-editor'), t.value);
    }
  }

  function onDscrollFocusOut(e) {
    var t = e.target;
    if (!t || t.getAttribute('data-note-input') == null) return;
    var box = t.closest('[data-note-editor]');
    if (box) setNote(box.getAttribute('data-note-editor'), t.value);
  }

  /* ────────────────────────────── 弹窗 / toast ────────────────────────────── */
  var toastTimer = null;
  function toast(msg) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('on');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('on'); }, 2200);
  }

  function openAbout() {
    var body = $('#modalBody');
    if (!body) return;
    var mt0 = $('#mTitle');
    if (mt0) mt0.textContent = '关于本图谱';
    var unread = papers.filter(function (p) { return readStatus[p.key] !== 'read'; }).length;
    var stats = [
      [organs.length, '器官'], [directions.length, '研究方向'], [marks.length, '生物标志物'],
      [stages.length, '生命周期阶段'], [papers.length, '收录文献'], [unread, '待读'],
      [counts.read, '已读'], [counts.notes, '有笔记']
    ];
    body.innerHTML = '<p>本页把斑马鱼（<i>Danio rerio</i>）的器官解剖、研究方向、生物标志物、'
      + '生命周期与文献证据放在同一屏内，完全离线运行。</p>'
      + '<div class="mstats">' + stats.map(function (s) {
          return '<div class="mstat"><div class="v">' + s[0] + '</div><div class="k">' + esc(s[1]) + '</div></div>';
        }).join('') + '</div>'
      + '<p>已读与笔记保存在本机浏览器（<span class="mono">' + LS_READ + '</span> / <span class="mono">'
      + LS_NOTES + '</span>），不会上传；页面不发起任何网络请求，PubMed / DOI 链接需要手动点击。</p>'
      + '<ul>'
      + '<li>⌘K / Ctrl+K 打开全局搜索，↑↓ 选择、Enter 跳转。</li>'
      + '<li>点击解剖图中的器官，或左栏条目，右栏会显示对应详情与文献。</li>'
      + '<li>时间轴切换 ' + stages.length + ' 个生命阶段，解剖图会随之联动。</li>'
      + '<li>右栏可按关键词、污染物大类、方向、阶段、代际、综述、已读筛选，并切换排序。</li>'
      + '<li>文献卡片可标记已读、展开笔记；数据来自本地两个数据文件。</li>'
      + '</ul>'
      + '<div class="mfoot">数据：' + organs.length + ' 个器官 / ' + directions.length + ' 个方向 / '
      + marks.length + ' 个标志物 / ' + stages.length + ' 个阶段 / ' + papers.length + ' 篇文献 · 更新至 '
      + esc(lastUpdateText()) + '。解剖图由 <span class="mono">anatomy.js</span>（window.Anatomy）提供，'
      + '所有计数按当前结构数据实时计算。</div>';
    var modal = $('#modal');
    if (modal) modal.hidden = false;
    setTimeout(function () { var c = $('#modalClose'); if (c) { try { c.focus(); } catch (e) {} } }, 0);
  }

  function closeModal() {
    var m = $('#modal');
    if (m) m.hidden = true;
  }

  /* ────────────────────────────── 绑定 ────────────────────────────── */
  function bindEvents() {
    document.addEventListener('click', onClick);

    var gi = $('#gsearch');
    if (gi) {
      gi.addEventListener('input', function () { runSearch(this.value); });
      gi.addEventListener('focus', function () { if (this.value.trim()) runSearch(this.value); });
      gi.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); if (!state.searchItems.length) runSearch(gi.value); moveSearchSel(1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); moveSearchSel(-1); }
        else if (e.key === 'Enter') {
          if (state.searchItems.length) { e.preventDefault(); activateSearchItem(state.searchSel < 0 ? 0 : state.searchSel); }
        } else if (e.key === 'Escape') { closeSearch(); }
      });
    }

    var scroll = $('#dscroll');
    if (scroll) {
      scroll.addEventListener('change', onDscrollChange);
      scroll.addEventListener('input', onDscrollInput);
      scroll.addEventListener('focusout', onDscrollFocusOut);
    }

    var about = $('#aboutBtn');
    if (about) about.addEventListener('click', openAbout);
    var mc = $('#modalClose');
    if (mc) mc.addEventListener('click', closeModal);
    var modal = $('#modal');
    if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });

    var dt = $('#detailToggle');
    if (dt) dt.addEventListener('click', function () {
      var a = $('#detail');
      if (!a) return;
      if (window.innerWidth < 1100) {
        if (a.classList.contains('open')) closeAside(); else openAside();
      } else {
        a.classList.toggle('collapsed');
        updateDetailToggle();
      }
    });

    var dc = $('#detailClose');
    if (dc) dc.addEventListener('click', function () {
      var a = $('#detail');
      if (!a) return;
      if (window.innerWidth < 1100) closeAside();
      else { a.classList.toggle('collapsed'); updateDetailToggle(); }
    });

    /* 收起状态下的竖向“详情”书脊：点一下把右栏拉回来 */
    var rail = document.querySelector('#detail .railt');
    if (rail) {
      var expandAside = function () {
        var a = $('#detail');
        if (!a) return;
        a.classList.remove('collapsed');
        if (window.innerWidth < 1100) openAside();
        updateDetailToggle();
      };
      rail.addEventListener('click', expandAside);
      rail.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); expandAside(); }
      });
    }

    var nt = $('#navToggle');
    if (nt) nt.addEventListener('click', function () {
      var nav = $('#nav');
      if (!nav) return;
      if (window.innerWidth < 820) {
        var open = nav.classList.toggle('open');
        nav.classList.toggle('collapsed', !open);
      } else {
        nav.classList.toggle('collapsed');
      }
      updateNavToggle();
    });

    var bd = $('#backdrop');
    if (bd) bd.addEventListener('click', closeAside);

    var lb = $('#btnLabels');
    if (lb) lb.addEventListener('click', function () {
      state.labels = !state.labels;
      lb.classList.toggle('on', state.labels);
      lb.setAttribute('aria-pressed', String(state.labels));
      var sp = lb.querySelector('span:last-child');
      if (sp) sp.textContent = '标签 ' + (state.labels ? '开' : '关');
      if (state.anatomyReady) {
        try { if (typeof window.Anatomy.setLabels === 'function') window.Anatomy.setLabels(state.labels); } catch (e) {}
      }
    });

    var gb = $('#btnGhost');
    if (gb) gb.addEventListener('click', function () {
      state.ghost = !state.ghost;
      gb.classList.toggle('on', state.ghost);
      gb.setAttribute('aria-pressed', String(state.ghost));
      var sp = gb.querySelector('span:last-child');
      if (sp) sp.textContent = '半透明 ' + (state.ghost ? '开' : '关');
      if (state.anatomyReady) {
        try { if (typeof window.Anatomy.setGhost === 'function') window.Anatomy.setGhost(state.ghost); } catch (e) {}
      }
    });

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        var input = $('#gsearch');
        if (input) { input.focus(); input.select(); }
      } else if (e.key === 'Escape') {
        closeSearch();
        closeModal();
        if (window.innerWidth < 1100) closeAside();
      } else if (e.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT'
                 && document.activeElement.tagName !== 'TEXTAREA') {
        var input2 = $('#gsearch');
        if (input2) { e.preventDefault(); input2.focus(); }
      }
    });

    var rzTimer = null;
    window.addEventListener('resize', function () {
      if (rzTimer) clearTimeout(rzTimer);
      rzTimer = setTimeout(syncResponsive, 120);
    });
  }

  /* ────────────────────────────── 启动 ────────────────────────────── */
  function boot() {
    initData();
    computeCounts();
    state.view = hashToView(location.hash) || defaultView();
    if (state.view.type === 'stage') state.stageId = state.view.id;
    bindEvents();
    window.addEventListener('hashchange', onHashChange);
    renderAll();
    syncHash();
    state.ready = true;
    initAnatomy();
    syncResponsive();
    var kbd = $('.kbd');
    if (kbd && !/Mac|iPhone|iPad/.test(navigator.platform || '')) kbd.textContent = 'Ctrl K';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
