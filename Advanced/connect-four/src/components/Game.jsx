import React from "react";
import GameHeader from "./GameHeader";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

import { useSelector } from "react-redux";
import PlayerScore from "./PlayerScore";
import ConnectFourBoard from "./ConnectFourBoard";
const Game = () => {
  const { gameStarted, players } = useSelector((state) => state.game);

  return (
    <motion.main className="h-full w-full bg-purple flex flex-col gap-[50px] md:gap-8">
      <AnimatePresence>
        {gameStarted && (
          <>
            <GameHeader />
            <div className="flex w-full px-2.5 gap-5 md:max-w-[633px] md:mx-auto lg:hidden">
              <PlayerScore
                position={"left"}
                player={players.player1.name}
                score={players.player1.score}
              />
              <PlayerScore
                position={"right"}
                player={players.player2.name}
                score={players.player2.score}
              />
            </div>
            <div className="flex items-center justify-around w-full">
              <div className="hidden lg:block gap-[800px]">
                <PlayerScore
                  position={"top"}
                  player={players.player1.name}
                  score={players.player1.score}
                />
              </div>
              <ConnectFourBoard />
              <div className="hidden lg:block gap-[1000px]">
                <PlayerScore
                  position={"top"}
                  player={players.player2.name}
                  score={players.player2.score}
                />
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Game;
