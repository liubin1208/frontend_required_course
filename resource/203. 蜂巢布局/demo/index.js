let imgIndex = 1;

const lines = document.querySelectorAll('.line');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const items = line.querySelectorAll('.item');
  for (let j = 0; j < items.length; j++) {
    const item = items[j];
    const img = item.querySelector('img');
    img.src = `https://picsum.photos/300?random=${imgIndex++}`;
    item.onmouseenter = function () {
      img.style.opacity = 1;
      item.style.transform = 'scale(1.3)';
      scaleAround(i, j, 0.7);
    };
    item.onmouseleave = function () {
      img.style.opacity = 0.5;
      item.style.transform = 'scale(1)';
      scaleAround(i, j, 1);
    };
  }
}

const container = document.querySelector('.container');

function scaleAround(i, j, scaled) {
  let items;
  if (i % 2 === 0) {
    items = [
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j],
      [i + 1, j + 1],
    ];
  } else {
    items = [
      [i - 1, j],
      [i - 1, j - 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j],
      [i + 1, j - 1],
    ];
  }
  items = items
    .map(([i, j]) => container.children[i]?.children[j])
    .filter(Boolean);
  for (const item of items) {
    item.style.transform = `scale(${scaled})`;
  }
}
