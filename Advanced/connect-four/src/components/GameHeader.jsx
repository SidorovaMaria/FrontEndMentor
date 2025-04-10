import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PauseModal from "./PauseModal";
import { dropIn, fadeDown } from "../app/motionVariants";
const GameHeader = () => {
	const [openPauseModal, setOpenPauseModal] = useState(false);
	return (
		<motion.header
			variants={fadeDown}
			initial="initial"
			animate="animate"
			exit="exit"
			className="w-full px-5 flex justify-between pt-12 items-center lg:max-w-[632px] lg:mx-auto"
		>
			<button
				className="text-XS btn-menu-header"
				onClick={() => setOpenPauseModal(true)}
			>
				Menu
			</button>
			{/* Icon */}
			<img
				src="/assets/images/logo.svg"
				className="w-10 h-10 md:w-13 md:h-13"
			/>
			<button className="text-XS btn-menu-header">Restart</button>
			<AnimatePresence>
				{openPauseModal && (
					<PauseModal closeModal={() => setOpenPauseModal(false)} />
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default GameHeader;
