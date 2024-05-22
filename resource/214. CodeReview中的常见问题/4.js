const STATE_TYPE = {
  NORMAL: 1,
  VIP: 2,
  SUPER_VIP: 3,
};

// component1.js
if (state === STATE_TYPE.NORMAL || state === STATE_TYPE.VIP) {
  // ...
} else if (state === 3) {
  // ...
}
// component2.js
if (state === 1 || state === 2) {
  // ...
}
