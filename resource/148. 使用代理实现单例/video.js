import { singleton } from './singleton.js';

class MyVideo {
  constructor() {}
}

export default singleton(MyVideo);
