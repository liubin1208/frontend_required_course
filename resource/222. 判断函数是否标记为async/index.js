function isAsyncFunction(func) {
  // console.log(func instanceof AsyncFunction);
  return Object.prototype.toString.call(func) === '[object AsyncFunction]';
}

console.log(isAsyncFunction(() => {})); // false
console.log(isAsyncFunction(async () => {})); // true
