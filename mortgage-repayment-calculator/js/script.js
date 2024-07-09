const mortgageAmount = document.getElementById("mortgage-amount");
const mortgageTerm = document.getElementById("mortgage-term");
const interestRate = document.getElementById("interest-rate");

const repaymentRadio = document.getElementById("repayment");
const interestOnlyRadio = document.getElementById("interest-only");

const calculateButton = document.querySelector(".card__left__form__button");
const clearAllButton = document.querySelector(".card__left__top__clear");

const resultContainerEmpty = document.querySelector(
  ".card__right__result--empty"
);
const resultContainerRepayment = document.querySelector(
  ".card__right__result--repayment"
);
const resultContainerInterestOnly = document.querySelector(
  ".card__right__result--interest-only"
);

const resultValueMonthly = document.querySelector(
  ".card__right__result--repayment__result__group__value-monthly--span"
);
const resultValueTotal = document.querySelector(
  ".card__right__result--repayment__result__group__value-total--span"
);
const resultValueInterestOnly = document.querySelector(
  ".card__right__result--interest-only__result__group__value-interest--span"
);

function calculateMortage(mortgageAmount, mortgageTerm, interestRate) {
  const USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = mortgageTerm * 12;
  const monthlyPayment =
    (mortgageAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - mortgageAmount;

  return {
    monthlyPayment: USD.format(monthlyPayment),
    totalPayment: USD.format(totalPayment),
    totalInterest: USD.format(totalInterest),
  };
}

function clearAll() {
  mortgageAmount.value = "";
  mortgageTerm.value = "";
  interestRate.value = "";
  repaymentRadio.checked = false;
  interestOnlyRadio.checked = false;

  resultContainerEmpty.classList.add("card__right__result--active");
  resultContainerRepayment.classList.remove("card__right__result--active");
  resultContainerInterestOnly.classList.remove("card__right__result--active");
}

calculateButton.addEventListener("click", function (event) {
  event.preventDefault();

  const mortgageAmountValue = mortgageAmount.value;
  const mortgageTermValue = mortgageTerm.value;
  const interestRateValue = interestRate.value;

  const isRepaymentChecked = repaymentRadio.checked;
  const isInterestOnlyChecked = interestOnlyRadio.checked;

  if (
    mortgageAmountValue === "" ||
    mortgageTermValue === "" ||
    interestRateValue === "" ||
    (!isRepaymentChecked && !isInterestOnlyChecked)
  ) {
    alert("Please fill in all fields");
    return;
  }

  const mortgageObj = calculateMortage(
    mortgageAmountValue,
    mortgageTermValue,
    interestRateValue
  );

  if (isRepaymentChecked) {
    resultContainerEmpty.classList.remove("card__right__result--active");
    resultContainerInterestOnly.classList.remove("card__right__result--active");
    resultContainerRepayment.classList.add("card__right__result--active");

    resultValueMonthly.textContent = mortgageObj.monthlyPayment;
    resultValueTotal.textContent = mortgageObj.totalPayment;
  } else {
    resultContainerEmpty.classList.remove("card__right__result--active");
    resultContainerRepayment.classList.remove("card__right__result--active");
    resultContainerInterestOnly.classList.add("card__right__result--active");

    resultValueInterestOnly.textContent = mortgageObj.totalInterest;
  }
});

clearAllButton.addEventListener("click", function (event) {
  event.preventDefault();

  clearAll();
});
