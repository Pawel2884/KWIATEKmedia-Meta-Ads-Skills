import React from 'react';
import {C} from '../theme';

// Line-art profile with a filled hair mass whose length is driven by `yEnd`.
// Coordinates live in a 1080×1920 space; position with the wrapper transform.

const TOP = 580; // where the flowing part of the hair starts (below the cap)

const leftEdge = (y: number, ph: number) => {
	const u = Math.max(0, (y - TOP) / 900);
	return 432 - 105 * u * u - 24 * Math.sin(y / 130 + ph) * u;
};

const rightEdge = (y: number, ph: number) => {
	const u = Math.max(0, (y - 800) / 700);
	return 612 + 60 * u * u + 20 * Math.sin(y / 150 + ph + 1.3) * u;
};

const pts = (from: number, to: number, fn: (y: number) => number, step = 12) => {
	const out: [number, number][] = [];
	const dir = to > from ? 1 : -1;
	for (let y = from; dir > 0 ? y < to : y > to; y += step * dir) out.push([fn(y), y]);
	out.push([fn(to), to]);
	return out;
};

const toD = (p: [number, number][]) => p.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L ');

export const HairProfile: React.FC<{
	yEnd: number;
	phase: number;
	sparkle?: number; // 0..1 visibility of tip sparkles
	lineProgress?: number; // 0..1 draw-on of the face line
}> = ({yEnd, phase, sparkle = 0, lineProgress = 1}) => {
	const end = Math.max(yEnd, 820);
	const left = pts(TOP, end, (y) => leftEdge(y, phase));
	const rightStart = Math.max(end, 800);
	const right = pts(rightStart, 800, (y) => rightEdge(y, phase));
	const tipX = (leftEdge(end, phase) + rightEdge(end, phase)) / 2 - 10;

	const mass = [
		'M 655 478',
		'C 624 392 516 376 462 430',
		'C 440 466 428 520 432 580',
		`L ${toD(left)}`,
		`Q ${tipX - 30} ${end + 46} ${tipX + 20} ${end + 40}`,
		`Q ${rightEdge(end, phase) + 10} ${end + 30} ${rightEdge(end, phase)} ${end}`,
		`L ${toD(right)}`,
		'C 596 760 578 720 580 680',
		'C 584 610 612 530 655 478 Z',
	].join(' ');

	const strands = Array.from({length: 15}, (_, i) => {
		const k = (i + 0.5) / 15;
		const ph2 = phase + i * 0.37;
		const path = pts(TOP - 40 + 20 * Math.sin(i), end - 20 - 40 * Math.abs(0.5 - k), (y) => {
			const l = leftEdge(y, phase);
			const r = y < 800 ? 600 - (800 - y) * 0.05 : rightEdge(y, phase);
			return l + (r - l) * k + 9 * Math.sin(y / 110 + ph2) * Math.min(1, Math.max(0, (y - 600) / 300));
		}, 16);
		return {d: `M ${toD(path)}`, o: 0.18 + 0.26 * ((i * 7) % 5) / 5, w: 2.4 + (i % 3)};
	});

	const face =
		'M 655 478 C 690 505 700 548 698 590 C 697 608 700 622 712 642 C 722 658 736 668 740 678 C 736 690 722 692 712 694 C 716 704 718 712 710 720 C 716 728 716 740 706 748 C 706 766 700 786 680 798 C 662 808 640 806 622 798';

	return (
		<svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{position: 'absolute', left: 0, top: 0}}>
			<defs>
				<linearGradient id="hairFill" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor={C.hair} />
					<stop offset="0.55" stopColor={C.hairMid} />
					<stop offset="1" stopColor={C.hairLight} />
				</linearGradient>
				<linearGradient id="hairSheen" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0" stopColor="#fff" stopOpacity="0" />
					<stop offset="0.55" stopColor="#fff" stopOpacity="0.16" />
					<stop offset="1" stopColor="#fff" stopOpacity="0" />
				</linearGradient>
				<linearGradient id="skinFade" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="#F4D9CD" />
					<stop offset="0.7" stopColor="#F4D9CD" />
					<stop offset="1" stopColor="#F4D9CD" stopOpacity="0" />
				</linearGradient>
				<radialGradient id="cheek">
					<stop offset="0" stopColor={C.rose} stopOpacity="0.28" />
					<stop offset="1" stopColor={C.rose} stopOpacity="0" />
				</radialGradient>
			</defs>

			{/* neck + shoulder (behind the hair on the back side, in front on the chest side) */}
			<path d="M 548 780 L 652 800 C 650 860 656 910 668 960 C 690 1000 750 1022 830 1044 L 830 1180 L 520 1180 Z" fill="url(#skinFade)" />

			<path d={mass} fill="url(#hairFill)" />
			<path d={mass} fill="url(#hairSheen)" />
			{strands.map((s, i) => (
				<path key={i} d={s.d} stroke={C.goldLight} strokeOpacity={s.o} strokeWidth={s.w} fill="none" strokeLinecap="round" />
			))}

			{/* face fill */}
			<path d={`${face} C 600 780 585 740 580 700 C 584 610 612 530 655 478 Z`} fill="#F7E1D7" />
			<circle cx="668" cy="668" r="42" fill="url(#cheek)" />

			{/* line art */}
			<path
				d={face}
				pathLength={1}
				strokeDasharray="1 1"
				strokeDashoffset={1 - lineProgress}
				stroke={C.plum}
				strokeWidth={5}
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M 652 800 C 650 860 656 910 668 960 C 690 1000 750 1022 830 1044"
				pathLength={1}
				strokeDasharray="1 1"
				strokeDashoffset={1 - lineProgress}
				stroke={C.plum}
				strokeWidth={5}
				fill="none"
				strokeLinecap="round"
			/>
			<path d="M 664 596 C 672 604 684 604 692 596" stroke={C.plum} strokeWidth={4} fill="none" strokeLinecap="round" opacity={lineProgress} />
			<path d="M 666 599 l -6 6 M 674 602 l -3 8 M 683 602 l 0 8" stroke={C.plum} strokeWidth={3} strokeLinecap="round" opacity={lineProgress} />
			<path d="M 706 722 C 700 724 694 724 690 722" stroke={C.rose} strokeWidth={4} fill="none" strokeLinecap="round" opacity={lineProgress} />

			{/* sparkles at the tips */}
			{[0, 1, 2].map((i) => {
				const x = tipX + [-70, 10, 70][i];
				const y = end + [-10, 30, -30][i];
				const s = (10 + i * 4) * sparkle;
				return (
					<path
						key={i}
						d={`M ${x} ${y - s * 2} Q ${x} ${y} ${x + s * 2} ${y} Q ${x} ${y} ${x} ${y + s * 2} Q ${x} ${y} ${x - s * 2} ${y} Q ${x} ${y} ${x} ${y - s * 2} Z`}
						fill={C.gold}
						opacity={sparkle}
					/>
				);
			})}
		</svg>
	);
};

// Simple standalone strand used in diagrams/cards (vertical, optional wave).
export const strandPath = (x: number, y0: number, y1: number, amp: number, freq: number, phase: number) => {
	const p: string[] = [];
	for (let y = y0; y <= y1; y += 8) {
		const u = (y - y0) / (y1 - y0);
		p.push(`${(x + amp * Math.sin(u * Math.PI * 2 * freq + phase)).toFixed(1)} ${y.toFixed(1)}`);
	}
	return `M ${p.join(' L ')}`;
};
