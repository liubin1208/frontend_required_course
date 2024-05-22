class Curve {
  /**
   *
   * @param {(x:number)=>number} curveFunc
   * @param {number[]} xRange [1, ???]
   * @param {number[]} yRange [-1, 1]
   */
  constructor(curveFunc, xRange, yRange) {
    this.curveFunc = curveFunc;
    this.xRange = xRange;
    this.yRange = yRange;
  }

  /**
   * @param {number} x
   * @return {number}
   */
  getY(x) {
    let y = this.curveFunc(x);
    if (x < this.xRange[0]) {
      y = this.curveFunc(this.xRange[0]);
    } else if (x > this.xRange[1]) {
      y = this.curveFunc(this.xRange[1]);
    }
    if (y < this.yRange[0]) {
      y = this.yRange[0];
    }
    if (y > this.yRange[1]) {
      y = this.yRange[1];
    }
    return y;
  }
}

function layout(curve, doms, width, height) {
  const [minX, maxX] = curve.xRange;
  const [minY, maxY] = curve.yRange;
  const xStep = (maxX - minX) / (doms.length - 1);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const xScale = width / (maxX - minX);
  const yScale = height / (maxY - minY);
  for (let i = 0; i < doms.length; i++) {
    const dom = doms[i];
    const x = minX + i * xStep;
    const y = curve.getY(x);
    const dx = (x - cx) * xScale;
    const dy = (y - cy) * yScale;
    dom.style.setProperty('--dx', dx);
    dom.style.setProperty('--dy', dy);
  }
}

const container = document.querySelector('.container');
const doms = document.querySelectorAll('.container img');
const btnContainer = document.querySelector('.btns');
const width = container.clientWidth;
const height = container.clientHeight;

const curves = {
  wave() {
    const wave = new Curve((x) => Math.sin(x), [0, 3 * Math.PI], [-1, 1]);
    layout(wave, doms, width - 100, height / 3);
  },
  line() {
    const line = new Curve(() => 0, [0, 1], [-1, 1]);
    layout(line, doms, width - 100, height);
  },
  crossLine() {
    const line1 = new Curve((x) => x, [-1, 1], [-1, 1]);
    const line2 = new Curve((x) => -x, [-1, 1], [-1, 1]);
    const midIndex = Math.floor(doms.length / 2);
    const doms1 = Array.from(doms).slice(0, midIndex);
    const doms2 = Array.from(doms).slice(midIndex);
    layout(line1, doms1, width - 100, height - 100);
    layout(line2, doms2, width - 100, height - 100);
  },
  crossWave() {
    const curve1 = new Curve((x) => Math.sin(x), [-Math.PI, Math.PI], [-1, 1]);
    const curve2 = new Curve((x) => Math.sin(x), [0, 2 * Math.PI], [-1, 1]);
    const midIndex = Math.floor(doms.length / 2);
    const doms1 = Array.from(doms).slice(0, midIndex);
    const doms2 = Array.from(doms).slice(midIndex);
    layout(curve1, doms1, width - 100, height / 2);
    layout(curve2, doms2, width - 100, height / 2);
  },
};

btnContainer.onclick = (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const curveName = e.target.dataset.layout;
  curves[curveName]();
};
