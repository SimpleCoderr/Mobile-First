$(function () {
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="arrow slick-next"> <img src="images/next-arrow.svg" alt="next"></button>',
    prevArrow: '<button type="button" class="arrow slick-prev"> <img src="images/prev-arrow.svg" alt="prev"></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

$(function () {
  $('.down-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
    ]
  })
});