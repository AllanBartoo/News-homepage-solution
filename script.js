const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__list");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  navLinks.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
}

function menuClose() {
  navLinks.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
}
