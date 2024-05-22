import getName from './getName.js';

String.prototype.asyncReplaceAll = async function (pattern, asyncFn) {
  if (typeof asyncFn === 'string') {
    return this.replaceAll(pattern, asyncFn);
  }
  if (typeof asyncFn !== 'function') {
    throw new TypeError(
      'The second argument should be an async function or a string'
    );
  }
  let reg;
  if (typeof pattern === 'string') {
    reg = new RegExp(pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'), 'g');
  } else if (pattern instanceof RegExp) {
    if (!pattern.global) {
      throw new TypeError('The pattern RegExp should have the global flag set');
    }
    reg = new RegExp(pattern);
  } else {
    throw new TypeError('The pattern should be a string or a RegExp');
  }
  // asyncFn 是一个函数， reg 是一个正则表达式
  // this --->  [Promise, ',', Promise, ',', '2', '-', '3', '_', '12', '——', '13]
  let result = [];
  let match;
  let lastIndex = 0; // 上一次匹配的结束位置
  while ((match = reg.exec(this)) !== null) {
    const item = asyncFn(match[0]);
    const prefix = this.slice(lastIndex, match.index);
    lastIndex = match.index + match[0].length;
    result.push(prefix);
    result.push(item);
  }
  result.push(this.slice(lastIndex));
  result = await Promise.all(result);
  return result.join('');
};

const template = `15,1,2-3_12——13--------`;
(async () => {
  const result = await template.asyncReplaceAll(/\d+/g, (m) => getName(m));
  console.log(result);
  // const matches = template.match(/\d+|\D+/g);
  // let result = matches.map((m) => (/^\d+$/.test(m) ? getName(m) : m));
  // result = await Promise.all(result);
  // console.log(result.join(''));
  // let result = template;
  // for (const match of matches) {
  //   const name = await getName(match);
  //   result = result.replace(match, name);
  // }
  // console.log(result);
})();
// const result = template.replaceAll(/\d+/g, function (match) {
//   return getName(match);
// });
// console.log(result);
