import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";
import {
	filterSearchAndSortTransactions,
	getCategoryTotaLSpending,
	getRecurringTransactions,
	getTotalMaxBudget,
	setBudgetSpendingByCategory,
} from "../utils/helpFunctions";

const initialState = {
	dayToday: new Date().getDate(),
	currentBalance: data.balance.current,
	incomeBalance: data.balance.income,
	expenses: data.balance.expenses,
	transactions: data.transactions,
	filteredTransactions: filterSearchAndSortTransactions(
		data.transactions,
		"All Transactions",
		"Latest",
		""
	),
	filter: "Latest",
	category: "All Transactions",
	search: "",
	budgets: setBudgetSpendingByCategory(data.transactions, data.budgets),
	maxBudget: getTotalMaxBudget(data.budgets),
	pots: data.pots,
	allRecuringTransactions: getRecurringTransactions(data.transactions),
	paidBills: [],
	unPaidBills: [],
	dueSoonBills: [],
};

const financeSlice = createSlice({
	name: "finance",
	initialState,
	reducers: {
		// Transactions
		setFilter: (state, action) => {
			state.filter = action.payload;
			state.filteredTransactions = filterSearchAndSortTransactions(
				state.transactions,
				state.category,
				state.filter,
				state.search
			);
		},
		setSearch: (state, action) => {
			state.search = action.payload;
			state.filteredTransactions = filterSearchAndSortTransactions(
				state.transactions,
				state.category,
				state.filter,
				state.search
			);
		},
		setCategory: (state, action) => {
			state.category = action.payload;
			state.filteredTransactions = filterSearchAndSortTransactions(
				state.transactions,
				state.category,
				state.filter,
				state.search
			);
		},
		addBudget: (state, action) => {
			const { category, maximum, theme } = action.payload;
			state.budgets.push({
				category,
				maximum,
				theme,
				totalSpending: getCategoryTotaLSpending(
					state.transactions,
					category
				),
			});
			state.maxBudget = getTotalMaxBudget(state.budgets);
		},
		editBudget: (state, action) => {
			const { category, maximum, theme } = action.payload;
			const budgetIndex = state.budgets.findIndex(
				(budget) => budget.category === category
			);

			if (budgetIndex !== -1) {
				state.budgets[budgetIndex] = {
					...state.budgets[budgetIndex],
					maximum: parseFloat(maximum.toFixed(2)),
					theme,
					totalSpending: getCategoryTotaLSpending(
						state.transactions,
						category
					),
				};

				state.maxBudget = getTotalMaxBudget(state.budgets);
			}
		},
		deleteBudget: (state, action) => {
			const { category } = action.payload;
			state.budgets = state.budgets.filter(
				(budget) => budget.category !== category
			);
			state.maxBudget = getTotalMaxBudget(state.budgets);
		},
		addPot: (state, action) => {
			const { name, target, theme } = action.payload;
			state.pots.push({
				name,
				target,
				theme,
				total: 0,
			});
		},
		editPot: (state, action) => {
			const { originalName, name, target, theme } = action.payload;
			const potIndex = state.pots.findIndex(
				(pot) => pot.name === originalName
			);
			if (potIndex !== -1) {
				state.pots[potIndex] = {
					...state.pots[potIndex],
					name,
					target: parseFloat(target.toFixed(2)),
					theme,
				};
			}
		},
		deletePot: (state, action) => {
			const { name, amount } = action.payload;
			state.pots = state.pots.filter((pot) => pot.name !== name);
			state.currentBalance += amount;
		},
		withdrawFromPot: (state, action) => {
			const { name, amount } = action.payload;
			const potIndex = state.pots.findIndex((pot) => pot.name === name);
			if (potIndex !== -1) {
				const pot = state.pots[potIndex];

				if (amount > pot.total) {
					return;
				}

				state.pots[potIndex] = {
					...pot,
					total: pot.total - amount,
				};

				state.currentBalance += amount;
			}
		},

		addToPot: (state, action) => {
			const { name, amount } = action.payload;
			const potIndex = state.pots.findIndex((pot) => pot.name === name);
			if (potIndex !== -1) {
				const pot = state.pots[potIndex];

				if (amount > pot.maximum - pot.total) {
					return;
				}

				state.pots[potIndex] = {
					...pot,
					total: pot.total + amount,
				};

				state.currentBalance -= amount;
			}
		},
		updateRecurringBills: (state) => {
			const fiveDaysLater = state.dayToday + 5;

			state.paidBills = [];
			state.unPaidBills = [];
			state.dueSoonBills = [];

			state.allRecuringTransactions.forEach((bill) => {
				if (bill.paymentDay < state.dayToday) {
					state.paidBills.push(bill);
				} else {
					state.unPaidBills.push(bill);
				}
				if (
					bill.paymentDay >= state.dayToday &&
					bill.paymentDay <= fiveDaysLater
				) {
					state.dueSoonBills.push(bill);
				}
			});
		},
	},
});

export const {
	setFilter,
	setSearch,
	setCategory,
	editBudget,
	deleteBudget,
	addBudget,
	deletePot,
	editPot,
	addPot,
	withdrawFromPot,
	addToPot,
	updateRecurringBills,
} = financeSlice.actions;

export default financeSlice.reducer;
