import {
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
} from 'remotion';
import hexSorter from 'hexsorter';
import { parseLength } from '../utility/time';
import MultiplyBackground from './MultiplyBackground';
import Grain from './Grain';
import Cover from './Cover';
import { fadeIn, drop } from '../utility/animation';
import './Video.css';

const Video = ({ release, track, audioFrame, averageColor, palette }) => {
	const cover = staticFile('/cover.jpg');
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const { artist, title, features } = track;

	const sorted = hexSorter.sortColors(palette, 'mostSaturatedColor');

	const lastFrame = parseLength('0:00', track.length, false, fps).length.frames;
	const quarterFrame = Math.floor(lastFrame * 0.25);
	const halfFrame = Math.floor(lastFrame * 0.5);
	const threeQuarterFrame = Math.floor(lastFrame * 0.75);

	const rotation = interpolate(
		frame,
		[0, quarterFrame, halfFrame, threeQuarterFrame, lastFrame],
		[0, 360, 0, 360, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const skewX = interpolate(
		frame,
		[0, quarterFrame, halfFrame, threeQuarterFrame, lastFrame],
		[0, -8, 0, -8, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const skewY = interpolate(
		frame,
		[0, quarterFrame, halfFrame, threeQuarterFrame, lastFrame],
		[0, 8, 0, 8, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const scale = interpolate(
		frame,
		[0, quarterFrame, halfFrame, threeQuarterFrame, lastFrame],
		[200, 225, 200, 225, 200],
		{
			extrapolateRight: 'clamp',
		}
	);

	const gradientLength = interpolate(
		frame,
		[0, Math.floor(lastFrame * 0.5), lastFrame],
		[100, 200, 100],
		{
			extrapolateRight: 'clamp',
		}
	);

	const imgTransform =
		frame <= 3
			? drop(2000, false, frame, 0, 4)
			: `scale(${1 + audioFrame * 0.07})`;

	return (
		<div className="Video">
			<div
				className="background"
				style={{
					backgroundImage: `url(${cover})`,
					transform: `scale(${scale}%) skew(${skewX}deg, ${skewY}deg)`,
				}}
			/>
			<div
				style={{
					background: `linear-gradient(${rotation}deg, ${sorted[0]} 0%, ${sorted[4]} ${gradientLength}%)`,
					width: '100%',
					height: '100%',
					opacity: 0.35,
				}}
			/>
			<MultiplyBackground color={averageColor} />
			<Grain image={cover} />
			<div className="content">
				<div style={{ transform: imgTransform, opacity: fadeIn(frame, 0, 5) }}>
					<Cover src={cover} />
				</div>
				<div>
					<div
						className="details"
						style={{
							transform: drop(2000, false, frame, 0, 4),
							opacity: fadeIn(frame, 0, 5),
						}}
					>
						<div className="artist">{artist}</div>
						<div className="title">{title}</div>
						{features && <div className="features">{features}</div>}
						<div className="release">
							From the <span>blocSonic {release.type}</span> release{' '}
							<span>“{release.title}”</span>
						</div>
						<div className="date">
							<span>Released:</span> {release.date}
						</div>
						<div className="cat">
							<span>Catalog Number:</span> {release.catNo}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
