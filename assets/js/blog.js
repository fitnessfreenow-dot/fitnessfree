// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");

const overlay = document.createElement("div");
overlay.id = "menu-overlay";
overlay.style.cssText = `
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.45);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  z-index: 999;
`;
document.body.appendChild(overlay);

function openNav() {
  navbar.classList.add("active");
  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  navbar.classList.remove("active");
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
  document.body.style.overflow = "auto";
}

hamburger.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

// Typing text
const typingText = document.querySelector(".typing-text");
const words = [
  "Starting your journey",
  "Achieve fitness goals",
  "Feel better every day",
];
let wordIndex = 0;
let charIndex = 0;

function typeWords() {
  if (!typingText) return;

  const word = words[wordIndex];
  typingText.textContent = word.slice(0, charIndex++);

  if (charIndex > word.length) {
    setTimeout(() => eraseWord(), 1000);
  } else {
    setTimeout(typeWords, 100);
  }
}

function eraseWord() {
  const word = words[wordIndex];
  typingText.textContent = word.slice(0, --charIndex);

  if (charIndex === 0) {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWords, 300);
  } else {
    setTimeout(eraseWord, 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWords, 500);
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;
    if (elementTop < windowHeight - visiblePoint) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease";
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
