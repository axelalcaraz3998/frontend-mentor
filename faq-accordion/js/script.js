"use strict";

const questionContainers = document.querySelectorAll(".faq-question-container");

const questionTitleContainers = document.querySelectorAll(
  ".faq-question-container-title-container"
);

const contentContainers = document.querySelectorAll(
  ".faq-question-content-container"
);

questionTitleContainers.forEach((element, index) => {
  element.addEventListener("click", function () {
    contentContainers.forEach((element) => {
      if (!(contentContainers[index] === element)) {
        element.classList.add("hidden");
        element.classList.remove("active");
      } else {
        element.classList.toggle("hidden");
        element.classList.toggle("active");
      }
    });

    questionContainers.forEach((element) => {
      if (!(questionContainers[index] === element)) {
        element.classList.remove("active");
      } else {
        element.classList.toggle("active");
      }
    });
  });
});
