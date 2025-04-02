import React, { useState } from "react";
import BudgetsSummary from "../components/budgets/BudgetsSummary";
import BudgetBreakdown from "../components/budgets/BudgetBreakdown";
import { useSelector } from "react-redux";
import BudgetModal from "../components/budgets/BudgetModal";

const Budgets = () => {
	const { budgets } = useSelector((state) => state.finance);
	const [openAddBudget, setOpenAddBudget] = useState(false);
	const closeAddModal = () => {
		setOpenAddBudget(false);
	};
	return (
		<main className="screen-layout ">
			{/* Header */}
			<header className="flex justify-between items-center">
				<h1 className="text-1">Budgets</h1>
				<button
					className="btn-primary text-4 bold"
					onClick={() => setOpenAddBudget(true)}
				>
					+ Add New Budget
				</button>
			</header>
			<section className="flex flex-col gap-6 md:flex-row md:gap-6 items-start my-8">
				<BudgetsSummary />
				<div className="flex flex-col gap-6 lg:w-full ">
					{budgets.map((budget) => (
						<BudgetBreakdown
							budget={budget}
							key={budget.category}
						/>
					))}
				</div>
				<BudgetModal
					mode={"add"}
					budget={null}
					isOpen={openAddBudget}
					setIsOpen={closeAddModal}
				/>
			</section>
		</main>
	);
};

export default Budgets;
