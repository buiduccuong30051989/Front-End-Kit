//=require jquery/dist/jquery.min.js
//=require extention/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js

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
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})