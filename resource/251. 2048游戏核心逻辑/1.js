Array.prototype.print = function () {
  console.log(this.join('\n'));
};

const matrix = [
  [0, 2, 2, 0],
  [0, 0, 2, 2],
  [2, 4, 4, 2],
  [2, 4, 4, 4],
];

function move(matrix, direction) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function _inRange(i, j) {
    return i >= 0 && i < rows && j >= 0 && j < cols;
  }
  const nexts = {
    up: (i, j) => [i + 1, j],
    down: (i, j) => [i - 1, j],
    left: (i, j) => [i, j + 1],
    right: (i, j) => [i, j - 1],
  };
  // 得到下一个非零的位置 [r, c, value]
  function _nextNonZero(i, j) {
    // 得到下一个位置
    let [nextI, nextJ] = nexts[direction](i, j);
    if (!_inRange(nextI, nextJ)) return null;
    while (_inRange(nextI, nextJ)) {
      const value = matrix[nextI][nextJ];
      if (value !== 0) {
        return [nextI, nextJ, value];
      }
      [nextI, nextJ] = nexts[direction](nextI, nextJ);
    }
    return null;
  }

  // 从i,j出发，依次处理某行或某列所有的数据
  function _cal(i, j) {
    if (!_inRange(i, j)) return;
    const next = _nextNonZero(i, j);
    if (!next) {
      return;
    }
    const [nextI, nextJ, nextValue] = next;
    if (matrix[i][j] === 0) {
      matrix[i][j] = nextValue;
      matrix[nextI][nextJ] = 0;
      _cal(i, j);
    } else if (matrix[i][j] === nextValue) {
      matrix[i][j] *= 2;
      matrix[nextI][nextJ] = 0;
    }
    const [ni, nj] = nexts[direction](i, j);
    _cal(ni, nj);
  }

  if (direction === 'up') {
    for (let j = 0; j < cols; j++) {
      _cal(0, j);
    }
  } else if (direction === 'down') {
    for (let j = 0; j < cols; j++) {
      _cal(rows - 1, j);
    }
  } else if (direction === 'left') {
    for (let i = 0; i < rows; i++) {
      _cal(i, 0);
    }
  } else if (direction === 'right') {
    for (let i = 0; i < rows; i++) {
      _cal(i, cols - 1);
    }
  }
}
matrix.print();
move(matrix, 'down');
console.log('--------------');
matrix.print();
