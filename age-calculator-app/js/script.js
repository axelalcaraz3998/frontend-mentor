// Get label elements
const dayLabelEl = document.querySelector(
  ".age-calculator__form__input__container__label--day"
);
const monthLabelEl = document.querySelector(
  ".age-calculator__form__input__container__label--month"
);
const yearLabelEl = document.querySelector(
  ".age-calculator__form__input__container__label--year"
);

// Get error message elements
const dayErrorEl = document.querySelector(
  ".age-calculator__form__input__container__error-message--day"
);
const monthErrorEl = document.querySelector(
  ".age-calculator__form__input__container__error-message--month"
);
const yearErrorEl = document.querySelector(
  ".age-calculator__form__input__container__error-message--year"
);

// Get input elements
const dayInputEl = document.querySelector(
  "#age-calculator__form__input__container__input--day"
);
const monthInputEl = document.querySelector(
  "#age-calculator__form__input__container__input--month"
);
const yearInputEl = document.querySelector(
  "#age-calculator__form__input__container__input--year"
);

// Get calculate button element
const calculateButtonEl = document.querySelector(
  ".age-calculator__form__button-container__button"
);

// Get result elements
const daysOutputEl = document.querySelector(
  ".age-calculator__results__result__output--days"
);
const monthsOutputEl = document.querySelector(
  ".age-calculator__results__result__output--months"
);
const yearsOutputEl = document.querySelector(
  ".age-calculator__results__result__output--years"
);

calculateButtonEl.addEventListener("click", function (e) {
  e.preventDefault();

  let stopCalculation = false;

  // Validate day input
  if (dayInputEl.value === "") {
    dayLabelEl.classList.add("invalid");
    dayErrorEl.classList.add("invalid");

    stopCalculation = true;
  } else if (!(dayInputEl.value > 0 && dayInputEl.value <= 31)) {
    dayLabelEl.classList.add("invalid");
    dayErrorEl.classList.add("invalid");

    stopCalculation = true;
  } else {
    dayLabelEl.classList.remove("invalid");
    dayErrorEl.classList.remove("invalid");
  }

  // Validate month input
  if (monthInputEl.value === "") {
    monthLabelEl.classList.add("invalid");
    monthErrorEl.classList.add("invalid");

    stopCalculation = true;
  } else if (!(monthInputEl.value > 0 && monthInputEl.value <= 12)) {
    monthLabelEl.classList.add("invalid");
    monthErrorEl.classList.add("invalid");

    stopCalculation = true;
  } else {
    monthLabelEl.classList.remove("invalid");
    monthErrorEl.classList.remove("invalid");
  }

  // Validate year input
  if (yearInputEl.value === "") {
    yearLabelEl.classList.add("invalid");
    yearErrorEl.classList.add("invalid");

    stopCalculation = true;
  } else if (!(yearInputEl.value > 0)) {
    yearLabelEl.classList.add("invalid");
    yearErrorEl.classList.add("invalid");

    stopCalculation = true;
  } else {
    yearLabelEl.classList.remove("invalid");
    yearErrorEl.classList.remove("invalid");
  }

  if (stopCalculation) {
    return;
  }

  // If all inputs are valid, calculate age
  currentDate = new Date();
  birthDate = new Date(
    yearInputEl.value,
    monthInputEl.value - 1,
    dayInputEl.value
  );

  const diff = currentDate - birthDate;
  const ageDate = new Date(diff);
  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  const months = Math.abs(ageDate.getUTCMonth());
  const days = Math.abs(ageDate.getUTCDate() - 1);

  daysOutputEl.textContent = days;
  monthsOutputEl.textContent = months;
  yearsOutputEl.textContent = years;

  dayInputEl.value = "";
  monthInputEl.value = "";
  yearInputEl.value = "";
});
