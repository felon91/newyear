$(document).ready(function() {

  $(".form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите, пожалуйста, Ваше имя",
        minlength: "Минимальное количество символов 2"
      },
      email: "Пожалуйста, введите корректный email"
    }
  });

  $(".form2").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите, пожалуйста, Ваше имя",
        minlength: "Минимальное количество символов 2"
      },
      email: "Пожалуйста, введите корректный email"
    }
  });

  $('.box').on('click', 'input', function(event){

    let checkboxId = $(this).attr('data-id');

    if($(this).is(":checked")) {
      $('input[data-id="'+checkboxId+'"]').each(function(indx, element){
        $(element).addClass('active');
        $(element).prop('checked', true);
      });
    } else {
      $('input[data-id="'+checkboxId+'"]').each(function(indx, element){
        $(element).removeClass('active');
        $(element).prop('checked', false);
      });
    }

  });

  $('.complects__block a').on('click', function(event){
    event.preventDefault();
    let idsArray = $(this).attr('data-ids').split(',');
    $('input[data-id]').removeClass('active').prop('checked', false);

    idsArray.forEach(function(item, i) {
      $('input[data-id="'+item+'"]').addClass('active').prop('checked', true);
    });

  });



});