import React, { useState } from "react";
import HeroBlock from "../components/HeroBlock";
import { heroBlocks } from "../data/data";
import Beta from "../components/Beta";
import { subscriptions } from "../data/data";
import Subscription from "../components/Subscription";
import { Stack, Switch, Typography } from "@mui/material";
import check from "/assets/pricing/desktop/check.svg";
import PlansCompare from "../components/PlansCompare";
const Pricing = () => {
	const [currentPlan, setCurrentPlan] = useState("Basic");
	const [subscriptionTime, setSubscriptionTime] = useState("monthly");

	const changePlanTime = () => [
		subscriptionTime === "monthly"
			? setSubscriptionTime("yearly")
			: setSubscriptionTime("monthly"),
	];
	return (
		<main>
			{/* Hero */}
			<HeroBlock block={heroBlocks[4]} index={0} />
			{/* Toggle */}
			<div className="mx-auto w-fit mt-16 mb-10 md:mt-[112px] lg:mt-[120px] lg:mb-12">
				<Stack
					direction="row"
					sx={{ alignItems: "center", gap: "32px" }}
				>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 800,
							lineHeight: "25px",
							fontFamily: "DM Sans",
							opacity:
								subscriptionTime === "monthly" ? "1" : "0.6",
							transition: "opacity 0.3s ease",
						}}
					>
						Monthly
					</Typography>
					<Switch
						id="time-toggle"
						checked={subscriptionTime === "yearly"}
						onChange={changePlanTime}
						sx={{
							width: "64px",
							height: "32px",
							padding: "0px",
							borderRadius: "16px",
							cursor: "pointer",

							"& .MuiSwitch-track": {
								transition: "all ease-in-out 300ms",
								backgroundColor: "#dfdfdf",
								opacity: 1,
							},
							"& .MuiSwitch-switchBase": {
								transition: "all ease-in-out 300ms",
								transform:
									subscriptionTime === "yearly"
										? "translateY(-5px) translateX(28px)"
										: "translateY(-5px) translateX(-5px) ",
							},
							"& .MuiSwitch-thumb": {
								width: "24px",
								height: "24px",
								backgroundColor:
									subscriptionTime === "yearly"
										? "#ffffff"
										: "#000",
								transition: "0.3s",
							},
							"& .Mui-checked + .MuiSwitch-track": {
								backgroundColor: "#000000",
								opacity: 1,
							},
						}}
					/>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 800,
							lineHeight: "25px",
							fontFamily: "DM Sans",
							opacity:
								subscriptionTime === "monthly" ? "0.6" : "1",
							transition: "opacity 0.3s ease",
						}}
					>
						Yearly
					</Typography>
				</Stack>
			</div>

			{/* Pricing */}
			<section className="grid grid-cols-1 gap-y-6 mx-7 mt-10 mb-16 lg:grid-cols-3 lg:gap-x-[30px] lg:mx-[165px]">
				{subscriptions.map((subscription) => (
					<Subscription
						key={subscription.type}
						subscription={subscription}
						time={subscriptionTime}
						chosen={subscription.type === currentPlan}
						setPlan={setCurrentPlan}
					/>
				))}
			</section>
			{/* Compare */}
			<section className="flex flex-col gap-16 mb-16 lg:max-w-[731px] lg:mx-auto lg:my-[160px]">
				<h1 className="text-[40px] text-black leading-[48px] tracking-[4.17px] text-center uppercase font-bold">
					Compare
				</h1>
				<PlansCompare />
			</section>
			{/* Beta */}
			<Beta />
		</main>
	);
};

export default Pricing;
