/**
 * 数字转中文
 * @param {number} num 万亿以下的正整数
 */
function toChineseNumber(num) {
  // 1234 1234
  const parts = num
    .toString()
    .replace(/(?=(\d{4})+$)/g, ',')
    .split(',')
    .filter(Boolean);
  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const units = ['', '十', '百', '千'];
  function _handleZero(str) {
    return str.replace(/零+/g, '零').replace(/零$/, '');
  }
  function _transform(n) {
    // 1234
    let result = '';
    for (let i = 0; i < n.length; i++) {
      const c = map[n[i]];
      let u = units[n.length - i - 1];
      if (c === '零') {
        u = '';
      }
      result += c + u;
    }
    result = _handleZero(result);
    return result;
  }
  const bigUnits = ['', '万', '亿'];
  let result = '';
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    const c = _transform(p);
    const u = bigUnits[parts.length - i - 1];
    if (c === '') {
      result += '零';
      continue;
    }
    result += c + u;
  }
  result = _handleZero(result);
  return result;
}

function toBigChineseNumber(num) {
  const cnum = toChineseNumber(num);
  const map = {
    零: '零',
    一: '壹',
    二: '贰',
    三: '叁',
    四: '肆',
    五: '伍',
    六: '陆',
    七: '柒',
    八: '捌',
    九: '玖',
    十: '拾',
    百: '佰',
    千: '仟',
    万: '萬',
    亿: '亿',
  };
  return cnum
    .split('')
    .map((c) => map[c])
    .join('');
}

// 一千二百三十四万一千二百三十四
console.log(toBigChineseNumber(123400000000));
