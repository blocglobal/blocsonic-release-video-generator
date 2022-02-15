import { useEffect, useState } from 'react';
import {
	staticFile,
	useVideoConfig,
	useCurrentFrame,
	Audio,
	AbsoluteFill,
	Series,
	interpolate,
	Easing,
} from 'remotion';
import { visualizeAudio, useAudioData } from '@remotion/media-utils';
import { usePalette } from 'color-thief-react';
import getAverageColor from 'get-average-color';
import { parseLength } from './utility/time';
import Video from './components/Video';
import Bumper from './components/Bumper';
import cover from '../public/cover.jpg';
import data from './data';

export const YoutubeComposition = ({ index }) => {
	const defaultAverageColor = { r: 65, g: 64, b: 66 };
	const [color, setColor] = useState(defaultAverageColor);
	const audio = staticFile(`/${data.tracks[index].filename}`);
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const audioData = useAudioData(audio);
	const { data: palette } = usePalette(cover, 5, 'hex');

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
		'0:00',
		data.tracks[index].length,
		false,
		fps
	).length.frames;

	return (
		<>
			<AbsoluteFill style={{ backgroundColor: '#000' }}>
				<Series>
					<Series.Sequence
						name={data.tracks[index].sectionName}
						durationInFrames={lengthInFrames - 300}
					>
						<Video
							averageColor={color}
							palette={palette}
							release={data.release}
							track={data.tracks[index]}
							audioFrame={visualization[0]}
						/>
					</Series.Sequence>
					<Series.Sequence offset={-10} name="Bumper" durationInFrames={310}>
						<Bumper
							crossfade
							averageColor={color}
							palette={palette}
							audioFrame={visualization[0]}
						/>
					</Series.Sequence>
				</Series>
			</AbsoluteFill>
			<Audio
				src={audio}
				volume={(f) =>
					interpolate(
						f,
						[0, lengthInFrames - 150, lengthInFrames - 15],
						[1, 1, 0],
						{
							easing: Easing.bezier(0.45, 0, 0.55, 1),
							extrapolateRight: 'clamp',
						}
					)
				}
			/>
		</>
	);
};
