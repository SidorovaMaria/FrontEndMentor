// Constants
export const WIN_COMBINATIONS = Object.freeze([
	[0, 1, 2], // Top row
	[3, 4, 5], // Middle row
	[6, 7, 8], // Bottom row
	[0, 3, 6], // Left column
	[1, 4, 7], // Middle column
	[2, 5, 8], // Right column
	[0, 4, 8], // Diagonal (top-left to bottom-right)
	[6, 4, 2], // Diagonal (bottom-left to top-right)
]);

// Helper function to create a player object
export const createPlayer = (
	name = "",
	sign = "",
	icon = null,
	iconHover = null
) => ({
	name,
	score: 0,
	icon,
	iconHover,
	sign,
	board: [],
});

// Main Player
export const mainPlayer = createPlayer();

// Opponent
export const opponent = createPlayer();

// Ties
export const ties = {
	score: 0,
};

// Game State
export const gameState = {
	mode: null, // "cpu" or "player"
	activePlayer: null, // Reference to the current player (mainPlayer or opponent)
	isGameOver: false,
	winner: null, // Reference to the winning player (mainPlayer, opponent, or null for tie)
};
