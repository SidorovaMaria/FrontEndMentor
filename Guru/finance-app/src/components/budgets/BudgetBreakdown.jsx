import React from "react";
import LatestSpending from "./LatestSpending";

const BudgetBreakdown = ({ budget }) => {
	return (
		<div className="my-6 mx-5 flex flex-col gap-5 ">
			{/* Category Title */}
			<div className="flex items-center gap-4">
				<div
					className="w-4 h-4 rounded-full"
					style={{ backgroundColor: `${budget.theme}` }}
				></div>
				<p className="text-2">{budget.category}</p>
				<div className="w-4 h-4 flex justify-center items-center group ml-auto relative"></div>
			</div>

			{/* Breakdown */}
			<div className="flex flex-col gap-4 ">
				<p className="text-4 text-grey-500">
					Maximum of ${budget.maximum.toFixed(2)}
				</p>
				<progress
					className="w-full rounded-[4px] appearance-none "
					id="progress-bar"
					value={budget.totalSpending}
					max={budget.maximum}
					style={{ "--progress-color": budget.theme }}
				></progress>
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
