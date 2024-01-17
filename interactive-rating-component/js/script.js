const ratingContainer = document.querySelector(".rating-container");
const ratingsContainer = document.querySelector(".rating-ratings-container");
const ratingsRate = document.querySelectorAll(".rating-rate");
const submitBtn = document.querySelector(".btn-rating");
const ratingWarning = document.querySelector(".rating-warning");
const thanksContainer = document.querySelector(".thanks-container");
const thanksRating = document.querySelector(".thanks-rating");
let selectedRating = "";

ratingsContainer.addEventListener("click", (e) => {
  const target = e.target;

  // If not click on rating, return
  if (!target.classList.contains("rating-rate")) {
    return;
  }

  // Remove active class from all ratings
  ratingsRate.forEach((el) => {
    // If clicked rating is the same as the current rating, return
    if (target === el) {
      return;
    }

    el.classList.remove("active");
  });

  // Toggle active class on clicked rating
  target.classList.toggle("active");

  // Store rating
  selectedRating = target.innerText;
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // If no rating is selected, show warning
  if (selectedRating === "") {
    ratingWarning.classList.remove("invisible");
    return;
  } else {
    ratingWarning.classList.add("invisible");
  }

  // Show success message
  ratingContainer.classList.add("hidden");

  const prevText = thanksRating.innerText.split(" ");
  const newText = [
    ...prevText.slice(0, 2),
    selectedRating,
    ...prevText.slice(2),
  ];

  thanksRating.innerText = newText.join(" ");
  thanksContainer.classList.remove("hidden");
});
