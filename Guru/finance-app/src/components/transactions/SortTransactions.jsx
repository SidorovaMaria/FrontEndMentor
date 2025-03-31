import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setFilter, setSearch } from "../../features/financeSlice";
import { ReactSVG } from "react-svg";

import Sort from "../Sort";
import Filter from "../Filter";
const SortTransactions = () => {
	const { search } = useSelector((state) => state.finance);
	const dispatch = useDispatch();

	return (
		<div
			className="
    flex gap-6 items-center justify-between"
		>
			{/* Search Container */}
			<div className="flex items-center justify-between py-3 px-5 border border-beige-500 rounded-8 gap-4 has-focus:border-grey-900 text-4 z-10 ">
				<input
					type="text"
					id="search"
					value={search}
					onChange={(e) => dispatch(setSearch(e.target.value))}
					placeholder="Search transaction"
					className="outline-none placeholder:text-beige-500 w-[143px] md:w-[90px] md:max-w-[90px] lg:max-w-[250px] lg:w-[250px] placeholder:whitespace-nowrap placeholder:overflow-hidden placeholder:text-ellipsis truncate"
				/>
				<div className="flex items-center justify-center w-4 h-4">
					<ReactSVG
						src="/assets/images/icon-search.svg"
						className="fill-grey-900"
					/>
				</div>
			</div>
			{/* Sort & Filter */}
			<div className="flex items-center justify-center gap-6 ">
				<Sort />
				<Filter />
			</div>
		</div>
	);
};

export default SortTransactions;
