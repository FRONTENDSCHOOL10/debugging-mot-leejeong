export function deleteInputVal(val) {
  const deleteBtn = val.nextElementSibling;
  deleteBtn.hidden = false;
  deleteBtn.addEventListener('click', () => {
    val.value = '';
    deleteBtn.hidden = true;
  });
}

export function showInputPwd(val) {
  let isShown = false;

  return function innerFunc() {
    isShown = !isShown;
    isShown ? (val.type = 'text') : (val.type = 'password');
  };
}
