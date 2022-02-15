import {Composition} from 'remotion';
import {SocialComposition} from './SocialComposition';

export const SocialVideo = () => {
	return (
		<>
			<Composition
				id="social"
				component={SocialComposition}
				durationInFrames={1770}
				fps={30}
				width={1024}
				height={1024}
			/>
		</>
	);
};
