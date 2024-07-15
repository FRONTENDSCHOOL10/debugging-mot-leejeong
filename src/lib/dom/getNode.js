<<<<<<< HEAD
export function getNode(node, context = document) {
  // if(isString(context)) context = document.querySelector(context);

  // context가 document가 아니라면 querySelector를 돌아줘.
  // if()
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

export function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);
  return context.querySelectorAll(node);
}
=======
import { isString } from '../utils/typeOf.js'
import { typeError } from '../error/typeError.js'

export function getNode(node){
  if(!isString(node)){
    typeError('getNode 함수의 인자는 문자 타입 이여야 합니다.');
  }

  // if(!isString(node)) typeError('에러가 발생했습니다.');
  
  return document.querySelector(node)
}


export function getNodes(node){
  if(!isString(node)){
    typeError('getNode 함수의 인자는 문자 타입 이여야 합니다.');
  }
  
  return document.querySelectorAll(node)
}
>>>>>>> parent of c9890db (Revert "환경")
