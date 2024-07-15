import style from '/src/layouts/header/header.scss?inline';

class HeaderComponent extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <style>${style}</style>
      <header class="header">
          <h1 class="header__logo">
              <a href="/" aria-label="홈으로 이동">
                  <svg width="132" height="42" viewBox="0 0 132 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3_342)">
                    <mask id="mask0_3_342" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="4" width="132" height="34">
                    <path d="M0 4.87793H131.511V37.1249H0V4.87793Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_3_342)">
                    <path d="M86.1645 23.0513L92.5695 35.9768H102.522V5.6543H92.994V18.2768C92.9943 18.4676 92.9301 18.6529 92.8117 18.8025C92.6933 18.9521 92.5277 19.0573 92.3419 19.1007C92.1562 19.1442 91.9611 19.1235 91.7886 19.042C91.6161 18.9605 91.4763 18.8229 91.392 18.6518L84.954 5.6543H75.0015V35.9753H84.558V23.4248C84.5579 23.2341 84.6224 23.0491 84.7409 22.8997C84.8595 22.7503 85.025 22.6455 85.2107 22.6022C85.3964 22.5589 85.5913 22.5797 85.7636 22.6613C85.936 22.7428 86.0757 22.8803 86.16 23.0513" fill="white"/>
                    <path d="M60.2627 5.6543H70.7132V35.9753H60.2627V5.6543Z" fill="white"/>
                    <path d="M105.61 17.9455V23.5345C105.61 28.9705 107.661 32.9005 111.703 35.2135C118.153 38.905 127.441 36.6265 131.512 33.616V19.5055H122.074V28.3795L121.894 28.45C121.145 28.7408 120.339 28.8601 119.538 28.7991C118.736 28.7381 117.958 28.4984 117.261 28.0975C116.605 27.5682 116.092 26.8827 115.77 26.1039C115.447 25.325 115.326 24.4776 115.416 23.6395V17.386C115.322 16.5738 115.526 15.7551 115.99 15.0822C116.455 14.4093 117.148 13.9279 117.94 13.7275C118.803 13.5198 119.712 13.6474 120.484 14.0842C121.255 14.5211 121.833 15.2348 122.098 16.081L131.241 11.1775C130.077 9.15463 128.374 7.49461 126.322 6.38231C124.27 5.27 121.949 4.74907 119.619 4.87751C119.002 4.87751 118.402 4.90751 117.831 4.95851C114.741 5.14317 111.792 6.31639 109.419 8.30501C108.134 9.54748 107.13 11.0507 106.474 12.7136C105.819 14.3764 105.527 16.1604 105.618 17.9455" fill="white"/>
                    <path d="M25.9305 5.6543H0V14.5313H7.8V35.9813H18.1155V14.5313H25.923L25.9305 5.6543Z" fill="white"/>
                    <path d="M37.8992 36.3208L44.4332 16.0183C44.4939 15.8255 44.6217 15.6609 44.7935 15.5543C44.9652 15.4477 45.1695 15.4063 45.3692 15.4375C45.5689 15.4688 45.7507 15.5706 45.8817 15.7245C46.0128 15.8784 46.0842 16.0742 46.0832 16.2763L46.0832 36.3223L55.9922 36.3223L55.9922 5.99977L37.2557 5.99976L27.0002 36.3208L37.8992 36.3208Z" fill="white"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_3_342">
                    <rect width="132" height="42" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
              </a>
          </h1>
          <nav class="header__menu" aria-label="주 메뉴">
              <ul class="header__menu-left">
                  <li class="header__menu-item">
                      <a href="/" aria-current="page">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_4436_3482)">
                              <path d="M11.0003 23.3676H6.5166V16.1426H7.63859V22.3943H11.0018L11.0003 23.3676Z" fill="#C4C4C4" stroke="#C4C4C4" stroke-width="0.2" stroke-linejoin="round"/>
                              <path d="M12.4834 23.3676V16.1426H13.6054V23.3676H12.4834Z" fill="#C4C4C4" stroke="#C4C4C4" stroke-width="0.2" stroke-linejoin="round"/>
                              <path d="M17.6629 23.3676L15.0859 16.1426H16.3029L18.2692 22.1039H18.3004L20.2724 16.1426H21.4695L18.8912 23.3676H17.6629Z" fill="#C4C4C4" stroke="#C4C4C4" stroke-width="0.2" stroke-linejoin="round"/>
                              <path d="M27.5355 23.3676H22.9512V16.1426H27.5355V17.1087H24.0732V19.221H27.3513V20.1475H24.0732V22.3901H27.5355V23.3676Z" fill="#C4C4C4" stroke="#C4C4C4" stroke-width="0.2" stroke-linejoin="round"/>
                              <g opacity="0.901">
                              <g opacity="0.998">
                              <path d="M29.7501 9.34668H4.2501C2.37233 9.34668 0.850098 10.8689 0.850098 12.7467V26.9133C0.850098 28.7911 2.37233 30.3133 4.2501 30.3133H29.7501C31.6279 30.3133 33.1501 28.7911 33.1501 26.9133V12.7467C33.1501 10.8689 31.6279 9.34668 29.7501 9.34668Z" stroke="#C4C4C4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                              </g>
                              <g opacity="0.998">
                              <path d="M15.9446 9.20801L11.6167 4.95801" stroke="#C4C4C4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M17.9844 9.20801L22.3123 4.95801" stroke="#C4C4C4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                              </g>
                              </g>
                              </g>
                              <defs>
                              <clipPath id="clip0_4436_3482">
                              <rect width="34" height="34" fill="white"/>
                              </clipPath>
                              </defs>
                          </svg>                          
                          <span>실시간</span>
                      </a>
                  </li>
                  <li class="header__menu-item">
                      <a href="/tv">TV프로그램</a>
                  </li>
                  <li class="header__menu-item">
                      <a href="/movies">영화</a>
                  </li>
                  <li class="header__menu-item">
                      <a href="/">
                          <svg width="112" height="34" viewBox="0 0 112 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_159_10880)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6663 11.4506C29.6663 7.05892 25.0211 4.95801 19.5003 4.95801C13.5999 4.95801 8.19532 7.56042 6.20916 11.6248C5.65098 12.7104 5.3596 13.9133 5.35916 15.1339C5.34296 16.1811 5.63886 17.2093 6.20916 18.0877C6.74202 18.792 7.44513 19.3494 8.25247 19.7074C9.05981 20.0655 9.94491 20.2126 10.8247 20.1348C13.5418 20.1348 15.732 18.643 15.732 16.0123C15.7339 15.9082 15.7133 15.8049 15.6717 15.7096C15.6301 15.6142 15.5683 15.5289 15.4908 15.4595C15.4132 15.3901 15.3215 15.3383 15.2221 15.3075C15.1227 15.2768 15.0178 15.2678 14.9146 15.2813C14.2133 15.2813 14.0391 15.7785 14.0646 16.0123C14.1274 16.4795 14.0887 16.9548 13.951 17.4057C13.8134 17.8566 13.58 18.2725 13.267 18.625C12.9539 18.9775 12.5684 19.2583 12.1369 19.4482C11.7054 19.6381 11.238 19.7326 10.7666 19.7253C8.34266 19.7253 7.31983 17.6485 7.31983 15.4272C7.31983 10.8938 10.7382 7.91176 14.2728 6.59567C15.9348 5.97407 17.6977 5.66663 19.472 5.68901C23.5038 5.68901 26.7749 7.23884 26.7749 11.3557C26.7237 13.0582 26.0439 14.6814 24.8668 15.9125C23.6896 17.1435 22.0984 17.8952 20.3999 18.0225L20.5416 17.555C21.1381 14.9524 22.1544 12.4643 23.5506 10.1883C23.6588 10.0002 23.786 9.82358 23.9302 9.66134L23.7262 9.42759C23.4158 9.60543 23.1223 9.81123 22.8493 10.0424C16.191 15.2189 15.9842 29.8403 7.13282 29.8403C6.82989 29.8512 6.52664 29.8317 6.22758 29.7823C5.42108 29.7145 4.67309 29.3339 4.1436 28.7218C3.61411 28.1098 3.34515 27.3148 3.39424 26.5069C3.39424 26.1853 3.51183 25.7178 3.51183 25.4543C3.51773 25.3348 3.49953 25.2153 3.45831 25.1029C3.41708 24.9905 3.35368 24.8876 3.27186 24.8002C3.19005 24.7129 3.0915 24.6429 2.98207 24.5944C2.87265 24.5459 2.75458 24.5199 2.63491 24.5179H2.55699C1.76791 24.5179 1.44633 25.1611 1.42366 26.038C1.36558 28.6404 3.26533 30.1322 6.21483 30.4297C6.53641 30.4297 6.85799 30.4594 7.20649 30.4594C14.1297 30.4594 18.3656 25.2248 20.1775 18.8796C21.0891 18.758 21.9893 18.5623 22.8692 18.2945C26.0822 17.4176 29.6692 15.2529 29.6692 11.452" fill="#C4C4C4"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.4673 17.9612C68.0798 20.261 67.1924 22.4478 65.8677 24.3673C65.3421 25.1564 64.876 25.359 64.4666 25.359C63.883 25.359 63.737 24.8915 63.8234 24.2257C64.2301 22.0968 65.0753 20.0758 66.3054 18.2913C66.9486 17.4143 67.3566 17.063 67.8539 17.063C68.3214 17.063 68.4673 17.4724 68.4673 17.9697M41.5407 24.6932C41.1908 24.6932 40.9273 24.5756 40.9273 24.1081C41.2312 22.2665 42.0057 20.5347 43.1755 19.0803C43.5221 18.5191 43.9911 18.0435 44.5475 17.6892C45.104 17.3349 45.7333 17.1112 46.3885 17.0347L44.8415 20.4843C43.6728 23.1448 42.4757 24.6932 41.5407 24.6932ZM26.354 24.6932C26.0041 24.6932 25.7704 24.5756 25.7704 24.1081C26.1005 22.2745 26.8722 20.5489 28.0186 19.0803C28.3651 18.5191 28.8342 18.0435 29.3906 17.6892C29.947 17.3349 30.5764 17.1112 31.2316 17.0347L29.7129 20.4843C28.5442 23.0853 27.289 24.6932 26.354 24.6932ZM95.5384 12.9717H93.0847L92.5591 14.258L91.5958 16.4213H90.4625L90.1125 17.1523H91.3096L89.8788 20.2803C88.8559 22.5016 87.2792 24.6719 86.374 24.6719C86.1699 24.6719 86.0524 24.5841 86.0524 24.3801C86.0855 24.0555 86.1747 23.7392 86.3159 23.4451C86.6077 22.7722 87.0752 21.8074 87.4251 21.0778C88.0389 20.0134 88.4825 18.8595 88.7398 17.658C88.7502 17.4623 88.7183 17.2666 88.6464 17.0843C88.5744 16.902 88.464 16.7373 88.3228 16.6015C88.1815 16.4656 88.0127 16.3617 87.8278 16.2969C87.6428 16.2321 87.446 16.2078 87.2509 16.2258C86.6523 16.2765 86.0707 16.4507 85.5428 16.7375C85.0149 17.0242 84.5522 17.4172 84.1838 17.8918L84.7972 16.4298H82.4852L80.6166 20.6684C79.8856 22.1715 78.367 24.6507 77.4036 24.6507C77.1996 24.6507 77.1118 24.5331 77.1118 24.3291C77.1316 24.1476 77.1794 23.9704 77.2534 23.8035C77.3413 23.6278 78.4505 20.9971 78.4505 20.9971L80.465 16.349H78.0114L76.028 20.8823C75.4444 22.2848 73.903 24.6535 72.9029 24.6535C72.8603 24.6599 72.8168 24.6573 72.7754 24.6457C72.7339 24.6341 72.6954 24.6138 72.6623 24.5863C72.6292 24.5587 72.6024 24.5244 72.5836 24.4857C72.5647 24.447 72.5543 24.4047 72.553 24.3617V24.3036C72.601 23.9468 72.7098 23.6009 72.8745 23.2808L73.8974 21.0013L76.0224 16.3533H73.5687L73.1012 17.4058C72.949 17.819 72.6859 18.1823 72.3408 18.4557C71.9956 18.7291 71.5818 18.9021 71.1448 18.9557C70.6773 18.9557 70.4435 18.78 70.3571 18.6043C70.3556 18.2726 70.2857 17.9447 70.1518 17.6412C70.0179 17.3376 69.823 17.0649 69.5791 16.84C69.3352 16.6151 69.0476 16.4429 68.7342 16.334C68.4208 16.2252 68.0883 16.182 67.7575 16.2073C66.8552 16.2319 65.9747 16.49 65.2018 16.9562C64.4289 17.4225 63.79 18.0811 63.3475 18.8678C62.7026 19.8608 62.2103 20.9448 61.8869 22.0837C61.0114 23.5159 60.1047 24.6337 59.3751 24.6337C59.3314 24.6401 59.2868 24.6362 59.2448 24.6224C59.2029 24.6085 59.1647 24.585 59.1335 24.5537C59.1022 24.5225 59.0787 24.4843 59.0649 24.4424C59.051 24.4004 59.0471 24.3558 59.0535 24.3121C59.1122 23.9677 59.2205 23.6337 59.3751 23.3204L60.9816 19.9006C61.3812 19.145 61.6386 18.3224 61.7409 17.4738C61.7444 17.3004 61.7113 17.1282 61.6438 16.9684C61.5764 16.8087 61.4761 16.6648 61.3494 16.5463C61.2228 16.4278 61.0726 16.3373 60.9087 16.2806C60.7448 16.2239 60.5708 16.2023 60.3979 16.2173C59.7396 16.2641 59.0975 16.4436 58.5102 16.745C57.923 17.0464 57.4028 17.4635 56.9809 17.9711C57.0289 17.8003 57.0486 17.6227 57.039 17.4455C57.0621 17.2764 57.0454 17.1042 56.99 16.9428C56.9347 16.7813 56.8423 16.6351 56.7204 16.5157C56.5984 16.3963 56.4501 16.3072 56.2875 16.2554C56.1249 16.2035 55.9524 16.1905 55.7839 16.2173C55.168 16.2698 54.5705 16.4535 54.0315 16.756C53.4925 17.0585 53.0244 17.4728 52.6587 17.9711L53.3004 16.3929H51.0805L49.1822 20.6599C48.277 22.6433 46.8461 24.6351 46.0287 24.6351C45.853 24.6351 45.7369 24.5473 45.7369 24.3135C45.8608 23.7173 46.0568 23.1383 46.3205 22.5894L48.8323 16.9228C49.0079 16.4836 47.8095 16.2144 46.2908 16.2144C44.6789 16.2942 43.143 16.9237 41.9388 17.998C41.4554 18.4879 40.8507 18.8409 40.1864 19.0208C40.0447 19.0208 39.9824 18.933 39.9824 18.8452C39.9824 18.4938 40.7998 17.5305 40.7998 16.7698C40.7998 16.4184 40.6241 16.2144 40.1566 16.2144C39.0641 16.4204 38.0921 17.0374 37.4409 17.9385L38.084 16.3887H35.8939L34.0352 20.6514C33.1299 22.6348 31.641 24.7442 30.8519 24.7442C30.6479 24.7442 30.5304 24.6266 30.5304 24.3928C30.658 23.7615 30.8745 23.1514 31.1735 22.5809L33.6555 16.9143C33.8312 16.4751 32.6327 16.2059 31.1155 16.2059C30.014 16.2757 28.942 16.5899 27.9772 17.1258C27.0124 17.6617 26.1792 18.4059 25.538 19.3042C24.333 20.6964 23.5704 22.4163 23.3479 24.2441C23.3151 24.4936 23.3386 24.7473 23.4166 24.9866C23.4947 25.2259 23.6253 25.4446 23.7989 25.6268C23.9726 25.809 24.1848 25.95 24.42 26.0395C24.6553 26.1289 24.9076 26.1646 25.1584 26.1438C25.7823 26.0742 26.3831 25.8679 26.9181 25.5395C27.4532 25.2111 27.9092 24.7688 28.2538 24.2441C28.2104 24.407 28.181 24.5734 28.166 24.7413C28.166 25.5602 28.4875 26.1438 29.4806 26.1438C30.0778 26.0503 30.6489 25.8334 31.1574 25.5067C31.666 25.1801 32.1009 24.7511 32.4344 24.2469L31.7048 25.971H34.0706L36.401 20.684C37.1604 18.9599 38.0359 18.083 38.2696 18.083C38.3574 18.083 38.4113 18.1128 38.4113 18.1708C38.4113 18.3465 38.0316 18.8438 38.0316 19.2815C38.0316 19.7193 38.2654 20.0706 38.9369 20.0706C39.5022 20.0277 40.0462 19.8361 40.5136 19.5153C39.383 20.8565 38.6811 22.5064 38.4991 24.2512C38.4613 24.5016 38.4812 24.7574 38.5575 24.9989C38.6337 25.2404 38.7642 25.4613 38.9389 25.6447C39.1136 25.828 39.328 25.9689 39.5656 26.0567C39.8031 26.1444 40.0577 26.1767 40.3096 26.1509C40.9432 26.0431 41.5477 25.8057 42.0854 25.4538C42.6231 25.1018 43.0825 24.6427 43.4348 24.1053C43.401 24.2986 43.3816 24.4942 43.3767 24.6903C43.3596 24.879 43.3827 25.0692 43.4444 25.2483C43.5061 25.4274 43.6051 25.5915 43.7348 25.7296C43.8645 25.8677 44.0219 25.9768 44.1968 26.0497C44.3717 26.1225 44.5601 26.1575 44.7494 26.1523C45.7723 26.1523 46.5599 25.5092 47.5828 24.2823L46.8235 25.9823H49.2771L51.497 20.9248C52.4604 18.7333 53.8048 17.5631 54.4465 17.5631C54.5882 17.5333 54.7384 17.6807 54.7681 17.8266V17.8847C54.7313 18.136 54.6627 18.3816 54.5641 18.6157L51.3511 26.0107H53.8629L56.1111 20.8668C57.1028 18.6454 58.1851 17.5631 58.9728 17.5631C59.2349 17.5631 59.3227 17.6807 59.3227 17.9428C59.3034 18.2256 59.2344 18.5028 59.1187 18.7616L56.9285 23.4366C56.7178 23.8771 56.5891 24.3524 56.5489 24.8391C56.5489 25.5701 56.9285 26.1835 58.0378 26.1835C59.4389 26.1835 60.5198 25.1026 61.7466 23.523V23.8446C61.7458 24.1852 61.8174 24.5222 61.9564 24.8331C62.0955 25.1441 62.2989 25.422 62.5533 25.6485C62.8077 25.8751 63.1072 26.0451 63.4322 26.1473C63.7571 26.2495 64.1 26.2817 64.4383 26.2416C66.6865 26.2416 68.4687 24.7215 69.5779 22.2664C69.982 21.3968 70.2482 20.4696 70.367 19.5181C70.6113 19.6376 70.8841 19.6866 71.1547 19.6598C71.5234 19.677 71.8889 19.5854 72.2059 19.3963L71.8262 20.2463C71.3885 21.1813 70.8912 22.2041 70.5115 23.0796C70.2639 23.5931 70.1154 24.1487 70.0738 24.7173C70.0539 24.9191 70.0785 25.1229 70.1459 25.3142C70.2133 25.5055 70.3217 25.6797 70.4636 25.8246C70.6056 25.9695 70.7775 26.0816 70.9674 26.1529C71.1573 26.2242 71.3605 26.253 71.5627 26.2373C72.242 26.1095 72.8879 25.8439 73.4605 25.4567C74.0331 25.0695 74.5202 24.5691 74.8919 23.9863C74.8322 24.2551 74.8028 24.5297 74.804 24.8051C74.804 25.5361 75.0378 26.2373 76.0309 26.2373C76.6385 26.1553 77.2203 25.9397 77.7347 25.6061C78.2491 25.2725 78.6832 24.8291 79.0059 24.3078L78.2763 26.0078H80.73L82.6864 21.5354C83.7956 19.0208 84.9063 17.5008 85.9574 17.5008C86.0412 17.499 86.1227 17.5276 86.187 17.5812C86.2513 17.6349 86.2941 17.7099 86.3074 17.7926V17.8804C86.0263 18.8295 85.634 19.742 85.1386 20.599C84.7384 21.4264 84.3605 22.2644 84.0053 23.1122C83.7446 23.6308 83.5955 24.1984 83.5675 24.7782C83.5498 24.9629 83.5731 25.1493 83.6358 25.324C83.6985 25.4987 83.799 25.6574 83.9302 25.7887C84.0614 25.92 84.2199 26.0206 84.3945 26.0835C84.5692 26.1464 84.7555 26.1699 84.9403 26.1523C85.6812 26.0272 86.3871 25.7461 87.0114 25.3278C87.6356 24.9095 88.1639 24.3633 88.5613 23.7256C88.3893 24.2243 88.3007 24.7479 88.2992 25.2754C88.266 25.5559 88.2953 25.8403 88.385 26.1081C88.4746 26.3759 88.6225 26.6206 88.8179 26.8245C89.0133 27.0285 89.2514 27.1866 89.5152 27.2877C89.7789 27.3887 90.0618 27.4301 90.3435 27.4089C91.141 27.3996 91.9163 27.1443 92.5634 26.6779C93.465 25.9722 94.2446 25.1231 94.8711 24.1648L94.4334 23.7553C93.9085 24.5473 93.2687 25.2568 92.535 25.8605C92.1845 26.1628 91.7423 26.3379 91.2799 26.3578C90.7543 26.3578 90.4299 26.0943 90.4299 25.4511C90.538 24.5069 90.8048 23.5878 91.2189 22.7325C91.2189 22.7325 91.8905 21.2124 92.5336 19.7802C93.0592 18.5519 93.5848 17.3832 93.6669 17.1494H95.2734L95.595 16.4184H94.0183L95.5384 12.9717Z" fill="#C4C4C4"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M106.308 16.4334L108.537 11.2441H105.896L103.64 16.4334H98.0531L97.104 18.5981H102.713L100.487 23.7278H103.128L105.383 18.5981H110.992L111.911 16.4334H106.308Z" fill="#C4C4C4"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_159_10880">
                              <rect width="111.917" height="34" fill="white"/>
                              </clipPath>
                              </defs>
                          </svg>                
                      </a>
                  </li>
              </ul>
              <section class="header__actions">
                  <h2 class="sr-only">검색 아이콘과 프로필 아이콘</h2>
                  <button type="button" class="header__actions-btn search-btn" aria-label="검색" aria-expanded="false">
                    <svg width="40" height="40" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Header / Icon / Search" clip-path="url(#clip0_4596_4975)">
                      <g id="Group" opacity="0.997">
                      <g id="Group_2">
                      <path id="Vector" d="M33.3711 35.4531L41.9657 44.1853" stroke="#C4C4C4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                      <g id="Group_3">
                      <path id="Vector_2" d="M23.2136 38.4457C31.3499 38.4457 37.9457 31.8499 37.9457 23.7136C37.9457 15.5773 31.3499 8.98145 23.2136 8.98145C15.0773 8.98145 8.48145 15.5773 8.48145 23.7136C8.48145 31.8499 15.0773 38.4457 23.2136 38.4457Z" stroke="#C4C4C4" stroke-width="1.5"/>
                      </g>
                      </g>
                      </g>
                      </g>
                      <defs>
                      <clipPath id="clip0_4596_4975">
                      <rect width="50" height="50" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button type="button" class="header__actions-btn profile-btn" aria-label="프로필" aria-expanded="false">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_63_3715)">
                      <path d="M37.4194 0H2.58065C1.15539 0 0 1.15539 0 2.58065V37.4194C0 38.8446 1.15539 40 2.58065 40H37.4194C38.8446 40 40 38.8446 40 37.4194V2.58065C40 1.15539 38.8446 0 37.4194 0Z" fill="black"/>
                      <path d="M3.22559 14.1937V6.4518C3.22559 6.09549 3.51443 5.80664 3.87075 5.80664H20.6449C21.0013 5.80664 21.2901 6.09549 21.2901 6.4518V11.2905L24.0116 6.14994C24.1234 5.93874 24.3428 5.80664 24.5818 5.80664H37.154C37.5987 5.80664 37.9101 6.24594 37.7627 6.66548L27.5706 35.6977C27.4798 35.9563 27.2358 36.1292 26.9618 36.1292H9.6772C9.32088 36.1292 9.03204 35.8404 9.03204 35.4841V15.4841C9.03204 15.1277 8.7432 14.8389 8.38688 14.8389H3.87075C3.51444 14.8389 3.22559 14.5501 3.22559 14.1937Z" fill="#FF002F"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9676 21.8954C20.5274 22.6888 19.6812 23.2257 18.7096 23.2257C17.2843 23.2257 16.1289 22.0703 16.1289 20.6451C16.1289 19.2199 17.2843 18.0645 18.7096 18.0645C19.6812 18.0645 20.5274 18.6014 20.9676 19.3948C21.4079 18.6014 22.2541 18.0645 23.2257 18.0645C24.6509 18.0645 25.8063 19.2199 25.8063 20.6451C25.8063 22.0703 24.6509 23.2257 23.2257 23.2257C22.2541 23.2257 21.4079 22.6888 20.9676 21.8954Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7093 21.9351C19.4219 21.9351 19.9996 21.3575 19.9996 20.6448C19.9996 19.9322 19.4219 19.3545 18.7093 19.3545C17.9966 19.3545 17.4189 19.9322 17.4189 20.6448C17.4189 21.3575 17.9966 21.9351 18.7093 21.9351ZM23.2254 21.9351C23.938 21.9351 24.5157 21.3575 24.5157 20.6448C24.5157 19.9322 23.938 19.3545 23.2254 19.3545C22.5128 19.3545 21.9351 19.9322 21.9351 20.6448C21.9351 21.3575 22.5128 21.9351 23.2254 21.9351Z" fill="#030303"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3548 26.672C20.0674 26.672 20.6451 26.0944 20.6451 25.3817C20.6451 25.3065 20.6386 25.2328 20.6263 25.1611L18.3154 25.3055C18.2232 25.3113 18.139 25.335 18.0645 25.3724C18.0645 25.3755 18.0645 25.3786 18.0645 25.3817C18.0645 26.0944 18.6421 26.672 19.3548 26.672Z" fill="white"/>
                      <path d="M17.0713 25.4599L24.8151 24.8643" stroke="black" stroke-linecap="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7418 23.5482C27.7418 23.7263 27.5974 23.8707 27.4193 23.8707C27.2411 23.8707 27.0967 23.7263 27.0967 23.5482C27.0967 23.37 27.2411 23.2256 27.4193 23.2256C27.5974 23.2256 27.7418 23.37 27.7418 23.5482ZM29.6773 23.5482C29.6773 23.7263 29.5329 23.8707 29.3547 23.8707C29.1766 23.8707 29.0322 23.7263 29.0322 23.5482C29.0322 23.37 29.1766 23.2256 29.3547 23.2256C29.5329 23.2256 29.6773 23.37 29.6773 23.5482ZM28.0644 25.1611C28.2426 25.1611 28.387 25.0166 28.387 24.8385C28.387 24.6604 28.2426 24.5159 28.0644 24.5159C27.8863 24.5159 27.7418 24.6604 27.7418 24.8385C27.7418 25.0166 27.8863 25.1611 28.0644 25.1611Z" fill="#FF305B"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6133 23.5482C11.6133 23.7263 11.7577 23.8707 11.9359 23.8707C12.114 23.8707 12.2584 23.7263 12.2584 23.5482C12.2584 23.37 12.114 23.2256 11.9359 23.2256C11.7577 23.2256 11.6133 23.37 11.6133 23.5482ZM13.5488 23.5482C13.5488 23.7263 13.6932 23.8707 13.8713 23.8707C14.0495 23.8707 14.1939 23.7263 14.1939 23.5482C14.1939 23.37 14.0495 23.2256 13.8713 23.2256C13.6932 23.2256 13.5488 23.37 13.5488 23.5482ZM13.2262 25.1611C13.0481 25.1611 12.9036 25.0166 12.9036 24.8385C12.9036 24.6604 13.0481 24.5159 13.2262 24.5159C13.4043 24.5159 13.5488 24.6604 13.5488 24.8385C13.5488 25.0166 13.4043 25.1611 13.2262 25.1611Z" fill="#FF305B"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_63_3715">
                      <rect width="40" height="40" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </button>
              </section>
          </nav>
      </header>
      `
  }  
}

customElements.define('header-component', HeaderComponent);
