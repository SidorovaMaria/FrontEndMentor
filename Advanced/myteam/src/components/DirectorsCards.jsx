import React, { useState } from "react";

const DirectorsCards = ({ director }) => {
	const [openAbout, setOpenAbout] = useState(false);

	return (
		// Card Container
		<div className="flex justify-center items-center h-[253px] relative">
			{/* Card */}
			<div className="w-full h-[253px] bg-green-sacramento perspective-[1000px] cursor-pointer">
				{/* Flip container */}
				<div
					className={`relative w-full h-full transition-transform duration-700 ${
						openAbout ? "rotate-x-180" : ""
					}`}
					style={{ transformStyle: "preserve-3d" }}
				>
					{/* Card Front */}
					<div
						className="absolute inset-0 flex flex-col items-center justify-center bg-green-sacramento shadow-2xl"
						style={{ backfaceVisibility: "hidden" }}
					>
						<img
							src={director.imgDirector}
							alt={`Director- ${director.name}`}
							className={`w-24 rounded-full border-[2px] border-[#c4fffe] mb-4`}
						/>
						<p className="text-blue-rapture text-[18px] font-bold">
							{director.name}
						</p>
						<p className="tight italic font-medium ">
							{director.position}
						</p>
					</div>

					{/* Card Back */}
					<div
						className="absolute inset-0 flex flex-col items-center justify-center bg-green-sacramento shadow-2xl px-6 text-center"
						style={{
							backfaceVisibility: "hidden",
							transform: "rotateX(180deg)",
						}}
					>
						<p className="text-blue-rapture text-[18px] font-bold max-w-[234px] mx-auto mb-2">
							{director.name}
						</p>
						<p className="tight">{director.quote}</p>
						<div className="flex gap-4 justify-center mt-6">
							<a href="www.x.com">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 group"
									width="24"
									height="20"
								>
									<path
										fill="#FFF"
										className="group-hover:fill-light-coral"
										d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
									/>
								</svg>
							</a>
							<a href="www.linkedin.com">
								<svg
									className="w-6 group"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
								>
									<path
										fill="#FFF"
										className="group-hover:fill-light-coral"
										d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`w-14 h-14 rounded-full absolute left-[50%] -translate-x-[50%] -bottom-7 flex justify-center items-center ${
					openAbout
						? "bg-blue-rapture hover:bg-light-coral"
						: " bg-light-coral hover:bg-blue-rapture"
				} transition-all ease-in duration-300`}
				onClick={() => setOpenAbout(!openAbout)}
			>
				<img
					src="/assets/icon-cross.svg"
					className={`w-4 h-4 ${
						openAbout ? "-rotate-45" : "rotate-0"
					} transition-all duration-300 ease-in`}
				/>
			</div>
		</div>
	);
};
// onClick={() => setOpenAbout((prev) => !prev)}

export default DirectorsCards;
