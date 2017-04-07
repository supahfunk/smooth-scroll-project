/*--------------------------------------------------
W E B S I T E
Website by Websolute
--------------------------------------------------*/


/*--------------------------------------------------
DOC READY
--------------------------------------------------*/
var parallax = document.querySelector('#parallax');
var parallax2 = document.querySelector('#parallax2 img');
var height = window.innerHeight;

var scrollbar = Scrollbar.init(document.getElementById('myScrollbar'), {
    overscrollEffect: 'bounce'
});

var i = 0;


scrollbar.addListener(function (status) {
    console.log(scrollbar.isVisible(parallax));
    if (scrollbar.isVisible(parallax)) {
        i = parallax.getBoundingClientRect().top - height / 2;
        y = parallax2.getBoundingClientRect().top - height / 4;
        parallax.style.webkitTransform = 'translateY(' + i * 0.2 + 'px)';
        //parallax.style.webkitTransform = 'translate(' + i * 0.2 + 'px, ' + i * 0.2 + 'px)';
        parallax2.style.webkitTransform = 'translateY(' + y * 0.1 + 'px)';
    }

    // , status.offset.y, parallax.getBoundingClientRect()
});


$(function () {
});


/*--------------------------------------------------
WIN LOAD
--------------------------------------------------*/
$(window).on('load', function () {
    scrollbar.update();
});