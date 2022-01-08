export const toggleActive = (element) => element.classList.toggle("is-active");

export function updateHeaderLink() {
  const location = window.location.hash;
  if (!location) return;

  const linkClass = "header--links--item";

  const active = document.querySelector(`.${linkClass}[href='${location}']`);
  const previousActive = document.querySelector(`.${linkClass}.is-active`);

  !previousActive || toggleActive(previousActive);
  active && toggleActive(active);
}
