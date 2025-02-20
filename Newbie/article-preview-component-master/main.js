// getting Elements

const shareBtnToggle = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");
const svgIcon = shareBtnToggle.querySelector("svg path");

const toggleShareOptions = () => {
	const isVisible = shareOptions.classList.toggle("visible");
	if (isVisible) {
		shareBtnToggle.style.backgroundColor = "#6e8098";
		svgIcon.style.fill = "white";
	} else {
		shareBtnToggle.style.backgroundColor = "";
		svgIcon.style.fill = "#6E8098";
	}
};
shareBtnToggle.addEventListener("click", toggleShareOptions);
shareOptions.addEventListener("click", toggleShareOptions);
