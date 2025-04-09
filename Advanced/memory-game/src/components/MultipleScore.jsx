import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MultipleScore = () => {
	const { players } = useSelector((state) => state.game);

	return (
		<div className="flex items-center justify-center gap-6">
			{players.map((player, index) => {
				return (
					<div
						className={`w-16 md:w-[164px] lg:w-[255px] md:h-20 h-[70px] lg:h-18 flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-center lg:justify-between gap-0.5 md:gap-1 player-box md:px-4 lg:px-5 relative ${
							player.active && "active"
						}`}
						key={index}
					>
						<p
							className={`md:hidden text-15 font-bold leading-[19px] ${
								player.active ? "text-whitest" : "text-blue-900"
							}`}
						>
							{player.p}
						</p>
						<p
							className={`hidden md:block text-15 lg:text-[18px] font-bold leading-[19px] lg:leading-[22px] ${
								player.active ? "text-whitest" : "text-blue-900"
							}`}
						>
							{player.player}
						</p>

						<p
							className={`text-24 lg:text-32 font-bold leading-[30px] lg:leading-10 ${
								player.active
									? "text-whitest"
									: "text-slate-600"
							}`}
						>
							{player.score}
						</p>
						<p
							className={`text-[13px] font-bold uppercase tracking-[5px] leading-4 w-full text-center absolute left-[50%] -translate-x-[50%] top-[calc(100%+1rem)] ${
								player.active ? " hidden lg:block" : " hidden "
							}`}
						>
							Current Turn
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default MultipleScore;
