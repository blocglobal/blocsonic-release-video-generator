import { useCurrentFrame, useVideoConfig } from 'remotion';

const AnimatedLogoOutline = ({ style, logo }) => {
	const frame = useCurrentFrame();
	const Logo = logo;

	const dashOffset = (frame / 20) * 100;
	const strokeOpacity = (Math.floor(frame / 10) % 100) / 10;
	const fillOpacity = 1 - (Math.floor(frame / 20) % 100) / 10;

	return (
		<Logo
			style={{
				overflow: 'visible',
				fill: `rgba(170,170,170,${fillOpacity})`,
				stroke: `rgba(180,180,180,${strokeOpacity})`,
				strokeWidth: '2px',
				strokeLinecap: 'round',
				strokeDasharray: 200,
				strokeDashoffset: dashOffset,
				...style,
			}}
		/>
	);
};

export default AnimatedLogoOutline;
