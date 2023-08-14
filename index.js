let openI = document.getElementById("open");
let closeI = document.getElementById("close");
let ul = document.getElementById("ul");
let navList = document.getElementById("navList");
function openMenu() {
  ul.style.display = "block";
  openI.style.display = "none";
  closeI.style.display = "block";
}

function closeMenu() {
  ul.style.display = "none";
  openI.style.display = "block";
  closeI.style.display = "none";
}
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function scrolly() {
  if (scrollY > 50) {
    navList.style.backgroundColor = "white";
    navList.style.position = "fixed";
    navList.style.top = "0px";
  }
}
scrolly();
