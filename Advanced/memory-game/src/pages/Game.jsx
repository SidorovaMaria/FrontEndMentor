import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameHeader from "../components/GameHeader";
import GameGrid from "../components/GameGrid";
import GameTimer from "../components/GameTimer";
import SoloModal from "../components/SoloModal";
import MultipleScore from "../components/MultipleScore";
import MultiPlayerModal from "../components/MultiPlayerModal";
import { initialisePlayers } from "../features/gameSlice";
import { AnimatePresence } from "motion/react";
const Game = () => {
	const { playerNum } = useSelector((state) => state.game);
	const allCardsFound = useSelector((state) => state.cards.allCardsFound);
	const dispatch = useDispatch();

	return (
		<main className="m-6 bg-whitest md:p-10 flex flex-col gap-20 md:gap-30 lg:gap-22 lg:p-0 lg:max-w-[1100px] lg:mt-16 lg:mx-auto ">
			<GameHeader />
			<GameGrid />
			{playerNum === 1 ? (
				<>
					<GameTimer />
					<AnimatePresence>
						{allCardsFound && <SoloModal />}
					</AnimatePresence>
				</>
			) : (
				<>
					<MultipleScore />
					<AnimatePresence>
						{allCardsFound && <MultiPlayerModal />}
					</AnimatePresence>
				</>
			)}
		</main>
	);
};

export default Game;
