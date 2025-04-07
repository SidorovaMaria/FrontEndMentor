import { motion } from "motion/react";

const AnimatedBtn = ({ children, className, onClick, delayBtn = 0 }) => {
	return (
		<motion.button
			className={`${className}`}
			onClick={onClick}
			initial={{ y: -10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				type: "spring",
				duration: 1.0,
				delay: delayBtn,
			}}
		>
			{children}
		</motion.button>
	);
};

export default AnimatedBtn;
