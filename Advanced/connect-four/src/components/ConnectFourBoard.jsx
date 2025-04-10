import { motion } from "motion/react";
import React from "react";
import { fadeUp } from "../app/motionVariants";

const ConnectFourBoard = () => {
	return (
		<>
			<motion.div
				className="flex justify-center items-center relative md:hidden"
				variants={fadeUp}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<img src="/assets/images/board-layer-black-small.svg" />
				<img
					src="/assets/images/board-layer-white-small.svg"
					className="absolute top-0 "
				/>
			</motion.div>
			<motion.div
				className=" justify-center items-center relative hidden md:flex"
				variants={fadeUp}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<img src="/assets/images/board-layer-black-large.svg" />
				<img
					src="/assets/images/board-layer-white-large.svg"
					className="absolute top-0 "
				/>
			</motion.div>
		</>
	);
};

export default ConnectFourBoard;
