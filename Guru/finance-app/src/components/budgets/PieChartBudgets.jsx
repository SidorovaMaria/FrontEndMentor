import { PieChart } from "@mui/x-charts";
import React from "react";
import { useSelector } from "react-redux";
import { getBugetTotalSpending } from "../../utils/helpFunctions";

const PieChartBudgets = () => {
	const { budgets, maxBudget } = useSelector((state) => state.finance);
	const spendingData = budgets.map((budget) => ({
		value: budget.totalSpending,
		color: budget.theme,
	}));
	return (
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
					${getBugetTotalSpending(budgets).toFixed(2)}
				</h2>
				<p className="text-5 text-grey-500">of ${maxBudget} limit</p>
			</div>
		</div>
	);
};

export default PieChartBudgets;
