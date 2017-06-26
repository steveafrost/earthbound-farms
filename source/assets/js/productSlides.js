$(function() {
  $('.product').first().addClass('current-product');
  $('.thumbnail').first().addClass('current-thumbnail');
  $('.thumbnails').on('click', '.thumbnail', changeSlide);

  function changeSlide() {
    let current = $('.current-product').data('id');
    let clicked = $(this).data('id');
    if (clicked == current) {
      return;
    }

    $('.current-product').removeClass('current-product');
    $('.current-thumbnail').removeClass('current-thumbnail');

    $(`.product[data-id="${clicked}"`).addClass('current-product');
    $(`.thumbnail[data-id="${clicked}"`).addClass('current-thumbnail');
  }
})
