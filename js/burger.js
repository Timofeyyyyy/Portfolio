let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let fon = document.querySelector(".fon-burger-menu");
let links = document.querySelectorAll(".burger-link");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");

  fon.classList.toggle("active");
});
