import React from "react";
import { formatAmount, formatDate } from "../../utils/helpFunctions";

const AllTransactions = ({ transactions }) => {
	return (
		<div>
			{/* Mobile View */}
			<div className="flex flex-col gap-[33px] md:hidden">
				{transactions.map((transaction, index) => (
					<div
						key={index}
						className="flex items-center justify-between "
					>
						<div className="flex items-center gap-3">
							<img
								src={transaction.avatar}
								alt="Avatar"
								className="w-8 h-8 rounded-full"
							/>
							<div className="flex flex-col gap-1">
								<h4 className="text-4 bold">
									{transaction.name}
								</h4>
								<p className="text-5 text-grey-500">
									{transaction.category}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-1 items-end ">
							<h4
								className={`text-4 bold ${
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
			{/* Tablet & Desktop View */}
			<div className="hidden md:flex  flex-col gap-6">
				<div className="grid grid-cols-[5fr_2fr_2fr_3fr] items-center text-left gap-x-8 py-3 text-5 text-grey-500">
					<p>Recipient / Sender</p>
					<p>Category</p>
					<p className="text-left">Transaction Date</p>
					<p className="text-right">Amount</p>
				</div>
				<div className="w-full flex flex-col gap-8">
					{transactions.map((transaction, index) => (
						<div
							className="grid grid-cols-[5fr_2fr_2fr_3fr] items-center gap-x-8 "
							key={index}
						>
							<div className="w-full flex gap-4 items-center">
								<img
									src={transaction.avatar}
									alt="Avatar"
									className="w-10 h-10 rounded-full"
								/>
								<h4 className="text-4 bold">
									{transaction.name}
								</h4>
							</div>
							<p className="text-5 text-grey-500 text-left">
								{transaction.category}
							</p>
							<p className="text-5 text-grey-500">
								{formatDate(transaction.date)}
							</p>
							<h4
								className={`text-4 bold text-right ${
									transaction.amount < 0
										? "text-grey-900"
										: "text-secondary-green"
								}`}
							>
								{formatAmount(transaction.amount)}
							</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllTransactions;
