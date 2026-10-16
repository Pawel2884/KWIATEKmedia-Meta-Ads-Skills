import React from "react";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

/** 46–53 s: zamknięcie dnia: niewykonane działania i kontakty bez następnego kroku. */
export const Scene8Zamkniecie: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  return (
    <SceneFrame
      layout={layout}
      title="Kończysz dzień z jasnym planem"
      caption="Niewykonane zadania i kontakty bez następnego kroku."
    >
      <Shot
        shot={shots.zamkniecie}
        viewport={vp}
        cam={
          layout === "v"
            ? [
                { frame: 0, rect: { x: 263, y: 290, w: 600, h: 440 } },
                { frame: 70, rect: { x: 263, y: 290, w: 600, h: 440 } },
                { frame: 130, rect: { x: 750, y: 290, w: 600, h: 440 } },
              ]
            : [
                { frame: 0, rect: { x: 263, y: 300, w: 1080, h: 430 } },
                { frame: 222, rect: { x: 273, y: 310, w: 1070, h: 426 } },
              ]
        }
        highlights={
          layout === "v"
            ? [
                { rect: { x: 278, y: 322, w: 240, h: 22 }, from: 14, to: 60 },
                { rect: { x: 278, y: 562, w: 300, h: 22 }, from: 64, to: 110 },
                { rect: { x: 1226, y: 598, w: 104, h: 98 }, from: 140, to: 215 },
              ]
            : [
                { rect: { x: 278, y: 322, w: 240, h: 22 }, from: 14, to: 60 },
                { rect: { x: 278, y: 562, w: 300, h: 22 }, from: 70, to: 120 },
                { rect: { x: 1226, y: 598, w: 104, h: 98 }, from: 130, to: 215 },
              ]
        }
      />
    </SceneFrame>
  );
};
