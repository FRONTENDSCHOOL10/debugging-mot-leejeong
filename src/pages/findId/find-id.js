import { validateEmail } from '../../utils/validate';
import { deleteInputVal } from '../../utils/input';
import pb from '../../api/pocketbase';
import './find-id.scss';

const userEmail = document.querySelector('.find-id__input--email');

const findIdSubmitBtn = document.querySelector(
  '.find-id__submit-button--email'
);

function handleUserEmail(e) {
  const target = e.target;
  const emailValidateText = document.querySelector(
    '.find-id__validation--email'
  );

  if (validateEmail(target.value)) {
    emailValidateText.hidden = true;
    findIdSubmitBtn.disabled = false;
  } else {
    emailValidateText.hidden = false;
    findIdSubmitBtn.disabled = true;
  }

  deleteInputVal(target);
}

async function handleSubmitBtn() {
  try {
    const { username } = await pb
      .collection('users')
      .getFirstListItem(`email="${userEmail.value}"`);
    console.log(username);
    alert('인증 메일을 발송하였습니다.');
  } catch {
    alert('이메일과 일치하는 정보가 없습니다.');
  }
}

userEmail.addEventListener('input', handleUserEmail);
findIdSubmitBtn.addEventListener('click', handleSubmitBtn);
