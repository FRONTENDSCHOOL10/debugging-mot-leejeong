import pb from '../../api/pocketbase';
import { deleteInputVal } from '../../utils/input';
import { showInputPwd } from '../../utils/input';
import './login.scss';

const idInput = document.querySelector('.log-in-form__input--id');
const pwdInput = document.querySelector('.log-in-form__input--pwd');
const loginSubmitBtn = document.querySelector('.log-in-submit__button');
const showPwdBtn = document.querySelector('.log-in__button-show-pwd');

function handleInput(e) {
  const target = e.target;

  deleteInputVal(target);
}

async function handleLogin() {
  const userId = document.querySelector('.log-in-form__input--id');
  const userPwd = document.querySelector('.log-in-form__input--pwd');
  const autoLogin = document.querySelector('.auto-log-in__input');

  try {
    const { record } = await pb
      .collection('users')
      .authWithPassword(userId.value, userPwd.value);
    await pb
      .collection('users')
      .update(record.id, { autoLogin: autoLogin.checked });

    const result = JSON.parse(localStorage.getItem('pocketbase_auth'));
    localStorage.setItem(
      'auth',
      JSON.stringify({
        isAuth: !!result.model,
        user: result.model,
        token: result.token,
      })
    );

    alert(`${userId.value}님, 반갑습니다.`);
    location.href = '/src/pages/main/';
  } catch {
    alert('아이디 혹은 비밀번호를 잘못 입력하였습니다.');
    location.reload();
  }
}

idInput.addEventListener('input', handleInput);
pwdInput.addEventListener('input', handleInput);
showPwdBtn.addEventListener('click', showInputPwd(pwdInput));
loginSubmitBtn.addEventListener('click', handleLogin);
