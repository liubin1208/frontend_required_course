const obj = { a: 1 };

Object.defineProperty(obj, 'a', {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
console.log(obj.a);
console.log(Object.keys(obj));
