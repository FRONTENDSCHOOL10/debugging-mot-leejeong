import getPbImageURL from '@/api/getPbImageURL';
import pb from '@/api/pocketbase';
import '@/pages/main/main.scss';
import { insertLast } from 'kind-tiger';

/* --------------------------- 메인 배너 --------------------------- */
async function renderBannerItem() {
  const bannerData = await pb.collection('main_banner').getFullList({
    sort: '-created',
  });

  bannerData.forEach((item) => {
    const template = `
    <div class="swiper-slide">
                <div class="banner__info">
                  <div class="banner__title">
                    <img
                      src="${getPbImageURL(item, 'logo')}"
                      alt="${item.bannerTitle}"
                    />
                    <div class="banner__description-wrapper">
                      <p class="banner__description label-small">
                        ${item.bannerDescription1}
                      </p>
                      <p class="banner__description label-small">
                        ${item.bannerDescription2}
                      </p>
                    </div>
                  </div>
                  <div class="banner__button">
                    <a href="/" class="btn__more paragraph-medium"
                      >자세히 보기</a
                    >
                  </div>
                </div>
                <div class="banner__background-image">
                  <img
                    src="${getPbImageURL(item, 'background')}"
                    alt="${item.bannerTitle}"
                  />
                </div>
              </div>`;

    insertLast('.mainSwiper > .swiper-wrapper', template);
  });

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
}

renderBannerItem();
