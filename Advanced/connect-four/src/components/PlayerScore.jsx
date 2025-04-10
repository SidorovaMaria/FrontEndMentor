import { motion } from "motion/react";
import React from "react";
import { fadeLeft, fadeRight } from "../app/motionVariants";

const PlayerScore = ({ position, player, score }) => {
	console.log(player);
	const imageMap = {
		"player 1": "/assets/images/player-one.svg",
		"player 2": "/assets/images/player-two.svg",
		cpu: "/assets/images/cpu.svg",
		you: "/assets/images/you.svg",
	};

	const image = imageMap[player];
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={position === "left" ? fadeRight : fadeLeft}
			className={`w-full bg-white rounded-[20px] flex flex-col  gap-[1px] items-center py-2.5  border-[3px] solid-shadow-L relative
            md:gap-10 md:justify-center ${
				position === "left"
					? "ml-[27px] md:flex-row"
					: "mr-[27px] md:flex-row-reverse"
			}`}
		>
			<p className=" text-S uppercase text-black">{player}</p>
			<p className="text-[32px] leading-[41px] md:text-[56px] md:leading-[71px] font-bold">
				{score}
			</p>
			<img
				src={image}
				alt={`${player} avatar`}
				className={`absolute top-1/2 -translate-y-1/2 ${
					position === "left" ? "-left-[30px]" : "-right-[30px]"
				}`}
			/>
		</motion.div>
	);
};

export default PlayerScore;
