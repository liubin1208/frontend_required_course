const user = {
  name: 'deng',
  age: 28,
};

const hi = tag`my name is ${user.name}, I'm ${user.age}``sfdsafads`;
// tag(xxx)
console.log(hi);

function tag() {
  console.log(arguments);
  return tag;
}
