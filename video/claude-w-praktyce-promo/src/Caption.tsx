import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, FONT} from './theme';

export type Line = {text: string; accent?: boolean; size?: number};

/**
 * Big burned-in Polish captions. Each line pops in with a spring, word by word.
 * `at` = frame (inside the scene) when the caption starts.
 */
export const Caption: React.FC<{
  lines: Line[];
  at?: number;
  until?: number;
  y?: number;
  align?: 'left' | 'center';
  wordStagger?: number;
}> = ({lines, at = 0, until, y = 1040, align = 'center', wordStagger = 3}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = frame - at;
  if (local < 0) return null;
  const fade = until !== undefined ? interpolate(frame, [until - 8, until], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 1;
  let wordIndex = 0;
  return (
    <div
      style={{
        position: 'absolute',
        left: 72,
        right: 72,
        top: y,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        gap: 10,
        opacity: fade,
        fontFamily: FONT,
        fontWeight: 800,
      }}
    >
      {lines.map((line, li) => {
        const size = line.size ?? 64;
        const words = line.text.split(' ');
        return (
          <div
            key={li}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: align === 'center' ? 'center' : 'flex-start',
              gap: `0 ${size * 0.26}px`,
              lineHeight: 1.1,
            }}
          >
            {words.map((w, wi) => {
              const idx = wordIndex++;
              const p = spring({frame: local - idx * wordStagger, fps, config: {damping: 14, stiffness: 180, mass: 0.6}});
              const op = interpolate(p, [0, 1], [0, 1]);
              return (
                <span
                  key={wi}
                  style={{
                    display: 'inline-block',
                    fontSize: size,
                    color: line.accent ? C.navy : C.white,
                    background: line.accent ? C.orange : 'transparent',
                    padding: line.accent ? `${size * 0.05}px ${size * 0.22}px` : 0,
                    borderRadius: line.accent ? 14 : 0,
                    textShadow: line.accent ? 'none' : '0 4px 24px rgba(0,0,0,0.75), 0 0 2px rgba(0,0,0,0.9)',
                    transform: `scale(${0.6 + 0.4 * p}) translateY(${(1 - p) * 30}px)`,
                    opacity: op,
                    textTransform: 'none',
                  }}
                >
                  {w}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const Tag: React.FC<{text: string; at?: number}> = ({text, at = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({frame: frame - at, fps, config: {damping: 16, stiffness: 160}});
  if (frame < at) return null;
  return (
    <div
      style={{
        position: 'absolute',
        top: 88,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        transform: `translateY(${(1 - p) * -40}px)`,
        opacity: p,
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: 4,
          color: C.white,
          background: 'rgba(11,16,32,0.72)',
          border: `2px solid ${C.violet}`,
          padding: '12px 26px',
          borderRadius: 999,
          textTransform: 'uppercase',
        }}
      >
        {text}
      </div>
    </div>
  );
};
