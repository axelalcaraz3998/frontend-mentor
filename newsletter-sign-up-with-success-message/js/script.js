const sigUpContainer = document.querySelector("#signup-container");
const successContainer = document.querySelector("#success-container");

const errorMsg = document.querySelector("#signup__form__error");
const emailInput = document.querySelector("#email");
const signUpBtn = document.querySelector("#signup__form__submit-btn");

const emailOutput = document.querySelector("#success__email-output");
const dismissBtn = document.querySelector("#success__btn");

let userEmail = "";
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

signUpBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (!regexEmail.test(emailInput.value)) {
    errorMsg.classList.add("invalid");
    emailInput.classList.add("invalid");
  } else {
    errorMsg.classList.remove("invalid");
    emailInput.classList.remove("invalid");

    userEmail = emailInput.value.trim();
    emailOutput.textContent = userEmail;

    successContainer.classList.add("active");
    sigUpContainer.classList.remove("active");

    emailInput.value = "";
  }
});

dismissBtn.addEventListener("click", function (event) {
  event.preventDefault();

  sigUpContainer.classList.add("active");
  successContainer.classList.remove("active");
});
