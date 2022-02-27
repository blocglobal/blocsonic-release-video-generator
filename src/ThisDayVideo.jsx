import { getInputProps } from 'remotion';
import { Composition } from 'remotion';
import { parseLength } from './utility/time';
import { ThisDayComposition } from './ThisDayComposition';
import data from './data/index';

export const ThisDayVideo = () => {
	const { index } = getInputProps();
	const fps = 30;

	const lengthInFrames = parseLength(
		data.tracks[index].social.start,
		data.tracks[index].social.end,
		false,
		fps
	).length.frames;

	return (
		<>
			<Composition
				id="thisday"
				component={ThisDayComposition}
				durationInFrames={lengthInFrames}
				fps={fps}
				width={1024}
				height={1024}
			/>
		</>
	);
};
