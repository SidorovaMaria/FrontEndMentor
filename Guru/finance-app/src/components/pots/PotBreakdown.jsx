import React, { useState } from "react";
import { motion } from "motion/react";
import DeleteEditPotOptions from "./DeleteEditPotOptions";
import AddWithdrawModal from "./AddWithdrawModal";

const PotBreakdown = ({ pot }) => {
	const [modalType, setModalType] = useState(null);
	const openModal = (type) => setModalType(type);
	const closeModal = () => setModalType(null);

	return (
		<div className="py-6 px-5 flex flex-col gap-8">
			{/* Title */}
			<div className="flex items-center gap-4">
				<div
					className="w-4 h-4 rounded-full"
					style={{ backgroundColor: `${pot.theme}` }}
				></div>
				<p className="text-2">{pot.name}</p>
				<DeleteEditPotOptions pot={pot} />
			</div>
			{/* Total Saved */}
			<div className="flex flex-col gap-4 py-[10.5px] ">
				<div className="flex justify-between items-center">
					<h4 className="text-4 text-grey-500">Total Saved</h4>
					<h1 className="text-1">${pot.total.toFixed(2)}</h1>
				</div>
				<div className="flex flex-col gap-3">
					<div className="relative w-full h-2 bg-gray-200 rounded-[4px] overflow-hidden">
						<motion.div
							className="h-full rounded-[4px]"
							initial={{ width: "0%" }}
							animate={{
								width: `${(pot.total / pot.target) * 100}%`,
							}}
							transition={{ duration: 1, ease: "easeInOut" }}
							style={{ backgroundColor: pot.theme }}
						/>
					</div>
					<div className="flex justify-between">
						<p className="text-5 bold text-grey-500">
							{((pot.total / pot.target) * 100).toFixed(2)}%
						</p>
						<p className="text-5 text-grey-500">
							Target of ${pot.target.toLocaleString()}
						</p>
					</div>
				</div>
			</div>
			<div className="flex gap-3 w-full text-4 bold">
				<button
					className="btn-secondary w-full bg-beige-100 rounded-8"
					onClick={() => openModal("add")}
				>
					+ Add Money
				</button>
				<button
					className="btn-secondary w-full bg-beige-100 rounded-8"
					onClick={() => openModal("withdraw")}
				>
					Withdraw
				</button>
			</div>
			{modalType && (
				<AddWithdrawModal
					mode={modalType}
					pot={pot}
					isOpen={!!modalType}
					setIsOpen={closeModal}
				/>
			)}
		</div>
	);
};

export default PotBreakdown;
