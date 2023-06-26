
//Titles animation

const titlesToAnimate = document.querySelectorAll(".title-to-animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animate-title", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
    });
  },
  { threshold: 1 }
);

titlesToAnimate.forEach((title) => {
    observer.observe(title);
  });

  const logo = document.getElementById('logo');
 ;

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

