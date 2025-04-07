import React from "react";
import { useParams } from "react-router";
import { designPages, navCrads } from "../app/data.js";
import SectioninView from "../components/motion/SectioninView.jsx";
import AnimatedText from "../components/motion/AnimatedText.jsx";
import HomeNavCard from "../components/HomeNavCard.jsx";
const DesignPage = ({}) => {
	const { slug } = useParams();
	const page = designPages.find((p) => p.path === slug);
	const matchedLinkCards = navCrads.filter((card) =>
		page.links.includes(card.title)
	);

	if (!page) {
		return <div>Page not found</div>;
	}
	return (
		<React.Fragment>
			<SectioninView
				type={"section"}
				className={`bg-peach px-6 relative overflow-hidden flex flex-col gap-6 justify-center items-center h-[320px] md:h-[252px] md:rounded-15 text-center
        `}
			>
				<h1 className={"text-1 z-10 "}>{page.title}</h1>
				<AnimatedText className="text-4 md:max-w-[400px] z-10 relative">
					{page.description}
				</AnimatedText>
				<img
					src="/assets/shared/desktop/bg-pattern-small-circle.svg"
					className="absolute top-0 w-[292px] right-0 md:hidden"
				/>
				<img
					src="/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
					className="hidden md:block md:absolute -right-1/7 w-full z-0 lg:right-0"
				/>
			</SectioninView>
			<div className="flex flex-col  items-center justify-center gap-y-10 px-6 md:px-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:px-0">
				{page.examples.map((example) => (
					<SectioninView
						key={example.title}
						className={`rounded-15 overflow-hidden flex flex-col shadow-[10px_2px_30px_0px_#00000066] items-center justify-center md:flex-row lg:flex-col lg:shadow-[5px_5px_20px_#00000066] lg:w-[350px] hover:bg-peach group transition-all duration-200`}
					>
						<img
							src={example.imgSrc}
							className="h-[320px] w-[327px] lg:w-[350px]"
						/>
						<div className="flex flex-col gap-4 items-center p-8">
							<h2 className="text-3 text-peach uppercase group-hover:text-white transition-all duration-200">
								{example.title}
							</h2>
							<AnimatedText
								className={`text-[16px] leading-[26px] text-dark-grey text-center group-hover:text-white transition-all duration-200`}
							>
								{example.text}
							</AnimatedText>
						</div>
					</SectioninView>
				))}
			</div>
			<section className="flex flex-col gap-6 px-6 md:px-0 lg:grid lg:grid-cols-2">
				{matchedLinkCards.map((card) => (
					<HomeNavCard
						key={card.title}
						card={card}
						className={`flex justify-center items-center flex-col gap-3 md:gap-6 rounded-15 h-[250px] md:h-[200px] relative overflow-hidden group w-full lg:h-[308px]`}
					/>
				))}
			</section>
		</React.Fragment>
	);
};

export default DesignPage;
