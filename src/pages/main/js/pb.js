import { tiger, insertLast } from 'kind-tiger';

/* ------------- 메인 배너 데이터 연동 테스트 ------------- */
// const pb = new PocketBase(
//   'http://127.0.0.1:8090/api/collections/banners/records'
// );

async function renderBannerItem() {
  const responseBanner = await tiger.get(
    'http://127.0.0.1:8090/api/collections/banners/records'
  );
  const bannersData = responseBanner.data.items;

  bannersData.forEach((item) => {
    // console.log(item);

    const template = `
    <div class="swiper-slide">
                <div class="banner__info">
                  <div class="banner__title">
                    <img
                      src="http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${
                        item.brand
                      }"
                      alt="${item.title}"
                    />
                    <p class="banner__description label-small">
                      ${item.description}
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
                    src="http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${
                      item.background
                    }"
                
                    alt="${item.title}"
                  />
                </div>
              </div>`;

    insertLast('.mainSwiper > .swiper-wrapper', template);
  });
}

renderBannerItem();

async function renderMustItem() {
  const reponseMust = await tiger.get(
    'http://127.0.0.1:8090/api/collections/must/records'
  );
  const mustData = reponseMust.data.items;

  mustData.forEach((item) => {
    console.log(item);

    const template = `
    <div class="swiper-slide">
              <div class="thumbnail-wrapper">
                <img src="http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${
                  item.thumbnail
                }" alt="${item.title}" />
              </div>
              <div class="main-title paragraph-medium">${item.title}</div>
            </div>
  `;

    insertLast('.swiperMust > .swiper-wrapper', template);
  });
}
renderMustItem();
