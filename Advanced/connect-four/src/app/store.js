import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice";

export const store = configureStore({
	reducer: {
		game: gameReducer,
	},
});
