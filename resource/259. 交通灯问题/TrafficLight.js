export class TrafficLight {
  constructor(lights) {
    this._lights = lights;
    this._currentIndex = 0;
    this._time = Date.now();
  }

  _update() {
    let disTime = this._disTime(); // 经过了多久（秒）
    const total = this._lights.reduce((acc, cur) => acc + cur.lasts, 0);
    this._time += total * Math.floor(disTime / total) * 1000;
    disTime = disTime % total;
    while (1) {
      disTime -= this.currentLight.lasts;
      if (disTime < 0) break;
      else {
        this._time += this.currentLight.lasts * 1000;
        this._currentIndex = (this._currentIndex + 1) % this._lights.length;
      }
    }
  }

  get currentLight() {
    return this._lights[this._currentIndex];
  }

  _disTime() {
    return (Date.now() - this._time) / 1000;
  }

  getCurrentLight() {
    this._update();
    return {
      color: this.currentLight.color,
      remain: this.currentLight.lasts - this._disTime(),
    };
  }
}
