const markAsRead = document.querySelector(".notifications__header__button");
const notificationsCount = document.querySelector(
  ".notifications__header__wrapper__number"
);
const notificationsEl = document.querySelectorAll(
  ".notifications__list__notification"
);

markAsRead.addEventListener("click", function (e) {
  e.preventDefault();

  notificationsEl.forEach((notification) => {
    if (
      notification.classList.contains(
        "notifications__list__notification--unread"
      )
    ) {
      notification.classList.remove(
        "notifications__list__notification--unread"
      );
    }
  });

  notificationsCount.textContent = 0;
});
