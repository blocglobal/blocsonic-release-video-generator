import {Composition, getInputProps} from 'remotion';
import {YoutubeComposition} from './YoutubeComposition';
import {secondsToFrames, parseTime} from './utility/time';
import data from './data/index';

export const YoutubeVideo = () => {
	const {index} = getInputProps();

	return (
		<>
			<Composition
				id="youtube"
				component={YoutubeComposition}
				durationInFrames={secondsToFrames(
					parseTime(data.tracks[index].length),
					30
				)}
				fps={30}
				width={3840}
				height={2160}
			/>
		</>
	);
};
