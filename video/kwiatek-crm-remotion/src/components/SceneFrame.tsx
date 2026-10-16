import React from "react";
import { layouts, type Layout } from "../theme";
import { Backdrop, DemoTag, Headline } from "./Text";

type Props = {
  layout: Layout;
  title: React.ReactNode;
  caption?: React.ReactNode;
  children: React.ReactNode;
};

/** Wspólna rama sceny: tło, nagłówek, oznaczenie demo i kadr CRM. */
export const SceneFrame: React.FC<Props> = ({ layout, title, caption, children }) => {
  return (
    <div style={{ position: "absolute", inset: 0, width: layouts[layout].width, height: layouts[layout].height }}>
      <Backdrop />
      <Headline layout={layout} caption={caption}>
        {title}
      </Headline>
      {children}
      <DemoTag layout={layout} />
    </div>
  );
};
