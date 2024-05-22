const cvs = document.querySelector('canvas');
const inpColor = document.querySelector('input[type="color"]');
const ctx = cvs.getContext('2d', {
  willReadFrequently: true,
});

function init() {
  const img = new Image();
  img.onload = () => {
    cvs.width = img.width;
    cvs.height = img.height;
    cvs.style.width = `${img.width}px`;
    cvs.style.height = `${img.height}px`;
    ctx.drawImage(img, 0, 0);
  };
  img.src = '../redhat.png';
}
init();

cvs.addEventListener('click', (e) => {
  const x = e.offsetX,
    y = e.offsetY;
  changeColor(x, y);
});

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
    255,
  ];
}

function changeColor(x, y) {
  const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
  const centerColor = getColor(x, y, imgData);
  const targetColor = hexToRgb(inpColor.value);
  console.log(targetColor);

  function _changeColor(x, y) {
    const stack = [[x, y]];
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      const i = point2Index(x, y);
      const color = getColor(x, y, imgData);
      if (x < 0 || x >= cvs.width || y < 0 || y >= cvs.height) {
        continue;
      }
      if (diff(color, targetColor) === 0) {
        continue;
      }
      if (diff(color, centerColor) > 50) {
        continue;
      }
      imgData.data.set(targetColor, i);
      stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
    }
  }

  _changeColor(x, y);

  ctx.putImageData(imgData, 0, 0);
}

function point2Index(x, y) {
  return (y * cvs.width + x) * 4;
}

function getColor(x, y, imgData) {
  const i = point2Index(x, y);
  return [
    imgData.data[i],
    imgData.data[i + 1],
    imgData.data[i + 2],
    imgData.data[i + 3],
  ];
}

function diff(color1, color2) {
  return (
    Math.abs(color1[0] - color2[0]) +
    Math.abs(color1[1] - color2[1]) +
    Math.abs(color1[2] - color2[2]) +
    Math.abs(color1[3] - color2[3])
  );
}
