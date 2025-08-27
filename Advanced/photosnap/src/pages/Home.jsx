import React from "react";
import { features, heroBlocks } from "../data/data";
import { Link } from "react-router-dom";
import { stories } from "../data/data";

import StoryCards from "../components/StoryCards";
import FeatureBlock from "../components/FeatureBlock";
import HeroBlock from "../components/HeroBlock";
const Home = () => {
  return (
    <main>
      {heroBlocks.slice(0, 3).map((block, index) => (
        <HeroBlock block={block} index={index} showBtn={true} />
      ))}
      {/* Stories */}
      <StoryCards stories={stories.slice(0, 4)} />
      {/* Features */}
      <div className="py-20 px-8 md:px-38 xl:px-[165px]">
        <div className="flex flex-col gap-[55px] items-center justify-center xl:grid xl:grid-cols-3 xl:gap-[30px] xl:items-end">
          <FeatureBlock features={features.slice(0, 3)} />
        </div>
      </div>
    </main>
  );
};

export default Home;
