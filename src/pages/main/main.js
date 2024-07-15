document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.mainSwiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper1 = new Swiper('.contentsSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
