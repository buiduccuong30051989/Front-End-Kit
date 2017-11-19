jQuery(document).ready(function($) {
  "use strict";
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on("resize scroll", function() {
    $(".counter").each(function() {
      if ($(this).isInViewport()) {
        $(this).removeClass('counter')
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text()
            },
            {
              duration: 4000,
              easing: "swing",
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            }
          );
      }
    });
  });
});
