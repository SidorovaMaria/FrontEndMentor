import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import {
	formatAmount,
	getOrdinalSuffix,
	getTotalBillForRecurring,
	getTotalBills,
	sortRecuringByfFilter,
} from "../utils/helpFunctions";
import Search from "../recurring/Search";
import RecurringSort from "../recurring/RecurringSort";
import { updateRecurringBills } from "../features/financeSlice";

const Reccuring = () => {
	const dispatch = useDispatch();
	const {
		allRecuringTransactions,
		paidBills,
		unPaidBills,
		dueSoonBills,
		dayToday,
	} = useSelector((state) => state.finance);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("Latest");
	const sortedTransactions = sortRecuringByfFilter(
		allRecuringTransactions,
		filter
	);
	const totalBills = sortedTransactions.reduce(
		(acc, bill) => acc + bill.amount,
		0
	);

	const filteredTransactions = sortedTransactions.filter((transaction) =>
		transaction.name.toLowerCase().includes(search.toLowerCase())
	);
	useEffect(() => {
		dispatch(updateRecurringBills());
	}, [allRecuringTransactions, dispatch]);

	return (
		<main className="screen-layout ">
			{/* Header */}
			<header className="py-2">
				<h1 className="text-1">Recurring Bills</h1>
			</header>
			<section className="py-8 space-y-6 md:space-y-0 md:grid lg:grid-cols-3 lg:items-start lg:gap-6">
				<div className="space-y-3 md:space-y-0 md:gap-6">
					<div className="bg-grey-900 rounded-12 py-6 px-5 flex gap-5 items-center justify-start md:flex-col md:items-start md:justify-center lg:flex-col ">
						<div className="w-10 h-10 flex items-center justify-center">
							<ReactSVG
								src="../../public/assets/images/icon-recurring-bills.svg"
								className="fill-white"
								alt="Bills Icon"
							/>
						</div>
						<div className="space-y-3">
							<p className="text-white text-4">Total bills</p>
							<p className="text-1 text-white">
								${Math.abs(totalBills).toFixed(2)}
							</p>
						</div>
					</div>
					<div className="p-5 space-y-5">
						<h3 className="text-3 ">Summary</h3>
						<div className="flex flex-col gap-3 md:gap-4">
							<div className="flex justify-between">
								<p className="text-5 text-grey-500">
									Paid Bills
								</p>
								<p className=" text-5 bold">
									{paidBills.length}( $
									{Math.abs(getTotalBills(paidBills)).toFixed(
										2
									)}
									)
								</p>
							</div>
							<hr className="w-full h-[1px] border-[rgba(105,104,104,0.15)]"></hr>
							<div className="flex justify-between">
								<p className="text-5 text-grey-500">
									Total Upcoming
								</p>
								<p className=" text-5 bold">
									{unPaidBills.length}( $
									{Math.abs(
										getTotalBills(unPaidBills)
									).toFixed(2)}
									)
								</p>
							</div>
							<hr className="w-full h-[1px] border-[rgba(105,104,104,0.15)]"></hr>
							<div className="flex justify-between ">
								<p className="text-5 text-secondary-red">
									Due Soon
								</p>
								<p className=" text-5 bold text-secondary-red">
									{dueSoonBills.length}( $
									{Math.abs(
										getTotalBills(dueSoonBills)
									).toFixed(2)}
									)
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="py-6 px-5 space-y-6 lg:col-span-2">
					{/* Search  */}
					<div className="flex items-center gap-6 justify-between ">
						<Search search={search} setSearch={setSearch} />
						<RecurringSort filter={filter} setFilter={setFilter} />
					</div>
					<div className=" grid-cols-2 py-3 hidden md:grid">
						<p className="text-5 text-grey-500">Bill Title</p>
						<div className="flex justify-between items-center">
							<p className="text-5 text-grey-500">Due Date</p>
							<p className="text-5 text-grey-500">Amount</p>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						{filteredTransactions.map((bill, index) => {
							const day = new Date(bill.date).getUTCDate();

							return (
								<React.Fragment key={bill.name}>
									<div
										className={` ${
											index > 0
												? "border-t border-grey-100"
												: ""
										}`}
									>
										<div className="space-y-2 md:grid grid-cols-2">
											<div className="flex gap-4 items-center">
												<img
													src={bill.avatar}
													alt="avatar"
													className="w-8 h-8 rounded-full"
												/>
												<p className="text-4 bold">
													{bill.name}
												</p>
											</div>
											<div className="flex justify-between items-center ">
												<div className="flex gap-2 items-center">
													<p
														className={`text-5 text-grey-500 ${
															paidBills.includes(
																bill
															)
																? "text-secondary-green"
																: ""
														} ${
															dueSoonBills.includes(
																bill
															)
																? "text-secondary-red"
																: ""
														}`}
													>
														Monthly -{" "}
														{getOrdinalSuffix(day)}
													</p>
													{paidBills.includes(
														bill
													) && (
														<div className="flex justify-center items-center w-4 h-4">
															<ReactSVG
																src="../../public/assets/images/icon-bill-paid.svg"
																alt="sleected"
															/>
														</div>
													)}
													{dueSoonBills.includes(
														bill
													) && (
														<div className="flex justify-center items-center w-4 h-4">
															<ReactSVG
																src="../../public/assets/images/icon-bill-due.svg"
																alt="sleected"
															/>
														</div>
													)}
												</div>
												<p
													className={`text-4 bold ${
														paidBills.includes(bill)
															? "text-secondary-green"
															: ""
													} ${
														dueSoonBills.includes(
															bill
														)
															? "text-secondary-red"
															: ""
													}`}
												>
													$
													{Math.abs(
														bill.amount
													).toFixed(2)}
												</p>
											</div>
										</div>
									</div>
									<hr
										className={`border-grey-500/15 h-[1px] w-full ${
											index <
											filteredTransactions.length - 1
												? ""
												: "hidden"
										} `}
									/>
								</React.Fragment>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Reccuring;
