import React from "react";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

/** 24–31 s: tablica sprzedaży, przesunięcie między kolumnami, brak następnego kroku. */
export const Scene5Tablica: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  return (
    <SceneFrame
      layout={layout}
      title="Każda szansa ma swój etap"
      caption="Tablica pokazuje, gdzie brakuje następnego kroku."
    >
      <Shot
        shot={shots.tablica}
        viewport={vp}
        bounds={{ x: 0, y: 0, w: 1248, h: 926 }}
        cam={
          layout === "v"
            ? [
                { frame: 0, rect: { x: 262, y: 410, w: 520, h: 520 } },
                { frame: 110, rect: { x: 262, y: 410, w: 520, h: 520 } },
                { frame: 170, rect: { x: 545, y: 410, w: 520, h: 520 } },
              ]
            : [
                { frame: 0, rect: { x: 260, y: 230, w: 1060, h: 456 } },
                { frame: 40, rect: { x: 260, y: 230, w: 1060, h: 456 } },
                { frame: 100, rect: { x: 262, y: 415, w: 1000, h: 430 } },
                { frame: 222, rect: { x: 262, y: 425, w: 990, h: 426 } },
              ]
        }
        highlights={
          layout === "v"
            ? [
                { rect: { x: 294, y: 784, w: 176, h: 24 }, from: 40, to: 110 },
                { rect: { x: 820, y: 420, w: 240, h: 30 }, from: 180, to: 222 },
              ]
            : [
                { rect: { x: 386, y: 238, w: 108, h: 28 }, from: 10, to: 45 },
                { rect: { x: 294, y: 784, w: 176, h: 24 }, from: 110, to: 175 },
                { rect: { x: 820, y: 420, w: 240, h: 30 }, from: 180, to: 222 },
              ]
        }
      />
    </SceneFrame>
  );
};
