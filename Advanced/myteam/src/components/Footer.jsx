import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="grid grid-cols-1 justify-center w-full items-center mx-auto text-center gap-y-6 bg-green-dark py-16 md:grid-cols-2 md:py-14 md:px-10 md:justify-between md:gap-y-8 xl:grid-cols-[1fr_3fr_2fr] xl:px-[165px] xl:py-12 xl:gap-x-[125px]">
			<div className="flex flex-col gap-6 items-center md:items-start md:gap-[53px] xl:gap-[25px]">
				<img
					src="/assets/logo.svg"
					alt="myteam Logo"
					className="w-[96px] xl:w-40"
				/>
				<ul className="flex gap-6">
					<li className="hover:text-light-coral">
						<Link to="/">home</Link>
					</li>
					<li className="hover:text-light-coral">
						<Link to="/about">about</Link>
					</li>
				</ul>
			</div>
			<p className="mb-4 tight text-white/60 md:text-right md:my-0 xl:text-left">
				987 Hillcrest Lane
				<br />
				Irvine, CA
				<br />
				California 92714
				<br />
				Call Us : 949-833-7432
			</p>
			<div className="flex flex-col gap-4 md:flex-row md:col-span-2 justify-between xl:col-span-1 xl:flex-col xl:gap-[51px]">
				<div className="flex gap-4 justify-center md:justify-start xl:justify-end">
					{/* Facebook */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						className="group"
					>
						<path
							fill="#FFF"
							className="group-hover:fill-light-coral"
							d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
						/>
					</svg>
					{/* Pinterest */}
					<svg
						className="group"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
					>
						<path
							fill="#FFF"
							className="group-hover:fill-light-coral"
							d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
						/>
					</svg>
					{/* Twitter */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="20"
						className="group"
					>
						<path
							fill="#FFF"
							className="group-hover:fill-light-coral"
							d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
						/>
					</svg>
				</div>
				<p className="text-white/60 tight md:text-right">
					Copyright 2020. All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
