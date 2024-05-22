const users = [
  { name: '龙傲天', sex: '男', age: 16 },
  { name: '叶良辰', sex: '男', age: 20 },
  { name: '欧阳吹雪', sex: '女', age: 20 },
  { name: '日天', sex: '男', age: 13 },
  { name: '王尼玛', sex: '男', age: 20 },
  { name: '福尔康', sex: '男', age: 18 },
  { name: '霍水凝', sex: '女', age: 20 },
];
console.log(groupBy(users, (u) => u.sex));
console.log(groupBy(users, (u) => u.age));
console.log(groupBy(users, (u) => u.name.length));
console.log(groupBy(users, (u) => (u.age < 18 ? '未成年' : '成年')));

function groupBy(array, generateKey) {
  const result = {};
  for (const item of array) {
    const key = generateKey(item);
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }
  return result;
}
