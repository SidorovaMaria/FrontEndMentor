import React from "react";
import { NavLink, useLocation } from "react-router";
import { NavLinks } from "../data/appData";
import { ReactSVG } from "react-svg";

const BottomDrawer = () => {
	const location = useLocation();
	return (
		<nav
			className={`fixed bottom-0 left-0 bg-grey-900 w-full lg:hidden px-4 md:px-10 md:gap-[42px] pt-2 rounded-t-8 flex justify-between items-center `}
		>
			{NavLinks.map((link) => {
				const isActive = location.pathname === link.link;
				return (
					<NavLink
						to={link.link}
						key={link.title}
						className={`pt-2 pb-3 rounded-t-8 w-full flex justify-center items-center relative ${
							isActive ? "bg-white" : ""
						}`}
					>
						<div className="flex flex-col md:gap-1 items-center justify-center">
							<div className="flex justify-center items-center w-6 h-6 ">
								<ReactSVG
									src={link.linkIcon}
									alt={`${link.title} - Icon`}
									className={`${
										isActive
											? "fill-secondary-green"
											: "fill-grey-300"
									}`}
								/>
							</div>
							<h5
								className={`bold hidden md:block ${
									isActive ? "text-grey-900" : "text-grey-300"
								}`}
							>
								{link.title}
							</h5>
						</div>
						<div
							className={`w-full h-1 bg-secondary-green absolute left-0 bottom-0 ${
								isActive ? "" : "hidden"
							}`}
						></div>
					</NavLink>
				);
			})}
		</nav>
	);
};

export default BottomDrawer;
