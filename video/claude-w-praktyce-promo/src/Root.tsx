import React from 'react';
import {Composition} from 'remotion';
import {Promo, PROMO_DURATION, FPS} from './Promo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Promo"
      component={Promo}
      width={1080}
      height={1350}
      fps={FPS}
      durationInFrames={PROMO_DURATION}
    />
  );
};
