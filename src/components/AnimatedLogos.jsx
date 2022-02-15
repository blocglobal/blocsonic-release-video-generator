import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import AnimatedLogoOutline from './AnimatedLogoOutline';
import BlocglobalLogo from './BlocglobalLogo';
import BlocsonicLogo from './BlocsonicLogo';

const AnimatedLogos = () => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	const containerTopRate = ((durationInFrames - frame * 0.5) / 40) * 940;
	const containerTop = containerTopRate - 3600;

	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					top: `${containerTop}px`,
					left: '-50px',
					width: '400px',
				}}
			>
				<AnimatedLogoOutline
					logo={BlocglobalLogo}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: 'auto',
					}}
				/>
				<AnimatedLogoOutline
					logo={BlocsonicLogo}
					style={{
						position: 'absolute',
						top: '1000px',
						left: 0,
						width: '100%',
						height: 'auto',
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};

export default AnimatedLogos;
