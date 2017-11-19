//=require jquery/dist/jquery.min.js
//=require extention/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require extention/slick.js
//=require lightgallery/dist/js/lightgallery-all.min.js
//=require extention/menuzord.js

$(function() {
  // code here
  // Add smooth scrolling on all links inside the navbar
  $("#js-sidebar-elements-link a[href^='#']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//Global var
var MUSICQUE = {};

(function ($) {

  // USE STRICT
  "use strict";

  //----------------------------------------------------/
  // Predefined Variables
  //----------------------------------------------------/
  var $window = $(window),
    $document = $(document),
    $body = $('body');


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
  MUSICQUE.carouselMusicque = function () {

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
    MUSICQUE.carouselMusicque();
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