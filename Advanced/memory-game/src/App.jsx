import { useSelector } from "react-redux";
import StartGame from "./pages/StartGame";
import { AnimatePresence, motion } from "motion/react";
import Game from "./pages/Game";

function App() {
	const gameStarted = useSelector((state) => state.game.gameStarted);

	return (
		<main className="">
			<AnimatePresence mode="wait">
				{!gameStarted && (
					<motion.section
						key="start"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0, zIndex: 50 }}
						exit={{ opacity: 0, y: -20, zIndex: -50 }}
						transition={{ duration: 0.4 }}
					>
						<StartGame />
					</motion.section>
				)}
			</AnimatePresence>

			{gameStarted && <Game />}
		</main>
	);
}

export default App;
