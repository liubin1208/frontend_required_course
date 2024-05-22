const container = document.querySelector('.container');
const rect = container.getBoundingClientRect();
const theta = Math.atan2(rect.height, rect.width);

container.onmouseenter = (e) => {
  const x = e.offsetX - rect.width / 2;
  const y = rect.height / 2 - e.offsetY;
  const angle = Math.atan2(y, x);
  if (angle < theta && angle >= -theta) {
    container.classList.add('right');
  } else if (angle >= theta && angle < Math.PI - theta) {
    container.classList.add('top');
  } else if (angle >= Math.PI - theta || angle < -Math.PI + theta) {
    container.classList.add('left');
  } else {
    container.classList.add('bottom');
  }
};

container.onmouseleave = () => {
  container.className = 'container';
};
