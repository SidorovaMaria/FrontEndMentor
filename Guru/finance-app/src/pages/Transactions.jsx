import React, { useEffect, useState } from "react";
import SortTransactions from "../components/transactions/SortTransactions";
import AllTransactions from "../components/transactions/AllTransactions";
import { useSelector } from "react-redux";
import Pagination from "../components/transactions/Pagination";

const Transactions = () => {
	const filteredTransactions = useSelector(
		(state) => state.finance.filteredTransactions
	);
	const [page, setPage] = useState(1);
	const itemsPerPage = 10;
	const pageCount = Math.ceil(filteredTransactions.length / itemsPerPage);
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentTransactions = filteredTransactions.slice(
		startIndex,
		endIndex
	);
	const handlePageChange = (value) => {
		setPage(value);
	};
	useEffect(() => {
		setPage(1);
	}, [filteredTransactions]);

	return (
		<main className="screen-layout flex flex-col gap-8 ">
			{/* Header */}
			<header>
				<h1 className="text-1">Transactions</h1>
			</header>
			<section className="flex flex-col gap-6 my-6 mx-5">
				{/* Sorting */}
				<SortTransactions />
				<AllTransactions transactions={currentTransactions} />
				<Pagination
					page={page}
					count={pageCount}
					handleChange={handlePageChange}
				/>
			</section>
		</main>
	);
};

export default Transactions;
