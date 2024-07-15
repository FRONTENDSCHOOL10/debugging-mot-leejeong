import './search.scss';

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const autocompleteList = document.getElementById('autocomplete-list');
  const recentSearchList = document.getElementById('recent-search-list');
  const clearRecentButton = document.querySelector('.search__recent-clear');
  const searchForm = document.querySelector('.search__form');

  // 자동 완성 제안
  async function fetchAutocompleteSuggestions(query) {
    try {
      const response = await fetch(`/api/autocomplete?query=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      autocompleteList.innerHTML = ''; // 기존의 자동 완성 목록 초기화
      data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('autocomplete-item');
        listItem.setAttribute('role', 'option');
        listItem.textContent = item;
        listItem.addEventListener('click', () => {
          searchInput.value = item; // 클릭 시 검색 입력창에 값 설정
          autocompleteList.innerHTML = ''; // 자동 완성 목록 초기화
          saveRecentSearch(item); // 최근 검색어 저장
        });
        autocompleteList.appendChild(listItem);
      });
      autocompleteList.style.display = data.length ? 'block' : 'none'; // 데이터가 있는 경우에만 목록 표시
      searchInput.setAttribute('aria-expanded', data.length ? 'true' : 'false');
    } catch (error) {
      console.error('Error fetching autocomplete suggestions:', error);
    }
  }

  // 검색 입력창에 입력이 발생할 때
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim();
    if (query) {
      fetchAutocompleteSuggestions(query); // 입력된 값으로 자동 완성 제안 가져오기
    } else {
      autocompleteList.innerHTML = ''; // 입력값이 없으면 자동 완성 목록 초기화
      autocompleteList.style.display = 'none';
      searchInput.setAttribute('aria-expanded', 'false');
    }
  });

  // 검색 폼 제출 시
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      saveRecentSearch(query); // 검색어 저장
    }
  });

  // 최근 검색어를 localStorage에 저장
  function saveRecentSearch(term) {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    if (!recentSearches.includes(term)) {
      recentSearches = [term, ...recentSearches.slice(0, 4)]; // 최근 5개의 검색어만 저장
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      renderRecentSearches(); // 검색어 목록 업데이트
    }
  }

  // 최근 검색어 목록 렌더링
  function renderRecentSearches() {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    recentSearchList.innerHTML = ''; // 기존의 목록 초기화
    if (recentSearches.length === 0) {
      recentSearchList.innerHTML = `
        <li class="search__recent-item search__recent-item-empty paragraph-medium">
          <span class="paragraph-medium">검색 내역이 없습니다.</span>
        </li>
      `;
    } else {
      recentSearches.forEach(term => {
        const listItem = document.createElement('li');
        listItem.classList.add('search__recent-item', 'paragraph-medium');
        listItem.innerHTML = `
          <button type="button" class="search__recent-content-btn paragraph-medium">${term}</button>
          <button type="button" class="search__recent-delete-btn" aria-label="검색어 삭제">
            <img src="/src/assets/deleteList.svg" alt="검색어 삭제" />
          </button>
        `;
        listItem.querySelector('.search__recent-content-btn').addEventListener('click', () => {
          searchInput.value = term; // 클릭 시 검색 입력창에 값 설정
          fetchAutocompleteSuggestions(term); // 자동 완성 제안 가져오기
        });
        listItem.querySelector('.search__recent-delete-btn').addEventListener('click', () => {
          deleteRecentSearch(term); // 검색어 삭제
        });
        recentSearchList.appendChild(listItem);
      });
    }
  }

  // 특정 검색어 삭제
  function deleteRecentSearch(term) {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    recentSearches = recentSearches.filter(item => item !== term); // 선택한 검색어 필터링
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    renderRecentSearches(); // 검색어 목록 업데이트
  }

  // 최근 검색어 모두 삭제
  clearRecentButton.addEventListener('click', () => {
    localStorage.removeItem('recentSearches'); // 로컬 스토리지에서 삭제
    renderRecentSearches(); // 검색어 목록 초기화
  });

  renderRecentSearches(); // 페이지 로드 시 렌더링
});
