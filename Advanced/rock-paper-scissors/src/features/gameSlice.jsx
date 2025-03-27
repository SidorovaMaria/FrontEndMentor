import { createSlice } from "@reduxjs/toolkit";
import { determineWinner, getRandomChoice } from "./helperFunctions";
import { act } from "react";

const standardGameChoices = ["rock", "paper", "scissors"];
const extendedGameChoices = ["rock", "paper", "scissors", "lizard", "spock"];

const gameSlice = createSlice({
	name: "game",
	initialState: {
		playerChoice: "",
		computerChoice: "",
		result: "",
		score: 0,
		winner: "",
		mode: "standard",
	},
	reducers: {
		setPlayerChoice: (state, action) => {
			state.playerChoice = action.payload;
		},
		getComputerChoice: (state) => {
			const gameChoices =
				state.mode === "standard"
					? standardGameChoices
					: extendedGameChoices;
			state.computerChoice = getRandomChoice(gameChoices);
		},
		play: (state, action) => {
			const result = determineWinner(
				state.playerChoice,
				state.computerChoice
			);
			state.result = result;
			if (result === "You Win!") {
				state.score += 1;
				state.winner = state.playerChoice;
			} else if (result === "You Lose!") {
				state.score -= 1;
				state.winner = state.computerChoice;
			}
		},
		changeMode: (state) => {
			state.mode = state.mode === "standard" ? "extended" : "standard";
		},
		// Reset Turn
		resetTurn: (state) => {
			state.playerChoice = "";
			state.computerChoice = "";
			state.result = "";
			state.winner = "";
		},
		resetGame: (state) => {
			state.playerChoice = "";
			state.computerChoice = "";
			state.result = "";
			state.score = 0;
		},
	},
});
export const {
	setPlayerChoice,
	getComputerChoice,
	play,
	changeMode,
	resetTurn,
	resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;
