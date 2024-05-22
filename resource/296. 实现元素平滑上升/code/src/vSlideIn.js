const DISTANCE = 100;
const DURATION = 500;
const map = new WeakMap();
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // 出现在了视口中
      const animation = map.get(entry.target);
      animation && animation.play();
      ob.unobserve(entry.target);
    }
  }
});

function isBelowViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top - window.innerHeight > 0;
}

export default {
  mounted(el) {
    if (!isBelowViewport(el)) {
      return;
    }
    const animation = el.animate(
      [
        {
          transform: `translateY(${DISTANCE}px)`,
          opacity: 0.5,
        },
        {
          transform: `translateY(0)`,
          opacity: 1,
        },
      ],
      {
        duration: DURATION,
        ease: 'ease-out',
        fill: 'forwards',
      }
    );
    animation.pause();
    map.set(el, animation);
    ob.observe(el);
  },
  unmounted(el) {
    ob.unobserve(el);
  },
};
