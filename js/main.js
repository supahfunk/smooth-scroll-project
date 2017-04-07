/*--------------------------------------------------
W E B S I T E
Website by Websolute
--------------------------------------------------*/


/*--------------------------------------------------
Transform Vendor
--------------------------------------------------*/
var transformProp = (function () {
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
var parallax = document.querySelector('#parallax');
var parallax2 = document.querySelector('#parallax2 img');
var height = window.innerHeight;

scrollbar.addListener(function (status) {
    console.log(scrollbar.isVisible(parallax), status.offset.y);

    // parallax in visible
    if (scrollbar.isVisible(parallax)) {
        i = parallax.getBoundingClientRect().top - height / 4;
        y = parallax2.getBoundingClientRect().top - height / 4;
        parallax.style[transformProp] = 'translateY(' + i * 0.2 + 'px)';
        parallax2.style[transformProp] = 'translateY(' + y * 0.1 + 'px)';
    }

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