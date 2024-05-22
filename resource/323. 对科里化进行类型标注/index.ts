/* 
1. ()=>R
2. (A)=>R
3. (第一个参数类型)=>新的函数
*/

type Curried<A extends any[], R> = 
  A extends [] 
  ? () => R : 
  A extends [infer P]
  ? (x: P)=> R :
  A extends [infer P, ...infer Rest]
  ? (x: P)=>Curried<Rest, R> :
  never;

declare function curry<A extends any[], R>(
  fn: (...args: A) => R
): Curried<A, R>;

function sum(a:number, b:number, c:string) {
  return 123;
}

const curried = curry(sum);
const r = curried(34)(34)('asdf');
