$('#offer-form').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function() {
      $('.success').addClass('success_show'), 
      $('.success__text').text('Спасибо за заявку, скоро мы Вам перезвоним') 
    }     
  });

  $('#s_close').on('click', function() {
    $('.success').removeClass('success_show');
  });  
  $('#s_close').on('click', function() {
    $('#offer-form')[0].reset();
  });

});