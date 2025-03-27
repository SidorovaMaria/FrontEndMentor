import { useDispatch, useSelector } from "react-redux";
import ScoreDisplay from "./components/ScoreDisplay";

import { changeMode } from "./features/gameSlice";
import GameStandard from "./components/GameStandard";
import ExtendedChoice from "./components/ExtendedChoice";
import { motion } from "framer-motion";
import GameExtended from "./components/GameExtended";
import { useState } from "react";
function App() {
	const state = useSelector((state) => state.game);
	const dispatch = useDispatch();
	const [openModal, setOpenModal] = useState(false);
	return (
		<main className="">
			<section className="m-8 lg:mt-12 lg:mb-10 lg:max-w-[700px] lg:mx-auto ">
				<ScoreDisplay />
			</section>
			<section className=" w-[311px] lg:w-[938px] h-[281px] lg:h-[430px] flex justify-center items-center mx-auto relative mt-[75px] lg:mt-6">
				<motion.div
					initial={{ opacity: 1, zIndex: 1 }}
					animate={{
						opacity: state.mode === "standard" ? 1 : 0,
						zIndex: state.mode === "standard" ? 2 : 0,
					}}
					transition={{ duration: 0.5 }}
					style={{ position: "absolute" }}
				>
					<GameStandard />
				</motion.div>
				<motion.div
					initial={{ opacity: 1, zIndex: 1 }}
					animate={{
						opacity: state.mode === "standard" ? 0 : 1,
						zIndex: state.mode === "standard" ? 0 : 2,
					}}
					transition={{ duration: 0.5 }}
					style={{ position: "absolute" }}
				>
					<GameExtended />
				</motion.div>
			</section>
			<section
				className={`flex ${
					state.playerChoice ? "justify-end" : "justify-between"
				} items-center mx-8 mt-[140px] mb-14 lg:mt-1 lg:mb-8 `}
			>
				{state.playerChoice ? null : (
					<button
						onClick={() => dispatch(changeMode())}
						className="btn"
					>
						{state.mode === "standard" ? "Extended" : "standard"}
					</button>
				)}
				<button
					onClick={() => {
						setOpenModal(!openModal);
					}}
					className="btn"
				>
					Rules
				</button>
			</section>
			<div
				className={`absolute w-full h-full left-0 top-0 bg-black/50 z-10 flex justify-center items-center ${
					openModal ? "opaity-100 block" : "opacity-0 hidden"
				}`}
			>
				<div
					className={`bg-white h-full w-full lg:w-[400px] ${
						state.mode === "standard"
							? "lg:h-[415px] "
							: "lg:h-[461px]"
					} lg:rounded-[8px] flex flex-col gap-[113px] items-center relative lg:gap-[20px]`}
				>
					<div className="flex items-center lg:justify-between mt-[95px] lg:mt-8 lg:w-full lg:px-8">
						<h2 className="text-[32px] leading-8 font-bold text-[#3b4262] ">
							Rules
						</h2>
						<img
							src="/assets/icon-close.svg"
							alt="Close btn"
							className="absolute bottom-[65px] left-[50%] -translate-y-[50%] lg:static lg:bottom-auto lg:left-auto lg:translate-y-0 mt-[12px]"
							onClick={() => setOpenModal(!openModal)}
						/>
					</div>
					{state.mode === "standard" ? (
						<img
							src="/assets/image-rules.svg"
							alt="rules"
							className="w-[305px]"
						/>
					) : (
						<img src="/assets/image-rules-bonus.svg" alt="rules" />
					)}
				</div>
			</div>
		</main>
	);
}

export default App;
