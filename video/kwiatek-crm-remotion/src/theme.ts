export const colors = {
  bg: "#f3f5f9",
  bgSoft: "#e9edf4",
  card: "#ffffff",
  ink: "#0f172a",
  muted: "#475569",
  blue: "#1d4ed8",
  blueSoft: "#dbeafe",
  mask: "#eef1f6",
  navy: "#0b1220",
};

export const font = {
  family: "'Inter Local', Inter, 'DejaVu Sans', sans-serif",
};

export type Layout = "v" | "h";

/** Stałe układu dla każdej proporcji. Kadry projektowane osobno. */
export const layouts = {
  v: {
    width: 1080,
    height: 1920,
    pad: 80,
    headlineTop: 270,
    headlineSize: 74,
    captionSize: 38,
    viewport: { x: 80, y: 560, w: 920, h: 980 },
    demoTagY: 1565,
  },
  h: {
    width: 1920,
    height: 1080,
    pad: 100,
    headlineTop: 72,
    headlineSize: 64,
    captionSize: 34,
    viewport: { x: 100, y: 250, w: 1720, h: 740 },
    demoTagY: 1010,
  },
} as const;
