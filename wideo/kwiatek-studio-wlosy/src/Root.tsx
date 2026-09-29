import React from 'react';
import {AbsoluteFill, Composition, Sequence, Audio, staticFile} from 'remotion';
import {Background} from './components/Background';
import {S1Hook} from './scenes/S1Hook';
import {S2Wait} from './scenes/S2Wait';
import {S3Keratin} from './scenes/S3Keratin';
import {S4Choice} from './scenes/S4Choice';
import {S5Price} from './scenes/S5Price';
import {S6Chat} from './scenes/S6Chat';
import {S7End} from './scenes/S7End';
import {FPS, H, W} from './theme';
import {OVERLAP, SCENES, TOTAL} from './timeline';

const ORDER: [keyof typeof SCENES, React.FC<{dur: number}>][] = [
	['hook', S1Hook],
	['wait', S2Wait],
	['keratin', S3Keratin],
	['choice', S4Choice],
	['price', S5Price],
	['chat', S6Chat],
	['end', S7End],
];

export const WlosyReel: React.FC = () => (
	<AbsoluteFill>
		<Background />
		{ORDER.map(([key, Scene]) => {
			const {from, dur} = SCENES[key];
			const d = Math.min(dur + OVERLAP, TOTAL - from);
			return (
				<Sequence key={key} from={from} durationInFrames={d} name={key}>
					<Scene dur={key === 'end' ? d + 30 : d} />
				</Sequence>
			);
		})}
		<Audio src={staticFile('audio/soundtrack.wav')} />
	</AbsoluteFill>
);

export const Root: React.FC = () => (
	<Composition id="WlosyReel" component={WlosyReel} durationInFrames={TOTAL} fps={FPS} width={W} height={H} />
);
