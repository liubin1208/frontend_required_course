// 给fetch添加超时功能
function createRequestWithTimeout(timeout = 5000) {
  return function (url, options) {
    return new Promise((resolve, reject) => {
      const controller = new AbortController();
      options = options || {};
      if (options.signal) {
        const signal = options.signal;
        signal.addEventListener('abort', () => {
          controller.abort();
        });
      }
      options.signal = controller.signal;
      fetch(url, options).then(resolve, reject);
      setTimeout(() => {
        reject(new Error('请求超时'));
        // 中止请求
        controller.abort();
      }, timeout);
    });
  };
}
