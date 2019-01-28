/**
 * Created by hurely on 2017/1/16.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth <= 1440) {
                docEl.style.fontSize = 100 * (1440 / 1665) + 'px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 1665) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);