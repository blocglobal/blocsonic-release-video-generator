import {
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Easing,
	Loop,
} from 'remotion';
import hexSorter from 'hexsorter';
import Cover from './Cover';
import AnimatedLogos from './AnimatedLogos';
import MultiplyBackground from './MultiplyBackground';
import PromoCopy from './PromoCopy';
import BlocsonicCom from './BlocsonicCom';
import Grain from './Grain';
import { parseLength } from '../utility/time';
import './Promo.css';

const Promo = ({ audioFrame, averageColor, type, palette }) => {
	const background = staticFile('/bumper.png');
	const cover = staticFile('/cover.jpg');
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const brightColor = hexSorter.sortColors(palette, 'mostBrightColor')[0];

	const easing = Easing.bezier(0.37, 0, 0.63, 1);

	const lengthInFrames = parseLength('0:00', '0:59', false, fps).length.frames;

	const coverSize = interpolate(
		frame,
		[150, 164, lengthInFrames - 150, lengthInFrames - 7],
		[100, 70, 70, 100],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const coverTransform =
		frame < 164 || frame > lengthInFrames - 40
			? 'none'
			: frame > lengthInFrames - 150
			? `scale(${1 + audioFrame * 0.03})`
			: `scale(${1 + audioFrame * 0.07})`;

	const copyOpacity = interpolate(frame, [600, 608, 900, 914], [0, 1, 1, 0], {
		easing,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const copyBlur = interpolate(frame, [600, 608, 900, 914], [25, 0, 0, 25], {
		easing,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const comOpacity = interpolate(frame, [934, 942], [0, 1], {
		easing,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const comBlur = interpolate(frame, [934, 942], [25, 0], {
		easing,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			className="Promo"
			style={{
				backgroundImage: `url(${background})`,
			}}
		>
			<Loop durationInFrames={200}>
				<AnimatedLogos />
			</Loop>
			<MultiplyBackground color={averageColor} style={{ opacity: '.6' }} />
			<Grain image={cover} />
			<BlocsonicCom
				color={brightColor}
				style={{ opacity: comOpacity, filter: `blur(${comBlur}px)` }}
			/>
			<div className="content">
				<Cover
					src={cover}
					style={{
						width: `${coverSize}%`,
						height: `${coverSize}%`,
						transform: coverTransform,
					}}
				/>
			</div>
			<PromoCopy
				type={type}
				style={{
					position: 'absolute',
					top: '-50px',
					left: '360px',
					opacity: copyOpacity,
					filter: `blur(${copyBlur}px)`,
				}}
			/>
		</div>
	);
};

export default Promo;
