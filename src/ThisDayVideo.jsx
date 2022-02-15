import { Composition } from 'remotion';
import { ThisDayComposition } from './ThisDayComposition';

export const ThisDayVideo = () => {
	return (
		<>
			<Composition
				id="thisday"
				component={ThisDayComposition}
				durationInFrames={1770}
				fps={30}
				width={1024}
				height={1024}
			/>
		</>
	);
};
