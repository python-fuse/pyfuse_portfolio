var toggle = document.getElementById('toggle')
var nav = document.getElementById('menu')

toggle.addEventListener('click', () => {
  if (nav.style.opacity == 0) {
    nav.style.opacity = 1;
    nav.style.left = 0;
  } else {
    nav.style.opacity = 0;
    nav.style.left = '-22rem'
  }
}) // Add this JavaScript to your main.js file
const sections = document.querySelectorAll('.fade-in');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.0001, // Adjust as needed to control when the fade-in happens
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Add this JavaScript to your main.js file
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth', // This enables smooth scrolling
      });
    }
  });
});
