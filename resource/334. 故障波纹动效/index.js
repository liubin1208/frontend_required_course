const tb = document.querySelector('feTurbulence');

const tl = new gsap.timeline({
  paused: true,
  onUpdate() {
    tb.setAttribute('baseFrequency', `0 ${val.value}`);
  },
});
const val = {
  value: 0,
};
tl.to(val, {
  value: 0.4,
  duration: 0.2,
});
tl.to(val, {
  value: 0.00001,
  duration: 0.2,
});
tl.to(val, {
  value: 0.4,
  duration: 0.2,
});
tl.to(val, {
  value: 0,
  duration: 0.2,
});
const img = document.querySelector('img');
img.onload = () => {
  tl.play();
};
if (img.complete) {
  tl.play();
}
