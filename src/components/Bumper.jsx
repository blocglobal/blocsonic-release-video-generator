import { useState, useEffect } from 'react';
import { staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import hexSorter from 'hexsorter';
import Logos from './Logos';
import MultiplyBackground from './MultiplyBackground';
import { fade } from '../utility/animation';
import './Bumper.css';

const Bumper = ({ crossfade, audioFrame, averageColor, palette }) => {
	const defaultColor = '#FFFFFF';
	const [color, setColor] = useState(defaultColor);
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const sectionImage = staticFile('/bumper.png');

	useEffect(() => {
		async function getColor() {
			const sorted = hexSorter.sortColors(palette, 'mostBrightColor');

			if (sorted[0] !== defaultColor) {
				setColor(sorted[0]);
			}
		}

		if (palette && color === defaultColor) {
			getColor();
		}
	}, [color, palette, defaultColor]);

	return (
		<div
			className="Bumper"
			style={{
				backgroundImage: `url(${sectionImage})`,
				opacity: fade(durationInFrames, crossfade, frame, true),
			}}
		>
			<MultiplyBackground color={averageColor} />
			<Logos color={color} crossfade={crossfade} audioFrame={audioFrame} />
		</div>
	);
};

export default Bumper;
