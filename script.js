let currentIndex = 0;
const sections = document.querySelectorAll(".section");
const maxSections = 5; // Restrict to only 5 sections
const wrapper = document.getElementById("wrapper");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let scrolling = false;

function updateButtonColors() {
  nextBtn.classList.toggle("active", currentIndex < maxSections - 1);
  prevBtn.classList.toggle("active", currentIndex > 0);
}

function scrollToSection() {
  if (currentIndex >= maxSections) {
    currentIndex = maxSections - 1; // Prevent going beyond 5 sections
  }
  wrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
  scrolling = true;
  setTimeout(() => (scrolling = false), 800);
  updateButtonColors();
}

window.addEventListener("wheel", (event) => {
  if (scrolling) return;
  if (event.deltaY > 0 && currentIndex < maxSections - 1) {
    currentIndex++;
  } else if (event.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  }
  scrollToSection();
});

function nextPage() {
  if (currentIndex < maxSections - 1) {
    currentIndex++;
    scrollToSection();
  }
}

function prevPage() {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToSection();
  }
}

updateButtonColors(); 

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger i");

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    setTimeout(() => {
      menu.style.display = "none";
    }, 500);
    hamburger.classList.remove("bi-x");
    hamburger.classList.add("bi-list");
  } else {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.classList.add("show");
    }, 10);
    hamburger.classList.remove("bi-list");
    hamburger.classList.add("bi-x");
  }
} 
