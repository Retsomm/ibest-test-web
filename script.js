$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,  
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '0px', 
    });
    $('.carouselSchedule').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        prevArrow: '<div class="leftArrow"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="rightArrow"><i class="fa-solid fa-chevron-right"></i></div>'
    });
})