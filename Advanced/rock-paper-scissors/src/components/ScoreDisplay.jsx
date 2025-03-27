import React from "react";
import { useSelector } from "react-redux";

const ScoreDisplay = () => {
	const score = useSelector((state) => state.game.score);
	const mode = useSelector((state) => state.game.mode);
	return (
		<div className="flex p-3 border-[3px] border-white/28 rounded-[5px] pl-6 justify-between items-center lg:py-[18px] lg:pr-6 lg:pl-8 ">
			{mode === "standard" ? (
				<img
					src="/assets/logo.svg"
					alt="Logo"
					className="w-[83px] lg:w-40"
				/>
			) : (
				<img
					src="../../public/assets/logo-bonus.svg"
					alt="Logo"
					className="w-[49px] lg:w-[111px]"
				/>
			)}
			<div className="bg-gradient-to-t from-[#f3f3f3] to-white flex flex-col gap-0 w-20 lg:w-[150px] h-18 lg:h-[114px] items-center justify-center rounded-[4px] lg:rounded-[8px]">
				<h4 className="text-score text-blue2a4">Score</h4>
				<p className="score text-grey565">{score}</p>
			</div>
		</div>
	);
};

export default ScoreDisplay;
