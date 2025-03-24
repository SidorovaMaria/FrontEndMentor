import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav
			className={`py-[28px] px-6 md:px-10 lg:px-[165px] flex justify-between  md:justify-center lg:justify-between md:gap-10 items-center relative `}
		>
			{/* Logo */}
			<div className="z-40">
				<Link to="/" onClick={() => setOpenMenu(false)}>
					<img src="/assets/shared/desktop/logo.svg" />
				</Link>
			</div>
			{/* Logo End */}
			{/* Mobile hidden */}

			{/* Links */}
			<ul className="hidden md:flex items-center gap-5  md:gap-[37px] ">
				<Link to="/stories">
					<li className="hover:text-light-grey mobile-h4 ">
						stories
					</li>
				</Link>
				<Link to="/features">
					<li className="hover:text-light-grey mobile-h4 md:h4">
						{" "}
						features
					</li>
				</Link>
				<Link to="/pricing">
					<li className="hover:text-light-grey mobile-h4 md:h4">
						pricing
					</li>
				</Link>
			</ul>
			{/* End Links */}
			<hr className="md:hidden my-5 " />
			{/* Get Invite Btn */}
			<button className="hidden md:w-fit md:block btn-1 h4">
				Get an invite
			</button>
			{/* Get Invite Btn */}
			<div
				className={`absolute top-[72px] h-[100vh] bg-black/30 w-full left-0  transition-all ease-in-out duration-500 md:hidden -z-50 over
                            ${
								openMenu
									? " opacity-100 z-50 "
									: " opacity-0 -translate-y-full "
							}`}
			>
				<div className="bg-white p-8">
					<ul className="flex flex-col gap-5 items-center">
						<Link to="/stories" onClick={() => setOpenMenu(false)}>
							<li className="hover:text-light-grey mobile-h4">
								stories
							</li>
						</Link>
						<Link to="/features" onClick={() => setOpenMenu(false)}>
							<li className="hover:text-light-grey mobile-h4 ">
								{" "}
								features
							</li>
						</Link>
						<Link to="/pricing" onClick={() => setOpenMenu(false)}>
							<li className="hover:text-light-grey mobile-h4 ">
								pricing
							</li>
						</Link>
					</ul>
					<h4 className="border-[1px] border-black my-5" />
					<button className="w-full btn-1 h4">Get an invite</button>
				</div>
			</div>
			{/* End Mobile hidden */}
			{/* OpenCloseBtn */}
			<div
				className="md:hidden"
				onClick={() => {
					setOpenMenu(!openMenu);
				}}
			>
				<div
					className={`menu-line line-1 ${
						openMenu ? "close" : "open"
					}`}
				></div>
				<div
					className={`menu-line line-2 ${
						openMenu ? "close" : "open"
					}`}
				></div>
			</div>
		</nav>
	);
};

export default NavBar;
