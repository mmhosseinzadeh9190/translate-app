"use strict";

const dropdown = document.querySelectorAll(".dropdown");
const dropdownIcon = document.querySelectorAll(".dropdown__icon");
const dropdownMenu = document.querySelectorAll(".dropdown__menu");
const textarea = document.querySelectorAll(".text-area");
const textareaIcon = document.querySelector(".icon-box--text-area");

window.addEventListener("click", function (e) {
  for (let i = 0; i < dropdown.length; i++) {
    if (e.target === dropdown[i] || e.target === dropdownIcon[i]) {
      dropdownIcon[i].classList.toggle("rotate");
      dropdownMenu[i].classList.toggle("show");
      textarea[i].classList.toggle("color-transparent");
      if (i === 0) textareaIcon.classList.toggle("hidden");
    } else {
      dropdownIcon[i].classList.remove("rotate");
      dropdownMenu[i].classList.remove("show");
      textarea[i].classList.remove("color-transparent");
      if (i === 0) textareaIcon.classList.remove("hidden");
    }
  }
});
