
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.stopImmediatePropagation(); // Detiene cualquier interferencia
        event.preventDefault();
        window.open(link.href, "_blank");
      });
    });
  });