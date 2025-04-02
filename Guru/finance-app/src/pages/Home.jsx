import React from "react";
import { useSelector } from "react-redux";
import {
	formatAmount,
	formatCurrency,
	formatDate,
	getTotalSavedinPots,
} from "../utils/helpFunctions";
import { ReactSVG } from "react-svg";
import { Link } from "react-router";
import BudgetsSummary from "../components/budgets/BudgetsSummary";
import PieChartBudgets from "../components/budgets/PieChartBudgets";

const Home = () => {
	const finance = useSelector((state) => state.finance);
	return (
		<main className="screen-layout space-y-8 bg-beige-100">
			{/* Header */}
			<header className="">
				<h1 className="text-1">Overview</h1>
			</header>

			{/* Balance & Income & Expenses */}
			<section className="space-y-3 md:flex md:gap-6 items-center md:space-y-0 ">
				{/* Current Balance */}
				<div className="bg-grey-900 p-5 text-white rounded-12 space-y-3 w-full">
					<p className="text-4">Current Balance</p>
					<p className="text-1">
						{formatCurrency(finance.currentBalance)}
					</p>
				</div>
				{/* Income */}
				<div className="bg-white p-5 text-grey-900 rounded-12 space-y-3 w-full">
					<p className="text-4 text-grey-500">Income</p>
					<p className="text-1">
						{formatCurrency(finance.incomeBalance)}
					</p>
				</div>
				{/* Expenses */}
				<div className="bg-white p-5 text-grey-900 rounded-12 space-y-3 w-full">
					<p className="text-4 text-grey-500">Expenses</p>
					<p className="text-1">{formatCurrency(finance.expenses)}</p>
				</div>
			</section>
			{/* Glance */}
			<div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-7 lg:gap-6 ">
				{/* Pots */}
				<section className="py-6 px-5 space-y-5 lg:[grid-area:1/1/3/2]  lg:place-content-center lg:h-fit">
					{/* Title */}
					<div className="flex justify-between items-center">
						<h2 className="text-2">Pots</h2>
						<Link
							to="/pots"
							className="group flex gap-3 items-center"
						>
							<p className="text-4 text-grey-500 group-hover:text-grey-900">
								See Details
							</p>
							<ReactSVG
								src="../../public/assets/images/icon-caret-right.svg"
								className="fill-grey-500 group-hover:text-grey-900"
								alt="Caret Right"
							/>
						</Link>
					</div>

					<div className="space-y-5 md:flex md:gap-5 md:space-y-0 lg:h-fit">
						{/* Total Saved */}
						<div className="bg-beige-100 rounded-12 p-4 flex gap-4 items-center justify-start md:w-full  ">
							<div className="w-10 h-10 flex items-center justify-center">
								<ReactSVG
									src="../../public/assets/images/icon-pot.svg"
									alt="pot icon"
								/>
							</div>
							<div>
								<p className="text-grey-500 text-4">
									Total Saved
								</p>
								<p className="text-1 text-grey-900">
									${getTotalSavedinPots(finance.pots)}
								</p>
							</div>
						</div>
						{/* Saved Breakdown */}
						<div className="grid grid-cols-2 gap-y-4 gap-x-4 md:w-full ">
							{finance.pots.slice(0, 4).map((pot) => (
								<div
									key={pot.name}
									className="pl-4 relative space-y-1"
								>
									<p className="text-5 text-grey-500 ">
										{pot.name}
									</p>
									<p className="text-4 bold">${pot.total}</p>
									<div
										className="h-full w-1 absolute left-0 top-0 rounded-8"
										style={{ backgroundColor: pot.theme }}
									></div>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* Transactions */}
				<section className="py-6 px-5 space-y-8 lg:[grid-area:3/1/8/2]   lg:place-content-center ">
					{/* Title */}
					<div className="flex justify-between items-center">
						<h2 className="text-2">Transactions</h2>
						<Link
							to="/transactions"
							className="group flex gap-3 items-center"
						>
							<p className="text-4 text-grey-500 group-hover:text-grey-900">
								View All
							</p>
							<ReactSVG
								src="/assets/images/icon-caret-right.svg"
								className="fill-grey-500 group-hover:text-grey-900"
								alt="Caret Right"
							/>
						</Link>
					</div>
					<div className="space-y-10">
						{finance.transactions
							.slice(0, 5)
							.map((transaction, index) => (
								<div
									key={index}
									className="flex justify-between items-center"
								>
									<div className="flex gap-4 items-center">
										<img
											src={transaction.avatar}
											alt="Avatar"
											className="w-8 h-8 rounded-full"
										/>
										<p className="text-4 bold">
											{transaction.name}
										</p>
									</div>
									<div className="text-right space-y-2">
										<h4
											className={`text-4 bold text-right ${
												transaction.amount < 0
													? "text-grey-900"
													: "text-secondary-green"
											}`}
										>
											{formatAmount(transaction.amount)}
										</h4>
										<p className="text-5 text-grey-500">
											{formatDate(transaction.date)}
										</p>
									</div>
								</div>
							))}
					</div>
				</section>
				{/* Budgets */}
				<section className="py-6 px-5 space-y-5 lg:[grid-area:1/2/5/3] lg:h-fit">
					{/* Title */}
					<div className="flex justify-between items-center ">
						<h2 className="text-2">Budgets</h2>
						<Link
							to="/budgets"
							className="group flex gap-3 items-center"
						>
							<p className="text-4 text-grey-500 group-hover:text-grey-900">
								See Details
							</p>
							<ReactSVG
								src="/assets/images/icon-caret-right.svg"
								className="fill-grey-500 group-hover:text-grey-900"
								alt="Caret Right"
							/>
						</Link>
					</div>
					<div className="space-y-5 py-2 md:grid md:grid-cols-[4fr_1fr] items-center md:space-y-0">
						{/* Spending Circle */}
						<div className="flex justify-center items-center">
							<PieChartBudgets />
						</div>
						<div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-1 md:my-10">
							{finance.budgets.slice(0, 4).map((budget) => (
								<div
									key={budget.category}
									className="pl-5 relative space-y-1"
								>
									<p className="text-5 text-grey-500 ">
										{budget.category}
									</p>
									<p className="text-4 bold">
										${budget.totalSpending}
									</p>
									<div
										className="h-full w-1 absolute left-0 top-0 rounded-8"
										style={{
											backgroundColor: budget.theme,
										}}
									></div>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* Recurring Bills */}
				<section className="py-6 px-5 space-y-8 lg:[grid-area:5/2/8/3]">
					{/* title */}
					<div className="flex justify-between items-center">
						<h2 className="text-2">Recurring Bills</h2>
						<Link
							to="/recurring-bills"
							className="group flex gap-3 items-center"
						>
							<p className="text-4 text-grey-500 group-hover:text-grey-900">
								See Details
							</p>
							<ReactSVG
								src="/assets/images/icon-caret-right.svg"
								className="fill-grey-500 group-hover:text-grey-900"
								alt="Caret Right"
							/>
						</Link>
					</div>
					<div className="space-y-3">
						<div className="flex justify-between py-5 px-4 bg-beige-100 border-l-[4px] border-l-secondary-green rounded-8">
							<p className="text-4 text-grey-500">Paid Bills</p>
							<p className="text-4 bold">
								$
								{Math.abs(
									finance.paidBills.reduce(
										(total, bill) => total + bill.amount,
										0
									)
								).toFixed(2)}
							</p>
						</div>
						<div className="flex justify-between py-5 px-4 bg-beige-100 border-l-[4px] border-l-secondry-yellow rounded-8">
							<p className="text-4 text-grey-500">
								Total Upcoming
							</p>
							<p className="text-4 bold">
								$
								{Math.abs(
									finance.unPaidBills.reduce(
										(total, bill) => total + bill.amount,
										0
									)
								).toFixed(2)}
							</p>
						</div>
						<div className="flex justify-between py-5 px-4 bg-beige-100 border-l-[4px] border-l-secondary-cyan rounded-8">
							<p className="text-4 text-grey-500">Due Soon</p>
							<p className="text-4 bold">
								$
								{Math.abs(
									finance.dueSoonBills.reduce(
										(total, bill) => total + bill.amount,
										0
									)
								).toFixed(2)}
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
