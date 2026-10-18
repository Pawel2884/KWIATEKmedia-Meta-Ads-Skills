import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, FONT} from './theme';

/** Floating feature chips that appear next to the presenter (scene 6). */
export const Chips: React.FC<{items: string[]; at?: number}> = ({items, at = 10}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const positions: Array<{x: number; y: number; r: number}> = [
    {x: 560, y: 150, r: -3},
    {x: 600, y: 300, r: 2},
    {x: 540, y: 450, r: -2},
    {x: 610, y: 600, r: 3},
    {x: 560, y: 750, r: -1},
  ];
  return (
    <AbsoluteFill>
      {items.map((t, i) => {
        const p = spring({frame: frame - at - i * 9, fps, config: {damping: 13, stiffness: 150}});
        const pos = positions[i % positions.length];
        const bob = Math.sin((frame + i * 17) / 14) * 4;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: pos.x,
              top: pos.y + bob,
              transform: `translateX(${(1 - p) * 120}px) rotate(${pos.r}deg) scale(${0.7 + 0.3 * p})`,
              opacity: p,
              fontFamily: FONT,
              fontWeight: 800,
              fontSize: 34,
              color: C.white,
              background: 'linear-gradient(135deg, rgba(255,122,26,0.95), rgba(139,92,246,0.95))',
              padding: '16px 24px',
              borderRadius: 18,
              boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
              maxWidth: 440,
              lineHeight: 1.15,
            }}
          >
            {t}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const Counter: React.FC<{value: number; suffix?: string; label: string; at: number; x: number; y: number}> = ({value, suffix = '', label, at, x, y}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({frame: frame - at, fps, config: {damping: 15, stiffness: 120}});
  const n = Math.round(interpolate(p, [0, 1], [0, value]));
  return (
    <div style={{position: 'absolute', left: x, top: y, width: 440, opacity: p, transform: `translateY(${(1 - p) * 40}px)`, fontFamily: FONT, fontWeight: 800}}>
      <div style={{fontSize: 128, color: C.orange, lineHeight: 1, textShadow: '0 0 40px rgba(255,122,26,0.45)'}}>
        {n}
        <span style={{fontSize: 80}}>{suffix}</span>
      </div>
      <div style={{fontSize: 40, color: C.white, lineHeight: 1.15, marginTop: 6}}>{label}</div>
    </div>
  );
};

const Pill: React.FC<{text: string; at: number; x: number; y: number}> = ({text, at, x, y}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({frame: frame - at, fps, config: {damping: 14, stiffness: 160}});
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity: p,
        transform: `scale(${0.7 + 0.3 * p})`,
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: 36,
        color: C.navy,
        background: C.white,
        padding: '14px 26px',
        borderRadius: 999,
      }}
    >
      {text}
    </div>
  );
};

/** Scene 7: product box + the real numbers from the landing page. */
export const NumbersScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const boxIn = spring({frame, fps, config: {damping: 14, stiffness: 90}});
  const float = Math.sin(frame / 18) * 10;
  return (
    <AbsoluteFill style={{backgroundColor: C.navy}}>
      <Img src={staticFile('assets/bg_network.png')} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transform: `scale(${1 + frame / 2400})`}} />
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(11,16,32,0.25), rgba(11,16,32,0.75))'}} />
      <div style={{position: 'absolute', left: 60, top: 90, fontFamily: FONT, fontWeight: 800, fontSize: 54, color: C.white, lineHeight: 1.1, opacity: interpolate(frame, [0, 12], [0, 1], {extrapolateRight: 'clamp'})}}>
        W środku dostajesz:
      </div>
      <Counter value={12} label="kroków" at={8} x={60} y={200} />
      <Counter value={74} label="lekcji z zadaniem" at={22} x={60} y={450} />
      <Counter value={130} suffix="+" label="gotowych wzorów do skopiowania" at={36} x={60} y={700} />
      <Pill text="bez programowania" at={60} x={60} y={990} />
      <Pill text="dostęp na zawsze" at={72} x={60} y={1070} />
      <Pill text="certyfikat" at={84} x={60} y={1150} />
      <Img
        src={staticFile('assets/kurs-pudelko.webp')}
        style={{
          position: 'absolute',
          right: 30,
          top: 330 + float,
          width: 520,
          opacity: boxIn,
          transform: `translateX(${(1 - boxIn) * 300}px) rotate(${-6 + boxIn * 6}deg)`,
          filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.6))',
        }}
      />
    </AbsoluteFill>
  );
};

