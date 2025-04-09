import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { flip, formatTime } from "../app/helperFucntions";
import { resetCards } from "../features/cardsSlice";
import { resetGame } from "../features/gameSlice";
const SoloModal = () => {
	const { timer, moves } = useSelector((state) => state.cards);
	const dispatch = useDispatch();
	return (
		<motion.div
			className="absolute w-full px-6  h-full bg-black/50 top-0 left-0 flex justify-center items-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				variants={flip}
				initial="hidden"
				animate="visible"
				exit="exit"
				className="bg-[#f2f2f2] w-full p-6 md:p-14 flex flex-col gap-6 md:gap-10 rounded-10 md:rounded-[20px] items-center md:max-w-[654px]"
			>
				<div className="flex flex-col gap-1 md:gap-4 text-center ">
					<h1 className="text-[24px] md:text-48 font-bold leading-[30px] md:leading-15 text-slate-900">
						You did it
					</h1>
					<p className="text-[14px]md:text-[18px] font-bold leading-[17px] md:leading-[22px] text-blue-900 ">
						Game over! Here’s how you got on…
					</p>
				</div>
				{/* Times and Moves */}
				<div className="flex flex-col w-full gap-2 md:gap-4">
					<div className="flex justify-between p-4 md:py-6 md:px-8 bg-slate-100 rounded-[5px] items-center">
						<p className="text-[13px] md:text-[18px] font-bold leading-4 md:leading-[22px] text-blue-900">
							Time Elapsed
						</p>
						<p className="font-bold text-20 md:text-32 leading-25 md:leading-10 text-slate-600">
							{formatTime(timer)}
						</p>
					</div>
					<div className="flex justify-between p-4 md:py-6 md:px-8 bg-slate-100 rounded-[5px] items-center">
						<p className="text-[13px] md:text-[18px] font-bold leading-4 md:leading-[22px] text-blue-900">
							Moves Taken
						</p>
						<p className="font-bold text-20 md:text-32 leading-25 md:leading-10 text-slate-600">
							{moves} Moves
						</p>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex flex-col md:flex-row w-full gap-4 md:gap-3">
					<button
						className="restart-btn py-4 w-full"
						onClick={() => dispatch(resetCards())}
					>
						Restart
					</button>
					<button
						className="new-game py-4 w-full"
						onClick={() => {
							dispatch(resetCards());
							dispatch(resetGame());
						}}
					>
						Setup New Game
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default SoloModal;
