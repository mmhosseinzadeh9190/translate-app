"use strict";

const inputNav = document.getElementById("input-nav");
const outputNav = document.getElementById("output-nav");
const navPills = document.querySelectorAll(".nav-pills");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownIcon = document.querySelectorAll(".dropdown__icon");
const dropdownMenu = document.querySelectorAll(".dropdown__menu");
const inputDropdownMenu = document.getElementById("input-dropdown-menu");
const outputDropdownMenu = document.getElementById("output-dropdown-menu");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const textarea = document.querySelectorAll(".text-area");
const textareaIcon = document.querySelector(".icon-box--text-area");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const btnTranslate = document.querySelector(".btn-translate");
const btnDelete = document.querySelector(".btn-delete");
const btnSound = document.querySelectorAll(".btn-sound");
const btnCopy = document.querySelectorAll(".btn-copy");
const btnSwap = document.querySelector(".btn-swap");
const letters = document.querySelector(".letters");

const supportedLanguages = [
  { langName: "Arabic", langIsoCode: "ar" },
  { langName: "Azerbaijani", langIsoCode: "az" },
  { langName: "French", langIsoCode: "fr" },
  { langName: "German", langIsoCode: "de" },
  { langName: "Hindi", langIsoCode: "hi" },
  { langName: "Irish", langIsoCode: "ga" },
  { langName: "Italian", langIsoCode: "it" },
  { langName: "Japanese", langIsoCode: "ja" },
  { langName: "Korean", langIsoCode: "ko" },
  { langName: "Latin", langIsoCode: "la" },
  { langName: "Polish", langIsoCode: "pl" },
  { langName: "Russian", langIsoCode: "ru" },
  { langName: "Spanish", langIsoCode: "es" },
  { langName: "Swedish", langIsoCode: "sv" },
  { langName: "Turkish", langIsoCode: "tr" },
  { langName: "Ukrainian", langIsoCode: "uk" },
];

// dropdown functionality
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

// places cursor at the end of input text
const placeCursorAtEnd = function () {
  const len = inputText.value.length;
  inputText.scrollTop = 9999;
  inputText.setSelectionRange(len, len);
};
placeCursorAtEnd();
