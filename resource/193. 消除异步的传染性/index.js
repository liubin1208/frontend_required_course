function getUser() {
  return fetch('./1.json');
}

function m1() {
  const user = getUser();
  // other works
  return user;
}

function m2() {
  const user = m1();
  // other works
  return user;
}

function m3() {
  const user = m2();
  // other works
  return user;
}

function main() {
  console.log('main begin');
  const user = m3();
  console.log(user);
}

function run(func) {
  // 1. 改动fetch
  const oldFetch = window.fetch;
  const cache = {
    status: 'pending',
    value: null,
  };
  function newFetch(...args) {
    // 有缓存返回缓存
    if (cache.status === 'fulfilled') {
      return cache.value;
    } else if (cache.status === 'rejected') {
      throw cache.value;
    }
    // 没有缓存
    // 发送请求
    const p = oldFetch(...args)
      .then((data) => data.json())
      .then((data) => {
        cache.value = data;
        cache.status = 'fulfilled';
      })
      .catch((err) => {
        cache.value = err;
        cache.status = 'rejected';
      });
    // 抛出错误
    throw p;
  }
  window.fetch = newFetch;
  // 2. 执行func
  try {
    func();
  } catch (err) {
    // 等待请求完成后重新运行func
    if (err instanceof Promise) {
      err.finally(() => {
        window.fetch = newFetch;
        func();
        window.fetch = oldFetch;
      });
    }
  }
  // 3. 改回fetch
  window.fetch = oldFetch;
}

run(main);
