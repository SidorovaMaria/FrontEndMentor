import React, { useEffect } from "react";
import FormTitle from "../components/FormTitle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "motion/react";
import { useStepStore } from "../store/stepStore";
import StepBtns from "../components/StepBtns";

const PersonalInfoForm = () => {
	const { formData, updateFormData, increaseStep } = useStepStore();
	const phoneRegExp = /^\+\d{1,3}(?: \d{2,4}){2,4}$/;
	const personalInfoSchema = Yup.object().shape({
		name: Yup.string().required("Name is Required!"),
		email: Yup.string()
			.email("Invalid Email!")
			.required("Email is required!"),
		phone: Yup.string()
			.matches(
				phoneRegExp,
				"Enter a valid phone number (e.g. +1 234 567 890)"
			)
			.required("Phone number is required"),
	});
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
		},
		validationSchema: personalInfoSchema,
		onSubmit: (values) => {
			updateFormData(formik.values);
			increaseStep();
		},
	});

	return (
		<div className=" -top-9 mx-auto h-full w-[90%] rounded-lg bg-hite px-6 py-8 shadow-md lg:top-0 lg:mx-0 lg:w-auto lg:bg-none lg:p-0 lg:shadow-none">
			<form
				onSubmit={formik.handleSubmit}
				className="flex size-full flex-col relative w-full"
			>
				<FormTitle
					title="Personal Info"
					description="Please provide your name, email address, and phone number."
				/>
				<div className="mt-5 flex size-full flex-col gap-6 lg:mt-10">
					{/* Name */}
					<div className="flex flex-col">
						<div className="flex items-center justify-between overflow-hidden">
							<label
								htmlFor="name"
								className="text-form-denim text-sm"
							>
								Name
							</label>
							<AnimatePresence mode="wait" initial={false}>
								{formik.errors.name && formik.touched.name && (
									<motion.span
										key="email-error"
										initial={{ opacity: 0, y: "100%" }}
										animate={{ opacity: 1, y: "0%" }}
										exit={{ opacity: 0, y: "100%" }}
										transition={{
											duration: 0.3,
											bounce: 0,
										}}
										className="text-form-red overflow-hidden text-sm font-bold"
									>
										{formik.errors.name}
									</motion.span>
								)}
							</AnimatePresence>
						</div>
						<input
							className={`border-form-light-grey hover:border-form-purple mt-2 rounded-md border px-4 py-3 focus:outline-none
                ${formik.errors.name && formik.touched.name && "border-form-red"}`}
							onChange={formik.handleChange}
							name="name"
							id="name"
							value={formik.values.name}
							type="text"
							placeholder="e.g. Stephen King"
						/>
					</div>
					{/* Email */}
					<div className="flex flex-col">
						{/* Name */}
						<div className="flex items-center justify-between overflow-hidden">
							<label
								htmlFor="email"
								className="text-form-denim text-sm"
							>
								Email
							</label>
							<AnimatePresence mode="wait" initial={false}>
								{formik.errors.email &&
									formik.touched.email && (
										<motion.span
											key="name-error"
											initial={{ opacity: 0, y: "100%" }}
											animate={{ opacity: 1, y: "0%" }}
											exit={{ opacity: 0, y: "100%" }}
											transition={{
												duration: 0.3,
												bounce: 0,
											}}
											className="text-form-red overflow-hidden text-sm font-bold"
										>
											{formik.errors.email}
										</motion.span>
									)}
							</AnimatePresence>
						</div>
						<input
							className={`border-form-light-grey hover:border-form-purple mt-2 rounded-md border px-4 py-3 focus:outline-none ${formik.errors.email && formik.touched.email && "border-form-red"}`}
							onChange={formik.handleChange}
							name="email"
							value={formik.values.email}
							id="email"
							type="email"
							placeholder="e.g. stephenking@lorem.com"
						/>
						{/* Email */}
					</div>
					{/* Phone */}
					<div className="flex flex-col">
						{/* Name */}
						<div className="flex items-center justify-between overflow-hidden">
							<label
								htmlFor="phone"
								className="text-form-denim text-sm"
							>
								Phone
							</label>
							<AnimatePresence mode="wait" initial={false}>
								{formik.errors.phone &&
									formik.touched.phone && (
										<motion.span
											key="phone-error"
											initial={{ opacity: 0, y: "100%" }}
											animate={{ opacity: 1, y: "0%" }}
											exit={{ opacity: 0, y: "100%" }}
											transition={{
												duration: 0.3,
												bounce: 0,
											}}
											className="text-form-red overflow-hidden text-sm font-bold"
										>
											{formik.errors.phone}
										</motion.span>
									)}
							</AnimatePresence>
						</div>
						<input
							className={`border-form-light-grey hover:border-form-purple mt-2 rounded-md border px-4 py-3 focus:outline-none ${formik.errors.phone && formik.touched.phone && "border-form-red"}`}
							onChange={formik.handleChange}
							name="phone"
							value={formik.values.phone}
							id="phone"
							type="text"
							placeholder="e.g. +1 234 567 890"
						/>
					</div>
					<StepBtns />
				</div>
			</form>
		</div>
	);
};

export default PersonalInfoForm;
