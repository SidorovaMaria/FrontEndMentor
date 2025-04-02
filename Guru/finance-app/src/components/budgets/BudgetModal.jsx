import React, { useEffect, useMemo, useState } from "react";
import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import { ReactSVG } from "react-svg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { categories, themes } from "../../data/appData";
import { getBudgetsCategories, getAllThemes } from "../../utils/helpFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addBudget, editBudget } from "../../features/financeSlice";

const BudgetModal = ({ mode, budget, isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	const budgets = useSelector((state) => state.finance.budgets);
	// Used Catgeories and Themes
	const allBudgets = useMemo(() => getBudgetsCategories(budgets), [budgets]);
	const allThemes = useMemo(() => getAllThemes(budgets), [budgets]);
	const availableCategories = useMemo(
		() => categories.filter((cat) => !allBudgets.includes(cat)),
		[allBudgets]
	);
	const budgetedCategories = useMemo(
		() => categories.filter((cat) => allBudgets.includes(cat)),
		[allBudgets]
	);

	const availableThemes = useMemo(
		() =>
			themes.filter(
				(theme) =>
					!allThemes.includes(theme.hex) ||
					theme.hex === budget?.theme
			),
		[allThemes, budget?.theme]
	);
	const budgetedThemes = useMemo(
		() =>
			themes.filter(
				(theme) =>
					allThemes.includes(theme.hex) && theme.hex !== budget?.theme
			),
		[allThemes, budget?.theme]
	);

	const formik = useFormik({
		initialValues: {
			category: budget?.category || "",
			maxSpend: budget?.maximum ? budget.maximum.toFixed(2) : "",
			theme: budget?.theme || "",
		},
		validationSchema: Yup.object({
			category: Yup.string().required("Category is required!"),
			maxSpend: Yup.number()
				.positive("Must be a positive number!")
				.required("Value is required!"),
			theme: Yup.string().required("Theme is required!"),
		}),
		onSubmit: (values) => {
			const payload = {
				category: values.category,
				maximum: parseFloat(values.maxSpend),
				theme: values.theme,
			};
			dispatch(
				mode === "edit" ? editBudget(payload) : addBudget(payload)
			);
			setIsOpen(false);
		},
	});
	const selectedThemeObj = useMemo(
		() => themes.find((theme) => theme.hex === formik.values.theme) || {},
		[formik.values.theme]
	);

	const displayName = selectedThemeObj.name || "";

	useEffect(() => {
		if (isOpen) {
			formik.resetForm();
		}
	}, [isOpen]);

	return (
		<div>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<DialogBackdrop className="fixed inset-0 bg-black/50" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					{/* The actual dialog panel  */}
					<DialogPanel className="bg-white w-full mx-5 rounded-[12px] md:w-[560px] md:mx-auto px-5 py-6 md:p-8 flex flex-col gap-5">
						{/* Header */}
						<div className="flex justify-between items-center">
							<h2 className="text-2 md:text-[32px]">
								{mode === "edit"
									? "Edit Budget"
									: "Add New Budget"}
							</h2>
							<ReactSVG
								src="/assets/images/icon-close-modal.svg"
								className="fill-grey-500 ml-auto hover:fill-grey-900 cursor-pointer"
								onClick={() => setIsOpen(false)}
							/>
						</div>
						{/* Description */}
						<p className="text-grey-500 text-4">
							{mode === "edit"
								? "As your budgets change, feel free to update your spending limits."
								: "Choose a category to set a spending budget. These categories can help you monitor spending."}
						</p>
						{/* Form */}
						<form
							onSubmit={formik.handleSubmit}
							className="space-y-5"
						>
							<div className="flex flex-col gap-4">
								{/* Category ListBox */}
								<div>
									<label className="text-5 bold text-grey-500">
										Budget Category
									</label>
									<Listbox
										value={formik.values.category}
										onChange={(value) => {
											formik.setFieldValue(
												"category",
												value
											);
										}}
										disabled={mode === "edit"}
									>
										<div
											className={`relative mt-1 ${
												mode === "edit"
													? "text-grey-500"
													: "text-grey-900"
											}`}
										>
											<ListboxButton className=" w-full py-3 px-5 border border-grey-500 rounded-8 flex items-center justify-between">
												<p className="text-4 ">
													{formik.values.category}
												</p>
												<div className="w-4 h-4 flex justify-center items-center">
													<ReactSVG
														src="/assets/images/icon-caret-down.svg"
														alt="Caret Down"
														className={`transition-transform duration-300${
															mode === "edit"
																? " fill-grey-500"
																: "fill-grey-900"
														}`}
													/>
												</div>
											</ListboxButton>
											<ListboxOptions className="absolute top-[60px] w-full drop-shadow rounded-8 max-h-[300px] overflow-y-auto bg-white z-10 origin-top transition duration-200 ease-out">
												{availableCategories.map(
													(value) => (
														<ListboxOption
															key={value}
															value={value}
															as="div"
															className={`py-3 px-5 text-4 cursor-pointer ${
																formik.values
																	.category ===
																value
																	? "font-bold"
																	: ""
															}`}
														>
															{value}
														</ListboxOption>
													)
												)}
												{budgetedCategories.map(
													(value) => (
														<ListboxOption
															key={value}
															value={value}
															disabled
															as="div"
															className={`py-3 px-5 text-4 cursor-not-allowed justify-between w-full flex text-grey-500 `}
														>
															<p>{value}</p>
															<p>Already Used</p>
														</ListboxOption>
													)
												)}
											</ListboxOptions>
										</div>
									</Listbox>
									{formik.touched.category &&
										formik.errors.category && (
											<p className="text-5 bold text-secondary-red pl-1 pt-1">
												{formik.errors.category}
											</p>
										)}
								</div>
								{/* Maximum Spend */}
								<div>
									<label className="text-5 bold text-grey-500">
										Maximum Spend
									</label>
									<div className="relative">
										{/* Dollar sign prefix */}
										<span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey-500">
											$
										</span>
										<input
											type="number"
											name="maxSpend"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.maxSpend}
											className="w-full pl-10 pr-5 py-3 border border-grey-500 rounded-8 appearance-none outline-none focus-border-grey-900 text-4"
											onWheel={(e) => e.target.blur()}
										/>
									</div>
									{formik.touched.maxSpend &&
										formik.errors.maxSpend && (
											<p className="text-5 bold text-secondary-red pl-1 pt-1">
												{formik.errors.maxSpend}
											</p>
										)}
								</div>
								{/* Theme ListBox */}
								<div>
									<label className="text-5 bold text-grey-500">
										Theme
									</label>
									<Listbox
										value={formik.values.theme}
										onChange={(value) => {
											formik.setFieldValue(
												"theme",
												value
											);
										}}
									>
										<div className="relative mt-1">
											<ListboxButton className=" w-full py-3 px-5 border border-grey-500 rounded-8 flex items-center justify-between cursor-pointer">
												<div className="flex gap-3 items-center ">
													<div
														className="w-4 h-4 rounded-full"
														style={{
															backgroundColor: `${formik.values.theme}`,
														}}
													></div>
													<p className="text-4">
														{displayName}
													</p>
												</div>
												<div className="w-4 h-4 flex justify-center items-center">
													<ReactSVG
														src="/assets/images/icon-caret-down.svg"
														alt="Caret Down"
														className={`transition-transform duration-300 fill-grey-900 `}
													/>
												</div>
											</ListboxButton>
											<ListboxOptions className="absolute top-[60px] w-full drop-shadow rounded-8 max-h-[200px] overflow-y-auto bg-white z-10 origin-top transition duration-200 ease-out">
												{availableThemes.map(
													(value) => (
														<ListboxOption
															key={value.name}
															value={value.hex}
															as="div"
															className={`flex gap-3 items-center py-3 px-5 text-4 cursor-pointer hover:bg-grey-300 `}
														>
															<div
																className="w-4 h-4 rounded-full"
																style={{
																	backgroundColor: `${value.hex}`,
																}}
															></div>
															<p className="text-4">
																{value.name}
															</p>
														</ListboxOption>
													)
												)}
												{budgetedThemes.map((value) => (
													<ListboxOption
														key={value.name}
														value={value.hex}
														as="div"
														disabled
														className={`flex gap-3 items-center py-3 px-5 text-4  text-grey-500 justify-between cursor-not-allowed`}
													>
														<div className="flex gap-3 items-center ">
															<div
																className="w-4 h-4 rounded-full"
																style={{
																	backgroundColor: `${value.hex}`,
																}}
															></div>
															<p className="text-4">
																{value.name}
															</p>
														</div>
														<p>Already Used</p>
													</ListboxOption>
												))}
											</ListboxOptions>
										</div>
									</Listbox>
									{formik.touched.theme &&
										formik.errors.theme && (
											<p className="text-5 bold text-secondary-red pl-1 pt-1">
												{formik.errors.theme}
											</p>
										)}
								</div>
							</div>
							<button
								className="btn-primary w-full  text-4 bold"
								type="submit"
							>
								{mode === "edit"
									? "Save Changes"
									: "Add Budget"}
							</button>
						</form>
					</DialogPanel>
				</div>
			</Dialog>
		</div>
	);
};

export default BudgetModal;
