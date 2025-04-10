import React from "react";

const BtnVsCpu = ({ handleOnClick }) => {
	return (
		<button
			className="bg-pink border-[3px] border-black rounded-20 py-3.5 px-5 w-full flex justify-between items-center solid-shadow-L text-white"
			onClick={handleOnClick}
		>
			<p className=" text-M uppercase ">Play Vs CPU</p>
			<img src="/assets/images/player-vs-cpu.svg" />
		</button>
	);
};

export default BtnVsCpu;
