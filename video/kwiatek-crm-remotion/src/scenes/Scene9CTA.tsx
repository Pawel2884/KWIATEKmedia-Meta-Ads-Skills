import React from "react";
import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { shots } from "../shots";
import { colors, font, layouts, type Layout } from "../theme";

/** 53–60 s: CTA na rozmytym panelu dnia. Bez danych logowania. */
export const Scene9CTA: React.FC<{ layout: Layout }> = ({ layout }) => {
  const frame = useCurrentFrame();
  const L = layouts[layout];
  const v = layout === "v";
  const fade = (from: number) =>
    interpolate(frame, [from, from + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    });
  const rise = (from: number) => `0px ${(1 - fade(from)) * 26}px`;
  const bgScale = interpolate(frame, [0, 210], [1.06, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: colors.navy, fontFamily: font.family }}>
      <Img
        src={staticFile(shots.dzisiaj.file)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: v ? "18% top" : "center top",
          filter: "blur(14px)",
          scale: String(bgScale),
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(11,18,32,0.72) 0%, rgba(11,18,32,0.86) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: L.pad,
          right: L.pad,
          top: v ? 520 : 240,
          display: "flex",
          flexDirection: "column",
          alignItems: v ? "flex-start" : "center",
          textAlign: v ? "left" : "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            fontSize: v ? 40 : 32,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#93c5fd",
            opacity: fade(0),
            translate: rise(0),
          }}
        >
          Kwiatek CRM
        </div>
        <div
          style={{
            marginTop: v ? 28 : 22,
            fontSize: v ? 86 : 92,
            lineHeight: 1.06,
            fontWeight: 800,
            letterSpacing: -1.5,
            maxWidth: v ? 920 : 1400,
            textWrap: "balance",
            opacity: fade(6),
            translate: rise(6),
          }}
        >
          Przetestuj Kwiatek CRM za darmo
        </div>
        <div
          style={{
            marginTop: v ? 54 : 44,
            fontSize: v ? 44 : 40,
            fontWeight: 600,
            color: "#fff",
            background: colors.blue,
            borderRadius: 999,
            padding: v ? "22px 46px" : "18px 44px",
            boxShadow: "0 16px 40px rgba(29,78,216,0.45)",
            opacity: fade(26),
            translate: rise(26),
          }}
        >
          Wejdź do zakładki Demo
        </div>
        <div
          style={{
            marginTop: v ? 60 : 48,
            fontSize: v ? 58 : 60,
            fontWeight: 700,
            letterSpacing: -0.5,
            color: "#fff",
            opacity: fade(42),
            translate: rise(42),
          }}
        >
          www.crm.kwiatekmedia.pl
        </div>
        <div
          style={{
            marginTop: v ? 40 : 30,
            fontSize: v ? 34 : 28,
            fontWeight: 500,
            color: "rgba(255,255,255,0.72)",
            opacity: fade(60),
          }}
        >
          Demo zawiera dane fikcyjne.
        </div>
      </div>
    </div>
  );
};
