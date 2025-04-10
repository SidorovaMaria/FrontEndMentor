import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "motion/react";
import {
	dropIn,
	fadeDown,
	fadeLeft,
	fadeRight,
	fadeUp,
	turnFlip,
} from "../app/motionVariants";
import {
	setWinnerTimeLost,
	startTimer,
	updateTimer,
} from "../features/gameSlice";

const TurnMarker = () => {
	const { currentPlayer, timer, winner, timerStopped } = useSelector(
		(state) => state.game
	);
	const dispatch = useDispatch();

	// Set interval for updating the timer every second
	useEffect(() => {
		if (timer > 0 && !timerStopped) {
			const intervalId = setInterval(() => {
				dispatch(updateTimer());
			}, 1000);

			return () => clearInterval(intervalId);
		} else if (timer === 0) {
			dispatch(setWinnerTimeLost());
		}
	}, [timer, dispatch, timerStopped]);
	return (
		<AnimatePresence>
			{currentPlayer && (
				<motion.div
					key={currentPlayer.name}
					variants={turnFlip}
					initial="initial"
					animate="animate"
					exit="exit"
					className="flex justify-center items-center absolute z-40 top-11/12 left-1/2 -translate-x-1/2"
				>
					<img
						src={
							currentPlayer.color === "red"
								? "/assets/images/turn-background-red.svg"
								: "/assets/images/turn-background-yellow.svg"
						}
						alt={`${currentPlayer.name} turn`}
						className="w-full h-full object-contain relative"
					/>
					<div
						className={`${
							currentPlayer.color === "red"
								? "text-white"
								: "text-black"
						} absolute  flex flex-col items-center bottom-2/12`}
					>
						<p className="text-XS uppercase">
							{currentPlayer.name}
							{currentPlayer.name === "you" ? "r" : "'s"} turn
						</p>
						<p className="text-L">{timer}s</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default TurnMarker;
