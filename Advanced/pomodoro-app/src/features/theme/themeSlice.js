import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
	timer: "pomodoro",
	color: "#70F3F8",
	font: "Kumbh Sans",
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTimer: (state, action) => {
			state.timer = action.payload;
		},
		setColor: (state, action) => {
			state.color = action.payload;
		},
		setFontFamily: (state, action) => {
			state.font = action.payload;
		},
		setPomodoro: (state, action) => {
			state.pomodoro = action.payload;
		},
		setShortBreak: (state, action) => {
			state.shortBreak = action.payload;
		},
		setLongBreak: (state, action) => {
			state.longBreak = action.payload;
		},
	},
});

export const {
	setTimer,
	setFontSize,
	setColor,
	setFontFamily,
	setPomodoro,
	setShortBreak,
	setLongBreak,
} = themeSlice.actions;

export const store = configureStore({
	reducer: {
		theme: themeSlice.reducer,
	},
});

export default themeSlice.reducer;
