import React from "react";
import SectioninView from "./motion/SectioninView";
import AnimatedText from "./motion/AnimatedText";

const HomeFeatures = ({ feature }) => {
	return (
		<SectioninView
			className={`flex flex-col items-center gap-12 md:flex-row lg:flex-col`}
		>
			<div className="relative md:shrink-0">
				<img src={feature.illustration} alt="illustration" />
				<img
					src="/assets/shared/desktop/bg-pattern-small-circle.svg"
					className="absolute inset-0 -z-10"
				/>
			</div>
			<div className="flex flex-col items-center gap-8 text-center md:text-left md:items-start md:gap-4 lg:items-center lg:text-center lg:gap-8">
				<h3 className="text-3 uppercase text-dark-grey">
					{feature.title}
				</h3>

				<AnimatedText className="text-body  text-dark-grey">
					{feature.text}
				</AnimatedText>
			</div>
		</SectioninView>
	);
};

export default HomeFeatures;
