"use strict";

const menuOpen = document.querySelector(".nav__menu");
const menuClose = document.querySelector(".nav__menu-close");
const navList = document.querySelector(".nav__list");

menuOpen.addEventListener("click", function () {
  if (navList.style.display === "none" || navList.style.display === "") {
    navList.style.display = "block";
    navList.style.transform = "translateX(0)";
    navList.style.display = "block";
  }
});

menuClose.addEventListener("click", function () {
  if (navList.style.display === "block") {
    navList.style.display = "none";
  }
});
