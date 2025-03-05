import {
	createPlayer,
	mainPlayer,
	opponent,
	ties,
	WIN_COMBINATIONS,
} from "./data.js";
import {
	createGameScreen,
	createNewGame,
	createResultModal,
	createScoreInfoContainer,
} from "./dom-elements.js";

let gameState = {
	mode: null, //CPU or Player
	activePlayer: null,
	isGameOver: false,
	winner: null,
	startingPlayer: null,
	numberOfGames: 0,
};

// Initialise the Game
const initGame = () => {
	const main = document.querySelector("main");
	main.appendChild(createNewGame());
};

// Start of the Game
// Player Selected the Mark and Opponent
const selectMark = (e) => {
	const isX = e.target.value === "X";
	mainPlayer.sign = isX ? "X" : "O";
	mainPlayer.icon = `./assets/icon-${mainPlayer.sign.toLowerCase()}.svg`;
	mainPlayer.iconHover = `./assets/icon-${mainPlayer.sign.toLowerCase()}-outline.svg`;
	opponent.sign = isX ? "O" : "X";
	opponent.icon = `./assets/icon-${opponent.sign.toLowerCase()}.svg`;
	opponent.iconHover = `./assets/icon-${opponent.sign.toLowerCase()}-outline.svg`;
	gameState.activePlayer = isX ? mainPlayer : opponent;
	gameState.startingPlayer = isX ? mainPlayer : opponent;
};
const updatePlayers = (e) => {
	gameState.mode = e.target.dataset.vs;
	if (e.target.dataset.vs === "cpu") {
		mainPlayer.name = "You";
		opponent.name = "CPU";
	} else if (e.target.dataset.vs === "player") {
		mainPlayer.name = "P1";
		opponent.name = "P2";
	} else {
		return;
	}
};
const displayGame = () => {
	gameState.isGameOver = false;
	gameState.winner = null;
	gameState.numberOfGames = 1;
	const main = document.querySelector("main");
	document.getElementById("new-game").classList.add("fade-out");
	setTimeout(() => {
		document.getElementById("new-game").remove();
		main.appendChild(
			createGameScreen(mainPlayer, ties, opponent, gameState.activePlayer)
		);
	}, 500);
	setTimeout(() => {
		if (gameState.mode === "cpu" && gameState.activePlayer.name === "CPU") {
			CPUturn();
		}
	}, 600);
};

const placeMark = (tile) => {
	if (!tile || tile.dataset.filled === "true" || gameState.isGameOver) return;
	tile.firstChild.src = gameState.activePlayer.icon;
	tile.dataset.filled = "true";
	gameState.activePlayer.board.push(Number(tile.dataset.value));
	if (checkWin(gameState.activePlayer)) {
		gameState.winner = gameState.activePlayer;
		gameState.winner.score += 1;
		gameState.isGameOver = true;
		updateScore();
		displayModal(gameState.mode, gameState.winner);
	} else if (checkDraw()) {
		ties.score += 1;
		updateScore();
		displayModal("tie");
		gameState.isGameOver = true;
	} else {
		changeTurn();
	}
};
const updateScore = () => {
	const scores = document.getElementById("scores");
	const newScores = createScoreInfoContainer(mainPlayer, ties, opponent);
	if (scores) {
		scores.replaceWith(newScores);
	}
};
const CPUturn = () => {
	const availableTiles = Array.from(
		document.querySelectorAll(".tile[data-filled='false")
	);
	const chosenPlace = Math.floor(Math.random() * availableTiles.length);
	const chosenTile = availableTiles[chosenPlace];
	setTimeout(() => {
		placeMark(chosenTile);
	}, 500);
};

const changeTurn = () => {
	gameState.activePlayer =
		gameState.activePlayer === mainPlayer ? opponent : mainPlayer;
	const turnInfo = document.querySelector(".turn-info");
	turnInfo.firstChild.src = gameState.activePlayer.icon;
	if (gameState.mode === "cpu" && gameState.activePlayer.name === "CPU") {
		CPUturn();
	}
};

