let test1: ('a' | 'b' | symbol) & string;

let test2: 'a' | 'b';

type O = {
  a: number;
  b: number;
  [Symbol.iterator]: number;
};

type T = keyof O & string;
const t: T = 'a';
