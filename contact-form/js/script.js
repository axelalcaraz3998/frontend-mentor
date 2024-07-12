const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const generalEnquiryContainer = document.getElementById(
  "form__group--radio--general-enquiry"
);
const generalEnquiryRadio = document.getElementById("general-enquiry");
const supportRequestContainer = document.getElementById(
  "form__group--radio--support-request"
);
const supportRequestRadio = document.getElementById("support-request");
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");
const submitButton = document.querySelector(".form__submit");

const fisrtNameError = document.querySelector(
  ".form__group__error--first-name"
);
const lastNameError = document.querySelector(".form__group__error--last-name");
const emailError = document.querySelector(".form__group__error--email");
const queryTypeError = document.querySelector(
  ".form__group__error--query-type"
);
const messageError = document.querySelector(".form__group__error--message");
const checkboxError = document.querySelector(".form__group__error--checkbox");

const successContainer = document.querySelector(".success");

generalEnquiryContainer.addEventListener("click", () => {
  generalEnquiryRadio.checked = true;
  supportRequestRadio.checked = false;
});

supportRequestContainer.addEventListener("click", () => {
  supportRequestRadio.checked = true;
  generalEnquiryRadio.checked = false;
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let error = false;

  if (firstNameInput.value === "") {
    fisrtNameError.classList.add("form__group__error--active");
    firstNameInput.classList.add("error");
    error = true;
  } else {
    fisrtNameError.classList.remove("form__group__error--active");
    firstNameInput.classList.remove("error");
  }

  if (lastNameInput.value === "") {
    lastNameError.classList.add("form__group__error--active");
    lastNameInput.classList.add("error");
    error = true;
  } else {
    lastNameError.classList.remove("form__group__error--active");
    lastNameInput.classList.remove("error");
  }

  if (emailInput.value === "") {
    emailError.classList.add("form__group__error--active");
    emailInput.classList.add("error");
    error = true;
  } else {
    emailError.classList.remove("form__group__error--active");
    emailInput.classList.remove("error");
  }

  if (!generalEnquiryRadio.checked && !supportRequestRadio.checked) {
    queryTypeError.classList.add("form__group__error--active");
    error = true;
  } else {
    queryTypeError.classList.remove("form__group__error--active");
  }

  if (messageInput.value === "") {
    messageError.classList.add("form__group__error--active");
    messageInput.classList.add("error");
    error = true;
  } else {
    messageError.classList.remove("form__group__error--active");
    messageInput.classList.remove("error");
  }

  if (!consentCheckbox.checked) {
    checkboxError.classList.add("form__group__error--active");
    error = true;
  } else {
    checkboxError.classList.remove("form__group__error--active");
  }

  if (!error) {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    generalEnquiryRadio.checked = false;
    supportRequestRadio.checked = false;
    messageInput.value = "";
    consentCheckbox.checked = false;

    successContainer.classList.add("success--active");
  }
});
