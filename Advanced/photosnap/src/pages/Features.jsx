import React from "react";
import HeroBlock from "../components/HeroBlock";
import { features, heroBlocks } from "../data/data";
import FeatureBlock from "../components/FeatureBlock";
import Beta from "../components/Beta";

const Features = () => {
	return (
		<main>
			{/* Hero */}
			<HeroBlock block={heroBlocks[3]} index={0} />
			<div className="py-16 px-8 md:py-[112px] md:px-10 lg:py-40 lg:px-[165px]">
				<div className="flex flex-col gap-14 md:grid md:grid-cols-2 md:gap-x-[11px] md:gap-y-18 items-end lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[104px]">
					<FeatureBlock features={features} />
				</div>
			</div>
			{/* Beta */}
			<Beta />
		</main>
	);
};

export default Features;
