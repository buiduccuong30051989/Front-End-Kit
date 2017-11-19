$(document).ready(function() {
  "use strict";

  var offset = 950;
  var duration = 500;
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > offset) {
      $("#to-the-top").fadeIn(duration);
    } else {
      $("#to-the-top").fadeOut(duration);
    }
  });

  $("#to-the-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});
