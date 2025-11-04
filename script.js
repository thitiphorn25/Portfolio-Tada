// เมนู sidebar active effect
const links = document.querySelectorAll('.sidebar ul li a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.parentElement.classList.remove('active'));
    link.parentElement.classList.add('active');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade effect on scroll
const sections = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      sec.classList.add('show');
    }
  });
});

// Mock contact form
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('ขอบคุณที่ติดต่อ ต้นหอมจะตอบกลับโดยเร็วที่สุด 💌');
  form.reset();
});
