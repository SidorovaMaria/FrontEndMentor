import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import {
	formatAmount,
	formatDate,
	getSpendingsByCategory,
} from "../../utils/helpFunctions";

const LatestSpending = ({ budget }) => {
	const { transactions } = useSelector((state) => state.finance);
	const allSpending = getSpendingsByCategory(transactions, budget.category);
	const [openAllSpendngs, setOpenAllSpendngs] = useState(false);
	return (
		<div className="p-4 flex flex-col gap-5 w-full bg-beige-100 rounded-[12px]">
			<div className="flex justify-between">
				<h3 className="text-3">Latest Spending</h3>
				<button
					className="flex gap-3 items-center group"
					onClick={() => setOpenAllSpendngs(true)}
				>
					<p className="text-4 text-grey-500 group-hover:text-grey-900">
						See All
					</p>
					<ReactSVG
						src="/assets/images/icon-caret-right.svg"
						className="fill-grey-500 group-hover:fill-grey-900"
					/>
				</button>
			</div>
			<div className="flex flex-col gap-3">
				{allSpending.slice(0, 3).map((spend, index) => (
					<React.Fragment key={index}>
						<div className="flex justify-between items-center ">
							<div className="flex items-center gap-4">
								<img
									src={spend.avatar}
									alt="Spending Avatar"
									className="w-8 h-8 hidden md:block rounded-full"
								/>
								<h5 className="text-5 bold text-grey-900">
									{spend.name}
								</h5>
							</div>
							<div className="flex flex-col items-end gap-1">
								<p className="text-5 bold">
									{formatAmount(spend.amount)}
								</p>
								<p className="text-grey-500 text-5">
									{formatDate(spend.date)}
								</p>
							</div>
						</div>
						<hr
							className={`w-full border-grey-500/15 h-[1px] ${
								index < 2 ? "" : "hidden"
							}`}
						></hr>
					</React.Fragment>
				))}
			</div>
			<Dialog
				open={openAllSpendngs}
				onClose={() => setOpenAllSpendngs(false)}
				className="relative z-50"
			>
				<DialogBackdrop className="fixed inset-0 bg-black/50" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					{/* The actual dialog panel  */}
					<DialogPanel className="bg-white w-[90%] mx-5 rounded-[12px] md:w-[400px] md:mx-auto px-5 py-6 md:p-8 flex flex-col gap-5 ">
						<div className="flex justify-between items-center">
							<div className="flex flex-col w-fit">
								<h1 className="text-2 ">{budget.category}</h1>
								<div
									className="h-1 rounded-2xl"
									style={{
										backgroundColor: `${budget.theme}`,
									}}
								></div>
							</div>
							<button
								className=" flex w-6 h-6 justify-center items-center"
								onClick={() => setOpenAllSpendngs(false)}
							>
								<ReactSVG
									src="/assets/images/icon-close-modal.svg"
									alt="close Modal"
									className="w-fit"
								/>
							</button>
						</div>
						<div className="flex flex-col gap-2">
							{allSpending.map((spend, index) => (
								<div
									key={index}
									className={`flex justify-between items-center  `}
								>
									<div className="flex items-center gap-2">
										<img
											src={spend.avatar}
											alt="Spending Avatar"
											className="w-6 h-6 md:w-8 md:h-8  rounded-full"
										/>
										<h5 className="text-5 bold text-grey-900">
											{spend.name}
										</h5>
									</div>
									<div className="flex flex-col text-right items-end gap-1">
										<p className="text-5 bold">
											{formatAmount(spend.amount)}
										</p>
										<p className="text-grey-500 text-5">
											{formatDate(spend.date)}
										</p>
									</div>
								</div>
							))}
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</div>
	);
};

export default LatestSpending;
