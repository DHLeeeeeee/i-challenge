$(function () {
  $('.top_banner .xi-close').on('click', function () {
    $('.top_banner').slideUp();
  });

  $(window).on('scroll', function () {
    //스크롤량을 구함.
    var sct = $(window).scrollTop();
    // console.log(sct);
    if (sct > 200) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

  $('.product_slide').slick({
    slidesToShow: 4,
    variableWidth: true,
  });
});
