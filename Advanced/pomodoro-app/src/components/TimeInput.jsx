import React from "react";

const TimeInput = ({ label, value, onChange }) => {
	// Increment and decrement handlers
	const handleIncrement = () => onChange(Number(value) + 1);
	const handleDecrement = () => onChange(Math.max(Number(value) - 1, 0));

	return (
		<div className="time-input">
			<label htmlFor={label}>{label}</label>

			<div className="input">
				{/* Input field */}
				<input
					type="number"
					value={value}
					id={label}
					className="w-3/4"
					onChange={(e) => onChange(e.target.value)}
					min="0"
				/>

				{/* Increment/Decrement buttons */}
				<div className="flex flex-col gap-2 ">
					<button className="group" onClick={handleIncrement}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="7"
						>
							<path
								fill="none"
								className="stroke-blue-1e/25 group-hover:stroke-blue-1e"
								strokeWidth="2"
								d="M1 6l6-4 6 4"
							/>
						</svg>
					</button>

					<button className="group" onClick={handleDecrement}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="7"
						>
							<path
								fill="none"
								className="stroke-blue-1e/25 group-hover:stroke-blue-1e"
								strokeWidth="2"
								d="M1 1l6 4 6-4"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TimeInput;
