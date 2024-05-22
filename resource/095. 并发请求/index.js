/**
 * 并发请求
 * @param {string[]} urls 待请求的 url 数组
 * @param {number} maxNum 最大并发数
 */
function concurRequest(urls, maxNum) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
    }
    let index = 0; // 下一次请求对应的url地址下标
    let count = 0; // 请求完成的数量
    const result = [];
    async function request() {
      const i = index;
      const url = urls[index];
      index++;
      try {
        const resp = await fetch(url);
        result[i] = resp;
      } catch (err) {
        result[i] = err;
      } finally {
        count++;
        if (count === urls.length) {
          resolve(result);
        }
        if (index < urls.length) {
          request();
        }
      }
    }
    for (let i = 0; i < Math.min(urls.length, maxNum); i++) {
      request();
    }
  });
}
