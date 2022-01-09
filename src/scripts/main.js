import router from "@router/router";
import { toggleActive, updateHeaderLink } from "@views/header";
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
