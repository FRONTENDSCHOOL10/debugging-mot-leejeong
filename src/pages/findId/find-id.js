import './find-id.css';

const userEmail = document.querySelector('.find-id__input--email');
const findIdSubmitBtn = document.querySelector('.find-id__submit-button--email');

function handleUserEmail(e) {
  //이메일 형식 체크
  //정규 표현식
  const value = e.target.value;
  // 올바른 형식이 아니면 hidden 삭제
  //

  //
}

function handleSubmitBtn() {
  const userEmail = handleUserEmail();
  //해당 value랑 일치하는 사용자 데이터 받아오기
}

userEmail.addEventListener('input', handleUserEmail);
findIdBtn.addEventListener('click', handleSubmitBtn);
