var obj = {
  a: 1,
  b: 2,
};

Object.defineProperty(Object.prototype, 'c', {
  value: function () {
    console.log('c');
  },
  writable: true,
  enumerable: false,
  configurable: true,
});

for (var key in obj) {
  console.log(key);
}

// var desc = Object.getOwnPropertyDescriptor(Object.prototype, 'c');
// console.log(desc);
