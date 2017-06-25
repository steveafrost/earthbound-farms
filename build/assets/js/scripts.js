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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNreU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgY29uc3QgbmF2ID0gJCgnbmF2JylcbiAgY29uc3Qgc3RpY2t5TmF2VG9wID0gbmF2Lm9mZnNldCgpLnRvcDtcblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiBzdGlja3lOYXZUb3ApIHtcbiAgICAgIG5hdi5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdi5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XG4gICAgfVxuICB9KVxufSk7XG4iXX0=
