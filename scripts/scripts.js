// Adaptive navbar
$(document).ready(function(){
  $('.header_btn').click(function(){
    $(".header_mobile").toggleClass("header_mobile_active");
    $(".header_mobile_bg").toggleClass("header_mobile_bg_active");
    $(".header_btn").toggleClass("header_btn_disabled");
  });
});

$(document).ready(function(){
  $('.header_mobile_btn').click(function(){
    $(".header_mobile").toggleClass("header_mobile_active");
    $(".header_mobile_bg").toggleClass("header_mobile_bg_active");
    $(".header_btn").toggleClass("header_btn_disabled");
  });
});

// Testiminials slider
const swiper = new Swiper('.testimonials_slider_container', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 800,
  autoHeight: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  // loopedSlides: 2,
  // freeMode: true,
  breakpoints: {
    1400: {
      centeredSlides: true,
    }
  },
});
