import React from "react";
import BudgetsSummary from "../components/budgets/BudgetsSummary";
import BudgetBreakdown from "../components/budgets/BudgetBreakdown";
import { useSelector } from "react-redux";

const Budgets = () => {
	const { budgets } = useSelector((state) => state.finance);
	return (
		<main className="screen-layout ">
			{/* Header */}
			<header className="flex justify-between items-center">
				<h1 className="text-1">Budgets</h1>
				<button className="btn-primary text-4 bold">
					+ Add New Budget
				</button>
			</header>
			<section className="flex flex-col gap-6">
				<BudgetsSummary />
				<div className="flex flex-col gap-6">
					{budgets.map((budget) => (
						<BudgetBreakdown
							budget={budget}
							key={budget.category}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Budgets;
