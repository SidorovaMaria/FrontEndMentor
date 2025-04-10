import React, { useState } from "react";
import BtnVsPlayer from "./buttons/BtnVsPlayer";
import BtnWhite from "./buttons/BtnWhite";
import { useDispatch } from "react-redux";
import { startGame } from "../features/gameSlice";
import { AnimatePresence, motion } from "motion/react";
import { flipIntro } from "../app/motionVariants";
import RulesModal from "./RulesModal";
import BtnVsCpu from "./buttons/BtnVsCpu";

const IntroScreen = () => {
	const dispatch = useDispatch();
	const [openRules, setOpenRules] = useState(false);
	const playAgainst = (player) => {
		dispatch(startGame(player));
	};
	return (
		<motion.div
			className=" flex justify-center items-center h-full"
			intitial="hidden"
			animate="visible"
			exit="exit"
			variants={flipIntro}
		>
			<div className="md:border-[3px] md:border-black md:hover:shadow-purple-darker rounded-[40px] md:px-10 md:pt-[70px] md:pb-15 flex flex-col items-center gap-20 w-[480px] md:bg-purple md:shadow-[0_10px_0] border-0 px-5 bg-none  ">
				{/* Logo */}
				<img src="/assets/images/logo.svg" className="opacity-100" />
				<div className="flex flex-col gap-[30px] w-full">
					<BtnVsCpu handleOnClick={() => playAgainst("cpu")} />
					<BtnVsPlayer handleOnClick={() => playAgainst("pvp")} />
					<BtnWhite
						text={"Game Rules"}
						handleOnClick={() => setOpenRules(true)}
					/>
				</div>
			</div>
			<AnimatePresence>
				{openRules && (
					<RulesModal closeModal={() => setOpenRules(false)} />
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default IntroScreen;
