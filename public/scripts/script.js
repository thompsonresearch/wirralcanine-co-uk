// Toggle the nav menu on mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});




