for (初始代码; 条件代码; 循环代码) {
  // 循环体
}

function m() {
  初始代码;
  function _m() {
    if (!条件代码) {
      return;
    }
    // 循环体
    循环代码;
    _m();
  }
  _m();
}
