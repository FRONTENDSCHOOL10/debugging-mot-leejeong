import '@/pages/main/main.scss';
import { tiger, insertLast } from 'kind-tiger';
import getPbImageURL from '@/api/getPbImageURL';

/* ------------- 메인 배너 데이터 연동 테스트 ------------- */
// const pb = new PocketBase('https://every-taing.pockethost.io/');

async function renderBannerItem() {
  const responseBanner = await tiger.get(
    'https://every-taing.pockethost.io/api/collections/main_banner/records'
  );
  const bannerData = responseBanner.data.items;

  bannerData.forEach((item) => {
    console.log(item);

    const template = `
    <div class="swiper-slide">
                <div class="banner__info">
                  <div class="banner__title">
                    <img
                      src="${getPbImageURL(item, 'logo')}"
                      alt="${item.bannerTitle}"
                    />
                    <p class="banner__description label-small">
                      ${item.bannerDescription}
                    </p>
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
}

renderBannerItem();

async function renderMustItem() {
  const reponseMust = await tiger.get(
    'https://every-taing.pockethost.io/api/collections/main_must/records'
  );
  const mustData = reponseMust.data.items;

  mustData.forEach((item) => {
    console.log(item);

    const template = `
    <div class="swiper-slide">
              <div class="thumbnail-wrapper">
                <img src="${getPbImageURL(item, 'mustThumbnail')}" alt="${item.mustTitle}" />
              </div>
              <div class="main-title paragraph-medium">${item.mustTitle}</div>
            </div>
  `;

    insertLast('.swiperMust > .swiper-wrapper', template);
  });
}
renderMustItem();
