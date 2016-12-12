function redraw() {
  $('body').hide().show(0);
}

window.addEventListener('orientationchange', redraw);