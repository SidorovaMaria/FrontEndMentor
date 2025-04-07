import React from "react";
import { ReactSVG } from "react-svg";

const IconLink = ({ icon }) => {
	return (
		<a href={icon.link} className="group">
			<ReactSVG
				src={icon.iconSrc}
				icon={icon.alt}
				className="fill-peach group-hover:fill-peach-light"
			/>
		</a>
	);
};

export default IconLink;
