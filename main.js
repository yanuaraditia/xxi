$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    scrollFunction();
});
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    var hei = $('.front-banner').height();
    if (document.body.scrollTop > hei || document.documentElement.scrollTop > hei) {
        $('.header.no-shadow').removeClass('no-shadow');
    }
    else {
        $('#header').addClass('no-shadow');
    }
}