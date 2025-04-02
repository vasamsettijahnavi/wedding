let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () => {
  themeToggler.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }
});

// Swiper initialization for home-slider
var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

// Swiper initialization for review-slider
var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: { slidesPerView: 1 },
    700: { slidesPerView: 2 },
    1050: { slidesPerView: 3 }
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});

// Smooth Scrolling to #contact
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Booking form submission
document.getElementById('bookingForm').addEventListener('submit', function() {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.value = 'Booked';
    submitBtn.disabled = true; // Prevent multiple submissions
    alert('Booking submitted successfully! We will contact you soon.');
});

document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
      });
  });
});