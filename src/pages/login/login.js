import './login.css';

const userId = document.querySelector('.log-in-form__input--id');
const autoLogin = document.querySelector('.auto-log-in__input');
const loginSubmitBtn = document.querySelector('.log-in-submit__button');

const userData = {
  userId: '',
  autoLogin: false,
  isAuth: false,
};

//사용자 데이터 받아오기
function handleLoginUserId(e) {
  const value = e.target.value;
  userData.userId = value;
}

function handleAutoLogin(e) {
  const value = e.target.checked;
  userData.autoLogin = value;
}

function handleLogin() {
  const userPwd = document.querySelector('.log-in-form__input--pwd');

  //사용자 데이터와 일치한 경우

  if (userData.userId && userPwd) {
    userData.isAuth = true;
    localStorage.setItem('auth', JSON.stringify(userData));
    //성공적으로 로그인 됐다고 알림 후 메인페이지로 이동
  }
  //아이디 혹은 비밀번호를 입력하지 않은 경우
  if (userData.userId === '' || !userPwd) {
    console.log('아이디 및 비밀번호를 입력해 주세요');
  }

  //아이디 혹은 비밀번호를 잘못 입력한 경우
  //포켓베이스에서 유저 정보를 받아서 비교
  //일치하지 않으면 아이디 및 비밀번호가 일치하지 않습니다.
  // if (userData.userId === "" || !userPwd) {
  // }
}

userId.addEventListener('input', handleLoginUserId);
autoLogin.addEventListener('input', handleAutoLogin);
loginBtn.addEventListener('click', handleLogin);
