import { createSlice } from "@reduxjs/toolkit";
import { nextPlayer } from "./gameSlice";
import { useDispatch } from "react-redux";

const initialState = {
	matchedCards: [],
	matchFound: false,
	nextPlayer: false,
	checkingCards: [],
	moves: 0,
	timer: 0,
	isChecking: false,
	allCardsFound: false, //One gameFinsihed
};
export const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		pushToCheckingCards: (state, action) => {
			state.checkingCards.push(action.payload);
			if (state.checkingCards.length === 2) {
				state.isChecking = true;
				state.moves += 1;
			}
		},
		checkMatch: (state) => {
			const [first, second] = state.checkingCards;

			if (first && second) {
				if (first === second) {
					state.matchedCards.push(first);
					state.matchFound = true;
					state.nextPlayer = false;
				} else {
					state.matchFound = false;
					state.nextPlayer = true;
				}
			}
		},
		checkWin: (state, action) => {
			state.checkingCards = [];
			state.isChecking = false;
			const totalPairs = action.payload;

			if (state.matchedCards.length === totalPairs) {
				state.allCardsFound = true;
			}
		},
		resetCheckingCards: (state) => {
			state.checkingCards = [];
		},
		incrementTimer: (state) => {
			state.timer += 1;
		},
		incrementMove: (state) => {
			state.moves += 1;
		},
		resetCards: () => initialState,
		resetMatchFound: (state) => {
			state.matchFound = null;
		},
		resetNextPlayer: (state) => {
			state.nextPlayer = null;
		},
	},
});

export const {
	pushToCheckingCards,
	checkWin,
	checkMatch,
	resetCheckingCards,
	incrementTimer,
	incrementMove,
	resetCards,
	resetMatchFound,
	resetNextPlayer,
} = cardsSlice.actions;

export default cardsSlice.reducer;
