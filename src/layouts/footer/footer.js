
import './footer.scss';
import style from '/src/layouts/footer/footer.scss?inline';

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  // 사용자가 로그인 상태인지 확인
  getAuthStatus() {
    // 로컬 스토리지 'auth' 항목 JSON 객체로 변환 -> 해당 항목 없으면 빈 객체 반환
    const authData = JSON.parse(localStorage.getItem('auth') || '{}');
    return authData.isAuth === true;
  }


  // 컴포넌트 HTML, 스타일 렌더링
  render() {
    // 인증 상태 가져옴
    const isAuthenticated = this.getAuthStatus();
    this.shadowRoot.innerHTML = `
    <style>${style}
      .footer__notice {
        display: ${isAuthenticated ? 'flex' : 'none'};
      }
    </style>
    <footer class="footer">
        <section class="footer__container">
          <h2 class="sr-only">하단 공지사항 및 기업 정보</h2>
          <div class="footer__inner">
            <section class="footer__inner-top">
              <h2 class="sr-only">푸터 상단 영역</h2>
              <article class="footer__notice">
                <h3>공지사항</h3>
                <p>[안내]&nbsp;&nbsp;합병보고 주주총회에 갈음하는 공고</p>
              </article>
              <ul class="footer__buttons">
                <li>브랜드 바로가기 &nbsp;&nbsp;&#43;</li>
                <span aria-hidden="true">|</span>
                <li>그룹 계열사 바로가기 &nbsp;&nbsp;&#43;</li>
              </ul>
            </section>
            <ul class="footer__service"> 
              <li><a href="https://www.tving.com/help/notice">고객센터</a></li>
              <li><a href="https://www.tving.com/policy/terms">이용약관</a></li>
              <li><a href="https://www.tving.com/policy/privacy"><strong>개인정보처리방침</strong></a></li>
              <li><a href="https://www.tving.com/policy/youth">청소년 보호정책</a></li>
              <li><a href="https://www.tving.com/policy/legal">법적고지</a></li>
              <li><a href="https://www.tving.com/event/list">이벤트</a></li>
              <li><a href="https://team.tving.com/">인재채용</a></li>
            </ul>
            <section class="footer__company-info">  
              <address>
                <p>
                  <span>대표이사 : YANG JIEUL</span>
                  <span class="underline"><a href="/">사업자정보확인</a></span>
                  <span>사업자등록번호 : 188-88-01893</span>
                  <span>통신판매신고번호 : 2020-서울마포-3641호</span>
                </p>
                <p>
                  <span>사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)</span>
                  <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
                </p>
                <p>
                  <span>
                    <a href="https://www.tving.com/help/qna" class="underline">
                      <span>고객문의 바로가기</span>
                    </a>
                  </span>
                  <span>
                    <a href="mailto:tving@cj.net?subject=문의사항" class="underline">
                      <span>대표 메일 : tving@cj.net</span>
                    </a>
                  </span>
                  <span>
                    <a href="tel:16701525" class="underline">
                      <span>고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</span>
                    </a>
                  </span>
                </p>
                <p>
                  <span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780</span>
                  <span>Mnet 고객센터(반송편성문의) : 1855-1631</span>
                </p>
              </address>
            </section>
            <ul class="footer__sns">
              <li>
                 <a href="https://www.youtube.com/">
                   <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect width="52" height="52" rx="26" fill="#2B2B2B"/>
                     <path d="M40.9906 18.2705C40.6307 16.8847 39.5705 15.7934 38.2243 15.423C35.7843 14.75 25.9999 14.75 25.9999 14.75C25.9999 14.75 16.2157 14.75 13.7756 15.423C12.4294 15.7934 11.3691 16.8847 11.0093 18.2705C10.3555 20.7822 10.3555 26.0227 10.3555 26.0227C10.3555 26.0227 10.3555 31.2632 11.0093 33.775C11.3691 35.1607 12.4294 36.2066 13.7756 36.577C16.2157 37.25 25.9999 37.25 25.9999 37.25C25.9999 37.25 35.7842 37.25 38.2243 36.577C39.5705 36.2066 40.6307 35.1607 40.9906 33.775C41.6444 31.2632 41.6444 26.0227 41.6444 26.0227C41.6444 26.0227 41.6444 20.7822 40.9906 18.2705ZM22.7999 30.7807V21.2647L30.9777 26.0229L22.7999 30.7807Z" fill="#6B6B6B"/>
                   </svg>
                 </a>
               </li>
               <li>
                 <a href="https://www.instagram.com/">
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect width="52" height="52" rx="26" fill="#2B2B2B"/>
                   <g clip-path="url(#clip0_14_459)">
                   <path d="M26.0065 17.7068C21.4202 17.7068 17.7209 21.4061 17.7209 25.9925C17.7209 30.5788 21.4202 34.2781 26.0065 34.2781C30.5928 34.2781 34.2922 30.5788 34.2922 25.9925C34.2922 21.4061 30.5928 17.7068 26.0065 17.7068ZM26.0065 31.3792C23.0427 31.3792 20.6198 28.9635 20.6198 25.9925C20.6198 23.0215 23.0355 20.6057 26.0065 20.6057C28.9775 20.6057 31.3933 23.0215 31.3933 25.9925C31.3933 28.9635 28.9703 31.3792 26.0065 31.3792ZM36.5637 17.3679C36.5637 18.4423 35.6984 19.3005 34.6311 19.3005C33.5566 19.3005 32.6985 18.4351 32.6985 17.3679C32.6985 16.3006 33.5639 15.4353 34.6311 15.4353C35.6984 15.4353 36.5637 16.3006 36.5637 17.3679ZM42.0514 19.3293C41.9288 16.7405 41.3375 14.4473 39.441 12.558C37.5516 10.6687 35.2585 10.0774 32.6697 9.94756C30.0015 9.79613 22.0043 9.79613 19.3362 9.94756C16.7546 10.0702 14.4614 10.6615 12.5648 12.5508C10.6683 14.4401 10.0842 16.7333 9.9544 19.3221C9.80296 21.9903 9.80296 29.9875 9.9544 32.6556C10.077 35.2444 10.6683 37.5376 12.5648 39.4269C14.4614 41.3163 16.7473 41.9076 19.3362 42.0374C22.0043 42.1888 30.0015 42.1888 32.6697 42.0374C35.2585 41.9148 37.5516 41.3235 39.441 39.4269C41.3303 37.5376 41.9216 35.2444 42.0514 32.6556C42.2029 29.9875 42.2029 21.9975 42.0514 19.3293ZM38.6045 35.5185C38.042 36.9319 36.9531 38.0207 35.5325 38.5904C33.4052 39.4341 28.3574 39.2394 26.0065 39.2394C23.6557 39.2394 18.6006 39.4269 16.4805 38.5904C15.0671 38.028 13.9782 36.9391 13.4086 35.5185C12.5648 33.3912 12.7596 28.3433 12.7596 25.9925C12.7596 23.6416 12.5721 18.5866 13.4086 16.4665C13.971 15.0531 15.0599 13.9642 16.4805 13.3945C18.6078 12.5508 23.6557 12.7455 26.0065 12.7455C28.3574 12.7455 33.4124 12.558 35.5325 13.3945C36.9459 13.957 38.0348 15.0459 38.6045 16.4665C39.4482 18.5938 39.2535 23.6416 39.2535 25.9925C39.2535 28.3433 39.4482 33.3984 38.6045 35.5185Z" fill="#6B6B6B"/>
                   </g>
                   <defs>
                   <clipPath id="clip0_14_459">
                   <rect width="32.3062" height="36.9213" fill="white" transform="translate(9.84668 7.53906)"/>
                   </clipPath>
                   </defs>
                  </svg>
                 </a>
               </li>
               <li>
                 <a href="https:x.com/?lang=ko">
                   <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http:www.w3.org/2000/svg">
                     <rect width="52" height="52" rx="26" fill="#2B2B2B"/>
                     <g clip-path="url(#clip0_14_462)">
                     <path d="M38.7106 19.483C38.7309 19.7672 38.7309 20.0515 38.7309 20.3358C38.7309 29.0058 32.132 38.9957 20.0711 38.9957C16.3553 38.9957 12.9036 37.9195 10 36.0515C10.5279 36.1124 11.0355 36.1327 11.5838 36.1327C14.6497 36.1327 17.4721 35.0972 19.7259 33.3307C16.8426 33.2698 14.4264 31.3815 13.5939 28.7825C14 28.8434 14.4061 28.884 14.8325 28.884C15.4213 28.884 16.0102 28.8027 16.5584 28.6607C13.5533 28.0515 11.2994 25.4119 11.2994 22.2241V22.1429C12.1725 22.6302 13.1878 22.9348 14.2639 22.9754C12.4974 21.7977 11.3401 19.7875 11.3401 17.5134C11.3401 16.2952 11.6649 15.1784 12.2334 14.2038C15.4619 18.1835 20.3147 20.7824 25.7563 21.0667C25.6548 20.5794 25.5938 20.0719 25.5938 19.5642C25.5938 15.95 28.5177 13.0059 32.1522 13.0059C34.0405 13.0059 35.7461 13.7977 36.9441 15.0769C38.4263 14.7927 39.8476 14.2444 41.1065 13.4932C40.6191 15.016 39.5836 16.2952 38.2233 17.1074C39.5431 16.9653 40.8223 16.5997 41.9999 16.0922C41.1066 17.3916 39.9898 18.5489 38.7106 19.483Z" fill="#6B6B6B"/>
                     </g>
                     <defs>
                     <clipPath id="clip0_14_462">
                     <rect width="32" height="32" fill="white" transform="translate(10 10)"/>
                     </clipPath>
                     </defs>
                   </svg>
                 </a>
               </li>
               <li>
                 <a href="https:www.facebook.com/?locale=ko_KR">
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http:www.w3.org/2000/svg">
                   <rect width="52" height="52" rx="26" fill="#2B2B2B"/>
                   <g clip-path="url(#clip0_14_465)">
                   <path d="M34.0814 28.1707L35.046 21.8853H29.015V17.8065C29.015 16.0869 29.8575 14.4107 32.5586 14.4107H35.3004V9.0594C35.3004 9.0594 32.8123 8.63477 30.4334 8.63477C25.4666 8.63477 22.2201 11.6452 22.2201 17.0949V21.8853H16.6992V28.1707H22.2201V43.3652H29.015V28.1707H34.0814Z" fill="#6B6B6B"/>
                   </g>
                   <defs>
                   <clipPath id="clip0_14_465">
                   <rect width="21.7065" height="34.7305" fill="white" transform="translate(15.1465 8.63477)"/>
                   </clipPath>
                   </defs>
                  </svg>
                 </a>
               </li>
            </ul>
            <small>Copyright &#64; 주식회사 티빙 All right reserved.</small>
          </div>
        </section>
      </footer>
    `;
  }


  // 컴포넌트가 DOM에 추가될 때 호출됨
  connectedCallback() {

    // 로컬 스토리지 변경 감지 이벤트 리스너
    window.addEventListener('storage', (event) => {
      // 변경된 항목이 'auth' -> 다시 렌더링
      if (event.key === 'auth') {
        this.render();
      }
    });

    this.style.width = '100%';
  }
}

customElements.define('footer-component', FooterComponent);