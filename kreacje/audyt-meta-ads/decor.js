// Elementy tła dla wersji "pro" (PRO=1). Leżą pod tekstem, z niskim kryciem, żeby nie psuć kontrastu.
let uid = 0;

const grain = (op) => {
  const id = 'n' + uid++;
  return `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:${op};mix-blend-mode:overlay;pointer-events:none">
    <filter id="${id}"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#${id})"/></svg>`;
};

const rings = ({ cx, cy, r0, step, n, color, op, sw = 2, mask = '' }) =>
  `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:${op};${mask}" overflow="visible">${
    Array.from({ length: n }, (_, i) =>
      `<circle cx="${cx}" cy="${cy}" r="${r0 + i * step}" fill="none" stroke="${color}" stroke-width="${sw}"/>`).join('')
  }</svg>`;

const disc = ({ cx, cy, r, color, op }) =>
  `<div style="position:absolute;left:${cx - r}px;top:${cy - r}px;width:${2 * r}px;height:${2 * r}px;border-radius:50%;background:${color};opacity:${op}"></div>`;

const dots = ({ color, op, gap = 34, r = 2.2, mask }) =>
  `<div style="position:absolute;inset:0;opacity:${op};background-image:radial-gradient(${color} ${r}px,transparent ${r + 0.6}px);
    background-size:${gap}px ${gap}px;-webkit-mask-image:${mask};mask-image:${mask}"></div>`;

const gridLines = ({ color, op, gap = 54, mask }) =>
  `<div style="position:absolute;inset:0;opacity:${op};background-image:linear-gradient(${color} 1.5px,transparent 1.5px),
    linear-gradient(90deg,${color} 1.5px,transparent 1.5px);background-size:${gap}px ${gap}px;-webkit-mask-image:${mask};mask-image:${mask}"></div>`;

const glow = ({ x, y, r, color, op }) =>
  `<div style="position:absolute;inset:0;opacity:${op};background:radial-gradient(circle ${r}px at ${x}px ${y}px,${color},transparent 70%)"></div>`;

// f: format (w, h, top, bottom). Strefa "pusta" 9:16 na dole też dostaje grafikę.
function decor(id, f) {
  const { w, h } = f;
  const story = h > 1500;
  const low = story ? h - f.bottom : h; // dolna krawędź treści
  const L = [];
  switch (id) {
    case '01':
      L.push(glow({ x: w, y: 0, r: 760, color: '#C6FF3D', op: 0.16 }));
      L.push(glow({ x: 0, y: h, r: 700, color: '#3D5BFF', op: 0.16 }));
      L.push(dots({ color: '#FFFFFF', op: 0.09, mask: 'linear-gradient(200deg,#000 0%,transparent 55%)' }));
      L.push(rings({ cx: w + 40, cy: -40, r0: 170, step: 78, n: 8, color: '#C6FF3D', op: 0.22 }));
      if (story) L.push(rings({ cx: w * 0.15, cy: h - 120, r0: 140, step: 78, n: 6, color: '#C6FF3D', op: 0.14 }));
      L.push(grain(0.18));
      break;
    case '02':
      L.push(dots({ color: '#111111', op: 0.13, gap: 30, r: 2.4, mask: 'linear-gradient(160deg,transparent 35%,#000 100%)' }));
      L.push(disc({ cx: w + 60, cy: story ? low + 300 : h + 80, r: story ? 380 : 260, color: '#111111', op: 0.07 }));
      L.push(rings({ cx: w + 60, cy: story ? low + 300 : h + 80, r0: story ? 440 : 320, step: 64, n: 5, color: '#111111', op: 0.16 }));
      L.push(rings({ cx: -60, cy: 60, r0: 90, step: 46, n: 4, color: '#111111', op: 0.12 }));
      L.push(grain(0.16));
      break;
    case '03':
      L.push(glow({ x: 0, y: 0, r: 820, color: '#FF9A62', op: 0.55 }));
      L.push(glow({ x: w, y: h, r: 760, color: '#D93A06', op: 0.5 }));
      L.push(rings({ cx: w + 30, cy: story ? f.top + 260 : 330, r0: 120, step: 70, n: 9, color: '#FFFFFF', op: 0.26 }));
      if (story) L.push(rings({ cx: 140, cy: h - 260, r0: 110, step: 70, n: 6, color: '#FFFFFF', op: 0.2 }));
      L.push(grain(0.2));
      break;
    case '04':
      L.push(gridLines({ color: '#121212', op: 0.07, mask: 'radial-gradient(circle at 85% 15%,#000 0%,transparent 70%)' }));
      L.push(rings({ cx: w - 40, cy: story ? low + 260 : h - 40, r0: 160, step: 60, n: 6, color: '#D7261E', op: 0.22 }));
      L.push(disc({ cx: w - 40, cy: story ? low + 260 : h - 40, r: 110, color: '#D7261E', op: 0.12 }));
      L.push(grain(0.12));
      break;
    case '05':
      L.push(glow({ x: w, y: 0, r: 820, color: '#6D80FF', op: 0.6 }));
      L.push(glow({ x: 0, y: h, r: 900, color: '#0B1890', op: 0.7 }));
      L.push(dots({ color: '#FFFFFF', op: 0.14, mask: 'linear-gradient(180deg,#000 0%,transparent 60%)' }));
      L.push(rings({ cx: w + 20, cy: 40, r0: 150, step: 74, n: 7, color: '#FFE14D', op: 0.22 }));
      if (story) L.push(rings({ cx: w * 0.5, cy: h + 120, r0: 260, step: 74, n: 6, color: '#FFFFFF', op: 0.12 }));
      L.push(grain(0.18));
      break;
    case '06': {
      // f.head: środek głowy na kanwie; pierścienie omijają twarz (maska z dziurą).
      const { x, y } = f.head;
      const hole = `-webkit-mask-image:radial-gradient(circle at ${x}px ${y}px,transparent 300px,#000 420px);mask-image:radial-gradient(circle at ${x}px ${y}px,transparent 300px,#000 420px)`;
      L.push(glow({ x: w, y: 0, r: 700, color: '#C6FF3D', op: 0.1 }));
      L.push(dots({ color: '#FFFFFF', op: 0.07, mask: story ? 'linear-gradient(0deg,#000 0%,transparent 55%)' : 'linear-gradient(180deg,#000 0%,transparent 45%)' }));
      L.push(rings({ cx: x, cy: y, r0: 340, step: 70, n: 7, color: '#C6FF3D', op: 0.28, mask: hole }));
      L.push(grain(0.14));
      break;
    }
  }
  return `<div class="decor" style="position:absolute;inset:0;overflow:hidden;pointer-events:none">${L.join('')}</div>`;
}

// Drobne dodatki "pro": znak przy logo, cień pod CTA.
const proCss = (accent) => `
  .logo::before{content:'';display:inline-block;width:22px;height:22px;border-radius:50%;background:${accent};margin-right:14px;vertical-align:-1px}
  .cta{box-shadow:0 18px 44px rgba(0,0,0,.28)}`;

module.exports = { decor, proCss };
