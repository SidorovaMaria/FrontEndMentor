import {
	Field,
	Label,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { sortFilters } from "../data/appData";
import { AnimatePresence, motion } from "motion/react";
import { setFilter } from "../features/financeSlice";
const Sort = () => {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.finance.filter);
	const handleSortChange = (sort) => {
		dispatch(setFilter(sort));
	};

	return (
		<>
			{/* Mobie Sort  */}
			<Menu as="div" className="relative md:hidden">
				{({ open }) => (
					<>
						<MenuButton className="flex items-center justify-center w-5 h-5">
							<ReactSVG
								src="/assets/images/icon-sort-mobile.svg"
								className=""
								aria-label="Sort Options"
							/>
						</MenuButton>
						<AnimatePresence>
							{open && (
								<MenuItems
									className="absolute items-start drop-shadow  flex flex-col rounded-8 right-1/4 max-h-[300px] overflow-y-auto w-[114px] top-[40px] bg-white"
									as={motion.div}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{
										duration: 0.8,
										ease: "easeOut",
									}}
								>
									<p className="text-grey-500 text-4 py-3 px-5 ">
										Sort By
									</p>
									{sortFilters.map((sort) => (
										<MenuItem
											key={sort}
											as="div"
											className="hover:bg-grey-300 w-full py-3 px-5 rounded-sm hover:font-semibold"
										>
											<button
												className={`text-4 w-full text-left ${
													sort === filter
														? "font-bold"
														: ""
												}`}
												onClick={() =>
													handleSortChange(sort)
												}
											>
												{sort}
											</button>
										</MenuItem>
									))}
								</MenuItems>
							)}
						</AnimatePresence>
					</>
				)}
			</Menu>
			{/* Desktop & Tablet Sort  */}
			<Field className={`hidden md:flex items-center gap-2  `}>
				<Label className="text-4 text-grey-500 ">Sort By</Label>
				<Listbox
					as="div"
					value={filter}
					onChange={(value) => dispatch(setFilter(value))}
					className="relative w-[113px]"
				>
					{({ open }) => (
						<>
							<ListboxButton className="py-3 pl-5 pr-4 border border-grey-500 hover:border-grey-900 rounded-8 flex items-center gap-4 w-full justify-between text-4">
								{filter}
								<div className="w-4 h-4 flex justify-center items-center">
									<ReactSVG
										src="/assets/images/icon-caret-down.svg"
										alt="Caret Down"
										className={`${
											open ? "rotate-180" : ""
										} transition-transform duration-300`}
									/>
								</div>
							</ListboxButton>
							<AnimatePresence>
								<ListboxOptions
									className="absolute top-[60px] w-full drop-shadow rounded-8 max-h-[275px] overflow-y-auto bg-white z-10 origin-top transition duration-200 ease-out"
									as={motion.div}
									initial={{
										opacity: 0,
										y: -40,
										scaleY: 0.5,
									}}
									animate={{
										opacity: 1,
										y: 0,
										scaleY: 1,
									}}
									exit={{
										opacity: 0,
										y: -40,
										scaleY: 0.5,
									}}
									transition={{
										duration: 0.8,
										ease: "easeOut",
									}}
								>
									{sortFilters.map((value) => (
										<ListboxOption
											key={value}
											value={value}
											as="div"
											className={`py-3 px-5 text-4 cursor-pointer ${
												filter === value
													? "font-bold"
													: ""
											}`}
										>
											{value}
										</ListboxOption>
									))}
								</ListboxOptions>
							</AnimatePresence>
						</>
					)}
				</Listbox>
			</Field>
		</>
	);
};

export default Sort;
