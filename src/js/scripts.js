// Валидация форм

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
    },
    submitHandler: function (form) {
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: $("#brif-form").serialize(),
          success: function (data) {
            $('.input').val('');
            alert('ваша заявка отправлена'),
            console.log(data);
          }
        });
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
    },
    submitHandler: function (form) {
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $("#offer-form").serialize(),
        success: function (data) {
          $('.input').val('');
          alert('Спасибо за заявку, скоро мы Вам перезвоним'),
          console.log(data);
        }
      });
    }    
  });
  // Валидация modal-form
  $('#modal-form').validate({
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
    },
    submitHandler: function (form) {
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $("#modal-form").serialize(),
        success: function (data) {
          $('.input').val('');
          alert('ваша заявка отправлена'),
          console.log(data);
        }
      });
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

