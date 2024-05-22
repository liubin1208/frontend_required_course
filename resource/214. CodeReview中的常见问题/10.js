const TOKEN_KEY = 'token';
const AUTH_KEY = 'authorization';

function responseInterceptor(resp) {
  const token = resp.headers.get(AUTH_KEY);
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
}
// ajax请求拦截器
function requestInterceptor(req) {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    req.headers.set(AUTH_KEY, `Bearer ${token}`);
  }
}
