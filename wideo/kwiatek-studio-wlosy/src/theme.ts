import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

// Local font files (copied from @fontsource) – rendering never depends on the network.
const LATIN =
	'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const LATIN_EXT =
	'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';

const face = (family: string, file: string, weight: string, style: 'normal' | 'italic') => {
	for (const [subset, range] of [
		['latin', LATIN],
		['latin-ext', LATIN_EXT],
	] as const) {
		loadFont({family, url: staticFile(`fonts/${file}-${subset}-${weight}-${style}.woff2`), weight, style, unicodeRange: range});
	}
};

['500', '600', '700', '800'].forEach((w) => face('Manrope', 'manrope', w, 'normal'));
['600', '700'].forEach((w) => face('Playfair Display', 'playfair-display', w, 'normal'));
['500', '600'].forEach((w) => face('Playfair Display', 'playfair-display', w, 'italic'));

export const FPS = 30;
export const W = 1080;
export const H = 1920;

export const C = {
  cream: '#FFF7F3',
  blush: '#F5DDD9',
  blushDeep: '#EDC6C0',
  rose: '#C9657A',
  roseDark: '#A94C62',
  plum: '#3A1F2B',
  plumSoft: '#6B4A57',
  gold: '#C8A26A',
  goldLight: '#E9D2A6',
  hair: '#4A2E24',
  hairMid: '#6E4533',
  hairLight: '#A8765A',
  white: '#FFFFFF',
  messenger: '#0A7CFF',
};

export const F = {
  serif: '"Playfair Display", serif',
  sans: 'Manrope, sans-serif',
};

// Reels safe area: key copy between these y values.
export const SAFE = {top: 250, bottom: 1540, side: 84};

export const SHADOW = '0 30px 70px rgba(58, 31, 43, 0.16), 0 6px 18px rgba(58, 31, 43, 0.08)';
