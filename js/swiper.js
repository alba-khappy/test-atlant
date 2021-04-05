const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 30,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    renderBullet: function (index, className) {
      let arr = new Array ("правовой консталтинг", "оспаривание кадастровой стоимости", "оценка", "юридические услуги", "аудит");
      return `<div class="swiper-div-wrapper"> <div class="swiper-text">${arr[index]}</div> <div class="swiper-pagination-bullet"></div> </div>`;
    }
  },



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

  