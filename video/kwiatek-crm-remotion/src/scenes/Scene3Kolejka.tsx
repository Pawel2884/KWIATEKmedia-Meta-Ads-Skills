import React from "react";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

/** 10–17 s: pierwsza karta w kolejce telefonów: termin, źródło, co powiedzieć. */
export const Scene3Kolejka: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  return (
    <SceneFrame layout={layout} title="Wiesz, do kogo zadzwonić" caption="Termin, źródło i podpowiedź, co powiedzieć.">
      <Shot
        shot={shots.kolejka}
        viewport={vp}
        cam={
          layout === "v"
            ? [
                { frame: 0, rect: { x: 262, y: 240, w: 520, h: 290 } },
                { frame: 125, rect: { x: 262, y: 240, w: 520, h: 290 } },
                { frame: 160, rect: { x: 262, y: 262, w: 566, h: 300 } },
                { frame: 222, rect: { x: 262, y: 262, w: 566, h: 300 } },
              ]
            : [
                { frame: 0, rect: { x: 262, y: 200, w: 1050, h: 300 } },
                { frame: 222, rect: { x: 262, y: 214, w: 1000, h: 286 } },
              ]
        }
        highlights={[
          { rect: { x: 280, y: 318, w: 150, h: 22 }, from: 30, to: 85 },
          { rect: { x: 420, y: 356, w: 84, h: 40 }, from: 90, to: 135 },
          { rect: { x: 278, y: 410, w: 526, h: 36 }, from: 140, to: 215 },
        ]}
      />
    </SceneFrame>
  );
};
