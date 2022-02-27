import { useEffect, useState } from 'react';
import {
	Audio,
	AbsoluteFill,
	Easing,
	interpolate,
	staticFile,
	useVideoConfig,
	useCurrentFrame,
} from 'remotion';
import { visualizeAudio, useAudioData } from '@remotion/media-utils';
import { usePalette } from 'color-thief-react';
import getAverageColor from 'get-average-color';
import Promo from './components/Promo';
import { parseLength, parseTime, secondsToFrames } from './utility/time';
import data from './data';
import cover from '../public/cover.jpg';

export const SocialComposition = ({ index, type }) => {
	const defaultAverageColor = { r: 65, g: 64, b: 66 };
	const [color, setColor] = useState(defaultAverageColor);
	const audio = staticFile(`/${data.tracks[index].filename}`);
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const audioData = useAudioData(audio);

	let { data: palette } = usePalette(cover, 5, 'hex');

	if (!palette || palette.length === 0) {
		palette = ['#FFFFFF', '#EEEEEE', '#CCCCCC', '#444444', '#222222'];
	}

	useEffect(() => {
		async function getColor() {
			const avgColor = await getAverageColor(cover);
			setColor(avgColor);
		}

		if (color === defaultAverageColor) {
			getColor();
		}
	}, [color, cover, defaultAverageColor]);

	if (!audioData) {
		return null;
	}

	const visualization = visualizeAudio({
		fps,
		frame,
		audioData,
		numberOfSamples: 1,
	});

	const lengthInFrames = parseLength(
		data.tracks[index].social.start,
		data.tracks[index].social.end,
		false,
		fps
	).length.frames;

	return (
		<>
			<AbsoluteFill style={{ backgroundColor: '#EEEEEE' }}>
				<Promo
					index={index}
					averageColor={color}
					audioFrame={visualization[0]}
					type={type}
					palette={palette}
				/>
			</AbsoluteFill>
			<Audio
				src={audio}
				startFrom={secondsToFrames(
					parseTime(data.tracks[index].social.start),
					fps
				)}
				endAt={secondsToFrames(parseTime(data.tracks[index].social.end), fps)}
				volume={(f) =>
					interpolate(
						f,
						[0, 75, lengthInFrames - 150, lengthInFrames - 7],
						[0, 1, 1, 0],
						{
							easing: Easing.bezier(0.45, 0, 0.55, 1),
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						}
					)
				}
			/>
		</>
	);
};
