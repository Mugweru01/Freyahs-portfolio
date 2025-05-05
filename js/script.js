// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile nav after click
        document.getElementById('mobile-nav').classList.add('hidden');
      }
    }
  });
});

// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Active nav link highlighting on scroll (yellow/green only)
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120; // Offset for fixed header
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove('active-link'));
      const activeLink = document.querySelectorAll('a[href="#' + section.id + '"]');
      activeLink.forEach(link => link.classList.add('active-link'));
    }
  });
}); 