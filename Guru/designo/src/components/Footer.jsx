import React from "react";

import { Link, useLocation, useNavigate } from "react-router";
import IconLink from "./IconLink";

const Footer = ({ contact }) => {
	console.log(contact);
	return (
		<footer
			className={`bg-black text-white pt-[264px] pb-16 px-6 md:px-10 lg:px-40 absolute w-full -bottom-[600px] md:-bottom-[300px] ${
				contact ? "-bottom-[700px]! pt-14! md:-bottom-[420px]!" : ""
			}`}
		>
			<div className="flex flex-col items-center gap-8 md:gap-10">
				<div className="flex flex-col gap-8 items-center md:flex-row md:justify-between md:w-full">
					<img
						src="/assets/shared/desktop/logo-light.png"
						alt="Icon Light Designo"
						className="w-[202px]"
					/>
					<div className="flex flex-col gap-8 md:flex-row shrink-0 items-center ">
						<hr className="border-white/10 h-[1px] w-full md:hidden" />
						<Link
							to="/about"
							className="nav-underline text-footer whitespace-nowrap "
						>
							Our Company
						</Link>
						<Link
							to="/locations"
							className="nav-underline text-footer "
						>
							Locations
						</Link>
						<Link
							to="/contact"
							className="nav-underline text-footer "
						>
							Contact
						</Link>
					</div>
				</div>
				<hr className="w-full border-white/10 hidden md:block" />
				<div className="flex flex-col gap-10 items-center text-center md:flex-row justify-center md:text-left md:justify-between w-full">
					<div className="flex flex-col gap-10 md:grid md:grid-cols-2">
						<p className="text-body text-white/50">
							<span className="block font-bold ">
								Designo Central Office
							</span>
							3886 Wellington Street
							<br />
							Toronto, Ontario M9C 3J5
						</p>
						<p className="text-body text-white/50">
							<span className="block font-bold ">
								Contact Us (Central Office)
							</span>
							P : +1 253-863-8967
							<br /> M : contact@designo.co
						</p>
					</div>
					<div className="flex gap-4 md:self-end">
						{iconLinks.map((icon) => (
							<IconLink icon={icon} key={icon.alt} />
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

const iconLinks = [
	{
		alt: "Facebook Icon",
		iconSrc: "/assets/shared/desktop/icon-facebook.svg",
		link: "https://www.facebook.com",
	},
	{
		alt: "YouTube Icon",
		iconSrc: "/assets/shared/desktop/icon-youtube.svg",
		link: "https://www.youtube.com",
	},
	{
		alt: "Twitter Icon",
		iconSrc: "/assets/shared/desktop/icon-twitter.svg",
		link: "https://x.com/?lang=en",
	},
	{
		alt: "Pinterest Icon",
		iconSrc: "/assets/shared/desktop/icon-pinterest.svg",
		link: "https://www.pinterest.com",
	},
	{
		alt: "Instagram Icon",
		iconSrc: "/assets/shared/desktop/icon-instagram.svg",
		link: "https://www.instagram.com",
	},
];
