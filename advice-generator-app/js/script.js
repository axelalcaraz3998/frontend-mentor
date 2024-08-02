const adviceNumber = document.querySelector(".advice__number__value");
const adviceContent = document.querySelector(".advice__content");
const adviceButton = document.querySelector(".advice__button");

const api_url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(api_url);
  const data = await response.json();

  return data.slip;
}

function showAdvice(id, advice) {
  adviceNumber.textContent = id;
  adviceContent.textContent = advice;
}

window.addEventListener("load", async (e) => {
  const data = await getAdvice();
  showAdvice(data.id, data.advice);
});

adviceButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const data = await getAdvice();
  showAdvice(data.id, data.advice);
});
