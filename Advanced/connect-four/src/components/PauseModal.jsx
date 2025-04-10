import React from "react";
import { motion } from "motion/react";
import { dropIn } from "../app/motionVariants";
import BtnWhite from "./buttons/BtnWhite";
import BtnQuit from "./buttons/BtnQuit";
import { useDispatch } from "react-redux";
import { quitGame, restartGame } from "../features/gameSlice";
const PauseModal = ({ closeModal }) => {
	const dispatch = useDispatch();
	// ! Get Score for the players
	return (
		<motion.div className="absolute w-full h-full top-0 left-0 bg-black/50 flex justify-center items-center px-5 z-50 ">
			<motion.div
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={dropIn}
				className="bg-purple rounded-[40px] border-[3px] border-black shadow-[0px_10px_0px] w-full flex flex-col gap-[30px] items-center py-[30px] px-5 md:max-w-[480px] md:mx-auto md:py-[50px] md:px-10"
			>
				<h1 className="text-L text-white uppercase md:mb-3.5 ">
					Pause
				</h1>
				<BtnWhite
					handleOnClick={closeModal}
					text="Continue Game"
					className={" justify-center"}
				/>
				<BtnWhite
					handleOnClick={() => {
						dispatch(restartGame());
						closeModal();
					}}
					text="restart"
					className={" justify-center"}
				/>
				<BtnQuit handleOnClick={() => dispatch(quitGame())} />
			</motion.div>
		</motion.div>
	);
};

export default PauseModal;
