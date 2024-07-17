import './search.scss';

document.addEventListener('DOMContentLoaded', () => {

  // DOM 요소 변수
  const searchInput = document.querySelector('#search');
  const searchForm = document.querySelector('.search__form');
  const recentSearchList = document.querySelector('#recent-search-list');
  const popularList = document.querySelector('#popular-list');
  const updateTimestamp = document.querySelector('#update-timestamp');
  const clearAllButton = document.querySelector('.search__recent-clear');

  /* -------------------------------------------------------------------------- */
  /*                              최근 검색어 관리                                 */
  /* -------------------------------------------------------------------------- */
  // 최근 검색어 관리
  let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

  // TMDB API 키
  const TMDB_API_KEY = 'c9aa1b53a9a38413c2344dc6b0515510';

  // 인기 트렌드 데이터 가져오기
  async function getTrendingItems() {
    try {
      // const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}&language=ko-KR`);
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}&language=ko-KR&region=KR`);
      const data = await response.json();
      
      const trendingItems = [];
      data.results.slice(0, 10).forEach(item => {
        trendingItems.push(item.title || item.name);
      });
      
      return trendingItems;
    } catch (error) {
      console.error('인기 트렌드 데이터를 불러오는데 실패했습니다:', error);
      return [];
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                              최근 검색어 업데이트                            */
  /* -------------------------------------------------------------------------- */
  function updateRecentSearches() {
    if (recentSearches.length === 0) {   // 최근 검색어가 없는 경우 체크
      recentSearchList.innerHTML = `
        <li class="search__recent-item search__recent-item-empty paragraph-medium">
          <span class="paragraph-medium">검색 내역이 없습니다.</span>
        </li>
      `;
    } else {
      let htmlContent = '';
      recentSearches.forEach((searchWord, index) => {
        htmlContent += `
          <li class="search__recent-item paragraph-medium">
            <button class="search__recent-content-btn">${searchWord}</button>
            <button class="search__recent-delete-btn" aria-label="검색어 삭제" data-index="${index}">×</button>
          </li>
        `;
      });
      recentSearchList.innerHTML = htmlContent;
    }
    //최근 검색어 배열 -> JSON 문자열로 변환 후 로컬 스토리지에 저장
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches)); 
  }

  /* -------------------------------------------------------------------------- */
  /*                              인기 검색어 업데이트                            */
  /* -------------------------------------------------------------------------- */
  async function updatePopularSearches() {
    // 인기 트렌드 목록을 가져오는 비동기 함수. 결과 -> trendingItems 변수에 저장
    const trendingItems = await getTrendingItems();
    
    let htmlContent = '';
    trendingItems.forEach((item, index) => {
      htmlContent += `
        <li class="search__popular-item paragraph-medium">
          <span class="search__popular-rank">${index + 1}</span>
          <span class="search__popular-content">${item}</span>
        </li>
      `;
    });
    
    popularList.innerHTML = htmlContent;
    updateTimestamp.textContent = `${new Date().toLocaleString()} 기준`;
  }

  
  // 검색 수행
  function performSearch(userSearchWord) {
    if (userSearchWord.trim() === '') {
      alert('검색어를 입력해 주세요.');
      return;
    }
    // 중복 제거 후 최근 검색어 목록 앞에 추가
    recentSearches = [userSearchWord, ...recentSearches.filter(item => item !== userSearchWord)].slice(0, 5);
    updateRecentSearches();
    console.log(`검색: ${userSearchWord}`);
    // 여기에 실제 검색 로직 추가
  }

  // 이벤트 리스너
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch(searchInput.value);
    searchInput.value = '';
  });


  // 해당 클래스 포함하면, performSearch 함수를 호출
  // 클릭된 요소의 텍스트 내용을 검색어로 검색 수행
  recentSearchList.addEventListener('click', (e) => {
    if (e.target.classList.contains('search__recent-content-btn')) {
      performSearch(e.target.textContent);
    } else if (e.target.classList.contains('search__recent-delete-btn')) {
      const index = parseInt(e.target.dataset.index);
      recentSearches.splice(index, 1);
      updateRecentSearches();
    }
  });

  clearAllButton.addEventListener('click', () => {
    recentSearches = [];
    updateRecentSearches();
  });

  // 페이지 로드 시 함수 호출.
  // 최근 검색어, 인기 검색어 목록 초기화
  updateRecentSearches();
  updatePopularSearches();

  // 5분마다 인기 검색어 업데이트
  setInterval(updatePopularSearches, 300000);
});