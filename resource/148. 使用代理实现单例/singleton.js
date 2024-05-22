export function singleton(className) {
  let ins;
  const proxy = new Proxy(className, {
    construct(target, args) {
      if (!ins) {
        ins = new className(...args);
      } else {
        console.warn(`${className}只有一个实例`);
      }
      return ins;
    },
  });
  className.prototype.constructor = proxy;
  return proxy;
}
