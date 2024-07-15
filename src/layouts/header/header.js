// import './header.scss';

// document.addEventListener('DOMContentLoaded', () => {
//     const profileBtn = document.querySelector('.profile-btn');
//     const profileDropdown = document.querySelector('.header__profile-dropdown');
//     const profileName = document.getElementById('profile-name');
//     const profileImg = document.getElementById('profile-img');
//     const profileIcon = document.getElementById('profile-icon');
//     const profileImgSource = document.getElementById('profile-img-source');

//     // 로컬 스토리지에서 사용자 정보를 불러오는 함수
//     const getUserInfo = () => {
//         const name = localStorage.getItem('profileName') || '짱구';
//         const imgSrc = localStorage.getItem('profileImgSrc') || 'https://image.tving.com/upload/profile/IG00000016_IMAGE_2.png/dims/resize/100';
//         const imgWebpSrc = localStorage.getItem('profileImgWebpSrc') || 'https://image.tving.com/upload/profile/IG00000016_IMAGE_2.png/dims/resize/F_webp,100';
//         return { name, imgSrc, imgWebpSrc };
//     };

//     // 로컬 스토리지에 사용자 정보를 저장하는 함수
//     const setUserInfo = (name, imgSrc, imgWebpSrc) => {
//         localStorage.setItem('profileName', name);
//         localStorage.setItem('profileImgSrc', imgSrc);
//         localStorage.setItem('profileImgWebpSrc', imgWebpSrc);
//         updateProfile({ name, imgSrc, imgWebpSrc });
//     };

//     const updateProfile = (userInfo) => {
//         profileName.textContent = userInfo.name;
//         profileImg.src = userInfo.imgSrc;
//         profileIcon.src = userInfo.imgSrc;
//         profileImgSource.srcset = userInfo.imgWebpSrc;
//     };

//     const showDropdown = () => {
//         profileBtn.setAttribute('aria-expanded', true);
//         profileDropdown.setAttribute('aria-hidden', false);
//     };

//     const hideDropdown = () => {
//         profileBtn.setAttribute('aria-expanded', false);
//         profileDropdown.setAttribute('aria-hidden', true);
//     };

//     profileBtn.addEventListener('click', () => {
//         const isExpanded = profileBtn.getAttribute('aria-expanded') === 'true';
//         if (isExpanded) {
//             hideDropdown();
//         } else {
//             showDropdown();
//         }
//     });

//     document.addEventListener('click', (event) => {
//         if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
//             hideDropdown();
//         }
//     });

//     profileBtn.addEventListener('mouseenter', showDropdown);
//     profileDropdown.addEventListener('mouseenter', showDropdown);
//     profileBtn.addEventListener('mouseleave', (event) => {
//         if (!profileDropdown.contains(event.relatedTarget)) {
//             hideDropdown();
//         }
//     });
//     profileDropdown.addEventListener('mouseleave', (event) => {
//         if (!profileBtn.contains(event.relatedTarget)) {
//             hideDropdown();
//         }
//     });

//     // 페이지가 로드될 때 사용자 정보 업데이트
//     const userInfo = getUserInfo();
//     updateProfile(userInfo);

//     // // 프로필 전환 페이지로 이동하는 버튼 클릭 이벤트
//     // document.querySelectorAll('.profile-change-btn').forEach(btn => {
//     //     btn.addEventListener('click', () => {
//     //         // 프로필 전환 페이지로 이동
//     //         window.location.href = '/';
//     //     });
//     // });
// });
