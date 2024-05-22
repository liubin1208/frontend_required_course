function debounce(func, duration = 500) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, duration);
  };
}

const d_Layout = debounce(layout, 1000);

window.onresize = d_Layout;
