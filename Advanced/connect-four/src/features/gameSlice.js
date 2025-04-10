import { createSlice, current } from "@reduxjs/toolkit";

const ROWS = 6;
const COLS = 7;
const createEmptyBoard = () =>
	Array.from({ length: ROWS }, () => Array(COLS).fill(null));

const initialState = {
	board: createEmptyBoard(),
	currentPlayer: null,
	gamesPlayed: 0,
	timerStopped: false,
	gameStarted: false,
	timer: 30,
	gameMode: null, // 'pvp' or 'cpu'
	players: {
		player1: { name: "player 1", color: "red", score: 0 },
		player2: { name: "player 2", color: "yellow", score: 0 },
	},
};

const checkWin = (board, playerColor) => {
	// Win checking logic (same as yours)
	for (let row = 0; row < ROWS; row++) {
		for (let col = 0; col <= COLS - 4; col++) {
			if (
				board[row][col] === playerColor &&
				board[row][col + 1] === playerColor &&
				board[row][col + 2] === playerColor &&
				board[row][col + 3] === playerColor
			)
				return true;
		}
	}
	for (let col = 0; col < COLS; col++) {
		for (let row = 0; row <= ROWS - 4; row++) {
			if (
				board[row][col] === playerColor &&
				board[row + 1][col] === playerColor &&
				board[row + 2][col] === playerColor &&
				board[row + 3][col] === playerColor
			)
				return true;
		}
	}
	for (let row = 3; row < ROWS; row++) {
		for (let col = 0; col <= COLS - 4; col++) {
			if (
				board[row][col] === playerColor &&
				board[row - 1][col + 1] === playerColor &&
				board[row - 2][col + 2] === playerColor &&
				board[row - 3][col + 3] === playerColor
			)
				return true;
		}
	}
	for (let row = 0; row <= ROWS - 4; row++) {
		for (let col = 0; col <= COLS - 4; col++) {
			if (
				board[row][col] === playerColor &&
				board[row + 1][col + 1] === playerColor &&
				board[row + 2][col + 2] === playerColor &&
				board[row + 3][col + 3] === playerColor
			)
				return true;
		}
	}
	return false;
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		startGame: (state, action) => {
			const mode = action.payload; // 'pvp' or 'cpu'
			state.gameMode = mode;
			state.board = createEmptyBoard();
			state.currentPlayer = state.players.player1;
			state.winner = null;
			state.gameStarted = true;

			// Update names if CPU mode
			if (mode === "cpu") {
				state.players.player1.name = "you";
				state.players.player2.name = "cpu";
			}
		},

		dropDisc: (state, action) => {
			if (state.winner) return;

			const col = action.payload;
			const currentPlayer = state.currentPlayer; // Get the current player object
			const color = currentPlayer.color;
			state.timer = 30;

			for (let row = ROWS - 1; row >= 0; row--) {
				if (!state.board[row][col]) {
					state.board[row][col] = color;

					if (checkWin(state.board, color)) {
						state.winner = currentPlayer;
						state.gamesPlayed += 1;
						state.currentPlayer.name === state.players.player1.name
							? (state.players.player1.score += 1)
							: (state.players.player2.score += 1);
					} else {
						// Switch turn by checking the current player object
						state.currentPlayer =
							state.currentPlayer.name ===
							state.players.player1.name
								? state.players.player2
								: state.players.player1;
					}

					break;
				}
			}
		},
		startTimer: (state) => {
			state.timer = 30; // Start the timer at 30
		},
		updateTimer: (state) => {
			if (state.timer > 0) {
				state.timer -= 1; // Decrease the timer by 1 second
			}
		},

		setWinnerTimeLost: (state) => {
			state.winner =
				state.currentPlayer.name === state.players.player1.name
					? state.players.player2
					: state.players.player1;
			state.currentPlayer.name === state.players.player1.name
				? (state.players.player2.score += 1)
				: (state.players.player1.score += 1);
		},

		quitGame: () => initialState,
		restartGame: (state) => {
			state.board = createEmptyBoard();
			state.winner = null;
			state.currentPlayer =
				state.gamesPlayed % 2 === 0
					? state.players.player2
					: state.players.player1;
			state.timer = 30;
		},
		stopTimer: (state) => {
			state.timerStopped = true;
		},
		continueTimer: (state) => {
			state.timerStopped = false;
		},
	},
});

export const {
	startGame,
	dropDisc,
	quitGame,
	startTimer,
	updateTimer,
	resetTimer,
	setWinnerTimeLost,
	restartGame,
	stopTimer,
	continueTimer,
} = gameSlice.actions;
export default gameSlice.reducer;
