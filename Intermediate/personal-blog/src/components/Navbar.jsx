import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

import { navLinks } from "../data/data";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [theme, setTheme] = useState(() => {
		return (
			localStorage.getItem("theme") ||
			document.documentElement.getAttribute("data-theme") ||
			"light"
		);
	});
	useEffect(() => {
		// Apply the theme on load
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<nav
			className={`flex justify-between relative transition-all ease-in duration-150 border-[1px] border-neural-200 dark:border-neural-700 p-[6px] m-4 md:mt-5 md:mx-0  rounded-10 items-center ${
				menuOpen ? "mb-[190px] md:mb-4" : "mb-4"
			}`}
		>
			<Link to="/">
				<img
					className="w-[40px] h-[40px] rounded-10"
					src="/assets/images/image-avatar.jpg"
					alt="Paulina Avatar"
				/>
			</Link>
			<div className="flex gap-[6px] items-center md:gap-[20px] ">
				<ul
					className={`absolute left-0 -bottom-[180px] w-full p-3 flex flex-col gap-[6px] border-[1px] rounded-10 border-neural-200 dark:border-neural-800 shadow-[0px_8px_15px_#0806190F] transition-all duration-300 ease-in-out text-neural-600 dark:text-neural-400${
						menuOpen
							? "translate-y-0 opacity-100 z-10"
							: "-translate-y-10 opacity-0 -z-20"
					} md:static md:translate-y-0 md:opacity-100 md:z-10  md:flex-row md:shadow-none md:border-none md:gap-6 md:transition-none`}
				>
					{navLinks.map((link, index) => (
						<React.Fragment key={link.path}>
							<li>
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										`md:text-preset-8 ${
											isActive
												? "text-preset-6 active-link"
												: "text-preset-7"
										}`
									}
								>
									{link.label}
								</NavLink>
							</li>
							{index < 3 && (
								<hr className="border-neural-200 dark:border-neural-700" />
							)}
						</React.Fragment>
					))}
				</ul>
				{/* Mobile Menu */}
				<div
					className={`md:hidden w-[40px] h-[40px] p-[10px] rounded-10 ${
						menuOpen ? "bg-neural-700 dark:bg-neural-0" : "bg-none"
					}`}
					onClick={toggleMenu}
				>
					<div className={`${menuOpen ? "hidden" : "block"}`}>
						<img
							className="w-[20px] h-[20px] block dark:hidden pointer-events-none"
							src="/assets/images/icon-menu.svg"
							alt="menu icon"
						/>
						<img
							className="w-[20px] h-[20px] hidden dark:block pointer-events-none"
							src="./assets/images/icon-menu-dark.svg"
							alt="menu icon"
						/>
					</div>
					<div className={`${menuOpen ? "block" : "hidden"}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							className="stroke-neural-0 dark:stroke-neutral-900"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M15 5 5 15M5 5l10 10"
							/>
						</svg>
					</div>
				</div>
				<div
					className="w-[40px] h-[40px] p-[10.5px] rounded-8 border-[1px] border-neural-200 dark:border-neural-700"
					onClick={toggleTheme}
				>
					<img
						className="block dark:hidden  h-[17px]"
						src="../../public/assets/images/icon-moon.svg"
						alt="moon icon"
					/>
					<img
						className="hidden dark:block h-[17px]"
						src="../../public/assets/images/icon-sun.svg"
						alt="sun icon"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
