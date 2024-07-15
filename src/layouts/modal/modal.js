import './modal.scss';

document.addEventListener('DOMContentLoaded', () => {
  const modalBackground = document.querySelector('.modal__background');
  const confirmButton = document.querySelector('.modal__btn--confirm');
  const cancelButton = document.querySelector('.modal__btn--cancel');

  // 확인 버튼 클릭 시 랜딩 페이지로 이동
  confirmButton.addEventListener('click', () => {
    window.location.href = '../../pages/landing/index.html'; 
  });

  // 취소 버튼 클릭 시 모달 닫기
  cancelButton.addEventListener('click', () => {
    modalBackground.style.display = 'none'; 
  });
});
