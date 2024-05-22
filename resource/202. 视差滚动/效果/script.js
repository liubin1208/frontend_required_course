gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('section').forEach((section, i) => {
  gsap.fromTo(
    section,
    {
      backgroundPosition: i ? `50% ${-window.innerHeight / 2}px` : '50% 0px',
    },
    {
      backgroundPosition: `50% ${window.innerHeight / 2}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: i ? 'top bottom' : 'top top',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
});
