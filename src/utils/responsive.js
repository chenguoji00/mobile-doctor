(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
          var ww = window.innerWidth
          if (ww > window.screen.width) {
            window.requestAnimationFrame(resize)
          } else {
            if (ww > 750) {
              ww = 750
            }
            document.documentElement.style.fontSize = ww * 100 / 750 + 'px'
          }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    // doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);