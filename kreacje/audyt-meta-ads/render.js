// Generator statycznych kreacji Meta Ads (audyt KWIATEKmedia).
// Uruchom: node kreacje/audyt-meta-ads/render.js
// Wynik: kreacje/audyt-meta-ads/png/*.png (4:5 1080x1350 i 9:16 1080x1920) + podglad.png
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'png');
fs.mkdirSync(OUT, { recursive: true });

// Polskie sieroty: jednoliterowe słowa sklejone z następnym.
const pl = (s) => s.replace(/(^|[\s>])([aiouwzAIOUWZ])\s/g, '$1$2 ');

const FORMATS = {
  '4x5': { w: 1080, h: 1350, top: 80, bottom: 80, side: 84, h1: 104, body: 50 },
  // Stories/Reels: góra 14% (270 px), dół 35% (670 px) wolne, boki 6%+.
  '9x16': { w: 1080, h: 1920, top: 280, bottom: 680, side: 68, h1: 92, body: 46 },
};

const CREATIVES = [
  {
    id: '01-agencja-statystyki',
    name: 'Agencja: statystyki a efekty',
    hook: 8, body: 6, cta: 5,
    c: { bg: '#0B0F1A', fg: '#FFFFFF', muted: '#C3CAD9', accent: '#C6FF3D', onAccent: '#0B0F1A' },
    h1: 'Twoja agencja pokazuje <span class="acc">dobre statystyki</span>, ale Ty <mark>nie widzisz efektów?</mark>',
    bodyHtml: 'Dowiesz się, czy problem leży w <b>reklamach</b>, <b>ofercie</b>, <b>jakości leadów</b> czy <b>procesie sprzedaży</b>.',
    cta: 'Zamów niezależny audyt Meta&nbsp;Ads',
  },
  {
    id: '02-leady-bez-sprzedazy',
    name: 'Leady bez sprzedaży (lejek)',
    hook: 4, body: 5, cta: 3,
    c: { bg: '#FFD60A', fg: '#111111', muted: '#2B2B2B', accent: '#111111', onAccent: '#FFD60A' },
    h1: 'Twoje reklamy na Facebooku generują leady, <mark>ale nie sprzedaż?</mark>',
    extra: `<div class="steps">
      <span class="st">Reklama</span><span class="ar">→</span>
      <span class="st">Lead</span><span class="ar">→</span>
      <span class="st">Rozmowa</span><span class="ar">→</span>
      <span class="st miss">Umowa</span></div>`,
    bodyHtml: 'Przeanalizuję cały proces od wyświetlenia reklamy do <b>podpisania umowy z klientem</b>.',
    cta: 'Umów darmowy audyt kampanii',
  },
  {
    id: '03-placisz-agencji',
    name: 'Płacisz agencji? Sprawdź budżet',
    hook: 2, body: 3, cta: 1,
    c: { bg: '#FF5A1F', fg: '#160803', muted: '#2A1006', accent: '#FFFFFF', onAccent: '#160803' },
    h1: '<span class="huge">Płacisz agencji za Meta&nbsp;Ads?</span><span class="sub">Sprawdź, czy dobrze wykorzystuje Twój budżet.</span>',
    bodyHtml: 'Otrzymasz <b>niezależną ocenę</b> swoich kampanii oraz <b>konkretne rekomendacje</b> do wdrożenia.',
    cta: 'Darmowy audyt bez zobowiązań',
  },
  {
    id: '04-koszty-rosna',
    name: 'Koszty rosną, sprzedaż stoi',
    hook: 6, body: 2, cta: 4,
    c: { bg: '#F4F1EA', fg: '#121212', muted: '#3A3A3A', accent: '#D7261E', onAccent: '#FFFFFF' },
    h1: 'Koszty Twoich reklam na Facebooku <span class="up">' +
      [...'rosną'].map((ch, i) => `<i style="--i:${i}">${ch}</i>`).join('') +
      '</span>, a sprzedaż <span class="flat">stoi w miejscu?</span>',
    bodyHtml: 'Sprawdzę, czy Twoje reklamy są prawidłowo prowadzone i <b>gdzie możesz niepotrzebnie tracić budżet</b>.',
    cta: 'Sprawdź swoje reklamy za darmo',
  },
  {
    id: '05-samodzielnie-bledy',
    name: 'Samodzielnie: kosztowne błędy',
    hook: 7, body: 4, cta: 2,
    c: { bg: '#1F35FF', fg: '#FFFFFF', muted: '#DCE1FF', accent: '#FFE14D', onAccent: '#10197A' },
    h1: '<span class="huge">Prowadzisz samodzielnie Meta&nbsp;Ads?</span><span class="sub">Sprawdź, czy nie popełniasz <span class="acc">kosztownych błędów.</span></span>',
    bodyHtml: `<span class="lead">Sprawdzę Twoje:</span>
      <ol class="list"><li><em>01</em>kreacje</li><li><em>02</em>formularze</li><li><em>03</em>ustawienia kampanii</li><li><em>04</em>jakość pozyskiwanych leadów</li></ol>`,
    cta: 'Odbierz bezpłatny audyt Meta&nbsp;Ads',
  },
];

