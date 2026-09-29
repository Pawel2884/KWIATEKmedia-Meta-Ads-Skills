import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {HairProfile} from '../components/HairProfile';
import {IconPin} from '../components/Icons';
import {Headline, Pill, Reveal, SceneShell, clamp, easeOut, useEnter} from '../components/primitives';
import {C, F} from '../theme';

const Y_SHORT = 830;
const Y_LONG = 1400;
const OFFSET_Y = 150;

// Ruler on the left that tracks the hair tip.
const Ruler: React.FC<{tip: number; appear: number}> = ({tip, appear}) => {
	const top = Y_SHORT + OFFSET_Y - 40;
	const bottom = Y_LONG + OFFSET_Y + 30;
	const ticks = [];
	for (let y = top; y <= bottom; y += 29) ticks.push(y);
	return (
		<svg width={1080} height={1920} style={{position: 'absolute', inset: 0, opacity: appear}}>
			<rect x={150} y={top} width={64} height={bottom - top} rx={14} fill="#fff" opacity={0.85} />
			{ticks.map((y, i) => (
				<line key={y} x1={150} x2={i % 5 === 0 ? 196 : 176} y1={y} y2={y} stroke={C.plumSoft} strokeWidth={i % 5 === 0 ? 3 : 2} opacity={0.7} />
			))}
			<line x1={214} x2={400} y1={tip} y2={tip} stroke={C.gold} strokeWidth={3} strokeDasharray="8 8" />
			<circle cx={214} cy={tip} r={11} fill={C.gold} />
		</svg>
	);
};

export const S1Hook: React.FC<{dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const grow = interpolate(frame, [5, 36], [0, 1], {...clamp, easing: easeOut});
	const yEnd = Y_SHORT + (Y_LONG - Y_SHORT) * grow;
	const sparkle = interpolate(frame, [20, 34, 60, 72], [0, 1, 1, 0], clamp);
	const line = useEnter(0, 14);
	const pill = useEnter(34, 14);
	const cm = Math.round(interpolate(grow, [0, 1], [20, 55]));

	return (
		<SceneShell dur={dur} push={0.05} origin="50% 60%" enter={false}>
			<AbsoluteFill style={{transform: `translateY(${OFFSET_Y}px)`}}>
				<HairProfile yEnd={yEnd} phase={frame * 0.05} sparkle={sparkle} lineProgress={line} />
			</AbsoluteFill>
			<Ruler tip={yEnd + OFFSET_Y} appear={useEnter(3, 10)} />
			<div
				style={{
					position: 'absolute',
					left: 232,
					top: yEnd + OFFSET_Y - 70,
					fontFamily: F.sans,
					fontWeight: 800,
					fontSize: 46,
					color: C.plum,
					opacity: useEnter(6, 8),
				}}
			>
				{cm} cm
			</div>
			<AbsoluteFill style={{top: 262, alignItems: 'center'}}>
				<Reveal delay={-7}>
					<Headline size={124}>Długie włosy</Headline>
				</Reveal>
				<Reveal delay={3}>
					<Headline size={80} italic weight={600} color={C.rose}>
						jeszcze tej jesieni?
					</Headline>
				</Reveal>
			</AbsoluteFill>
			<div style={{position: 'absolute', right: 84, top: 1290, opacity: pill, transform: `translateY(${(1 - pill) * 24}px)`}}>
				<Pill>
					<IconPin size={38} color={C.rose} stroke={2.2} />
					Lublin · Głęboka 10
				</Pill>
			</div>
		</SceneShell>
	);
};
