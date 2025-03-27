import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import GameScreen from "./GameScreen";
import StandardChoice from "./StandardChoice";

const GameStandard = () => {
	const state = useSelector((state) => state.game); // Assuming your playerChoice is here
	const { playerChoice } = state;

	return (
		<section className="mx-8">
			<div
				style={{ position: "relative" }}
				className="w-[311px] lg:w-[938px] h-[281px] lg:h-[430px] flex justify-center items-center mx-auto relative mt-[75px] lg:mt-6"
			>
				{/* StandardPicker is shown when no choice is made */}
				<motion.div
					initial={{ opacity: 1, zIndex: 1 }}
					animate={{
						opacity: playerChoice ? 0 : 1,
						zIndex: playerChoice ? 0 : 2,
					}}
					transition={{ duration: 0.5 }}
					style={{ position: "absolute" }}
				>
					<StandardChoice />
				</motion.div>

				{/* GameScreen is shown once a choice is made */}
				{state.mode === "standard" ? (
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

export default GameStandard;
