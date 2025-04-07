import React, { useEffect, useState } from "react";
import SectioninView from "./motion/SectioninView";
import { NavLink } from "react-router";

const HomeNavCard = ({ card, className, home }) => {
	return (
		<SectioninView className={`${home && card.gridArea}`}>
			<div className={`${className} `}>
				{/* Overlay */}
				<div className="absolute w-full h-full inset-0 bg-black/60 z-10 group-hover:bg-peach/50"></div>

				{/* Title */}
				<h2 className=" text-2 z-10">{card.title}</h2>

				{/* NavLink */}
				<NavLink
					to={`/${card.link}`}
					className="font-medium text-[15px] leading-[22px] tracking-[5px] uppercase z-10 flex items-center justify-center gap-4"
				>
					<p>View Projects</p>
					<img
						src="/assets/shared/desktop/icon-right-arrow.svg"
						alt="icon Right Arrow"
					/>
				</NavLink>

				{/* Picture element */}
				<picture className="absolute w-full h-full inset-0">
					<source
						media="(min-width: 75rem)"
						srcSet={card.desktopImg}
					/>
					<source
						media="(min-width: 48rem)"
						srcSet={card.tabletImg}
					/>
					{/* Mobile image */}
					<img
						src={card.mobileImg}
						alt={card.alt}
						className="w-full h-full object-cover"
					/>
				</picture>
			</div>
		</SectioninView>
	);
};

export default HomeNavCard;
