import { createSlice } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCubes,
	faBurst,
	faBreadSlice,
	faBowlRice,
	faAppleWhole,
	faHandcuffs,
	faHeadphones,
	faSkull,
	faRadiation,
	faPizzaSlice,
	faPaw,
	faMoon,
	faFingerprint,
	faPuzzlePiece,
	faEye,
	faLeaf,
	faDice,
	faCookieBite,
} from "@fortawesome/free-solid-svg-icons";
const iconSet = [
	faCubes,
	faBurst,
	faBreadSlice,
	faBowlRice,
	faAppleWhole,
	faHandcuffs,
	faHeadphones,
	faSkull,
	faRadiation,
	faPizzaSlice,
	faPaw,
	faMoon,
	faFingerprint,
	faPuzzlePiece,
	faDice,
	faLeaf,
	faCookieBite,
	faEye,
];
const initialState = {
	theme: "numbers", // or "icons"
	playerNum: 1,
	gridSize: "4x4",
	gameStarted: false,
	gameGrid: [],
	players: [],
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		setGrid: (state, action) => {
			state.gridSize = action.payload;
		},
		setPlayerNum: (state, action) => {
			state.playerNum = action.payload;
		},
		resetGame: () => initialState,
		startGame: (state) => {
			state.gameStarted = true;
		},
		createGrid: (state) => {
			let items = [];

			const isNumbers = state.theme === "numbers";
			const is4x4 = state.gridSize === "4x4";

			if (isNumbers) {
				const count = is4x4 ? 8 : 18;
				items = Array.from({ length: count }, (_, i) => i + 1);
			} else {
				const count = is4x4 ? 8 : 18;
				items = iconSet.slice(0, count);
			}

			// Fisher-Yates Shuffle
			let shuffledArray = [...items, ...items]; //Elemnt appears twice
			for (let i = shuffledArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledArray[i], shuffledArray[j]] = [
					shuffledArray[j],
					shuffledArray[i],
				];
			}
			state.gameGrid = shuffledArray;
		},
		initialisePlayers: (state) => {
			for (let i = 1; i <= state.playerNum; i++) {
				const player = {
					player: `Player ${i}`,
					p: `P${i}`,
					active: i === 1,
					score: 0,
				};
				state.players.push(player);
			}
		},
		resetPlayersScore: (state) => {
			state.players = state.players = state.players.map(
				(player, index) => ({
					...player,
					score: 0,
					active: index === 0,
				})
			);
		},
		updateScoreforPlayer: (state) => {
			const activeIndex = state.players.findIndex(
				(player) => player.active
			);
			state.players[activeIndex].score += 1;
		},
		nextPlayer: (state) => {
			const activeIndex = state.players.findIndex(
				(player) => player.active
			);
			state.players[activeIndex].active = false;
			const nextIndex = (activeIndex + 1) % state.players.length;
			state.players[nextIndex].active = true;
		},
	},
});

export const {
	setTheme,
	setGrid,
	setPlayerNum,
	resetGame,
	startGame,
	createGrid,
	initialisePlayers,
	nextPlayer,
	updateScoreforPlayer,
	resetPlayersScore,
} = gameSlice.actions;
export default gameSlice.reducer;
