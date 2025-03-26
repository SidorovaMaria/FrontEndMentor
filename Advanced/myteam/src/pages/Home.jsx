import React from "react";
import { successStories } from "../app/data";

const Home = () => {
	return (
		<main>
			<section className="pt-20 md:pt-[112px] xl:pt-[129px] pb-50 md:pb-[256px] xl:pb-[250px] text-center relative">
				<div className="flex flex-col gap-[18px] items-center md:gap-6 xl:flex-row xl:gap-[105px] xl:items-end relative xl:h-[200px]">
					<h1 className="xl:text-left ">
						Find the <br /> best{" "}
						<span className="text-light-coral">talent</span>
					</h1>
					<div className="md:max-w-[457px] xl:text-left xl:max-w-[445px] relative flex flex-col justify-end xl:min-h-full">
						<span className="absolute top-0 left-0 w-[50px] h-1 bg-blue-rapture hidden xl:block"></span>
						<p>
							Finding the right people and building
							high-performing teams can be hard. Most companies
							aren’t tapping into the abundance of global talent.
							We’re about to change that.
						</p>
					</div>
				</div>
				<img
					src="/assets/bg-pattern-home-1.svg"
					alt="bg pattern 1 home"
					className="hidden absolute xl:block xl:-left-[100px] xl:top-[129px]"
				/>
				<img
					src="/assets/bg-pattern-home-2.svg"
					className="absolute bottom-0 left-0 md:left-1/4 xl:left-3/5"
					alt="bg pattern home"
				/>
			</section>
			<section className="bg-green-sacramento py-16 relative md:px-[98px] xl:grid grid-cols-2 xl:gap-x-[125px] xl:px-[165px]">
				<img
					src="/assets/bg-pattern-home-3.svg"
					alt="pattern"
					className="absolute -right-[100px] top-0 xl:bottom-0 xl:top-auto"
				/>
				<div className="max-w-[240px] md:max-w-[445px] pt-8 relative xl:pt-14 ">
					<span className="h-1 w-[50px] bg-light-coral absolute top-0 left-0 " />
					<h2>Build & manage distributed teams like no one else.</h2>
				</div>
				<div className="mt-14 grid gridcols-1 gap-y-12 self-end">
					<div className="flex flex-col gap-4 text-center items-center md:flex-row md:gap-[23px]">
						<img
							src="/assets/icon-person.svg"
							alt="icon person"
							className="w-18"
						/>
						<div className="flex flex-col gap-2 md:text-left">
							<p className="text-light-coral text-[18px]">
								Experienced Individuals
							</p>
							<p className="text-white/80 tight">
								Our network is made up of highly experienced
								professionals who are passionate about what they
								do.
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4 text-center items-center md:flex-row md:gap-[23px]">
						<img
							src="/assets/icon-cog.svg"
							alt="icon person"
							className="w-18"
						/>
						<div className="flex flex-col gap-2  md:text-left">
							<p className="text-light-coral text-[18px] capitalize">
								Easy to Implement
							</p>
							<p className="text-white/80 tight">
								Our processes have been refined over years of
								implementation meaning our teams always deliver.
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4 text-center items-center md:flex-row md:gap-[23px]">
						<img
							src="/assets/icon-chart.svg"
							alt="icon person"
							className="w-18"
						/>
						<div className="flex flex-col gap-2  md:text-left">
							<p className="text-light-coral text-[18px] capitalize">
								Enhanced Productivity
							</p>
							<p className="text-white/80 tight">
								Our customized platform with in-built analytics
								helps you manage your distributed teams.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="pt-[140px] md:pt-[100px] pb-[164px] md:pb-[100px] xl:py-[140px] bg-green-deep-jungle text-center flex flex-col gap-12 relative">
				<h2 className="xl:max-w-[932px] mx-auto">
					Delivering real results for top companies. Some of our{" "}
					<span className="text-blue-rapture">success stories.</span>
				</h2>
				<div className="grid grid-cols-1 gap-y-12 items-center justify-center xl:grid-cols-3 xl:gap-x-[30px]">
					{successStories.map((story) => (
						<div
							key={story.author}
							className="flex flex-col gap-4 xl:gap-6"
						>
							<div className="relative pt-[36px]">
								<img
									src="/assets/icon-quotes.svg"
									alt="quote icon"
									className="absolute top-0 left-[50%] -translate-x-[50%] z-0 w-[67px]"
								/>
								<p className="tight relative">{story.text}</p>
							</div>
							<div className="flex flex-col gap-0.5">
								<p className="text-blue-rapture text-[18px]">
									{story.author}
								</p>
								<p className="italic text-[13px] leading-[18px] font-medium">
									{story.position}
								</p>
							</div>
							<img
								src={story.avatar}
								alt={`Avatar - ${story.author}`}
								className="w-[62px] rounded-full border-[2px] border-[#c4fffe] self-center xl:mt-2"
							/>
						</div>
					))}
				</div>
				<img
					src="/assets/bg-pattern-home-4-about-3.svg"
					alt="Bg pattern 3"
					className="absolute top-0 left-0"
				/>
				<img
					src="/assets/bg-pattern-home-5.svg"
					alt="bg-pattern-4"
					className="absolute bottom-0 right-0"
				/>
			</section>
			<section className="py-[83px] bg-light-coral flex flex-col gap-6 items-center relative md:flex-row md:justify-between">
				<h2 className="text-green-sacramento text-center">
					Ready to get started?
				</h2>
				<button className="btn-primary dark w-fit">contact us</button>
				<img
					src="/assets/bg-pattern-home-6-about-5.svg"
					alt="bg pattern-5"
					className="absolute -bottom-[21px] left-0 text-[18px]"
				/>
			</section>
		</main>
	);
};

export default Home;
