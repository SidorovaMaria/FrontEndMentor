import React from "react";
import { useStepStore } from "../store/stepStore";
import FormTitle from "../components/FormTitle";
import StepBtns from "../components/StepBtns";
import ThankYou from "../components/ThankYou";

const FinishingUpForm = () => {
	const { formData, decreaseStep, isConfirmed } = useStepStore();
	const calculateTotal = () => {
		let total = 0;
		total += formData.price;
		total = formData.addOns.reduce(
			(accumulator, item) => accumulator + item.price,
			total
		);
		return total;
	};
	return (
		<div className="relative -top-9 mx-auto h-full w-[90%] rounded-lg bg-white px-6 py-8 shadow-md lg:top-0 lg:mx-0 lg:w-auto lg:bg-none lg:p-0 lg:shadow-none">
			{isConfirmed ? (
				<ThankYou />
			) : (
				<div className="flex size-full flex-col">
					<FormTitle
						title="Finishing Up"
						description="Double-check everything looks OK before confirming."
					/>
					<div className="mt-5 flex size-full flex-col gap-6 lg:mt-10">
						<div className="flex flex-col gap-6">
							<div className="bg-form-very-light-grey rounded-md px-6 py-4">
								<div className="flex items-center justify-between">
									<div className="flex flex-col gap-1.5">
										<span className="text-form-denim text-regular font-medium capitalize">
											{`${formData?.plan} (${formData?.billingTime})`}
										</span>
										<span
											onClick={() => decreaseStep(2)}
											className="text-form-grey hover:text-form-purple cursor-pointer text-sm underline transition-colors"
										>
											Change
										</span>
									</div>
									<div>
										<span className="text-regular text-form-denim font-bold">
											{"$" + formData?.price + "/"}
											{formData?.billingTime === "monthly"
												? "mo"
												: "yr"}
										</span>
									</div>
								</div>
								<div className="bg-form-light-grey mt-6 h-[1px] w-full" />
								<div className="mt-4 flex flex-col gap-4">
									{formData.addOns.map((item) => (
										<div
											key={item.addOn}
											className="flex items-center justify-between"
										>
											<span className="text-form-grey text-sm">
												{item.addOn}
											</span>
											<span className="text-form-denim text-sm">
												{"+" + "$" + item.price + "/"}
												{formData?.billingTime ===
												"monthly"
													? "mo"
													: "yr"}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between px-6">
							<span className="text-regular text-form-grey">
								Total(per{" "}
								{formData?.billingTime === "monthly"
									? "month"
									: "year"}
								)
							</span>

							<span className="text-form-purple text-xl font-bold">
								{"+" + "$" + calculateTotal() + "/"}
								{formData?.billingTime === "monthly"
									? "mo"
									: "yr"}
							</span>
						</div>
					</div>
				</div>
			)}
			<StepBtns />
		</div>
	);
};

export default FinishingUpForm;
