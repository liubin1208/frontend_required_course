class MemoizeMap {
  constructor() {
    this._normalMap = new Map();
    this._objectMap = new WeakMap();
  }

  _isObject(key) {
    return typeof key === 'object' && key !== null;
  }

  get(key) {
    if (this._isObject(key)) {
      return this._objectMap.get(key);
    } else {
      return this._normalMap.get(key);
    }
  }

  set(key, value) {
    if (this._isObject(key)) {
      this._objectMap.set(key, value);
    } else {
      this._normalMap.set(key, value);
    }
  }
  has(key) {
    if (this._isObject(key)) {
      return this._objectMap.has(key);
    } else {
      return this._normalMap.has(key);
    }
  }
}

// 实现该函数
function memoize(func, resolver) {
  function memoized(...args) {
    const key = resolver ? resolver(...args) : args[0];
    if (memoized.cache.has(key)) {
      return memoized.cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache.set(key, result);
    return result;
  }
  memoized.cache = new MemoizeMap();
  return memoized;
}

var object = { a: 1, b: 2 };
var other = { c: 3, d: 4 };

var values = memoize((obj) => Object.values(obj));
console.log(values(object));
// => [1, 2]

console.log(values(other));
// => [3, 4]

object.a = 2;
console.log(values(object));
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
console.log(values(object));
// => ['a', 'b']
