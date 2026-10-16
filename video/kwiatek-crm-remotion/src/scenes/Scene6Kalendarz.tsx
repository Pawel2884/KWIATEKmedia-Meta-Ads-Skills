import React from "react";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

/** 31–38 s: widok tygodnia, potem piątek i weekend. Notatka czwartkowa zamaskowana. */
export const Scene6Kalendarz: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  return (
    <SceneFrame
      layout={layout}
      title="Telefony i spotkania w jednym miejscu"
      caption="Tydzień w kalendarzu, zaległe oznaczone."
    >
      <Shot
        shot={shots.kalendarz}
        viewport={vp}
        bounds={layout === "v" ? { x: 0, y: 300, w: 1363, h: 636 } : undefined}
        cam={
          layout === "v"
            ? [
                { frame: 0, rect: { x: 575, y: 300, w: 560, h: 310 } },
                { frame: 80, rect: { x: 575, y: 300, w: 560, h: 310 } },
                { frame: 140, rect: { x: 885, y: 320, w: 440, h: 300 } },
              ]
            : [
                { frame: 0, rect: { x: 263, y: 150, w: 1080, h: 465 } },
                { frame: 80, rect: { x: 263, y: 150, w: 1080, h: 465 } },
                { frame: 140, rect: { x: 700, y: 290, w: 660, h: 330 } },
              ]
        }
        highlights={[
          { rect: { x: 890, y: 318, w: 140, h: 286 }, from: 120, to: 165, dim: 0.18 },
          { rect: { x: 1044, y: 318, w: 292, h: 286 }, from: 168, to: 215, dim: 0.18 },
        ]}
      />
    </SceneFrame>
  );
};
