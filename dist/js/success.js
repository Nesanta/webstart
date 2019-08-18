// $(document).ready(function() {

// Обработка и отправка формы через AJAX
// $('#offer-form').on('submit', function(event) {
//   event.preventDefault();
//   $.ajax({
//     url: 'mail.php',
//     type: 'POST',
//     data: $(this).serialize(),
//     success: function(data) {
//       $('.success').addClass('success_show'), 
//       $('.success__text').text('Спасибо за заявку, скоро мы Вам перезвоним'),console.log(data); 
//     }, 
//     error:
//     function(jqXHR, textStatus) {
//       console.log(jqXHR + ':' + textStatus)
//     }
//   });
// // Закрытие модального окна
//   $('#s_close').on('click', function() {
//     $('.success').removeClass('success_show');
//   });  
//   $('#s_close').on('click', function() {
//     $('#offer-form')[0].reset();
//   });

// });
// }); 