import { AnimatePresence, motion } from "motion/react";
import React, { useEffect } from "react";
import { fadeUp } from "../app/motionVariants";
import { useDispatch, useSelector } from "react-redux";
import { dropDisc } from "../features/gameSlice";
import TurnMarker from "./TurnMarker";
import WinnerBlock from "./WinnerBlock";

const ConnectFourBoard = () => {
	const dispatch = useDispatch();
	const { board, winner, currentPlayer, winnerCombination } = useSelector(
		(state) => state.game
	);
	const handleClick = (col) => {
		if (!winner) {
			dispatch(dropDisc(col));
		}
	};

	return (
		<div className="relative">
			<motion.div
				className="flex justify-center items-center relative md:hidden"
				key={"baord"}
				variants={fadeUp}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<div className="grid grid-cols-7 grid-rows-6 w-[335px] h-[310px] z-20  pb-8 px-2 pt-3 gap-2 ">
					{board.map((row, rowIndex) =>
						row.map((cell, colIndex) => {
							const discKey = `${rowIndex}-${colIndex}-${cell}`;
							let winnerTile = false;
							if (
								winnerCombination?.some(
									([winRow, winCol]) =>
										winRow === rowIndex &&
										winCol === colIndex
								)
							) {
								winnerTile = true;
							}

							return (
								<div
									key={`${rowIndex}-${colIndex}`}
									className={`group`}
									onClick={() => handleClick(colIndex)}
								>
									{cell && (
										<motion.div
											key={discKey}
											initial={{ y: -100 }}
											animate={{ y: 0 }}
											transition={{
												duration: 0.3,
											}}
											className={`relative `}
										>
											<img
												src={`${
													cell === "red"
														? "/assets/images/counter-red-small.svg"
														: "/assets/images/counter-yellow-small.svg"
												}`}
											/>
											{winnerTile && (
												<div className="absolute h-5 rounded-full bg-white w-5 top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 flex items-center justify-center">
													<div
														className={`w-2 h-2 rounded-full ${
															cell === "red"
																? "bg-pink"
																: "bg-yellow"
														}`}
													></div>
												</div>
											)}
										</motion.div>
									)}
									<img
										className="absolute bottom-full transition-all w-8 opacity-0 group-hover:opacity-100"
										src={`${
											currentPlayer === "red"
												? "/assets/images/marker-red.svg"
												: "/assets/images/marker-yellow.svg"
										}`}
									/>
								</div>
							);
						})
					)}
				</div>
				<img
					src="/assets/images/board-layer-black-small.svg"
					className="absolute top-0 z-10 place-self-center"
				/>
				<img
					src="/assets/images/board-layer-white-small.svg"
					className="absolute top-0 z-30 pointer-events-none"
				/>
			</motion.div>
			{/* Larger Screen */}
			<motion.div
				className="md:flex justify-center items-center relative hidden"
				key={"baord-large"}
				variants={fadeUp}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<div className="grid grid-cols-7 grid-rows-6 w-[632px] h-[584px] z-20 pb-11 px-2 ">
					{board.map((row, rowIndex) =>
						row.map((cell, colIndex) => {
							const discKey = `${rowIndex}-${colIndex}-${cell}`;
							let winnerTile = false;
							if (
								winnerCombination?.some(
									([winRow, winCol]) =>
										winRow === rowIndex &&
										winCol === colIndex
								)
							) {
								winnerTile = true;
							}

							return (
								<div
									key={`${rowIndex}-${colIndex}`}
									className={`group flex justify-center items-center ${
										winner
											? "cursor-not-allowed"
											: "cursor-pointer"
									}`}
									onClick={() => handleClick(colIndex)}
								>
									{cell && (
										<motion.div
											key={discKey}
											initial={{ y: -100 }}
											animate={{ y: 0 }}
											transition={{
												duration: 0.3,
											}}
											className={`relative `}
										>
											<img
												src={`${
													cell === "red"
														? "/assets/images/counter-red-large.svg"
														: "/assets/images/counter-yellow-large.svg"
												}`}
											/>
											{winnerTile && (
												<div className="absolute h-8.5 rounded-full bg-white w-8.5 top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 flex items-center justify-center">
													<div
														className={`w-5 h-5 rounded-full ${
															cell === "red"
																? "bg-pink"
																: "bg-yellow"
														}`}
													></div>
												</div>
											)}
										</motion.div>
									)}
									<img
										className="absolute bottom-full transition-all w-8 opacity-0 group-hover:opacity-100"
										src={`${
											currentPlayer?.color === "red"
												? "/assets/images/marker-red.svg"
												: "/assets/images/marker-yellow.svg"
										}`}
									/>
								</div>
							);
						})
					)}
				</div>
				{/* <img
					src="/assets/images/board-layer-black-large.svg"
					className="absolute top-0 z-10 place-self-center"
				/> */}
				<img
					src="/assets/images/board-layer-white-large.svg"
					className="absolute top-0 z-30 pointer-events-none"
				/>
			</motion.div>

			<AnimatePresence mode="wait">
				{!winner ? <TurnMarker /> : <WinnerBlock />}
			</AnimatePresence>
		</div>
	);
};

export default ConnectFourBoard;
