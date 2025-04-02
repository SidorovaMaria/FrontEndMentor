import React, { useState } from "react";
import { useSelector } from "react-redux";
import PotBreakdown from "../components/pots/PotBreakdown";
import PotAddEditModal from "../components/pots/PotAddEditModal";

const Pots = () => {
	const { pots } = useSelector((state) => state.finance);
	const [openAddPot, setOpenAddPot] = useState(false);
	const closeAddModal = () => {
		setOpenAddPot(false);
	};

	return (
		<main className="screen-layout ">
			{/* Header */}
			<header className="flex justify-between items-center">
				<h1 className="text-1">Pots</h1>
				<button
					className="btn-primary text-4 bold"
					onClick={() => setOpenAddPot(true)}
				>
					+ Add New Pot
				</button>
			</header>
			<section className=" my-8 grid grid-cols-1 gap-6 my-8 lg:grid-cols-2">
				{pots.map((pot) => (
					<PotBreakdown pot={pot} key={pot.name} />
				))}
			</section>
			<PotAddEditModal
				mode={"add"}
				budget={null}
				isOpen={openAddPot}
				setIsOpen={closeAddModal}
			/>
		</main>
	);
};

export default Pots;
