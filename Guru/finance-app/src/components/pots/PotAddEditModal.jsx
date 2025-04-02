import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThemes } from "../../utils/helpFunctions";
import { themes } from "../../data/appData";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import { ReactSVG } from "react-svg";
import { addPot, editPot } from "../../features/financeSlice";

const PotAddEditModal = ({ mode, pot, isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	const pots = useSelector((state) => state.finance.pots);
	const allThemes = useMemo(() => getAllThemes(pots), [pots]);
	const existingPotNames = useMemo(
		() => pots.map((pot) => pot.name.toLowerCase()),
		[pots]
	);

	const availableThemes = useMemo(
		() =>
			themes.filter(
				(theme) =>
					!allThemes.includes(theme.hex) || theme.hex === pot?.theme
			),
		[allThemes, pot?.theme]
	);
	const budgetedThemes = useMemo(
		() =>
			themes.filter(
				(theme) =>
					allThemes.includes(theme.hex) && theme.hex !== pot?.theme
			),
		[allThemes, pot?.theme]
	);
	const formik = useFormik({
		initialValues: {
			name: pot?.name || "",
			target: pot?.target ? pot.target.toFixed(2) : "",
			theme: pot?.theme || "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Pot name is required!")
				.max(30, "Name cannot be more than 30 characters")
				.test(
					"unique-name",
					"Pot with this name already exists!",
					(value) =>
						mode === "edit" ||
						(value
							? !existingPotNames.includes(value.toLowerCase())
							: true)
				),
			target: Yup.number()
				.positive("Must be a positive number!")
				.required("Value is required!"),
			theme: Yup.string().required("Theme is required!"),
		}),
		onSubmit: (values) => {
			dispatch(
				mode === "edit"
					? editPot({
							originalName: pot.name,
							name: values.name,
							target: parseFloat(values.target),
							theme: values.theme,
					  })
					: addPot({
							name: values.name,
							target: parseFloat(values.target),
							theme: values.theme,
					  })
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
				className={`relative z-50`}
			>
				<DialogBackdrop className="fixed inset-0 bg-black/50" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					<DialogPanel className="bg-white w-full mx-5 rounded-[12px] md:w-[560px] md:mx-auto px-5 py-6 md:p-8 flex flex-col gap-5">
						{/* Header */}
						<div className="flex justify-between items-center">
							<h2 className="text-2 md:text-[32px]">
								{mode === "edit" ? "Edit Pot" : "Add New Pot"}
							</h2>
							<ReactSVG
								src="/assets/images/icon-close-modal.svg"
								className="fill-grey-500 ml-auto hover:fill-grey-900 cursor-pointer"
								onClick={() => setIsOpen(false)}
							/>
						</div>
						<p className="text-4 text-grey-500">
							{mode === "edit"
								? "If your saving targets change, feel free to update your pots."
								: "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."}
						</p>
						{/* Form */}
						<form
							onSubmit={formik.handleSubmit}
							className="space-y-5"
						>
							<div className="space-y-4">
								{/* Pot Name */}
								<div>
									<label className="text-5 bold text-grey-500">
										Pot Name
									</label>
									<div className="relative">
										<input
											type="text"
											name="name"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.name}
											className={`w-full pl-5 py-3 border border-grey-500 rounded-8 appearance-none outline-none focus-border-grey-900 text-4 `}
											onWheel={(e) => e.target.blur()}
										/>
									</div>
									{formik.touched.name &&
									formik.errors.name ? (
										<p className="text-5 bold text-secondary-red pl-1 pt-1">
											{formik.errors.name}
										</p>
									) : (
										<p className="text-5 text-right">{`${
											30 - formik.values.name.length
										} of 30 character${
											30 - formik.values.name.length === 1
												? ""
												: "s"
										} left`}</p>
									)}
								</div>
								{/* Target */}
								<div>
									<label className="text-5 bold text-grey-500">
										Target
									</label>
									<div className="relative">
										{/* Dollar sign prefix */}
										<span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey-500">
											$
										</span>
										<input
											type="number"
											name="target"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.target}
											className="w-full pl-10 pr-5 py-3 border border-grey-500 rounded-8 appearance-none outline-none focus-border-grey-900 text-4"
											onWheel={(e) => e.target.blur()}
										/>
									</div>
									{formik.touched.target &&
										formik.errors.target && (
											<p className="text-5 bold text-secondary-red pl-1 pt-1">
												{formik.errors.target}
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
								className="btn-primary w-full text-4 bold"
								type="submit"
							>
								{mode === "edit" ? "Save Changes" : "Add Pot"}
							</button>
						</form>
					</DialogPanel>
				</div>
			</Dialog>
		</div>
	);
};

export default PotAddEditModal;
