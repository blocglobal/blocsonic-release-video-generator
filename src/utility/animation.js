import { Easing, interpolate } from 'remotion';

const easing = Easing.bezier(0.37, 0, 0.63, 1);

export const drop = (distance, crossfade, frame, start = 0, end = 7) => {
	const value = crossfade
		? interpolate(
				frame,
				[start + 7, end + 7, end + 7 + 2, end + 7 + 4],
				[1, 0, 0.02, 0],
				{
					easing,
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				}
		  )
		: interpolate(frame, [start, end, end + 2, end + 4], [1, 0, 0.02, 0], {
				easing,
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
		  });

	return `translate(0, -${value * distance}px)`;
};

export const fade = (duration, crossfade, frame, last = false) => {
	return crossfade
		? last
			? interpolate(frame, [0, 10], [0, 1])
			: interpolate(frame, [0, 10, duration - 10, duration], [0, 1, 1, 0])
		: interpolate(frame, [duration - 10, duration], [1, 0]);
};

export const fadeIn = (frame, start = 0, end = 10) => {
	return interpolate(frame, [start, end], [0, 1]);
};
