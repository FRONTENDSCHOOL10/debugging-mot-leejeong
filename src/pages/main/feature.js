// import defaultAuthData from '/src/api/defaultAuthData';
import getPbImageURL from '/src/api/getPbImageURL';
import {comma, getStorage, insertLast ,setDocumentTitle, setStorage,tiger} from 'kind-tiger';
import PocketBase from 'pocketbase';

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
      `
        <div class="swiper contentsSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"> 
              <div class="thumbnail-wrapper">
                <img src="${getPbImageURL(item)}" alt="${item.alt}" />
              </div>
              <div class="main-title paragraph-medium">${item.name}</div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
      </div>
    `      
        console.log(template);
        insertLast('.swiper-wrapper',template);
    });

}

renderVisualList(); 

