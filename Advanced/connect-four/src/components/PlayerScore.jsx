// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import React from "react";
import { fadeLeft, fadeRight } from "../app/motionVariants";

const PlayerScore = ({ position, player, score }) => {
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
            md:gap-10 md:justify-center lg:flex-col lg:gap-0 lg:pt-11.5 lg:pb-4  lg:px-7 ${
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
        className={`absolute  ${
          position === "left" ? "-left-[30px]" : "-right-[30px]"
        } ${
          position === "top"
            ? " -top-[30px] left-1/2 -translate-x-1/2"
            : "top-1/2 -translate-y-1/2"
        }`}
      />
    </motion.div>
  );
};

export default PlayerScore;
