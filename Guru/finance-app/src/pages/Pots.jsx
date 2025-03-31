import React from "react";

const Pots = () => {
	return (
		<main className="screen-layout ">
			{/* Header */}
			<header className="flex justify-between items-center">
				<h1 className="text-1">Pots</h1>
				<button className="btn-primary text-4 bold">
					+ Add New Pot
				</button>
			</header>
		</main>
	);
};

export default Pots;
