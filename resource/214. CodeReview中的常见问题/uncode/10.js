function responseInterceptor(resp) {
  const token = resp.headers.get('authorization');
  if (token) {
    localStorage.setItem('token', token);
  }
}
// ajax请求拦截器
function requestInterceptor(req) {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.set('authorization', `Bearer ${token}`);
  }
}
