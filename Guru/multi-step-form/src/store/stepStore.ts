import { create } from "zustand";

type StepState = {
	step: number;
	isConfirmed: boolean;
	setIsConfirmed: (bool: boolean) => void;
	increaseStep: (step?: number) => void;
	decreaseStep: (step?: number) => void;
	formData: {
		name: string;
		email: string;
		phone: string;
		billingTime: string;
		price: number;
		plan: string;
		addOns: { addOn: string; price: number }[];
	};
	updateFormData: (data: Partial<StepState["formData"]>) => void;
};

export const useStepStore = create<StepState>()((set) => ({
	step: 1,
	isConfirmed: false,
	formData: {
		name: "",
		email: "",
		phone: "",
		billingTime: "monthly",
		plan: "arcade",
		price: 0,
		addOns: [],
	},
	increaseStep: (step = 1) =>
		set((state) => ({
			step: state.step === 4 ? state.step : state.step + step,
		})),
	decreaseStep: (step = 1) =>
		set((state) => ({ step: state.step <= step ? 1 : state.step - step })),
	updateFormData: (data) =>
		set((state) => ({ formData: { ...state.formData, ...data } })),
	setIsConfirmed(bool: boolean) {
		set(() => ({
			isConfirmed: bool,
		}));
	},
}));
