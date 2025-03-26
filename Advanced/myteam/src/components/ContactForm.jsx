import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
	name: Yup.string().required("This field is require"),
	message: Yup.string().required("This field is required"),
	email: Yup.string()
		.email("Please use a valid email address")
		.required("This field is require"),
});

const ContactForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			companyName: "",
			title: "",
			message: "",
		},
		validationSchema: contactSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
			<div className="w-full">
				<input
					type="text"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="Name"
					className={`input-area focus:border-blue-rapture ${
						formik.errors.name ? "border-light-coral" : ""
					}`}
				/>
				{formik.touched.name && formik.errors.name && (
					<p className="text-[10px] leading-[13px] font-bold italic text-light-coral pt-2 pl-2">
						{formik.errors.name}
					</p>
				)}
			</div>
			<div className="w-full">
				<input
					type="email"
					name="email"
					value={formik.email}
					onChange={formik.handleChange}
					placeholder="Email Address"
					className={`input-area focus:border-blue-rapture ${
						formik.errors.email ? "border-light-coral" : ""
					}`}
				/>
				{formik.touched.email && formik.errors.email && (
					<p className="text-[10px] leading-[13px] font-bold italic text-light-coral pt-2 pl-2">
						{formik.errors.email}
					</p>
				)}
			</div>
			<div className="w-full">
				<input
					type="text"
					name="CompanyName"
					value={formik.companyName}
					onChange={formik.handleChange}
					placeholder="Company Name"
					className={`input-area focus:border-blue-rapture`}
				/>
			</div>
			<div className="w-full">
				<input
					type="text"
					value={formik.title}
					onChange={formik.handleChange}
					name="title"
					placeholder="Title"
					className={`input-area focus:border-blue-rapture`}
				/>
			</div>
			<div className="w-full">
				<textarea
					placeholder="Message"
					className={`input-area focus:border-blue-rapture ${
						formik.errors.message ? "border-light-coral" : ""
					}`}
					rows="2"
				></textarea>
				{formik.touched.message && formik.errors.message && (
					<p className="text-[10px] leading-[13px] font-bold italic text-light-coral pt-2 pl-2 ">
						{formik.errors.message}
					</p>
				)}
			</div>
			<button type="submit" className="btn-secondary light w-fit">
				submit
			</button>
		</form>
	);
};

export default ContactForm;
