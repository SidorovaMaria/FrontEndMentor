import React from "react";
import SectioninView from "../components/motion/SectioninView";
import { useFormik } from "formik";
import * as Yup from "yup";
import { locations } from "../app/data";
import AnimatedBtn from "../components/motion/AnimatedBtn";
const Contact = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Can't be empty"),
			email: Yup.string()
				.email("Please enter a valid email")
				.required("Can't be empty"),
			message: Yup.string().required("Can't be empty"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<React.Fragment>
			<SectioninView
				className={`bg-peach px-6 md:px-15 py-18 text-white flex flex-col md:gap-10 md:rounded-15 lg:grid lg:grid-cols-2 lg:items-center lg:px-[95px] lg:gap-x-20 relative overflow-hidden z-40`}
			>
				<div className="flex flex-col gap-6 items-center text-center md:text-left md:items-start z-20">
					<h1 className="text-1">Contact Us</h1>
					<p className="text-4 ">
						Ready to take it to the next level? Let’s talk about
						your project or idea and find out how we can help your
						business grow. If you are looking for unique digital
						experiences that’s relatable to your users, drop us a
						line.
					</p>
				</div>
				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-col gap-6 z-20"
				>
					<div className="flex border-b border-b-white pb-3 has-focus:border-b-[3px]">
						<input
							id="name"
							name="name"
							type="text"
							autoComplete="off"
							placeholder="Name"
							className="pl-4 font-medium text-4 outline-none flex-1"
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div className="text-white ml-auto flex gap-2 items-center">
								<p className="text-[12px] leading-[26px] italic ">
									{formik.errors.name}
								</p>
								<img
									src="/assets/contact/desktop/icon-error.svg"
									className="w-5 h-5"
								/>
							</div>
						) : null}
					</div>
					<div className="flex border-b border-b-white pb-3 has-focus:border-b-[3px]">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="off"
							placeholder="Email Address"
							className="pl-4 font-medium text-4 outline-none  flex-1"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="text-white ml-auto flex gap-2 items-center">
								<p className="text-[12px] leading-[26px] italic ">
									{formik.errors.email}
								</p>
								<img
									src="/assets/contact/desktop/icon-error.svg"
									className="w-5 h-5"
								/>
							</div>
						) : null}
					</div>
					<div className="flex border-b border-b-white pb-3 has-focus:border-b-[3px]">
						<input
							id="phone"
							name="phone"
							type="phone"
							autoComplete="off"
							placeholder="Phone"
							className="pl-4 font-medium text-4 outline-none  flex-1"
							onChange={formik.handleChange}
							value={formik.values.phone}
						/>
					</div>
					<div className="flex border-b border-b-white pb-3 has-focus:border-b-[3px]">
						<textarea
							id="message"
							name="message"
							type="text"
							autoComplete="off"
							placeholder="Your Message"
							className="pl-4 font-medium text-4 outline-none min-h-[90px]  flex-1"
							onChange={formik.handleChange}
							value={formik.values.message}
						/>
						{formik.touched.message && formik.errors.message ? (
							<div className="text-white ml-auto flex gap-2 items-center">
								<p className="text-[12px] leading-[26px] italic ">
									{formik.errors.message}
								</p>
								<img
									src="/assets/contact/desktop/icon-error.svg"
									className="w-5 h-5"
								/>
							</div>
						) : null}
					</div>
					<button
						className="py-4 px-12 rounded-8 bg-white hover:bg-peach-light text-dark-grey w-fit mx-auto text-[15px] leading-[22px] tracking-[1px] font-medium uppercase md:place-self-end md:mx-0"
						type="submit"
					>
						Submit
					</button>
				</form>
				<img
					src="/assets/shared/desktop/bg-pattern-two-circles.svg"
					className="absolute min-w-[584px] top-0 -left-1/3 md:hidden"
				/>
				<img
					src="/assets/shared/desktop/bg-pattern-small-circle.svg"
					className="-rotate-90 absolute min-w-[584px] hidden md:block -top-1/6 -left-1/6 lg:min-w-[640px] lg:top-auto lg:bottom-0 lg:left-0"
				/>
			</SectioninView>
			<div className="flex flex-col gap-12 md:gap-20 items-center lg:grid lg:grid-cols-3 lg:gap-[30px]">
				{locations.map((location) => (
					<SectioninView
						key={location.location}
						className={`flex flex-col gap-12 items-center z-50`}
					>
						<div className="aspect-square w-[202px] relative">
							<img
								src={location.img}
								className="w-full object-cover"
							/>
							<img
								src="/assets/shared/desktop/bg-pattern-small-circle.svg"
								className="absolute top-0 left-0"
							/>
						</div>
						<div className="flex flex-col gap-8 items-center">
							<h3 className="text-4 uppercase tracking-[5px] font-medium text-dark-grey">
								{location.location}
							</h3>
							<AnimatedBtn
								className="bg-peach text-white p-4 uppercase text-[15px] leading-[22px] tracking-[1px] font-medium rounded-8 hover:bg-peach-light "
								onClick={() => navigate("/locations")}
							>
								See Location
							</AnimatedBtn>
						</div>
					</SectioninView>
				))}
			</div>
		</React.Fragment>
	);
};

export default Contact;
