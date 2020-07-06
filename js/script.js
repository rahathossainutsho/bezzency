$(".option").click(function(){
    $(".come").fadeToggle();
});

$(".searchi").click(function(){
    $(".search-box").slideDown();
});

$(".cls").click(function(){
    $(".search-box").slideUp();
});


$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();



$('.overlay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows:false,
});


$('.multiple').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed:400,
     autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa fa-chevron-left prevarrow" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-chevron-right nextarrow" aria-hidden="true"></i>',
});


$('.peoples').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed:500,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa fa-chevron-left prevarrow" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-chevron-right nextarrow" aria-hidden="true"></i>',
});

$('.blog-iteam').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  speed:500,
  prevArrow:'<i class="fa fa-chevron-left prevarrow" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-chevron-right nextarrow" aria-hidden="true"></i>',
});