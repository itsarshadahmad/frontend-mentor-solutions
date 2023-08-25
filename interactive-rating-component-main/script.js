const ratingStateComponent = document.getElementById("rating-state");
const thankYouStateComponent = document.getElementById("thank-you-state");
const ratingBtns = document.getElementsByClassName("rating-btns");
const submitBtn = document.getElementById("submit-btn");
const ratingElement = document.getElementById("your-rating");

let selectedRating = 0;

showRatingState();
submitBtn.addEventListener("click", handleSubmit);

for (const element of ratingBtns) {
  element.addEventListener("click", handleRatingButton);
}

function handleRatingButton(event) {
  for (element of ratingBtns) {
    element.classList.remove("selected");
  }
  event.target.classList.add("selected");
  selectedRating = event.target.textContent;
}

function handleSubmit(event) {
  if (selectedRating != 0) {
    event.preventDefault();
    ratingElement.textContent = selectedRating;
    showThankYouState();
  }
}

function showThankYouState() {
  thankYouStateComponent.style.display = "flex";
  ratingStateComponent.style.display = "none";
}

function showRatingState() {
  ratingStateComponent.style.display = "flex";
  thankYouStateComponent.style.display = "none";
}
