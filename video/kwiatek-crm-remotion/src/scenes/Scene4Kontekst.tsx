import React from "react";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

/** 17–24 s: karta kontaktu: zanim zadzwonisz, następny krok, cel rozmowy. Kwoty zamaskowane. */
export const Scene4Kontekst: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  return (
    <SceneFrame
      layout={layout}
      title="Widzisz, co ustaliliście"
      caption="Kontekst przed telefonem, następny krok i cel rozmowy."
    >
      <Shot
        shot={shots.kartaKontaktu}
        viewport={vp}
        bounds={{ x: 0, y: 0, w: 1300, h: 926 }}
        cam={
          layout === "v"
            ? [
                { frame: 0, rect: { x: 806, y: 250, w: 490, h: 420 } },
                { frame: 222, rect: { x: 806, y: 290, w: 480, h: 410 } },
              ]
            : [
                { frame: 0, rect: { x: 250, y: 240, w: 1050, h: 452 } },
                { frame: 222, rect: { x: 260, y: 256, w: 1040, h: 448 } },
              ]
        }
        highlights={[
          { rect: { x: 822, y: 402, w: 456, h: 140 }, from: 24, to: 85 },
          { rect: { x: 820, y: 553, w: 460, h: 40 }, from: 90, to: 140 },
          { rect: { x: 820, y: 604, w: 460, h: 46 }, from: 145, to: 215 },
        ]}
      />
    </SceneFrame>
  );
};
