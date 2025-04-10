import React from "react";

const BtnCheck = ({ handleOnClick, className }) => {
	return (
		<button className={`group ${className}`} onClick={handleOnClick}>
			<svg
				width="70px"
				height="75px"
				viewBox="0 0 70 75"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<g
					id="Designs"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g id="icon-check">
						<circle
							id="Oval-Copy-37"
							fill="#000000"
							className="group-hover:fill-purple-darker"
							cx="35"
							cy="35"
							r="35"
						></circle>
						<circle
							id="Oval-Copy-38"
							fill="#000000"
							className="group-hover:fill-purple-darker"
							cx="35"
							cy="40"
							r="35"
						></circle>
						<circle
							id="Oval-Copy-39"
							fill="#FD6687"
							cx="35"
							cy="35"
							r="32"
						></circle>
						<polyline
							id="Path"
							stroke="#FFFFFF"
							strokeWidth="3"
							points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
						></polyline>
					</g>
				</g>
			</svg>
		</button>
	);
};

export default BtnCheck;
