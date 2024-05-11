import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";

// Eventos para el menu lateral para pantallas pequeñas
document.getElementById("MovilMenuOpen").addEventListener("click", function () {
  document.getElementById("Sidebar").classList.toggle("translate-x-full");
});

document
  .getElementById("MovilMenuClose")
  .addEventListener("click", function () {
    document.getElementById("Sidebar").classList.toggle("translate-x-full");
  });

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
