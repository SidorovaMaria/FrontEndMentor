import React, { useState } from "react";
import { clients, directors } from "../app/data";
import DirectorsCards from "../components/DirectorsCards";

const About = () => {
	return (
		<main>
			<section className="pt-20 pb-[108px] md:py-[112px]  relative">
				<div className="flex flex-col gap-4 text-center xl:text-left xl:flex-row xl:gap-[30px] xl:items-start">
					<h1 className="xl:text-[64px] xl:w-[350px]">About</h1>
					<p className="md:px-0 mx-auto xl:max-w-[730px] relative pt-10">
						<span className="absolute top-0 left-0 w-[50px] h-1 bg-light-coral hidden xl:block"></span>
						We help companies build dynamic teams made up of top
						global talent. Using our network of passionate
						professionals we drive innovation and deliver incredible
						outcomes. Talented, diverse teams shape the best
						products and experiences. We’ll bring those teams to
						you.
					</p>
				</div>
				<img
					src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
					alt="bg pattern 1"
					className="absolute -bottom-[100px] md:bottom-0 -right-[100px]"
				/>
			</section>
			<section className="pt-[88px] md:pt-[100px]  pb-[116px] md:pb-[128px] xl:py-[140px] flex flex-col gap-12 bg-green-deep-jungle xl:gap-16 relative">
				<img
					src="/assets/bg-pattern-about-2-contact-1.svg"
					alt="bg pattern 2"
					className="absolute -top-[100px] md:top-0 -left-[100px]"
				/>
				<h2 className="text-center">Meet the directors</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-[52px] md:gap-y-12 md:gap-x-[11px] xl:grid-cols-3 xl:gap-x-[30px]">
					{directors.map((director) => (
						<DirectorsCards
							director={director}
							key={director.name}
						/>
					))}
				</div>
				<img
					src="/assets/bg-pattern-home-4-about-3.svg"
					alt="bg pattern 3"
					className="absolute bottom-0 right-0"
				/>
			</section>
			<section className="bg-green-sacramento py-[88px] md:py-[100px] md:px-10 xl:py-[140px] flex flex-col justify-center gap-16 relative md:gap-12 xl:px-[165px] lg:gap-16">
				<img
					src="/assets/bg-pattern-about-4.svg"
					alt="bg pattern 4"
					className="absolute -top-[100px] -left-[100px] md:left-0 xl:top-0"
				/>
				<h2 className="text-center">Some of our clients</h2>
				<div className="flex flex-col md:flex-row items-center justify-center gap-14 mx-auto xl:justify-between xl:mx-0 xl:items-stretch">
					{clients.map((client) => (
						<img
							key={client.altText}
							src={client.image}
							alt={client.altText}
							className="block w-auto h-6 md:h-4 xl:h-6"
						/>
					))}
				</div>
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

export default About;