/** Scene 9: author, credibility. */
export const AuthorScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({frame, fps, config: {damping: 15, stiffness: 100}});
  return (
    <AbsoluteFill style={{backgroundColor: C.navy}}>
      <Img src={staticFile('assets/bg_network.png')} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7}} />
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(11,16,32,0.2), rgba(11,16,32,0.85))'}} />
      <div
        style={{
          position: 'absolute',
          left: 540 - 280,
          top: 110,
          width: 560,
          height: 560,
          borderRadius: 40,
          overflow: 'hidden',
          border: `6px solid ${C.orange}`,
          transform: `scale(${0.8 + 0.2 * p})`,
          opacity: p,
          boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
        }}
      >
        <Img src={staticFile('assets/kurs-pawel.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1 + frame / 1800})`}} />
      </div>
      <Img src={staticFile('assets/kurs-logo.webp')} style={{position: 'absolute', left: 60, top: 40, height: 56, opacity: 0.95}} />
    </AbsoluteFill>
  );
};

/** Final end card. */
export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({frame, fps, config: {damping: 13, stiffness: 110}});
  const pulse = 1 + Math.sin(frame / 6) * 0.025;
  const btn = spring({frame: frame - 18, fps, config: {damping: 12, stiffness: 160}});
  const url = spring({frame: frame - 34, fps, config: {damping: 14, stiffness: 140}});
  return (
    <AbsoluteFill style={{backgroundColor: C.navy}}>
      <Img src={staticFile('assets/bg_network.png')} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transform: `scale(${1.05 + frame / 3000})`}} />
      <AbsoluteFill style={{background: 'radial-gradient(circle at 50% 35%, rgba(139,92,246,0.25), rgba(11,16,32,0.9) 70%)'}} />
      <Img
        src={staticFile('assets/kurs-pudelko.webp')}
        style={{
          position: 'absolute',
          left: 540 - 300,
          top: 80,
          width: 600,
          opacity: p,
          transform: `scale(${(0.7 + 0.3 * p) * pulse})`,
          filter: 'drop-shadow(0 40px 70px rgba(0,0,0,0.7))',
        }}
      />
      <div style={{position: 'absolute', top: 870, left: 0, right: 0, textAlign: 'center', fontFamily: FONT, fontWeight: 800, fontSize: 60, color: C.white, opacity: p, lineHeight: 1.1}}>
        Claude w praktyce 2.0
      </div>
      <div
        style={{
          position: 'absolute',
          top: 980,
          left: 540 - 400,
          width: 800,
          textAlign: 'center',
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 50,
          color: C.navy,
          background: C.orange,
          padding: '26px 0',
          borderRadius: 24,
          opacity: btn,
          transform: `scale(${(0.8 + 0.2 * btn) * pulse})`,
          boxShadow: '0 0 60px rgba(255,122,26,0.55)',
        }}
      >
        Kupuję kurs i zaczynam
      </div>
      <div style={{position: 'absolute', top: 1110, left: 0, right: 0, textAlign: 'center', fontFamily: FONT, fontWeight: 800, fontSize: 38, color: C.white, opacity: url, letterSpacing: 1}}>
        claudewpraktyce20.kwiatekmedia.pl
      </div>
      <div style={{position: 'absolute', top: 1190, left: 0, right: 0, textAlign: 'center', fontFamily: FONT, fontWeight: 800, fontSize: 30, color: C.muted, opacity: url}}>
        14 dni na zwrot · dostęp na zawsze · faktura VAT
      </div>
    </AbsoluteFill>
  );
};

/** Short flash used on hard cuts. */
export const Flash: React.FC<{at: number}> = ({at}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [at, at + 2, at + 9], [0, 0.55, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  if (o <= 0) return null;
  return <AbsoluteFill style={{backgroundColor: C.orange, opacity: o, mixBlendMode: 'screen'}} />;
};
