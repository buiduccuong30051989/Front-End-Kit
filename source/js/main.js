//=require jquery/dist/jquery.min.js
//=require extention/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require owl.carousel/dist/owl.carousel.min.js
//=require lightgallery/dist/js/lightgallery-all.min.js
//=require extention/menuzord.js

$(function() {
  // code here
  $("#js-sidebar-elements-link a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
      scrollTop: $(hash).offset().top
    },1000, function(){
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });

  });

  //Video Lightbox
  $('.js-lightbox').lightGallery({
    zoom: false
  }); 

  $('.js-open-lightbox').on('click', function() {
    // $('.first-item').trigger('click');
    $(this).next('.js-lightbox').find('a:first-child').trigger('click');
  });

  // Navigation
  $("#menuzord").menuzord({
    indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
    indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
  });
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//Global var
var INSPIRO = {};

(function ($) {

    // USE STRICT
    "use strict";

    //----------------------------------------------------/
    // Predefined Variables
    //----------------------------------------------------/
    var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $wrapper = $('.wrapper'),
        $topbar = $('#topbar'),
        $header = $('#header'),

        //Logo
        logo = $('#logo').find('.logo'),
        logoImg = logo.find('img').attr('src'),
        logoDark = logo.attr('data-dark-logo'),

        //Main menu
        //mainmenuitems = $("#mainMenu > ul > li"),
        mainmenu = $('#mainMenu'),
        mainmenuitems = mainmenu.find('li.dropdown > a'),
        mainsubmenuitems = mainmenu.find('li.dropdown-submenu > a, li.dropdown-submenu > span'),

        //Vertical Dot Menu
        navigationItems = $('#vertical-dot-menu a'),

        //Side panel
        sidePanel = $('#side-panel'),
        sidePanellogo = $('#panel-logo').find('.logo'),
        sidePanellogoImg = sidePanellogo.find('img').attr('src'),
        sidePanellogoDark = sidePanellogo.attr('data-dark-logo'),

        //Fullscreen panel
        fullScreenPanel = $('#fullscreen-panel'),

        $topSearch = $('#top-search'),
        $parallax = $('.parallax'),
        $textRotator = $('.text-rotator'),

        //Window size control
        $fullScreen = $('.fullscreen') || $('.section-fullscreen'),
        $halfScreen = $('.halfscreen'),

        //Elements
        dataAnimation = $("[data-animation]"),
        $counter = $('.counter:not(.counter-instant)'),
        $countdownTimer = $('.countdown'),
        $progressBar = $('.progress-bar'),
        $pieChart = $('.pie-chart'),
        $map = $('.map'),
        accordionType = "accordion",
        toogleType = "toggle",
        accordionItem = "ac-item",
        itemActive = "ac-active",
        itemTitle = "ac-title",
        itemContent = "ac-content",

        $lightbox_gallery = $('[data-lightbox-type="gallery"]'),
        $lightbox_image = $('[data-lightbox-type="image"]'),
        $lightbox_iframe = $('[data-lightbox-type="iframe"]'),
        $lightbox_ajax = $('[data-lightbox-type="ajax"]'),

        //Widgets
        $flickr_widget = $('.flickr-widget'),

        $ytPlayer = $('.youtube-background'),

        //Utilites
        classFinder = ".";



    //----------------------------------------------------/
    // UTILITIES
    //----------------------------------------------------/

    //Check if function exists
    $.fn.exists = function () {
        return this.length > 0;
    };

    //----------------------------------------------------/
    // CAROUSEL SLIDER
    //----------------------------------------------------/
    INSPIRO.carouselInspiro = function () {

        var $sliderCarousel = $('.carousel') || $('.owl-carousel'),
            $postCarousel = $(".post-mini-slider");

        if ($sliderCarousel.exists()) {
            $sliderCarousel.each(function () {
                var element = $(this),

                    sliderCarouselColumns = element.attr('data-carousel-col') || "4",
                    sliderCarouselColumnsMedium = element.attr('data-carousel-col-md') || "4",
                    sliderCarouselColumnsSmall = element.attr('data-carousel-col-sm') || "3",
                    sliderCarouselColumnsExtraSmall = element.attr('data-carousel-col-xs') || "1",
                    $sliderCarouselMargins = element.attr('data-carousel-margins') || "20",
                    $sliderCarouseDots = element.attr('data-carousel-dots') || false,
                    $sliderCarouseNav = false,
                    $sliderCarouseAutoPlay = element.attr('data-carousel-autoplay') || false,
                    $sliderCarouseVideo = element.attr('data-carousel-video') || false;


                if ($sliderCarouseDots === false) {
                    $sliderCarouseNav = true;
                } else {
                    $sliderCarouseDots = true;
                }

                if (sliderCarouselColumns == 1) {
                    element.owlCarousel({
                        margin: Number($sliderCarouselMargins),
                        nav: $sliderCarouseNav,
                        navText: ['<i class="icon ion-ios-arrow-left"></i>',
                              '<i class="icon ion-ios-arrow-right"></i>'],
                        autoplay: $sliderCarouseAutoPlay,
                        autoplayHoverPause: true,
                        dots: $sliderCarouseDots,
                        items: 1,
                        autoHeight: false,
                        video: $sliderCarouseVideo,

                    });


                } else {

                    element.owlCarousel({
                        margin: Number($sliderCarouselMargins),
                        nav: $sliderCarouseNav,
                        navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                        autoplay: $sliderCarouseAutoPlay,
                        autoplayHoverPause: true,
                        dots: $sliderCarouseDots,
                        video: $sliderCarouseVideo,
                        responsive: {
                            0: {
                                items: sliderCarouselColumnsExtraSmall
                            },
                            600: {
                                items: sliderCarouselColumnsSmall
                            },
                            1000: {
                                items: sliderCarouselColumnsMedium
                            },
                            1200: {
                                items: sliderCarouselColumns
                            }
                        }
                    });


                }

            });
        }

        if ($postCarousel.exists()) {
            $postCarousel.each(function () {
                $postCarousel.owlCarousel({
                    autoplay: true,
                    autoplayHoverPause: true,
                    dots: true,
                    mouseDrag: false,
                    touchDrag: false,
                    items: 1,
                });

            });
        }

        if ($("#slider-carousel").exists()) {
            $("#slider-carousel").each(function () {
                $("#slider-carousel").owlCarousel({
                    margin: 0,
                    loop: true,
                    nav: true,
                    navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                    autoplay: true,
                    dots: false,
                    autoplayHoverPause: true,
                    navigation: true,
                    items: 1,
                    animateOut: 'fadeOut'


                });

                var owl = $("#slider-carousel");

                $('.owl-item.active .slider-content').addClass("animated fadeIn");


                owl.on('changed.owl.carousel', function (event) {

                    $('.owl-item:not(.active)').siblings().find(".slider-content").removeClass("animated fadeIn");
                    setTimeout(function () {
                        $('.owl-item.active .slider-content').addClass("animated fadeIn");
                    }, 300);


                    //stop embed videos if they exists
                    if ($("#slider-carousel .owl-item.active .slider-content iframe").length) {
                        var url = $("#slider-carousel .owl-item.active .slider-content iframe").attr("src");
                        $('iframe').attr('src', '');
                        $('iframe').attr('src', url);

                    }

                });





            });
        }
        // News ticker
        if ($('.news-ticker-content').exists()) {
            $('.news-ticker-content').each(function () {
                $('.news-ticker-content').owlCarousel({
                    autoplay: true,
                    autoplayHoverPause: true,
                    dots: false,
                    mouseDrag: true,
                    touchDrag: true,
                    margin: 40,
                    autoWidth: true,
                    autoplayTimeout: "3000",
                    loop: true,
                });

            });
        }

        if ($('.tab-carousel').exists()) {

            if ($('.tab-carousel').parent().hasClass('active')) {
                $('.tab-carousel').owlCarousel({
                    navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                    margin: 0,
                    nav: true,
                    dots: false,
                    items: 1
                });
            } else {
                $('.tabs-navigation li a').click(function () {
                    $('.tab-carousel').owlCarousel({
                        navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                        margin: 0,
                        nav: true,
                        dots: false,
                        items: 1
                    });
                });
            }
        }

    };

    //Window load functions
    $window.on("load", function(){
      INSPIRO.carouselInspiro();
    });

    //Document ready functions
    $document.ready(

    );

    //Document resize functions
    $window.resize(function () {
    });

    //Document scrool functions
    $window.scroll(function () {
    });


})(jQuery);