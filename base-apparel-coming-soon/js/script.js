const form = document.querySelector("#form-container");
const emailInput = document.querySelector("#email-input");
const errorMsg = document.querySelector("#error-msg");

function validateEmail(email) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regexEmail.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const isValid = validateEmail(email);

  if (!isValid) {
    emailInput.classList.add("error");
    errorMsg.classList.add("error");
  } else {
    emailInput.classList.remove("error");
    errorMsg.classList.remove("error");
  }
});
