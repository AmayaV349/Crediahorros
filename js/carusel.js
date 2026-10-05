const wrapper = document.querySelector('.carousel1-wrapper');
const prevButton = document.querySelector('.carousel1-prev');
const nextButton = document.querySelector('.carousel1-next');

let currentIndex = 0;

// Recalcula el ancho del item según la responsividad
function getVisibleItemsCount() {
  const itemWidth = document.querySelector('.carousel1-item').offsetWidth;
  const containerWidth = document.querySelector('.carousel1-container').offsetWidth;
  return Math.floor(containerWidth / itemWidth);
}

function updateCarousel() {
  const itemWidth = document.querySelector('.carousel1-item').offsetWidth;
  wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Botón anterior
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Botón siguiente
nextButton.addEventListener('click', () => {
  const maxIndex = wrapper.children.length - getVisibleItemsCount();
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

// Ajusta automáticamente al redimensionar la pantalla
window.addEventListener('resize', () => {
  updateCarousel();
});


