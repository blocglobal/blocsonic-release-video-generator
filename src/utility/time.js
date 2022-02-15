export const secondsToFrames = (seconds, fps) => {
	return seconds * fps;
};

export const parseTime = (time) => {
	const splitTime = time.split(':');
	return parseInt(splitTime[0]) * 60 + parseInt(splitTime[1]);
};

export const parseLength = (start, end, crossfade, fps) => {
	const startSeconds = parseTime(start);
	const endSeconds = parseTime(end);
	const length = endSeconds - startSeconds;

	return {
		start: {
			seconds: startSeconds,
			frames: secondsToFrames(startSeconds, fps),
		},
		length: {
			seconds: length,
			frames: crossfade
				? secondsToFrames(length, fps) + 10
				: secondsToFrames(length, fps),
		},
	};
};
