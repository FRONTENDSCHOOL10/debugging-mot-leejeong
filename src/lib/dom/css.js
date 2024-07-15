<<<<<<< HEAD
import { getNode } from './getNode.js';
import { isString, isObject, isArray } from '../utils/type.js';
=======
import { getNode } from "./getNode.js";
import { isString, isObject, isArray } from "../utils/type.js";

>>>>>>> parent of c9890db (Revert "환경")

/* -------------------------------------------- */
/*                     class                    */
/* -------------------------------------------- */

<<<<<<< HEAD
/**
 *
 * @param {HTMLElement | string} node
 * @param  {string | array | object} className
 * @returns {void}
 */

export function addClass(node, ...className) {
  if (typeof node === 'string') node = document.querySelector(node);

  className.forEach((c) => {
    if (isObject(c)) c = Object.values(c);

    if (c.includes(',')) c = c.replace(/\s*/g, '').split(',');

    if (isArray(c)) {
      c.forEach((c) => node.classList.add(c));
    } else if (isString(c)) {
      node.classList.add(c);
    } else {
      throw new TypeError('addClass 함수의 인수는 문자 타입 이어야 합니다.');
    }
  });
}

export function removeClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
=======

/**
 * 
 * @param {HTMLElement | string} node 
 * @param  {string | array | object} className 
 * @returns {void}
 */

export function addClass(node,...className){

  if(typeof node === 'string') node = document.querySelector(node)
  
  className.forEach((c)=>{
    
    if(isObject(c)) c = Object.values(c) 
    
    if(c.includes(',')) c = c.replace(/\s*/g,'').split(',')
    
    if(isArray(c)){
      c.forEach( c => node.classList.add(c))
    }
    else if(isString(c)){
      node.classList.add(c);
    }
    else{
      throw new TypeError('addClass 함수의 인수는 문자 타입 이어야 합니다.');
    }
  })
    
}

export function removeClass(node,className){

  if(typeof node === 'string') node = document.querySelector(node)

  if(!className) {
    node.className = ''
    return;
  }
    
  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
>>>>>>> parent of c9890db (Revert "환경")
  }

  node.classList.remove(className);
}

<<<<<<< HEAD
export function toggleClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  return node.classList.toggle(className);
}

=======
export function toggleClass(node,className){
  if(typeof node === 'string') node = document.querySelector(node)

  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  
  return node.classList.toggle(className);
}




>>>>>>> parent of c9890db (Revert "환경")
/* -------------------------------------------- */
/*                     style                    */
/* -------------------------------------------- */

<<<<<<< HEAD
function getStyle(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'getStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node)[prop];
}

function setStyle(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new ReferenceError(
      'setStyle 함수의 세 번째 인수는 필수 입력값 입니다.'
    );

  node.style[prop] = value;
}

export const css = (node, prop, value) =>
  !value ? getStyle(node, prop) : setStyle(node, prop, value);
=======

function getStyle(node,prop){
  
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('getStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node)[prop]
}

function setStyle(node,prop,value){
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('setStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
  }

  if(!value) throw new ReferenceError('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');

  node.style[prop] = value;
  
}

export const css = (node,prop,value) => !value ? getStyle(node,prop) : setStyle(node,prop,value);
>>>>>>> parent of c9890db (Revert "환경")
