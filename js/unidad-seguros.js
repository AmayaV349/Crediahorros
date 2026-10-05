document.addEventListener("DOMContentLoaded", function () {
  const carrusel = document.querySelector(".carrusel-contenedor");
  const slides = document.querySelectorAll(".carrusel-slide");
  const prevButton = document.getElementById("prev-seguro");
  const nextButton = document.getElementById("next-seguro");

  let currentIndex = 0;

  function updateCarrusel() {
    const offset = -currentIndex * 100; // Mover slides en porcentaje
    carrusel.style.transform = `translateX(${offset}%)`;
  }

  // Agregar verificación para evitar interferencias con enlaces
  function handleButtonClick(event, direction) {
    // Verificar si el evento proviene de un enlace con target="_blank"
    if (event.target.tagName === "A" && event.target.target === "_blank") {
      return; // Permitir comportamiento predeterminado
    }

    if (direction === "prev") {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    } else if (direction === "next") {
      currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    }
    updateCarrusel();
  }

  // Escuchar clics en botones de navegación con validación
  prevButton.addEventListener("click", (event) => handleButtonClick(event, "prev"));
  nextButton.addEventListener("click", (event) => handleButtonClick(event, "next"));
});

// Activa y desactiva el menú en dispositivos móviles
document.querySelector('.rd-navbar-btn-wrap .button').addEventListener('click', function() {
  document.querySelector('.rd-navbar-nav-wrap').classList.toggle('active');
});

// Maneja la apertura y cierre de submenús en móviles
document.querySelectorAll('.rd-navbar-nav .dropdown > a').forEach(item => {
  item.addEventListener('click', function(event) {
    const parentDropdown = this.parentElement;
    parentDropdown.classList.toggle('open');
    event.preventDefault();
  });
});

