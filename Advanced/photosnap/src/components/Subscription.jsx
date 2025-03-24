import React from "react";

const Subscription = ({ subscription, time, chosen, setPlan }) => {
	return (
		<div
			className={`pt-14 pb-10 px-5 md:px-10 flex flex-col gap-10 items-center justify-center text-center transition-all ease-in-out duration-700 relative md:grid-cols-2 md:grid md:justify-between  md:gap-y-8 lg:flex lg:gap-10 ${
				chosen ? "bg-black text-white" : ""
			}`}
		>
			<div className="flex flex-col gap-[18px] md:text-left lg:text-center">
				<h2 className="h2">{subscription.type}</h2>
				<p
					className={`p opacity-60 ${
						chosen ? "text-white" : "text-black"
					}?`}
				>
					{subscription.text}
				</p>
			</div>
			<div className="md:text-right lg:text-center">
				<h1 className="text-[40px] leading-[48px] tracking-[4.17px] font-bold">
					$
					{time === "monthly"
						? subscription.montlyPrice
						: subscription.yearlyPrice}
					.00
				</h1>
				<p
					className={`p opacity-60 md:pr-[8px]  ${
						chosen ? "text-white" : "text-black"
					}?`}
				>
					per {time === "monthly" ? " month" : " year"}
				</p>
			</div>
			<div className="px-4 w-full md:px-0">
				<button
					onClick={() => setPlan(subscription.type)}
					className={` ${
						chosen ? "btn-3" : "btn-1"
					} uppercase text-xs w-full `}
				>
					Pick Plan
				</button>
			</div>
		</div>
	);
};

export default Subscription;
