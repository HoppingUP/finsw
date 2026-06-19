$(function () {
  Fancybox.bind("[data-fancybox]");

  var mixer = mixitup('.blog__list');

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })
  // ----------------------------------------------------------------------------------------//
  $('.test__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.test__dots'),
    slidesToShow: 2,
    Infinity: true,
    draggable: false,
    waitForAnimate: false,
    responsive:
      [
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
  })

  $('.test__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.test__slider').slick('slickPrev')
  })
  $('.test__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.test__slider').slick('slickNext')
  })
  // ----------------------------------------------------------------------------------------//
  $('.faq__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('faq__acc-link--active')) {
      $(this).removeClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideUp()
    } else {
      $('.faq__acc-link').removeClass('faq__acc-link--active')
      $('.faq__acc-text').slideUp()
      $(this).addClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideDown()
    }
  })
  // ----------------------------------------------------------------------------------------//
  $(".header__nav-list a, .cta__main-content a, .footer__nav-list a").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  })

  // ----------------------------------------------------------------------------------------//
  $(document).ready(function () {
    // При загрузке страницы убеждаемся, что меню закрыто
    $('.header__top').removeClass('header__top--open');
    $('.overlay').removeClass('overlay--show');

    // Открытие/закрытие по бургеру
    $('.burger').on('click', function (e) {
      e.preventDefault();
      $('.header__top').toggleClass('header__top--open');
      $('.overlay').toggleClass('overlay--show');
    });

    // Закрытие по клику на оверлей
    $('.overlay').on('click', function (e) {
      e.preventDefault();
      $('.header__top').removeClass('header__top--open');
      $('.overlay').removeClass('overlay--show');
    });

    // Закрытие по клику на ссылку в меню
    $('.header__top a').on('click', function (e) {
      e.preventDefault();
      $('.header__top').removeClass('header__top--open');
      $('.overlay').removeClass('overlay--show');
      // Если нужно перейти по ссылке:
      // window.location.href = $(this).attr('href');
    });
  });

})
