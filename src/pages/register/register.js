import pb from '../../api/pocketbase.js';
import {
  validateId,
  validatePwd,
  validateEmail,
} from './../../utils/validate.js';
import './register.css';

const userId = document.querySelector('.form__input--id');
const userPwd = document.querySelector('.form__input--pwd');
const userPwdConfirm = document.querySelector('.form__input--pwd-confirm');
const userEmail = document.querySelector('.form__input--email');
const allTermsInputs = document.querySelectorAll('.sign-up-terms__lists input');
const acceptAllTerms = document.querySelector(
  '.sign-up-terms__input-all-accept'
);
const collectPersonalInfoTerms = document.querySelector(
  '.sign-up-terms__input-collect-info'
);
const registerSubmitBtn = document.querySelector('.sign-up__submit-button');
let isChecked = false;

function findInput(node) {
  let lists = [];

  function inner(elements) {
    for (let list of elements) {
      for (let elem of list.children) {
        if (elem.nodeName.toLowerCase() === 'input') {
          lists.push(elem);
        }
        if (elem.nodeName.toLowerCase() === 'ul') {
          inner(elem.children);
        }
      }
    }
  }
  inner(node);
  return lists;
}

function handleSubTermsList(e) {
  const parentList = e.target.closest('ul').closest('li');
  const childInput = findInput([parentList]);
  console.log(childInput);
  const checkInputBox = (currentInput) => currentInput.checked === true;
  const isAllChecked = [...allTermsInputs].every(checkInputBox);
  childInput[0].checked = isAllChecked;
}

//사실 함수를 여러개 두지 말고 하나로 합치고 싶음
function handleUserIdInput(e) {
  const target = e.target;
  const idValidateText = document.querySelector('.sign-up__validation--id');
  !validateId(target.value)
    ? (idValidateText.hidden = false)
    : (idValidateText.hidden = true);
}

function handleUserPwdInput(e) {
  const target = e.target;
  const pwdValidateText = document.querySelector('.sign-up__validation--pwd');
  !validatePwd(target.value)
    ? (pwdValidateText.hidden = false)
    : (pwdValidateText.hidden = true);
}

function handleUserPwdConfirmInput(e) {
  const target = e.target;
  const pwdConfirmText = document.querySelector(
    '.sign-up__validation--pwd-confirm'
  );
  userPwd.value === target.value
    ? (pwdConfirmText.hidden = false)
    : (pwdConfirmText.hidden = true);
}

function handleUserEmailInput(e) {
  const target = e.target;
  const emailValidateText = document.querySelector(
    '.sign-up__validation--email'
  );
  !validateEmail(target.value)
    ? (emailValidateText.hidden = false)
    : (emailValidateText.hidden = true);
}

//상위 terms를 찾아서 해당 terms의 하위 terms를 전부 선택
function handleTerms(e) {
  const target = e.target;
  let siblingElem = target.nextElementSibling;
  isChecked = target.checked;

  if (siblingElem.nodeName.toLowerCase() !== 'ul') {
    while (siblingElem.nodeName.toLowerCase() !== 'ul') {
      siblingElem = siblingElem.nextElementSibling;
    }
  }
  const termsLists = siblingElem.children;
  const termsInputs = findInput(termsLists);

  termsInputs.forEach((input) => {
    input.checked = isChecked;
  });
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

userId.addEventListener('input', handleUserIdInput);
userPwd.addEventListener('input', handleUserPwdInput);
userPwdConfirm.addEventListener('input', handleUserPwdConfirmInput);
userEmail.addEventListener('input', handleUserEmailInput);

acceptAllTerms.addEventListener('input', handleTerms);
collectPersonalInfoTerms.addEventListener('input', handleTerms);
registerSubmitBtn.addEventListener('click', handleRegister);
allTermsInputs.forEach((elem) => {
  elem.addEventListener('click', handleSubTermsList);
});
