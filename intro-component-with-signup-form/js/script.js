const formElement = document.querySelector("form");

const fNameInput = document.getElementById("fName-input");
const lNameInput = document.getElementById("lName-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

const fNameError = document.getElementById("fName-error");
const lNameError = document.getElementById("lName-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation
  if (fNameInput.value === "") {
    fNameInput.classList.add("invalid");
    fNameError.classList.add("invalid");
  } else {
    fNameInput.classList.remove("invalid");
    fNameError.classList.remove("invalid");
  }

  if (lNameInput.value === "") {
    lNameInput.classList.add("invalid");
    lNameError.classList.add("invalid");
  } else {
    lNameInput.classList.remove("invalid");
    lNameError.classList.remove("invalid");
  }

  if (emailInput.value === "") {
    emailInput.classList.add("invalid");
    emailError.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
    emailError.classList.remove("invalid");
  }

  if (passwordInput.value === "") {
    passwordInput.classList.add("invalid");
    passwordError.classList.add("invalid");
  } else {
    passwordInput.classList.remove("invalid");
    passwordError.classList.remove("invalid");
  }
});
