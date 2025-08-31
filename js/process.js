// Espera a que todo el HTML esté cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los botones que abren/cierran el acordeón
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        // El 'accordion-item' es el div padre del botón que se ha presionado
        const currentItem = header.parentElement;
        
        // Comprueba si el item presionado ya está abierto
        const isOpen = currentItem.classList.contains('active');
  
        // Antes de hacer nada, cerramos todos los items que puedan estar abiertos
        document.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
          item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });
  
        // Si el item que presionamos NO estaba abierto, lo abrimos
        if (!isOpen) {
          currentItem.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  
  });