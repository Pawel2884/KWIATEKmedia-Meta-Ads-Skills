import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {IconPin, MessengerGlyph} from '../components/Icons';
import {Card, DrawPath, Headline, Label, Reveal, SceneShell, clamp, useCardSpring, useEnter} from '../components/primitives';
import {C, F} from '../theme';

const MapCard: React.FC<{delay: number}> = ({delay}) => {
	const frame = useCurrentFrame();
	const s = useCardSpring(delay);
	const drop = interpolate(frame, [delay + 8, delay + 20], [-120, 0], {...clamp, easing: (t) => 1 - (1 - t) * (1 - t)});
	const pinO = useEnter(delay + 8, 6);
	return (
		<Card style={{left: 110, top: 760, width: 860, height: 420, overflow: 'hidden', opacity: s, transform: `translateY(${(1 - s) * 70}px)`}}>
			<svg width={860} height={420} style={{position: 'absolute', inset: 0}}>
				<rect width={860} height={420} fill="#F8F1EE" />
				<path d="M -20 300 C 200 260 420 330 880 250" stroke="#fff" strokeWidth={46} fill="none" />
				<path d="M 300 -20 C 330 140 280 300 350 440" stroke="#fff" strokeWidth={34} fill="none" />
				<path d="M 620 -20 L 560 440" stroke="#fff" strokeWidth={26} fill="none" />
				<path d="M -20 110 L 880 150" stroke="#fff" strokeWidth={22} fill="none" />
				<rect x={380} y={170} width={140} height={70} rx={12} fill={C.blush} />
				<rect x={90} y={170} width={170} height={60} rx={12} fill="#EFE3DF" />
				<rect x={660} y={300} width={150} height={80} rx={12} fill="#EFE3DF" />
				<text x={60} y={292} fontFamily={F.sans} fontWeight={700} fontSize={24} fill={C.plumSoft} transform="rotate(-4 60 292)">
					ul. Głęboka
				</text>
			</svg>
			<div style={{position: 'absolute', left: 430 - 50, top: 90 + drop, opacity: pinO}}>
				<div style={{width: 100, height: 100, borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', background: C.rose, boxShadow: '0 14px 30px rgba(169,76,98,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<div style={{width: 38, height: 38, borderRadius: 19, background: '#fff'}} />
				</div>
			</div>
		</Card>
	);
};

export const S7End: React.FC<{dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const btn = useCardSpring(24);
	const pulse = interpolate(frame, [44, 52, 62], [1, 1.045, 1], clamp);
	const frameDraw = interpolate(frame, [0, 40], [0, 1], clamp);
	return (
		<SceneShell dur={dur} push={0.02} exitTo="fade">
			<svg width={1080} height={1920} style={{position: 'absolute', inset: 0}}>
				<DrawPath d="M 84 230 C 300 200 500 262 760 222 C 880 204 960 214 996 226" progress={frameDraw} stroke={C.gold} width={4} />
				<DrawPath d="M 996 1600 C 780 1630 560 1570 320 1606 C 200 1624 120 1614 84 1602" progress={frameDraw} stroke={C.gold} width={4} />
			</svg>
			<AbsoluteFill style={{top: 300, alignItems: 'center'}}>
				<Reveal delay={2}>
					<Headline size={150} style={{letterSpacing: '-0.02em'}}>
						Kwiatek
					</Headline>
				</Reveal>
				<Reveal delay={8}>
					<Label size={42} color={C.rose} weight={800} style={{letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 6}}>
						Studio Urody Art & Beauty
					</Label>
				</Reveal>
				<Reveal delay={14}>
					<div style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 30}}>
						<IconPin size={44} color={C.plum} />
						<Label size={42} color={C.plum} weight={700}>
							ul. Głęboka 10/25, Lublin
						</Label>
					</div>
				</Reveal>
			</AbsoluteFill>
			<MapCard delay={10} />
			<div
				style={{
					position: 'absolute',
					left: 150,
					top: 1250,
					width: 780,
					height: 140,
					borderRadius: 70,
					background: `linear-gradient(135deg, ${C.messenger}, #7B5CFF)`,
					boxShadow: '0 24px 50px rgba(10,124,255,0.35)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 24,
					opacity: btn,
					transform: `translateY(${(1 - btn) * 60}px) scale(${pulse})`,
				}}
			>
				<MessengerGlyph size={70} color="#fff" bolt={C.messenger} />
				<span style={{fontFamily: F.sans, fontWeight: 800, fontSize: 52, color: '#fff'}}>Napisz „WŁOSY”</span>
			</div>
			<AbsoluteFill style={{top: 1430, alignItems: 'center'}}>
				<Reveal delay={34}>
					<Label size={38} color={C.plum} weight={700}>
						600 zł z włosami · do 31 października
					</Label>
				</Reveal>
			</AbsoluteFill>
		</SceneShell>
	);
};
