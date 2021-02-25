$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
    $('.skill-percent').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per+'%');
        $({animeatedValue: 0}).animate({animeatedValue: per}, {
            duration: 1000,
            step: function() {
                $this.attr('per', Math.floor(this.animeatedValue) + '%');
            },
            complete: function() {
                $this.attr('per', Math.floor(this.animeatedValue) + '%');
            }
        });
    });
});