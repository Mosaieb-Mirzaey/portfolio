new WOW() .init();


    $(".owl-carousel").owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
        dots:false,
        responsive: {
            0:{
                items:1
            },
            576: {
                items: 2
            },
            768: {
                items:3
            },
            1200: {
                items:4
            },
        }
    });

new SmoothScroll('a[href*="#"]', {
    easing: 'linear'
});

// $(window).on('scroll load', function () {
//     if ($('#kurd').offset().top - $(window).scrollTop() < $(window).height() - 200) {
//         $('#kurd').addClass('wow').removeClass('invisible');
//         $('#kurd').addClass('fadeInUp');
//     }
//
//     else {
//         $('#kurd').addClass('invisible').removeClass('fadeInUp');
//         $('#kurd').removeClass('wow');
//     }
//
// });

