document.addEventListener('click', (e)=>{
  const dd = e.target.closest('.dropdown');
  document.querySelectorAll('.dropdown').forEach(el=>{
    if (el !== dd) el.classList.remove('open');
  });
  if (dd && e.target.matches('.dropdown > .btn')) {
    e.preventDefault();
    dd.classList.toggle('open');
  }
});

// Minimal JS: mobile menu toggle, active link highlighting
(function(){
  const toggle = document.querySelector('#menuToggle');
  const menu = document.querySelector('#menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
  // set active nav by pathname
  const path = location.pathname.replace(/\/index\.html$/, '/');
  const links = document.querySelectorAll('nav a');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const normalized = href.replace(/\/index\.html$/, '/');
    if (path.endsWith(normalized)) a.classList.add('active');
  });
})();

// Slider functionality
(function(){
  const slidesContainer = document.querySelector('.slides');
  if (!slidesContainer) return; // stop if no slider on page

  const slides = document.querySelectorAll('.slide');
  const pagination = document.querySelector('.pagination');
  let currentIndex = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    pagination.appendChild(dot);
  });

  function goToSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.pagination-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  // Auto-slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 5000);
})();

// Destinations carousel with wrap-around
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.destinations-carousel .card');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndexDest = 0;
const visibleCards = 3;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndexDest * (100 / visibleCards)}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndexDest < cards.length - visibleCards) {
    currentIndexDest++;
  } else {
    // loop back to start
    currentIndexDest = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (currentIndexDest > 0) {
    currentIndexDest--;
  } else {
    // loop back to end
    currentIndexDest = cards.length - visibleCards;
  }
  updateCarousel();
});


document.addEventListener("DOMContentLoaded", function() {
  const scrollElements = document.querySelectorAll('.scroll-fade');

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // trigger only once
      }
    });
  }, { threshold: 0.3 });

  scrollElements.forEach(function(el) {
    observer.observe(el);
  });
});





