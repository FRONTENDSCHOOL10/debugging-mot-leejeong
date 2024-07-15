// import pb from 'pocketbase';
// import pb from '/src/api/pocketbase.js';
import defaultAuthData from '/src/api/defaultAuthData';
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
        <li class="frame__parent">
        <img
          class="frame__child"
          src="${getPbImageURL(item.image)}"
          alt="${item.alt}"
        />
        <div class="visual__thumnail__label__1">
          <div class="thumnail__vertical__1">
            <div class="icon__original">
              <img
                class="group__icon"
                src="${getPbImageURL(item.image)}"
                alt="${item.alt}"
              />
              <img
                class="group__icon1"
                src="${getPbImageURL(item.image)}"
                alt="${item.alt}"
              />
            </div>
          </div>
          <div class="label__video__title__1">
            <div class="lists__title">
              <div class="title1 paragraph-medium">${item.name}</div>
            </div>
          </div>
        </div>
      </li>
        
       
        `      
        console.log(template);
        insertLast('.swiper__list__wrap > li',template);
    });

}

renderVisualList(); 

