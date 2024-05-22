function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0');
}

function randomString(len = 6) {
  if (len <= 11) {
    return Math.random()
      .toString(36)
      .slice(2, 2 + len)
      .padEnd(len, '0');
  } else {
    return randomString(11) + randomString(len - 11);
  }
}

console.log(randomString(134));
