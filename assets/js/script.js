// Typing animation
const text = "Welcome to Your Fitness Guide";
let index = 0;
const speed = 100;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

// Background slider
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === current) {
      slide.classList.add("active");
    }
  });
  current = (current + 1) % slides.length;
}

function startSlider() {
  showSlides();
  setInterval(showSlides, 5000);
}

// Mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

window.onload = () => {
  typeEffect();
  startSlider();
};
// Scroll Fade Effect
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // triggers fade animation
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((el) => observer.observe(el));
