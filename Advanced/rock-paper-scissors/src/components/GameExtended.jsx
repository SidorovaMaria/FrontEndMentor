import React from "react";
import ExtendedChoice from "./ExtendedChoice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import GameScreen from "./GameScreen";

const GameExtended = () => {
	const state = useSelector((state) => state.game); // Assuming your playerChoice is here
	const { playerChoice } = state;

	return (
		<section className="mx-8">
			<div
				style={{ position: "relative" }}
				className="w-[311px] lg:w-[938px] h-[305px] lg:h-[430px] flex justify-center items-center mx-auto relative mt-[75px] lg:mt-6"
			>
				{/* StandardPicker is shown when no choice is made */}
				<motion.div
					initial={{ opacity: 1, zIndex: 1 }}
					animate={{
						opacity: playerChoice ? 0 : 1,
						zIndex: playerChoice ? 0 : 2,
					}}
					transition={{ duration: 0 }}
					style={{ position: "absolute" }}
				>
					<ExtendedChoice />
				</motion.div>
				{state.mode === "extended" ? (
					<motion.div
						initial={{ opacity: 0, zIndex: 0 }}
						animate={{
							opacity: playerChoice ? 1 : 0,
							zIndex: playerChoice ? 2 : 0,
						}}
						transition={{ duration: 1.6 }}
						style={{ position: "absolute" }}
					>
						<GameScreen />
					</motion.div>
				) : null}
			</div>
		</section>
	);
};

export default GameExtended;
