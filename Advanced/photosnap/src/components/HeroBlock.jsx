import React from "react";
import { Link } from "react-router-dom";

const HeroBlock = ({ block, index, showBtn = false }) => {
	return (
		<div
			key={block.title}
			className={`md:flex md:gap-none items-center w-full ${
				index == 1 ? "md:flex" : "md:flex-row-reverse"
			} ${
				block.style === "black"
					? "bg-black text-white"
					: "bg-white text-black"
			}`}
		>
			{/* Image */}
			<div className="md:shrink-0 lg:shrink lg:max-w-[830px] xl:min-w-[830px]">
				<img
					className="md:hidden w-fit mx-auto"
					src={block.imgMobile}
					alt={block.title}
				/>
				<img
					className="hidden md:block lg:hidden"
					src={block.imgTablet}
					alt={block.title}
				/>
				<img
					className="hidden lg:block"
					src={block.imgDesktop}
					alt={block.title}
				/>
			</div>
			{/* Text */}
			<div className="py-18 relative">
				{index === 0 ? (
					<div className="absolute top-0 w-[128px] h-[6px] left-[33px] z-50 bg-gradient-to-tr from-[#ffc593] via-[#bc7198] to-[#5a77ff] md:hidden"></div>
				) : null}
				<div className={` px-6 md:px-14 pl-8 lg:px-28  relative `}>
					{index === 0 ? (
						<div className="absolute top-0 left-0 w-[6px] h-full z-50 bg-gradient-to-tr from-[#ffc593] via-[#bc7198] to-[#5a77ff] hidden md:block"></div>
					) : null}
					<h1
						className="h1 uppercase text-left "
						dangerouslySetInnerHTML={{ __html: block.title }}
					/>
					<p className="p mt-4 mb-6 md:mb-12 opacity-60">
						{block.descripption}
					</p>
					{showBtn ? (
						<button
							className={`text-xs ${
								block.style === "black" ? "btn-4" : "btn-2"
							}`}
						>
							<Link to={block.link} className="btn-text">
								{block.btnText}
							</Link>
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default HeroBlock;
