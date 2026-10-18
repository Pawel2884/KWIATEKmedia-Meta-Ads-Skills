import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {C} from './theme';

/**
 * Square (1:1) source shown "contained" at full width inside the 4:5 frame,
 * with a blurred, zoomed copy filling the background so nothing of the
 * avatar gets cropped. `top` shifts the square inside the frame.
 */
export const ClipBox: React.FC<{
  src: string;
  kind: 'video' | 'image';
  top?: number;
  zoom?: [number, number];
  darkenBottom?: boolean;
}> = ({src, kind, top = 70, zoom = [1, 1], darkenBottom = true}) => {
  const frame = useCurrentFrame();
  const {durationInFrames, width} = useVideoConfig();
  const s = interpolate(frame, [0, durationInFrames], zoom, {extrapolateRight: 'clamp'});
  const file = staticFile(src);
  const media =
    kind === 'video' ? (
      <OffthreadVideo src={file} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    ) : (
      <Img src={file} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    );
  const mediaBg =
    kind === 'video' ? (
      <OffthreadVideo src={file} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    ) : (
      <Img src={file} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    );
  return (
    <AbsoluteFill style={{backgroundColor: C.navy}}>
      <AbsoluteFill style={{filter: 'blur(42px) brightness(0.45) saturate(1.3)', transform: 'scale(1.35)'}}>
        {mediaBg}
      </AbsoluteFill>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top,
          width,
          height: width,
          overflow: 'hidden',
          transform: `scale(${s})`,
          transformOrigin: '50% 40%',
          boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
        }}
      >
        {media}
      </div>
      {darkenBottom ? (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,16,32,0) 55%, rgba(11,16,32,0.72) 78%, rgba(11,16,32,0.96) 100%)',
          }}
        />
      ) : null}
    </AbsoluteFill>
  );
};
