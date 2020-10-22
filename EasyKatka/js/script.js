$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    infinite: false,
  });
});
$(".ceo__slider").slick({
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // arrows: true,
    // vertical: true,
    // autoplay:true,
    // autoplaySpeed:2000,
	// verticalSwiping: true
	vertical: true,
	arrows: false,
    dots: true,
    slidesToScroll: 1,
    infinite: false,
});