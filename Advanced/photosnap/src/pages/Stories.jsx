import React from "react";
import StoryCards from "../components/StoryCards";
import { stories } from "../data/data";
const Stories = () => {
	return (
		<main>
			{/* Hero */}
			<div className="bg-black text-white relative">
				{/* Image */}
				<div className="">
					<img
						src="../../public/assets/stories/mobile/moon-of-appalacia.jpg"
						alt="Moon of Appalachia"
						className="md:hidden w-full"
					/>
					<img
						src="../../public/assets/stories/tablet/moon-of-appalacia.jpg"
						alt="Moon of Appalachia"
						className="hidden md:block lg:hidden w-full h-full absolute"
					/>
					<img
						src="../../public/assets/stories/desktop/moon-of-appalacia.jpg"
						alt="Moon of Appalachia"
						className="hidden lg:block w-full h-full absolute"
					/>
					<div className="py-16 px-7 relative md:py-[122px] md:max-w-[387px] md:mx-10 md:px-0 lg:ml-[112px]">
						<div className="flex flex-col gap-8 md:gap-6">
							<h4 className="h4">Last Month's featured story</h4>
							<h1 className="h1 uppercase">
								Hazy full <br /> Moon of appalachia
							</h1>
						</div>
						<div className="flex flex-col gap-6 mt-14 md:mt-4">
							<p className="text-[13px] text-white/75">
								March 2nd 2020{" "}
								<span className="text-white">
									by John Appleseed
								</span>
							</p>
							<p className="p text-white/60">
								The dissected plateau area, while not actually
								made up of geological mountains, is popularly
								called "mountains," especially in eastern
								Kentucky and West Virginia, and while the ridges
								are not high, the terrain is extremely rugged.
							</p>
						</div>
						<button className="btn-4 uppercase text-xs mt-6 ">
							<p className="btn-text">Read the story</p>
						</button>
					</div>
				</div>
			</div>
			<div>
				<StoryCards stories={stories} />
			</div>
		</main>
	);
};

export default Stories;
