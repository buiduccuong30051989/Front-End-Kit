//=require jquery/dist/jquery.min.js
//=require extention/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require extention/slick.js
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
  indicatorFirstLevel: "<i class='faslick-carousel/slick/slick.min.js fa-angle-down'></i>",
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

    var $carousel = $(".js-carousel");
    var $postCarousel = $(".js-post-mini-slider");
    if ($postCarousel.exists()) {
      $postCarousel.each(function () {
        var element = $(this),
          $sliderCarouselDots = element.attr('data-carousel-dots') || false,
          $sliderCarouselNav = element.attr('data-carousel-arrow') || true,
          $sliderCarouselLoop = element.attr('data-carousel-loop') || false,
          $sliderCarouselAutoPlay = element.attr('data-carousel-autoplay') || false;

          element.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            nav: $sliderCarouselNav,
            prevArrow: '<a class="slick-prev"><i class="icon ion-ios-arrow-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="icon ion-ios-arrow-right"></i></a>',
            autoplay: $sliderCarouselAutoPlay,
            dots: $sliderCarouselDots
          });

      });
    }

    if ($carousel.exists()) {
      $carousel.each(function () {
        var element = $(this),
          $sliderCarouselDots = element.attr('data-carousel-dots') === "true" ? true : false,
          $sliderCarouselCenterPadding = element.attr('data-carousel-center-padding') || '50px',
          $sliderCarouselArrow = element.attr('data-carousel-arrow') === "true" ? true : false,
          $sliderCarouselLoop = element.attr('data-carousel-loop') === "true" ? true : false,
          $sliderCarouselPerPage = element.attr('data-carousel-perpage') || 1,
          $sliderCarouselAutoPlay = element.attr('data-carousel-autoplay') === "true" ? true : false,
          $sliderCarouselDrag = element.attr('data-carousel-drag') === "true" ? true : false,
          $sliderCarouselSwipe = element.attr('data-carousel-swipe') === "true" ? true : false,
          $sliderCarouselSwipeTo = element.attr('data-carousel-swipe-to') === "true" ? true : false,
          $sliderCarouselFade = element.attr('data-carousel-fade') === "true" ? true : false,
          $sliderCarouselVariableWidth = element.attr('data-carousel-variable-width') === "true" ? true : false,
          $sliderCarouselCenter = element.attr('data-carousel-center') === "true" ? true : false,
          $sliderCarouselLg = element.attr('data-carousel-lg') || 4,
          $sliderCarouselMd = element.attr('data-carousel-md') || 3,
          $sliderCarouselSm = element.attr('data-carousel-sm') || 2,
          $sliderCarouselXs = element.attr('data-carousel-xs') || 1,
          $sliderCarouselThumb = element.attr('data-carousel-thumb') || '',
          $sliderCarouselThumbFocus = element.attr('data-carousel-thumb-focus') === "true" ? true : false;

        element.slick({
          slidesToShow: Number($sliderCarouselLg),
          slidesToScroll: Number($sliderCarouselPerPage),
          arrows: $sliderCarouselArrow,
          dots: $sliderCarouselDots,
          swipe: $sliderCarouselSwipe,
          swipeToSlide: $sliderCarouselSwipeTo,
          fade: $sliderCarouselFade,
          variableWidth: $sliderCarouselVariableWidth,
          centerMode: $sliderCarouselCenter,
          prevArrow: '<a class="slick-prev"><i class="icon ion-ios-arrow-left"></i></a>',
          nextArrow: '<a class="slick-next"><i class="icon ion-ios-arrow-right"></i></a>',
          autoplay: $sliderCarouselAutoPlay,
          infinite: $sliderCarouselLoop,
          draggable: $sliderCarouselDrag,
          asNavFor: $sliderCarouselThumb,
          centerPadding: Number($sliderCarouselCenterPadding),
          focusOnSelect: $sliderCarouselThumbFocus,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: Number($sliderCarouselLg)
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: Number($sliderCarouselMd)
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: Number($sliderCarouselSm)
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: Number($sliderCarouselXs)
              }
            }
          ]
        });
      });
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