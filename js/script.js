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

// getting translatable languages from supported languages array on page loading
window.addEventListener("load", function () {
  supportedLanguages.sort().reverse();
  dropdownMenu.forEach((menu) => {
    menu.innerHTML = "";
    supportedLanguages.forEach((language) => {
      menu.insertAdjacentHTML("afterbegin", `<li class="dropdown__item"><span class="dropdown__content">${language.langName}</span></li>`);
    });
  });
});

// in case if you wanted to get translatable languages from API on page loading
// const langIsoCode = [];
// const langName = [];
// window.addEventListener("load", function () {
//   fetch(`https://restcountries.com/v3.1/all?fields=languages`)
//     .then((response) => {
//       if (!response.ok) throw new Error();
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       data.forEach((country) => {
//         for (const [key, value] of Object.entries(country?.languages)) {
//           langIsoCode.push(key.slice(0, 2));
//           langName.push(value);
//         }
//       });
//       const uniqueLangIsoCode = [...new Set(langIsoCode)];
//       const uniqueLangName = [...new Set(langName)];
//       dropdownMenu.forEach((menu) => {
//         menu.innerHTML = "";
//         uniqueLangName.forEach((item) => {
//           menu.insertAdjacentHTML("afterbegin", `<li class="dropdown__item"><span class="dropdown__content">${item}</span></li>`);
//         });
//       });
//     })
//     .catch(() => alert("Sorry, Could not get translatable languages!\nPlease check your internet connection then reload the page, Otherwise you will not be able to use the translator."));
// });

// changing the direction of the input and output text based on the selected language
const renderTextDir = function () {
  const inputLang = inputNav.querySelector(".nav-item--active").textContent;
  const outputLang = outputNav.querySelector(".nav-item--active").textContent;
  if (outputLang === "Persian" || outputLang === "Arabic") {
    outputText.style.direction = "rtl";
  } else {
    outputText.style.direction = "ltr";
  }
  if (inputLang === "Persian" || inputLang === "Arabic") {
    inputText.style.direction = "rtl";
  } else {
    inputText.style.direction = "ltr";
  }
};
renderTextDir();

// getting selected languages for translator input and output from dropdown menu
for (let i = 0; i < dropdownMenu.length; i++) {
  dropdownMenu[i].addEventListener("click", function (e) {
    if (e.target.classList.contains("dropdown__content") || e.target.classList.contains("dropdown__item")) {
      const selectedLang = e.target.textContent;
      const lastChildText = navPills[i].children[2].textContent;
      const lastChild = navPills[i].children[2];
      lastChild.textContent = selectedLang;
      const activeItem = navPills[i].querySelector(".nav-item--active");
      activeItem.classList.remove("nav-item--active");
      navPills[i].children[2].classList.add("nav-item--active");
      if (navPills[0].querySelector(".nav-item--active").textContent === navPills[1].querySelector(".nav-item--active").textContent) {
        alert("Sorry, The input and output language cannot be the same");
        lastChild.textContent = lastChildText;
        navPills[i].children[2].classList.remove("nav-item--active");
        activeItem.classList.add("nav-item--active");
      }
      renderTextDir();
    }
  });
}

// adding active class to selected language from navigation
for (let i = 0; i < navPills.length; i++) {
  navPills[i].addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-item") && !e.target.classList.contains("dropdown")) {
      const activeItem = navPills[i].querySelector(".nav-item--active");
      activeItem.classList.remove("nav-item--active");
      e.target.classList.add("nav-item--active");
      if (navPills[0].querySelector(".nav-item--active").textContent === navPills[1].querySelector(".nav-item--active").textContent) {
        alert("Sorry, The input and output language cannot be the same");
        activeItem.classList.add("nav-item--active");
        e.target.classList.remove("nav-item--active");
      }
      renderTextDir();
    }
  });
}
