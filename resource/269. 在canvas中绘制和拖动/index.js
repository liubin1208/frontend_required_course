const colorPicker = document.querySelector('input');
const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

function init() {
  const w = 500,
    h = 300;
  cvs.width = w * devicePixelRatio;
  cvs.height = h * devicePixelRatio;
  cvs.style.width = w + 'px';
  cvs.style.height = h + 'px';
}

init();

const shapes = [];

class Rectangle {
  constructor(startX, startY, color) {
    this.startX = startX;
    this.startY = startY;
    this.endX = startX;
    this.endY = startY;
    this.color = color;
  }

  get minX() {
    return Math.min(this.startX, this.endX);
  }
  get minY() {
    return Math.min(this.startY, this.endY);
  }
  get maxX() {
    return Math.max(this.startX, this.endX);
  }
  get maxY() {
    return Math.max(this.startY, this.endY);
  }

  isInside(x, y) {
    return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.minX * devicePixelRatio, this.minY * devicePixelRatio);
    ctx.lineTo(this.maxX * devicePixelRatio, this.minY * devicePixelRatio);
    ctx.lineTo(this.maxX * devicePixelRatio, this.maxY * devicePixelRatio);
    ctx.lineTo(this.minX * devicePixelRatio, this.maxY * devicePixelRatio);
    ctx.lineTo(this.minX * devicePixelRatio, this.minY * devicePixelRatio);
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.strokeStyle = '#fff';
    ctx.lineCap = 'square';
    ctx.lineWidth = 3 * devicePixelRatio;
    ctx.stroke();
  }
}

function getShape(x, y) {
  for (let i = shapes.length - 1; i >= 0; i--) {
    if (shapes[i].isInside(x, y)) {
      return shapes[i];
    }
  }
  return null;
}

cvs.onmousedown = (e) => {
  const x = e.offsetX,
    y = e.offsetY;
  const shape = getShape(x, y);
  const cvsRect = cvs.getBoundingClientRect();
  if (shape) {
    const { startX, startY, endX, endY } = shape;
    window.onmousemove = (e) => {
      const disX = e.clientX - cvsRect.left - x;
      const disY = e.clientY - cvsRect.top - y;
      shape.startX = startX + disX;
      shape.startY = startY + disY;
      shape.endX = endX + disX;
      shape.endY = endY + disY;
    };
  } else {
    const rec = new Rectangle(x, y, colorPicker.value);

    shapes.push(rec);
    window.onmousemove = (e) => {
      const x = e.clientX - cvsRect.left;
      const y = e.clientY - cvsRect.top;
      rec.endX = x;
      rec.endY = y;
    };
  }

  window.onmouseup = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  };
};

function draw() {
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  for (const shape of shapes) {
    shape.draw();
  }
}

draw();
