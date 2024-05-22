const card = document.querySelector('.card');

function barHeight() {
  return window.outerHeight - window.innerHeight;
}

function clientToScreen(x, y) {
  const screenX = x + window.screenX;
  const screenY = y + window.screenY + barHeight();
  return [screenX, screenY];
}

function screenToClient(x, y) {
  const clientX = x - window.screenX;
  const clientY = y - window.screenY - barHeight();
  return [clientX, clientY];
}
const channel = new BroadcastChannel('card');
channel.onmessage = (e) => {
  const [x, y] = screenToClient(...e.data);
  card.style.left = x + 'px';
  card.style.top = y + 'px';
};
card.onmousedown = (e) => {
  let x = e.pageX - card.offsetLeft;
  let y = e.pageY - card.offsetTop;
  window.onmousemove = (e) => {
    const cx = e.pageX - x;
    const cy = e.pageY - y;
    card.style.left = cx + 'px';
    card.style.top = cy + 'px';
    const points = clientToScreen(cx, cy);
    channel.postMessage(points);
  };
  window.onmouseup = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  };
};

function init() {
  const url = new URL(location.href);
  const type = url.searchParams.get('type') || 'Q';
  card.src = `./${type}.png`;
}

init();
