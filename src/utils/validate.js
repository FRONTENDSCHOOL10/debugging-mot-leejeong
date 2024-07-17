//아이디 유효성
//영문 또는 영문, 숫자 조합 6−12자리
export function validateId(val) {
  const result = /^[A-Za-z0-9]{6,12}$/g.test(val);
  return result;
}

//비밀번호 유효성
//영문, 숫자, 특수문자(~!@#$%^&*) 조합 8−15자리
export function validatePwd(val) {
  const result = /^[\w~!@#$%^&*()_=+|,./<>?;:'"[\]{}-]{8,15}$/g.test(val);
  return result;
}

//이메일 유효성
//@영문.영문 형식
export function validateEmail(val) {
  const result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(val);
  return result;
}
