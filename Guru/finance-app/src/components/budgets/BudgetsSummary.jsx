import { PieChart } from "@mui/x-charts";
import React from "react";
import { useSelector } from "react-redux";
import { getBugetTotalSpending } from "../../utils/helpFunctions";
import PieChartBudgets from "./PieChartBudgets";

const BudgetsSummary = () => {
	const { budgets } = useSelector((state) => state.finance);

	return (
		<div className="py-6 px-5 md:p-8 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8 lg:flex-col">
			{/* Spending Circle */}
			<PieChartBudgets />
			<div className="w-full flex flex-col gap-6">
				<h2 className="text-2 text-left">Spending Summary </h2>
				<div className="flex flex-col w-full gap-4">
					{budgets.map((budget) => (
						<React.Fragment key={budget.category}>
							<div className="relative flex justify-between items-center pl-5">
								<p className="text-4 text-grey-500">
									{budget.category}
								</p>
								<p className="text-5 text-grey-500 flex items-center gap-2">
									<span className="text-3 text-grey-900">
										${budget.totalSpending.toFixed(2)}
									</span>{" "}
									<span>of ${budget.maximum.toFixed(2)}</span>
								</p>
								<div
									style={{
										backgroundColor: `${budget.theme}`,
									}}
									className={`rounded-8 w-1 h-full absolute left-0 top-0`}
								></div>
							</div>
							<hr className="w-full h-[1px] border-grey-500/15" />
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default BudgetsSummary;
