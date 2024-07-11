document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    /* 자동 플레이 설정 */
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  });

  // 네비게이션 버튼 클릭 이벤트
  document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    swiper.slidePrev();
  });
  document.querySelector('.swiper-button-next').addEventListener('click', function () {
    swiper.slideNext();
  });
});
