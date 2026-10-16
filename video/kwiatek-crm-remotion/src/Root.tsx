import React from "react";
import { Composition } from "remotion";
import { KwiatekCrmVideo } from "./Video";

const FPS = 30;
const DURATION = 60 * FPS;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KwiatekCRM-9x16"
        component={KwiatekCrmVideo}
        durationInFrames={DURATION}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{ layout: "v" }}
      />
      <Composition
        id="KwiatekCRM-16x9"
        component={KwiatekCrmVideo}
        durationInFrames={DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ layout: "h" }}
      />
    </>
  );
};
