import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {strandPath} from '../components/HairProfile';
import {IconCalendar, IconCheck, IconSparkle} from '../components/Icons';
import {Card, DrawPath, Headline, Label, Reveal, SceneShell, clamp, easeOut, useCardSpring, useEnter} from '../components/primitives';
import {C, F} from '../theme';

const Row: React.FC<{
	top: number;
	delay: number;
	icon: React.ReactNode;
	title: string;
	sub: string;
	big: string;
	bigColor: string;
	bar: number;
	barColor: string;
	strandLen: number;
	done?: number;
}> = ({top, delay, icon, title, sub, big, bigColor, bar, barColor, strandLen, done = 0}) => {
	const s = useCardSpring(delay);
	const frame = useCurrentFrame();
	return (
		<Card style={{left: 84, top, width: 912, height: 400, opacity: s, transform: `translateY(${(1 - s) * 80}px)`}}>
			<svg width={120} height={400} style={{position: 'absolute', left: 30, top: 0}}>
				{[0, 1, 2, 3, 4].map((i) => (
					<DrawPath
						key={i}
						d={strandPath(40 + i * 10, 50, 50 + 300 * strandLen, 4, 1.2, frame * 0.05 + i)}
						progress={1}
						stroke={i % 2 ? C.hairMid : C.hair}
						width={5}
					/>
				))}
			</svg>
			<div style={{position: 'absolute', left: 170, top: 56, right: 44}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
					{icon}
					<Label size={40} color={C.plum} weight={800}>
						{title}
					</Label>
				</div>
				<Label size={32} style={{marginTop: 10}}>
					{sub}
				</Label>
				<div style={{fontFamily: F.serif, fontWeight: 700, fontSize: 92, color: bigColor, marginTop: 8, display: 'flex', alignItems: 'center', gap: 18}}>
					{big}
					{done > 0 && (
						<div style={{width: 70, height: 70, borderRadius: 35, background: C.rose, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${done})`}}>
							<IconCheck size={44} color="#fff" stroke={3} />
						</div>
					)}
				</div>
				<div style={{marginTop: 18, height: 16, borderRadius: 8, background: '#F3E6E3', overflow: 'hidden'}}>
					<div style={{height: '100%', width: `${bar * 100}%`, borderRadius: 8, background: barColor}} />
				</div>
			</div>
		</Card>
	);
};

export const S2Wait: React.FC<{dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const slow = interpolate(frame, [14, dur], [0.02, 0.12], clamp);
	const fast = interpolate(frame, [36, 50], [0, 1], {...clamp, easing: easeOut});
	const done = useEnter(50, 10);
	return (
		<SceneShell dur={dur}>
			<AbsoluteFill style={{top: 270, alignItems: 'center'}}>
				<Reveal delay={2}>
					<Headline size={96}>Czekać, aż odrosną?</Headline>
				</Reveal>
				<Reveal delay={8}>
					<Label size={40} style={{marginTop: 14, textAlign: 'center'}}>
						Włosy rosną ok. 1 cm miesięcznie
					</Label>
				</Reveal>
			</AbsoluteFill>
			<Row
				top={580}
				delay={10}
				icon={<IconCalendar size={46} color={C.plumSoft} />}
				title="Naturalnie"
				sub="+30 cm to mniej więcej"
				big="2,5 roku"
				bigColor={C.plumSoft}
				bar={slow}
				barColor={C.plumSoft}
				strandLen={0.3 + slow}
			/>
			<Row
				top={1030}
				delay={28}
				icon={<IconSparkle size={46} color={C.rose} />}
				title="Przedłużanie keratynowe"
				sub="długość od razu"
				big="1 wizyta"
				bigColor={C.rose}
				bar={fast}
				barColor={`linear-gradient(90deg, ${C.rose}, ${C.gold})`}
				strandLen={0.3 + 0.7 * fast}
				done={done}
			/>
		</SceneShell>
	);
};
