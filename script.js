document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM content to be fully loaded
  
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
    const navbarCta = document.getElementById('navbar-cta');
  
    if (toggleButton && navbarCta) {
      toggleButton.addEventListener('click', function () {
        // Toggle the 'hidden' class on the navbar-cta element
        navbarCta.classList.toggle('hidden');
      });
    }
  });
  