import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {C} from './theme';

/**
 * Square (1:1) source shown "contained" at full width inside the 4:5 frame,
 * with a pre-blurred copy (public/assets/blur/, made by tools/prep_blur.sh)
 * filling the background so nothing of the avatar gets cropped and the
 * render does not pay for a CSS blur on every frame.
 */
const blurPath = (src: string) => {
  const name = src.split('/').pop()!;
  const base = name.replace(/\.[^.]+$/, '');
  return name.endsWith('.mp4') ? `assets/blur/${base}.mp4` : `assets/blur/${base}.jpg`;
};

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
  const bg = staticFile(blurPath(src));
  const fill: React.CSSProperties = {width: '100%', height: '100%', objectFit: 'cover'};
  return (
    <AbsoluteFill style={{backgroundColor: C.navy}}>
      <AbsoluteFill>
        {kind === 'video' ? <OffthreadVideo src={bg} muted style={fill} /> : <Img src={bg} style={fill} />}
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
        {kind === 'video' ? <OffthreadVideo src={file} muted style={fill} /> : <Img src={file} style={fill} />}
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
