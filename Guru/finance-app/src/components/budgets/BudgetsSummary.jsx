import { PieChart } from "@mui/x-charts";
import React from "react";
import { useSelector } from "react-redux";
import { getBugetTotalSpending } from "../../utils/helpFunctions";

const BudgetsSummary = () => {
	const { budgets, maxBudget } = useSelector((state) => state.finance);
	const spendingData = budgets.map((budget) => ({
		value: budget.totalSpending,
		color: budget.theme,
	}));
	return (
		<div className="py-6 px-5 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8 lg:flex-col">
			{/* Spending Circle */}
			<div className="relative md:py-5 md:px-7 lg:px-[68px]">
				<PieChart
					width={240}
					height={240}
					series={[
						{
							data: spendingData,
							outerRadius: 120,
							innerRadius: 81,
							cx: 115,
							cy: 115,
						},
					]}
					sx={{
						"& .MuiPieArc-root": {
							stroke: "none",
							strokeWidth: 0,
						},
					}}
				/>
				<div className="absolute w-[187px] h-[187px] rounded-full bg-white/25 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-2">
					<h2 className="text-1 w-fit">
						${getBugetTotalSpending(budgets).toFixed(0)}
					</h2>
					<p className="text-5 text-grey-500">
						of ${maxBudget} limit
					</p>
				</div>
			</div>
			<div className="w-full flex flex-col gap-6">
				<h2 className="text-2 text-left">Spending Summary </h2>
				<div className="flex flex-col w-full gap-4">
					{budgets.map((budget) => (
						<div
							key={budget.category}
							className="relative flex justify-between items-center pl-5"
						>
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
								style={{ backgroundColor: `${budget.theme}` }}
								className={`rounded-8 w-1 h-full absolute left-0 top-0`}
							></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BudgetsSummary;
