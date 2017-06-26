$(function() {

  // Highlight current page menu item as user scrolls
  var lastId,
      pageMenu = $("nav"),
      pageMenuHeight = pageMenu.outerHeight(),
      // All list items
      menuItems = pageMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+pageMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=\\#"+id+"]").parent().addClass("active");
     }
  });
});

$(function() {

})

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodEFjdGl2ZS5qcyIsInByb2R1Y3RTbGlkZXMuanMiLCJzdGlja3lOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEhpZ2hsaWdodCBjdXJyZW50IHBhZ2UgbWVudSBpdGVtIGFzIHVzZXIgc2Nyb2xsc1xuICB2YXIgbGFzdElkLFxuICAgICAgcGFnZU1lbnUgPSAkKFwibmF2XCIpLFxuICAgICAgcGFnZU1lbnVIZWlnaHQgPSBwYWdlTWVudS5vdXRlckhlaWdodCgpLFxuICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcbiAgICAgIG1lbnVJdGVtcyA9IHBhZ2VNZW51LmZpbmQoXCJhXCIpLFxuICAgICAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcbiAgICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICAgIGlmIChpdGVtLmxlbmd0aCkgeyByZXR1cm4gaXRlbTsgfVxuICAgICAgfSk7XG5cbiAgLy8gQmluZCB0byBzY3JvbGxcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkrcGFnZU1lbnVIZWlnaHQ7XG5cbiAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgfSk7XG4gICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICBjdXIgPSBjdXJbY3VyLmxlbmd0aC0xXTtcbiAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xuXG4gICAgIGlmIChsYXN0SWQgIT09IGlkKSB7XG4gICAgICAgICBsYXN0SWQgPSBpZDtcbiAgICAgICAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj1cXFxcI1wiK2lkK1wiXVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgfVxuICB9KTtcbn0pO1xuIiwiJChmdW5jdGlvbigpIHtcblxufSlcbiIsIiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5hdiA9ICQoJ25hdicpXG4gIGNvbnN0IHN0aWNreU5hdlRvcCA9IG5hdi5vZmZzZXQoKS50b3A7XG5cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gc3RpY2t5TmF2VG9wKSB7XG4gICAgICBuYXYuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXYucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xuICAgIH1cbiAgfSlcbn0pO1xuIl19
