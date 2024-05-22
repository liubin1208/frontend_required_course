const READ = 0b0001;
const WRITE = 0b0010;
const DELETE = 0b0100;
const CREATE = 0b1000;

const perm = READ | WRITE | DELETE;

// console.log((perm & WRITE) === WRITE);

const newPerm = perm & ~READ;
console.log(newPerm.toString(2));
