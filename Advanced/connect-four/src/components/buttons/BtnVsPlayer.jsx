import React from "react";
import { hydrateRoot } from "react-dom/client";

const BtnVsPlayer = ({ handleOnClick }) => {
	return (
		<button
			className="bg-yellow text-black border-[3px] rounded-20 py-3.5 px-5 w-full flex justify-between items-center solid-shadow-L"
			onClick={handleOnClick}
		>
			<p className=" text-M uppercase ">Play Vs Player</p>
			<img src="/assets/images/player-vs-player.svg" />
		</button>
	);
};

export default BtnVsPlayer;
