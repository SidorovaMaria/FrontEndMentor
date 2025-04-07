import React from "react";
import SectioninView from "../components/motion/SectioninView";
import AnimatedText from "../components/motion/AnimatedText";
import { locations } from "../app/data";
import AnimatedBtn from "../components/motion/AnimatedBtn";
import { useNavigate } from "react-router";

const About = () => {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<div className="md:flex md:flex-col md:gap-30">
				<SectioninView
					type={"section"}
					className={`md:rounded-15 overflow-hidden lg:flex lg:flex-row-reverse relative`}
				>
					{/* Image Section */}
					<picture className="shrink-0 relative z-10">
						<source
							media="(min-width: 75rem)"
							srcSet="/assets/about/desktop/image-about-hero.jpg"
						/>
						<source
							media="(min-width: 48rem)"
							srcSet="/assets/about/tablet/image-about-hero.jpg"
						/>
						{/* Mobile image */}
						<img
							srcSet="/assets/about/mobile/image-about-hero.jpg"
							alt="Hero Img People on Laptops"
							className="w-full h-full object-cover"
						/>
					</picture>

					{/* Content Section */}
					<section className="bg-peach text-white py-20 md:py-14 px-6 md:px-[58px] flex flex-col items-center gap-6 relative lg:items-start lg:justify-center lg:gap-8 lg:pl-[95px] z-20">
						<h1 className="text-1 lg:text-left">About Us</h1>
						<AnimatedText className="text-4 text-center lg:text-left">
							Founded in 2010, we are a creative agency that
							produces lasting results for our clients. We’ve
							partnered with many startups, corporations, and
							nonprofits alike to craft designs that make real
							impact. We’re always looking forward to creating
							brands, products, and digital experiences that
							connect with our clients’ audiences.
						</AnimatedText>
						<img
							src="/assets/shared/desktop/bg-pattern-small-circle.svg"
							className="absolute right-0 w-[75%] -top-1/3 -rotate-90 md:right-auto md:-left-[7%] md:-top-full lg:left-0 lg:-top-1/3 lg:w-full z-10"
						/>
					</section>
				</SectioninView>

				<SectioninView
					type={"section"}
					className={` md:rounded-15 overflow-hidden lg:flex lg:flex-row`}
				>
					<picture className="shrink-0">
						<source
							media="(min-width: 75rem)"
							srcSet={
								"/assets/about/desktop/image-world-class-talent.jpg"
							}
						/>
						<source
							media="(min-width: 48rem)"
							srcSet={
								"/assets/about/tablet/image-world-class-talent.jpg"
							}
						/>

						<img
							srcSet={
								"/assets/about/mobile/image-world-class-talent.jpg"
							}
							alt={"Hero Img People on Laptops"}
							className="w-full h-full object-cover"
						/>
					</picture>
					<section className="py-20 md:py-14 px-6 md:px-[58px] flex flex-col items-center gap-6 relative lg:items-start lg:justify-center lg:gap-8 lg:px-[95px] overflow-hidden bg-[#FDF3F0] z-10">
						<h2 className="text-1 lg:text-left text-peach relative z-10">
							World-class talent
						</h2>
						<AnimatedText
							className={`text-4 text-center lg:text-left text-dark-grey relative z-10`}
							wordGap={1}
						>
							We are a crew of strategists, problem-solvers, and
							technologists. Every design is thoughtfully crafted
							from concept to launch, ensuring success in its
							given market. We are constantly updating our skills
							in a myriad of platforms.
						</AnimatedText>
						<AnimatedText
							className={`text-4 text-center lg:text-left text-dark-grey`}
							wordGap={1}
						>
							Our team is multi-disciplinary and we are not merely
							interested in form — content and meaning are just as
							important. We give great importance to
							craftsmanship, service, and prompt delivery. Clients
							have always been impressed with our high-quality
							outcomes that encapsulates their brands story and
							mission.
						</AnimatedText>

						<img
							src="/assets/shared/desktop/bg-pattern-three-circles.svg"
							className="absolute top-0 left-0 min-w-[584px] -z-0 md:left-1/12 md:-top-1/2 lg:-left-1/4 lg:top-auto  lg:bottom-0"
						/>
					</section>
				</SectioninView>
			</div>
			<div className="flex flex-col gap-12 md:gap-20 items-center lg:grid lg:grid-cols-3 lg:gap-[30px]">
				{locations.map((location) => (
					<SectioninView
						key={location.location}
						className={`flex flex-col gap-12 items-center`}
					>
						<div className="aspect-square w-[202px] relative">
							<img
								src={location.img}
								className="w-full object-cover"
							/>
							<img
								src="/assets/shared/desktop/bg-pattern-small-circle.svg"
								className="absolute top-0 left-0"
							/>
						</div>
						<div className="flex flex-col gap-8 items-center">
							<h3 className="text-4 uppercase tracking-[5px] font-medium text-dark-grey">
								{location.location}
							</h3>
							<AnimatedBtn
								className="bg-peach text-white p-4 uppercase text-[15px] leading-[22px] tracking-[1px] font-medium rounded-8 hover:bg-peach-light"
								onClick={() => navigate("/locations")}
							>
								See Location
							</AnimatedBtn>
						</div>
					</SectioninView>
				))}
			</div>
			<SectioninView
				type={"section"}
				className={` md:rounded-15 overflow-hidden lg:flex lg:flex-row`}
			>
				<picture className="shrink-0">
					<source
						media="(min-width: 75rem)"
						srcSet={"/assets/about/desktop/image-real-deal.jpg"}
					/>
					<source
						media="(min-width: 48rem)"
						srcSet={"/assets/about/tablet/image-real-deal.jpg"}
					/>

					<img
						srcSet={"/assets/about/mobile/image-real-deal.jpg"}
						alt={"Hero Img People on Laptops"}
						className="w-full h-full object-cover"
					/>
				</picture>
				<section className="py-20 md:py-14 px-6 md:px-[58px] flex flex-col items-center gap-6 relative lg:items-start lg:justify-center lg:gap-8 lg:px-[95px] overflow-hidden bg-[#FDF3F0]">
					<h2 className="text-1 lg:text-left text-peach">
						The real deal
					</h2>
					<AnimatedText
						className={`text-4 text-center lg:text-left text-dark-grey`}
						wordGap={1}
					>
						As strategic partners in our clients’ businesses, we are
						ready to take on any challenge as our own. Solving real
						problems require empathy and collaboration, and we
						strive to bring a fresh perspective to every
						opportunity. We make design and technology more
						accessible and give you tools to measure success.
					</AnimatedText>
					<AnimatedText
						className={`text-4 text-center lg:text-left text-dark-grey`}
						wordGap={1}
					>
						We are visual storytellers in appealing and captivating
						ways. By combining business and marketing strategies, we
						inspire audiences to take action and drive real results.
					</AnimatedText>

					<img
						src="/assets/shared/desktop/bg-pattern-three-circles.svg"
						className="absolute top-0 left-0 min-w-[584px] md:left-1/12 md:-top-1/2 lg:-left-1/4 lg:top-auto lg lg:bottom-0"
					/>
				</section>
			</SectioninView>
		</React.Fragment>
	);
};

export default About;
