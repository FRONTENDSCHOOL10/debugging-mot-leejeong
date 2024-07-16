import './find-pwd.css';

const userId = document.querySelector('.find-pwd__input--id');
const findPwdSubmitBtn = document.querySelector('.find-pwd__submit-button--id');

function handleUserId(e) {
  const target = e.target;
  const id = target.value;
  //id의 유효성 검사
  //유효성 검사에서 false가 나온다면
  //아래 p 표시
}

function handleFindPwd() {
  //userId.value를 변수로
  //데이터 베이스에서 일치하는 아이디 찾아서 이메일 주소로 인증번호 발송
  alert('인증 메일이 발송되었습니다.');
  userId.value = '';
}

userId.addEventListener('input', handleUserId);
findPwdBtn.addEventListener('click', handleFindPwd);
