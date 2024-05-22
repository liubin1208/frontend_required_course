type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer R
) => any
  ? R
  : never;

/* 
  (x: { a: 1; b: 2 }) => any
  |
  (x: { c: 3; d: 4 }) => any 
  */

type Test = UnionToIntersection<{ a: 1; b: 2 } | { c: 3; d: 4 }>;
