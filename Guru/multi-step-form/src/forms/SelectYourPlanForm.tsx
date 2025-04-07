import React, { useState } from "react";
import { useFormik } from "formik";
import NumberFlow from "@number-flow/react";
import FormTitle from "../components/FormTitle";
import { planItems } from "../components/data/data";
import { motion } from "motion/react";
import StepBtns from "../components/StepBtns";
import { useStepStore } from "../store/stepStore";

const SelectYourPlanForm = () => {
	const { updateFormData, increaseStep } = useStepStore();
	const [billingTime, setBillingTime] = useState("monthly"); // Default to monthly
	const [isSwitchToggled, setIsSwitchToggled] = useState(false);

	// Toggle between monthly and yearly billing
	const handleSwitch = () => {
		setIsSwitchToggled(!isSwitchToggled);
		setBillingTime(isSwitchToggled ? "monthly" : "yearly");
	};

	const formik = useFormik({
		initialValues: { plan: "arcade", billingCycle: billingTime },
		onSubmit: (values) => {
			const selectedPlan = planItems.find(
				(item) => item.plan === values.plan
			);

			if (selectedPlan) {
				const selectedPrice = selectedPlan[billingTime];
				const plan = {
					plan: values.plan,
					price: selectedPrice,
					billingTime: billingTime,
				};
				updateFormData(plan);
				increaseStep();
			}
		},
	});

	return (
		<div className="relative -top-9 mx-auto h-full w-[90%] rounded-lg bg-white px-6 py-8 shadow-md lg:top-0 lg:mx-0 lg:w-auto lg:bg-none lg:p-0 lg:shadow-none">
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col size-full relative"
			>
				<FormTitle
					title="Select your plan"
					description="You have the option of monthly or yearly billing."
				/>
				<div className="mt-5 flex flex-col gap-6 lg:mt-10">
					<fieldset className="flex flex-col gap-6 lg:flex-row">
						{planItems.map((item) => (
							<label
								key={item.plan}
								htmlFor={`plan-${item.plan}`}
								className={`border-form-light-grey hover:border-form-purple flex w-full cursor-pointer flex-row items-center gap-3.5 rounded-md border px-4 py-3.5 transition-all lg:w-[140px] lg:flex-col lg:items-start lg:gap-10 lg:py-5 ${
									formik.values.plan === item.plan
										? "border-form-purple bg-form-very-light-grey"
										: ""
								}`}
							>
								<input
									type="radio"
									id={`plan-${item.plan}`}
									name="plan"
									value={item.plan}
									onChange={formik.handleChange}
									checked={formik.values.plan === item.plan}
									className="hidden"
								/>
								{typeof item.icon === "string" ? (
									<img
										src={item.icon}
										alt={`${item.plan} icon`}
									/>
								) : (
									item.icon
								)}
								<div className="flex flex-col gap-1.5">
									<span className="text-regular text-form-denim font-medium capitalize">
										{item.plan}
									</span>
									<span className="text-form-grey text-sm">
										{"$"}
										<NumberFlow value={item[billingTime]} />
										{"/"}
										{billingTime === "monthly"
											? "mo"
											: "yr"}
									</span>
								</div>
							</label>
						))}
					</fieldset>

					<div className="bg-form-very-light-grey flex items-center justify-center gap-6 rounded-md py-3">
						<span
							className={`text-form-grey text-sm font-medium transition-colors ${
								billingTime === "monthly" && "text-form-denim!"
							}`}
						>
							Monthly
						</span>
						<div
							onClick={handleSwitch}
							className={`bg-form-denim flex h-[20px] w-[40px] cursor-pointer rounded-2xl p-1 ${
								isSwitchToggled
									? "justify-end"
									: "justify-start"
							}`}
						>
							<motion.div
								layout
								transition={{
									type: "spring",
									duration: 0.2,
									bounce: 0.2,
								}}
								className="size-3 rounded-full bg-white"
							/>
						</div>
						<span
							className={`text-form-grey text-sm font-medium transition-colors ${
								billingTime === "yearly" && "text-form-denim!"
							}`}
						>
							Yearly
						</span>
					</div>
				</div>
				<StepBtns />
			</form>
		</div>
	);
};

export default SelectYourPlanForm;
