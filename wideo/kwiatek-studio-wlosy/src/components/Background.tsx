import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';
import {TOTAL} from '../timeline';

// Warm studio backdrop: cream → blush gradient with slow-drifting soft light.
export const Background: React.FC = () => {
	const frame = useCurrentFrame();
	const t = frame / TOTAL;
	const orbs = [
		{x: 180, y: 380, r: 420, c: 'rgba(237,198,192,0.55)', dx: 60, dy: 40},
		{x: 900, y: 1250, r: 520, c: 'rgba(233,210,166,0.35)', dx: -50, dy: -60},
		{x: 820, y: 260, r: 300, c: 'rgba(201,101,122,0.12)', dx: -30, dy: 50},
		{x: 240, y: 1650, r: 380, c: 'rgba(201,101,122,0.10)', dx: 40, dy: -30},
	];
	return (
		<AbsoluteFill style={{background: `linear-gradient(170deg, ${C.cream} 0%, #FBEDEA 48%, ${C.blush} 100%)`}}>
			{orbs.map((o, i) => (
				<div
					key={i}
					style={{
						position: 'absolute',
						left: o.x - o.r + o.dx * t,
						top: o.y - o.r + o.dy * t,
						width: o.r * 2,
						height: o.r * 2,
						borderRadius: '50%',
						background: `radial-gradient(circle, ${o.c} 0%, rgba(255,255,255,0) 70%)`,
					}}
				/>
			))}
			<AbsoluteFill
				style={{
					opacity: interpolate(frame, [0, TOTAL], [0.35, 0.5]),
					background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)',
				}}
			/>
		</AbsoluteFill>
	);
};
