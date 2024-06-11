$(document).ready(function(){
  /* 메뉴 */
  $(".main").hover(function(){
    $(this).find(".sub_all").stop().slideDown();
  },function(){
    $(this).find(".sub_all").stop().slideUp();
  });
  $(".program").hover(function(){
    $(this).find(".sub_sub").stop().slideDown();
  },function(){
    $(this).find(".sub_sub").stop().slideUp();
  });

  /* 태블릿&모바일 메뉴 */
  $(".fa-bars").click(function(){
    $(".mo_view").css("right","0")
  })
  $(".close").click(function(){
    $(".mo_view").css("right","-100%");
  });

  $(".mo_main").click(function(){
    var submenu = $(this).find('.mo_sub_all');
    var caret = $(this).find('.fa-caret-down, .fa-caret-up');

    submenu.slideToggle();
    caret.toggleClass('fa-caret-down fa-caret-up');

    $('.mo_sub_all').not(submenu).slideUp();
    $('.fa-caret-up').not(caret).toggleClass('fa-caret-up fa-caret-down');
  });

  /* 메인 비주얼 */
  $('.m_visual').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
  });

  /* 섹션1 배너 */
  $(".dots li").click(function(){
    $(".dots li").removeClass("focus");
    $(this).addClass("focus");
  });
  $(".li1, .li2, .li3").click(function() {
    var index = $(this).index() + 1;
    $(".s1_right_inner>div.active").fadeOut(200, function() {
        $(this).removeClass("active");
        $(".s1_right_inner>div:nth-child(" + index + ")").fadeIn(200).addClass("active");
    });
  });

  /* 섹션3 */
  $(".s3_inner").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 4,
          slidesToScroll: 1,
          pauseOnHover: true,
      }},
      { breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 2,
          slidesToScroll: 1,
          pauseOnHover: true,
        }
      }
    ]
  });
});