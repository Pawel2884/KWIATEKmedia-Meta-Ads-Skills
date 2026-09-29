import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {strandPath} from '../components/HairProfile';
import {IconCheck} from '../components/Icons';
import {Card, DrawPath, Headline, Label, Reveal, SceneShell, useCardSpring, useEnter} from '../components/primitives';
import {C, F} from '../theme';

const Option: React.FC<{left: number; delay: number; wavy: boolean; label: string; checkAt: number}> = ({left, delay, wavy, label, checkAt}) => {
	const frame = useCurrentFrame();
	const s = useCardSpring(delay);
	const draw = useEnter(delay + 4, 22);
	const check = useEnter(checkAt, 10);
	const ph = frame * 0.06;
	const W = 432;
	return (
		<Card
			style={{
				left,
				top: 560,
				width: W,
				height: 800,
				opacity: s,
				transform: `translateY(${(1 - s) * 90}px)`,
				outline: `${6 * check}px solid ${C.rose}`,
				outlineOffset: -3,
				overflow: 'hidden',
			}}
		>
			<div style={{position: 'absolute', inset: 0, background: `linear-gradient(180deg, #FFFFFF 0%, ${C.cream} 100%)`}} />
			<svg width={W} height={800} style={{position: 'absolute', inset: 0}}>
				{Array.from({length: 9}, (_, i) => (
					<DrawPath
						key={i}
						d={strandPath(96 + i * 30, 70, 620 - (i % 3) * 14, wavy ? 26 : 2, wavy ? 2.2 : 0.5, ph * (wavy ? 1 : 0.4) + i * 0.25)}
						progress={draw}
						stroke={[C.hair, C.hairMid, '#5A3829'][i % 3]}
						width={9}
					/>
				))}
			</svg>
			<div style={{position: 'absolute', left: 0, right: 0, bottom: 50, textAlign: 'center'}}>
				<div style={{fontFamily: F.serif, fontSize: 70, fontWeight: 700, color: C.plum}}>{label}</div>
			</div>
			<div
				style={{
					position: 'absolute',
					right: 26,
					top: 26,
					width: 76,
					height: 76,
					borderRadius: 38,
					background: C.rose,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					transform: `scale(${check})`,
				}}
			>
				<IconCheck size={46} color="#fff" stroke={3} />
			</div>
		</Card>
	);
};

export const S4Choice: React.FC<{dur: number}> = ({dur}) => (
	<SceneShell dur={dur}>
		<AbsoluteFill style={{top: 270, alignItems: 'center'}}>
			<Reveal delay={2}>
				<Headline size={100}>Proste czy falowane?</Headline>
			</Reveal>
			<Reveal delay={8}>
				<Label size={40} style={{marginTop: 10}}>
					włosy bioproteinowe – Ty wybierasz
				</Label>
			</Reveal>
		</AbsoluteFill>
		<Option left={84} delay={8} wavy={false} label="Proste" checkAt={34} />
		<Option left={564} delay={14} wavy label="Falowane" checkAt={46} />
		<AbsoluteFill style={{top: 1410, alignItems: 'center'}}>
			<Reveal delay={52}>
				<Label size={44} color={C.plum} weight={800}>
					Obie wersje w tej samej cenie
				</Label>
			</Reveal>
		</AbsoluteFill>
	</SceneShell>
);
