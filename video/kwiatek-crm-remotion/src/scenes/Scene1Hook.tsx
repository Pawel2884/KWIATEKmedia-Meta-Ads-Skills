import React from "react";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

/** 0–4 s: zbliżenie na zaległe zadanie z terminem. */
export const Scene1Hook: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  const row = { x: 272, y: 474, w: 400, h: 48 };
  return (
    <SceneFrame layout={layout} title="Klient czeka. Pamiętasz, na co?" caption="Zaległe zadanie i termin widać od razu.">
      <Shot
        shot={shots.dzisiaj}
        viewport={vp}
        cam={
          layout === "v"
            ? [
                { frame: 0, rect: { x: 265, y: 300, w: 450, h: 480 } },
                { frame: 30, rect: { x: 265, y: 300, w: 450, h: 480 } },
                { frame: 130, rect: { x: 262, y: 250, w: 520, h: 555 } },
              ]
            : [
                { frame: 0, rect: { x: 262, y: 430, w: 820, h: 352 } },
                { frame: 30, rect: { x: 262, y: 430, w: 820, h: 352 } },
                { frame: 130, rect: { x: 262, y: 400, w: 960, h: 414 } },
              ]
        }
        highlights={[{ rect: layout === "v" ? row : { ...row, w: 670 }, from: 14, to: 132, dim: 0.26 }]}
      />
    </SceneFrame>
  );
};
