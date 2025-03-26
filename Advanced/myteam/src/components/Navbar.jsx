import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<nav className="mt-12 mx-6 md:mt-16 md:mx-10 xl:px-[165px] xl:mt-[73px] flex gap-12 items-center overflow-hidden ">
			{/* Logi */}
			<div>
				<img src="/assets/logo.svg" alt="myteam logo" />
			</div>
			{/* Larger Screen Navigation  */}
			<div className="hidden justify-between w-full items-center md:flex">
				<ul className="flex gap-10 items-center">
					<li className="hover:text-light-coral has-[.active]:text-light-coral">
						<NavLink to="/">home</NavLink>
					</li>

					<li className="hover:text-light-coral has-[.active]:text-light-coral">
						<NavLink to="/about">about</NavLink>
					</li>
				</ul>
				<button className="btn-primary light">
					<Link to="/contact">contact us</Link>
				</button>
			</div>
			{/* Mobile */}
			<div className="ml-auto md:hidden">
				<img
					src="/assets/icon-hamburger.svg"
					alt="Open Menu Icon"
					onClick={() => setOpenMenu(true)}
					className="cursor-pointer"
				/>
			</div>
			<div
				className={`absolute w-full h-full right-0 top-0 bg-black/50  transition-all ease-in-out duration-300 md:hidden overflow-hidden ${
					openMenu ? "opacity-100 z-10" : "opacity-0 -z-10"
				}`}
			>
				<div
					className={`w-[255px] h-full absolute right-0 bg-blue-police pt-14 flex flex-col px-[48px] items-start  transition-all ease-in-out duration-300 ${
						openMenu
							? "opacity-100 z-10"
							: "opacity-0 translate-x-50  -z-10"
					}
                   `}
				>
					<img
						src="/assets/icon-close.svg"
						alt="Close Menu Icon"
						className="w-[18px] mb-[39px] self-end cursor-pointer"
						onClick={() => setOpenMenu(false)}
					/>
					<ul className="flex  flex-col gap-6 items-center">
						<li className="hover:text-light-coral has-[.active]:text-light-coral">
							<NavLink to="/">home</NavLink>
						</li>

						<li className="hover:text-light-coral has-[.active]:text-light-coral">
							<NavLink to="/about">about</NavLink>
						</li>
					</ul>
					<button className="btn-primary light mt-[36px] w-full">
						<Link to="/contact">contact us</Link>
					</button>
					<img
						src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
						alt="bg-pattern"
						className="absolute bottom-0 left-[155px]"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
