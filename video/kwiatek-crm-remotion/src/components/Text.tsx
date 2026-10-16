import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { colors, font, layouts, type Layout } from "../theme";

type HeadlineProps = {
  layout: Layout;
  children: React.ReactNode;
  caption?: React.ReactNode;
  delay?: number;
};

/** Nagłówek sceny: jeden komunikat, duży, z polskimi znakami. */
export const Headline: React.FC<HeadlineProps> = ({ layout, children, caption, delay = 0 }) => {
  const frame = useCurrentFrame();
  const L = layouts[layout];
  const t = interpolate(frame, [delay, delay + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const tc = interpolate(frame, [delay + 8, delay + 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <div
      style={{
        position: "absolute",
        left: L.pad,
        top: L.headlineTop,
        width: L.width - L.pad * 2,
        fontFamily: font.family,
      }}
    >
      <div
        style={{
          fontSize: L.headlineSize,
          lineHeight: 1.1,
          fontWeight: 800,
          color: colors.ink,
          letterSpacing: -1.2,
          opacity: t,
          translate: `0px ${(1 - t) * 22}px`,
          textWrap: "balance",
        }}
      >
        {children}
      </div>
      {caption ? (
        <div
          style={{
            marginTop: layout === "v" ? 22 : 14,
            fontSize: L.captionSize,
            lineHeight: 1.3,
            fontWeight: 500,
            color: colors.muted,
            opacity: tc,
            translate: `0px ${(1 - tc) * 14}px`,
            maxWidth: layout === "v" ? 920 : 1300,
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  );
};

/** Dyskretne oznaczenie danych demonstracyjnych. */
export const DemoTag: React.FC<{ layout: Layout }> = ({ layout }) => {
  const L = layouts[layout];
  return (
    <div
      style={{
        position: "absolute",
        top: L.demoTagY,
        right: L.pad,
        fontFamily: font.family,
        fontSize: layout === "v" ? 36 : 28,
        fontWeight: 600,
        color: "#7c4a12",
        background: "#fdf1dc",
        border: "1px solid #f3d9a8",
        borderRadius: 999,
        padding: layout === "v" ? "10px 26px" : "6px 20px",
        letterSpacing: 0.2,
      }}
    >
      Dane demonstracyjne
    </div>
  );
};

/** Pasek tła wspólny dla scen. */
export const Backdrop: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgSoft} 100%)`,
    }}
  />
);
