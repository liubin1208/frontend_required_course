const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d', {
  willReadFrequently: true,
});
const inpColor = document.querySelector('input[type="color"]');
function init() {
  const img = new Image();
  img.onload = function () {
    cvs.width = img.width;
    cvs.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
  img.src = './redhat.png';
}

init();

cvs.addEventListener('click', function (e) {
  const clickX = e.offsetX,
    clickY = e.offsetY;
  const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
  const colors = imgData.data;
  const i = point2Index(clickX, clickY);
  const clickColor = colors.slice(i, i + 3);
  changeColor(clickX, clickY, colors, clickColor);
  ctx.putImageData(imgData, 0, 0);
});

function hex2rgba(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b, 255];
}

function diff(color1, color2) {
  return (
    Math.abs(color1[0] - color2[0]) +
    Math.abs(color1[1] - color2[1]) +
    Math.abs(color1[2] - color2[2])
  );
}

function changeColor(x, y, colors, clickColor) {
  if (x < 0 || x >= cvs.width || y < 0 || y >= cvs.height) {
    return;
  }
  const i = point2Index(x, y);
  const curColor = colors.slice(i, i + 3);
  if (diff(curColor, clickColor) > 50) {
    return;
  }
  const targetColor = hex2rgba(inpColor.value); // #ff0000
  if (diff(curColor, targetColor) === 0) {
    return;
  }
  colors.set(targetColor, i);
  changeColor(x - 1, y, colors, clickColor);
  changeColor(x + 1, y, colors, clickColor);
  changeColor(x, y - 1, colors, clickColor);
  changeColor(x, y + 1, colors, clickColor);
}

function point2Index(x, y) {
  return (y * cvs.width + x) * 4;
}
