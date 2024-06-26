// Add mode toggle UI
ColorWheel.extend('modeToggle', function (colorWheel) {
  var modeToggle = colorWheel.container
    .append('select')
    .attr('class', colorWheel.cx('mode-toggle'))
    .on('change', function () {
      colorWheel.currentMode = this.value;
      colorWheel.setHarmony();
    });

  for (var mode in ColorWheel.modes) {
    modeToggle
      .append('option')
      .text(ColorWheel.modes[mode])
      .attr('selected', function () {
        return ColorWheel.modes[mode] == colorWheel.currentMode
          ? 'selected'
          : null;
      });
  }
});

// Add theme UI
ColorWheel.extend('theme', function (colorWheel) {
  var theme = colorWheel.container
    .append('div')
    .attr('class', colorWheel.cx('theme'));

  colorWheel.dispatch.on('bindData.themeBuild', function (data) {
    var swatches = theme
      .selectAll(colorWheel.selector('theme-swatch'))
      .data(data);
    var newSwatches = swatches
      .enter()
      .append('div')
      .attr('class', colorWheel.cx('theme-swatch'));

    // Add color
    newSwatches.append('div').attr('class', colorWheel.cx('theme-color'));

    // Add sliders
    newSwatches
      .append('input')
      .attr('type', 'range')
      .attr('class', colorWheel.cx('theme-slider'))
      .on('input', function (d) {
        d.color.v = parseInt(this.value) / 100;
        colorWheel.dispatch.markersUpdated();
      })
      .on('change', function () {
        colorWheel.dispatch.updateEnd();
      });

    // Add color codes
    newSwatches
      .append('input')
      .attr('type', 'text')
      .attr('class', colorWheel.cx('theme-value'))
      .on('focus', function () {
        // Like jQuery's .one(), attach a listener that only executes once.
        // This way the user can use the cursor normally after the initial selection.
        d3.select(this).on('mouseup', function () {
          d3.event.preventDefault();
          // Detach the listener
          d3.select(this).on('mouseup', null);
        });
        this.select();
      });

    swatches.exit().remove();
  });

  colorWheel.dispatch.on('markersUpdated.theme', function () {
    colorWheel.container
      .selectAll(colorWheel.selector('theme-swatch'))
      .each(function (d, i) {
        switch (colorWheel.currentMode) {
          case ColorWheel.modes.TRIAD:
            this.style.order = this.style.webkitOrder = i % 3;
            break;
          default:
            this.style.order = this.style.webkitOrder =
              ColorWheel.markerDistance(i);
            break;
        }
      });

    colorWheel.container
      .selectAll(colorWheel.selector('theme-color'))
      .each(function (d) {
        var c = tinycolor({ h: d.color.h, s: d.color.s, v: d.color.v });
        this.style.backgroundColor = c.toHexString();
      });

    colorWheel.container
      .selectAll(colorWheel.selector('theme-slider'))
      .each(function (d) {
        var val = parseInt(d.color.v * 100);
        this.value = val;
        d3.select(this).attr('value', val);
      });

    colorWheel.container
      .selectAll(colorWheel.selector('theme-value'))
      .each(function (d) {
        var c = tinycolor({ h: d.color.h, s: d.color.s, v: d.color.v });
        this.value = c.toHexString();
      });
  });
});

ColorWheel.extend('bgGradient', function (colorWheel) {
  var gradient = d3.select(colorWheel.selector('gradient'));
  if (!gradient.size()) {
    gradient = colorWheel.container.append('div').attr({
      id: 'gradient',
      class: colorWheel.cx('gradient'),
    });
  }
  colorWheel.dispatch.on('updateEnd.gradient', function () {
    var gradientStops = colorWheel.getColorsAsHEX();
    gradientStops[0] += ' 10%';
    gradientStops[gradientStops.length - 1] += ' 90%';
    gradient.style(
      'background-image',
      'linear-gradient(to right, ' + gradientStops.join() + ')'
    );
  });
});

var colorWheel = new ColorWheel();
colorWheel.bindData(5);
