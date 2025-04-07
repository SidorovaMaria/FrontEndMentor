import React from "react";
import { motion } from "motion/react";
import { NavLink, useNavigate } from "react-router";
import SectioninView from "../components/motion/SectioninView";
import AnimatedText from "../components/motion/AnimatedText";
import AnimatedBtn from "../components/motion/AnimatedBtn";
import HomeNavCard from "../components/HomeNavCard";
import HomeFeatures from "../components/HomeFeatures";
import { navCrads } from "../app/data";

const Home = () => {
	let navigate = useNavigate();
	return (
		<React.Fragment>
			<SectioninView
				type={"section"}
				className={`bg-peach pt-20 relative overflow-hidden h-[843px] md:rounded-15 md:p-[60px] lg:h-[640px] lg:grid lg:grid-cols-[2fr_1fr] lg:items-center`}
			>
				<div className="text-center px-6 z-20 relative lg:text-left lg:max-w-[540px]">
					<div className="space-y-[14px] lg:space-y-6">
						<AnimatedText
							className="text-[32px] leading-[36px] font-medium md:text-[48px] md:leading-[55px]"
							wordGap={3}
						>
							Award-winning custom designs and digital branding
							solutions
						</AnimatedText>
						<AnimatedText
							className="text-[15px] md:text-base leading-[25px] md:leading-[26px] font-normal md:max-w-[446px] mx-auto lg:mx-0"
							delay={0.5}
						>
							With over 10 years in the industry, we are
							experienced in creating fully responsive websites,
							apps, and engaging brand experiences. Find out more
							about our services.
						</AnimatedText>
					</div>
					<AnimatedBtn
						className="btn-light uppercase text-[15px] leading-[22px] tracking-[1px] font-medium mt-6 md:mt-5 lg:mt-10"
						onClick={() => navigate("/about")}
						delayBtn={1.3}
					>
						Learn More
					</AnimatedBtn>
				</div>

				{/* Motioned Image */}
				<motion.div
					className="w-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1.7,
						duration: 1.5,
						ease: "easeOut",
					}}
				>
					{/* Desktop Image */}
					<img
						src="/assets/home/desktop/image-hero-phone.png"
						alt="Hero Phone Image"
						className="absolute hidden md:block left-[50%] -translate-x-[50%] top-[33%] lg:top-0 lg:right-0 lg:left-auto lg:translate-x-[15%] z-10"
					/>
					{/* Mobile Image */}
					<img
						src="./assets/home/mobile/hero-phone.svg"
						alt="Hero Phone Image"
						className="rounded-t-[36px] absolute bottom-0 left-[50%] -translate-x-[50%] md:hidden block shadow-[20px_-40px_80px_#5d0202] z-0"
					/>
				</motion.div>

				{/* Background Pattern Image */}
				<img
					src="/assets/home/desktop/bg-pattern-hero-home.svg"
					alt="Background Pattern"
					className="min-w-[640px] h-[640px] absolute top-[102px] z-0 left-0 md:left-[25%] lg:left-auto lg:right-0 lg:top-0"
				/>
			</SectioninView>

			<section className="flex flex-col gap-6 mx-6 md:mx-0 lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(4,160px)] gap-x-[30px] gap-y-6 z-20">
				{navCrads.map((card) => (
					<HomeNavCard
						card={card}
						key={card.title}
						className={`flex justify-center items-center flex-col gap-3 md:gap-6 rounded-15 h-[250px] md:h-[200px] relative overflow-hidden group w-full lg:row-span-2 lg:h-full`}
						home={true}
					/>
				))}
			</section>
			<section className="flex flex-col gap-20 md:gap-8 mx-6 md:mx-0 lg:flex-row lg:gap-[30px]">
				{homeFeatures.map((feature) => (
					<HomeFeatures feature={feature} key={feature.title} />
				))}
			</section>
		</React.Fragment>
	);
};

export default Home;

const homeFeatures = [
	{
		title: "Passionate",
		text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
		illustration: "/assets/home/desktop/illustration-passionate.svg",
	},
	{
		title: "Resourceful",
		text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
		illustration: "/assets/home/desktop/illustration-resourceful.svg",
	},
	{
		title: "Friendly",
		text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
		illustration: "/assets/home/desktop/illustration-friendly.svg",
	},
];
