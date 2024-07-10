document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  });

  // 클릭 이벤트
  document
    .querySelector('.swiper-button-prev')
    .addEventListener('click', function () {
      swiper.slidePrev();
    });
  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', function () {
      swiper.slideNext();
    });
});
