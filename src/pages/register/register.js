import pb from '../../api/pocketbase.js';
import {
  validateId,
  validatePwd,
  validateEmail,
} from './../../utils/validate.js';
import { deleteInputVal, showInputPwd } from '../../utils/input.js';
import './register.scss';

const userId = document.querySelector('.sign-up-form__input--id');
const userPwd = document.querySelector('.sign-up-form__input--pwd');
const userPwdConfirm = document.querySelector(
  '.sign-up-form__input--pwd-confirm'
);
const userEmail = document.querySelector('.sign-up-form__input--email');
const allTermsLists = document.querySelectorAll(
  '.sign-up-terms__lists  li:not(:has(ul)) > input'
);
const acceptAllTerms = document.querySelector(
  '.sign-up-terms__input-all-accept'
);
const collectPersonalInfoTerms = document.querySelector(
  '.sign-up-terms__input-collect-info'
);
const registerSubmitBtn = document.querySelector('.sign-up__submit-button');

function activeBtn() {
  if (
    validateId(userId.value) &&
    validatePwd(userPwd.value) &&
    userPwd.value === userPwdConfirm.value &&
    validateEmail(userEmail.value)
  ) {
    registerSubmitBtn.disabled = false;
  }
}

//사실 함수를 여러개 두지 말고 하나로 합치고 싶음
function handleUserIdInput(e) {
  const target = e.target;
  const idValidateText = document.querySelector('.sign-up__validation--id');

  !validateId(target.value)
    ? (idValidateText.hidden = false)
    : (idValidateText.hidden = true);

  deleteInputVal(target);
  activeBtn();
}

function handleUserPwdInput(e) {
  const target = e.target;
  const pwdValidateText = document.querySelector('.sign-up__validation--pwd');
  const showPwdBtn = target.nextElementSibling.nextElementSibling;

  !validatePwd(target.value)
    ? (pwdValidateText.hidden = false)
    : (pwdValidateText.hidden = true);

  deleteInputVal(target);
  activeBtn();

  showPwdBtn.addEventListener('click', showInputPwd(target));
}

function handleUserPwdConfirmInput(e) {
  const target = e.target;
  const pwdConfirmText = document.querySelector(
    '.sign-up__validation--pwd-confirm'
  );
  const showPwdBtn = target.nextElementSibling.nextElementSibling;

  userPwd.value === target.value
    ? (pwdConfirmText.hidden = false)
    : (pwdConfirmText.hidden = true);

  deleteInputVal(target);
  activeBtn();

  showPwdBtn.addEventListener('click', showInputPwd(target));
}

function handleUserEmailInput(e) {
  const target = e.target;
  const emailValidateText = document.querySelector(
    '.sign-up__validation--email'
  );

  !validateEmail(target.value)
    ? (emailValidateText.hidden = false)
    : (emailValidateText.hidden = true);
  activeBtn();

  deleteInputVal(target);
}

async function handleRegister() {
  const data = {
    username: userId.value,
    email: userEmail.value,
    password: userPwd.value,
    passwordConfirm: userPwd.value,
  };

  try {
    await pb.collection('users').create(data);
    alert('회원가입이 완료되었습니다.');
    location.href = '/src/pages/login/';
  } catch {
    alert('회원 정보를 정확히 입력해 주세요.');
    location.reload();
  }
}

let isAllChecked = false;

function handleCheckAllTerms(e) {
  const target = e.target;
  const subList = target.nextElementSibling.nextElementSibling;
  const allInputs = [...subList.querySelectorAll('input')];
  isAllChecked = !isAllChecked;

  allInputs.forEach((input) => {
    isAllChecked ? (input.checked = true) : (input.checked = false);
  });
}

function handleTermList(e) {
  const target = e.target;
  const currentUl = target.closest('ul');
  const parentInput = currentUl.previousElementSibling.previousElementSibling;

  const allInputs = [...currentUl.querySelectorAll('input')];
  const checkInputBox = (input) => input.checked;

  if (allInputs.every(checkInputBox)) {
    isAllChecked = true;
    parentInput.checked = isAllChecked;
    acceptAllTerms.checked = true;
    console.log(acceptAllTerms.checked);
  } else {
    isAllChecked = false;
    parentInput.checked = isAllChecked;
  }
}

acceptAllTerms.addEventListener('click', handleCheckAllTerms);
allTermsLists.forEach((li) => {
  li.addEventListener('click', handleTermList);
});
collectPersonalInfoTerms.addEventListener('click', handleCheckAllTerms);

userId.addEventListener('input', handleUserIdInput);
userPwd.addEventListener('input', handleUserPwdInput);
userPwdConfirm.addEventListener('input', handleUserPwdConfirmInput);
userEmail.addEventListener('input', handleUserEmailInput);

registerSubmitBtn.addEventListener('click', handleRegister);
