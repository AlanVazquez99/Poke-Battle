// Utils
import "@utils/string"

// Router
import router from "@router/router";

// Components
import { toggleActive, updateHeaderLink } from "@components/header";

// Styles
import "@styles/main.styl";

const menuElement = document.querySelector(".header--menu");
const linksElement = document.querySelector(".header--links");

menuElement.addEventListener("click", () => toggleActive(menuElement));

function loadContent() {
  updateHeaderLink();
  router(location.hash);
}

["load", "hashchange"].forEach((eventType) =>
  window.addEventListener(eventType, loadContent)
);
