$(function() {
  const nav = $('nav')
  const stickyNavTop = nav.offset().top;

  $(window).scroll(function() {
    if($(this).scrollTop() > stickyNavTop) {
      nav.addClass('sticky');
    } else {
      nav.removeClass('sticky');
    }
  })
});
