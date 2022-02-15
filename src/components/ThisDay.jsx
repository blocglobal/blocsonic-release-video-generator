import {
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Easing,
	Img,
} from 'remotion';
import hexSorter from 'hexsorter';
import Grain from './Grain';
import BlocsonicCom from './BlocsonicCom';
import BlocglobalLogo from './BlocglobalLogo';
import BlocsonicLogo from './BlocsonicLogo';
import './ThisDay.css';

const ThisDay = ({ year, averageColor, audioFrame, palette }) => {
	const background = staticFile('/bumper.png');
	const cover = staticFile('/cover.jpg');
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const darkColor = hexSorter.sortColors(palette, 'mostBrightColor')[
		palette.length - 1
	];
	const brightColor = hexSorter.sortColors(palette, 'mostBrightColor')[1];

	const easing = Easing.bezier(0.37, 0, 0.63, 1);

	const slideDistance = 1200;

	const openingCopyStartFrame = 5 * fps;
	const openingCopyEndFrame = openingCopyStartFrame + 5;

	const coverSlideStartFrame = openingCopyStartFrame + fps * 2;
	const coverSlideEndFrame = coverSlideStartFrame + 5;
	const smallCoverSlideStartFrame = coverSlideEndFrame + Math.round(fps * 0.5);
	const smallCoverSlideEndFrame = smallCoverSlideStartFrame + 5;

	const outroStartFrame = 1500;
	const outroEndFrame = outroStartFrame + 7;

	const comOpacity = interpolate(
		frame,
		[
			smallCoverSlideEndFrame,
			smallCoverSlideEndFrame + 5,
			outroStartFrame,
			outroEndFrame,
		],
		[0, 1, 1, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const comBlur = interpolate(
		frame,
		[
			smallCoverSlideEndFrame,
			smallCoverSlideEndFrame + 5,
			outroStartFrame,
			outroEndFrame,
		],
		[25, 0, 0, 25],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const copyX = interpolate(
		frame,
		[openingCopyStartFrame, openingCopyEndFrame],
		[0, slideDistance],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const copyBlur = interpolate(
		frame,
		[openingCopyStartFrame, openingCopyEndFrame],
		[0, 25],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const copyOpacity = interpolate(
		frame,
		[openingCopyStartFrame, openingCopyEndFrame],
		[1, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const hrWidth = interpolate(
		frame,
		[openingCopyStartFrame, openingCopyEndFrame],
		[70, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const overlayOpacity = interpolate(
		frame,
		[
			openingCopyStartFrame,
			openingCopyEndFrame,
			coverSlideStartFrame,
			coverSlideEndFrame,
		],
		[0.95, 0, 0, 0.6],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const overlayMultiplyBlend = interpolate(
		frame,
		[
			openingCopyStartFrame,
			openingCopyEndFrame,
			coverSlideStartFrame,
			coverSlideEndFrame,
		],
		[0, 0, 1, 1],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const overlayZ = interpolate(
		frame,
		[coverSlideStartFrame, coverSlideEndFrame, coverSlideEndFrame + 1],
		[3, 3, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const overlayColor = overlayMultiplyBlend === 1 ? averageColor : darkColor;

	const coverX = interpolate(
		frame,
		[
			coverSlideStartFrame,
			coverSlideEndFrame,
			coverSlideEndFrame + 1,
			smallCoverSlideStartFrame,
			smallCoverSlideEndFrame,
		],
		[0, -slideDistance, slideDistance, slideDistance, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const coverZ = interpolate(
		frame,
		[coverSlideStartFrame, coverSlideEndFrame, coverSlideEndFrame + 1],
		[2, 2, 3],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const coverOpacity = interpolate(
		frame,
		[
			coverSlideStartFrame,
			coverSlideEndFrame,
			coverSlideEndFrame + 1,
			smallCoverSlideStartFrame,
			smallCoverSlideEndFrame,
			outroStartFrame,
			outroEndFrame,
		],
		[1, 0, 0, 0, 1, 1, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const coverBlur = interpolate(
		frame,
		[
			coverSlideStartFrame,
			coverSlideEndFrame,
			coverSlideEndFrame + 1,
			smallCoverSlideStartFrame,
			smallCoverSlideEndFrame,
			outroStartFrame,
			outroEndFrame,
		],
		[0, 25, 25, 25, 0, 0, 25],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const coverScale = interpolate(
		frame,
		[coverSlideStartFrame, coverSlideEndFrame, coverSlideEndFrame + 1],
		[100, 100, 70],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const coverScaleExpression =
		frame < smallCoverSlideEndFrame + 1
			? `scale(${coverScale}%)`
			: `scale(${70 + audioFrame * 10 * 0.3}%)`;

	const blocglobalInStartFrame = outroEndFrame + 3;
	const blocglobalInEndFrame = blocglobalInStartFrame + 6;
	const blocglobalOutStartFrame = blocglobalInEndFrame + fps * 2;
	const blocglobalOutEndFrame = blocglobalOutStartFrame + 6;
	const blocsonicInStartFrame = blocglobalOutEndFrame + 3;
	const blocsonicInEndFrame = blocsonicInStartFrame + 6;

	const blocglobalOpacity = interpolate(
		frame,
		[
			blocglobalInStartFrame,
			blocglobalInEndFrame,
			blocglobalOutStartFrame,
			blocglobalOutEndFrame,
		],
		[0, 1, 1, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const blocglobalBlur = interpolate(
		frame,
		[
			blocglobalInStartFrame,
			blocglobalInEndFrame,
			blocglobalOutStartFrame,
			blocglobalOutEndFrame,
		],
		[25, 0, 0, 25],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const blocglobalX = interpolate(
		frame,
		[
			blocglobalInStartFrame,
			blocglobalInEndFrame,
			blocglobalOutStartFrame,
			blocglobalOutEndFrame,
		],
		[-slideDistance, 0, 0, slideDistance],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const blocsonicOpacity = interpolate(
		frame,
		[blocsonicInStartFrame, blocsonicInEndFrame],
		[0, 1],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const blocsonicBlur = interpolate(
		frame,
		[blocsonicInStartFrame, blocsonicInEndFrame],
		[25, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const blocsonicX = interpolate(
		frame,
		[blocsonicInStartFrame, blocsonicInEndFrame],
		[-slideDistance, 0],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const logoScale = interpolate(
		frame,
		[
			blocglobalInStartFrame,
			blocglobalInEndFrame,
			blocglobalOutStartFrame,
			blocglobalOutEndFrame,
			blocsonicInStartFrame,
			blocsonicInEndFrame,
		],
		[0.3, 1, 1, 0.3, 0.3, 1],
		{
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			className="ThisDay"
			style={{
				backgroundImage: `url(${background})`,
			}}
		>
			<Grain image={cover} style={{ zIndex: 1 }} />
			<div
				className="cover"
				style={{
					transform: `translateX(${coverX}px) ${coverScaleExpression}`,
					opacity: coverOpacity,
					filter: `blur(${coverBlur}px)`,
					zIndex: coverZ,
				}}
			>
				<Img src={cover} />
			</div>
			<div
				className="overlay"
				style={{
					opacity: overlayOpacity,
					backgroundColor: overlayColor,
					zIndex: overlayZ,
				}}
			/>

			<div className="introContent" style={{ zIndex: 4 }}>
				<span
					style={{
						transform: `translateX(${copyX}px)`,
						filter: `blur(${copyBlur}px)`,
						opacity: copyOpacity,
					}}
				>
					On This Day
				</span>
				<hr
					style={{
						width: `${hrWidth}%`,
						filter: `blur(${copyBlur}px)`,
						opacity: copyOpacity,
					}}
				/>
				<span
					className="year"
					style={{
						color: brightColor,
						transform: `translateX(-${copyX}px)`,
						filter: `blur(${copyBlur}px)`,
						opacity: copyOpacity,
					}}
				>
					{year}
				</span>
			</div>

			<BlocsonicCom
				color={brightColor}
				style={{
					opacity: comOpacity,
					filter: `blur(${comBlur}px)`,
					transform: `scale(${0.92 + audioFrame * 0.05})`,
				}}
			/>

			<div className="logoContainer">
				<BlocglobalLogo
					style={{
						fill: brightColor,
						zIndex: 5,
						width: 'auto',
						height: '60%',
						opacity: blocglobalOpacity,
						filter: `blur(${blocglobalBlur}px)`,
						transform: `translateX(${blocglobalX}px) scale(${logoScale})`,
					}}
				/>
			</div>

			<div className="logoContainer">
				<BlocsonicLogo
					style={{
						fill: brightColor,
						zIndex: 5,
						width: '60%',
						height: '60auto',
						opacity: blocsonicOpacity,
						filter: `blur(${blocsonicBlur}px)`,
						transform: `translateX(${blocsonicX}px) scale(${logoScale})`,
					}}
				/>
			</div>
		</div>
	);
};

export default ThisDay;
