import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const EmailForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const [message, setMessage] = useState(null);
	const [isSuccess, setIsSuccess] = useState(false);

	return (
		<>
			<Formik
				initialValues={{ email: "" }}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Please enter a valid email address")
						.required("Email is required"),
				})}
				onSubmit={(values, { resetForm }) => {
					setSubmitted(true);

					// Check if email is valid
					if (values.email.includes("@")) {
						setMessage(
							"You’re subscribed! Check your inbox for updates."
						);
						setIsSuccess(true);
						resetForm();
					} else {
						setMessage("Invalid email address");
						setIsSuccess(false);
					}

					setTimeout(() => {
						setSubmitted(false);
						setMessage(null);
					}, 3000);
				}}
			>
				{({ isSubmitting, errors, touched }) => (
					<Form className="mt-6 mb-2 flex flex-col gap-4 items-start w-full">
						<div className="flex flex-col gap-[6px] w-full">
							<label
								htmlFor="email"
								className="text-preset-7 text-neural-600 ps-1 dark:text-neural-0 placeholder:text-neural-600 dark:placeholder:text-neural-400"
							>
								Email Address
							</label>
							<Field
								type="email"
								name="email"
								placeholder="email@example.com"
								className="email-input"
							/>
							{touched.email && errors.email && (
								<p className="tracking-[-0.2px] leading-[130%] text-[16px] flex items-center gap-[8px] text-red-600 dark:text-red-400">
									<img
										src="../../public/assets/images/icon-error.svg"
										alt="error icon"
									/>
									<span>{errors.email}</span>
								</p>
							)}
						</div>

						{submitted && message && (
							<p
								className={`tracking-[-0.2px] leading-[130%] text-[16px] flex items-center gap-[8px] ${
									isSuccess
										? "text-green-600 dark:text-green-400"
										: "text-red-600 dark:text-red-400"
								}`}
							>
								<img
									src={`../../public/assets/images/icon-${
										isSuccess ? "success" : "error"
									}.svg`}
									alt={
										isSuccess
											? "success icon"
											: "error icon"
									}
								/>
								<span>{message}</span>
							</p>
						)}

						<button
							type="submit"
							className="email-submit text-preset-6"
							disabled={isSubmitting}
						>
							Stay Updated
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default EmailForm;
