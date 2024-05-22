function vortex(n, m) {
  const nums = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let i = 0; // row index;
  let j = 0; // column index;
  let count = 1;
  let stepI = 0; // i的变化
  let stepJ = 1; // j的变化
  function _hasBlock() {
    return !nums[i + stepI] || nums[i + stepI][j + stepJ] !== 0;
  }
  while (1) {
    nums[i][j] = count++;
    if (_hasBlock()) {
      if (stepI === 0) {
        stepI = stepJ;
        stepJ = 0;
      } else {
        stepJ = -stepI;
        stepI = 0;
      }
      if (_hasBlock()) {
        break;
      }
    }
    i += stepI;
    j += stepJ;
  }

  return nums;
}

console.log(vortex(5, 6));
