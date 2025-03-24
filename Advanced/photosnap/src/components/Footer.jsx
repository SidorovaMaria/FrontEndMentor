import React from "react";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-black text-white px-14 py-8 md:py-16 md:px-10 flex flex-col items-center justify-center relative xl:py-16 xl:pl-[171px] xl:pr-[165px]">
			{/* Logo */}

			<div className="flex items-center justify-between w-full md:mb-8 xl:mb-20">
				<img
					src="/assets/shared/desktop/logoWhite.svg"
					alt="PhotoSnap Logo"
					className="mx-auto md:mx-0"
				/>
				<button className="hidden md:flex btn-4 uppercase h4 mt-30 w-fit self-center  md:mt-0">
					<p className="btn-text">get an invite</p>
				</button>
			</div>

			<div className="md:flex md:flex-col-reverse md:items-start md:w-full md:gap-18 ">
				{/* Social Icon */}
				<div className="flex w-full justify-between items-center">
					<SocialIcons />
					<p className="p text-white/50 mt-8 md:mt-0 hidden md:block">
						Copyright 2019. All Rights Reserved
					</p>
				</div>
				<ul className="h4 flex flex-col items-center gap-5 justify-center md:flex-row xl:absolute xl:flex-col left-[30%] top-16 lg:gap-5  xl:items-start">
					<Link to="/">
						<li className="hover:text-white/30">Home</li>
					</Link>
					<Link to="/stories">
						<li className="hover:text-white/30">stories</li>
					</Link>
					<Link to="/features">
						<li className="hover:text-white/30">Features</li>
					</Link>
					<Link to="/pricing">
						<li className="hover:text-white/30">pricing</li>
					</Link>
				</ul>
			</div>
			<button className="btn-4 uppercase h4 mt-30 w-fit self-center md:hidden">
				<p className="btn-text">get an invite</p>
			</button>
			<p className="p text-white/50 mt-8 md:hidden">
				Copyright 2019. All Rights Reserved
			</p>
		</div>
	);
};

export default Footer;
