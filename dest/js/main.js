/* global $ , alert , console*/
$(function () {
 
  $('button.navbar-toggler').find('span').removeClass("navbar-toggler-icon");
  $('button.navbar-toggler').find('span').addClass("fa-solid fa-bars");
  // Change icon of mobile menu
  $('button.navbar-toggler').click(function(event) {
      event.preventDefault();
      $(this).find('span').toggleClass(' fa-bars fa-xmark');
  });
});
  //======= scroll Up =======//
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.scrollup').fadeIn('slow');
    }else {
        $('.scrollup').fadeOut('slow');
    }
});
$('.scrollup').click(function () {
    $("html, body").animate({scrollTop: 0}, 2000);
    return false;
});



