import './main.scss';
import getPbImageURL from '/src/api/getPbImageURL';
import {comma, getStorage, insertLast ,setDocumentTitle, setStorage,tiger} from 'kind-tiger';
import PocketBase from 'pocketbase';


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
    spaceBetween: 8,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1025: {
        spaceBetween: 16,
      },
    },
  });
});


// 이미지 렌더링 작업
const pb = new PocketBase('http://127.0.0.1:8090/' ) ;

async function renderVisualList() {
 
    const visualData = await pb.collection('contents').getFullList
    ({
      sort: '-created'
    });
    
   console.log(visualData);

   visualData.forEach((item) => {
      console.log("item:",item);
      const template = 
    //   `
    //     <div class="swiper contentsSwiper">
    //       <div class="swiper-wrapper">
    //         <div class="swiper-slide"> 
    //           <div class="thumbnail-wrapper">
    //             <img src="${getPbImageURL(item)}" alt="${item.alt}" />
    //           </div>
    //           <div class="main-title paragraph-medium">${item.name}</div>
    //         </div>
    //       </div>
    //       <div class="swiper-button-next"></div>
    //       <div class="swiper-button-prev"></div>
    //   </div>
    // `      
        `
          <div class="swiper-slide">
            <div class="thumbnail-wrapper">
                <img src="${getPbImageURL(item)}" alt="${item.alt}" />
            </div>
            <div class="main-title paragraph-medium">${item.name}</div>
          </div>
        `;
        console.log(template);
        insertLast('.swiper-wrapper',template);
    });

}

renderVisualList(); 


