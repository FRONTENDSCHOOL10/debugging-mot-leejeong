import '@/pages/main/main.scss';
import { tiger, insertLast } from 'kind-tiger';
import getPbImageURL from '@/api/getPbImageURL';

/* ------------- 메인 배너 ------------- */
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

/* ------------- 티빙에서 꼭 봐야 하는 컨텐츠 ------------- */
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

/* ------------- Quick VOD ------------- */
async function renderQuickItem() {
  const reponseQuick = await tiger.get(
    'https://every-taing.pockethost.io/api/collections/main_quick/records'
  );
  const mustData = reponseQuick.data.items;

  mustData.forEach((item) => {
    console.log(item);

    const template = `
    <div class="swiper-slide">
      <div class="thumbnail-wrapper">
        <div class="icon-quick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="30"
            viewBox="0 0 96 30"
            fill="none"
          >
            <rect width="96" height="30" rx="4" fill="#C73E4E" />
            <path
              d="M13.25 17.2031H15.1094L16.0703 18.4688C16.7188 17.7969 17.1016 16.75 17.0938 15.3438C17.1016 12.7578 15.8047 11.3594 13.9531 11.3594C12.1094 11.3594 10.8047 12.7578 10.8125 15.3438C10.8047 17.9297 12.1094 19.3281 13.9531 19.3281C14.25 19.3281 14.5312 19.2891 14.7969 19.2188L13.25 17.2031ZM8.76562 15.3438C8.75781 11.6875 10.9766 9.53125 13.9531 9.53125C16.9141 9.53125 19.1484 11.6875 19.1406 15.3438C19.1484 17.3984 18.4453 18.9766 17.3047 19.9688L18.875 21.9844H16.8906L15.9453 20.7891C15.3359 21.0312 14.6641 21.1562 13.9531 21.1562C10.9766 21.1562 8.75781 18.9922 8.76562 15.3438ZM26.2969 17.4375V12.5156H28.2812V21H26.3594V19.5H26.2656C25.875 20.4453 24.9844 21.1094 23.7188 21.1094C22.0391 21.1094 20.8828 19.9531 20.875 17.9219V12.5156H22.875V17.6094C22.875 18.6875 23.5156 19.375 24.4844 19.375C25.3594 19.375 26.2969 18.7344 26.2969 17.4375ZM30.1875 21V12.5156H32.1875V21H30.1875ZM30.0469 10.2188C30.0469 9.625 30.5703 9.14062 31.2031 9.14062C31.8359 9.14062 32.3594 9.625 32.3594 10.2188C32.3594 10.8203 31.8359 11.3047 31.2031 11.3125C30.5703 11.3047 30.0469 10.8203 30.0469 10.2188ZM37.7969 21.1719C35.2656 21.1719 33.7344 19.3594 33.7344 16.7969C33.7344 14.1953 35.3125 12.4062 37.7969 12.4062C39.8516 12.4062 41.2969 13.6094 41.4375 15.4375H39.5312C39.375 14.625 38.7812 14.0078 37.8125 14C36.5781 14.0078 35.75 15.0391 35.75 16.75C35.75 18.5 36.5625 19.5391 37.8125 19.5469C38.6953 19.5391 39.3516 19.0234 39.5312 18.1094H41.4375C41.2891 19.8984 39.9297 21.1719 37.7969 21.1719ZM42.9375 21V9.6875H44.9375V15.9219H45.0781L48.125 12.5156H50.4531L47.1641 16.1719L50.6562 21H48.2812L45.6719 17.3594L44.9375 18.1406V21H42.9375ZM57.0312 9.6875L59.9688 18.6094H60.0938L63.0469 9.6875H65.2812L61.2812 21H58.7812L54.7969 9.6875H57.0312ZM76.1094 15.3438C76.1172 19 73.8828 21.1562 70.9219 21.1562C67.9453 21.1562 65.7266 18.9922 65.7344 15.3438C65.7266 11.6875 67.9453 9.53125 70.9219 9.53125C73.8828 9.53125 76.1172 11.6875 76.1094 15.3438ZM67.7812 15.3438C67.7734 17.9297 69.0781 19.3281 70.9219 19.3281C72.7734 19.3281 74.0703 17.9297 74.0625 15.3438C74.0703 12.7578 72.7734 11.3594 70.9219 11.3594C69.0781 11.3594 67.7734 12.7578 67.7812 15.3438ZM81.7656 21H77.9219V9.6875H81.8281C85.2031 9.6875 87.2422 11.8047 87.25 15.3281C87.2422 18.8672 85.2031 21 81.7656 21ZM79.9531 19.2344H81.6562C84.0234 19.2422 85.2188 17.9375 85.2188 15.3281C85.2188 12.7344 84.0234 11.4453 81.7188 11.4531H79.9531V19.2344Z"
              fill="white"
            />
          </svg>
        </div>
        <img src="${getPbImageURL(item, 'quickThumbnail')}" alt="${item.quickTitle}" />
      </div>
      <div class="title-wrapper">
        <div class="main-title paragraph-medium">${item.quickTitle}</div>
        <div class="episode paragraph-small">${item.quickEpisode}화</div>
      </div>
    </div>`;

    insertLast('.swiperQuick > .swiper-wrapper', template);
  });
}
renderQuickItem();
