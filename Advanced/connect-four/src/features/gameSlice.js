import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	gameStarted: false,
	gameOpponent: null,
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		startGame: (state) => {
			state.gameStarted = true;
		},
		quitGame: (state) => {
			state.gameStarted = false;
			state.gameOpponent = null;
		},
		setOpponent: (state, action) => {
			state.gameOpponent = action.payload;
		},
	},
});

export const { startGame, quitGame, setOpponent } = gameSlice.actions;
export default gameSlice.reducer;
