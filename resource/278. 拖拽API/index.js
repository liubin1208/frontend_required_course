const container = document.querySelector('.container');
let source;
container.ondragstart = (e) => {
  e.dataTransfer.effectAllowed = e.target.dataset.effect;
  source = e.target;
};

container.ondragover = (e) => {
  e.preventDefault();
  // console.log('over', e.target);
};

function getDropNode(node) {
  while (node) {
    if (node.dataset && node.dataset.drop) {
      return node;
    }
    node = node.parentNode;
  }
}

function clearStyles() {
  document.querySelectorAll('.drop-over').forEach((node) => {
    node.classList.remove('drop-over');
  });
}

container.ondragenter = (e) => {
  clearStyles();
  const dropNode = getDropNode(e.target);
  if (!dropNode) {
    return;
  }
  // console.log('enter', e.target);
  if (source.dataset.effect === dropNode.dataset.drop) {
    dropNode.classList.add('drop-over');
  }
};

container.ondrop = (e) => {
  const dropNode = getDropNode(e.target);
  if (!dropNode) {
    return;
  }
  if (source.dataset.effect !== dropNode.dataset.drop) {
    return;
  }
  clearStyles();
  if (dropNode.dataset.drop === 'copy') {
    // copy
    const cloned = source.cloneNode(true);
    cloned.dataset.effect = 'move';
    dropNode.innerHTML = '';
    dropNode.appendChild(cloned);
  } else {
    source.remove();
  }
};
