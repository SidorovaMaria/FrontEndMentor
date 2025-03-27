import React from "react";

const ChosenBtn = ({ icon, borderColor, shadowColor, won }) => {
	return (
		<div className={``}>
			<div className="flex justify-center items-center relative">
				<div
					className={`transition-300 w-[130px] lg:w-[190px] aspect-square bg-white rounded-full border-[15px] lg:border-[20px] border-[${borderColor}] flex items-center justify-center shadow-[0px_6px_0px_${shadowColor},inset_0px_6px_0px_#BABFD4]
            group-hover:scale-105 z-20 group-active:scale-90`}
				>
					<img
						src={`/assets/icon-${icon}.svg`}
						alt={`Icon-${icon}`}
						className=""
					/>
				</div>

				<div
					className={`absolute aspect-square rounded-full bg-white/5 transition-1000 -z-10 ${
						won ? "w-[190px]" : "w-0"
					} `}
				/>
				<div
					className={`absolute aspect-square rounded-full bg-white/5 transition-1000 -z-10 ${
						won ? "w-[250px]" : "w-0"
					}`}
				/>
				<div
					className={`absolute aspect-square rounded-full bg-white/5 transition-1000 -z-10 ${
						won ? "w-[300px]" : "w-0"
					}`}
				/>
			</div>
		</div>
	);
};

export default ChosenBtn;
