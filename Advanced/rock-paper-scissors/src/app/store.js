import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice"; // Import the default export as gameReducer

export const store = configureStore({
	reducer: {
		game: gameReducer,
	},
});
