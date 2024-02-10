$(document).ready(function() {
  $('.color-choose input').on('click', function() {
      var phoneColor = $(this).attr('data-image');
      $('.left-column img').removeClass('active').css('display', 'none');
      $('.left-column img[data-image="' + phoneColor + '"]').addClass('active').css('display', 'block');
  });
});
