// 手写 Promise.all
Promise.myAll = function (proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  let count = 0;
  const result = [];
  let i = 0;
  let fullfilledCount = 0;
  for (const prom of proms) {
    const index = i;
    i++;
    count++;
    Promise.resolve(prom).then((data) => {
      // 1. data -> result
      result[index] = data;
      // 2. 完成最终的promise
      fullfilledCount++;
      if (fullfilledCount === count) {
        res(result);
      }
    }, rej);
  }
  if (count === 0) {
    res(result);
  }
  return p;
};

Promise.myAll([1, 2, 3, Promise.reject(1)]).then(
  (datas) => {
    console.log(datas);
  },
  (err) => {
    console.log(err);
  }
);
