import { useState, useEffect, useMemo } from 'react';
import { useCurrentFrame, random } from 'remotion';
import getAverageColor from 'get-average-color';
import Detritus from './Detritus';
import './Grain.css';

const Grain = ({ image, style }) => {
	const defaultDetritusColor = useMemo(() => ({ r: 65, g: 64, b: 66 }));
	const [color, setColor] = useState(defaultDetritusColor);
	const frame = useCurrentFrame();
	const numDetritus = Math.floor(random(`random-detritus-${frame}`) * 1000);

	useEffect(() => {
		async function getDetritusColor() {
			const avgColor = await getAverageColor(image);
			setColor(avgColor);
		}

		if (color === defaultDetritusColor) {
			getDetritusColor();
		}
	}, [color, image, defaultDetritusColor]);

	const randomDetritus = new Array(numDetritus).fill(true).map((a, i) => {
		return {
			index: Math.floor(random(`random-index-${frame}-${i}`) * 200),
			x: Math.floor(random(`random-x-${frame}-${i}`) * 8000),
			y: Math.floor(random(`random-y-${frame}-${i}`) * 6000),
			rotation: Math.floor(random(`random-rotation-${frame}-${i}`) * 360),
		};
	});

	return (
		<div className="Grain" style={style}>
			{randomDetritus.map((item, index) => (
				<Detritus
					key={`detritus-${index}`}
					index={item.index}
					style={{
						position: 'absolute',
						top: `${item.x}px`,
						left: `${item.y}px`,
						transform: `rotate(${item.rotation}deg)`,
						fill: `rgb(${color.r}, ${color.g}, ${color.b})`,
					}}
				/>
			))}
		</div>
	);
};

export default Grain;
