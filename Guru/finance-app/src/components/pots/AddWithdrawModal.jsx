import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactSVG } from "react-svg";
import * as Yup from "yup";
import { addToPot, withdrawFromPot } from "../../features/financeSlice";
const AddWithdrawModal = ({ mode, pot, isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			amount: 0,
		},
		validationSchema: Yup.object({
			amount: Yup.number()
				.positive("Must be a positive number!")
				.required("Value is required!")
				.test(
					"max-withdraw",
					"Cannot withdraw more than available in the pot!",
					(value) => (mode === "withdraw" ? value <= pot.total : true)
				)
				.test(
					"max-add",
					"You trying to add more money in the pot than the target!",
					(value) =>
						mode === "add" ? pot.total + value <= pot.target : true
				),
		}),
		onSubmit: (values) => {
			const payload = {
				name: pot.name,
				amount: values.amount,
			};
			dispatch(
				mode === "add" ? addToPot(payload) : withdrawFromPot(payload)
			);

			setIsOpen(false);
		},
	});
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
					<DialogPanel className="bg-white w-full rounded-[12px] md:w-[560px] md:mx-auto px-5 py-6 md:p-8 flex flex-col gap-5">
						{/* Header */}
						<div className="flex justify-between items-center">
							<h2 className="text-2 md:text-[32px]">
								{mode === "add" ? "Add to " : "Withdraw from "}{" "}
								'{pot.name}'
							</h2>
							<ReactSVG
								src="/assets/images/icon-close-modal.svg"
								className="fill-grey-500 ml-auto hover:fill-grey-900 cursor-pointer"
								onClick={() => setIsOpen(false)}
							/>
						</div>
						{/* Decription */}
						<p className="text-4 text-grey-500">
							{mode === "add"
								? "Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance."
								: "Withdraw from your pot to put money back in your main balance. This will reduce the amount you have in this pot."}
						</p>
						{/* New Amount */}
						<div className="space-y-4">
							<div className="flex justify-between items-center">
								<p className="text 4 text-grey-500">
									New Amount{" "}
								</p>
								<p className="text-1">
									$
									{mode === "add"
										? (
												Number(pot.total || 0) +
												Number(
													formik.values.amount || 0
												)
										  ).toFixed(2)
										: (
												Number(pot.total || 0) -
												Number(
													formik.values.amount || 0
												)
										  ).toFixed(2)}
								</p>
							</div>
							<div>
								<div className="flex flex-col gap-3">
									{mode === "add" ? (
										<div className="relative">
											<progress
												className="w-full rounded-[4px] appearance-none pot z-10"
												id="progress-bar"
												value={pot.total}
												max={pot.target}
												style={{
													"--progress-color":
														"#201F24",
												}}
											></progress>
											<progress
												className="w-full rounded-[4px] appearance-none pot absolute left-0 top-[9.5px] z-0"
												value={
													pot.total +
													Number(
														formik.values.amount ||
															0
													)
												}
												max={pot.target}
												style={{
													"--progress-color":
														"#277C78",
													mixBlendMode: "multiply",
												}}
											></progress>
											<div
												className={`absolute top-0 h-full bg-white w-[2px] rounded-md ${
													formik.values.amount === 0
														? "hidden"
														: ""
												}`}
												style={{
													left: `${
														(pot.total /
															pot.target) *
														100
													}%`,
													transform:
														"translateX(-50%)",
												}}
											></div>
										</div>
									) : (
										<div className="relative">
											<progress
												className="w-full rounded-[4px] appearance-none pot z-10"
												id="progress-bar"
												value={
													pot.total -
													Number(
														formik.values.amount ||
															0
													)
												}
												max={pot.target}
												style={{
													"--progress-color":
														"#201F24",
												}}
											></progress>
											<progress
												className="w-full rounded-[4px] appearance-none pot absolute left-0 top-[9.5px] z-0"
												value={pot.total}
												max={pot.target}
												style={{
													"--progress-color":
														"#C94736",
													mixBlendMode: "multiply",
												}}
											></progress>
											<div
												className={`absolute top-0 h-full bg-white w-[2px] rounded-md ${
													formik.values.amount === 0
														? "hidden"
														: ""
												}`}
												style={{
													left: `${
														((pot.total -
															Number(
																formik.values
																	.amount || 0
															)) /
															pot.target) *
														100
													}%`,
													transform:
														"translateX(-50%)",
												}}
											></div>
										</div>
									)}
									<div className="flex justify-between">
										<p
											className={`text-5 bold text-grey-500 ${
												formik.values.amount &&
												mode === "add"
													? "text-secondary-green"
													: ""
											}
                                            ${
												formik.values.amount &&
												mode === "withdraw"
													? "text-secondary-red"
													: ""
											}`}
										>
											{mode === "add"
												? (
														((pot.total +
															formik.values
																.amount) /
															pot.target) *
														100
												  ).toFixed(2)
												: (
														((pot.total -
															formik.values
																.amount) /
															pot.target) *
														100
												  ).toFixed(2)}
											%
										</p>
										<p className="text-5 text-grey-500">
											Target of $
											{pot.target.toLocaleString()}
										</p>
									</div>
								</div>
							</div>
						</div>
						<form
							onSubmit={formik.handleSubmit}
							className="space-y-5"
						>
							<div>
								<label className="text-5 bold text-grey-500">
									{mode === "add"
										? "Amount to Add"
										: "Amount to Withdraw"}
								</label>
								<div className="relative">
									{/* Dollar sign prefix */}
									<span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey-500">
										$
									</span>
									<input
										type="number"
										name="amount"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.amount}
										className="w-full pl-10 pr-5 py-3 border border-grey-500 rounded-8 appearance-none outline-none focus-border-grey-900 text-4"
										onWheel={(e) => e.target.blur()}
									/>
								</div>
								{formik.touched.amount &&
									formik.errors.amount && (
										<p className="text-5 bold text-secondary-red pl-1 pt-1">
											{formik.errors.amount}
										</p>
									)}
							</div>
							<button
								type="submit"
								className="btn-primary text-4 bold w-full"
							>
								{mode === "add"
									? "Confirm Addition"
									: "Confirm Withdrawl"}
							</button>
						</form>
					</DialogPanel>
				</div>
			</Dialog>
		</div>
	);
};

export default AddWithdrawModal;
