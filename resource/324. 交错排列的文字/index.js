const overlap = document.querySelector('.overlap');
const txt = overlap.textContent;
overlap.innerHTML = txt
  .split('')
  .map((c, i) => `<span style="z-index: ${txt.length - i}">${c}</span>`)
  .join('');
