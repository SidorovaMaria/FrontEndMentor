import { useSelector } from "react-redux";

import IntroScreen from "./components/IntroScreen";
import { AnimatePresence, motion } from "motion/react";
import Game from "./components/Game";
import { fadeUp } from "./app/motionVariants";

function App() {
	const { gameStarted, winner } = useSelector((state) => state.game);
	return (
		<main>
			<section className="h-screen w-screen ">
				<AnimatePresence mode="wait">
					{!gameStarted ? (
						<IntroScreen key="intro" />
					) : (
						<>
							<Game key="game" />
							{
								<motion.div
									key={winner?.name || "default"}
									variants={fadeUp}
									initial="initial"
									animate="animate"
									exit="exit"
									className="absolute w-full h-[26%] bottom-0 rounded-t-[60px] bg-purple-darker"
									style={{
										backgroundColor: winner
											? winner.color === "red"
												? "#fd6687"
												: "#FFCE67"
											: "",
									}}
								></motion.div>
							}
						</>
					)}
				</AnimatePresence>
			</section>
		</main>
	);
}

export default App;
