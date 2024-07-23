const navbarList = document.querySelector(".header__left__navbar__list");
const navLinks = document.querySelectorAll(".header__left__navbar__list__item");

// Close dropdown when clicked outside
window.addEventListener("click", (e) => {
  const navLink = e.target.closest(".header__left__navbar__list__item");

  if (!navLink) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }
});

// Toggle dropdown
navbarList.addEventListener("click", (e) => {
  // Get clicked nav link element
  const navLink = e.target.closest(".header__left__navbar__list__item");

  // If clicked element is not a nav link, return
  if (!navLink) {
    return;
  }

  // Toggle clicked dropdown
  navLink.classList.toggle("active");

  // Close all other active dropdowns
  navLinks.forEach((link) => {
    // If clicked nav link is the same as the current nav link, don't close it
    if (link === navLink) {
      return;
    }

    link.classList.remove("active");
  });
});
