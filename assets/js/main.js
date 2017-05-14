//activate animation burger btn
$(document).ready(function(){
  $(".navbar-header .navbar-toggle").click(function(){
    $(this).toggleClass("is-active");
  });
});




//Closes the Responsive Menu on Menu Item Click
$(document).ready(function(){
  $('a.page-scroll').click(function(){
    $('.side-collapse').addClass('in');
    $('.navbar-toggle').removeClass('is-active');
  });
});




//animate the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});




//sections scroll transition with jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});




//navbar lateral
$(document).ready(function() {
  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');

  sideslider.click(function(event){
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');
  });
});
