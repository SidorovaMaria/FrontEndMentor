import React from "react";
import GameHeader from "./GameHeader";
import { AnimatePresence, motion } from "motion/react";
import { dropIn, flipIntro } from "../app/motionVariants";
import { useSelector } from "react-redux";
import PlayerScore from "./PlayerScore";
import ConnectFourBoard from "./ConnectFourBoard";
const Game = () => {
	const { gameStarted, gameOpponent } = useSelector((state) => state.game);
	console.log(gameOpponent);
	return (
		<motion.main className="h-full w-full bg-purple flex flex-col gap-[50px]">
			<AnimatePresence>
				{gameStarted && (
					<>
						<GameHeader />
						<div className="flex w-full px-2.5 gap-5 md:max-w-[633px] md:mx-auto lg:hidden">
							{gameOpponent === "cpu" ? (
								<>
									<>
										<PlayerScore
											position={"left"}
											player={"you"}
											score={12}
										/>
										<PlayerScore
											position={"right"}
											player={"cpu"}
											score={23}
										/>
									</>
								</>
							) : (
								<>
									<PlayerScore
										position={"left"}
										player={"player 1"}
										score={12}
									/>
									<PlayerScore
										position={"right"}
										player={"player 2"}
										score={23}
									/>
								</>
							)}
						</div>
						<ConnectFourBoard />
					</>
				)}
			</AnimatePresence>
		</motion.main>
	);
};

export default Game;
