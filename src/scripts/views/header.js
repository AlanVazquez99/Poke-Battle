const menuElement = document.querySelector(".header--menu");
const linksElement = document.querySelector(".header--links");

const toggleActive = (element) => element.classList.toggle("is-active");

function updateHeaderLink() {
  const location = window.location.hash;
  const linkClass = "header--links--item";

  const active = document.querySelector(`.${linkClass}[href='${location}']`);
  const previousActive = document.querySelector(`.${linkClass}.is-active`);

  !previousActive || toggleActive(previousActive);
  toggleActive(active);
}

menuElement.addEventListener("click", () => toggleActive(menuElement));
["load", "hashchange"].forEach((eventType) =>
  window.addEventListener(eventType, updateHeaderLink)
);
