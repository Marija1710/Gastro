const value = document.querySelector("#value");
const input = document.querySelector("#people-input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

//Date restriction
var today = new Date();
var formattedDate = today.toISOString().split("T")[0];
document.getElementById("textDate").min = formattedDate;

//Student Menues
const studentName = document.querySelectorAll(".student-name");
const studentMenu = document.querySelectorAll(".student-menu");

for (const [i, heading] of studentName.entries()) {
  studentName[i].addEventListener("click", (e) => {
    studentMenu.forEach((student) =>
      student.classList.remove("js-student-menu")
    );
    studentMenu[i].classList.add("js-student-menu");

    studentName.forEach((name) => name.classList.remove("js-student-name"));
    studentName[i].classList.add("js-student-name");

  });
}

const checkboxList = document.querySelectorAll(".checkbox-list");
const deliveryOptionTitle = document.querySelectorAll(".delivery-option-title");

for (const [elena] of deliveryOptionTitle.entries()) {
  deliveryOptionTitle[elena].addEventListener("click", () => {
    // console.log(elena);
    deliveryOptionTitle[elena].classList.toggle("js-delivery-option-title");
    checkboxList[elena].classList.toggle("js-checkbox-list");
  });
}

//Burger Menu
const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const burgerMenuBtnClose = document.querySelector(".close-burger-menu-btn");
const nav = document.querySelector(".nav");
const body = document.querySelector(".body");
const overlay = document.querySelector(".overlay");

burgerMenuBtn.addEventListener("click", () => {
  nav.classList.add("js-burger-menu");
  overlay.classList.add("js-overlay");
  body.style.overflow = "hidden";
});

burgerMenuBtnClose.addEventListener("click", () => {
  nav.classList.remove("js-burger-menu");
  overlay.classList.remove("js-overlay");
  body.style.overflow = "auto";
});

overlay.addEventListener("click", () => {
  nav.classList.remove("js-burger-menu");
  overlay.classList.remove("js-overlay");
  body.style.overflow = "auto";
});

//Search Functionality
const inputSearch = document.querySelector(".search-input");
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    window.open(`https://www.allrecipes.com/search?q=${inputSearch.value}`);
  }
});

//Header sticky on scroll
if (window.innerWidth < 768) {
  let oldValue = 0;
  let newValue = 0;

  window.onscroll = function () {
    window.addEventListener("scroll", (e) => {
      newValue = window.pageYOffset;

      if (oldValue < newValue || newValue > 50) {
        document.querySelector(".header").classList.add("menu-scroll");
        console.log(newValue + "newValue1");
        console.log(oldValue + "oldValue1");
      } else {
        document.querySelector(".header").classList.remove("menu-scroll");
        console.log(newValue + "newValue2");
        console.log(oldValue + "oldValue2");
      }
    });
  };
}
