import { createPlayer } from "./data.js";
import { createElement } from "./helper/helperFunctions.js";
const createlogoImage = () => {
	const logo = document.createElement("img");
	logo.className = "logo";
	logo.src = "./assets/logo.svg";
	// Max height:32px
	return logo;
};
const createPlayerMarkPick = () => {
	// Create the main container
	const pickMarkContainer = document.createElement("div");
	pickMarkContainer.className = "pick-mark-container";

	// Add the heading
	const pickMarkHeading = document.createElement("p");
	pickMarkHeading.className = "XS";
	pickMarkHeading.innerText = "Pick player 1's mark";
	pickMarkContainer.appendChild(pickMarkHeading);

	// Create the marks container
	const marksContainer = document.createElement("div");
	marksContainer.className = "marks-container";
	// Create the X button
	const labelX = createMarkLabel(
		"X",
		"pick-x",
		"./assets/icon-x.svg",
		"X Icon"
	);
	const labelO = createMarkLabel(
		"O",
		"pick-o",
		"./assets/icon-o.svg",
		"O Icon"
	);
	// Append buttons to the marks container
	marksContainer.append(labelX, labelO);
	pickMarkContainer.appendChild(marksContainer);

	// Add the reminder text
	const reminderText = document.createElement("p");
	reminderText.className = "text-body";
	reminderText.innerText = "Remember: X goes first";
	pickMarkContainer.appendChild(reminderText);

	return pickMarkContainer;
};

const createMarkLabel = (value, id, iconSrc, altText) => {
	const label = document.createElement("label");
	label.className = `${value}-btn`;
	label.htmlFor = id;
	label.innerHTML = `
		<img src='${iconSrc}' alt='${altText}' />
		<input type='radio' id='${id}' value='${value}' name='marker' />
	`;
	label.addEventListener("click", () => {
		// Remove 'selected' class from all labels
		document.querySelectorAll(".marks-container label").forEach((label) => {
			label.classList.remove("selected");
		});
		// Add 'selected' class to the clicked label
		label.classList.add("selected");
	});
	return label;
};

const createGameButton = (vsType, text, className) => {
	const button = document.createElement("button");
	button.type = "button";
	button.dataset.vs = vsType; // Set the dataset attribute
	button.className = className; // Use dynamic class names
	button.innerText = text; // Set button text

	return button;
};
const createNewGameBtns = () => {
	const newGameBtns = document.createElement("div");
	newGameBtns.className = "new-game-btns";

	const newGameVsCpuBtn = createGameButton(
		"cpu",
		"New Game (vs CPU)",
		"btn-primary btn-yellow" // Use multiple classes for better reusability
	);

	const newGameVsPlayerBtn = createGameButton(
		"player",
		"New Game (vs Player)",
		"btn-primary btn-blue" // Use multiple classes for better reusability
	);

	newGameBtns.append(newGameVsCpuBtn, newGameVsPlayerBtn);
	return newGameBtns;
};
export const createNewGame = () => {
	const newGameContainer = document.createElement("div");
	newGameContainer.className = "new-game-container fade-in";
	newGameContainer.id = "new-game";
	newGameContainer.append(
		createlogoImage(),
		createPlayerMarkPick(),
		createNewGameBtns()
	);
	return newGameContainer;
};

// Game Screen

const createGameHeader = (player) => {
	const gameHeader = createElement("div", "game-header");

	// TurnInfo
	const turnInfo = createElement("div", "turn-info");
	const playerMark = createElement("img", "turn-mark");
	playerMark.src = player.icon;
	const turnText = createElement("p", "XS");
	turnText.ariaLabel = "Current Turn";
	turnText.innerText = "turn";
	turnInfo.append(playerMark, turnText);

	// Restart Button
	const restartButton = createElement("button", "btn-restart");
	restartButton.type = "button";
	restartButton.id = "restart-btn";
	restartButton.ariaLabel = "Restart game";
	const restartIcon = createElement("img");
	restartIcon.src = "./assets/icon-restart.svg";
	restartIcon.alt = "Restart game icon";
	restartButton.appendChild(restartIcon);
	// Append elements to header
	gameHeader.append(createlogoImage(), turnInfo, restartButton);
	return gameHeader;
};

