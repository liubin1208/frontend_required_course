interface ComplexObject {
  mandatory: string;
  option1?: number;
  option2?: boolean;
}
let a: Required<ComplexObject>; // { mandatory: string; option1: number; option2: boolean; }
// number|undefined extends number
type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

let keys: GetOptional<ComplexObject>;
// { option1?: number; option2?: boolean; }
