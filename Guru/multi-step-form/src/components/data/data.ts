export const steps = [
	{
		step: "step 1",
		title: "your info",
	},
	{
		step: "step 2",
		title: "select plan",
	},
	{
		step: "step 3",
		title: "add-ons",
	},
	{
		step: "step 4",
		title: "summary",
	},
];
type PlanType = {
	plan: "arcade" | "advanced" | "pro";
	icon?: React.ReactNode;
	monthly: number;
	yearly: number;
};
export const planItems: PlanType[] = [
	{
		plan: "arcade",
		icon: "/assets/images/icon-arcade.svg",
		monthly: 9,
		yearly: 90,
	},
	{
		plan: "advanced",
		icon: "/assets/images/icon-advanced.svg",
		monthly: 12,
		yearly: 120,
	},
	{
		plan: "pro",
		icon: "/assets/images/icon-pro.svg",
		monthly: 15,
		yearly: 150,
	},
];

export type AddOnType = {
	addOn: string;
	addOnDesc: string;
	monthly: number;
	yearly: number;
};
export const addOnItems: AddOnType[] = [
	{
		addOn: "Online Service",
		addOnDesc: "Access to multiplayer games",
		monthly: 1,
		yearly: 10,
	},
	{
		addOn: "Larger storage",
		addOnDesc: "Extra 1TB of cloud save",
		monthly: 2,
		yearly: 20,
	},
	{
		addOn: "Customizable profile",
		addOnDesc: "Custom theme on your profile",
		monthly: 2,
		yearly: 20,
	},
];
