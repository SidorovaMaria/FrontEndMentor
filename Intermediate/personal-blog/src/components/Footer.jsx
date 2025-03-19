import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	return (
		<div className="flex mb-4 items-center justify-between px-[10px]">
			<p>Made with ❤️ and ☕️ </p>
			<SocialLinks className={"gap-4 footer"} />
		</div>
	);
};

export default Footer;
