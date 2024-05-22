const cache = new WeakMap();

function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }
  const cached = cache.get(value);
  if (cached) {
    return cached;
  }
  const result = Array.isArray(value) ? [] : {};
  Object.setPrototypeOf(result, Object.getPrototypeOf(value));
  cache.set(value, result);
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}
function Test() {
  this.a = 1;
  this.b = 2;
}
Test.prototype.c = 3;
const obj = new Test();
obj.c = obj;

// obj.e = obj;
// const obj = function () {};
const cloned = deepClone(obj);
console.log(cloned);
console.log(obj);
console.log(cloned.c === obj.c);
