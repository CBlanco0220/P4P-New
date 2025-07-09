const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the mobile nav
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dynamically update footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
