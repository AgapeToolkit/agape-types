// eslint-disable-next-line @nx/enforce-module-boundaries
import { Class } from '@agape/types';

export function classExtends(target: Class, ancestor: Class) {
  if (target === ancestor) {
    return true;
  }
  
  const prototype = target.prototype;

  return prototype instanceof ancestor;
}
