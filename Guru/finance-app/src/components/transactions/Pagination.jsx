import React from "react";
import { ReactSVG } from "react-svg";

const Pagination = ({ page, count, handleChange }) => {
	let mobilePagination = [];
	if (count <= 4) {
		mobilePagination = Array.from(
			{ length: count },
			(_, index) => index + 1
		);
	} else {
		if (page === 1 || page === 2) {
			mobilePagination = [1, 2, "...", count];
		} else if (page === count) {
			mobilePagination = ["...", count - 2, count - 1, count];
		} else if (page === count - 1) {
			mobilePagination = ["...", count - 2, count - 1, count];
		} else {
			mobilePagination = ["...", page - 1, page, page + 1, "..."];
		}
	}
	const handlePageChange = (value, index) => {
		if ((page === 1 || page === 2) && value === "...") {
			handleChange(3);
		} else if (page === 3 && value === "..." && index == 0) {
			handleChange(1);
		} else if (page === 3 && value === "..." && index == 4) {
			handleChange(5);
		} else if ((page === 5 || page === 4) && value === "...") {
			handleChange(2);
		} else {
			handleChange(value);
		}
	};

	return (
		<div className="flex items-center justify-between w-full gap-[11px] mt-6">
			<button
				className="h-10 rounded-8 border border-beige-500 w-full flex items-center justify-center group not-disabled:hover:bg-beige-500 disabled:opacity-50 max-w-[48px] md:max-w-[98px] md:gap-4"
				onClick={() => handleChange(page - 1)}
				disabled={page === 1}
			>
				<div className="flex items-center justify-center w-4 h-4">
					<ReactSVG
						src="/assets/images/icon-caret-left.svg"
						className="fill-grey-500 group-not-disabled:group-hover:fill-white"
					/>
				</div>
				<p className="hidden text-4 md:block group-not-disabled:group-hover:text-white ">
					Prev
				</p>
			</button>

			<div className="flex gap-2 ">
				{mobilePagination.map((num, index) => (
					<button
						className={`flex justify-center items-center w-10 h-10  rounded-8 text-4 ${
							num === page
								? "bg-grey-900 text-white"
								: "not-disabled:hover:bg-beige-500 not-disabled:hover:text-white"
						}`}
						key={index}
						// disabled={num === "..."}
						onClick={() => handlePageChange(num, index)}
					>
						{num}
					</button>
				))}
			</div>

			<button
				className="h-10 rounded-8 border border-beige-500 w-full flex items-center justify-center group not-disabled:hover:bg-beige-500 disabled:opacity-50 max-w-[48px] md:max-w-[98px] md:gap-4"
				onClick={() => handleChange(page + 1)}
				disabled={page === count}
			>
				<p className="hidden text-4 md:block group-not-disabled:group-hover:text-white ">
					Next
				</p>
				<div className="flex items-center justify-center w-4 h-4">
					<ReactSVG
						src="/assets/images/icon-caret-right.svg"
						className="fill-grey-500 group-not-disabled:group-hover:fill-white"
					/>
				</div>
			</button>
		</div>
	);
};

export default Pagination;
