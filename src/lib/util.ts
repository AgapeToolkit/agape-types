import { Class } from './types'

export function classExtends(target: Class, ancestor: Class) {
  if (target === ancestor) {
    return true;
  }
  
  const prototype = target.prototype;

  return prototype instanceof ancestor;
}
