import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, F, SHADOW} from '../theme';

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);

// Damped entrance 0 → 1 (no visible overshoot). Used for text and small UI.
export const useEnter = (delay: number, durationInFrames = 16) => {
	const frame = useCurrentFrame();
	return interpolate(frame - delay, [0, durationInFrames], [0, 1], {...clamp, easing: easeOut});
};

// Card entrance with a gentle settle (≤3% overshoot).
export const useCardSpring = (delay: number) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	return spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 110, mass: 0.9}});
};

// Scene wrapper: soft fade/lift in, soft fade/lift out, slow camera push across the scene.
export const SceneShell: React.FC<{
	dur: number;
	children: React.ReactNode;
	push?: number;
	origin?: string;
	exitTo?: 'up' | 'down' | 'fade';
	enter?: boolean;
}> = ({dur, children, push = 0.045, origin = '50% 45%', exitTo = 'up', enter = true}) => {
	const frame = useCurrentFrame();
	const inP = enter ? interpolate(frame, [0, 9], [0, 1], {...clamp, easing: easeOut}) : 1;
	// Exit completes right as the next scene starts (scenes overlap by 6 frames), so headlines never cross.
	const outP = interpolate(frame, [dur - 13, dur - 5], [0, 1], {...clamp, easing: easeInOut});
	const scale = 1 + push * interpolate(frame, [0, dur], [0, 1], clamp);
	const exitY = exitTo === 'up' ? -60 * outP : exitTo === 'down' ? 60 * outP : 0;
	return (
		<AbsoluteFill
			style={{
				opacity: inP * (1 - outP),
				transform: `translateY(${(1 - inP) * 40 + exitY}px) scale(${scale})`,
				transformOrigin: origin,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};

// Masked upward reveal – text settles and then stays pixel-stable.
export const Reveal: React.FC<{
	delay: number;
	children: React.ReactNode;
	style?: React.CSSProperties;
	dur?: number;
}> = ({delay, children, style, dur = 16}) => {
	const p = useEnter(delay, dur);
	return (
		<div style={{overflow: 'hidden', paddingBottom: '0.12em', ...style}}>
			<div style={{transform: `translateY(${(1 - p) * 105}%)`, opacity: p > 0 ? 1 : 0}}>{children}</div>
		</div>
	);
};

export const Headline: React.FC<{
	children: React.ReactNode;
	size?: number;
	color?: string;
	italic?: boolean;
	weight?: number;
	style?: React.CSSProperties;
}> = ({children, size = 104, color = C.plum, italic = false, weight = 700, style}) => (
	<div
		style={{
			fontFamily: F.serif,
			fontSize: size,
			lineHeight: 1.04,
			fontWeight: weight,
			fontStyle: italic ? 'italic' : 'normal',
			color,
			letterSpacing: '-0.01em',
			textAlign: 'center',
			...style,
		}}
	>
		{children}
	</div>
);

export const Label: React.FC<{
	children: React.ReactNode;
	size?: number;
	color?: string;
	weight?: number;
	style?: React.CSSProperties;
}> = ({children, size = 38, color = C.plumSoft, weight = 600, style}) => (
	<div style={{fontFamily: F.sans, fontSize: size, fontWeight: weight, color, lineHeight: 1.25, ...style}}>
		{children}
	</div>
);

export const Card: React.FC<{style?: React.CSSProperties; children: React.ReactNode}> = ({style, children}) => (
	<div
		style={{
			background: C.white,
			borderRadius: 44,
			boxShadow: SHADOW,
			position: 'absolute',
			...style,
		}}
	>
		{children}
	</div>
);

export const Pill: React.FC<{children: React.ReactNode; style?: React.CSSProperties; bg?: string; color?: string}> = ({
	children,
	style,
	bg = C.white,
	color = C.plum,
}) => (
	<div
		style={{
			display: 'inline-flex',
			alignItems: 'center',
			gap: 14,
			padding: '16px 30px',
			borderRadius: 999,
			background: bg,
			color,
			fontFamily: F.sans,
			fontWeight: 700,
			fontSize: 34,
			boxShadow: '0 12px 30px rgba(58,31,43,0.10)',
			...style,
		}}
	>
		{children}
	</div>
);

// Line drawn along its length. Works for any SVG path via pathLength normalisation.
export const DrawPath: React.FC<{
	d: string;
	progress: number;
	stroke: string;
	width: number;
	opacity?: number;
	linecap?: 'round' | 'butt';
	fill?: string;
}> = ({d, progress, stroke, width, opacity = 1, linecap = 'round', fill = 'none'}) => (
	<path
		d={d}
		pathLength={1}
		stroke={stroke}
		strokeWidth={width}
		strokeLinecap={linecap}
		strokeLinejoin="round"
		fill={fill}
		opacity={opacity}
		strokeDasharray="1 1"
		strokeDashoffset={1 - Math.max(0, Math.min(1, progress))}
	/>
);
