var top_show =100;
var delay = 1000;
var arrow = $('#arrow');

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > top_show) {
      arrow.addClass('arrow_show');
    } 
    else {
      arrow.removeClass('arrow_show');
    }
    
  });

  arrow.click(function(){
    $('body, html').animate({
      scrollTop: 0
    }, delay);  
  });
});