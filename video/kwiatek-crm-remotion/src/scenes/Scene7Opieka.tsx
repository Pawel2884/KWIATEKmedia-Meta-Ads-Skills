import React from "react";
import { Easing, interpolate, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { Shot } from "../components/Shot";
import { SceneFrame } from "../components/SceneFrame";
import { shots } from "../shots";
import { layouts, type Layout } from "../theme";

const SWITCH = 118;

/** 38–46 s: opieka nad obecnymi klientami, potem szczegóły zgłoszonego problemu i rytm kontaktu. */
export const Scene7Opieka: React.FC<{ layout: Layout }> = ({ layout }) => {
  const vp = layouts[layout].viewport;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const x = interpolate(frame, [SWITCH - 10, SWITCH + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });
  return (
    <SceneFrame
      layout={layout}
      title="Pamiętasz też o obecnych klientach"
      caption="Rytm kontaktu, odnowienia i zgłoszone problemy."
    >
      <div style={{ position: "absolute", inset: 0, opacity: 1 - x }}>
        <Shot
          shot={shots.opieka}
          viewport={vp}
          cam={
            layout === "v"
              ? [
                  { frame: 0, rect: { x: 525, y: 225, w: 520, h: 170 } },
                  { frame: 50, rect: { x: 525, y: 225, w: 520, h: 170 } },
                  { frame: 95, rect: { x: 790, y: 225, w: 520, h: 170 } },
                ]
              : [
                  { frame: 0, rect: { x: 260, y: 140, w: 1060, h: 456 } },
                  { frame: 118, rect: { x: 280, y: 160, w: 1040, h: 448 } },
                ]
          }
          highlights={[
            { rect: { x: 536, y: 236, w: 236, h: 150 }, from: 10, to: 52 },
            { rect: { x: 802, y: 236, w: 236, h: 150 }, from: 56, to: 86 },
            { rect: { x: 1068, y: 236, w: 236, h: 150 }, from: 90, to: SWITCH },
          ]}
        />
      </div>
      <Sequence from={SWITCH - 10} premountFor={fps} name="Szczegóły współpracy">
        <div style={{ position: "absolute", inset: 0, opacity: x }}>
          <Shot
            shot={shots.wspolpraca}
            viewport={vp}
            enter={false}
            bounds={{ x: 0, y: 0, w: 1300, h: 926 }}
            cam={
              layout === "v"
                ? [
                    { frame: 0, rect: { x: 816, y: 130, w: 470, h: 300 } },
                    { frame: 140, rect: { x: 816, y: 150, w: 470, h: 300 } },
                  ]
                : [
                    { frame: 0, rect: { x: 560, y: 110, w: 740, h: 400 } },
                    { frame: 140, rect: { x: 580, y: 120, w: 720, h: 396 } },
                  ]
            }
            highlights={[
              { rect: { x: 836, y: 148, w: 430, h: 84 }, from: 18, to: 76 },
              { rect: { x: 836, y: 373, w: 430, h: 36 }, from: 80, to: 140 },
            ]}
          />
        </div>
      </Sequence>
    </SceneFrame>
  );
};
