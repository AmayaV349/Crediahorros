document.querySelectorAll('.accordion-btn').forEach(button => {
  button.addEventListener('click', function (event) {
    // Verificar si el clic fue sobre un enlace con target="_blank"
    if (event.target.tagName === 'A' && event.target.target === '_blank') {
      return; // Permitir el comportamiento predeterminado del enlace
    }

    // Toggle the active class to change the button's icon
    this.classList.toggle('active');

    // Get the next sibling element (the panel)
    const panel = this.nextElementSibling;

    // If the panel is currently shown, hide it, otherwise, show it
    if (panel.classList.contains('show')) {
      panel.classList.remove('show'); // Hide panel
    } else {
      panel.classList.add('show'); // Show panel
    }
  });
});

// FUNCION DE CUENTAS EN EL CUENTAS-AHORRO.HTML
function toggleRequirements(id) {
  // Ocultar todos los requisitos
  const allRequirements = document.querySelectorAll('.requirements');
  allRequirements.forEach(requirement => {
    requirement.style.display = 'none';
    requirement.classList.remove('visible');
  });

  // Mostrar el requisito seleccionado
  const selectedRequirement = document.getElementById(id);
  if (selectedRequirement) {
    if (selectedRequirement.style.display === 'block') {
      selectedRequirement.style.display = 'none';
      selectedRequirement.classList.remove('visible');
    } else {
      selectedRequirement.style.display = 'block';
      selectedRequirement.classList.add('visible');
    }
  }
}

