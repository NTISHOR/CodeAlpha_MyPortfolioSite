// Smooth Scroll (already works with CSS scroll-behavior, but optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark mode toggle
const darkToggle = document.querySelector('.dark-toggle');
const backToTop = document.getElementById('back-to-top');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Back-to-top button & section fade-in
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';

  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      section.style.animation = 'fadeIn 1.5s ease forwards';
    }
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you, your message has been sent!');
});