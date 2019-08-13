// Обработка и отправка формы через технологию AJAX
// $('#offer-form').on('submit', function(event) {
//   event.preventDefault();
//   $.ajax({
//     url: 'mail.php',
//     type: 'POST',
//     data: $(this).serialize(),
//     success: function(data) {
//       $('.success').html(data + ', Ваша форма отправлена!')  
//     }, 
//     error: function(jqXHR, textStatus) {
//       console.log(jqXHR + ':' + textStatus);
      
//     }
//   });
// });


$(document).ready(function() {

  // Валидация формы brif

  $('#brif-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      userphone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Минимум {0} символов"),
        maxlength: jQuery.validator.format("Максимальное {0} символов")
      },
      userphone: {
        required: "Заполните поле",
      },
      email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      
    }
  });

  //  Скрипт маски телефона
  $('.phone').mask('+7(999)999-99-99');  

  // Валидация offer-form 

  $('#offer-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Миниум {0} символа"),
        maxlength: jQuery.validator.format("Максимум {0} символов")
      },
      userphone: {
        required: "Заполните поле",
      }      
    }
  });

  // Скрипт слайдера
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

