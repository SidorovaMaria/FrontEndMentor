export const getRandomChoice = (gameChoices) => {
	return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};

export const determineWinner = (player, computer) => {
	if (player === computer) return "It's a Tie!";
	const rules = {
		rock: ["scissors", "lizard"],
		scissors: ["paper", "lizard"],
		paper: ["rock", "spock"],
		lizard: ["spock", "paper"],
		spock: ["scissors", "rock"],
	};
	return rules[player].includes(computer) ? "You Win!" : "You Lose!";
};

export const signFeatures = {
	rock: {
		icon: "rock",
		borderColor: "#DB2E4D",
		shadowColor: "#9D1634",
	},
	paper: {
		icon: "paper",
		borderColor: "#4664F4",
		shadowColor: "#2A45C2",
	},
	scissors: {
		icon: "scissors",
		borderColor: "#EB9F0E",
		shadowColor: "#C76C1B",
	},
	spock: {
		icon: "spock",
		borderColor: "#3FB7CD",
		shadowColor: "#2D8DAB",
	},
	lizard: {
		icon: "lizard",
		borderColor: "#834EE3",
		shadowColor: "#5F37A8",
	},
};
