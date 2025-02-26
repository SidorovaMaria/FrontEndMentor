async function loadData() {
	try {
		const response = await fetch("data.json");
		if (!response.ok) throw new Error("Failed to fetch data.json");

		const data = await response.json();
		displayGraph(data);
	} catch (error) {
		console.error("Error loading JSON:", error);
	}
}

const graph = document.querySelector(".graph");

const displayGraph = (data) => {
	if (!graph) {
		console.error("Graph container not found!");
		return;
	}

	const totalSpending = data.reduce((sum, { amount }) => sum + amount, 0); // Optimized sum

	data.forEach(({ day, amount }) => {
		const barItem = document.createElement("div");
		barItem.className = "bar-container";
		barItem.innerHTML = `
			<div class="bar">
				<div class="amount text-body bold">$${amount}</div>
			</div>
			<div class="weekday">${day}</div>
		`;

		const bar = barItem.querySelector(".bar");

		// Set dynamic height based on window size
		const multiplier = window.innerWidth > 768 ? 1000 : 500;
		const heightPercentage = amount / totalSpending;
		bar.style.setProperty("--bar-height", `${heightPercentage}px`);

		graph.appendChild(barItem);
	});
};

loadData();
