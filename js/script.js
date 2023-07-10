//Banner logo parrallax
const banner = document.querySelector(".banner");
const bannerImage = document.querySelector(".banner img");
let bannerImageMarginTop = -10;
bannerImage.style.marginTop = `${bannerImageMarginTop}%`;

let lastScrollTop = 0;
window.addEventListener("scroll", (e) => {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    if (bannerImageMarginTop <= 50) {
      bannerImageMarginTop += 1;
    }
  } else if (scrollTop < lastScrollTop) {
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    if (
      bannerImageMarginTop >= 10 &&
      banner.getBoundingClientRect().bottom > 405
    ) {
      bannerImageMarginTop -= 1;
    }
  } // else was horizontal scroll
  bannerImage.style.marginTop = `${bannerImageMarginTop}%`;
});

//Titles animation

const titlesToAnimate = document.querySelectorAll(".title-to-animate");

const titlesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animate-title", entry.isIntersecting);
      if (entry.isIntersecting) {
        titlesObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 1 }
);

titlesToAnimate.forEach((title) => {
  titlesObserver.observe(title);
});

//Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//Cloud animation
const cloudsToAnimate = document.querySelectorAll(".cloud");

const cloudsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animate-cloud", entry.isIntersecting);
      if (entry.isIntersecting) {
        cloudsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 1 }
);

cloudsToAnimate.forEach((cloud) => {
  cloudsObserver.observe(cloud);
});

//Modal
const burgerMenuBtn = document.querySelector(".modal-toggle");
const menuModal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalMenuItems = document.querySelectorAll(".modal-nav ul li a");

//Open modal
burgerMenuBtn.addEventListener("click", openModal);
function openModal() {
  menuModal.style.display = "block";
  burgerMenuBtn.style.display = "none";
  modalCloseBtn.style.display = "block";
  menuModal.classList.toggle("modal-fade-in");
}

//Close modal
modalCloseBtn.addEventListener("click", closeModal);
modalMenuItems.forEach((item) => {
  item.addEventListener("click", closeModal);
});

function closeModal() {
  menuModal.style.display = "none";
  burgerMenuBtn.style.display = "block";
  modalCloseBtn.style.display = "none";
  menuModal.classList.toggle("modal-fade-in");
}
