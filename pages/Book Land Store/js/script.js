new SmoothScroll('a[href*="#"]', {
    easing: 'linear'
});

$(window).on('scroll load', function () {
    if ($('#about .container').offset().top - $(window).scrollTop() < $(window).height() - 200) {
        $('#about .container').addClass('slideInRight').removeClass('invisible');
    }
    else {
        $('#about .container').addClass('invisible').removeClass('slideInRight');
    }

    $('#authors .card').each(function () {
        if ($(this).offset().top - $(window).scrollTop() < $(window).height() - 200) {
            $(this).addClass('zoomIn').removeClass('invisible')
        }
        else {
            ($(this).addClass('invisible').removeClass('zoomIn'));
        }
    })

    if ($('#contact .container').offset().top - $(window).scrollTop() < $(window).height() -200) {
        $('#contact .col-lg-9').addClass('slideInRight').removeClass('invisible')
        $('#contact .col-lg-3').addClass('slideInUp').removeClass('invisible')
    }
    else {
        ($('#contact .col-lg-9').addClass('invisible').removeClass('slideInRight'))
        ($('#contact .col-lg-3').addClass('invisible').removeClass('slideInUp'))
    }
});