const str = '👅🐶👋🉐bb🏠';

String.prototype.pointLength = function () {
  let len = 0;
  for (let i = 0; i < this.length; ) {
    len++;
    const point = this.codePointAt(i);
    i += point > 0xffff ? 2 : 1;
  }
  return len;
};

String.prototype.pointAt = function (index) {
  let curIndex = 0; // 目前遍历到第几个码点
  for (let i = 0; i < this.length; ) {
    if (curIndex === index) {
      const point = this.codePointAt(i);
      return String.fromCodePoint(point);
    }
    curIndex++;
    const point = this.codePointAt(i);
    i += point > 0xffff ? 2 : 1;
  }
};

String.prototype.pointSlice = function (start, end = this.pointLength()) {
  let result = '';
  const len = this.pointLength();
  for (let i = start; i < len && i < end; i++) {
    result += this.pointAt(i);
  }
  return result;
};

console.log(str.pointLength());
console.log(str.pointAt(0));
console.log(str.pointSlice(1, 3));
