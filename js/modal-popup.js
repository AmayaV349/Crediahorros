const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".modal-close-btn"); // Asegúrate de usar la clase correcta

// --- Mostrar al cargar la página ---
document.addEventListener('DOMContentLoaded', () => {
    // Añade la clase 'is-active' para iniciar la transición y hacerlo visible
    modal.classList.add('is-active'); 
});

// --- Funciones de Cierre ---
const closeModal = () => {
    // Remueve la clase 'is-active' para iniciar la transición de ocultamiento
    modal.classList.remove('is-active');
}

// Cierre con la 'x'
closeBtn.addEventListener('click', closeModal);

// Cierre al hacer clic fuera del modal (el fondo)
window.addEventListener('click', (event) => {
    // 'target' es el elemento donde se hizo clic
    if (event.target === modal) {
        closeModal();
    }
});