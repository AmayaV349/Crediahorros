document.querySelectorAll('.dropdown a').forEach(link => {
  link.addEventListener('click', event => {
    if (link.target === '_blank') {
      // Permite que los enlaces con target="_blank" funcionen correctamente
      return;
    }

    // Para enlaces internos, puedes prevenir la acción predeterminada si es necesario
    event.preventDefault();
    console.log('Clic en enlace interno');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // RED DE CAJEROS
  const tarjetas = document.querySelectorAll('.tarjeta');
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('click', (event) => {
      // Verificar si el clic fue sobre un enlace con target="_blank"
      const link = event.target.closest('a'); // Encuentra el enlace más cercano en el árbol del DOM
      if (link && link.target === '_blank') {
        return; // Permitir el comportamiento predeterminado del enlace
      }
      tarjeta.classList.toggle('girar'); // Agregar o quitar la clase "girar"
    });
  });

  // PUNTOS EFECTY, TARJETA DÉBITO
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
});

// SECCION CELEBRACIONES - versión robusta con debug
function getTrack() {
  const track = document.getElementById("fiestasTrack");
  if (!track) {
    console.error("fiestasTrack no encontrado en el DOM");
    return null;
  }
  return track;
}

function fiestasScrollRight() {
  const track = getTrack();
  if (!track) return;

  // Si no hay contenido suficiente, informar
  const maxScroll = track.scrollWidth - track.clientWidth;
  if (maxScroll <= 0) {
    console.info("No hay suficiente contenido para desplazar (scrollWidth <= clientWidth).", {
      scrollWidth: track.scrollWidth,
      clientWidth: track.clientWidth
    });
    return;
  }

  // Monto de desplazamiento: 80% de ancho visible o el ancho de la primera tarjeta
  const firstCard = track.querySelector('.fiestas-card');
  const step = firstCard ? Math.round(firstCard.getBoundingClientRect().width * 0.9) : Math.round(track.clientWidth * 0.8);

  // Nuevo valor con límite
  const newScroll = Math.min(track.scrollLeft + step, maxScroll);
  track.scrollTo({ left: newScroll, behavior: 'smooth' });
}

function fiestasScrollLeft() {
  const track = getTrack();
  if (!track) return;

  const maxScroll = track.scrollWidth - track.clientWidth;
  if (maxScroll <= 0) {
    console.info("No hay suficiente contenido para desplazar (scrollWidth <= clientWidth).", {
      scrollWidth: track.scrollWidth,
      clientWidth: track.clientWidth
    });
    return;
  }

  const firstCard = track.querySelector('.fiestas-card');
  const step = firstCard ? Math.round(firstCard.getBoundingClientRect().width * 0.9) : Math.round(track.clientWidth * 0.8);

  const newScroll = Math.max(track.scrollLeft - step, 0);
  track.scrollTo({ left: newScroll, behavior: 'smooth' });
}

// Opcional: detectar clicks en flechas delegando (útil si las flechas se generan dinámicamente)
document.addEventListener('click', function (e) {
  if (e.target.closest('.fiestas-btn-right')) fiestasScrollRight();
  if (e.target.closest('.fiestas-btn-left')) fiestasScrollLeft();
});