const highlightWinningCombination = (combination) => {
	combination.forEach((value) => {
		const tile = document.querySelector(`.tile[data-value='${value}']`);
		if (tile) {
			tile.classList.add(`won-${gameState.activePlayer.sign}`);
		}
	});
};

const checkWin = (player) => {
	const winningCombination = WIN_COMBINATIONS.find((combination) =>
		combination.every((element) => player.board.includes(element))
	);
	if (winningCombination) {
		highlightWinningCombination(winningCombination);
		return true;
	}
	return false;
};
const checkDraw = () => {
	const tiles = Array.from(document.querySelectorAll(".tile"));
	return tiles.every((tile) => tile.dataset.filled === "true");
};
const displayModal = (mode, winner) => {
	const main = document.querySelector("main");
	main.appendChild(createResultModal(mode, winner));
};
const removeElement = (id, effectOut, effectIn) => {
	const element = document.getElementById(id);

	if (!element) return;

	// Remove the "effectIn" class and add the "effectOut" class
	element.classList.remove(effectIn);
	element.classList.add(effectOut);

	// Wait for the animation to complete before removing the element
	setTimeout(() => {
		element.remove();
	}, 500);
};

const nextRound = () => {
	mainPlayer.board = [];
	opponent.board = [];
	gameState.isGameOver = false;
	gameState.numberOfGames += 1;
	if (gameState.numberOfGames % 2 == 0) {
		gameState.activePlayer =
			gameState.startingPlayer === mainPlayer ? opponent : mainPlayer;
	} else {
		gameState.activePlayer = gameState.startingPlayer;
	}
	removeElement("game-screen", "fade-out", "fade-in");
	const main = document.querySelector("main");
	setTimeout(() => {
		main.appendChild(
			createGameScreen(mainPlayer, ties, opponent, gameState.activePlayer)
		);
	}, 600);
	setTimeout(() => {
		if (gameState.mode === "cpu" && gameState.activePlayer.name === "CPU") {
			CPUturn();
		}
	}, 700);
};
const resetGame = () => {
	gameState.isGameOver = false;
	gameState.mode = "";
	gameState.winner = null;
	gameState.startingPlayer = null;
	gameState.activePlayer = null;
	gameState.numberOfGames = 0;
	clearPlayer(mainPlayer);
	clearPlayer(opponent);
	removeElement("game-screen", "fade-out", "fade-in");
	console.log(gameState, mainPlayer, opponent);
	setTimeout(() => {
		initGame();
	}, 600);
};
const restartGame = (e) => {
	displayModal("restart");
};

const clearPlayer = (player) => {
	player.board = [];
	player.icon = null;
	player.iconHover = null;
	player.score = 0;
	player.sign = "";
	player.name = "";
};
const handleClick = (e) => {
	// When Choosing Mark
	if (e.target.name === "marker") {
		selectMark(e);
	}
	// Choosing Mode
	if (e.target.dataset.vs && mainPlayer.sign) {
		updatePlayers(e);
		displayGame();
	}
	// PLacing Marker
	if (e.target.dataset.value) {
		placeMark(e.target);
	}
	if (e.target.classList.contains("btn-modal")) {
		removeElement("modal-container", "fade-out", "fade-in");
		removeElement("modal", "zoom-out", "zoom-in");
		if (e.target.id === "btn-next") {
			nextRound();
		} else if (e.target.id === "btn-quit") {
			resetGame();
		} else if (e.target.id === "btn-yes") {
			resetGame();
		} else if (e.target.id === "btn-no") {
			return;
		}
	}
	if (e.target.id === "restart-btn") {
		restartGame();
	}
};
const initEventListener = () => {
	const main = document.querySelector("main");
	main.addEventListener("click", handleClick);

	document.body.addEventListener(
		"mouseenter",
		(e) => {
			if (e.target.dataset.value && e.target.dataset.filled === "false") {
				e.target.firstChild.src = gameState.activePlayer.iconHover;
			}
		},
		true
	);

	document.body.addEventListener(
		"mouseleave",
		(e) => {
			if (e.target.dataset.value && e.target.dataset.filled === "false") {
				e.target.firstChild.src = "";
			}
		},
		true
	);
};

initGame();
initEventListener();
