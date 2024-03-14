/* global $ , alert , console*/
$(function () {
	
	$(document).ready(function(){

		// Main Slider
		var owl_slider = $('.owl-carousel-slider');
		owl_slider.owlCarousel({
			loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: true,
		    responsive:{
		        0:{
		            items:3,
		        },
		        576:{
		            items:6,
		        },
		        992:{
		            items:9,
		        }
		    },
		    autoplay:true,
		    autoplayTimeout:7000,
		    responsiveClass:true,
		    autoplayHoverPause:false,
		    responsiveRefreshRate: 100,
		    navText:[
					"<i class='fa fa-angle-left'></i>",
					"<i class='fa fa-angle-right'></i>"
				],
    		rewindNav : true,
		});

		// testimonials
		var owl_testimonials = $('.owl-carousel-testimonials');
		owl_testimonials.owlCarousel({
			loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
		    responsive:{
		        0:{
		            items:1,
		        },
		        576:{
		            items:1,
		        },
		        992:{
		            items:1,
		        }
		    },
		    autoplay:true,
		    autoplayTimeout:7000,
		    responsiveClass:true,
		    autoplayHoverPause:false,
		    responsiveRefreshRate: 100,
		});
		
	});
});
 