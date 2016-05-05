$(document).ready(function () {
    $('#fullpage').fullpage({
        responsiveHeight: 550,
        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 5000);
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            $.fn.fullpage.setScrollingSpeed(0);
            $('.fp-section').find('.fp-slidesContainer').hide();
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            $('.fp-section').find('.fp-slidesContainer').fadeIn(700);
            $.fn.fullpage.setScrollingSpeed(700);
        }
    });
});