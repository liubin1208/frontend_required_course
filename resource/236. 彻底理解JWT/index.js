const crypto = require('crypto');

function sign(msg, key) {
  return crypto.createHmac('sha256', key).update(msg).digest('hex');
}

console.log(sign('abc', '123'));
