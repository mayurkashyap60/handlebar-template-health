var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination'
    },
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".fixed-top").addClass("head");
      } else {
        $(".fixed-top").removeClass("head");
      }
    });
  });