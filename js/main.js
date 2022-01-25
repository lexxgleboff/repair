// let button = document.querySelector('#button');
// let modal = document.querySelector('#modal');
// let close = document.querySelector('#close');

// button.addEventListener('click', function () {
//     modal.classList.add('modal_active');
// });

// close.addEventListener('click', function () {
//    modal.classList.remove('modal_active')
// });

// Открытие и закрытие модального окна обратной связи
$(function() {
    $('#button').on('click', function () {
        $('#modal').addClass('modal_active');
    });
    $('#close').on('click', function () {
        $('#modal').removeClass('modal_active'); 
    });

    // Обработка и отправка формы через AJAX
    $('#offer-form').on('submit', function (event) {
        // отключаем стандартное поведение отправки формы
        event.preventDefault();
        const formURL = $(this).attr('action');
        $.ajax({
            url: formURL,
            type: 'POST',
            data: $(this).serialize(),
            success: function (data) {
                $('.success').css('display', 'flex');
                $('.success-dialog__title').text(data + ', ваша форма отправлена!');
                setTimeout(function () {
                    $('.success').css('display', 'none')
                }, 3000);
            },
            error: function (jqXHR, textStatus) {
                console.log(jqXHR + ': ' + textStatus);
            }
            });
    });
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});


