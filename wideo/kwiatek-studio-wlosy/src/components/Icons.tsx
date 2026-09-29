import React from 'react';

// Consistent 2px-line icon set (24 grid), drawn at any size.
type P = {size?: number; color?: string; stroke?: number};

const Svg: React.FC<P & {children: React.ReactNode}> = ({size = 48, color = 'currentColor', stroke = 2, children}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth={stroke}
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		{children}
	</svg>
);

export const IconCalendar: React.FC<P> = (p) => (
	<Svg {...p}>
		<rect x="3" y="4.5" width="18" height="16" rx="3" />
		<path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
	</Svg>
);

export const IconSparkle: React.FC<P> = (p) => (
	<Svg {...p}>
		<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
		<path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z" />
	</Svg>
);

export const IconCheck: React.FC<P> = (p) => (
	<Svg {...p}>
		<path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
	</Svg>
);

export const IconPin: React.FC<P> = (p) => (
	<Svg {...p}>
		<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
		<circle cx="12" cy="10" r="2.4" />
	</Svg>
);

export const IconCamera: React.FC<P> = (p) => (
	<Svg {...p}>
		<path d="M4 8h3l1.6-2.5h6.8L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
		<circle cx="12" cy="13" r="3.5" />
	</Svg>
);

export const IconClock: React.FC<P> = (p) => (
	<Svg {...p}>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	</Svg>
);

export const IconFlower: React.FC<P> = (p) => (
	<Svg {...p}>
		<circle cx="12" cy="12" r="2.2" />
		<path d="M12 9.8c-1.8-2.6-1.2-5.8 0-6.8 1.2 1 1.8 4.2 0 6.8zM14.2 12c2.6-1.8 5.8-1.2 6.8 0-1 1.2-4.2 1.8-6.8 0zM12 14.2c1.8 2.6 1.2 5.8 0 6.8-1.2-1-1.8-4.2 0-6.8zM9.8 12c-2.6 1.8-5.8 1.2-6.8 0 1-1.2 4.2-1.8 6.8 0z" />
	</Svg>
);

// Messenger glyph (filled), used on the CTA button and chat header.
export const MessengerGlyph: React.FC<{size?: number; color?: string; bolt?: string}> = ({
	size = 48,
	color = '#0A7CFF',
	bolt = '#fff',
}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path
			fill={color}
			d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.15.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.98-.87c.17-.08.36-.09.54-.04.91.25 1.87.38 2.9.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2z"
		/>
		<path fill={bolt} d="M6 14.54l2.94-4.66a1.5 1.5 0 012.17-.4l2.34 1.75c.21.16.5.16.72 0l3.16-2.4c.42-.32.97.18.69.63l-2.94 4.66a1.5 1.5 0 01-2.17.4l-2.34-1.75a.6.6 0 00-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63z" />
	</svg>
);
