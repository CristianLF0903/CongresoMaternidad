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
