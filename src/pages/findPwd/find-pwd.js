import pb from '../../api/pocketbase';
import { validateId } from '../../utils/validate';
import { deleteInputVal } from '../../utils/input';
import './../../layouts/header/header.js';
import './../../layouts/footer/footer.js';
import './find-pwd.scss';

const userId = document.querySelector('.find-pwd__input--id');
const findPwdSubmitBtn = document.querySelector('.find-pwd__submit-button--id');

function handleUserIdInput(e) {
  const target = e.target;
  const idValidateText = document.querySelector('.find-pwd__validation--id');

  if (validateId(target.value)) {
    idValidateText.hidden = true;
    findPwdSubmitBtn.disabled = false;
  } else {
    idValidateText.hidden = false;
    findPwdSubmitBtn.disabled = true;
  }

  deleteInputVal(target);
}

async function handleFindPwd() {
  try {
    const { email } = await pb
      .collection('users')
      .getFirstListItem(`username="${userId.value}"`);
    console.log(email);
    alert('인증 메일을 발송하였습니다.');
  } catch {
    alert('아이디와 일치하는 정보가 없습니다.');
  }
}

userId.addEventListener('input', handleUserIdInput);
findPwdSubmitBtn.addEventListener('click', handleFindPwd);
