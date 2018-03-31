/*!
 * restaurant-lambda -  v1.0.0 (https://github.com/jeremgg/restaurant#readme)
 */

//ANIMATE THE NAVBAR ON SCROLL
var animatedHeader = (function() {

  var docElem = document.documentElement,
		header = document.querySelector( '.navbar' ),
		didScroll = false,
		changeHeaderOn = 50;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 50 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'top-nav-collapse' );
		}
		else {
			classie.remove( header, 'top-nav-collapse' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();
})();




(function($) {
    "use strict"; // Start of use strict

    //ACTIVATE ANIMATION BURGER BUTTON
    $(document).ready(function(){
        $(".navbar-toggler").click(function(){
            $(this).toggleClass("is-active");
        });
    });




    //CLOSE THE RESPONSIVE MENU ON MENU ITEM CLICK
    $(document).ready(function(){
        $('.js-scroll-trigger').click(function(){
            $('.navbar-toggler').removeClass('is-active');
            $('.navbar-collapse').removeClass('show');
        });
    });




    //SMOOTH SCROLLING
    $('a.js-scroll-trigger[href*="#"]:not([href="#"]), a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });




    //ACTIVATE SCROLLSPY TO ADD ACTIVE CLASS TO NAVBAR ITEM ON SCROLL
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });
})(jQuery); // End of use strict
