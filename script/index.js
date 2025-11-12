// ---------------- Modal Variables ----------------
const modalButtons = document.querySelectorAll(".modal-btn");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

// ---------------- Modal Functionality ----------------
modalButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = document.getElementById(btn.dataset.modal);
        modal.style.display = "block";
    });
});



// Close modal when clicking outside content
window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// ---------------- Hamburger Menu ----------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu if clicked outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ---------------- Smooth Scroll ----------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });


    

let close_MODAL = document.querySelector(".close").addEventListener("click",()=>{
         hamburger.classList.remove('active');
        navLinks.classList.remove('active');
})







});




// ---------------- Image Slider ----------------
const slidesContainer = document.querySelector('.slides');
const slidesList = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let current = 0;

// Create dots dynamically
slidesList.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    moveToSlide(index);
    resetInterval();
  });
});

const dots = document.querySelectorAll('.dot');

// Function to move slides
function moveToSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  current = index;
}


// Auto slide every 3 seconds
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  current++;
  if (current >= slidesList.length) {
    // Jump back to start without animation
    slidesContainer.style.transition = 'none';
    slidesContainer.style.transform = `translateX(0%)`;
    current = 0;
    // Force reflow so next slide animates
    slidesContainer.offsetHeight; 
  }
  slidesContainer.style.transition = 'transform 1s ease-in-out';
  moveToSlide(current);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}








// Wrap each letter in a span for animation
const heading = document.querySelector('.animated-heading');
const text = heading.textContent;
heading.textContent = '';

text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${i * 0.05}s`; // stagger each letter
    heading.appendChild(span);
});
