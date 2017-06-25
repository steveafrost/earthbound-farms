$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 290) {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
  });
});
