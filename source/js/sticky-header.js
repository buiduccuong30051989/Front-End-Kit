$(document).ready(function() {
  "use strict";
  var $header = $(".js-sticky-header"),
    $clone = $header.before($header.clone().addClass("clone"));
  window.addEventListener("scroll", function() {
    var mq = window.matchMedia("(min-width: 992px)");
    if (mq.matches) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        $header = $(".header-container.clone");
      if (distanceY > shrinkOn) {
        $header.addClass("fixed");
      } else {
        if ($header.hasClass("fixed")) {
          $header.removeClass("fixed");
        }
      }
    }
  });
});
