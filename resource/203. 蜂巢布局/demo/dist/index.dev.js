"use strict";

var imgIndex = 1;
var lines = document.querySelectorAll('.line');

var _loop = function _loop(i) {
  var line = lines[i];
  var items = line.querySelectorAll('.item');

  var _loop2 = function _loop2(j) {
    var item = items[j];
    var img = item.querySelector('img');
    img.src = "https://picsum.photos/300?random=".concat(imgIndex++);

    item.onmouseenter = function () {
      img.style.opacity = 1;
      item.style.transformOrigin = 'center center';
      item.style.transform = 'scale(1.1)';
      scaleAround(i, j, 0.9);
    };

    item.onmouseleave = function () {
      img.style.opacity = 0.5;
      item.style.transformOrigin = 'center center';
      item.style.transform = 'scale(1)';
      scaleAround(i, j, 1);
    };
  };

  for (var j = 0; j < items.length; j++) {
    _loop2(j);
  }
};

for (var i = 0; i < lines.length; i++) {
  _loop(i);
}

function scaleAround(i, j, scaled) {}