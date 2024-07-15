
import style from '/src/layouts/footer/footer.scss?inline';
import youtube from '/src/assets/icon/Youtube.svg';
import instagram from '/src/assets/icon/Instragram.svg';
import twitter from '/src/assets/icon/Twitter.svg';
import facebook from '/src/assets/icon/Facebook.svg';


class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>${style}</style>
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
                  <img src="${youtube}" alt="유튜브 바로가기">
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img src="${instagram}" alt="인스타그램 바로가기">       
                </a>
              </li>
              <li>
                <a href="https://x.com/?lang=ko">
                  <img src="${twitter}" alt="트위터 바로가기">                
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/?locale=ko_KR">
                 <img src="${facebook}" alt="페이스북 바로가기">
                </a>
              </li>
            </ul>
            <small>Copyright &#64; 주식회사 티빙 All right reserved.</small>
          </div>
        </section>
      </footer>
    `
  }
}

customElements.define('footer-component', FooterComponent);
