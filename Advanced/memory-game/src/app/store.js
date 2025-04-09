import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice";
import cardsReducer from "../features/cardsSlice";

export const store = configureStore({
	reducer: {
		game: gameReducer,
		cards: cardsReducer,
	},
});
