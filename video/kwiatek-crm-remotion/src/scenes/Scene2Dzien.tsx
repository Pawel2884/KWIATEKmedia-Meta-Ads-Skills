import React from "react";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

/** 4–10 s: kafelki panelu dnia, potem lista zadań i sprawy do reakcji. */
export const Scene2Dzien: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  return (
    <SceneFrame
      layout={layout}
      title="Zacznij dzień od konkretów"
      caption="Zaległości, nowe kontakty i sprawy do reakcji w jednym panelu."
    >
      <Shot
        shot={shots.dzisiaj}
        viewport={vp}
        cam={
          layout === "v"
            ? [
                { frame: 0, rect: { x: 260, y: 140, w: 540, h: 575 } },
                { frame: 45, rect: { x: 260, y: 140, w: 540, h: 575 } },
                { frame: 95, rect: { x: 262, y: 420, w: 540, h: 575 } },
                { frame: 135, rect: { x: 262, y: 420, w: 540, h: 575 } },
                { frame: 180, rect: { x: 770, y: 400, w: 540, h: 575 } },
              ]
            : [
                { frame: 0, rect: { x: 260, y: 140, w: 1060, h: 456 } },
                { frame: 60, rect: { x: 260, y: 140, w: 1060, h: 456 } },
                { frame: 110, rect: { x: 260, y: 440, w: 1060, h: 456 } },
              ]
        }
        highlights={
          layout === "v"
            ? [
                { rect: { x: 268, y: 236, w: 236, h: 150 }, from: 12, to: 60 },
                { rect: { x: 272, y: 474, w: 440, h: 112 }, from: 100, to: 150 },
                { rect: { x: 990, y: 590, w: 300, h: 32 }, from: 168, to: 192, dim: 0.18 },
              ]
            : [
                { rect: { x: 268, y: 236, w: 236, h: 150 }, from: 12, to: 60 },
                { rect: { x: 272, y: 474, w: 670, h: 112 }, from: 115, to: 155 },
                { rect: { x: 990, y: 590, w: 300, h: 32 }, from: 160, to: 192 },
              ]
        }
      />
    </SceneFrame>
  );
};
