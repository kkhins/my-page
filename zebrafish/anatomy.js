/*!
 * anatomy.js — 斑马鱼三视图 SVG 解剖图（window.Anatomy）
 *
 * 纯手写 SVG：无外部资源、无第三方库、无网络请求、无定时器。
 * 器官颜色与名称一律从 window.STRUCT.organs 读取，本文件不重复维护。
 *
 * 三个视图：
 *   side   成鱼侧视（默认）
 *   cross  躯干中段横截面
 *   embryo 胚胎侧位（默认 48 hpf，随 setStage 改变）
 *
 * 结构层级约定：
 *   [data-organ="<organId>"]  可交互器官，颜色取自 STRUCT
 *   [data-struct="<name>"]    无对应器官的解剖结构（鳍、脊柱、体节、卵膜、卵黄……）
 */
(function (global) {
    'use strict';

    var NS = 'http://www.w3.org/2000/svg';
    var VW = 1000, VH = 600;

    var state = {
        view: 'side',
        labels: true,
        ghost: false,
        selected: null,
        hover: null,
        stage: 'pha'
    };

    var svgs = {};
    var host = null;
    var cb = { onSelect: null, onHover: null };
    var built = false;
    var cssDone = false;

    /* ============================ 数据访问 ============================ */

    function orgList() {
        return (global.STRUCT && global.STRUCT.organs) || [];
    }

    function organById(id) {
        var a = orgList(), i;
        for (i = 0; i < a.length; i++) {
            if (a[i] && a[i].id === id) { return a[i]; }
        }
        return null;
    }

    function colorOf(id) {
        var o = organById(id);
        return (o && o.color) || '#8FA6A3';
    }

    function nameOf(id) {
        var o = organById(id);
        return (o && o.name) || id;
    }

    function stageList() {
        return (global.STRUCT && global.STRUCT.stages) || [];
    }

    function stageById(id) {
        var a = stageList(), i;
        for (i = 0; i < a.length; i++) {
            if (a[i] && a[i].id === id) { return a[i]; }
        }
        return null;
    }

    function esc(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /* ============================ 小工具 ============================ */

    function parseSvg(str) {
        var d = document.createElement('div');
        d.innerHTML = str;
        return d.firstElementChild;
    }

    function push(arr, s) { arr.push(s); }

    /* 器官交互组 */
    function orgG(id, inner) {
        return '<g class="zfa-org" data-organ="' + id + '" role="button" aria-label="' + esc(nameOf(id)) + '">' + inner + '</g>';
    }

    /* 器官名标签：引线 + 锚点 + 双 <text>（底层描边、顶层填充）
       用两层文字代替 paint-order，任何 SVG 渲染器都能得到清晰的描边字 */
    function txtPair(cls, x, y, size, fill, halo, text) {
        var t = esc(text);
        var geo = 'x="' + x + '" y="' + y + '" dy="0.35em" text-anchor="middle"';
        return '<text class="' + cls + '-halo" ' + geo + ' fill="none" stroke="' + halo +
            '" stroke-width="' + (size > 11 ? 3 : 2.8) + '" stroke-linejoin="round" font-size="' + size + '">' + t + '</text>' +
            '<text class="' + cls + '-txt" ' + geo + ' fill="' + fill + '" font-size="' + size + '">' + t + '</text>';
    }

    function lbl(id, x, y, ax, ay, extra) {
        var col = colorOf(id);
        return '<g class="zfa-lbl" data-for="' + id + '">' +
            '<line class="zfa-lead" x1="' + ax + '" y1="' + ay + '" x2="' + x + '" y2="' + y + '" ' +
            'stroke="' + col + '" stroke-width="1" opacity=".55"/>' +
            '<circle cx="' + ax + '" cy="' + ay + '" r="2.6" fill="' + col + '"/>' +
            txtPair('zfa-lbl', x, y, 11.5, '#DCEBE8', '#0A1A1E', nameOf(id) + (extra || '')) +
            '</g>';
    }

    /* 结构标签（无对应器官） */
    function slbl(text, x, y, ax, ay) {
        return '<g class="zfa-lbl zfa-lbl-str">' +
            '<line class="zfa-lead" x1="' + ax + '" y1="' + ay + '" x2="' + x + '" y2="' + y + '" ' +
            'stroke="#8FB3B6" stroke-width="1" opacity=".5"/>' +
            txtPair('zfa-lbl', x, y, 10.5, '#B7CDCA', '#0A1A1E', text) +
            '</g>';
    }

    /* 方向标记 */
    function dirMark(text, x, y) {
        return '<text class="zfa-dirmark" x="' + x + '" y="' + y + '" dy="0.35em" text-anchor="middle" ' +
            'fill="#6F8C90" font-size="11" letter-spacing="1.6">' + esc(text) + '</text>';
    }

    function svgOpen(view, aria) {
        return '<svg xmlns="' + NS + '" viewBox="0 0 ' + VW + ' ' + VH + '" class="zfa-svg" data-view="' + view +
            '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + esc(aria) + '">';
    }

    /* ============================ 样式 ============================ */

    var CSS = [
        '.zfa-svg{display:block;width:100%;height:100%;max-height:100%;overflow:visible;',
        '  font-family:system-ui,-apple-system,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;',
        '  -webkit-user-select:none;user-select:none}',
        '.zfa-svg [data-organ]{cursor:pointer;transition:opacity .16s ease}',
        '.zfa-svg .zfa-org:focus{outline:none}',
        '.zfa-svg .zfa-hl{filter:brightness(1.32) saturate(1.15)}',
        '.zfa-svg .zfa-sel{filter:brightness(1.18) drop-shadow(0 0 5px rgba(240,250,248,.65))}',
        '.zfa-svg.zfa-ghost [data-organ]:not(.zfa-hl):not(.zfa-sel){opacity:.16}',
        '.zfa-svg.zfa-ghost [data-struct]{opacity:.55}',
        '.zfa-lbl{pointer-events:none}',
        '.zfa-lbl-halo{fill:none;stroke:#0A1A1E;stroke-linejoin:round}',
        '.zfa-lbl-txt{fill:#DCEBE8;letter-spacing:.02em}',
        '.zfa-lead{fill:none;stroke-width:1;opacity:.55}',
        '.zfa-svg.zfa-nolabels .zfa-lbl{display:none}',
        '.zfa-svg.zfa-nolabels .zfa-lbl.zfa-lbl-hl{display:block}',
        '.zfa-lbl-hl .zfa-lbl-txt{fill:#FFFFFF;font-weight:700}',
        '.zfa-lbl-hl .zfa-lbl-halo{stroke-width:3.8px}',
        '.zfa-lbl-hl .zfa-lead{stroke-width:1.8;opacity:1}',
        '.zfa-lbl-str .zfa-lbl-txt{fill:#B7CDCA}',
        '.zfa-lbl-str .zfa-lead{opacity:.5;stroke:#8FB3B6}',
        '.zfa-dirmark{font-size:11px;fill:#6F8C90;letter-spacing:.16em;pointer-events:none}',
        '.zfa-note-halo{fill:none;stroke:#0A1A1E;stroke-linejoin:round}',
        '.zfa-note2-halo{fill:none;stroke:#0A1A1E;stroke-linejoin:round}'
    ].join('\n');

    function injectCSS() {
        if (cssDone) { return; }
        var old = document.getElementById('zfa-style');
        if (old) { cssDone = true; return; }
        var s = document.createElement('style');
        s.id = 'zfa-style';
        s.type = 'text/css';
        s.appendChild(document.createTextNode(CSS));
        (document.head || document.documentElement).appendChild(s);
        cssDone = true;
    }

    /* ============================ 侧视图（成鱼） ============================ */

    var BODY_SIDE = 'M 62,296 C 66,278 76,262 92,250 C 112,236 136,228 164,224 C 200,218 240,214 288,210 ' +
        'C 360,205 460,204 552,210 C 630,216 700,228 762,248 C 792,258 814,272 830,286 L 834,300 L 830,314 ' +
        'C 814,328 792,340 762,350 C 700,370 630,381 552,385 C 460,389 360,387 288,381 C 240,377 200,371 164,363 ' +
        'C 136,357 112,347 92,333 C 76,321 66,310 62,304 Z';

    function buildSide() {
        var c = {};
        ['li', 'he', 'br', 'gi', 'gu', 'go', 'ki', 'll', 'ey', 'th', 'mu'].forEach(function (k) { c[k] = colorOf(k); });

        var o = [];
        push(o, svgOpen('side', '斑马鱼成鱼侧视解剖图'));
        push(o, '<defs>');
        push(o, '<radialGradient id="zfa-side-bg" cx="50%" cy="46%" r="64%">' +
            '<stop offset="0%" stop-color="#16343A"/><stop offset="100%" stop-color="#0A191D"/></radialGradient>');
        push(o, '<clipPath id="zfa-side-clip"><path d="' + BODY_SIDE + '"/></clipPath>');
        push(o, '</defs>');

        push(o, '<rect x="0" y="0" width="1000" height="600" fill="url(#zfa-side-bg)"/>');
        push(o, '<g transform="translate(-40,-15) scale(1.08)">');

        /* 水色装饰 */
        var bubbles = [[128, 118, 4], [176, 86, 2.4], [858, 132, 3.6], [906, 196, 2.2],
            [74, 462, 3], [932, 470, 2.6], [762, 528, 3], [232, 540, 2]];
        push(o, '<g data-struct="bubbles" opacity=".5">');
        bubbles.forEach(function (b) {
            push(o, '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="' + b[2] + '" fill="none" stroke="#4C7F89" stroke-width="1"/>');
        });
        push(o, '</g>');

        /* 鳍（先画，被鱼体压住基部） */
        push(o, '<g data-struct="fins" fill="#255A66" stroke="#5E939C" stroke-width="1.2" stroke-linejoin="round">');
        /* 尾鳍（叉形） */
        push(o, '<path d="M 832,284 C 858,258 886,236 916,222 C 912,254 902,280 892,300 C 900,316 912,342 922,372 C 892,352 860,326 832,316 Z"/>');
        /* 背鳍 */
        push(o, '<path d="M 518,214 C 528,182 546,163 568,155 C 592,161 614,188 630,219 L 518,216 Z"/>');
        /* 臀鳍 */
        push(o, '<path d="M 656,372 C 666,394 680,406 698,412 C 700,392 704,376 710,360 L 662,364 Z"/>');
        /* 腹鳍 */
        push(o, '<path d="M 402,380 C 408,398 418,408 430,412 C 432,396 434,386 438,374 L 406,376 Z"/>');
        /* 脂鳍 */
        push(o, '<path d="M 648,236 C 654,224 662,218 670,218 C 672,226 672,232 672,238 Z"/>');
        push(o, '</g>');

        /* 鱼体 */
        push(o, '<path class="zfa-body" d="' + BODY_SIDE + '" fill="#173A42" stroke="#4C7F89" stroke-width="1.6"/>');

        /* 体纹（裁剪在鱼体内） */
        push(o, '<g clip-path="url(#zfa-side-clip)" data-struct="stripes" opacity=".55">');
        [250, 268, 286, 304, 322].forEach(function (y) {
            push(o, '<path d="M 56,' + y + ' C 200,' + (y - 7) + ' 400,' + (y - 9) + ' 600,' + (y - 3) +
                ' C 710,' + (y + 2) + ' 800,' + (y + 6) + ' 846,' + (y + 8) + '" fill="none" stroke="#0A1C20" stroke-width="9"/>');
        });
        push(o, '</g>');

        /* 口与鳃盖 */
        push(o, '<g data-struct="mouth"><path d="M 62,296 C 68,300 72,306 74,313" fill="none" stroke="#5E939C" stroke-width="2" stroke-linecap="round"/></g>');
        push(o, '<g data-struct="operculum"><path d="M 168,240 C 186,248 194,268 192,294 C 190,318 182,338 168,348" fill="none" stroke="#5E939C" stroke-width="1.6" opacity=".85"/></g>');

        /* 肌肉：体节肌（myomere），鳃后缘至尾柄，V 形肌节带；画在内脏之下，不遮挡器官 */
        var myo = '', mx;
        for (mx = 214; mx <= 800; mx += 31) {
            myo += '<path d="M ' + mx + ',206 L ' + (mx - 15) + ',292 L ' + mx + ',384"/>';
        }
        push(o, orgG('mu',
            '<g clip-path="url(#zfa-side-clip)">' +
            '<rect x="206" y="196" width="612" height="200" fill="' + c.mu + '" opacity=".1"/>' +
            '<g fill="none" stroke="#7E97AB" stroke-width="1.2" opacity=".45" stroke-linejoin="round">' + myo + '</g>' +
            '</g>'));

        /* 脊柱 */
        push(o, '<g data-struct="spine">');
        push(o, '<path d="M 246,242 C 340,234 440,230 540,234 C 620,238 682,250 722,268" fill="none" stroke="#2C5058" stroke-width="13" stroke-linecap="round"/>');
        push(o, '<path d="M 246,242 C 340,234 440,230 540,234 C 620,238 682,250 722,268" fill="none" stroke="#5E8F98" stroke-width="13" stroke-linecap="round" stroke-dasharray="2 10" opacity=".65"/>');
        push(o, '</g>');

        /* 胸鳍 */
        push(o, '<g data-struct="pectoral"><path d="M 204,296 C 224,299 242,312 253,331 C 251,338 244,341 236,338 C 220,332 207,315 202,303 Z" fill="#2A5C67" stroke="#5B909A" stroke-width="1.2" opacity=".92"/>' +
            '<path d="M 210,302 C 222,310 234,322 241,333" fill="none" stroke="#4E838D" stroke-width="1" opacity=".7"/></g>');

        /* ---- 器官 ---- */

        /* 肾：头肾（腹腔前背侧的膨大）+ 中肾（沿脊柱腹侧后行的细长带） */
        push(o, orgG('ki',
            '<path d="M 251,267 C 251,255 262,249 279,248 C 297,247 312,251 326,257 ' +
            'C 390,252 464,251 538,254 C 602,257 652,265 682,277 C 686,281 686,285 680,286 ' +
            'C 648,274 600,266 538,263 C 464,260 390,261 326,266 ' +
            'C 312,273 296,281 279,281 C 262,281 251,276 251,267 Z" fill="' + c.ki + '" stroke="#12210F" stroke-width="1"/>' +
            '<path d="M 264,258 C 284,252 306,251 326,254" fill="none" stroke="#CFE3CB" stroke-width="1.2" opacity=".3"/>' +
            '<path d="M 300,272 C 380,266 470,264 560,268" fill="none" stroke="#CFE3CB" stroke-width="1" opacity=".2"/>'));

        /* 鳔：鲤科为前后两室——前室卵圆、后室细长，之间以连接管（ductus communicans）相通；
           位于腹腔背侧中线，肾的腹侧、肠的背侧。含气，画成半透明。
           画在性腺之前：性腺成对、位于体侧，侧视时比中线的鳔更表浅。
           非 11 个器官之一，作为结构绘制，不可点击。 */
        push(o, '<g data-struct="swimbladder" opacity=".72">' +
            '<ellipse cx="424" cy="270" rx="44" ry="23" fill="#2E6B77" stroke="#7FC4CE" stroke-width="1.5"/>' +
            '<path d="M 480,270 C 532,263 596,263 650,270 C 676,274 692,279 698,284 ' +
            'C 692,290 676,295 650,299 C 596,306 532,306 480,299 C 472,294 472,276 480,270 Z" ' +
            'fill="#2E6B77" stroke="#7FC4CE" stroke-width="1.5"/>' +
            '<path d="M 468,274 L 480,274 M 468,286 L 480,286" stroke="#7FC4CE" stroke-width="1.5" fill="none"/>' +
            '<ellipse cx="412" cy="262" rx="17" ry="6" fill="#BFE4EA" opacity=".26"/>' +
            '<ellipse cx="552" cy="276" rx="46" ry="7" fill="#BFE4EA" opacity=".2"/>' +
            '</g>');

        /* 性腺：沿腹腔背侧纵向延伸，成对 */
        push(o, orgG('go',
            '<path d="M 336,296 C 400,284 470,280 546,282 C 610,284 664,290 692,298 C 694,306 694,312 690,316 ' +
            'C 660,306 610,300 546,298 C 470,296 400,300 336,312 Z" fill="' + c.go + '" stroke="#211B33" stroke-width="1" opacity=".96"/>' +
            '<path d="M 348,308 C 408,298 474,294 544,296 C 606,298 656,304 682,312" fill="none" stroke="' + c.go + '" stroke-width="4" opacity=".5" stroke-linecap="round"/>' +
            '<path d="M 356,304 C 420,292 490,288 560,290" fill="none" stroke="#D9D3F3" stroke-width="1" opacity=".26"/>'));

        /* 肝：腹腔前部、心脏后方 */
        push(o, orgG('li',
            '<path d="M 268,320 C 268,302 282,296 302,294 C 330,292 356,298 370,312 C 384,326 384,344 372,358 ' +
            'C 354,372 320,376 296,368 C 276,360 268,340 268,320 Z" fill="' + c.li + '" stroke="#241207" stroke-width="1"/>' +
            '<path d="M 292,306 C 320,302 348,310 358,326" fill="none" stroke="#F3DCC4" stroke-width="1.1" opacity=".26"/>' +
            '<path d="M 288,346 C 310,350 336,350 356,342" fill="none" stroke="#6B3A18" stroke-width="1" opacity=".5"/>'));

        /* 肠：腹腔中部盘曲 */
        var gutD = 'M 376,306 C 400,290 430,300 432,322 C 434,344 414,358 394,350 C 378,344 376,326 390,318 ' +
            'C 406,308 432,316 444,334 C 458,354 490,358 512,342 C 534,326 560,312 580,300';
        push(o, orgG('gu',
            '<path d="' + gutD + '" fill="none" stroke="' + c.gu + '" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>' +
            '<path d="' + gutD + '" fill="none" stroke="#4A2410" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>'));

        /* 心脏：鳃后方腹侧，围心腔 */
        push(o, orgG('he',
            '<path d="M 230,320 C 228,306 238,298 250,298 C 262,298 272,308 274,322 C 276,334 266,342 254,340 ' +
            'C 240,338 232,332 230,320 Z" fill="' + c.he + '" stroke="#2A1015" stroke-width="1"/>' +
            '<path d="M 250,302 C 262,306 268,314 268,324" fill="none" stroke="#F7DDE1" stroke-width="1.1" opacity=".38"/>' +
            '<path d="M 272,314 C 282,310 290,304 296,298" fill="none" stroke="' + c.he + '" stroke-width="3" opacity=".5" stroke-linecap="round"/>'));

        /* 鳃：头后、胸鳍前的 4 对鳃弓，每弓带一列鳃丝（侧视透过鳃盖示意位置） */
        var gillFil = function (x, y, dy, n, len) {
            var s = '', i, t, xx, yy;
            for (i = 0; i < n; i++) {
                t = i / (n - 1);
                xx = x + t * 3.5;
                yy = y + t * dy;
                s += '<line x1="' + xx.toFixed(1) + '" y1="' + yy.toFixed(1) +
                    '" x2="' + (xx + len).toFixed(1) + '" y2="' + (yy - len * 0.62).toFixed(1) + '"/>';
            }
            return s;
        };
        var gIll = '';
        [[194, 253], [199, 264], [204, 275], [209, 286]].forEach(function (p, i) {
            gIll += '<path d="M ' + p[0] + ',' + p[1] + ' C ' + (p[0] + 6) + ',' + (p[1] + 11) + ' ' +
                (p[0] + 8) + ',' + (p[1] + 26) + ' ' + (p[0] + 7) + ',' + (p[1] + 39) + '" ' +
                'fill="none" stroke="' + c.gi + '" stroke-width="2.6" stroke-linecap="round" opacity="' + (0.95 - i * 0.09).toFixed(2) + '"/>';
            gIll += '<g stroke="' + c.gi + '" stroke-width="1.3" stroke-linecap="round" opacity="' + (0.9 - i * 0.1).toFixed(2) + '">' +
                gillFil(p[0] + 2, p[1] + 4, 32, 6, 6.5) + '</g>';
        });
        push(o, orgG('gi', gIll));

        /* 甲状腺：咽部腹侧中线的滤泡簇 */
        var fol = [[208, 344, 5], [220, 350, 4.4], [232, 352, 5], [244, 348, 4.4], [254, 342, 4]];
        push(o, orgG('th',
            fol.map(function (f) {
                return '<circle cx="' + f[0] + '" cy="' + f[1] + '" r="' + f[2] + '" fill="' + c.th + '" stroke="#1B1C10" stroke-width=".8"/>';
            }).join('') +
            '<path d="M 200,340 C 220,350 242,352 260,342" fill="none" stroke="' + c.th + '" stroke-width="1.2" opacity=".45" stroke-linecap="round"/>'));

        /* 脑与中枢神经：眼后方背侧，分前脑 / 中脑 / 后脑，向后续为脊髓 */
        push(o, orgG('br',
            '<ellipse cx="144" cy="250" rx="14" ry="10" fill="' + c.br + '"/>' +
            '<ellipse cx="162" cy="248" rx="10" ry="9" fill="' + c.br + '"/>' +
            '<ellipse cx="180" cy="240" rx="15" ry="12" fill="' + c.br + '"/>' +
            '<ellipse cx="202" cy="250" rx="13" ry="11" fill="' + c.br + '"/>' +
            '<path d="M 214,248 C 254,244 304,242 364,244" fill="none" stroke="' + c.br + '" stroke-width="5" stroke-linecap="round" opacity=".8"/>' +
            '<path d="M 154,242 C 160,246 160,252 154,256" fill="none" stroke="#3A2C05" stroke-width="1" opacity=".55"/>' +
            '<path d="M 172,232 C 176,238 176,244 172,248" fill="none" stroke="#3A2C05" stroke-width="1" opacity=".55"/>'));

        /* 眼与视网膜：头两侧，侧视见近侧一眼 */
        push(o, orgG('ey',
            '<circle cx="126" cy="280" r="26" fill="' + c.ey + '" stroke="#2A0F1D" stroke-width="1"/>' +
            '<circle cx="126" cy="280" r="17" fill="#F8EAF0" opacity=".3"/>' +
            '<circle cx="120" cy="279" r="9" fill="#401027"/>' +
            '<circle cx="117" cy="276" r="2.8" fill="#FFFFFF" opacity=".55"/>' +
            '<circle cx="126" cy="280" r="26" fill="none" stroke="#3A1226" stroke-width="2" opacity=".5"/>'));

        /* 侧线与内耳毛细胞：体侧神经丘一列 + 头部侧线管道 */
        var llPts = [[232, 296], [290, 296], [348, 298], [406, 300], [464, 302], [522, 306], [580, 310], [638, 314], [696, 318]];
        push(o, orgG('ll',
            '<path d="M 214,294 C 320,292 440,296 570,304 C 650,310 712,316 766,322" fill="none" stroke="' + c.ll + '" stroke-width="1.6" stroke-dasharray="5 5" opacity=".7"/>' +
            llPts.map(function (p) {
                return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + c.ll + '" stroke="#0E2A28" stroke-width=".8"/>';
            }).join('') +
            '<path d="M 96,246 C 116,238 140,238 158,244" fill="none" stroke="' + c.ll + '" stroke-width="1.4" opacity=".8"/>' +
            '<path d="M 92,306 C 112,318 140,320 158,312" fill="none" stroke="' + c.ll + '" stroke-width="1.4" opacity=".8"/>' +
            '<path d="M 74,320 C 92,330 112,332 132,328" fill="none" stroke="' + c.ll + '" stroke-width="1.4" opacity=".8"/>' +
            '<path d="M 160,250 C 176,258 186,270 188,284" fill="none" stroke="' + c.ll + '" stroke-width="1.4" opacity=".8"/>' +
            '<circle cx="106" cy="242" r="3" fill="' + c.ll + '"/>' +
            '<circle cx="136" cy="241" r="3" fill="' + c.ll + '"/>' +
            '<circle cx="102" cy="312" r="3" fill="' + c.ll + '"/>' +
            '<circle cx="132" cy="320" r="3" fill="' + c.ll + '"/>' +
            '<circle cx="92" cy="326" r="3" fill="' + c.ll + '"/>' +
            '<circle cx="176" cy="266" r="3" fill="' + c.ll + '"/>'));

        /* 标签 */
        push(o, '<g class="zfa-labels">');
        push(o, lbl('ey', 118, 196, 126, 254));
        push(o, lbl('br', 222, 166, 182, 238));
        push(o, lbl('gi', 108, 340, 196, 296));
        push(o, lbl('th', 196, 392, 232, 350));
        push(o, lbl('he', 306, 432, 252, 338));
        push(o, lbl('li', 398, 394, 332, 372));
        push(o, lbl('gu', 566, 428, 482, 352));
        push(o, lbl('ki', 432, 180, 432, 250));
        push(o, lbl('go', 604, 196, 582, 290));
        push(o, lbl('ll', 726, 224, 692, 318));
        push(o, lbl('mu', 505, 140, 526, 228, '（体节肌）'));
        push(o, slbl('鳔 前室', 350, 172, 416, 252));
        push(o, slbl('鳔 后室', 648, 160, 584, 266));
        push(o, '</g>');

        push(o, dirMark('头侧', 78, 372));
        push(o, dirMark('尾侧', 892, 410));
        push(o, '</g>');

        push(o, '</svg>');
        return o.join('\n');
    }

    /* ============================ 横截面 ============================ */

    function crossSepta() {
        var out = '';
        var cx = 500, cy = 375, R = 320;
        var angles = [];
        var d;
        for (d = 180; d <= 360; d += 18) { angles.push(d); }
        [152, 136, 120].forEach(function (a) { angles.push(a); });
        angles.forEach(function (deg) {
            var r = deg * Math.PI / 180;
            var x = (cx + R * Math.cos(r)).toFixed(1);
            var y = (cy + R * Math.sin(r)).toFixed(1);
            out += '<line x1="500" y1="375" x2="' + x + '" y2="' + y + '"/>';
        });
        return out;
    }

    function buildCross() {
        var c = {};
        ['li', 'he', 'br', 'gi', 'gu', 'go', 'ki', 'll', 'ey', 'th', 'mu'].forEach(function (k) { c[k] = colorOf(k); });

        var o = [];
        push(o, svgOpen('cross', '斑马鱼躯干横截面示意图（复合层面：肝实际位于腹腔前部）'));
        push(o, '<defs>');
        push(o, '<radialGradient id="zfa-cross-bg" cx="50%" cy="42%" r="62%">' +
            '<stop offset="0%" stop-color="#16343A"/><stop offset="100%" stop-color="#0A191D"/></radialGradient>');
        push(o, '<clipPath id="zfa-cross-clip"><ellipse cx="500" cy="302" rx="148" ry="196"/></clipPath>');
        push(o, '</defs>');

        push(o, '<rect x="0" y="0" width="1000" height="600" fill="url(#zfa-cross-bg)"/>');
        push(o, '<g transform="translate(-60,-36) scale(1.12)">');

        /* 皮肤 / 真皮 / 肌肉三层 */
        push(o, '<g data-struct="integument">');
        push(o, '<ellipse cx="500" cy="302" rx="148" ry="196" fill="#2F5E68" stroke="#5B909A" stroke-width="1.8"/>');
        push(o, '<ellipse cx="500" cy="302" rx="141" ry="189" fill="#21454E" stroke="#487985" stroke-width="1"/>');
        push(o, '<ellipse cx="500" cy="302" rx="133" ry="181" fill="#2A4E58" stroke="#3F6D77" stroke-width="1"/>');
        push(o, '</g>');

        /* 肌肉：皮肤内侧、体腔外缘的体壁肌肉环 */
        push(o, orgG('mu',
            '<ellipse cx="500" cy="302" rx="124" ry="172" fill="none" stroke="' + c.mu + '" stroke-width="26" opacity=".3"/>' +
            '<ellipse cx="500" cy="302" rx="135" ry="183" fill="none" stroke="#7E97AB" stroke-width="1" opacity=".5"/>' +
            '<ellipse cx="500" cy="302" rx="124" ry="172" fill="none" stroke="#7E97AB" stroke-width="1" opacity=".6"/>' +
            '<ellipse cx="500" cy="302" rx="113" ry="161" fill="none" stroke="#7E97AB" stroke-width="1" opacity=".5"/>'));

        /* 肌隔（放射状，被体腔盖住中央部分） */
        push(o, '<g clip-path="url(#zfa-cross-clip)" data-struct="myosepta">' +
            '<g fill="none" stroke="#3D6A74" stroke-width="1" opacity=".65">' + crossSepta() + '</g></g>');

        /* 水平隔 + 侧线神经丘 */
        push(o, '<g data-struct="horizontalseptum"><path d="M 354,304 C 420,294 580,294 646,304" fill="none" stroke="#5E939C" stroke-width="1.4" opacity=".8"/></g>');

        /* 体腔 */
        push(o, '<ellipse cx="500" cy="375" rx="98" ry="88" fill="#0A191D" stroke="#4C7F89" stroke-width="1.5"/>');

        /* 脊柱 + 神经管 + 背主动脉 */
        push(o, '<g data-struct="neuralarch" fill="none" stroke="#5E939C" stroke-width="1.2" opacity=".65">');
        push(o, '<path d="M 478,252 C 478,232 486,214 492,204"/>');
        push(o, '<path d="M 522,252 C 522,232 514,214 508,204"/>');
        push(o, '</g>');
        push(o, '<g data-struct="spinalcord">' +
            '<ellipse cx="500" cy="196" rx="16" ry="16" fill="#17333B" stroke="#5E939C" stroke-width="1.6"/>' +
            '<ellipse cx="500" cy="196" rx="6" ry="6" fill="#0A191D"/>' +
            '</g>');
        push(o, '<g data-struct="vertebra">' +
            '<ellipse cx="500" cy="248" rx="24" ry="26" fill="#2C505A" stroke="#6A9AA3" stroke-width="1.6"/>' +
            '<ellipse cx="500" cy="248" rx="7" ry="8" fill="#0A191D" opacity=".8"/>' +
            '</g>');
        push(o, '<g data-struct="dorsalaorta"><circle cx="500" cy="276" r="5" fill="#8A4149" stroke="#C4757C" stroke-width=".8"/></g>');

        /* 体腔内脏 */
        /* 肾：脊柱腹侧、体腔背壁 */
        push(o, orgG('ki',
            '<ellipse cx="474" cy="296" rx="26" ry="9" fill="' + c.ki + '" stroke="#12210F" stroke-width="1"/>' +
            '<ellipse cx="526" cy="296" rx="26" ry="9" fill="' + c.ki + '" stroke="#12210F" stroke-width="1"/>' +
            '<path d="M 448,296 L 552,296" stroke="#CFE3CB" stroke-width="1" opacity=".3"/>'));

        /* 鳔（结构，不属 10 器官） */
        push(o, '<g data-struct="swimbladder">' +
            '<ellipse cx="500" cy="328" rx="58" ry="21" fill="#3B6E78" stroke="#63A0A9" stroke-width="1.1" opacity=".85"/>' +
            '<ellipse cx="500" cy="324" rx="30" ry="9" fill="#9FD0D8" opacity=".16"/>' +
            '</g>');

        /* 性腺：肠背侧两侧 */
        push(o, orgG('go',
            '<ellipse cx="448" cy="368" rx="20" ry="17" fill="' + c.go + '" stroke="#211B33" stroke-width="1"/>' +
            '<ellipse cx="552" cy="368" rx="20" ry="17" fill="' + c.go + '" stroke="#211B33" stroke-width="1"/>' +
            '<ellipse cx="448" cy="365" rx="9" ry="7" fill="#D9D3F3" opacity=".22"/>' +
            '<ellipse cx="552" cy="365" rx="9" ry="7" fill="#D9D3F3" opacity=".22"/>'));

        /* 肠：腹腔中央，管腔可见 */
        push(o, orgG('gu',
            '<circle cx="500" cy="388" r="25" fill="' + c.gu + '" stroke="#4A2410" stroke-width="1"/>' +
            '<circle cx="500" cy="388" r="11" fill="#4A2410" opacity=".55"/>' +
            '<circle cx="500" cy="388" r="25" fill="none" stroke="#F3C9A4" stroke-width="1.4" opacity=".35"/>'));

        /* 肝：腹侧大块 */
        push(o, orgG('li',
            '<path d="M 414,438 C 414,424 428,416 452,414 C 476,412 506,414 532,418 C 556,422 582,430 584,446 ' +
            'C 585,457 574,462 552,464 C 516,468 474,466 450,458 C 432,452 414,446 414,438 Z" fill="' + c.li + '" stroke="#241207" stroke-width="1"/>' +
            '<path d="M 432,428 C 466,422 512,424 552,432" fill="none" stroke="#F3DCC4" stroke-width="1.1" opacity=".24"/>'));

        /* 侧线神经丘：体侧水平隔处，左右各一 */
        push(o, orgG('ll',
            '<circle cx="358" cy="304" r="8" fill="' + c.ll + '" stroke="#0E2A28" stroke-width="1"/>' +
            '<circle cx="358" cy="304" r="3" fill="#CFF0EA" opacity=".8"/>' +
            '<circle cx="642" cy="304" r="8" fill="' + c.ll + '" stroke="#0E2A28" stroke-width="1"/>' +
            '<circle cx="642" cy="304" r="3" fill="#CFF0EA" opacity=".8"/>'));

        /* 皮下色素细胞 */
        push(o, '<g data-struct="melanophore" fill="#0E2429" opacity=".8">' +
            '<circle cx="392" cy="182" r="3.4"/><circle cx="412" cy="162" r="2.6"/><circle cx="378" cy="148" r="2.2"/>' +
            '<circle cx="608" cy="182" r="3.4"/><circle cx="590" cy="160" r="2.6"/><circle cx="620" cy="146" r="2.2"/>' +
            '<circle cx="676" cy="338" r="2.6"/><circle cx="688" cy="372" r="2.2"/>' +
            '<circle cx="324" cy="338" r="2.6"/><circle cx="312" cy="372" r="2.2"/>' +
            '</g>');

        /* 标签 */
        push(o, '<g class="zfa-labels">');
        push(o, lbl('ll', 170, 240, 358, 304));
        push(o, lbl('ki', 790, 190, 552, 296));
        push(o, lbl('go', 800, 322, 572, 368));
        push(o, lbl('gu', 800, 416, 524, 388));
        push(o, lbl('li', 762, 500, 560, 438));
        push(o, lbl('mu', 872, 262, 662, 300));
        push(o, slbl('神经管', 640, 112, 512, 192));
        push(o, slbl('脊柱', 320, 150, 480, 246));
        push(o, slbl('鳔', 196, 432, 444, 328));
        push(o, '</g>');

        push(o, dirMark('背侧', 500, 62));
        push(o, dirMark('腹侧', 500, 552));
        push(o, '</g>');

        push(o, '</svg>');
        return o.join('\n');
    }

    /* ============================ 胚胎视图 ============================ */

    var BODY_EMB = 'M 172,262 C 172,220 200,190 240,186 C 276,182 306,192 322,208 C 360,188 420,178 496,180 ' +
        'C 570,182 636,200 690,232 C 736,260 768,296 790,330 L 800,342 L 790,352 C 754,340 724,320 696,298 ' +
        'C 656,270 618,252 576,242 C 520,228 460,226 408,234 C 356,242 316,260 296,286 C 280,306 258,322 232,326 ' +
        'C 196,330 176,300 172,262 Z';

    /* 体节块：相邻两条 V 形肌节线围成的区域，作为「肌肉」的可交互面 */
    function somiteFill(n, x0, x1, amp) {
        var out = '', i, xa, xb;
        for (i = 0; i < n; i++) {
            xa = x0 + (x1 - x0) * i / n;
            xb = x0 + (x1 - x0) * (i + 1) / n;
            out += '<path d="M ' + xa.toFixed(1) + ',176 L ' + xb.toFixed(1) + ',176 L ' + (xb - amp).toFixed(1) +
                ',254 L ' + xb.toFixed(1) + ',336 L ' + xa.toFixed(1) + ',336 L ' + (xa - amp).toFixed(1) + ',254 Z"/>';
        }
        return out;
    }

    function somiteSet(n, x0, x1, amp) {
        var out = '', i, x;
        for (i = 0; i <= n; i++) {
            x = x0 + (x1 - x0) * i / n;
            out += '<path d="M ' + x.toFixed(1) + ',172 L ' + (x - amp).toFixed(1) + ',252 L ' + x.toFixed(1) + ',356"/>';
        }
        return out;
    }

    function buildEmbryo() {
        var c = {};
        ['li', 'he', 'br', 'gi', 'gu', 'go', 'ki', 'll', 'ey', 'th', 'mu'].forEach(function (k) { c[k] = colorOf(k); });

        var o = [];
        push(o, svgOpen('embryo', '斑马鱼胚胎侧位解剖图（约 48 hpf）'));
        push(o, '<defs>');
        push(o, '<radialGradient id="zfa-emb-bg" cx="50%" cy="45%" r="64%">' +
            '<stop offset="0%" stop-color="#16343A"/><stop offset="100%" stop-color="#0A191D"/></radialGradient>');
        push(o, '<clipPath id="zfa-emb-clip"><path d="' + BODY_EMB + '"/></clipPath>');
        push(o, '</defs>');

        push(o, '<rect x="0" y="0" width="1000" height="600" fill="url(#zfa-emb-bg)"/>');

        /* --- 卵膜 --- */
        push(o, '<g data-layer="shell">');
        push(o, '<circle cx="500" cy="300" r="272" fill="none" stroke="#4C7F89" stroke-width="1.8" opacity=".8"/>');
        push(o, '<circle cx="500" cy="300" r="259" fill="none" stroke="#3B6A74" stroke-width="1" stroke-dasharray="7 7" opacity=".5"/>');
        push(o, '</g>');

        /* --- 孵化破口（仅 hat 期） --- */
        push(o, '<g data-layer="hatch" data-struct="hatching" style="display:none">' +
            '<path d="M 688,468 C 716,442 736,412 748,378" fill="none" stroke="#0A191D" stroke-width="11" stroke-linecap="round"/>' +
            '<path d="M 700,486 C 726,466 748,440 762,410" fill="none" stroke="#4C7F89" stroke-width="1.2" opacity=".6"/>' +
            '</g>');

        /* --- 卵黄囊 + 油滴 --- */
        push(o, '<g data-layer="yolk" data-struct="yolksac">');
        push(o, '<ellipse cx="398" cy="388" rx="142" ry="116" fill="#B99248" stroke="#D8B466" stroke-width="1.4" opacity=".5"/>');
        push(o, '<ellipse cx="398" cy="388" rx="142" ry="116" fill="none" stroke="#E4C680" stroke-width="1" stroke-dasharray="4 6" opacity=".35"/>');
        push(o, '<circle cx="452" cy="404" r="36" fill="#D9B96A" stroke="#EDD79C" stroke-width="1" opacity=".55"/>');
        push(o, '</g>');

        /* --- 早期（zyg / cle / bla / gas）--- */
        push(o, '<g data-layer="early" style="display:none">');
        /* 受精卵：动物极单个胚盘（1 细胞），尚未卵裂 */
        push(o, '<g data-early="zygote">' +
            '<ellipse cx="500" cy="330" rx="150" ry="146" fill="#B99248" opacity=".42" stroke="#D8B466" stroke-width="1"/>' +
            '<path d="M 412,210 C 430,182 470,170 500,170 C 530,170 570,182 588,210 C 560,224 530,230 500,230 C 470,230 440,224 412,210 Z" fill="#3C6A72" stroke="#6BA0AA" stroke-width="1.4"/>' +
            '<circle cx="500" cy="200" r="9" fill="#2F5A62" stroke="#8FBFC7" stroke-width="1"/>' +
            '</g>');
        /* 卵裂期：动物极多个卵裂球（示意 8 细胞，两列） */
        push(o, '<g data-early="cells">' +
            '<ellipse cx="500" cy="330" rx="150" ry="146" fill="#B99248" opacity=".42" stroke="#D8B466" stroke-width="1"/>' +
            '<ellipse cx="500" cy="200" rx="92" ry="38" fill="#35636B" stroke="#6BA0AA" stroke-width="1.2"/>' +
            '<circle cx="455" cy="190" r="16" fill="#2F5A62" stroke="#8FBFC7" stroke-width="1.1"/>' +
            '<circle cx="485" cy="184" r="16" fill="#2F5A62" stroke="#8FBFC7" stroke-width="1.1"/>' +
            '<circle cx="515" cy="184" r="16" fill="#2F5A62" stroke="#8FBFC7" stroke-width="1.1"/>' +
            '<circle cx="545" cy="190" r="16" fill="#2F5A62" stroke="#8FBFC7" stroke-width="1.1"/>' +
            '<circle cx="470" cy="212" r="15" fill="#29545C" stroke="#8FBFC7" stroke-width="1.1"/>' +
            '<circle cx="500" cy="216" r="15" fill="#29545C" stroke="#8FBFC7" stroke-width="1.1"/>' +
            '<circle cx="530" cy="212" r="15" fill="#29545C" stroke="#8FBFC7" stroke-width="1.1"/>' +
            '</g>');
        push(o, '<g data-early="blasto">' +
            '<ellipse cx="500" cy="330" rx="150" ry="146" fill="#B99248" opacity=".42" stroke="#D8B466" stroke-width="1"/>' +
            '<ellipse cx="500" cy="212" rx="104" ry="54" fill="#3C6A72" stroke="#6BA0AA" stroke-width="1.2"/>' +
            '<path d="M 396,212 C 440,182 560,182 604,212" fill="none" stroke="#8FBFC7" stroke-width="1.2" opacity=".6"/>' +
            '</g>');
        push(o, '<g data-early="gast">' +
            '<ellipse cx="500" cy="330" rx="150" ry="146" fill="#B99248" opacity=".42" stroke="#D8B466" stroke-width="1"/>' +
            '<path d="M 350,330 C 350,236 650,236 650,330" fill="none" stroke="#6BA0AA" stroke-width="10" opacity=".85"/>' +
            '<path d="M 500,238 L 500,262" fill="none" stroke="#E6EEEC" stroke-width="2" opacity=".6"/>' +
            '</g>');
        push(o, '</g>');

        /* --- 胚胎身体 --- */
        push(o, '<g data-layer="body">');
        push(o, '<path d="' + BODY_EMB + '" fill="#20464E" stroke="#4E828C" stroke-width="1.6"/>');
        /* 背鳍褶与尾鳍褶 */
        push(o, '<g data-struct="finfold" fill="none" stroke="#4E828C" stroke-width="1" opacity=".7">');
        push(o, '<path d="M 330,196 C 400,172 480,166 552,172 C 628,180 690,206 736,244"/>');
        push(o, '<path d="M 690,300 C 728,314 762,332 788,352"/>');
        push(o, '</g>');
        push(o, '</g>');

        /* --- 体节（V 形，裁剪在体内）--- */
        push(o, '<g data-layer="somites" clip-path="url(#zfa-emb-clip)" data-struct="somites">');
        /* 肌肉（体节肌）：成对的 V 形体节块，随 setStage 与体节同步显隐 */
        push(o, orgG('mu',
            '<g data-somite="seg" fill="' + c.mu + '" opacity=".3">' + somiteFill(16, 392, 748, 12) + '</g>' +
            '<g data-somite="pha" fill="' + c.mu + '" opacity=".26">' + somiteFill(26, 380, 780, 9) + '</g>'));
        push(o, '<g data-somite="seg" fill="none" stroke="#4C8089" stroke-width="1.1" opacity=".7">' + somiteSet(16, 392, 748, 12) + '</g>');
        push(o, '<g data-somite="pha" fill="none" stroke="#4C8089" stroke-width="1" opacity=".6">' + somiteSet(26, 380, 780, 9) + '</g>');
        push(o, '</g>');

        /* --- 器官 --- */
        push(o, '<g data-layer="organs">');

        /* 脑：前脑 / 间脑 / 中脑视顶盖 / 后脑（菱脑），向后续脊髓 */
        push(o, orgG('br',
            '<ellipse cx="296" cy="216" rx="16" ry="13" fill="' + c.br + '" stroke="#3A2C05" stroke-width=".9"/>' +
            '<ellipse cx="314" cy="212" rx="12" ry="11" fill="' + c.br + '" stroke="#3A2C05" stroke-width=".9"/>' +
            '<ellipse cx="334" cy="210" rx="17" ry="14" fill="' + c.br + '" stroke="#3A2C05" stroke-width=".9"/>' +
            '<ellipse cx="362" cy="224" rx="15" ry="13" fill="' + c.br + '" stroke="#3A2C05" stroke-width=".9"/>' +
            '<path d="M 376,228 C 420,216 470,208 520,210 C 570,212 620,224 664,246" fill="none" stroke="' + c.br + '" stroke-width="4.5" stroke-linecap="round" opacity=".8"/>' +
            '<path d="M 350,214 L 350,222 M 366,216 L 366,226" stroke="#3A2C05" stroke-width="1" opacity=".5"/>'));

        /* 眼与视网膜：48 hpf 眼占头部很大比例 */
        push(o, orgG('ey',
            '<circle cx="238" cy="254" r="34" fill="' + c.ey + '" stroke="#2A0F1D" stroke-width="1"/>' +
            '<circle cx="238" cy="254" r="24" fill="#F8EAF0" opacity=".26"/>' +
            '<circle cx="232" cy="252" r="14" fill="#401027"/>' +
            '<circle cx="228" cy="248" r="4.5" fill="#FFFFFF" opacity=".5"/>' +
            '<circle cx="238" cy="254" r="34" fill="none" stroke="#3A1226" stroke-width="2.2" opacity=".5"/>'));

        /* 耳囊（结构） */
        push(o, '<g data-struct="oticvesicle">' +
            '<ellipse cx="352" cy="276" rx="17" ry="21" fill="#2A545D" stroke="#9CD2D8" stroke-width="1.6" opacity=".95"/>' +
            '<circle cx="347" cy="270" r="5" fill="#D6E6E3" opacity=".8"/>' +
            '<circle cx="358" cy="284" r="4" fill="#D6E6E3" opacity=".65"/>' +
            '</g>');

        /* 心脏：卵黄囊前腹侧，48 hpf 为环化的心管（心房 + 心室） */
        push(o, orgG('he',
            '<path d="M 268,352 C 256,350 248,342 250,332 C 252,322 262,318 272,322 C 282,326 286,336 282,346 ' +
            'C 280,354 274,358 268,352 Z" fill="' + c.he + '" stroke="#2A1015" stroke-width="1"/>' +
            '<ellipse cx="262" cy="338" rx="16" ry="13" fill="' + c.he + '" stroke="#2A1015" stroke-width="1"/>' +
            '<ellipse cx="252" cy="356" rx="12" ry="10" fill="' + c.he + '" stroke="#2A1015" stroke-width="1"/>' +
            '<path d="M 250,330 C 256,322 266,322 272,330" fill="none" stroke="#F7DDE1" stroke-width="1" opacity=".4"/>'));

        /* 肝原基：卵黄囊前右侧、肠管前端腹侧 */
        push(o, orgG('li',
            '<ellipse cx="388" cy="334" rx="27" ry="19" fill="' + c.li + '" stroke="#F0D6BE" stroke-width="1.4" opacity=".98"/>' +
            '<path d="M 372,326 C 386,320 402,322 412,330" fill="none" stroke="#F3DCC4" stroke-width="1" opacity=".28"/>'));

        /* 肠管：沿卵黄囊背侧的原始直管 */
        var gutD2 = 'M 330,300 C 382,276 452,262 522,262 C 590,262 648,278 700,300';
        push(o, orgG('gu',
            '<path d="' + gutD2 + '" fill="none" stroke="' + c.gu + '" stroke-width="11" stroke-linecap="round"/>' +
            '<path d="' + gutD2 + '" fill="none" stroke="#4A2410" stroke-width="3.5" stroke-linecap="round" opacity=".5"/>'));

        /* 咽弓 / 鳃原基：头部腹侧、心脏背侧 */
        push(o, orgG('gi',
            '<path d="M 300,286 C 312,292 318,302 316,314" fill="none" stroke="' + c.gi + '" stroke-width="4.5" stroke-linecap="round"/>' +
            '<path d="M 308,292 C 320,298 326,308 324,320" fill="none" stroke="' + c.gi + '" stroke-width="4.5" stroke-linecap="round" opacity=".9"/>' +
            '<path d="M 316,300 C 328,306 334,316 332,328" fill="none" stroke="' + c.gi + '" stroke-width="4.5" stroke-linecap="round" opacity=".8"/>'));

        /* 甲状腺原基：咽底、鳃弓腹侧中线 */
        push(o, orgG('th',
            '<circle cx="318" cy="326" r="4.6" fill="' + c.th + '" stroke="#1B1C10" stroke-width=".8"/>' +
            '<circle cx="327" cy="331" r="3.6" fill="' + c.th + '" stroke="#1B1C10" stroke-width=".8"/>' +
            '<circle cx="310" cy="331" r="3.4" fill="' + c.th + '" stroke="#1B1C10" stroke-width=".8"/>'));

        /* 前肾（ki）：前肾小球在耳囊后方，前肾管沿体腔背侧后行 */
        push(o, orgG('ki',
            '<ellipse cx="372" cy="264" rx="13" ry="9" fill="' + c.ki + '" stroke="#12210F" stroke-width="1"/>' +
            '<path d="M 380,266 C 438,250 506,246 572,252 C 632,258 682,274 722,294" fill="none" stroke="' + c.ki + '" stroke-width="4" stroke-linecap="round" opacity=".9"/>'));

        /* 性腺原基（PGC）：肠管背侧 */
        push(o, orgG('go',
            '<circle cx="524" cy="246" r="5" fill="' + c.go + '" stroke="#211B33" stroke-width=".8"/>' +
            '<circle cx="548" cy="250" r="4.4" fill="' + c.go + '" stroke="#211B33" stroke-width=".8"/>'));

        /* 侧线原基：前侧线（头部）与后侧线（体侧）基板 */
        var llEmb = [[306, 246], [322, 244], [340, 252], [352, 266],
            [404, 244], [444, 240], [484, 238], [524, 238], [564, 240], [604, 244], [644, 250], [678, 258]];
        push(o, orgG('ll',
            '<path d="M 404,244 C 470,236 560,234 640,248 C 664,252 678,256 688,260" fill="none" stroke="' + c.ll + '" stroke-width="1.4" stroke-dasharray="4 5" opacity=".7"/>' +
            llEmb.map(function (p) {
                return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.6" fill="' + c.ll + '" stroke="#0E2A28" stroke-width=".7"/>';
            }).join('')));

        push(o, '</g>');

        /* --- 色素（pha 之后出现）--- */
        push(o, '<g data-layer="pigment" data-struct="pigment" fill="#12262A" opacity=".9">' +
            '<circle cx="300" cy="200" r="2.6"/><circle cx="342" cy="192" r="2.4"/><circle cx="420" cy="184" r="2.8"/>' +
            '<circle cx="482" cy="182" r="2.6"/><circle cx="542" cy="186" r="2.8"/><circle cx="602" cy="196" r="2.6"/>' +
            '<circle cx="662" cy="214" r="2.4"/><circle cx="712" cy="240" r="2.2"/>' +
            '<circle cx="322" cy="302" r="2.2"/><circle cx="352" cy="332" r="2"/><circle cx="392" cy="318" r="2"/>' +
            '</g>');

        /* --- 鳔（lar 期充气，结构）--- */
        push(o, '<g data-layer="swim" data-struct="swimbladder" style="display:none">' +
            '<ellipse cx="560" cy="286" rx="24" ry="12" fill="#3B6E78" stroke="#63A0A9" stroke-width="1" opacity=".85"/>' +
            '</g>');

        /* --- 阶段提示 --- */
        push(o, '<g data-layer="note" style="display:none">');
        push(o, txtPair('zfa-note', 500, 300, 12, '#B9CDCB', '#0A1A1E', '该阶段为幼鱼／成鱼期，胚胎视图不适用'));
        push(o, txtPair('zfa-note2', 500, 326, 10.5, '#87A6A3', '#0A1A1E', '请切换到「侧视图」或「横截面」查看'));
        push(o, '</g>');

        /* --- 标签 --- */
        push(o, '<g class="zfa-labels">');
        push(o, lbl('ey', 150, 300, 206, 270));
        push(o, lbl('br', 334, 172, 334, 196));
        push(o, lbl('gi', 368, 292, 330, 300));
        push(o, lbl('he', 190, 386, 256, 362));
        push(o, lbl('th', 404, 356, 338, 330));
        push(o, lbl('li', 466, 322, 404, 332));
        push(o, lbl('gu', 470, 208, 474, 240));
        push(o, lbl('go', 512, 148, 540, 238));
        push(o, lbl('ki', 634, 168, 600, 248));
        push(o, lbl('ll', 748, 200, 688, 254));
        push(o, lbl('mu', 560, 196, 560, 232, '（体节）'));
        push(o, '</g>');

        push(o, '<g data-layer="dir">');
        push(o, dirMark('头侧', 236, 76));
        push(o, dirMark('尾侧', 806, 452));
        push(o, '</g>');

        push(o, '</svg>');
        return o.join('\n');
    }

    /* ============================ 阶段控制 ============================ */

    var STAGE_CFG = {
        zyg: { shell: 1, early: 'zygote' },
        cle: { shell: 1, early: 'cells' },
        bla: { shell: 1, early: 'blasto' },
        gas: { shell: 1, early: 'gast' },
        seg: { shell: 1, yolk: 1, body: 1, somites: 1, organs: 1 },
        pha: { shell: 1, yolk: 1, body: 1, somites: 1, organs: 1, pigment: 1 },
        hat: { shell: 0.28, yolk: 1, body: 1, somites: 0.55, organs: 1, pigment: 1, hatch: 1 },
        lar: { yolk: 0.28, body: 1, somites: 0.25, organs: 1, pigment: 1, swim: 1 },
        juv: { note: 1 },
        sex: { note: 1 },
        adu: { note: 1 },
        old: { note: 1 }
    };

    function applyStage() {
        var g = svgs.embryo;
        if (!g) { return; }
        var key = STAGE_CFG[state.stage] ? state.stage : 'pha';
        var cfg = STAGE_CFG[key];
        g.setAttribute('data-stage', key);

        var layers = g.querySelectorAll('[data-layer]');
        var i, el, name, v;
        for (i = 0; i < layers.length; i++) {
            el = layers[i];
            name = el.getAttribute('data-layer');
            v = cfg[name];
            if (v === undefined) {
                el.style.display = 'none';
            } else {
                el.style.display = '';
                el.style.opacity = String(v);
            }
        }

        /* 早期形态变体 */
        var early = cfg.early;
        var evs = g.querySelectorAll('[data-early]');
        for (i = 0; i < evs.length; i++) {
            evs[i].style.display = (early && evs[i].getAttribute('data-early') === early) ? '' : 'none';
        }

        /* 体节密度：seg 期体节更少更宽 */
        var som = g.querySelectorAll('[data-somite]');
        for (i = 0; i < som.length; i++) {
            som[i].style.display = (som[i].getAttribute('data-somite') === (key === 'seg' ? 'seg' : 'pha')) ? '' : 'none';
        }

        /* seg 期器官原基过小：隐藏肝 / 肠 / 性腺（斜视图中不可靠） */
        var small = ['li', 'gu', 'go'];
        for (i = 0; i < small.length; i++) {
            var oe = g.querySelector('[data-organ="' + small[i] + '"]');
            if (oe) { oe.style.display = (key === 'seg') ? 'none' : ''; }
            var ol = g.querySelector('.zfa-lbl[data-for="' + small[i] + '"]');
            if (ol) { ol.style.display = (key === 'seg') ? 'none' : ''; }
        }
        /* seg 期眼原基更小 */
        var eye = g.querySelector('[data-organ="ey"]');
        if (eye) {
            if (key === 'seg') {
                eye.style.transform = 'scale(.78)';
                eye.style.transformOrigin = '238px 254px';
            } else {
                eye.style.transform = '';
                eye.style.transformOrigin = '';
            }
        }
        /* 早期 / 幼鱼-成鱼期：隐藏标签，避免指向不存在的结构 */
        var lbls = g.querySelector('.zfa-labels');
        if (lbls) {
            /* 原条件漏了早期四个阶段：那时 organs 图层已隐藏，标签却还在，
               指引线落在空白处或卵黄上。按注释的本意补齐。 */
            var noLbl = ['zyg', 'cle', 'bla', 'gas', 'juv', 'sex', 'adu', 'old'];
            lbls.style.display = (noLbl.indexOf(key) >= 0) ? 'none' : '';
        }
    }

    /* ============================ 交互 ============================ */

    function closestOrgan(node) {
        var el = node;
        while (el && el.nodeType === 1) {
            if (el.getAttribute && el.getAttribute('data-organ')) { return el.getAttribute('data-organ'); }
            el = el.parentNode;
        }
        return null;
    }

    function applyAll() {
        var keys = Object.keys(svgs), i, k, svg;
        for (i = 0; i < keys.length; i++) {
            k = keys[i];
            svg = svgs[k];
            if (!svg) { continue; }
            svg.style.display = (k === state.view) ? '' : 'none';
            if (state.ghost) { svg.classList.add('zfa-ghost'); } else { svg.classList.remove('zfa-ghost'); }
            if (state.labels) { svg.classList.remove('zfa-nolabels'); } else { svg.classList.add('zfa-nolabels'); }

            var orgs = svg.querySelectorAll('[data-organ]');
            var j, o, id;
            for (j = 0; j < orgs.length; j++) {
                o = orgs[j];
                id = o.getAttribute('data-organ');
                if (id === state.selected) { o.classList.add('zfa-sel'); } else { o.classList.remove('zfa-sel'); }
                if (id === state.hover) { o.classList.add('zfa-hl'); } else { o.classList.remove('zfa-hl'); }
            }
            var lbs = svg.querySelectorAll('.zfa-lbl');
            for (j = 0; j < lbs.length; j++) {
                var f = lbs[j].getAttribute('data-for');
                if (f && (f === state.hover || f === state.selected)) {
                    lbs[j].classList.add('zfa-lbl-hl');
                } else {
                    lbs[j].classList.remove('zfa-lbl-hl');
                }
            }
        }
        applyStage();
    }

    function bind(svg) {
        svg.addEventListener('mouseover', function (e) {
            var id = closestOrgan(e.target);
            if (!id || id === state.hover) { return; }
            state.hover = id;
            applyAll();
            if (cb.onHover) { cb.onHover(id); }
        });

        svg.addEventListener('mouseout', function (e) {
            var id = closestOrgan(e.target);
            if (!id || id !== state.hover) { return; }
            var to = closestOrgan(e.relatedTarget);
            if (to === id) { return; }
            state.hover = null;
            applyAll();
            if (cb.onHover) { cb.onHover(null); }
        });

        svg.addEventListener('click', function (e) {
            var id = closestOrgan(e.target);
            if (!id) { return; }
            e.preventDefault();
            state.selected = id;
            applyAll();
            if (cb.onSelect) { cb.onSelect(id); }
        });
    }

    /* ============================ 构建 ============================ */

    function buildAll() {
        var defs = [
            ['side', buildSide()],
            ['cross', buildCross()],
            ['embryo', buildEmbryo()]
        ];
        defs.forEach(function (d) {
            var svg = parseSvg(d[1]);
            if (!svg) { return; }
            svgs[d[0]] = svg;
            bind(svg);
        });
    }

    /* ============================ 公开接口 ============================ */

    var Anatomy = {
        init: function (opts) {
            opts = opts || {};
            if (typeof opts.onSelect === 'function') { cb.onSelect = opts.onSelect; }
            if (typeof opts.onHover === 'function') { cb.onHover = opts.onHover; }
            if (opts.host) { host = opts.host; }
            if (!host) { return; }

            injectCSS();
            if (!built) {
                buildAll();
                built = true;
            }
            /* 三个 svg 全部插入 host（重复 init 时会被移动到新 host，不会重复创建） */
            ['side', 'cross', 'embryo'].forEach(function (k) {
                if (svgs[k] && svgs[k].parentNode !== host) { host.appendChild(svgs[k]); }
            });
            applyAll();
        },

        setView: function (v) {
            if (v !== 'side' && v !== 'cross' && v !== 'embryo') { return; }
            state.view = v;
            applyAll();
        },

        getView: function () {
            return state.view;
        },

        setLabels: function (on) {
            state.labels = !!on;
            applyAll();
        },

        setGhost: function (on) {
            state.ghost = !!on;
            applyAll();
        },

        selectOrgan: function (id) {
            state.selected = id || null;
            applyAll();
        },

        setStage: function (stageId) {
            if (!stageId) { return; }
            state.stage = stageId;
            applyStage();
        },

        /* 某个视图里是否真的画了这个器官（横截面只含躯干中段的器官） */
        hasOrgan: function (view, id) {
            var svg = svgs[view];
            if (!svg || !id) { return false; }
            return !!svg.querySelector('[data-organ="' + id + '"]');
        },

        /* 含有该器官的视图列表，按 侧视 → 胚胎 → 横截面 的优先顺序 */
        viewsWithOrgan: function (id) {
            var out = [];
            ['side', 'embryo', 'cross'].forEach(function (k) {
                var svg = svgs[k];
                if (svg && id && svg.querySelector('[data-organ="' + id + '"]')) { out.push(k); }
            });
            return out;
        }
    };

    global.Anatomy = Anatomy;

})(window);
