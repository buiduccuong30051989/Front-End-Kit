jQuery(document).ready(function(){
    var slider = new MasterSlider();
    slider.control('bullets', {autohide:false});
    slider.control('arrows');
    if (jQuery(window).width() > 630) {
    slider.setup('masterslider', {
        width           : 470,
        autoHeight          : true,
        swipe           : true,
        mouse           : true,
        layout          : "partialview",
        autoplay        : false,
        loop            : true,
        centerControls  : true,
        layersMode      : "center",
        speed           : 20,
        dir             : "h",
        parallaxMode    : 'swipe',
        view            : "partialWave"
    });
    } else {
    slider.setup('masterslider', {
        width           : 270,
        autoHeight          : true,
        swipe           : true,
        mouse           : true,
        layout          : "partialview",
        autoplay        : false,
        loop            : true,
        centerControls  : true,
        layersMode      : "center",
        speed           : 20,
        dir             : "h",
        parallaxMode    : 'swipe',
        view            : "partialWave"
    });
    }

jQuery(".fake-next").click(function(){
    jQuery(".ms-nav-next").trigger("click");
    return false;
 });
 jQuery(".fake-prev").click(function(){
    jQuery(".ms-nav-prev").trigger("click");
    return false;
 });

    jQuery('.slider_desc').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.slider_logo',
    });
    jQuery('.slider_logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        asNavFor: '.slider_desc',
        focusOnSelect: true,
        pauseOnHover: true,
        centerMode: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
            }
        }]
    });
  });