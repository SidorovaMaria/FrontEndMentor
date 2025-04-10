import React from "react";
import { AnimatePresence, motion } from "motion/react";
import BtnCheck from "./buttons/BtnCheck";
import { dropIn } from "../app/motionVariants";
const RulesModal = ({ closeModal }) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={dropIn}
			className="absolute top-0 left-0 h-full w-full flex justify-center items-center px-5"
		>
			<div className="bg-white rounded-[40px] pt-[30px] pb-15 w-full border-[3px] border-blac flex flex-col items-center px-5 gap-[30px] solid-shadow-L relative md:max-w-[480px]">
				<h1 className="text-L uppercase">Rules</h1>
				<div className="w-full flex flex-col gap-4">
					<h2 className="text-S uppercase text-purple">Objective</h2>
					<p className="text-body text-black opacity-[0.66]">
						Be the first player to connect 4 of the same colored
						discs in a row (either vertically, horizontally, or
						diagonally).
					</p>
				</div>
				<div className="w-full flex flex-col gap-4">
					<h3 className="text-S uppercase text-purple">
						How to Play
					</h3>
					<ol className="flex flex-col gap-2.5">
						<li className="text-X flex gap-5">
							<span>1</span>
							<span className="rules-li ">
								Red goes first in the first game.
							</span>
						</li>
						<li className="text-X flex gap-5">
							<span>2</span>
							<span className="rules-li">
								Players must alternate turns, and only one disc
								can be dropped in each turn.
							</span>
						</li>
						<li className="text-X flex gap-5">
							<span>3</span>
							<span className="rules-li">
								The game ends when there is a 4-in-a-row or a
								stalemate.
							</span>
						</li>
						<li className="text-X flex gap-5">
							<span>4</span>
							<span className="rules-li">
								The starter of the previous game goes second on
								the next game.
							</span>
						</li>
					</ol>
					<BtnCheck
						className="absolute -bottom-[38px] left-1/2 -translate-x-1/2"
						handleOnClick={closeModal}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default RulesModal;
