import React from "react";
import { AnimatePresence, motion } from "framer-motion"; // Correct import from framer-motion

const SectioninView = ({ children, className, delayed = 0, type = "div" }) => {
	const MotionComponent = motion[type] || motion.div;
	return (
		<AnimatePresence>
			<MotionComponent
				initial="offscreen"
				whileInView="onscreen"
				className={className}
				variants={{
					offscreen: {
						y: -50,
						opacity: 0.5,
					},
					onscreen: {
						y: 0,
						opacity: 1,
						transition: {
							type: "spring",
							duration: 1.5,
							delay: delayed,
						},
					},
				}}
				viewport={{ once: true, amount: 0.1 }}
			>
				{children}
			</MotionComponent>
		</AnimatePresence>
	);
};

export default SectioninView;
