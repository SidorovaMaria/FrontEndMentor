const currentTheme = localStorage.getItem("theme");
const toggleMode = document.querySelector(".toggle-theme");
const textInput = document.getElementById("text-input");
const infoLimit = document.querySelector(".info");
const infoMaxChar = document.querySelector(".max-characters");
const exludeSpaceCheckBox = document.getElementById("exclude-spaces");
const setLimitCheckBox = document.getElementById("char-limit");
const getCharLimit = document.getElementById("limit-input");
const readingTime = document.getElementById("reading-time-value");
// Resulted Values
const totalCharacterValue = document.getElementById("num-char");
const totalCharacterText = document.querySelector(
	"#result-char p:nth-of-type(1)"
);
const wordCountValue = document.getElementById("num-word-count");
const sentenceCountValue = document.getElementById("num-sent-count");

const letterDensityContainer = document.getElementById("letters");
const noCharactersText = document.querySelector(".no-characters");
const showLessOrMore = document.querySelector(".show");
let limit = 9999;
let showMore = false;
const toggleTheme = () => {
	let theme = document.documentElement.getAttribute("data-theme");
	let newTheme = theme === "dark" ? "light" : "dark";
	document.documentElement.setAttribute("data-theme", newTheme);
};
toggleMode.addEventListener("click", toggleTheme);

const calculateStatistics = () => {
	const characters = exludeSpaceCheckBox.checked
		? textInput.value.replace(/\s/g, "").length
		: textInput.value.length;
	const words =
		textInput.value.trim().length > 0
			? textInput.value.trim().split(/\s+/).length
			: 0;
	calculateReadingTime(words);
	calculateLetterDensity();
	const sentences = textInput.value
		.split(/[.!?]+/)
		.map((sentence) => sentence.trim())
		.filter((sentence) => sentence.length > 0).length;
	limit = getCharLimit.value || 9999;
	characters > limit
		? ((infoLimit.style.display = "block"),
		  (infoMaxChar.textContent = limit))
		: (infoLimit.style.display = "none");
	totalCharacterValue.textContent =
		characters > 9 ? characters : `0${characters}`;

	exludeSpaceCheckBox.checked
		? (totalCharacterText.textContent += " (no space)")
		: (totalCharacterText.textContent = "Total Characters");

	wordCountValue.textContent = words > 9 ? words : `0${words}`;
	sentenceCountValue.textContent =
		sentences > 9 ? sentences : `0${sentences}`;
};

const calculateReadingTime = (totalWords) => {
	const wordsPerMinute = 200;
	const time = Math.ceil(totalWords / wordsPerMinute);
	readingTime.textContent = `${time > 0 ? "<" : ""} ${String(time)}`;
};

const calculateLetterDensity = () => {
	letterDensityContainer.innerHTML = "";
	const characterList = {};
	const letters = textInput.value.toUpperCase().match(/[A-Z]/g) || [];
	if (letters.length === 0) {
		noCharactersText.style.display = "block";
		showLessOrMore.style.display = "none";
		return;
	}
	noCharactersText.style.display = "none";

	letters.forEach((letter) => {
		characterList[letter] = (characterList[letter] || 0) + 1;
	});

	// Sort by frequency
	let entries = Object.entries(characterList).sort((a, b) => b[1] - a[1]);

	showLessOrMore.style.display = entries.length > 5 ? "block" : "none";

	displayLetterDensity(
		showMore ? entries : entries.slice(0, 5),
		letters.length
	);
};

const displayLetterDensity = (arr, totalLetters) => {
	letterDensityContainer.innerHTML = ""; // Clear previous content
	arr.forEach(([key, value]) => {
		const letterDensityItem = document.createElement("div");
		letterDensityItem.className = "letter-container";
		letterDensityItem.innerHTML = `
            <p class='letter'>${key}</p>
            <div class='bar'></div>
            <p class="percentage">${value} (${(
			(value / totalLetters) *
			100
		).toFixed(2)}%)</p>
        `;
		const barContainer = letterDensityItem.querySelector(".bar");
		barContainer.style.setProperty(
			"--bar-width",
			`${(value / totalLetters) * 100}%`
		);
		letterDensityContainer.appendChild(letterDensityItem);
	});
};
window.onload = calculateStatistics;
textInput.addEventListener("input", calculateStatistics);
exludeSpaceCheckBox.addEventListener("click", calculateStatistics);
setLimitCheckBox.addEventListener("click", () => {
	if (setLimitCheckBox.checked) {
		getCharLimit.style.display = "block";
	} else {
		getCharLimit.style.display = "none";
		getCharLimit.value = "";
	}
	calculateStatistics();
});
getCharLimit.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		calculateStatistics();
	}
});
showLessOrMore.addEventListener("click", () => {
	showMore = !showMore;
	calculateLetterDensity();
	!showMore
		? (showLessOrMore.innerHTML = `See More <span class="material-symbols-outlined arrow ">
        keyboard_arrow_down
    </span>`)
		: (showLessOrMore.innerHTML = `See Less <span class="material-symbols-outlined arrow flip">
        keyboard_arrow_down
    </span>`);
});
