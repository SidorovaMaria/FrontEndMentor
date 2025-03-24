import React from "react";

const Beta = () => {
	return (
		<section className="relative">
			<img
				src="/assets/shared/mobile/bg-beta.jpg"
				alt="Beta Section"
				className="md:hidden absolute w-full h-full"
			/>
			<img
				src="/assets/shared/tablet/bg-beta.jpg"
				alt="Beta Section"
				className=" hidden md:block absolute lg:hidden w-full h-full"
			/>
			<img
				src="/assets/shared/desktop/bg-beta.jpg"
				alt="Beta Section"
				className="hidden absolute lg:block w-full h-full"
			/>
			<div className="absolute top-0 w-[128px] h-[6px] left-[33px] z-50 bg-gradient-to-tr from-[#ffc593] via-[#bc7198] to-[#5a77ff] md:hidden"></div>
			<div className="absolute top-0 left-0 w-[6px] h-full z-50 bg-gradient-to-tr from-[#ffc593] via-[#bc7198] to-[#5a77ff] hidden md:block"></div>
			<div className="relative py-16 md:py-[68px] px-8 md:px-10 lg:px-[165px] md:flex md:items-center  md:justify-between">
				<h1 className="h1 uppercase text-white md:max-w-[400px]">
					We’re in beta. Get your invite today!
				</h1>
				<button className="btn-4 text-xs mt-5 leading-[16px] md:shrink-0">
					<p className="btn-text uppercase">Get an invite </p>
				</button>
			</div>
		</section>
	);
};

export default Beta;
