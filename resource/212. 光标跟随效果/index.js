const textContainer = document.querySelector('.text-container');
const textElem = document.querySelector('.text');
const cursor = document.querySelector('.cursor');

async function autoAppend() {
  function delay(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  function transfer(text) {
    let result = text
      .split('\n')
      .map((t) => `<p>${t}</p>`)
      .join('');
    return result;
  }
  const content = `音频和视频
  
  文件的元
  数据可能包含一些
  
  信息，如标题、艺术家、专辑等。然而，文件的创建时间通常不存储在文件元数据中，而是由文件系统处理。`;

  for (let i = 0; i < content.length; i++) {
    let text = content.slice(0, i);
    let result = transfer(text);
    textElem.innerHTML = result;
    updateCursor();
    await delay(300);
  }
}

autoAppend();

function getLastTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node;
  }
  let children = node.childNodes;
  for (let i = children.length - 1; i >= 0; i--) {
    let result = getLastTextNode(children[i]);
    if (result) {
      return result;
    }
  }
  return null;
}

function updateCursor() {
  // 找到最后一个文本节点
  const lastTextNode = getLastTextNode(textElem);
  // 加文字
  const tempText = document.createTextNode('袁');
  if (lastTextNode) {
    lastTextNode.parentNode.appendChild(tempText);
  } else {
    textElem.appendChild(tempText);
  }
  // 根据文字位置设置光标位置
  const range = document.createRange();
  range.setStart(tempText, 0);
  range.setEnd(tempText, 0);
  const rect = range.getBoundingClientRect();
  const textRect = textContainer.getBoundingClientRect();
  const x = rect.left - textRect.left;
  const y = rect.top - textRect.top;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  // 删文字
  tempText.remove();
}
