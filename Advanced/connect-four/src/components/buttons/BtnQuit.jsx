import React from "react";

const BtnQuit = ({ handleOnClick }) => {
	return (
		<button
			className="bg-pink border-[3px] border-black rounded-20 py-3.5 px-5 w-full flex justify-center items-center solid-shadow-L text-white"
			onClick={handleOnClick}
		>
			<p className=" text-M uppercase ">Quit Game</p>
		</button>
	);
};

export default BtnQuit;
