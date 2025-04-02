import React from "react";
import { ReactSVG } from "react-svg";

const Search = ({ search, setSearch }) => {
	return (
		<div className="flex items-center justify-between py-3 px-5 border w-full md:w-[320px]  border-beige-500 rounded-8 gap-4 has-focus:border-grey-900 text-4 z-10 ">
			<input
				type="text"
				id="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search bills"
				className="outline-none placeholder:text-beige-500 lg:max-w-[250px] lg:w-[250px] placeholder:whitespace-nowrap placeholder:overflow-hidden placeholder:text-ellipsis truncate"
			/>
			<div className="flex items-center justify-center w-4 h-4">
				<ReactSVG
					src="/assets/images/icon-search.svg"
					className="fill-grey-900"
				/>
			</div>
		</div>
	);
};

export default Search;
