const READ = 0b1; // 00001
const CREATE = 0b10; // 00010
const UPDATE = 0b100; // 00100
const DELETE = 0b1000; // 01000

const xxx = READ | UPDATE | DELETE;

const yyy = xxx ^ READ;
console.log(yyy.toString(2));

// if ((xxx & READ) === 0) {
//   console.log('无读取权限');
// } else {
//   console.log('有读取权限');
// }
