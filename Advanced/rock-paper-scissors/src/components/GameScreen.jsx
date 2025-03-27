import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signFeatures } from "../features/helperFunctions";
import ChosenBtn from "./ChosenBtn";
import { getComputerChoice, play, resetTurn } from "../features/GameSlice";
import { motion, AnimatePresence } from "framer-motion";

const GameScreen = () => {
	const state = useSelector((state) => state.game);
	const dispatch = useDispatch();
	const [showBlackCircle, setShowBlackCircle] = useState(true);
	const [showComputerChoice, setShowComputerChoice] = useState(false);
	const [showWinner, setShowWinner] = useState(false);
	console.log(showComputerChoice, "comp");

	// Fetch computer choice with delay
	useEffect(() => {
		setShowComputerChoice(false);
		if (state.playerChoice) {
			dispatch(getComputerChoice());

			// Trigger play after 4 seconds
			const playTimer = setTimeout(() => {
				dispatch(play());
			}, 4000);

			// Cleanup playTimer
			return () => clearTimeout(playTimer);
		}
	}, [state.playerChoice, dispatch]);

	useEffect(() => {
		if (state.playerChoice) {
			// Show black circle immediately, then switch to the choice
			const blackCircleTimer = setTimeout(() => {
				setShowBlackCircle(false); // Hide black circle after 2 seconds
				setShowComputerChoice(true); // Show computer choice
			}, 2000);

			// Cleanup blackCircleTimer
			return () => clearTimeout(blackCircleTimer);
		}
	}, [state.playerChoice]);

	// Effect 3: Show the winner after 4 seconds
	useEffect(() => {
		if (state.playerChoice) {
			const showWinnerTimer = setTimeout(() => {
				setShowWinner(true);
			}, 4000);

			// Cleanup showWinnerTimer
			return () => clearTimeout(showWinnerTimer);
		}
	}, [state.playerChoice]);

	const choice = state.playerChoice ? signFeatures[state.playerChoice] : null;
	console.log(choice);

	// Fallback if no player choice is made
	if (!state.playerChoice) {
		return <div></div>;
	}

	return (
		<div className="grid grid-cols-2 lg:grid-cols-3 lg:w-full items-center justify-between gap-5">
			{/* Player's Choice */}
			<div className="flex flex-col items-center justify-start gap-4">
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<ChosenBtn
						borderColor={choice.borderColor}
						shadowColor={choice.shadowColor}
						icon={choice.icon}
						won={state.winner === choice.icon}
					/>
				</motion.div>
				<p className="text-pick">You Picked</p>
			</div>
			{/* Computer's Choice with Black Circle First */}
			<div className="flex flex-col items-center justify-center gap-4 lg:col-3">
				<div className="relative w-[130px] h-[130px] lg:w-[190px] lg:h-[190px]">
					{/* Black Circle */}
					<AnimatePresence>
						{showBlackCircle && (
							<motion.div
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0, opacity: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								className="absolute inset-0 rounded-full bg-black/10 "
							/>
						)}
					</AnimatePresence>

					{/* Computer's Choice */}
					<AnimatePresence>
						{showComputerChoice && (
							<motion.div
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{
									duration: 1,
									ease: "easeOut",
									delay: 0.3, // Slight delay for smoother transition
								}}
								className="absolute inset-0"
							>
								<ChosenBtn
									borderColor={
										signFeatures[state.computerChoice]
											.borderColor
									}
									shadowColor={
										signFeatures[state.computerChoice]
											.shadowColor
									}
									icon={
										signFeatures[state.computerChoice].icon
									}
									won={
										state.winner ===
										signFeatures[state.computerChoice].icon
									}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<p className="text-pick">The House Picked</p>
			</div>
			{showWinner ? (
				<div className="w-full col-span-2 lg:col-2 lg:row-1">
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{
							duration: 1,
							ease: "easeOut",
						}}
						className="text-center"
					>
						<div className=" flex flex-col gap-4 justify-center align-center">
							<h2 className="text-win">{state.result}</h2>
							<button
								className="btn w-[220px] mx-auto hover:text-[#DB2E4D]"
								onClick={() => {
									dispatch(resetTurn());
									setShowComputerChoice(false);
									setShowBlackCircle(true);
									setShowWinner(false);
								}}
							>
								Play Again
							</button>
						</div>
					</motion.div>
				</div>
			) : (
				<div className="h-[126px] lg:h-0"></div>
			)}
		</div>
	);
};

export default GameScreen;
