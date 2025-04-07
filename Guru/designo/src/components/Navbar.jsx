import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // Corrected import
import { Link, NavLink, useLocation } from "react-router"; // Ensure correct router package import
import { ReactSVG } from "react-svg";

const Navlinks = [
	{
		title: "Our Company",
		link: "/about",
	},
	{
		title: "Locations",
		link: "/locations",
	},
	{
		title: "Contact",
		link: "/contact",
	},
];
const Navbar = () => {
	const { scrollY } = useScroll();
	const location = useLocation();
	const [openMobileNav, setOpenMobileNav] = useState(false);

	const height = useTransform(scrollY, [0, 150], [100, 80]);

	return (
		<motion.header
			className="flex justify-between items-center w-full px-6 md:px-10 lg:px-40 py-8 bg-white/80 md:my-8 relative"
			id="navigation"
			style={{
				height,
				position: "sticky",
				top: 0,
				zIndex: 50,
			}}
		>
			{/* Logo */}
			<div>
				<Link to="/">
					<img
						src="/assets/shared/desktop/logo-dark.png"
						alt="Designo Logo"
						className="w-[202px]"
					/>
				</Link>
			</div>
			{/* Navigation Desktop */}
			<nav className="hidden md:flex gap-[42px] items-center">
				{Navlinks.map((link) => (
					<motion.div key={link.title} className="relative">
						<NavLink
							to={link.link}
							className={`text-nav ${
								link.link !== location.pathname
									? "nav-underline"
									: ""
							} `}
						>
							{link.title}
						</NavLink>
						{link.link === location.pathname && (
							<motion.div
								className="w-full h-1 absolute left-0 -bottom-1 rounded-full"
								layoutId="selected"
								initial={{ backgroundColor: "#E7816B80" }}
								animate={{
									backgroundColor: "#E7816B",
									transition: { ease: ["backIn", "backOut"] },
								}}
							/>
						)}
					</motion.div>
				))}
			</nav>
			{/* MobileNavigation */}

			<motion.nav
				className="md:hidden"
				initial="closed"
				animate={openMobileNav ? "opened" : "closed"}
			>
				<motion.div
					className="absolute top-[100%] left-0 h-screen w-full bg-black"
					variants={{
						opened: {
							opacity: 0.5,
							scaleY: 1,
							translateY: "0",
							transition: {
								delay: 0.45,
								duration: 0.5,
								ease: "easeInOut",
							},
						},
						closed: {
							opacity: 0,
							scaleY: 0,
							translateY: "-40%",
							zIndex: -50,
							transition: {
								duration: 0.3,
								ease: "easeInOut",
							},
						},
					}}
				></motion.div>
				<div className="relative">
					<motion.button
						variants={{
							opened: {
								opacity: 0,
								zIndex: -10,
								transition: {
									duration: 0.3,
									ease: "easeInOut",
								},
							},
							closed: {
								opacity: 1,
								zIndex: 10,
								transition: {
									delay: 0.3,
									duration: 0.3,
									ease: "easeInOut",
								},
							},
						}}
						onClick={() => setOpenMobileNav(true)}
					>
						<img
							src="/assets/shared/mobile/icon-hamburger.svg"
							alt="Icon Hamburger"
							className="pointer-events-none"
						/>
					</motion.button>
					<motion.button
						className="absolute inset-0"
						variants={{
							opened: {
								opacity: 1,
								zIndex: 20,
								transition: {
									delay: 0.3,
									duration: 0.3,
									ease: "easeInOut",
								},
							},
							closed: {
								opacity: 0,
								zIndex: -10,
								transition: {
									duration: 0.3,
									ease: "easeInOut",
								},
							},
						}}
						onClick={() => setOpenMobileNav(false)}
					>
						<img
							src="/assets/shared/mobile/icon-close.svg"
							alt="Icon Close"
							className={`fill-black`}
						/>
					</motion.button>
				</div>
				<motion.ul
					className="fixed flex flex-col gap-8 py-12 px-6 left-0 top-0 bg-black text-white w-full"
					variants={{
						opened: {
							y: "40%",
							zIndex: 10,
							transition: {
								duration: 0.9,
								ease: [0.74, 0, 0.19, 1.02],
							},
						},
						closed: {
							y: "-500%",
							transition: {
								duration: 0.63,
								ease: [0.74, 0, 0.19, 1.02],
							},
						},
					}}
				>
					{Navlinks.map((link) => (
						<motion.li key={link.title}>
							<NavLink
								to={link.link}
								onClick={() => setOpenMobileNav(false)}
							>
								<motion.div
									className="text-mobile-nav"
									variants={{
										opened: {
											opacity: 1,
											y: "0%",
											transition: {
												duration: 0.65,
												ease: "easeOut",
											},
										},
										closed: {
											opacity: 0,
											y: "100%",
											transition: {
												duration: 0.25,
												ease: "easeInOut",
											},
										},
									}}
								>
									{link.title}
									{link.link === location.pathname && (
										<motion.div
											className="w-full h-1 absolute left-0 -bottom-1 rounded-full"
											layoutId="selectedMobile"
											initial={{
												backgroundColor: "#E7816B80",
											}}
											animate={{
												backgroundColor: "#E7816B",
												transition: {
													ease: ["backIn", "backOut"],
												},
											}}
										/>
									)}
								</motion.div>
							</NavLink>
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>
		</motion.header>
	);
};

export default Navbar;
