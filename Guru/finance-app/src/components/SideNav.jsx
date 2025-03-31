import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { NavLinks } from "../data/appData";
import { ReactSVG } from "react-svg";

const SideNav = () => {
	const location = useLocation();
	const [minimize, setMinimize] = useState(false);
	return (
		<nav
			className={`min-h-screen bg-grey-900 rounded-r-16 flex-col transition-all duration-500 hidden lg:flex ${
				minimize ? "w-[88px]" : " w-[300px]"
			}`}
		>
			{/* Icon */}
			<NavLink to="/">
				<div className="py-10 px-8">
					<img
						src="../../public/assets/images/logo-large.svg"
						alt="Logo finance"
						className={`${minimize ? "hidden" : "block"}`}
					/>
					<img
						src="../../public/assets/images/logo-small.svg"
						alt="Logo finance"
						className={`${minimize ? "block" : "hidden"}`}
					/>
				</div>
			</NavLink>
			{/* Links */}
			<div className=" flex flex-col gap-1 my-6">
				{NavLinks.map((link) => {
					const isActive = location.pathname === link.link;
					return (
						<NavLink
							key={link.title}
							to={link.link}
							className={`flex gap-4 py-4 px-8 items-center rounded-r-12 mr-6 relative transition-all duration-300 ${
								isActive ? "bg-white text-grey-900" : ""
							}`}
						>
							<div className="flex items-center justify-center w-6 h-6">
								<ReactSVG
									src={link.linkIcon}
									className={`${
										isActive
											? "fill-secondary-green"
											: "fill-grey-300"
									}`}
								/>
							</div>
							<h3
								className={`${
									isActive ? "text-grey-900" : "text-grey-300"
								} ${minimize ? "hidden" : ""}`}
							>
								{link.title}
							</h3>
							<div
								className={`h-full w-1 bg-secondary-green absolute top-0 left-0 ${
									isActive ? "opacity-100" : "opacity-0"
								}`}
							></div>
						</NavLink>
					);
				})}
			</div>
			<button
				className="flex items-center gap-4 group py-4 px-8 mt-auto  mb-6"
				onClick={() => setMinimize(!minimize)}
			>
				<ReactSVG
					src="/assets/images/icon-minimize-menu.svg"
					className={`fill-grey-300 group-hover:fill-white transition-all ${
						minimize ? "rotate-180" : ""
					}`}
				/>
				<h3
					className={`text-grey-300 group-hover:text-white ${
						minimize ? "hidden" : ""
					}`}
				>
					Minimize Menu
				</h3>
			</button>
		</nav>
	);
};

export default SideNav;