function html(cr, f, fmt) {
  const c = cr.c;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${f.w}px;height:${f.h}px;background:${c.bg};overflow:hidden}
  body{font-family:'Inter Display','Inter',sans-serif;color:${c.fg};-webkit-font-smoothing:antialiased;
    --h1:${f.h1}px;--body:${f.body}px;font-feature-settings:'ss01' 0}
  .safe{position:absolute;top:${f.top}px;bottom:${f.bottom}px;left:${f.side}px;right:${f.side}px;
    display:flex;flex-direction:column;justify-content:space-between;gap:${fmt === '9x16' ? 36 : 44}px}
  .logo{font-family:'Inter';font-weight:800;font-size:44px;letter-spacing:-0.5px;line-height:1;color:${c.fg}}
  .logo span{font-weight:400}
  .main{display:flex;flex-direction:column;gap:${fmt === '9x16' ? 34 : 44}px}
  h1{font-weight:900;font-size:var(--h1);line-height:1.17;letter-spacing:-0.025em;text-wrap:pretty}
  h1 .huge{display:block;font-size:calc(var(--h1)*var(--huge,1.22));line-height:1;letter-spacing:-0.035em}
  h1 .sub{display:block;margin-top:0.45em;font-weight:800;font-size:calc(var(--h1)*0.66);line-height:1.1;letter-spacing:-0.015em}
  .acc{color:${c.accent}}
  mark{background:${c.accent};color:${c.onAccent};padding:0.02em 0.14em 0.04em;margin:0 -0.04em;line-height:1;
    box-decoration-break:clone;-webkit-box-decoration-break:clone;border-radius:6px}
  .body{font-family:'Inter';font-weight:500;font-size:var(--body);line-height:1.3;color:${c.muted};text-wrap:pretty}
  .body b{font-weight:800;color:${c.fg}}
  .cta{align-self:stretch;background:${c.accent};color:${c.onAccent};font-family:'Inter';font-weight:800;
    font-size:${fmt === '9x16' ? 48 : 52}px;line-height:1.12;letter-spacing:-0.01em;padding:32px 40px;border-radius:18px;text-align:center;text-wrap:balance}
  /* 02 lejek */
  .steps{display:flex;flex-wrap:wrap;align-items:center;gap:14px 10px;font-family:'Inter';font-weight:800;font-size:${fmt === '9x16' ? 40 : 38}px;flex-wrap:nowrap}
  .st{background:#111;color:#FFD60A;padding:12px 18px;border-radius:999px;line-height:1}
  .st.miss{background:transparent;color:#111;border:4px dashed #111;padding:8px 14px}
  .ar{font-weight:800;color:#111}
  /* 03 */
  .c03 .cta{background:#FFFFFF}
  /* 04 schodki */
  .up{color:${c.accent};white-space:nowrap}
  .up i{font-style:normal;display:inline-block;transform:translateY(calc(var(--i) * -0.09em))}
  .flat{color:${c.muted};font-weight:900}
  /* 05 lista */
  .lead{display:block;font-weight:700;color:${c.fg};margin-bottom:10px}
  .c05{--huge:1.08}
  .c05 .main{gap:30px}
  .c05.f9x16 .main{gap:22px} .c05.f9x16 .safe{gap:18px} .c05.f9x16 .lead{margin-bottom:4px} .c05.f9x16 h1 .sub{margin-top:0.3em}
  .list{list-style:none;display:flex;flex-direction:column;gap:${fmt === '9x16' ? 8 : 12}px}
  .list li{font-weight:700;color:${c.fg};display:flex;gap:22px;align-items:baseline;line-height:1.15;
    border-top:3px solid rgba(255,255,255,.28);padding-top:${fmt === '9x16' ? 8 : 12}px}
  .list em{font-style:normal;font-weight:900;color:${c.accent};min-width:64px}
  </style></head><body class="c${cr.id.slice(0, 2)} f${fmt}">
  <div class="safe" id="safe">
    <div class="logo">KWIATEK<span>media</span></div>
    <div class="main">
      <h1>${pl(cr.h1)}</h1>
      ${cr.extra || ''}
      <div class="body">${pl(cr.bodyHtml)}</div>
    </div>
    <div class="cta">${pl(cr.cta)}</div>
  </div></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const report = [];
  for (const cr of CREATIVES) {
    for (const [fmt, f] of Object.entries(FORMATS)) {
      await page.setViewportSize({ width: f.w, height: f.h });
      await page.setContent(html(cr, f, fmt), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      // Dopasowanie: zmniejszaj nagłówek, potem tekst, aż wszystko zmieści się w strefie bezpiecznej.
      const fit = await page.evaluate(({ minH1, minBody }) => {
        const safe = document.getElementById('safe');
        const b = document.body;
        let h1 = parseFloat(getComputedStyle(b).getPropertyValue('--h1'));
        let body = parseFloat(getComputedStyle(b).getPropertyValue('--body'));
        const over = () => safe.scrollHeight > safe.clientHeight + 1;
        while (over() && h1 > minH1) { h1 -= 2; b.style.setProperty('--h1', h1 + 'px'); }
        while (over() && body > minBody) { body -= 1; b.style.setProperty('--body', body + 'px'); }
        const sr=safe.getBoundingClientRect().right; const wide=[...document.querySelectorAll(".safe *")].filter(e=>e.getBoundingClientRect().right>sr+1).map(e=>e.tagName+"."+e.className+":"+Math.round(e.getBoundingClientRect().right-sr)).join(" ")||false; return { h1, body, overflow: over(), px: safe.scrollHeight - safe.clientHeight, wide };
      }, { minH1: 80, minBody: 45 });
      const file = path.join(OUT, `${cr.id}_${fmt}.png`);
      await page.screenshot({ path: file, clip: { x: 0, y: 0, width: f.w, height: f.h } });
      report.push({ file: path.basename(file), ...fit });
    }
  }
  // Podgląd zbiorczy
  const imgs = report.map((r) => 'data:image/png;base64,' + fs.readFileSync(path.join(OUT, r.file)).toString('base64'));
  const feed = imgs.filter((_, i) => i % 2 === 0), story = imgs.filter((_, i) => i % 2 === 1);
  await page.setViewportSize({ width: 2700, height: 1800 });
  await page.setContent(`<body style="margin:0;background:#2a2a2a;padding:40px;display:grid;gap:30px">
    <div style="display:flex;gap:30px">${feed.map((s) => `<img src="${s}" style="width:500px">`).join('')}</div>
    <div style="display:flex;gap:30px">${story.map((s) => `<img src="${s}" style="width:500px;height:auto;max-height:900px;object-fit:contain">`).join('')}</div></body>`);
  await page.screenshot({ path: path.join(__dirname, 'podglad.png'), fullPage: true });
  await browser.close();
  console.table(report);
})();
