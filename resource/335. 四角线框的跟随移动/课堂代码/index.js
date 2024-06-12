const imgs = document.querySelectorAll('.container img');
const pointer = document.querySelector('.pointer');

for (const img of imgs) {
  img.onmouseenter = () => {
    pointer.style.setProperty('--s', `${img.offsetWidth}px`);
    pointer.style.setProperty('--x', `${img.offsetLeft}px`);
    pointer.style.setProperty('--y', `${img.offsetTop}px`);
  };
}
