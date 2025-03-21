import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setColor,
	setFontFamily,
	setLongBreak,
	setPomodoro,
	setShortBreak,
} from "../features/theme/themeSlice";
import TimeInput from "./TimeInput";
import FontChange from "./FontChange";
import ColorChange from "./ColorChange";

const Settings = () => {
	const [openModal, setOpenModal] = useState(false);
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();
	const [themeChange, setThemeChamge] = useState({
		pomodoro: theme.pomodoro,
		shortBreak: theme.shortBreak,
		longBreak: theme.longBreak,
		color: theme.color,
		font: theme.font,
	});
	const handleNumberChange = (key, value) => {
		const newValue = value === "" ? "" : Math.max(Number(value), 0);
		setThemeChamge((prev) => ({
			...prev,
			[key]: newValue,
		}));
	};

	// Separate handler for fonts
	const handleFontColorChange = (key, value) => {
		setThemeChamge((prev) => ({
			...prev,
			[key]: value,
		}));
	};
	const aplplyTheme = () => {
		dispatch(setColor(themeChange.color));
		dispatch(setFontFamily(themeChange.font));
		dispatch(setShortBreak(themeChange.shortBreak));
		dispatch(setLongBreak(themeChange.longBreak));
		dispatch(setPomodoro(themeChange.pomodoro));
	};

	return (
		<>
			<button
				className=" mt-20 flex justify-center items-center w-full opacity-50 hover:opacity-100"
				onClick={() => setOpenModal(true)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
					<path
						fill="#D7E0FF"
						d="M26.965 17.682l-2.927-2.317c.055-.448.097-.903.097-1.365 0-.462-.042-.917-.097-1.365l2.934-2.317a.702.702 0 00.167-.896l-2.775-4.851a.683.683 0 00-.847-.301l-3.454 1.407a10.506 10.506 0 00-2.345-1.379l-.52-3.71A.716.716 0 0016.503 0h-5.55a.703.703 0 00-.687.588l-.52 3.71c-.847.357-1.63.819-2.345 1.379L3.947 4.27a.691.691 0 00-.847.301L.325 9.422a.705.705 0 00.167.896l2.927 2.317c-.055.448-.097.903-.097 1.365 0 .462.042.917.097 1.365L.492 17.682a.702.702 0 00-.167.896L3.1 23.429a.683.683 0 00.847.301L7.4 22.323a10.506 10.506 0 002.345 1.379l.52 3.71c.056.329.34.588.687.588h5.55a.703.703 0 00.687-.588l.52-3.71c.847-.357 1.631-.819 2.346-1.379l3.454 1.407c.313.119.673 0 .847-.301l2.775-4.851a.705.705 0 00-.167-.896zM13.73 18.9c-2.685 0-4.857-2.191-4.857-4.9 0-2.709 2.172-4.9 4.857-4.9 2.684 0 4.856 2.191 4.856 4.9 0 2.71-2.172 4.9-4.856 4.9z"
					/>
				</svg>
			</button>
			<div
				className={`absolute top-0 bg-black/40 w-full h-full flex justify-center items-center transition-opacity duration-500 linear ${
					openModal ? "opacity-110 z-30 " : "opacity-0 -z-50"
				} `}
			>
				<div className=" w-[327px] md:w-[540px] h-[575px] md:h-[490px]  bg-white rounded-2xl z-30 relative">
					<div className="flex justify-between items-center p-6">
						<p className="text-[20px] md:text-[28px] text-blue-16 font-bold">
							Settings
						</p>
						<div>
							<img
								onClick={() => {
									setOpenModal(false);
								}}
								src="/assets/icon-close.svg"
								alt="Close Button"
								className="cursor-pointer opacity-50 hover:opacity-100"
							/>
						</div>
					</div>
					<hr className="border-[1px] border-washed-white" />
					{/* Timers */}
					<div className="p-6">
						<div className="flex flex-col mb-6 ">
							<h4 className="text-center md:text-left">
								Time (minutes)
							</h4>
							<div className="pt-6 flex flex-col gap-2 md:flex-row md:gap-5">
								<TimeInput
									label={"pomodoro"}
									value={themeChange.pomodoro}
									onChange={(val) =>
										handleNumberChange("pomodoro", val)
									}
								/>
								<TimeInput
									label={"short break"}
									value={themeChange.shortBreak}
									onChange={(val) =>
										handleNumberChange("shortBreak", val)
									}
								/>
								<TimeInput
									label={"long break"}
									value={themeChange.longBreak}
									onChange={(val) =>
										handleNumberChange("longBreak", val)
									}
								/>
							</div>
						</div>
						<hr className="border-[1px] border-washed-white" />
						{/* Fonts */}
						<div className="text-center py-6 md:flex md:w-full md:justify-between md:items-center">
							<h4 className="">Font</h4>
							<div className="flex justify-center gap-4 mt-4 ">
								<FontChange
									font="Kumbh Sans"
									activeFont={themeChange.font}
									onClickAction={handleFontColorChange}
								/>
								<FontChange
									font="Roboto Slab"
									activeFont={themeChange.font}
									onClickAction={handleFontColorChange}
								/>
								<FontChange
									font="Space Mono"
									activeFont={themeChange.font}
									onClickAction={handleFontColorChange}
								/>
							</div>
						</div>
						<hr className="border-[1px] border-washed-white" />
						<div className="text-center py-6 md:flex md:w-full md:justify-between md:items-center">
							<h4 className="">color</h4>
							<div className="flex justify-center gap-4 mt-4 ">
								<ColorChange
									color="#F87070"
									activeColor={themeChange.color}
									onClickAction={handleFontColorChange}
								/>
								<ColorChange
									color="#70F3F8"
									activeColor={themeChange.color}
									onClickAction={handleFontColorChange}
								/>
								<ColorChange
									color="#D881F8"
									activeColor={themeChange.color}
									onClickAction={handleFontColorChange}
								/>
							</div>
						</div>
					</div>
					<button
						className="apply-btn"
						onClick={() => {
							aplplyTheme();
							setOpenModal(false);
						}}
						style={{ backgroundColor: theme.color }}
					>
						Apply
					</button>
				</div>
			</div>
		</>
	);
};

export default Settings;
