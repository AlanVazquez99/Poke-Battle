export const toggleActive = (element) => element.classList.toggle("is-active");

export function updateHeaderLink() {
  const location = window.location.hash;
  if (!location) return;

  const linkClass = "header--links--item";

  // from `#/user/name/` to `#/user`
  const baseRoute = location.replace(/(#\/\w+)\/.*/g, "$1");
  const active = document.querySelector(`.${linkClass}[href^='${baseRoute}']`);
  const previousActive = document.querySelector(`.${linkClass}.is-active`);

  !previousActive || toggleActive(previousActive);
  active && toggleActive(active);
}
