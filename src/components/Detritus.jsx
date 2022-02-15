import React from 'react';

const shapes = [
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 62 62"
		width="62"
		height="62"
	>
		<path d="M34.5,27.5l1.44-10L34.5,0h-8l1.2,11.65L26.5,27.5l-4.19,1L1,27.5l-1,8H26.5V61l8,1V35.5l26.5-1,1-8L49.05,28Z" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 40.19 274.05"
		width="40"
		height="274"
	>
		<polygon points="10.33 106.88 12.84 164.09 3.91 236.93 0 274.05 13.95 180.28 15.35 158.79 13.39 110.23 40.19 0 14.79 81.21 13.67 97.67 10.33 106.88" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1773.67 287.18"
		width="1773"
		height="287"
	>
		<polygon points="0.17 287.18 0 286.19 445.86 210.33 1221.72 158.61 1773.39 0 1773.67 0.96 1221.89 159.6 1221.84 159.6 445.98 211.32 0.17 287.18" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 180.3 1158.76"
		width="180"
		height="1158"
	>
		<polygon points="114.78 1158.76 113.78 1158.7 117.24 1089.58 117.34 1089.45 179.3 1013.72 179.3 941.6 148.28 876.11 148.27 876.03 96.54 429.79 0 0.22 0.98 0 97.53 429.63 149.25 875.83 180.3 941.38 180.3 1014.08 180.19 1014.22 118.22 1089.95 114.78 1158.76" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 21.77 23.14"
		width="21"
		height="23"
	>
		<polygon points="0 0 0 23.14 21.77 23.14 15.91 5.58 0 0" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20.65 26.79"
		width="20"
		height="26"
	>
		<polygon points="6.42 0 2.51 6.98 0 17.58 8.37 26.79 20.65 20.37 20.65 8.37 10.33 9.77 6.42 0" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 8.17 8.17"
		width="8"
		height="8"
	>
		<circle cx="4.08" cy="4.08" r="4.08" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 7.08 7.44"
		width="7"
		height="8"
	>
		<polygon points="2.83 0 0 7.43 4.96 7.43 7.08 0 2.83 0" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 7.44 8.85"
		width="7"
		height="9"
	>
		<polygon points="3.9 0 0 6.9 7.43 8.85 3.9 0" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 2.67 16.66"
		width="3"
		height="17"
	>
		<polygon points="0.98 16.66 0 16.46 1.65 8.47 0 0.2 0.98 0 2.67 8.47 0.98 16.66" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 11.07 52.26"
		width="11"
		height="52"
	>
		<path d="M6.83,12.93,5,0,0,.72,2,14.15Zm-1,3L1,17.13,6.12,52.26l5-.73Z" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 3.72 4.84"
		width="4"
		height="5"
	>
		<rect width="3.72" height="4.84" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1.43 1.93"
		width="1"
		height="2"
	>
		<ellipse cx="0.72" cy="0.96" rx="0.7" ry="0.98" />
	</svg>,
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 543.89 793.45"
		width="543"
		height="793"
	>
		<polygon points="542.94 793.45 468 561.5 175.22 400.82 175.16 400.73 0 157.66 0.09 157.41 28.73 78.66 28.9 78.57 175.32 0 175.8 0.88 29.54 79.36 1.12 157.51 175.9 400.06 468.83 560.81 468.89 561 543.89 793.14 542.94 793.45" />
	</svg>,
];

const Detritus = ({ index, style }) => {
	return shapes[index] ? <span style={style}>{shapes[index]}</span> : null;
};

export default Detritus;
