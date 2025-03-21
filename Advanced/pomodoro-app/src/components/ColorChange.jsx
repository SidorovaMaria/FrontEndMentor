import React from "react";

const ColorChange = ({ color, activeColor, onClickAction }) => {
	const active = color == activeColor;
	return (
		<div
			className="w-10 h-10 flex justify-center items-center rounded-full"
			style={{ backgroundColor: color }}
			onClick={() => onClickAction("color", color)}
		>
			{active ? (
				<>
					<svg
						width="15"
						height="11"
						viewBox="0 0 15 11"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 5.5L4.95263 9.45263L13.4053 1"
							stroke="#161932"
							strokeWidth="2"
						/>
					</svg>
				</>
			) : null}
		</div>
	);
};

export default ColorChange;
