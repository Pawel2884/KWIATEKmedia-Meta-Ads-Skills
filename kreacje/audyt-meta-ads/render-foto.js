// Kreacja 06: ze zdjęciem właściciela (hook 10, CTA 7; rozwinięcie 10 w Primary Text).
// Uruchom: node kreacje/audyt-meta-ads/render-foto.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PRO = process.env.PRO === '1';
const { decor, proCss } = require('./decor');
const OUT = path.join(__dirname, PRO ? 'png-pro' : 'png');
fs.mkdirSync(OUT, { recursive: true });
const PHOTO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, 'zdjecia', 'pawel.png')).toString('base64');
const SRC = { w: 941, h: 1672 };
const pl = (s) => s.replace(/(^|[\s>])([aiouwzAIOUWZ])\s/g, '$1$2 ');

const C = { bg: '#1B1B20', fg: '#FFFFFF', accent: '#C6FF3D', onAccent: '#0B0F1A' };
const HOOK = 'Zanim wydasz kolejne pieniądze na Meta&nbsp;Ads, <mark>sprawdź, co możesz poprawić.</mark>';
const CTA = 'Umów bezpłatną konsultację reklamową';

// photo: skala zdjęcia i pozycja górnej krawędzi czapki (src y=170) na kanwie.
const FORMATS = {
  '4x5': { w: 1080, h: 1350, top: 72, side: 84, h1: 84, scale: 0.8, capY: 560, ctaBottom: 64, ctaInPanel: false },
  '9x16': { w: 1080, h: 1920, top: 0, side: 68, h1: 80, scale: 0.9, capY: 40, ctaInPanel: true, safeBottom: 1240 },
};

function html(f, fmt) {
  const pw = SRC.w * f.scale, ph = SRC.h * f.scale;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${f.w}px;height:${f.h}px;background:${C.bg};overflow:hidden;position:relative}
  body{font-family:'Inter Display','Inter',sans-serif;color:${C.fg};-webkit-font-smoothing:antialiased;--h1:${f.h1}px}
  .photo{position:absolute;width:${pw}px;height:${ph}px;left:${(f.w - pw) / 2}px;top:var(--py);
    background:url(${PHOTO}) center/cover no-repeat;
    -webkit-mask-image:linear-gradient(to right,transparent 0,#000 170px,#000 calc(100% - 170px),transparent 100%),
      ${fmt === '9x16' ? 'linear-gradient(to bottom,#000 0,#000 var(--fadeA),transparent var(--fadeB))' : 'linear-gradient(to bottom,transparent 0,#000 160px,#000 100%)'};
    -webkit-mask-composite:source-in;mask-composite:intersect}
  .panel{position:absolute;left:${f.side}px;right:${f.side}px;top:${f.top}px;display:flex;flex-direction:column;gap:34px}
  .logo{font-family:'Inter';font-weight:800;font-size:44px;letter-spacing:-0.5px;line-height:1}
  .logo span{font-weight:400}
  h1{font-weight:900;font-size:var(--h1);line-height:1.15;letter-spacing:-0.025em;text-wrap:pretty}
  mark{background:${C.accent};color:${C.onAccent};padding:0.02em 0.14em 0.04em;margin:0 -0.04em;line-height:1;
    box-decoration-break:clone;-webkit-box-decoration-break:clone;border-radius:6px}
  .cta{background:${C.accent};color:${C.onAccent};font-family:'Inter';font-weight:800;font-size:46px;
    line-height:1.12;padding:28px 12px;border-radius:18px;text-align:center;white-space:nowrap}
  .cta.bottom{position:absolute;left:60px;right:60px;bottom:${f.ctaBottom}px}
  ${PRO ? proCss(C.accent) : ''}
  </style></head><body>
  <div class="photo" id="photo"></div>
  ${PRO ? decor('06', { ...f, head: fmt === '9x16' ? { x: 540, y: 330 } : { x: 540, y: 820 } }) : ''}
  <div class="panel" id="panel">
    ${fmt === '4x5' ? '<div class="logo">KWIATEK<span>media</span></div>' : ''}
    <h1>${pl(HOOK)}</h1>
    ${f.ctaInPanel ? `<div class="cta" id="cta">${pl(CTA)}</div><div class="logo">KWIATEK<span>media</span></div>` : ''}
  </div>
  ${f.ctaInPanel ? '' : `<div class="cta bottom" id="cta">${pl(CTA)}</div>`}
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  for (const [fmt, f] of Object.entries(FORMATS)) {
    await page.setViewportSize({ width: f.w, height: f.h });
    await page.setContent(html(f, fmt), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const info = await page.evaluate(({ f, fmt }) => {
      const b = document.body, panel = document.getElementById('panel'), cta = document.getElementById('cta');
      const sc = f.scale, r = (n) => Math.round(n);
      let py;
      if (fmt === '9x16') {
        py = f.capY - 170 * sc;
        const beard = py + 860 * sc;
        b.style.setProperty('--fadeA', (870 * sc - 40) + 'px'); // tuż pod brodą zdjęcie znika
        b.style.setProperty('--fadeB', (870 * sc + 60) + 'px');
        panel.style.top = (beard + 50) + 'px';
        let h1 = f.h1;
        while (cta.getBoundingClientRect().bottom > f.safeBottom && h1 > 68) { h1 -= 2; b.style.setProperty('--h1', h1 + 'px'); }
      } else {
        const pb = panel.getBoundingClientRect().bottom;
        py = Math.max(f.capY, pb + 30) - 170 * sc;
      }
      b.style.setProperty('--py', py + 'px');
      const ctaR = cta.getBoundingClientRect(), txt = cta.scrollWidth > cta.clientWidth;
      return { h1: getComputedStyle(b).getPropertyValue('--h1'), eyesY: r(py + 500 * sc), beardY: r(py + 860 * sc),
        panelTop: r(panel.getBoundingClientRect().top), ctaTop: r(ctaR.top), ctaBottom: r(ctaR.bottom), ctaOverflowX: txt };
    }, { f, fmt });
    await page.screenshot({ path: path.join(OUT, `06-zdjecie-konsultacja_${fmt}.png`), clip: { x: 0, y: 0, width: f.w, height: f.h } });
    console.log(fmt, info);
  }
  await browser.close();
})();
