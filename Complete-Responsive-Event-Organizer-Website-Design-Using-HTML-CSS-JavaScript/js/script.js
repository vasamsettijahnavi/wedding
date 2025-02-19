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

// Venue selection toggle functionality
// Get the venue selection box and venue list
const venueSelection = document.getElementById('venueSelection');
const venueList = document.getElementById('venueList');

// Initially, venue list is hidden
venueList.style.display = 'none';

// Toggle the visibility of the venue list when the venue selection box is clicked
venueSelection.addEventListener('click', function() {
    if (venueList.style.display === 'none') {
        venueList.style.display = 'block';  // Show the venue list
    } else {
        venueList.style.display = 'none';  // Hide the venue list
    }
});
const invitationSelection = document.getElementById('invitationSelection');
const invitationList = document.getElementById('invitationList');

// Initially hide the invitation list
invitationList.style.display = 'none';

// Toggle the visibility of the invitation list when the invitation card box is clicked
invitationSelection.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  if (invitationList.style.display === 'none') {
    invitationList.style.display = 'block'; // Show the invitation list
  } else {
    invitationList.style.display = 'none'; // Hide the invitation list
  }
});

