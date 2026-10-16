import React from "react";
import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { colors } from "../theme";
import type { Rect, ShotDef } from "../shots";

export type CamKey = { frame: number; rect: Rect };

export type Highlight = {
  rect: Rect;
  from: number;
  to: number;
  /** przyciemnienie reszty ekranu, 0..1 */
  dim?: number;
  label?: string;
};

type Props = {
  shot: ShotDef;
  viewport: Rect;
  /** klatki kluczowe kamery: prostokąt w px źródłowych, który ma być widoczny */
  cam: CamKey[];
  highlights?: Highlight[];
  maxZoom?: number;
  /** wejście karty: przesunięcie i opacity w pierwszych klatkach */
  enter?: boolean;
  /** użyteczny obszar zrzutu (px źródłowe); reszta jest przycięta, np. pasek przewijania */
  bounds?: Rect;
  radius?: number;
};

const ease = Easing.inOut(Easing.cubic);

const useRect = (cam: CamKey[], frame: number): Rect => {
  if (cam.length === 1) return cam[0].rect;
  const frames = cam.map((k) => k.frame);
  const pick = (key: keyof Rect) =>
    interpolate(
      frame,
      frames,
      cam.map((k) => k.rect[key]),
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
    );
  return { x: pick("x"), y: pick("y"), w: pick("w"), h: pick("h") };
};

/**
 * Kamera nad zrzutem ekranu. Obraz, maski kwot i podświetlenia leżą w jednym
 * kontenerze przeskalowanym transformacją, więc maski nigdy nie odklejają się
 * od kwot podczas ruchu.
 */
export const Shot: React.FC<Props> = ({
  shot,
  viewport,
  cam,
  highlights = [],
  maxZoom = 2.3,
  enter = true,
  radius = 28,
  bounds,
}) => {
  const frame = useCurrentFrame();
  const r = useRect(cam, frame);

  let zoom = Math.min(viewport.w / r.w, viewport.h / r.h);
  zoom = Math.min(zoom, maxZoom);

  const cx = r.x + r.w / 2;
  const cy = r.y + r.h / 2;
  let tx = viewport.w / 2 - cx * zoom;
  let ty = viewport.h / 2 - cy * zoom;

  const b = bounds ?? { x: 0, y: 0, w: shot.w, h: shot.h };
  const imgW = b.w * zoom;
  const imgH = b.h * zoom;
  // nie pokazuj pustki poza użytecznym obszarem; mniejszy obraz wyśrodkuj
  tx =
    imgW >= viewport.w
      ? Math.min(-b.x * zoom, Math.max(viewport.w - (b.x + b.w) * zoom, tx))
      : (viewport.w - imgW) / 2 - b.x * zoom;
  ty =
    imgH >= viewport.h
      ? Math.min(-b.y * zoom, Math.max(viewport.h - (b.y + b.h) * zoom, ty))
      : (viewport.h - imgH) / 2 - b.y * zoom;
  const clip = `inset(${b.y}px ${shot.w - b.x - b.w}px ${shot.h - b.y - b.h}px ${b.x}px)`;

  const enterT = enter
    ? interpolate(frame, [0, 16], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.cubic),
      })
    : 1;

  return (
    <div
      style={{
        position: "absolute",
        left: viewport.x,
        top: viewport.y,
        width: viewport.w,
        height: viewport.h,
        borderRadius: radius,
        overflow: "hidden",
        background: colors.card,
        boxShadow:
          "0 24px 60px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(15,23,42,0.06)",
        opacity: enterT,
        translate: `0px ${(1 - enterT) * 28}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: shot.w,
          height: shot.h,
          transformOrigin: "0 0",
          transform: `translate(${tx}px, ${ty}px) scale(${zoom})`,
          clipPath: clip,
        }}
      >
        <Img
          src={staticFile(shot.file)}
          style={{ width: shot.w, height: shot.h, display: "block" }}
        />
        {shot.masks.map((m, i) => (
          <div
            key={`m${i}`}
            style={{
              position: "absolute",
              left: m.x,
              top: m.y,
              width: m.w,
              height: m.h,
              borderRadius: 6,
              background: colors.mask,
            }}
          />
        ))}
        {highlights.map((hl, i) => {
          const a = interpolate(
            frame,
            [hl.from, hl.from + 10, hl.to - 8, hl.to],
            [0, 1, 1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const grow = interpolate(frame, [hl.from, hl.from + 14], [1.06, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });
          if (a <= 0) return null;
          const dim = hl.dim ?? 0.22;
          const bw = 3 / zoom;
          return (
            <div
              key={`h${i}`}
              style={{
                position: "absolute",
                left: hl.rect.x - 8,
                top: hl.rect.y - 6,
                width: hl.rect.w + 16,
                height: hl.rect.h + 12,
                borderRadius: 10,
                border: `${bw}px solid ${colors.blue}`,
                boxShadow: `0 0 0 9999px rgba(15, 23, 42, ${dim * a}), 0 0 ${18 / zoom}px rgba(29, 78, 216, 0.45)`,
                opacity: a,
                scale: String(grow),
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
