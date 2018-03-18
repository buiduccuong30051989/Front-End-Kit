//=require jquery/dist/jquery.min.js
//=require extention/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js

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
  $('[data-toggle="tooltip"]').tooltip();
});

//Global var
var FINHAY = {};

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
  FINHAY.carouselMusicque = function () {

  };

  //Window load functions
  $window.on("load", function(){
    FINHAY.carouselMusicque();
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