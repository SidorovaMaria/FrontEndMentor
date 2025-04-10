import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { turnFlip } from "../app/motionVariants";
import { useDispatch, useSelector } from "react-redux";
import { restartGame } from "../features/gameSlice";

const WinnerBlock = () => {
	const { winner } = useSelector((state) => state.game);
	const dispatch = useDispatch();
	return (
		<AnimatePresence>
			{winner && (
				<motion.div
					variants={turnFlip}
					initial="initial"
					animate="animate"
					exit="exit"
					className="flex justify-center items-center absolute z-40 top-11/12 left-1/2 -translate-x-1/2  "
				>
					<div className="w-[256px] h-40 flex flex-col justify-center items-center bg-white border-[3px] border-black rounded-[20px] solid-shadow-L">
						<p className="text-XS uppercase">{winner.name}</p>
						<p className="text-L uppercase ">
							Win{!winner.name === "you" && "s"}
						</p>
						<button
							onClick={() => dispatch(restartGame())}
							className="text-white bg-purple-darker rounded-[20px] uppercase text-XS w-[130px] flex justify-center items-center h-10 hover:bg-pink transition-all"
						>
							play Again
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default WinnerBlock;
