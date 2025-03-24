import React from "react";

const FeatureBlock = ({ features }) => {
	return (
		<>
			{features.map((feature) => (
				<div className="flex flex-col gap-12 items-center text-center ">
					<img
						src={feature.image}
						alt={`${feature.image} icon`}
						className="w-18 "
					/>
					<div className="flex flex-col gap-4 items-center">
						<h3 className="h3">{feature.title}</h3>
						<p className="p text-black/60">{feature.text}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default FeatureBlock;
