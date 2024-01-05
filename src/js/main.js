// Nav Bar Start

import { initializeNavBar } from "./nav-bar.js";

// For a browser
window.addEventListener("DOMContentLoaded", (event) => {
  initializeNavBar();
});

// Nav Bar End

// Search box
const searchButton = document.getElementById("search-button");
const searchContent = document.getElementById("search-content");
const crossButton = document.querySelector(".cross-btn");

searchButton.addEventListener("click", () => {
  searchContent.style.display = "flex";
});
crossButton.addEventListener("click", () => {
  searchContent.style.display = "none";
});
// Search box end
