let graphData;
let timePeriod = "weekly";

async function loadData() {
  try {
    const response = await fetch("./data.json");
    graphData = await response.json();
    displayData(graphData); // ✅ Logs the actual data
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

const container = document.querySelector(".container-times");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const displayData = (data) => {
  for (const { title, timeframes } of data) {
    const section = document.createElement("div");
    section.className = "section";
    section.id = title.toLowerCase().replace(/\s+/g, "");

    let previous;
    if (timePeriod === "daily") {
      previous = "Yesterday";
    } else if (timePeriod === "weekly") {
      previous = "Last Week";
    } else {
      previous = "Last Month";
    }

    section.innerHTML = ` <div class="section-content">
        <div class="title">
            <h3>${title}</h3>
            <p>•••</p>
        </div>
        <div class="timeframe">
            <h2 class="time">${timeframes[timePeriod].current}hrs</h2>
            <p>${previous} - <span class="time-before">${timeframes[timePeriod].previous}hrs</span></p>
        </div>
    </div>`;
    container.appendChild(section);
  }
};
radioButtons.forEach((btn) => {
  btn.addEventListener("change", () => {
    container.innerHTML = "";
    timePeriod = btn.value;
    loadData();
  });
});

loadData();
