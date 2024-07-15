<<<<<<< HEAD
import { isString } from '../utils/type.js';
import { getNode } from './getNode.js';

export function endScroll(node) {
  if (isString(node)) node = getNode(node);
  return (node.scrollTop = node.scrollHeight);
}
=======

import { isString } from '../utils/type.js'
import { getNode } from './getNode.js'



export function endScroll(node){
  if(isString(node)) node = getNode(node);
  return node.scrollTop = node.scrollHeight
}
>>>>>>> parent of c9890db (Revert "환경")
