import React from "react";
import { locationsDetails } from "../app/data";
import SectioninView from "../components/motion/SectioninView";

const Location = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-10 md:gap-30 lg:gap-8 z-40">
				{locationsDetails.map((location, index) => (
					<SectioninView
						key={location.location}
						className={`rounded-8 md:flex flex-col gap-8 ${
							index !== 1 ? "lg:flex-row-reverse" : "lg:flex-row"
						} lg:gap-[30px]`}
					>
						<picture className="shrink-0">
							<source
								media="(min-width: 75rem)"
								srcSet={location.imgdesktop}
							/>
							<img
								srcSet={location.imgTablet}
								alt={"Location"}
								className="h-[320px] w-[375px] md:w-full md:h-[326px] object-cover md:rounded-15 lg:w-[350px]"
							/>
						</picture>
						<div className="flex flex-col items-center py-20 md:py-22 md:px-[74px] px-6 bg-[#FDF3F0] gap-6 text-center relative overflow-hidden md:rounded-15 md:items-start md:w-full md:text-left z-30 ">
							<h4 className="text-1 font-medium text-peach z-30 ">
								{location.location}
							</h4>
							<div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 w-full md:gap-0 z-30">
								<p className="font-bold text-4 text-dark-grey max-w-[190px]">
									{location.addressMain}
									<span className="block font-normal">
										{location.address}
									</span>
								</p>
								<p className="font-bold text-4 text-dark-grey max-w-[190px]">
									Contact
									<span className="block font-normal">
										{location.contactP}
									</span>
									<span className="block font-normal">
										{location.contactM}
									</span>
								</p>
							</div>
							<img
								src="/assets/shared/desktop/bg-pattern-three-circles.svg"
								className="absolute top-0 md:top-auto md:bottom-0 min-w-[584px] aspect-square left-0 pointer-events-auto"
							/>
						</div>
					</SectioninView>
				))}
			</div>
		</React.Fragment>
	);
};

export default Location;
