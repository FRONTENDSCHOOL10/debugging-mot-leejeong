document.addEventListener('DOMContentLoaded', function () {
  /* ---------------- 메인 배너 스와이퍼 ---------------- */
  var swiper = new Swiper('.mainSwiper', {
    navigation: {
      nextEl: '.mainSwiper .swiper-button-next',
      prevEl: '.mainSwiper .swiper-button-prev',
    },
    loop: true,
    pagination: {
      el: '.mainSwiper .swiper-pagination',
    },
  });

  // /* ----------------- 컨텐츠 스와이퍼 ----------------- */
  const swiperConfigs = [
    { selector: '.swiperMust' },
    { selector: '.swiperQuick' },
    { selector: '.swiperPopular' },
    { selector: '.swiperLive' },
    { selector: '.swiperOnly' },
    { selector: '.swiperBanner' },
    { selector: '.swiperEvent' },
  ];

  function createSwipers(configs) {
    return configs.map(
      (config) =>
        new Swiper(config.selector, {
          // 공통 설정
          slidesPerView: 'auto',
          spaceBetween: 8,
          pagination: {
            el: `${config.selector} .swiper-pagination`,
            clickable: true,
          },
          navigation: {
            nextEl: `${config.selector} .swiper-button-next`,
            prevEl: `${config.selector} .swiper-button-prev`,
          },
          breakpoints: {
            1025: {
              spaceBetween: 16,
            },
          },
        })
    );
  }

  const swipers = createSwipers(swiperConfigs);
});
