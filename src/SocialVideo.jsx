import { Composition, getInputProps } from 'remotion';
import { parseLength } from './utility/time';
import { SocialComposition } from './SocialComposition';
import data from './data/index';

export const SocialVideo = () => {
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
				id="social"
				component={SocialComposition}
				durationInFrames={lengthInFrames}
				fps={fps}
				width={1024}
				height={1024}
			/>
		</>
	);
};
