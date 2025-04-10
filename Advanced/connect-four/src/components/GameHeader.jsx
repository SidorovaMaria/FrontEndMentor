import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PauseModal from "./PauseModal";
import { dropIn, fadeDown } from "../app/motionVariants";
import { useDispatch, useSelector } from "react-redux";
import { continueTimer, restartGame, stopTimer } from "../features/gameSlice";
const GameHeader = () => {
	const dispatch = useDispatch();
	const { timerStopped } = useSelector((state) => state.game);
	const [openPauseModal, setOpenPauseModal] = useState(false);
	const openMenu = () => {
		setOpenPauseModal(true);
		dispatch(stopTimer());
	};
	const closeMenu = () => {
		setOpenPauseModal(false);
		dispatch(continueTimer());
	};
	return (
		<motion.header
			variants={fadeDown}
			initial="initial"
			animate="animate"
			exit="exit"
			className="w-full px-5 flex justify-between pt-12 items-center lg:max-w-[632px] lg:mx-auto"
		>
			<button className="text-XS btn-menu-header" onClick={openMenu}>
				Menu
			</button>
			{/* Icon */}
			<img
				src="/assets/images/logo.svg"
				className="w-10 h-10 md:w-13 md:h-13"
			/>
			<button
				className="text-XS btn-menu-header"
				onClick={() => dispatch(restartGame())}
			>
				Restart
			</button>
			<AnimatePresence>
				{openPauseModal && <PauseModal closeModal={closeMenu} />}
			</AnimatePresence>
		</motion.header>
	);
};

export default GameHeader;
