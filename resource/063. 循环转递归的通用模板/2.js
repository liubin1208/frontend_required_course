const arr = [1, 2, 3, 4, 6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// 对数组求和，不能使用循环，不能调用数组中的方法

// function m(arr, i = 0) {
//   if (i === arr.length) return 0;
//   return arr[i] + m(arr, i + 1);
// }

function m() {
  let sum = 0;
  let i = 0;
  function _m() {
    if (i >= arr.length) {
      return;
    }
    sum += arr[i];
    i++;
    _m();
  }
  _m();
  console.log(sum);
}
m();
