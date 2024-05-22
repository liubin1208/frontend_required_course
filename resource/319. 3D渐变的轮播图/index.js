const items = document.querySelectorAll('.carousel-item');
let index = 3; // 当前显示的是第几张轮播图

function layout() {
  const xOffsetStep = 100; // 两张轮播图之间的间隔
  const scaleStep = 0.6; // 缩放的递减倍率
  const opacityStep = 0.5; // 透明度的递减倍率
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const dis = Math.abs(i - index);
    const sign = Math.sign(i - index);
    // transform: translateX(-200px) scale(0.6) rotateY(45deg);
    let xOffset = (i - index) * xOffsetStep;
    if (i !== index) {
      xOffset = xOffset + 100 * sign;
    }
    const scale = scaleStep ** dis;
    const rotateY = i === index ? 0 : 45 * -sign;
    item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;
    // opacity: 0.8;
    const opacity = opacityStep ** dis;
    item.style.opacity = opacity;
    // z-index: -1;
    const zIndex = items.length - dis;
    item.style.zIndex = zIndex;
  }
}

layout();

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = 0;
  }
  layout();
});
next.addEventListener('click', () => {
  index++;
  if (index > items.length - 1) {
    index = items.length - 1;
  }
  layout();
});

items.forEach((item, i) => {
  item.addEventListener('click', () => {
    index = i;
    layout();
  });
});
