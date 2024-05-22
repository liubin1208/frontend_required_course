const vdo = document.querySelector('video');

const ob = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      vdo.play();
    } else {
      vdo.pause();
    }
  },
  {
    threshold: 0.8,
  }
);

ob.observe(vdo);
