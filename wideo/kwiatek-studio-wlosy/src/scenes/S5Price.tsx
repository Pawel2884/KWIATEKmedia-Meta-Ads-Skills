import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {IconCheck, IconClock} from '../components/Icons';
import {Card, Headline, Label, Pill, Reveal, SceneShell, clamp, easeOut, useCardSpring, useEnter} from '../components/primitives';
import {C, F, SHADOW} from '../theme';

const Item: React.FC<{delay: number; text: string}> = ({delay, text}) => {
	const p = useEnter(delay, 12);
	return (
		<div style={{display: 'flex', alignItems: 'center', gap: 22, opacity: p, transform: `translateX(${(1 - p) * -30}px)`, marginTop: 22}}>
			<div style={{width: 58, height: 58, borderRadius: 29, background: C.blush, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<IconCheck size={36} color={C.roseDark} stroke={3} />
			</div>
			<Label size={42} color={C.plum} weight={700}>
				{text}
			</Label>
		</div>
	);
};

const CalendarPage: React.FC<{delay: number}> = ({delay}) => {
	const s = useCardSpring(delay);
	return (
		<div
			style={{
				position: 'absolute',
				left: 740,
				top: 430,
				width: 230,
				height: 250,
				borderRadius: 32,
				background: C.white,
				boxShadow: SHADOW,
				overflow: 'hidden',
				transform: `rotate(6deg) scale(${s})`,
				opacity: s,
			}}
		>
			<div style={{height: 76, background: C.rose, color: '#fff', fontFamily: F.sans, fontWeight: 800, fontSize: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.12em'}}>
				PAŹ
			</div>
			<div style={{fontFamily: F.serif, fontWeight: 700, fontSize: 130, color: C.plum, textAlign: 'center', lineHeight: '170px'}}>31</div>
		</div>
	);
};

export const S5Price: React.FC<{dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const card = useCardSpring(4);
	const count = interpolate(frame, [10, 26], [0, 600], {...clamp, easing: easeOut});
	const ring = interpolate(frame, [26, 46], [0, 1], clamp);
	const pill = useEnter(52, 12);
	return (
		<SceneShell dur={dur} push={0.04}>
			<AbsoluteFill style={{top: 270, alignItems: 'center'}}>
				<Reveal delay={0}>
					<Headline size={96}>Wszystko w cenie</Headline>
				</Reveal>
			</AbsoluteFill>
			<Card style={{left: 110, top: 580, width: 860, height: 720, opacity: card, transform: `translateY(${(1 - card) * 90}px)`}}>
				<div style={{position: 'absolute', left: 70, top: 64, right: 70}}>
					<Label size={34} color={C.rose} weight={800} style={{letterSpacing: '0.04em'}}>
						Przedłużanie keratynowe
					</Label>
					<div style={{position: 'relative', height: 250}}>
						<div
							style={{
								position: 'absolute',
								left: 150,
								top: 125,
								width: 200,
								height: 200,
								marginLeft: -100,
								marginTop: -100,
								borderRadius: '50%',
								border: `6px solid ${C.gold}`,
								opacity: ring > 0 ? 1 - ring : 0,
								transform: `scale(${1 + ring * 2.2})`,
							}}
						/>
						<div style={{fontFamily: F.sans, fontWeight: 800, fontSize: 230, color: C.plum, letterSpacing: '-0.04em', lineHeight: '250px', fontVariantNumeric: 'tabular-nums'}}>
							{Math.round(count)}
							<span style={{fontSize: 110, marginLeft: 16, color: C.rose}}>zł</span>
						</div>
					</div>
					<div style={{height: 3, background: '#F3E6E3', margin: '18px 0 8px'}} />
					<Item delay={28} text="włosy bioproteinowe" />
					<Item delay={35} text="założenie" />
					<Item delay={42} text="proste lub falowane" />
				</div>
			</Card>
			<CalendarPage delay={16} />
			<AbsoluteFill style={{top: 1390, alignItems: 'center'}}>
				<div style={{opacity: pill, transform: `translateY(${(1 - pill) * 24}px)`}}>
					<Pill bg={C.plum} color="#fff" style={{fontSize: 40, padding: '22px 40px'}}>
						<IconClock size={42} color={C.goldLight} stroke={2.2} />
						Cena do 31 października
					</Pill>
				</div>
			</AbsoluteFill>
		</SceneShell>
	);
};
