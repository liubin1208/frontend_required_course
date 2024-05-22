const obj = {};
obj.b = 3;
obj.a = 1;
obj['1'] = 2;
obj['0'] = 11;
console.log(obj);
console.log(Object.keys(obj));
