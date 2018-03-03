// Parallax Js
function initParallax() {
    $('#home').parallax("50%", 50);
    $('#service').parallax("50%", 40);
    $('#about').parallax("50%", 20);
    $('#work').parallax("50%", 30);
    $('#contact').parallax("50%", 10);
}


// PRE LOADER
$(window).on('load', function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(document).ready(function () {

    // navigation Section
    $('.navbar-collapse a').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    // MagnificPopup
    var magnifPopup = function () {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };


    // Call the functions 
    magnifPopup();

    initParallax();

    // smoothscroll js
    $(function () {
        $('#home a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


    // WOW Animation js
    new WOW({
        mobile: true
    }).init();

});