// Tiles and Baord
const createTile = (value) => {
	const tile = createElement("button", "tile");
	(tile.dataset.value = value), (tile.dataset.filled = "false");
	const tileImg = createElement("img", "tile-img");
	tileImg.src = "";
	tileImg.alt = "";
	tile.appendChild(tileImg);
	return tile;
};
const createBoard = () => {
	const boardContainer = createElement("div", "board");
	for (let i = 0; i < 9; i++) {
		boardContainer.append(createTile(i));
	}
	return boardContainer;
};
const createScoreInfo = (mark, mainPlayer, opponent) => {
	const info = createElement("div", `info ${mark}-score`);
	const playerText = createElement("p", "score-text");
	playerText.innerText = `${mark} ${
		mainPlayer.sign === mark ? `(${mainPlayer.name})` : `(${opponent.name})`
	}`;
	const playerScore = createElement("p", "S");
	playerScore.innerText = `${
		mainPlayer.sign === mark ? mainPlayer.score : opponent.score
	}`;
	info.append(playerText, playerScore);
	return info;
};
const createTieScore = (tie) => {
	const tieInfo = createElement("div", "info tie-score");
	const tieText = createElement("p", "score-text");
	tieText.innerText = "Ties";
	const tieScore = createElement("p", "S");
	tieScore.innerText = tie.score;
	tieInfo.append(tieText, tieScore);
	return tieInfo;
};
export const createScoreInfoContainer = (you, tie, opponent) => {
	const scoresContainer = createElement("div", "score-container", {
		id: "scores",
	});
	scoresContainer.append(
		createScoreInfo("X", you, opponent),
		createTieScore(tie),
		createScoreInfo("O", you, opponent)
	);
	return scoresContainer;
};

export const createGameScreen = (player, tie, opponent, activePlayer) => {
	const gameScreen = createElement("div", "game-screen fade-in");
	gameScreen.id = "game-screen";
	gameScreen.append(
		createGameHeader(activePlayer),
		createBoard(),
		createScoreInfoContainer(player, tie, opponent)
	);
	return gameScreen;
};

// Modals
const createModalBtn = (text, color) => {
	const modalBtn = createElement(
		"button",
		`btn-secondary btn-${color} btn-modal`
	);
	modalBtn.id = `btn-${text.split(/[ ,]+/)[0]}`;
	modalBtn.innerText = text;
	return modalBtn;
};
const createModalBtns = (btn1, btn2) => {
	const modalBtnContainer = createElement("div", "modal-btn");
	modalBtnContainer.append(
		createModalBtn(btn1, "grey"),
		createModalBtn(btn2, "yellow")
	);
	return modalBtnContainer;
};
export const createResultModal = (mode, winner = "") => {
	// Create modal container and modal elements
	const modalContainer = createElement("div", "modal-container fade-in");
	modalContainer.id = "modal-container";

	const modal = createElement("div", `modal zoom-in`);
	modal.id = "modal";

	const resultInfo = createElement("p", "modal-info");

	// Set result text based on game mode and winner
	switch (mode) {
		case "cpu":
			resultInfo.innerText =
				winner.name === "CPU" ? "Oh no, you lost..." : "YOU WON!";
			break;
		case "player":
			resultInfo.innerText =
				winner.name === "P1" ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!";
			break;
		case "tie":
			resultInfo.innerText = "Round Tied";
			resultInfo.classList.add("tie-text");
			modal.classList.add("modal-tie");
			break;
		case "restart":
			resultInfo.innerText = "Restart Game?";
			resultInfo.classList.add("restart-text");
			modal.classList.add("modal-restart");
			break;
		default:
			resultInfo.innerText = "Unknown Result";
	}
	let winnerMarker = null;
	if (winner.icon) {
		winnerMarker = createElement("div", "modal-marker");
		winnerMarker.innerHTML = `
			<img src="${winner.icon}" alt="${winner.name} marker" />
			<p class="winner-${winner.sign} M">takes the round</p>
		`;
	}
	// Append elements to modal
	if (mode === "tie") {
		modal.append(resultInfo, createModalBtns("quit", "next round"));
	} else if (mode === "restart") {
		modal.append(resultInfo, createModalBtns("no,cancel", "yes,restart"));
	} else {
		modal.append(
			resultInfo,
			winnerMarker,
			createModalBtns("quit", "next round")
		);
	}

	// Append modal to container and return
	modalContainer.append(modal);
	return modalContainer;
};

// const player = createPlayer(
// 	"You",
// 	"X",
// 	"./assets/icon-x.svg",
// 	"./assets/icon-x-outline.svg"
// );
// const main = document.querySelector("main");
// main.appendChild(createResultModal("cpu", player));

// import { createPlayer } from "./data.js";
//

// const tie = {
// 	score: 12,
// };
// const opponent = createPlayer(
// 	"CPU",
// 	"X",
// 	"./assets/icon-o.svg",
// 	"./assets/icon-o-outline.svg"
// );

// main.appendChild(createGameScreen(player, tie, opponent));
