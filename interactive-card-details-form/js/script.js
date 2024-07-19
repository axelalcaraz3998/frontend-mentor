// Input elements
const InputCardHolderName = document.getElementById("cardholder-name");
const InputCardNumber = document.getElementById("card-number");
const InputExpMonth = document.getElementById("exp-date-month");
const InputExpYear = document.getElementById("exp-date-year");
const InputCVC = document.getElementById("cvc");
const SubmitButton = document.querySelector(
  ".container__right__form__submit-btn"
);

// Error elements
const ErrorCardHolderName = document.getElementById("cardholder-name-error");
const ErrorCardNumber = document.getElementById("card-number-error");
const ErrorExpDate = document.getElementById("exp-date-error");
const ErrorCVC = document.getElementById("cvc-error");

// Output elements
const ShowCardHolderName = document.querySelector(
  ".container__left__card--front__card-number__group__cardholder-name"
);
const ShowCardNumber = document.querySelector(
  ".container__left__card--front__card-number"
);
const ShowExpMonth = document.querySelector(
  ".container__left__card--front__card-number__group__exp-date__month"
);
const ShowExpYear = document.querySelector(
  ".container__left__card--front__card-number__group__exp-date__year"
);
const ShowCVC = document.querySelector(".container__left__card--back__cvc");

// Event listeners
InputCardHolderName.addEventListener("keyup", (e) => {
  // Remove errors on keypress
  InputCardHolderName.classList.remove("error");
  ErrorCardHolderName.classList.remove("error");

  const cardHolderName = e.target.value;

  if (cardHolderName.length === 0) {
    ShowCardHolderName.textContent = "Jane Appleseed";

    return;
  }

  ShowCardHolderName.textContent = cardHolderName;
});

InputCardNumber.addEventListener("keyup", (e) => {
  // Remove errors on keypress
  InputCardNumber.classList.remove("error");
  ErrorCardNumber.classList.remove("error");

  const cardNumber = e.target.value;

  if (cardNumber.length === 0) {
    ShowCardNumber.textContent = "0000 0000 0000 0000";

    return;
  }

  let output = "";

  if (cardNumber.length <= 16) {
    output = cardNumber.padEnd(16, "0");
  }

  output = output.replace(/(.{4})/g, "$1 ").trim();

  ShowCardNumber.textContent = output;
});

InputExpMonth.addEventListener("keyup", (e) => {
  // Remove errors on keypress
  InputExpMonth.classList.remove("error");
  ErrorExpDate.classList.remove("error");

  const expMonth = e.target.value;

  if (expMonth.length === 0) {
    ShowExpMonth.textContent = "00";

    return;
  }

  let output = "";

  if (expMonth.length <= 2) {
    output = expMonth.padEnd(2, "0");
  }

  ShowExpMonth.textContent = output;
});

InputExpYear.addEventListener("keyup", (e) => {
  // Remove errors on keypress
  InputExpYear.classList.remove("error");
  ErrorExpDate.classList.remove("error");

  const expYear = e.target.value;

  if (expYear.length === 0) {
    ShowExpYear.textContent = "00";

    return;
  }

  let output = "";

  if (expYear.length <= 2) {
    output = expYear.padEnd(2, "0");
  }

  ShowExpYear.textContent = output;
});

InputCVC.addEventListener("keyup", (e) => {
  // Remove errors on keypress
  InputCVC.classList.remove("error");
  ErrorCVC.classList.remove("error");

  const cvc = e.target.value;

  if (cvc.length === 0) {
    ShowCVC.textContent = "000";

    return;
  }

  let output = "";

  if (cvc.length <= 3) {
    output = cvc.padEnd(3, "0");
  }

  ShowCVC.textContent = output;
});

SubmitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let hasError = false;

  if (InputCardHolderName.value === "") {
    ErrorCardHolderName.textContent = "Can't be blank";
    InputCardHolderName.classList.add("error");
    ErrorCardHolderName.classList.add("error");

    hasError = true;
  }
  if (InputCardNumber.value === "") {
    ErrorCardNumber.textContent = "Can't be blank";
    InputCardNumber.classList.add("error");
    ErrorCardNumber.classList.add("error");

    hasError = true;
  }
  if (InputExpMonth.value === "") {
    ErrorExpDate.textContent = "Can't be blank";
    InputExpMonth.classList.add("error");
    ErrorExpDate.classList.add("error");

    hasError = true;
  }
  if (InputExpYear.value === "") {
    ErrorExpDate.textContent = "Can't be blank";
    InputExpYear.classList.add("error");
    ErrorExpDate.classList.add("error");

    hasError = true;
  }
  if (InputCVC.value === "") {
    ErrorCVC.textContent = "Can't be blank";
    InputCVC.classList.add("error");
    ErrorCVC.classList.add("error");

    hasError = true;
  }

  if (!hasError) {
    InputCardHolderName.value = "";
    InputCardNumber.value = "";
    InputExpMonth.value = "";
    InputExpYear.value = "";
    InputCVC.value = "";
  }
});
