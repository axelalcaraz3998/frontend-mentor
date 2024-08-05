const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const selectorDaily = document.getElementById("selector-daily");
const selectorWeekly = document.getElementById("selector-weekly");
const selectorMonthly = document.getElementById("selector-monthly");
const allSelectors = document.querySelectorAll(
  ".dashboard__left__bottom__list__item"
);

const workHours = document.getElementById("work-hours");
const workLastWeekHours = document.getElementById("work-last-week-hours");
const playHours = document.getElementById("play-hours");
const playLastWeekHours = document.getElementById("play-last-week-hours");
const studyHours = document.getElementById("study-hours");
const studyLastWeekHours = document.getElementById("study-last-week-hours");
const exerciseHours = document.getElementById("exercise-hours");
const exerciseLastWeekHours = document.getElementById(
  "exercise-last-week-hours"
);
const socialHours = document.getElementById("social-hours");
const socialLastWeekHours = document.getElementById("social-last-week-hours");
const selfCareHours = document.getElementById("self-care-hours");
const selfCareLastWeekHours = document.getElementById(
  "self-care-last-week-hours"
);

function changeDisplayedData(selector) {
  switch (selector.id) {
    case "selector-daily":
      workHours.textContent = `${data[0].timeframes.daily.current}hr${
        data[0].timeframes.daily.current > 0 ? "s" : ""
      }`;
      workLastWeekHours.textContent = `Last Week - ${
        data[0].timeframes.daily.previous
      }hr${data[0].timeframes.daily.previous > 0 ? "s" : ""}`;
      playHours.textContent = `${data[1].timeframes.daily.current}hr${
        data[1].timeframes.daily.current > 0 ? "s" : ""
      }`;
      playLastWeekHours.textContent = `Last Week - ${
        data[1].timeframes.daily.previous
      }hr${data[1].timeframes.daily.previous > 0 ? "s" : ""}`;
      studyHours.textContent = `${data[2].timeframes.daily.current}hr${
        data[2].timeframes.daily.current > 0 ? "s" : ""
      }`;
      studyLastWeekHours.textContent = `Last Week - ${
        data[2].timeframes.daily.previous
      }hr${data[2].timeframes.daily.previous > 0 ? "s" : ""}`;
      exerciseHours.textContent = `${data[3].timeframes.daily.current}hr${
        data[3].timeframes.daily.current > 0 ? "s" : ""
      }`;
      exerciseLastWeekHours.textContent = `Last Week - ${
        data[3].timeframes.daily.previous
      }hr${data[3].timeframes.daily.previous > 0 ? "s" : ""}`;
      socialHours.textContent = `${data[4].timeframes.daily.current}hr${
        data[4].timeframes.daily.current > 0 ? "s" : ""
      }`;
      socialLastWeekHours.textContent = `Last Week - ${
        data[4].timeframes.daily.previous
      }hr${data[4].timeframes.daily.previous > 0 ? "s" : ""}`;
      selfCareHours.textContent = `${data[5].timeframes.daily.current}hr${
        data[5].timeframes.daily.current > 0 ? "s" : ""
      }`;
      selfCareLastWeekHours.textContent = `Last Week - ${
        data[5].timeframes.daily.previous
      }hr${data[5].timeframes.daily.previous > 0 ? "s" : ""}`;

      break;
    case "selector-weekly":
      workHours.textContent = `${data[0].timeframes.weekly.current}hr${
        data[0].timeframes.weekly.current > 0 ? "s" : ""
      }`;
      workLastWeekHours.textContent = `Last Week - ${
        data[0].timeframes.weekly.previous
      }hr${data[0].timeframes.weekly.previous > 0 ? "s" : ""}`;
      playHours.textContent = `${data[1].timeframes.weekly.current}hr${
        data[1].timeframes.weekly.current > 0 ? "s" : ""
      }`;
      playLastWeekHours.textContent = `Last Week - ${
        data[1].timeframes.weekly.previous
      }hr${data[1].timeframes.weekly.previous > 0 ? "s" : ""}`;
      studyHours.textContent = `${data[2].timeframes.weekly.current}hr${
        data[2].timeframes.weekly.current > 0 ? "s" : ""
      }`;
      studyLastWeekHours.textContent = `Last Week - ${
        data[2].timeframes.weekly.previous
      }hr${data[2].timeframes.weekly.previous > 0 ? "s" : ""}`;
      exerciseHours.textContent = `${data[3].timeframes.weekly.current}hr${
        data[3].timeframes.weekly.current > 0 ? "s" : ""
      }`;
      exerciseLastWeekHours.textContent = `Last Week - ${
        data[3].timeframes.weekly.previous
      }hr${data[3].timeframes.weekly.previous > 0 ? "s" : ""}`;
      socialHours.textContent = `${data[4].timeframes.weekly.current}hr${
        data[4].timeframes.weekly.current > 0 ? "s" : ""
      }`;
      socialLastWeekHours.textContent = `Last Week - ${
        data[4].timeframes.weekly.previous
      }hr${data[4].timeframes.weekly.previous > 0 ? "s" : ""}`;
      selfCareHours.textContent = `${data[5].timeframes.weekly.current}hr${
        data[5].timeframes.weekly.current > 0 ? "s" : ""
      }`;
      selfCareLastWeekHours.textContent = `Last Week - ${
        data[5].timeframes.weekly.previous
      }hr${data[5].timeframes.weekly.previous > 0 ? "s" : ""}`;

      break;
    case "selector-monthly":
      workHours.textContent = `${data[0].timeframes.monthly.current}hr${
        data[0].timeframes.monthly.current > 0 ? "s" : ""
      }`;
      workLastWeekHours.textContent = `Last Week - ${
        data[0].timeframes.monthly.previous
      }hr${data[0].timeframes.monthly.previous > 0 ? "s" : ""}`;
      playHours.textContent = `${data[1].timeframes.monthly.current}hr${
        data[1].timeframes.monthly.current > 0 ? "s" : ""
      }`;
      playLastWeekHours.textContent = `Last Week - ${
        data[1].timeframes.monthly.previous
      }hr${data[1].timeframes.monthly.previous > 0 ? "s" : ""}`;
      studyHours.textContent = `${data[2].timeframes.monthly.current}hr${
        data[2].timeframes.monthly.current > 0 ? "s" : ""
      }`;
      studyLastWeekHours.textContent = `Last Week - ${
        data[2].timeframes.monthly.previous
      }hr${data[2].timeframes.monthly.previous > 0 ? "s" : ""}`;
      exerciseHours.textContent = `${data[3].timeframes.monthly.current}hr${
        data[3].timeframes.monthly.current > 0 ? "s" : ""
      }`;
      exerciseLastWeekHours.textContent = `Last Week - ${
        data[3].timeframes.monthly.previous
      }hr${data[3].timeframes.monthly.previous > 0 ? "s" : ""}`;
      socialHours.textContent = `${data[4].timeframes.monthly.current}hr${
        data[4].timeframes.monthly.current > 0 ? "s" : ""
      }`;
      socialLastWeekHours.textContent = `Last Week - ${
        data[4].timeframes.monthly.previous
      }hr${data[4].timeframes.monthly.previous > 0 ? "s" : ""}`;
      selfCareHours.textContent = `${data[5].timeframes.monthly.current}hr${
        data[5].timeframes.monthly.current > 0 ? "s" : ""
      }`;
      selfCareLastWeekHours.textContent = `Last Week - ${
        data[5].timeframes.monthly.previous
      }hr${data[5].timeframes.monthly.previous > 0 ? "s" : ""}`;

      break;
    default:
      break;
  }
}

function onClickSelector(e) {
  const parent = e.target.closest(".dashboard__left__bottom__list__item");

  if (!parent) {
    return;
  }

  allSelectors.forEach((selector) => {
    selector.classList.remove("dashboard__left__bottom__list__item--active");
  });
  parent.classList.add("dashboard__left__bottom__list__item--active");

  changeDisplayedData(parent);
}

allSelectors.forEach((selector) => {
  selector.addEventListener("click", onClickSelector);
});
