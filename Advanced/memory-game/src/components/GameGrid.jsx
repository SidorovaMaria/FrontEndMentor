import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemoryCard from "./MemoryCard";
import { nextPlayer, updateScoreforPlayer } from "../features/gameSlice";
import {
	checkMatch,
	checkWin,
	resetMatchFound,
	resetNextPlayer,
} from "../features/cardsSlice";

const GameGrid = () => {
	const { gameGrid, theme, gridSize, playerNum } = useSelector(
		(state) => state.game
	);
	const cards = useSelector((state) => state.cards);
	const dispatch = useDispatch();

	useEffect(() => {
		if (cards.checkingCards.length === 2) {
			setTimeout(() => {
				const totalPairs = gridSize === "4x4" ? 8 : 18;
				dispatch(checkMatch());
				dispatch(checkWin(totalPairs));
			}, 1000);
		}
	}, [cards.checkingCards]);
	useEffect(() => {
		setTimeout(() => {
			if (playerNum > 1) {
				if (cards.matchFound) {
					dispatch(updateScoreforPlayer());
					dispatch(resetMatchFound());
				}
			}
		}, 200);
	}, [cards.matchFound]);

	return (
		<div
			className={`mx-auto grid w-full  ${
				gridSize === "4x4"
					? " gap-3 md:gap-5  grid-cols-4 grid-rows-4 md:max-w-[432px]"
					: "gap-2.5 md:gap-4 grid-cols-6 grid-rows-6 md:max-w-[472px]"
			}`}
		>
			{gameGrid.map((item, index) => {
				return (
					<MemoryCard
						type={theme}
						icon={item}
						key={index}
						iconStyle={`${
							gridSize === "4x4" ? "icon-4" : "icon-6"
						}`}
					/>
				);
			})}
		</div>
	);
};

export default GameGrid;
