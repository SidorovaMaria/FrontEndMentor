import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Timer = () => {
	const theme = useSelector((state) => state.theme);

	// Initialize time based on the current timer mode
	const getInitialTime = () => {
		switch (theme.timer) {
			case "pomodoro":
				return theme.pomodoro * 60;
			case "short break":
				return theme.shortBreak * 60;
			case "long break":
				return theme.longBreak * 60;
			default:
				return 0;
		}
	};

	const [time, setTime] = useState(getInitialTime);
	const [isActive, setIsActive] = useState(false);

	// Format time in MM:SS
	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
			2,
			"0"
		)}`;
	};

	useEffect(() => {
		setTime(getInitialTime());
	}, [theme.timer, theme.pomodoro, theme.shortBreak, theme.longBreak]);

	useEffect(() => {
		let interval;
		if (isActive && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else if (time === 0) {
			clearInterval(interval);
			setIsActive(false);
		}

		return () => clearInterval(interval);
	}, [isActive, time]);

	const toggleTimer = () => {
		setIsActive((prev) => !prev);
	};

	const resetTimer = () => {
		setIsActive(false);
		setTime(getInitialTime());
	};

	return (
		<div className="outer-circle relative">
			<div className="bg-[#0e112a] w-full h-full rounded-full flex justify-center items-center ">
				{/* Circular Progress */}
				<svg
					className="absolute z-0 w-[88%] h-[88%] transform -rotate-90"
					viewBox="0 0 100 100"
				>
					<circle
						cx="50"
						cy="50"
						r="45"
						stroke={theme.color}
						strokeWidth="3"
						fill="none"
						strokeDasharray="282"
						strokeDashoffset={
							time === 0
								? 0
								: (283 * (1 - time / getInitialTime())).toFixed(
										2
								  )
						}
						strokeLinecap="round"
						className="transition-all duration-1000 ease-linear"
					/>
				</svg>

				<div className="flex flex-col items-center z-20 md:gap-4">
					<h1 className="time-number">{formatTime(time)}</h1>
					<div
						className="time-btn flex gap-1"
						style={{ "--text-color": theme.color }}
					>
						{time === 0 ? (
							<button onClick={resetTimer}>restart</button>
						) : (
							<>
								<button onClick={toggleTimer}>
									{isActive ? "pause" : "start"}
								</button>

								<p>|</p>
								<button onClick={resetTimer}>reset</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timer;
