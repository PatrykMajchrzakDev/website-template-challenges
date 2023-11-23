let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.5": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

let threeSetSwiper = new Swiper(".ThreeStepSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.5": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
