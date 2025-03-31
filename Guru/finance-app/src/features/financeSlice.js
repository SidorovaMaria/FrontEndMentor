import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";
import {
	filterSearchAndSortTransactions,
	getReccuringTransactions,
	getTotalMaxBudget,
	setBudgetSpendingByCategory,
} from "../utils/helpFunctions";

const initialState = {
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
	allRecuringTransactions: getReccuringTransactions(data.transactions),
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
	},
});

export const { setFilter, setSearch, setCategory } = financeSlice.actions;

export default financeSlice.reducer;
