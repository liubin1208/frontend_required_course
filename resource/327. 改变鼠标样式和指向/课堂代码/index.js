const pointer = document.querySelector('.pointer');
let rad = 0;
window.onmousemove = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const mx = e.movementX;
  const my = e.movementY;
  if (Math.abs(mx) + Math.abs(my) < 3) return;
  rad = Math.atan2(mx, -my);
  pointer.style.transform = `translate(${x}px, ${y}px) rotate(${rad}rad)`;
};
