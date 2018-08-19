jQuery(document).ready(function(){
  if ( jQuery( ".carousel-testimonial" ).length ) {
    jQuery('.carousel-testimonial').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  


  // popup
  var iframe = jQuery('#iframe-wrapper iframe');
  jQuery('[data-popup-open]').on('click', function(e) {
    var targetSrc = jQuery(this).attr('data-iframe-src')
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    iframe.attr("src",targetSrc + '?autoplay=1');
    e.preventDefault();
  });
  jQuery('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    console.log()
    iframe.attr("src", " ");
    e.preventDefault();
  });

  jQuery('.popup').on('click', function(e) {
    jQuery(this).fadeOut(350);
    iframe.attr("src", " ");
  });

  jQuery(function () {
    jQuery('[data-toggle="tooltip"]').tooltip()
  })


  jQuery('.panel-heading a').click(function() {
    jQuery('.panel').removeClass('active');
    if(!jQuery(this).closest('.panel').find('.panel-collapse').hasClass('in'))
        jQuery(this).parents('.panel').addClass('active');
 });

  jQuery(".next-section").click(function() {
    var cls = jQuery(this).closest("section").next().offset().top;
    jQuery("html, body").animate({scrollTop: cls}, "slow");
  });

});

