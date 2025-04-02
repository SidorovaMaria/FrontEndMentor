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
export const sortRecuringByfFilter = (transactions, filter) => {
	switch (filter) {
		case "Latest":
			return [...transactions].sort(
				(a, b) => a.paymentDay - b.paymentDay
			);
		case "Oldest":
			return [...transactions].sort(
				(a, b) => b.paymentDay - a.paymentDay
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
			return [...transactions].sort((a, b) => a.amount - b.amount);
		case "Lowest":
			return [...transactions].sort((a, b) => b.amount - a.amount);
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

export const getRecurringTransactions = (transactions) => {
	return [
		...new Map(
			transactions
				.filter((transaction) => transaction.recurring)
				.map((item) => [
					item.name,
					{
						...item,
						paymentDay: new Date(item.date).getUTCDate(),
					},
				])
		).values(),
	];
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
export const getCategoryTotaLSpending = (transactions, category) => {
	return transactions
		.filter(
			(transaction) =>
				transaction.category === category && transaction.amount < 0
		)
		.reduce(
			(total, transaction) => total + Math.abs(transaction.amount),
			0
		);
};

export const getTotalMaxBudget = (budgets) => {
	return budgets.reduce((total, budget) => total + budget.maximum, 0);
};
export const getBugetTotalSpending = (budgets) => {
	return budgets.reduce((total, budget) => total + budget.totalSpending, 0);
};
export const getBudgetsCategories = (budgets) => {
	return budgets.map((budget) => budget.category);
};
export const getAllThemes = (list) => {
	return list.map((listitem) => listitem.theme);
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
export const getOrdinalSuffix = (day) => {
	if (day >= 11 && day <= 13) return `${day}th`; // Special case for 11, 12, 13
	const lastDigit = day % 10;

	switch (lastDigit) {
		case 1:
			return `${day}st`;
		case 2:
			return `${day}nd`;
		case 3:
			return `${day}rd`;
		default:
			return `${day}th`;
	}
};

export const formatAmount = (amount) => {
	const formatted = Math.abs(amount).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});
	return amount < 0 ? `-${formatted}` : `+${formatted}`;
};

export const formatCurrency = (amount) => {
	return `$${amount.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})}`;
};

export const getTotalSavedinPots = (pots) => {
	return pots.reduce((total, pot) => total + pot.total, 0);
};
export const getTotalBillForRecurring = (recurringBills) => {
	return recurringBills
		.filter((bill) => {
			const billDate = new Date(bill.date);
			return billDate.getMonth() === 7 && billDate.getFullYear() === 2024;
		})
		.reduce((total, bill) => total + bill.amount, 0);
};
export const getTotalBills = (bills) => {
	return bills.reduce((total, bill) => total + bill.amount, 0);
};
