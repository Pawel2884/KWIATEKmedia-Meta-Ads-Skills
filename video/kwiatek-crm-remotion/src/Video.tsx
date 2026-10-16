import React from "react";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { useVideoConfig } from "remotion";
import { loadFonts } from "./fonts";
import type { Layout } from "./theme";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Dzien } from "./scenes/Scene2Dzien";
import { Scene3Kolejka } from "./scenes/Scene3Kolejka";
import { Scene4Kontekst } from "./scenes/Scene4Kontekst";
import { Scene5Tablica } from "./scenes/Scene5Tablica";
import { Scene6Kalendarz } from "./scenes/Scene6Kalendarz";
import { Scene7Opieka } from "./scenes/Scene7Opieka";
import { Scene8Zamkniecie } from "./scenes/Scene8Zamkniecie";
import { Scene9CTA } from "./scenes/Scene9CTA";

export type VideoProps = { layout: Layout };

const T = 12; // klatki przejścia

/**
 * Montaż 60 s (1800 klatek @ 30 fps). Każda sekwencja poza ostatnią
 * ma dodane T klatek, które zjada przejście, więc suma to dokładnie 1800.
 */
export const KwiatekCrmVideo: React.FC<VideoProps> = ({ layout }) => {
  loadFonts();
  const { fps } = useVideoConfig();
  const tr = () => (
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
  );
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence name="1 Hook" durationInFrames={120 + T} premountFor={fps}>
        <Scene1Hook layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="2 Dzień" durationInFrames={180 + T} premountFor={fps}>
        <Scene2Dzien layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="3 Kolejka" durationInFrames={210 + T} premountFor={fps}>
        <Scene3Kolejka layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="4 Kontekst" durationInFrames={210 + T} premountFor={fps}>
        <Scene4Kontekst layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="5 Tablica" durationInFrames={210 + T} premountFor={fps}>
        <Scene5Tablica layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="6 Kalendarz" durationInFrames={210 + T} premountFor={fps}>
        <Scene6Kalendarz layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="7 Opieka" durationInFrames={240 + T} premountFor={fps}>
        <Scene7Opieka layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="8 Zamknięcie" durationInFrames={210 + T} premountFor={fps}>
        <Scene8Zamkniecie layout={layout} />
      </TransitionSeries.Sequence>
      {tr()}
      <TransitionSeries.Sequence name="9 CTA" durationInFrames={210} premountFor={fps}>
        <Scene9CTA layout={layout} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
