import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createGrid,
	initialisePlayers,
	setGrid,
	setPlayerNum,
	setTheme,
	startGame,
} from "../features/gameSlice";
import clsx from "clsx";
import { motion } from "motion/react";

const ToggleSetting = ({ setting, options, active, onClick }) => (
	<div className="flex flex-col gap-3 md:gap-4">
		<h2 className="text-15 md:text-20 font-bold text-blue-900 leading-[19px] md:leading-[25px]">
			{setting}
		</h2>
		<div
			className={`grid ${
				options.length === 4
					? "grid-cols-4 gap-x-[11px] md:gap-2-[21px]"
					: "grid-cols-2 gap-x-3 md:gap-[30px]"
			}`}
		>
			{options.map((option) => (
				<button
					key={option}
					onClick={() => onClick(option)}
					className={clsx(
						"number-btn capitalize py-[10px] md:py-3 transition-all duration-300 ease-in-out",
						{
							active: active === option,
						}
					)}
				>
					{option}
				</button>
			))}
		</div>
	</div>
);
const StartGame = () => {
	const dispatch = useDispatch();
	const gameSettings = useSelector((state) => state.game);
	const handleStartGame = () => {
		dispatch(initialisePlayers());
		dispatch(startGame());
		dispatch(createGrid());
	};

	return (
		<div className="bg-slate-900 min-h-screen w-full flex flex-col gap-[45px] md:gap-[78px] items-center justify-center px-6 ">
			{/* Logo */}
			<div>
				<h1 className="text-2 text-whitest">memory</h1>
			</div>
			{/* Settings box */}
			<div className="bg-whitest rounded-10 md:rounded-20 w-full p-6 md:p-14 flex flex-col gap-6 md:gap-8 md:max-w-[654px]">
				{/* Select Theme */}
				<ToggleSetting
					setting={"Select Theme"}
					options={["numbers", "icons"]}
					active={gameSettings.theme}
					onClick={(val) => dispatch(setTheme(val))}
				/>

				{/* Select Player Number */}

				<ToggleSetting
					setting={"Numbers of Players"}
					options={[1, 2, 3, 4]}
					active={gameSettings.playerNum}
					onClick={(val) => dispatch(setPlayerNum(val))}
				/>

				{/* Select Grid Size */}

				<ToggleSetting
					setting={"Grid Size"}
					options={["4x4", "6x6"]}
					active={gameSettings.gridSize}
					onClick={(val) => dispatch(setGrid(val))}
				/>

				{/* Start Game Button */}
				<button className="menu-btn py-3" onClick={handleStartGame}>
					Start Game
				</button>
			</div>
		</div>
	);
};

export default StartGame;
