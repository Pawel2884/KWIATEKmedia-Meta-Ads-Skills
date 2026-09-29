import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {IconCamera, IconFlower, MessengerGlyph} from '../components/Icons';
import {Headline, Reveal, SceneShell, clamp, useCardSpring} from '../components/primitives';
import {C, F} from '../theme';

const PHONE = {left: 190, top: 520, w: 700, h: 1080};

const Bubble: React.FC<{delay: number; me?: boolean; children: React.ReactNode; highlight?: boolean}> = ({delay, me, children, highlight}) => {
	const s = useCardSpring(delay);
	if (s <= 0.001) return null;
	return (
		<div
			style={{
				alignSelf: me ? 'flex-end' : 'flex-start',
				maxWidth: 500,
				marginTop: 24,
				padding: '20px 28px',
				borderRadius: 36,
				borderBottomRightRadius: me ? 10 : 36,
				borderBottomLeftRadius: me ? 36 : 10,
				background: me ? `linear-gradient(135deg, ${C.messenger}, #7B5CFF)` : '#F0EDEE',
				color: me ? '#fff' : C.plum,
				fontFamily: F.sans,
				fontWeight: 600,
				fontSize: 38,
				lineHeight: 1.3,
				opacity: s,
				transform: `translateY(${(1 - s) * 30}px) scale(${0.92 + 0.08 * s})`,
				transformOrigin: me ? 'right bottom' : 'left bottom',
				boxShadow: highlight ? `0 0 0 6px ${C.goldLight}` : 'none',
			}}
		>
			{children}
		</div>
	);
};

const Typing: React.FC<{from: number; to: number}> = ({from, to}) => {
	const frame = useCurrentFrame();
	if (frame < from || frame >= to) return null;
	return (
		<div style={{alignSelf: 'flex-start', marginTop: 18, padding: '24px 30px', borderRadius: 36, borderBottomLeftRadius: 10, background: '#F0EDEE', display: 'flex', gap: 10}}>
			{[0, 1, 2].map((i) => (
				<div key={i} style={{width: 16, height: 16, borderRadius: 8, background: C.plumSoft, opacity: 0.35 + 0.65 * (Math.floor((frame - from) / 4 + i) % 3 === 0 ? 1 : 0)}} />
			))}
		</div>
	);
};

export const S6Chat: React.FC<{dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const phone = useCardSpring(6);
	const arrow = interpolate(frame, [26, 36], [0, 1], clamp);
	return (
		<SceneShell dur={dur} push={0.05} origin="50% 60%">
			<AbsoluteFill style={{top: 262, alignItems: 'center'}}>
				<Reveal delay={0}>
					<Headline size={76}>Nie znasz się na metodach?</Headline>
				</Reveal>
				<Reveal delay={10}>
					<Headline size={76} italic weight={600} color={C.rose}>
						Nie musisz.
					</Headline>
				</Reveal>
			</AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					left: PHONE.left,
					top: PHONE.top,
					width: PHONE.w,
					height: PHONE.h,
					borderRadius: 80,
					background: '#1E1418',
					padding: 18,
					boxShadow: '0 50px 90px rgba(58,31,43,0.28)',
					opacity: phone,
					transform: `translateY(${(1 - phone) * 160}px)`,
				}}
			>
				<div style={{width: '100%', height: '100%', borderRadius: 64, background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
					<div style={{height: 150, borderBottom: '2px solid #F1ECEE', display: 'flex', alignItems: 'center', gap: 20, padding: '40px 36px 0'}}>
						<div style={{width: 76, height: 76, borderRadius: 38, background: `linear-gradient(135deg, ${C.rose}, ${C.gold})`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<IconFlower size={44} color="#fff" stroke={2} />
						</div>
						<div style={{flex: 1}}>
							<div style={{fontFamily: F.sans, fontWeight: 800, fontSize: 32, color: C.plum}}>Kwiatek Studio Urody</div>
							<div style={{fontFamily: F.sans, fontWeight: 600, fontSize: 24, color: C.plumSoft}}>Art & Beauty · Lublin</div>
						</div>
						<MessengerGlyph size={52} />
					</div>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column', padding: '10px 30px'}}>
						<Bubble delay={18} me highlight={frame > 26}>
							<span style={{fontWeight: 800, letterSpacing: '0.06em'}}>WŁOSY</span>
						</Bubble>
						<Bubble delay={32} me>
							Ciemny blond, do ramion
						</Bubble>
						<Bubble delay={44} me>
							<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
								<div style={{width: 120, height: 150, borderRadius: 18, background: `linear-gradient(180deg, ${C.hairMid}, ${C.hairLight})`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
									<IconCamera size={52} color="#fff" />
								</div>
								zdjęcie włosów
							</div>
						</Bubble>
						<Typing from={54} to={68} />
						<Bubble delay={68}>Dziękujemy! Sprawdzimy, co da się zrobić, i podamy wolne terminy.</Bubble>
					</div>
				</div>
			</div>
			{/* annotation for the key word */}
			<div
				style={{
					position: 'absolute',
					left: 110,
					top: 700,
					opacity: arrow,
					transform: `translateX(${(1 - arrow) * -20}px)`,
					fontFamily: F.serif,
					fontStyle: 'italic',
					fontWeight: 600,
					fontSize: 46,
					color: C.roseDark,
					background: 'rgba(255,247,243,0.94)',
					padding: '10px 22px',
					borderRadius: 24,
				}}
			>
				napisz tylko to →
			</div>
		</SceneShell>
	);
};
