new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000,
});

new WOW().init();

$('#toggler').on('click touch', function () {
    var nav = $('#nav');
    var toggler = $('#toggler i');

    if (nav.css('left') === '0px') {
        nav.css('left', '-240px');
        toggler.removeClass('fa-times').addClass('fa-bars');
        $('#toggler').removeAttr('style')
    } else {
        nav.css('left', '0');
        toggler.removeClass('fa-bars').addClass('fa-times');
        $('#toggler').css('padding' , '0 0 90% 40% ')
    }
});


const sM = window.matchMedia("(min-width: 768px)");

$(window).on('scroll load', function () {

    if (sM.matches) {
// window width is at least 500px

        if ($(window).scrollTop() > 90) {
            $('#nav').css('background-color', 'rgba(20 , 40 , 60 , 0.9)').css('background', 'linear-gradient(to right, rgba(36, 47, 60, 0.85), rgba(89, 74, 72, 0.9))')
                .css('padding', '3px 40px');

        } else {
            $('#nav').css('background', 'linear-gradient(to right, rgba(36, 47, 60, 0.6), rgba(89, 74, 72, 0.6))').css('padding', '11px 40px');

        }
    } else {
// window width is less than 500px

        if ($(window).scrollTop() > 90) {
            $('#nav').css('background-color', 'rgba(20 , 40 , 60 , 0.8)').css('background', 'linear-gradient(to right, rgba(36, 47, 60, 0.85), rgba(89, 74, 72, 0.9))').css('padding', '14px 40px');
        }
    }


});


function testAnim(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}


$.fn.ActingFy = function () {
    function execAction() {
        $(".carousel-title").addClass('wow').addClass('flipInY');
        $(".carousel-text").addClass('wow').addClass('flipInX');
    }


    $(window).on("load", function () {
        if ($(".carousel-item").hasClass("carousel-item active")) {
            $(".carousel-item").siblings().each(function () {
                $(".carousel-item").children(".carousel-overlay").children(".carousel-content").children("h2").addClass('animated');
                $(".carousel-item").children(".carousel-overlay").children(".carousel-content").children("p").addClass('animated');
            });
            execAction()
        }
    });
};

$("#carousel-top").carousel({interval: 9000});

$(".carousel-title").ActingFy();
$(".carousel-text").ActingFy();





$.fn.actingCard = function Card() {

    let cardImage = $(".card__image");
    let cardContent = $(".card__content");


    let offset = 500;
    let element = this;

    function exeCard() {
        cardImage.css("animation", "ImageFadeIn .5s .3s forwards");
        cardContent.css("background-color", "#ce408482");
        cardContent.css("animation", "ContentFadeIn .8s 1.6s forwards");
    }

    function calcLengthOfTop() {
        let scrollTop = $(window).scrollTop();
        let elementOffset = element.offset().top;
        return (elementOffset - scrollTop);
    }

    $(window).on("scroll load", function () {
        if (calcLengthOfTop() < offset)
            exeCard();
    });


};

$(".card__image").actingCard();






$(document).ready(function () {
    $('#go-to-top').css('opacity', '0').css('visibility', 'hidden');
    $("#nav a").click(function () {
        $("#nav a").removeAttr('style');
        $(this).css('color', 'red');
    });

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 300) {
            $('#go-to-top').css('opacity', '1').css('visibility', 'visible');
        } else {
            $('#go-to-top').css('opacity', '0').css('visibility', 'hidden');
        }
    });
});









$.fn.svgEffectExperience = function EffectExperience () {
    let svgExper = $("#svg-experience").children("svg").children('path');
    let offset = 500;
    let element = this;

    function calcLengthOfTop() {
        let scrollTop = $(window).scrollTop();
        let elementOffset = element.offset().top;
        return (elementOffset - scrollTop);
    }

    $(window).on("load scroll", function () {
        if (calcLengthOfTop() < offset){
            svgExper.css('animation' , 'svgEffectExperience 3.5s linear forwards');
        }
    });
};

$("#svg-experience").svgEffectExperience();


$.fn.svgEffectExperience = function EffectExperience () {
    let svgExper = $("#svg-SkillsClasses").children("svg").children('path');
    let offset = 500;
    let element = this;

    function calcLengthOfTop() {
        let scrollTop = $(window).scrollTop();
        let elementOffset = element.offset().top;
        return (elementOffset - scrollTop);
    }

    $(window).on("load scroll", function () {
        if (calcLengthOfTop() < offset){
            svgExper.css('animation' , 'svgEffectExperience 3.5s linear forwards');
        }
    });
};

$("#svg-SkillsClasses").svgEffectExperience();
