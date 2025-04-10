import { useSelector } from "react-redux";

import IntroScreen from "./components/IntroScreen";
import { AnimatePresence } from "motion/react";
import Game from "./components/Game";

function App() {
	const { gameStarted } = useSelector((state) => state.game);
	return (
		<main>
			<section className="h-screen w-screen ">
				<AnimatePresence mode="wait">
					{!gameStarted ? (
						<IntroScreen key="intro" />
					) : (
						<Game key="game" />
					)}
				</AnimatePresence>
			</section>
		</main>
	);
}

export default App;
