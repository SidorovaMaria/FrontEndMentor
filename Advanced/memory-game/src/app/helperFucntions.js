export const formatTime = (totalSeconds) => {
	const mins = Math.floor(totalSeconds / 60).toString();

	const secs = (totalSeconds % 60).toString().padStart(2, "0");
	return `${mins}:${secs}`;
};
export const flip = {
	hidden: {
		transform: "scale(0) rotateX(-360deg)",
		opacity: 0,
		transition: {
			delay: 0.3,
		},
	},
	visible: {
		transform: " scale(1) rotateX(0deg)",
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		transform: "scale(0) rotateX(360deg)",
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};
