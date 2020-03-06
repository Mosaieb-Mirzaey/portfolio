new SmoothScroll ('a[href*="#"]', {
    easing: 'linear',
    speed: 1000,
});

new WOW().init();

$ ('#toggler').on('click', function () {
    var nav= $('#nav');
    var toggler= $('#toggler i');

    if (nav.css('right') === '0px'){
        nav.css('right' , '-240px');
        toggler.removeClass('fa-times') .addClass('fa-bars');
    }
    else {
        nav.css('right' , '0');
    toggler.removeClass('fa-bars').addClass('fa-times');
    }
});

$(Window).on('scroll load' , function () {
    if ($(Window).scrollTop() > 120) {
        $('#navbar').css('background-color', 'rgba(20 , 40 , 60 , 0.7)').css('padding', '14px 40px');
    }
    else {
        $('#navbar').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px 40px');
    }

    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity' , '1').css('visibility' , 'visible');
    } else {
        $('#go-to-top').css('opacity' , '0').css('visibility' , 'hidden');
    }
});


$('.counter').counterUp({
    delay: 10,
    time: 1500
});


var waypoints = $('#skills-content').waypoint(function(direction) {
    $('.progress .progress-bar').each(function () {
        var width= $(this).data("wid");
        $(this).css('width' , width + '%');
        var height= $(this).data('hi');
        $(this).css('height' , height + '%');
        var striped= $('.progress-bar');
        striped.addClass('progress-bar-striped progress-bar-animated');
    })
},
    {
    offset: '80%'
});


lightbox.option ({
'resizdeuration': 300,
'albumLabel':'تصویر 1% از 2%',
});


var portfolio = $('#portfolio-container').isotope({
    originLeft: false
});


$('#portfolio-filter li').on ('click' , function() {

    $('#portfolio-filter li').removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolio.isotope({
        filter: $(this).data('filter')
    });
});

portfolio.on('arrangeComplete' , function(){

    if($(window).scrollTop() / 2 == 0)
        $(window).scrollTop($(window).scrollTop() - 1);

        else{
            $(window).scrollTop($(window).scrollTop() + 1);
        }
});

$(document).ready(function() {
 
    $("#clients .owl-carousel").owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items:6
            }
        },
    });
  });

