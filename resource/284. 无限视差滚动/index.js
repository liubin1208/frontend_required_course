const imgs = [
  './assets/1.jpeg',
  './assets/2.jpeg',
  './assets/3.jpeg',
  './assets/4.jpeg',
  './assets/5.jpeg',
];
const container = document.querySelector('.scroll-container');
let curIndex = 0;

function prevIndex() {
  return curIndex === 0 ? imgs.length - 1 : curIndex - 1;
}

function nextIndex() {
  return curIndex === imgs.length - 1 ? 0 : curIndex + 1;
}

function createImg(index) {
  const img = document.createElement('img');
  img.src = imgs[index];
  const div = document.createElement('div');
  div.className = 'item';
  div.appendChild(img);
  container.appendChild(div);
  return div;
}

function resetElements() {
  container.innerHTML = '';
  const prev = prevIndex();
  const next = nextIndex();
  createImg(prev).classList.add('prev');
  createImg(curIndex).classList.add('cur');
  createImg(next).classList.add('next');
}

resetElements();

window.addEventListener('wheel', (e) => {
  if (!e.deltaY) return;
  if (e.deltaY > 0) {
    container.className = 'scroll-container scroll-down';
  } else {
    container.className = 'scroll-container scroll-up';
  }
});

container.addEventListener('transitionend', () => {
  if (container.classList.contains('scroll-down')) {
    curIndex = nextIndex();
  } else if (container.classList.contains('scroll-up')) {
    curIndex = prevIndex();
  }
  container.className = 'scroll-container';
  resetElements();
});
