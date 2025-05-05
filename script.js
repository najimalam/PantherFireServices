console.log("Script loaded successfully!");

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor click behavior

      const targetId = this.getAttribute('href'); // Get the href value (e.g., "#services")
      const targetElement = document.querySelector(targetId); // Find the element with that ID

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth' // Enable smooth scrolling
        });
      }
    });
  });
});
