const r = console.log.call.call.call.call.call.call.call.apply(
  (a) => a,
  [1, 2]
);
console.log(r);

// Function.prototype.call.apply((a) => a, [1, 2]);

// 函数.apply(this指向, 参数数组)
// const fn = (a) => a;
// fn(2)
