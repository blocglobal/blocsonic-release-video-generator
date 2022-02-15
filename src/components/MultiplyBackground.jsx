const MultiplyBackground = ({ color, style = {} }) => {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
				mixBlendMode: 'multiply',
				width: '100%',
				height: '100%',
				...style,
			}}
		/>
	);
};

export default MultiplyBackground;
