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


