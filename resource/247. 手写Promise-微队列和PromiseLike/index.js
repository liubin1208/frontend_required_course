function runMicroTask(fn) {
  if (process && typeof process.nextTick === 'function') {
    // node process.nextTick
    process.nextTick(fn);
  } else if (typeof MutationObserver === 'function') {
    // 浏览器 MutationObserver
    const ob = new MutationObserver(fn);
    const text = document.createTextNode('1');
    ob.observe(text);
    text.data = '2';
  } else {
    setTimeout(fn);
  }
}

function isPromiseLike(value) {
  return value && typeof value.then === 'function';
}
