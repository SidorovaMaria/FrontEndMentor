import React from "react";

const StoryCards = ({ stories, preview }) => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4  ">
			{stories.map((story) => (
				<div
					key={story.title}
					className="relative transition-all ease-in duration-300 hover:-translate-y-6 group z-30"
				>
					<img
						src={story.imgMobile}
						alt={`${story.title} Image`}
						className=" md:hidden w-full"
					/>
					<img
						src={story.imgTablet}
						alt={`${story.title} Image`}
						className="hidden md:block w-full"
					/>
					<div
						className={`absolute top-0 z-10 h-full w-full bg-gradient-to-b from-black/0 to-black/60`}
					></div>
					{/* Info */}
					<div className="absolute bottom-10 z-30 mx-10 w-[80%]">
						<div className="flex flex-col gap-1">
							{preview ? (
								<p className="text-white text-[13px]">
									{story.date}
								</p>
							) : null}
							<h5 className="text-[18px] leading-[25px] font-semibold text-white">
								{story.title}
							</h5>
							<p className="text-white text-[13px]">
								by {story.author}
							</p>
						</div>
						<hr className="mt-4 mb-5 border-white border-[0.5px]" />
						<div className="flex justify-between items-center">
							<p className="btn-text font-semibold text-xs tracking-[2px] text-white uppercase">
								read story
							</p>
							<img
								src="/assets/shared/desktop/arrowWhite.svg"
								alt="arrow"
							/>
						</div>
					</div>
					<div className="group-hover:opacity-100 opacity-0 absolute  bottom-0 w-full h-[6px] z-50 bg-gradient-to-tr from-[#ffc593] via-[#bc7198] to-[#5a77ff]"></div>
				</div>
			))}
		</div>
	);
};

export default StoryCards;
