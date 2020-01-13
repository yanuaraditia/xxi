function scrollFunction() {
    var hei = $('.header').height();
    if (document.body.scrollTop > hei || document.documentElement.scrollTop > hei) {
        $('.header').addClass('is-sticky');
    }
    else {
        $('.header').removeClass('is-sticky');
    }
};
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
window.Prism = window.Prism || {};
window.Prism.manual = true;
$('.js-tilt').tilt({
    scale: 1.05,
    glare: true,
    maxGlare: .2
})