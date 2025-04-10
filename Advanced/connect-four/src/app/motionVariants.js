export const flipIntro = {
	hidden: {
		transform: "scale(0) rotateX(-360deg)",
		opacity: 0,
		transition: {
			delay: 0.3,
		},
	},
	visible: {
		transform: "scale(1) rotateX(0)",
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		transform: "scale(0) rotateX(-180deg)",
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};
export const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.3,
			type: "spring",
			damping: 20,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};
export const fadeDown = {
	initial: {
		y: -50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};
export const fadeRight = {
	initial: {
		x: -50,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		x: 50,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};
export const fadeLeft = {
	initial: {
		x: 50,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		x: -50,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};

export const fadeUp = {
	initial: {
		y: 100,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};
export const turnFlip = {
	initial: {
		transform: "rotateY(-90deg)",
		opacity: 0,
	},
	animate: {
		transform: "scale(1) rotateY(0)",
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		transform: " rotateY(-180deg)",
	},
};
