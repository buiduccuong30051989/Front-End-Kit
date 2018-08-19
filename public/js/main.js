"use strict";
jQuery(document).ready(function($) {
    jQuery('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href*=collapse]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - 60 + 'px'
                }, 1000);
            }
        }
    });
    jQuery('.nav_toggle').on('click', function() {
        jQuery('.nav_toggle, .navigation').toggleClass('open');
    })
    jQuery('.navigation a').on('click', function() {
        jQuery('.nav_toggle.open, .navigation.open').removeClass('open');
    })
    jQuery('.slider_news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        asNavFor: '.slider_mag',
        pauseOnHover: true
    });
    $('.slider_mag').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        centerMode: false,
        asNavFor: '.slider_news',
        focusOnSelect: true,
        pauseOnHover: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                centerMode: true,
                centerPadding: '0',
                arrows: true,
                swipe: false
            }
        }, {
            breakpoint: 959,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                arrows: true,
                swipe: false
            }
        }, {
            breakpoint: 580,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                arrows: true,
                swipe: false
            }
        }]
    });
    // jQuery('.slider_fee').slick({
    //     slidesToShow: 5,
    //     dots: false,
    //     arrows: false,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     infinite: false,
    //     settings: "unslick",
    //     variableWidth: true,
    //     responsive: [{
    //         breakpoint: 767,
    //         settings: {
    //             slidesToShow: 2,
    //             centerMode: false,
    //             centerPadding: '0',
    //             autoplay: false
    //         }
    //     }]
    // });
    jQuery('.slider_news_nav').slick({
        slidesToShow: 3,
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        swipe: true,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 359,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                autoplay: false
            }
        }]
    });
    var news_index = jQuery('.slider_news_nav .slick-slide').index(jQuery('.slider_news_nav .active'));
    jQuery('.slider_news_nav').slick('slickGoTo', news_index);
    jQuery('.slider_info_nav').slick({
        slidesToShow: 3,
        dots: false,
        arrows: true,
        slidesToScroll: 2,
        swipe: true,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                autoplay: false,
                variableWidth: true
            }
        }, {
            breakpoint: 390,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                autoplay: false,
                variableWidth: true
            }
        }]
    });
    var info_index = jQuery('.slider_info_nav .slick-slide').index(jQuery('.slider_info_nav .active'));
    jQuery('.slider_info_nav').slick('slickGoTo', info_index);
    $('#rateYear').change(function() {
        futureValue();
    });

    function futureValue() {
        var rateYear = $('#rateYear').val();
        if (rateYear) {
            var amount = $("#amount").val();
            var rateMonth = rateYear / 12 / 100;
            $('.item_1 .number').text((amount * ((Math.pow(1 + rateMonth, 12) - 1) / rateMonth)).toFixed(2));
            $('.item_3 .number').text((amount * ((Math.pow(1 + rateMonth, 36) - 1) / rateMonth)).toFixed(2));
            $('.item_5 .number').text((amount * ((Math.pow(1 + rateMonth, 60) - 1) / rateMonth)).toFixed(2));
        }
    }
    // $("#slider-range").slider({
    //     range: "min",
    //     value: 100,
    //     step: 50,
    //     min: 50,
    //     max: 1000,
    //     slide: function(event, ui) {
    //         $("#amount").val(ui.value / 100);
    //         futureValue();
    //     }
    // });
    // $("#amount").val($("#slider-range").slider("value") / 100);
    futureValue();
    new WOW().init();
    jQuery('.for_nav').on('click', function() {
        jQuery('.for_nav').not(jQuery(this)).removeClass('open');
        jQuery(this).toggleClass('open')
    })
    jQuery('.message_form').on('submit', function(e) {
        e.preventDefault();
        var $form = jQuery(this);
        jQuery.post($form.attr('action'), $form.serialize(), function(data) {
            jQuery('.message_form')[0].reset();
            jQuery('.submit').remove();
            jQuery('.result').html(data);
        });
    });
    jQuery('.show_more').on('click', 'a.load-more ', function(event) {
        event.preventDefault();
        jQuery.ajax({
            url: jQuery('.next > a').attr('href'),
            beforeSend: function(xhr) {},
        }).done(function(data) {
            var items = jQuery(data).find('.search_results_list > li');
            var url_page = jQuery(data).find('.next > a').attr('href');
            if (url_page === undefined) {
                jQuery('.show_more').remove();
            } else {
                jQuery('.next > a').attr('href', url_page);
            }
            if (items.length) {
                jQuery('.search_results_list').append(items);
            }
        });
    });
    var pathname = jQuery(location).attr('hash');
    jQuery('a[href="/' + pathname + '"]').parent().addClass("active");
});