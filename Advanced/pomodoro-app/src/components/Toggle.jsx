import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setPomodoro,
	setShortBreak,
	setLongBreak,
	setTimer,
} from "../features/theme/themeSlice";

const timers = ["pomodoro", "short break", "long break"];
const Toggle = () => {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	return (
		<div className="bg-blue-16 rounded-[31.5px] p-2 w-fit mx-auto ">
			<ul className="flex">
				{timers.map((timer, index) => (
					<li
						key={index}
						onClick={() => dispatch(setTimer(timer))}
						className="two hover:text-grey"
						style={{
							backgroundColor:
								theme.timer === timer ? theme.color : "",
							color: theme.timer === timer ? "#1E213F" : "",
						}}
					>
						{timer}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Toggle;
