import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerChoice } from "../features/gameSlice";

const StandardChoiceBtn = ({ position, icon, borderColor, shadowColor }) => {
	const dispatch = useDispatch();
	return (
		<div
			className={`absolute ${position} group`}
			onClick={() => dispatch(setPlayerChoice(icon))}
		>
			<div className="flex justify-center items-center relative">
				<div
					className={`transition-300 w-[130px] lg:w-[190px] aspect-square bg-white rounded-full border-[15px] lg:border-[20px] ${borderColor} std-shadow flex items-center justify-center shadow-[0px_6px_0px_${shadowColor},inset_0px_6px_0px_#BABFD4]
                    group-hover:scale-105 z-20 group-active:scale-90`}
				>
					<img
						src={`/assets/icon-${icon}.svg`}
						alt={`Icon-${icon}`}
						className=""
					/>
				</div>
				<div
					className={`absolute aspect-square rounded-full bg-white/10 -z-10 w-0 group-hover:w-[160px] lg:group-hover:w-[240px] transition-300 group-active:w-[130px] lg:group-active:w-[190px]`}
				/>
				<div
					className={`absolute aspect-square rounded-full bg-white/10 -z-10 w-0 group-hover:w-[190px] lg:group-hover:w-[290px]  transition-300 group-active:w-[140px] lg:group-active:w-[210px]`}
				/>
			</div>
		</div>
	);
};

export default StandardChoiceBtn;
