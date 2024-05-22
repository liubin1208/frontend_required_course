export class TrafficLight {
  constructor(lights) {
    this._lights = lights;
    this._currentIndex = 0;
    this._time = Date.now(); // 切换时间
  }

  get currentLight() {
    return this._lights[this._currentIndex];
  }

  /**
   * @returns {number} 返回当前时间与切换时间的差值，单位秒
   */
  _disTime() {
    return (Date.now() - this._time) / 1000;
  }

  _update() {
    const total = this._lights.reduce((acc, light) => acc + light.lasts, 0);
    let disTime = this._disTime() % total;
    let round = Math.floor(this._disTime() / total);
    this._time += round * total * 1000;
    while (1) {
      disTime -= this.currentLight.lasts;
      if (disTime < 0) break;
      else {
        this._time += this.currentLight.lasts * 1000;
        this._currentIndex = (this._currentIndex + 1) % this._lights.length;
      }
    }
  }

  getCurrentLight() {
    this._update();
    return {
      color: this.currentLight.color,
      remain: this.currentLight.lasts - this._disTime(),
    };
  }
}
