import React from "react";
import { useDispatch } from "react-redux";
import { setPlayerChoice } from "../features/gameSlice";

const ExtendedChoiceBtn = ({ position, icon, borderColor, shadowColor }) => {
	const dispatch = useDispatch();
	return (
		<div
			className={`absolute ${position} group`}
			onClick={() => dispatch(setPlayerChoice(icon))}
		>
			<div className="flex justify-center items-center relative">
				<div
					className={`transition-300 w-[96px] lg:w-[148px] aspect-square bg-white rounded-full border-[11px] lg:border-[16px] ${borderColor} std-shadow flex items-center justify-center shadow-[0px_6px_0px_${shadowColor},inset_0px_6px_0px_#BABFD4]
            group-hover:scale-105 z-20 group-active:scale-90`}
				>
					<img
						src={`/assets/icon-${icon}.svg`}
						alt={`Icon-${icon}`}
						className="scale-75"
					/>
				</div>
				<div
					className={`absolute aspect-square rounded-full bg-white/10 -z-10 w-0 group-hover:w-[126px] lg:group-hover:w-[185px] transition-300 group-active:w-[110px] lg:group-active:w-[160px]`}
				/>
				<div
					className={`absolute aspect-square rounded-full bg-white/10 -z-10 w-0 group-hover:w-[156px] lg:group-hover:w-[225px]  transition-300 group-active:w-[120px] lg:group-active:w-[170px]`}
				/>
			</div>
		</div>
	);
};

export default ExtendedChoiceBtn;
