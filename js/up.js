// scroll up
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 400) {
    topBtn.classList.add("top-show");
  } else {
    topBtn.classList.remove("top-show");
  }
});
let topBtn = document.querySelector(".top");
topBtn.addEventListener("click", function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50);
    setTimeout(backToTop, 5);
  }
});
