const loadingDom = document.querySelector('.loading');
const ob = new IntersectionObserver(
  async function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      return;
    }
    if (isLoading) {
      return;
    }
    isLoading = true;
    await more();
    isLoading = false;
  },
  {
    root: null,
    threshold: 0,
  }
);

ob.observe(loadingDom);
