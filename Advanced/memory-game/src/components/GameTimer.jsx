import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "../features/cardsSlice";
import { formatTime } from "../app/helperFucntions";

const Timer = () => {
	const dispatch = useDispatch();
	const { moves, timer, allCardsFound } = useSelector((state) => state.cards);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (moves === 1 && intervalRef.current === null && !allCardsFound) {
			intervalRef.current = setInterval(() => {
				dispatch(incrementTimer());
			}, 1000);
		}
		if (allCardsFound && intervalRef.current !== null) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, [moves, allCardsFound]);

	useEffect(() => {
		return () => clearInterval(intervalRef.current);
	}, []);

	return (
		<div className="flex gap-6 w-full mt-5 md:mt-0  md:max-w-[540px] items-center justify-center md:mx-auto">
			{/* time */}
			<div className="flex gap-0.5 w-full py-[10px] rounded-[5px] items-center justify-center flex-col bg-slate-100 md:flex-row md:justify-between md:px-6 md:py-4 md:rounded-10">
				<p className="text-15 md:text-[18px] font-bold leading-[19px] md:leading-[22px] text-blue-900">
					Time
				</p>
				<p className="text-24 md:text-[32px] font-bold text-slate-600 leading-[30px] md:leading-10">
					{formatTime(timer)}
				</p>
			</div>
			<div className="flex gap-0.5 w-full py-[10px] rounded-[5px] items-center justify-center flex-col bg-slate-100 md:flex-row md:justify-between md:px-6 md:py-4 md:rounded-10">
				<p className="text-15 md:text-[18px] font-bold leading-[19px] md:leading-[22px] text-blue-900 ">
					Moves
				</p>
				<p className="text-24 md:text-[32px] font-bold text-slate-600 leading-[30px] md:leading-10">
					{moves}
				</p>
			</div>
		</div>
	);
};

export default Timer;
