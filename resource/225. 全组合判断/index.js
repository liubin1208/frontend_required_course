function isFullCombination(datas) {
  if (datas.length === 0) {
    return false;
  }
  const keys = Object.keys(datas[0]);
  const fieldMap = new Map(keys.map((k) => [k, new Set()]));
  const objSerialized = new Set();
  const valueMap = new Map();
  let n = 1;
  for (const data of datas) {
    let serialized = '';
    for (const key of keys) {
      const value = data[key];
      if (!valueMap.has(value)) {
        valueMap.set(value, n++);
      }
      fieldMap.get(key).add(value);
      serialized += '-' + valueMap.get(value);
    }
    if (objSerialized.has(serialized)) {
      return false;
    }
    objSerialized.add(serialized);
  }
  const n1 = [...fieldMap.values()].reduce((acc, cur) => acc * cur.size, 1);
  const n2 = datas.length;
  return n1 === n2;
}

const inputData = [
  { 字段1: '甲', 字段2: 'a', 字段3: 1 },
  { 字段1: '甲', 字段2: 'a', 字段3: 2 },
  { 字段1: '甲', 字段2: 'a', 字段3: 3 },
  { 字段1: '甲', 字段2: 'b', 字段3: 1 },
  { 字段1: '甲', 字段2: 'b', 字段3: 2 },
  { 字段1: '甲', 字段2: 'b', 字段3: 3 },
  { 字段1: '乙', 字段2: 'a', 字段3: 1 },
  { 字段1: '乙', 字段2: 'a', 字段3: 2 },
  { 字段1: '乙', 字段2: 'a', 字段3: 3 },
  { 字段1: '乙', 字段2: 'b', 字段3: 1 },
  { 字段1: '乙', 字段2: 'b', 字段3: 2 },
  { 字段1: '乙', 字段2: 'b', 字段3: 3 },
];

console.log(isFullCombination(inputData));
