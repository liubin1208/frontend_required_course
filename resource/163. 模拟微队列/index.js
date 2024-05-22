function runMicroTask(func) {
  if (typeof Promise !== 'undefined') {
    Promise.resolve().then(func);
    return;
  }
  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(func);
    var textNode = document.createTextNode('1');
    observer.observe(textNode, { characterData: true });
    textNode.data = '2';
    return;
  }
  if (process && process.nextTick) {
    process.nextTick(func);
    return;
  }
  setTimeout(func);
}
