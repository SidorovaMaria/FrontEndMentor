import React from "react";
import { motion } from "motion/react";
import LatestSpending from "./LatestSpending";
import DeleteEditOption from "./DeleteEditOption";

const BudgetBreakdown = ({ budget }) => {
	return (
		<div className="my-6 mx-5 flex flex-col gap-5 md:m-8 md:gap-6 ">
			{/* Category Title */}
			<div className="flex items-center gap-4">
				<div
					className="w-4 h-4 rounded-full"
					style={{ backgroundColor: `${budget.theme}` }}
				></div>
				<p className="text-2">{budget.category}</p>
				<DeleteEditOption budget={budget} />
			</div>

			{/* Breakdown */}
			<div className="flex flex-col gap-4 ">
				<p className="text-4 text-grey-500">
					Maximum of ${budget.maximum.toFixed(2)}
				</p>
				<div className="relative w-full h-6 -z-10 bg-gray-200 rounded-[4px] overflow-hidden">
					<motion.div
						className="h-full rounded-[4px]"
						initial={{ width: "0%" }}
						animate={{
							width: `${
								(budget.totalSpending / budget.maximum) * 100
							}%`,
						}}
						transition={{ duration: 1, ease: "easeInOut" }}
						style={{ backgroundColor: budget.theme }}
					/>
				</div>
				<div className="grid grid-cols-2 relative gap-x-4">
					<div className="flex flex-col gap-1 items-start pl-4">
						<p className="text-5 text-grey-500">Spent</p>
						<p className="text-4 bold text-grey-900">
							${budget.totalSpending.toFixed(2)}
						</p>
					</div>
					<div className="flex flex-col gap-1 items-start pl-4">
						<p className="text-5 text-grey-500">
							{budget.maximum > budget.totalSpending
								? "Remaining"
								: "Over Budget"}
						</p>
						<p className="text-4 bold text-grey-900">
							{(budget.maximum - budget.totalSpending).toFixed(2)}
						</p>
						<div
							className="absolute h-full w-1 left-0 top-0"
							style={{
								backgroundColor: `${budget.theme}`,
							}}
						></div>
					</div>
				</div>
			</div>
			<LatestSpending budget={budget} />
		</div>
	);
};

export default BudgetBreakdown;
