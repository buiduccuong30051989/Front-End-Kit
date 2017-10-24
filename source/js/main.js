//=require jquery/dist/jquery.min.js
//=require extention/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require owl.carousel/dist/owl.carousel.min.js
//=require lightgallery/dist/js/lightgallery-all.min.js
//=require jquery.countdown/dist/jquery.countdown.min.js
//=require extention/jquery.malihu.PageScroll2id.js
//=require sticky-kit/jquery.sticky-kit.min.js
//=require wow/dist/wow.min.js

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

  //Slider 
  $(".js-main-slider").owlCarousel({
    autoPlay: true, //Set AutoPlay to 3 seconds
    items : 1,
    loop: true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });

  $(".js-slider-promotion-03").owlCarousel({
    autoPlay: true, //Set AutoPlay to 3 seconds
    items : 1,
    loop: true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });

  // Light Box
    // Video Lightbox
      $('.js-lightbox').lightGallery({
        zoom: false
      }); 
    // Trigger Button Play
    $('.js-open-lightbox').on('click', function() {
      // $('.first-item').trigger('click');
      $(this).next('.js-lightbox').find('a:first-child').trigger('click');
    });

  //Counter Down
  $("#getting-started").countdown("2018/01/01", function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span>%w</span> weeks '
      + '<span>%d</span> days '
      + '<span>%H</span> hr '
      + '<span>%M</span> min '
      + '<span>%S</span> sec'
    ));
  });

  // Sticky Header
  $("#js-main-nav").stick_in_parent();

  // Animate Scroll
  new WOW().init();

});

 // Menu spy
$(window).on("load",function(){
 $("ul.menu li a").mPageScroll2id({
    highlightSelector:"ul.menu li a",
    forceSingleHighlight :"mPS2id-highlight",
    offset: "#js-main-nav",
    scrollSpeed:800,
    scrollEasing: "easeInOutCubic"
  });
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})