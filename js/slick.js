$(function () {
  $(".a-o-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".a-o-gallery-list-left",
    nextArrow: ".a-o-gallery-list-right",
  });
});

$(function () {
  $(".a-o-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".a-o-reviews-list-left",
    nextArrow: ".a-o-reviews-list-right",
  });
});
