import { PI as AliasNum } from "./math.mjs"; // as 문 이하를 빼면 PI 를 직접사용해야 함.
import addHaHa from "./math.mjs"; // export default 는 중괄호를 뺄 수 있다.  함수명이 없으면, 내가 지은 이름으로 사용하면 된다.

/*
import { PI } from "./math";
^^^^^^

SyntaxError: Cannot use import statement outside a module
*/
console.log(AliasNum);

console.log(addHaHa(1, 2));
