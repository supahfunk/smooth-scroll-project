/*--------------------------------------------------
W E B S I T E
Website by Websolute
--------------------------------------------------*/


/*--------------------------------------------------
Transform Vendor
--------------------------------------------------*/
var cssTransform = (function () {
    var testEl = document.createElement('div');
    if (testEl.style.transform == null) {
        var vendors = ['Webkit', 'Moz', 'ms'];
        for (var vendor in vendors) {
            if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
                return vendors[vendor] + 'Transform';
            }
        }
    }
    return 'transform';
})();



/*--------------------------------------------------
Scrollbar Listener
--------------------------------------------------*/
var scrollbar = Scrollbar.init(document.getElementById('myScrollbar'), {
    overscrollEffect: 'bounce'
});
var parallax = document.querySelectorAll('[data-scroll]');

scrollbar.addListener(function (status) {
    // parallax
    parallax.forEach(function (el, i) {
        var delay = el.dataset.scroll;

        if (scrollbar.isVisible(el)) {
            el.classList.add('in-view');
            el.style[cssTransform] = 'translateY(' + el.getBoundingClientRect().top * delay + 'px)';
        } else {
            el.classList.remove('in-view');
        }
    });
});


/*--------------------------------------------------
DOC READY
--------------------------------------------------*/
$(function () {
});


/*--------------------------------------------------
WIN LOAD
--------------------------------------------------*/
$(window).on('load', function () {
});