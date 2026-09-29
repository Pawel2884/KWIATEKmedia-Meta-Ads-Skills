import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {strandPath} from '../components/HairProfile';
import {DrawPath, Headline, Label, Pill, Reveal, SceneShell, clamp, easeOut, useCardSpring, useEnter} from '../components/primitives';
import {C} from '../theme';

const CX = 540;
const NAT_TOP = 560;
const BOND = 1010;
const EXT_BOTTOM = 1500;

const Annotation: React.FC<{delay: number; y: number; side: 'left' | 'right'; text: string; accent?: boolean}> = ({delay, y, side, text, accent}) => {
	const line = useEnter(delay, 12);
	const pill = useCardSpring(delay + 6);
	const x1 = side === 'left' ? CX - 40 : CX + 50;
	const x2 = side === 'left' ? 440 : 640;
	return (
		<>
			<svg width={1080} height={1920} style={{position: 'absolute', inset: 0}}>
				<DrawPath d={`M ${x1} ${y} L ${x2} ${y}`} progress={line} stroke={accent ? C.gold : C.plumSoft} width={3} />
				<circle cx={x1} cy={y} r={8 * line} fill={accent ? C.gold : C.plumSoft} />
			</svg>
			<div
				style={{
					position: 'absolute',
					top: y - 42,
					...(side === 'left' ? {right: 1080 - x2 + 6} : {left: x2 + 6}),
					opacity: pill,
					transform: `scale(${0.9 + 0.1 * pill})`,
					transformOrigin: side === 'left' ? 'right center' : 'left center',
				}}
			>
				<Pill bg={accent ? C.plum : C.white} color={accent ? C.white : C.plum} style={{fontSize: 32, padding: '16px 26px'}}>
					{text}
				</Pill>
			</div>
		</>
	);
};

export const S3Keratin: React.FC<{dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const nat = interpolate(frame, [2, 22], [0, 1], {...clamp, easing: easeOut});
	const cap = useCardSpring(18);
	const ext = interpolate(frame, [26, 48], [0, 1], {...clamp, easing: easeOut});
	const glow = interpolate(frame, [22, 34, 60], [0, 1, 0.5], clamp);
	const ph = frame * 0.04;

	return (
		<SceneShell dur={dur} push={0.09} origin="50% 55%">
			<AbsoluteFill style={{top: 262, alignItems: 'center'}}>
				<Reveal delay={2}>
					<Headline size={100}>Metoda keratynowa</Headline>
				</Reveal>
				<Reveal delay={8}>
					<Label size={40} style={{marginTop: 10}}>
						małe łączenia, pasmo po paśmie
					</Label>
				</Reveal>
			</AbsoluteFill>
			<svg width={1080} height={1920} style={{position: 'absolute', inset: 0}}>
				<defs>
					<linearGradient id="bond" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor={C.goldLight} />
						<stop offset="1" stopColor={C.gold} />
					</linearGradient>
					<radialGradient id="bondGlow">
						<stop offset="0" stopColor={C.goldLight} stopOpacity="0.9" />
						<stop offset="1" stopColor={C.goldLight} stopOpacity="0" />
					</radialGradient>
				</defs>
				{[-16, -8, 0, 8, 16].map((dx, i) => (
					<DrawPath key={`n${i}`} d={strandPath(CX + dx, NAT_TOP, BOND, 5, 0.8, ph + i * 0.6)} progress={nat} stroke={i % 2 ? C.hair : '#2E1A14'} width={6} />
				))}
				{[-22, -13, -4, 5, 14, 23].map((dx, i) => (
					<DrawPath
						key={`e${i}`}
						d={strandPath(CX + dx, BOND + 30, EXT_BOTTOM - (i % 3) * 18, 7, 1.1, ph + i * 0.5)}
						progress={ext}
						stroke={i % 2 ? C.hairMid : C.hair}
						width={6}
					/>
				))}
				<circle cx={CX} cy={BOND + 18} r={110} fill="url(#bondGlow)" opacity={glow} />
				<g transform={`translate(${CX} ${BOND + 18}) scale(${cap})`}>
					<rect x={-34} y={-46} width={68} height={92} rx={34} fill="url(#bond)" />
					<rect x={-20} y={-36} width={14} height={50} rx={7} fill="#fff" opacity={0.55} />
				</g>
			</svg>
			<Annotation delay={30} y={740} side="left" text="Twoje włosy" />
			<Annotation delay={42} y={BOND + 18} side="right" text="Keratyna" accent />
			<Annotation delay={54} y={1300} side="left" text="Włosy bioproteinowe" />
		</SceneShell>
	);
};
