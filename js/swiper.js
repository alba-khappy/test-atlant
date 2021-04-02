const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-1',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

  