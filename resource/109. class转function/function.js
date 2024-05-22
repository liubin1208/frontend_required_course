'use strict';

function Example(name) {
  // 是否使用new关键字在调用
  if (!new.target) {
    throw new TypeError(
      `Class constructor Example cannot be invoked without 'new'`
    );
  }
  this.name = name;
}
Object.defineProperty(Example.prototype, 'func', {
  value: function () {
    // 不能使用new 来调用
    if (new.target) {
      throw new TypeError(
        `Class constructor Example cannot be invoked without 'new'`
      );
    }
    console.log(this.name);
  },
  enumerable: false,
});

new Example.prototype.func();
