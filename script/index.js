document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { threshold: 0.2 };

  

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate testimonials and services
  document.querySelectorAll('.testimonials, .services').forEach(el => {
    observer.observe(el);
  });

  // Animate scent cards with stagger
  const scentCards = document.querySelectorAll('.scent-card');
  scentCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.2}s`; // stagger
    observer.observe(card);
  });
});














// Animate contact section on scroll
const contactSection = document.querySelector('.contact-section');
const observerOption = { threshold: 0.2 };

const contactObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOption);

contactObserver.observe(contactSection);

















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





const searchIcon = document.querySelector('.search-icon');
const searchPanel = document.querySelector('.search-panel');
const backArrow = document.querySelector('.back-arrow');

// Open search panel
searchIcon.addEventListener('click', () => {
  searchPanel.classList.add('active');
  searchIcon.classList.add('hidden');
});

// Close search panel
backArrow.addEventListener('click', () => {
  searchPanel.classList.remove('active');
  searchIcon.classList.remove('hidden');
});




// Select all elements to animate
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (element) => {
    element.classList.add('active');
};

const hideScrollElement = (element) => {
    element.classList.remove('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } 
        // optional: hide when scrolled out of view
        // else {
        //     hideScrollElement(el);
        // }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});





const slidesWrapper = document.querySelector('.sslides-wrapper');
const slides = document.querySelectorAll('.sslide');
const dotContainer = document.querySelector('.manual-dots');

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    const slideWidth = slides[i].offsetWidth + 20; // width + gap
    slidesWrapper.scrollTo({ left: slideWidth * i, behavior: 'smooth' });
    updateDots(i);
  });
});

const dot = document.querySelectorAll('.dot');

// Update dots on manual scroll
slidesWrapper.addEventListener('scroll', () => {
  const scrollLeft = slidesWrapper.scrollLeft;
  const slideWidth = slides[0].offsetWidth + 20;
  const index = Math.round(scrollLeft / slideWidth);
  updateDots(index);
});

function updateDots(index) {
  dot.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}



// Animate slides when they come into view
const observerOptions = {
  root: slidesWrapper,
  rootMargin: '0px',
  threshold: 0.5 // half of slide must be visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

slides.forEach(slide => observer.observe(slide));





// Animate cards when they appear on screen
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.animation = 'fadeUp 1s ease forwards';
    }
  });
});




// Animate sections or cards only when they appear in the viewport
const observerr = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 }); // triggers when 20% of element is visible

// Target elements you want to animate
document.querySelectorAll('.card, .our-promise h2, .story-overlay').forEach(el => {
  observerr.observe(el);
});



// Intersection Observer for Scroll Animations
const observerOptionsss = {
  threshold: 0.2
};

const observerrr = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      obs.unobserve(entry.target);
    }
  });
}, observerOptionsss);

// Animate testimonials
document.querySelectorAll('.testimonials, .services').forEach(el => {
  observerrr.observe(el);
});

// Animate scent cards with stagger
const scentCards = document.querySelectorAll('.scent-card');
scentCards.forEach((card, i) => {
  observer.observe(card);
  card.style.transitionDelay = `${i * 0.2}s`;
});













