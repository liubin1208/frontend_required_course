Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx);
  // ctx一定是对象
  const fn = this; // 待执行的函数
  // 用symbol作为属性名
  const key = Symbol('temp');
  // ctx[key] = fn;
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: fn,
  });
  const result = ctx[key](...args);
  delete ctx[key];
  return result;
};

function method(a, b) {
  console.log(this, a, b);
  return a + b;
}

const r = method.myCall(123, 2, 3);
console.log(r);
