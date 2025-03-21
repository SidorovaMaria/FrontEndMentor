import React from "react";

const FontChange = ({ font, activeFont, onClickAction }) => {
	const active = font == activeFont;
	return (
		<div
			className="flex justify-center items-center w-10 h-10 rounded-full "
			style={{
				backgroundColor: active ? "#161932" : "#EFF1FA",
				color: active ? "#FFFFFF" : "#1E213F",
				fontFamily: font,
			}}
			onClick={() => onClickAction("font", font)}
		>
			<p className="font-bold text-base">Aa</p>
		</div>
	);
};

export default FontChange;
