const imgs = [
  './assets/1.jpeg',
  './assets/2.jpeg',
  './assets/3.jpeg',
  './assets/4.jpeg',
  './assets/5.jpeg',
];
const container = document.querySelector('.scroll-container');
let curIndex = 0;
function getPrevIndex() {
  return curIndex === 0 ? imgs.length - 1 : curIndex - 1;
}
function getNextIndex() {
  return curIndex === imgs.length - 1 ? 0 : curIndex + 1;
}
function createElement(i) {
  const div = document.createElement('div');
  div.className = 'item';
  const img = document.createElement('img');
  img.src = imgs[i];
  div.appendChild(img);
  container.appendChild(div);
  return div;
}
function resetElements() {
  container.innerHTML = '';
  const prevIndex = getPrevIndex();
  const nextIndex = getNextIndex();
  createElement(prevIndex).classList.add('prev');
  createElement(curIndex).classList.add('cur');
  createElement(nextIndex).classList.add('next');
}

resetElements();
window.addEventListener('wheel', (e) => {
  if (!e.deltaY) {
    return;
  }
  if (e.deltaY > 0) {
    container.classList.remove('scroll-up');
    container.classList.add('scroll-down');
  } else {
    container.classList.remove('scroll-down');
    container.classList.add('scroll-up');
  }
});

container.addEventListener('transitionend', () => {
  if (container.classList.contains('scroll-down')) {
    curIndex = getNextIndex();
  } else if (container.classList.contains('scroll-up')) {
    curIndex = getPrevIndex();
  }
  container.classList.remove('scroll-down');
  container.classList.remove('scroll-up');
  resetElements();
});
