export const sortTransactionsByFilter = (transactions, filter) => {
	switch (filter) {
		case "Latest":
			return [...transactions].sort(
				(a, b) => new Date(b.date) - new Date(a.date)
			);
		case "Oldest":
			return [...transactions].sort(
				(a, b) => new Date(a.date) - new Date(b.date)
			);
		case "A-Z":
			return [...transactions].sort((a, b) =>
				a.name.localeCompare(b.name)
			);
		case "Z-A":
			return [...transactions].sort((a, b) =>
				b.name.localeCompare(a.name)
			);
		case "Highest":
			return [...transactions].sort((a, b) => b.amount - a.amount);
		case "Lowest":
			return [...transactions].sort((a, b) => a.amount - b.amount);
		default:
			return transactions;
	}
};
export const filterTransactionByCategory = (transactions, category) => {
	if (category === "All Transactions") {
		return transactions;
	}
	return transactions.filter(
		(transaction) => transaction.category === category
	);
};

export const filterSearchAndSortTransactions = (
	transactions,
	category,
	filter,
	search
) => {
	let filteredTransactions = filterTransactionByCategory(
		transactions,
		category
	);

	if (search) {
		filteredTransactions = filteredTransactions.filter((transaction) =>
			transaction.name.toLowerCase().includes(search.toLowerCase())
		);
	}

	return sortTransactionsByFilter(filteredTransactions, filter);
};

export const getReccuringTransactions = (transactions) => {
	return transactions.filter((transactions) => transactions.recurring);
};

// Budgets
// Get totalSpending Of each Budget Group
export const setBudgetSpendingByCategory = (transactions, budgets) => {
	return budgets.map((budget) => {
		const totalSpending = transactions
			.filter(
				(transaction) =>
					transaction.category === budget.category &&
					transaction.amount < 0
			)
			.reduce(
				(total, transaction) => total + Math.abs(transaction.amount),
				0
			);

		return {
			...budget,
			totalSpending: totalSpending,
		};
	});
};
export const getSpendingsByCategory = (transactions, category) => {
	return transactions.filter(
		(transaction) =>
			transaction.category === category && transaction.amount < 0
	);
};

export const getTotalMaxBudget = (budgets) => {
	return budgets.reduce((total, budget) => total + budget.maximum, 0);
};
export const getBugetTotalSpending = (budgets) => {
	return budgets.reduce((total, budget) => total + budget.totalSpending, 0);
};

// RecurringTransctions

export const formatDate = (date) => {
	date = new Date(date);
	return date.toLocaleString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
};
export const formatAmount = (amount) => {
	const formatted = Math.abs(amount).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});
	return amount < 0 ? `-${formatted}` : formatted;
};
