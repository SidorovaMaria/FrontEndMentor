import React from "react";

const BtnWhite = ({ text, handleOnClick, className }) => {
	return (
		<button
			className={`bg-white border-[3px] rounded-20 py-5 px-5 w-full flex justify-between items-center solid-shadow-L text-black ${className}`}
			onClick={handleOnClick}
		>
			<p className=" text-M uppercase ">{text}</p>
		</button>
	);
};

export default BtnWhite;
