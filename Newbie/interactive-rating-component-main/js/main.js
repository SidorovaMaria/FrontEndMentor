let rating = 0;
const cardReview = document.querySelector(".review");
const cardResult = document.querySelector(".result");
const ratingSubmit = document.getElementById("chosen-rating");
const ratingButtons = document.querySelectorAll('button[name="rating-value"]');
ratingButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		rating = btn.value;
		ratingButtons.forEach((rating) => {
			rating.classList.remove("selected");
		});
		btn.classList.add("selected");
	});
});
const submitButton = document.querySelector('button[type="submit"');
submitButton.addEventListener("click", () => {
	if (rating !== 0) {
		cardReview.classList.add("hide");
		console.log(cardReview);
		ratingSubmit.innerText = rating;
		cardResult.classList.remove("hide");
	}
});
