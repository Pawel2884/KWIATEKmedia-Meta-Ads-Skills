// Wersja "pro": zamiast ozdobników każda kreacja ma główny obraz, który pokazuje problem z hooka
// (mockup raportu, lejek, rachunek, wykres, karta audytu). Rozwinięcie idzie do Primary Text.
// Uruchom: node kreacje/audyt-meta-ads/render-pro.js  ->  png-pro/, podglad-pro.png
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'png-pro');
fs.mkdirSync(OUT, { recursive: true });
const pl = (s) => s.replace(/(^|[\s>])([aiouwzAIOUWZ])\s/g, '$1$2 ');

const FORMATS = {
  '4x5': { w: 1080, h: 1350, top: 72, bottom: 72, side: 76, h1: 92 },
  '9x16': { w: 1080, h: 1920, top: 280, bottom: 680, side: 68, h1: 84 },
};

const OK = '#16A34A', BAD = '#DC2626', AMBER = '#D97706';

const CREATIVES = [
  {
    id: '01-agencja-statystyki',
    c: { bg: '#0B0F1A', fg: '#FFFFFF', accent: '#C6FF3D', onAccent: '#0B0F1A' },
    h1: 'Twoja agencja pokazuje <span class="acc">dobre statystyki</span>, ale Ty nie widzisz efektów?',
    visual: `<div class="stack">
      <div class="card dark"><div class="ct">Raport agencji</div>
        <div class="chips"><span class="chip ok">Zasięg ↑</span><span class="chip ok">Kliknięcia ↑</span><span class="chip ok">Leady ↑</span></div></div>
      <div class="card dark"><div class="ct">Twoja sprzedaż</div><div class="big bad">bez zmian</div></div></div>`,
    cta: 'Zamów niezależny audyt Meta&nbsp;Ads',
  },
  {
    id: '02-leady-bez-sprzedazy',
    c: { bg: '#FFD60A', fg: '#111111', accent: '#111111', onAccent: '#FFD60A' },
    h1: 'Twoje reklamy na Facebooku generują leady, <mark>ale nie sprzedaż?</mark>',
    visual: `<div class="card"><div class="ct">Twój lejek</div>
      <div class="bar"><span>Leady</span><i style="--p:100%"></i></div>
      <div class="bar"><span>Rozmowy</span><i style="--p:52%"></i></div>
      <div class="bar"><span>Umowy</span><i class="red" style="--p:9%"></i><b class="q">?</b></div></div>`,
    cta: 'Umów darmowy audyt kampanii',
  },
  {
    id: '03-placisz-agencji',
    c: { bg: '#FF5A1F', fg: '#160803', accent: '#FFFFFF', onAccent: '#160803' },
    h1: '<span class="huge">Płacisz agencji za Meta&nbsp;Ads?</span><span class="sub">Sprawdź, czy dobrze wykorzystuje Twój budżet.</span>',
    visual: `<div class="card receipt">
      <div class="row"><span>Obsługa agencji</span><b class="ok">opłacona ✓</b></div>
      <div class="row"><span>Budżet reklamowy</span><b class="ok">wydany ✓</b></div>
      <div class="row last"><span>Nowi klienci</span><b class="bad">?</b></div></div>`,
    cta: 'Darmowy audyt bez zobowiązań',
  },
  {
    id: '04-koszty-rosna',
    c: { bg: '#F4F1EA', fg: '#121212', accent: '#D7261E', onAccent: '#FFFFFF' },
    h1: 'Koszty Twoich reklam na Facebooku <span class="acc">rosną</span>, a&nbsp;sprzedaż <span class="mut">stoi w miejscu?</span>',
    visual: `<div class="card chart"><svg viewBox="0 0 900 380" preserveAspectRatio="none">
        <line x1="0" y1="378" x2="900" y2="378" stroke="#D9D4CA" stroke-width="3"/>
        <line x1="0" y1="190" x2="900" y2="190" stroke="#EEEAE2" stroke-width="2"/>
        <polyline points="0,330 150,300 300,285 450,230 600,190 750,120 900,40" fill="none" stroke="#D7261E" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"/>
        <polyline points="0,300 150,296 300,302 450,298 600,301 750,297 900,300" fill="none" stroke="#9A958C" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="900" cy="40" r="16" fill="#D7261E"/><circle cx="900" cy="300" r="16" fill="#9A958C"/></svg>
      <div class="legend"><span><i style="background:#D7261E"></i>Koszt reklam</span><span><i style="background:#9A958C"></i>Sprzedaż</span></div></div>`,
    cta: 'Sprawdź swoje reklamy za darmo',
  },
  {
    id: '05-samodzielnie-bledy',
    c: { bg: '#1F35FF', fg: '#FFFFFF', accent: '#FFE14D', onAccent: '#10197A' },
    h1: '<span class="huge">Prowadzisz samodzielnie Meta&nbsp;Ads?</span><span class="sub">Sprawdź, czy nie popełniasz <span class="acc">kosztownych błędów.</span></span>',
    visual: `<div class="card audit"><div class="ct">Audyt konta: co sprawdzę</div>
      <div class="row"><span>Kreacje</span><b class="chip warn">do sprawdzenia</b></div>
      <div class="row"><span>Formularze</span><b class="chip warn">do sprawdzenia</b></div>
      <div class="row"><span>Ustawienia kampanii</span><b class="chip warn">do sprawdzenia</b></div>
      <div class="row last"><span>Jakość leadów</span><b class="chip warn">do sprawdzenia</b></div></div>`,
    cta: 'Odbierz bezpłatny audyt Meta&nbsp;Ads',
  },
];

