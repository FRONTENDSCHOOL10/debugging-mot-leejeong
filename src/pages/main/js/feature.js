const AuthData = localStorage.getItem('auth');

let authData ={};
authData = JSON.parse(AuthData);

const isAuth = authData.isAuth;
console.log('isAuth:',isAuth);

function isAuthChk(){
  if(isAuth !== true) {
    if(confirm('로그인이 필요합니다. 로그인 페이지로 이동 하시겠습니까?')) {
      location.href = '/src/pages/login/index.html';
    }
  }
}

const contentsMust = document.querySelector('.swiperMust');
const contentsQuick = document.querySelector('.swiperQuick');
const contentsLive = document.querySelector('.swiperLive');
const contentsOnly = document.querySelector('.swiperOnly');
const contentsPromotion = document.querySelector('.swiperPromotion');
const contentsEvent = document.querySelector('.swiperEvent');

contentsMust.addEventListener('click',isAuthChk);
contentsQuick.addEventListener('click',isAuthChk);
contentsLive.addEventListener('click',isAuthChk);
contentsOnly.addEventListener('click',isAuthChk);
contentsPromotion.addEventListener('click',isAuthChk);
contentsEvent.addEventListener('click',isAuthChk);






  







