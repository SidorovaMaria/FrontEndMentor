import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetGame, resetPlayersScore } from "../features/gameSlice";
import { resetCards } from "../features/cardsSlice";
import { AnimatePresence, motion } from "motion/react";
import { flip } from "../app/helperFucntions";

const GameHeader = () => {
	const dispatch = useDispatch();
	const [openModal, setopenModal] = useState(false);
	return (
		<header className="flex items-center justify-between">
			{/* Logo */}
			<h2 className="text-[24px] md:text-40 md:leading-[50px] leading-[30px] font-bold text-slate-900">
				memory
			</h2>
			{/* Desktop Buttons */}
			<div className="hidden md:flex gap-4 items-center">
				<button
					className="restart-btn py-3 px-7 rounded-26"
					onClick={() => {
						dispatch(resetCards());
						dispatch(resetPlayersScore());
					}}
				>
					Restart
				</button>
				<button
					className="new-game py-3 px-7 rounded-26"
					onClick={() => {
						dispatch(resetCards());
						dispatch(resetGame());
					}}
				>
					New Game
				</button>
			</div>
			<button
				className="menu-btn py-2.5 px-4.5 md:hidden"
				onClick={() => setopenModal(true)}
			>
				Menu
			</button>
			<AnimatePresence>
				{openModal && (
					<motion.div
						className="absolute w-full px-6  h-full bg-black/50 top-0 left-0 flex justify-center items-center z-20"
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
							{/* Buttons */}
							<div className="flex flex-col md:flex-row w-full gap-4 md:gap-3">
								<button
									className="restart-btn py-4 w-full"
									onClick={() => {
										dispatch(resetPlayersScore());
										dispatch(resetCards());
									}}
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
								<button
									className="new-game py-4 w-full"
									onClick={() => {
										setopenModal(false);
									}}
								>
									Resume Game
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default GameHeader;