function html(cr, f, fmt) {
  const c = cr.c;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${f.w}px;height:${f.h}px;background:${c.bg};overflow:hidden}
  body{font-family:'Inter Display','Inter',sans-serif;color:${c.fg};-webkit-font-smoothing:antialiased;--h1:${f.h1}px;--v:1}
  .safe{position:absolute;top:${f.top}px;bottom:${f.bottom}px;left:${f.side}px;right:${f.side}px;display:flex;flex-direction:column;gap:40px}
  .logo{font-family:'Inter';font-weight:800;font-size:44px;line-height:1;letter-spacing:-0.5px}.logo span{font-weight:400}
  h1{font-weight:900;font-size:var(--h1);line-height:1.12;letter-spacing:-0.025em;text-wrap:pretty}
  h1 .huge{display:block;font-size:calc(var(--h1)*1.15);line-height:1.02;letter-spacing:-0.035em}
  h1 .sub{display:block;margin-top:0.4em;font-weight:800;font-size:calc(var(--h1)*0.62);line-height:1.12}
  .acc{color:${c.accent}} .mut{color:#77736B}
  mark{background:${c.accent};color:${c.onAccent};padding:0.02em 0.14em 0.04em;line-height:1;border-radius:6px;box-decoration-break:clone;-webkit-box-decoration-break:clone}
  .vis{flex:1;display:flex;align-items:center;min-height:0}
  .vis>*{width:100%;zoom:var(--v)}
  .cta{background:${c.accent};color:${c.onAccent};font-family:'Inter';font-weight:800;font-size:${fmt === '9x16' ? 46 : 50}px;line-height:1.12;
    padding:30px 24px;border-radius:18px;text-align:center;text-wrap:balance;box-shadow:0 14px 34px rgba(0,0,0,.22)}
  /* karty-mockupy */
  .card{background:#fff;color:#111;border-radius:28px;padding:34px 38px;font-family:'Inter';box-shadow:0 24px 60px rgba(0,0,0,.18)}
  .card.dark{background:#161C2C;color:#fff;border:2px solid #2A3350;box-shadow:none}
  .ct{font-weight:700;font-size:34px;opacity:.65;margin-bottom:20px;letter-spacing:.01em}
  .stack{display:flex;flex-direction:column;gap:22px}
  .chips{display:flex;gap:14px;flex-wrap:wrap}
  .chip{font-weight:800;font-size:38px;padding:12px 20px;border-radius:14px;line-height:1}
  .chip.ok{background:rgba(22,163,74,.18);color:#4ADE80}
  .chip.warn{background:#FEF3C7;color:${AMBER};font-size:32px}
  .big{font-weight:900;font-size:64px;line-height:1}.bad{color:${BAD}}.ok{color:${OK}}
  .bar{display:grid;grid-template-columns:230px 1fr 50px;align-items:center;gap:18px;margin-top:18px;font-weight:700;font-size:42px}
  .bar i{display:block;height:46px;width:var(--p);background:#111;border-radius:10px}.bar i.red{background:${BAD}}
  .bar .q{color:${BAD};font-weight:900;font-size:52px}
  .row{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:42px;font-weight:600;padding:22px 0;border-bottom:3px dashed #E5E5E5}
  .row.last{border-bottom:none}.row b{font-weight:800}.row .bad{font-size:60px;line-height:.8}
  .receipt .row:first-child{padding-top:4px}
  .audit .row{font-size:40px;padding:16px 0;border-bottom:2px solid #EEF0FF}.audit .ct{color:#10197A}
  .chart svg{width:100%;height:300px;display:block}
  .legend{display:flex;gap:36px;margin-top:22px;font-weight:700;font-size:38px}
  .legend i{display:inline-block;width:26px;height:26px;border-radius:50%;margin-right:12px;vertical-align:-2px}
  </style></head><body>
  <div class="safe" id="safe">
    <div class="logo">KWIATEK<span>media</span></div>
    <h1>${pl(cr.h1)}</h1>
    <div class="vis">${cr.visual}</div>
    <div class="cta">${pl(cr.cta)}</div>
  </div></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const files = [];
  for (const cr of CREATIVES) {
    for (const [fmt, f] of Object.entries(FORMATS)) {
      await page.setViewportSize({ width: f.w, height: f.h });
      await page.setContent(html(cr, f, fmt), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const fit = await page.evaluate(() => {
        const safe = document.getElementById('safe'), b = document.body, vis = document.querySelector('.vis');
        const need = () => vis.firstElementChild.getBoundingClientRect().height > vis.clientHeight + 1 || safe.scrollHeight > safe.clientHeight + 1;
        let v = 1, h1 = parseFloat(getComputedStyle(b).getPropertyValue('--h1'));
        while (need() && v > 0.78) { v -= 0.02; b.style.setProperty('--v', v); }
        while (need() && h1 > 72) { h1 -= 2; b.style.setProperty('--h1', h1 + 'px'); }
        return { v: +v.toFixed(2), h1, overflow: need() };
      });
      const file = `${cr.id}_${fmt}.png`;
      await page.screenshot({ path: path.join(OUT, file), clip: { x: 0, y: 0, width: f.w, height: f.h } });
      files.push(file);
      console.log(file, fit);
    }
  }
  // 06 (zdjęcie) w wersji pro = czysta wersja: twarz właściciela jest głównym obrazem.
  for (const fmt of ['4x5', '9x16']) fs.copyFileSync(path.join(__dirname, 'png', `06-zdjecie-konsultacja_${fmt}.png`), path.join(OUT, `06-zdjecie-konsultacja_${fmt}.png`));
  const all = fs.readdirSync(OUT).filter((f) => f.endsWith('.png')).sort();
  const img = (f) => 'data:image/png;base64,' + fs.readFileSync(path.join(OUT, f)).toString('base64');
  await page.setViewportSize({ width: 3200, height: 1800 });
  await page.setContent(`<body style="margin:0;background:#2a2a2a;padding:40px;display:grid;gap:30px">
    <div style="display:flex;gap:24px">${all.filter((f) => f.includes('4x5')).map((f) => `<img src="${img(f)}" style="width:500px">`).join('')}</div>
    <div style="display:flex;gap:24px">${all.filter((f) => f.includes('9x16')).map((f) => `<img src="${img(f)}" style="width:500px">`).join('')}</div></body>`);
  await page.screenshot({ path: path.join(__dirname, 'podglad-pro.png'), fullPage: true });
  await browser.close();
})();
