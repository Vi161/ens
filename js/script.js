
//  ---------перелистывание к якорям-------------
$(document).ready(function() {
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 500);
        return false;
    });
});


<!-- скрипт для прилипания products-nav-->

var navmenu = function(class1){
    var two_classes = 'header, ' + class1;
//    alert(two_classes);
    $(two_classes).wrapAll('<div class="header-wrap">');
    var iScrollPos = 0;
    $(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if($(this).scrollTop() >= 55) {
            $(class1).addClass('nav-fixed'); //add2
        }
        else if ($(this).scrollTop() < 85){
            $('.header-wrap').removeClass('header-wrap-fixed');//rem1
        }
        if ((iCurScrollPos < iScrollPos) &&  ($(this).scrollTop() >= 55)) {
            $('.header-wrap').addClass('header-wrap-fixed');//add1
            $(class1).removeClass('nav-fixed');//rem2
        }
        else if (iCurScrollPos > iScrollPos){
            $('.header-wrap').removeClass('header-wrap-fixed');//rem1
        }
        var lastScrollTop = 0;
        iScrollPos = iCurScrollPos;
    });
};


//    ----адаптивное меню----------

    $(document).ready(function(){
        var mibile_width = 767;
//--------header-menu----------
        $(window).resize(function(){
            if($(window).width() > mibile_width) {
                $('#header-nav__list').removeClass('active');
                $('#header-nav__list').css("display","flex")
            }else{
                $('#header-nav__list').addClass('active');
                $('#header-nav__list').css("display","none")
            };
        });
//        $('.slicknav-menu1__but').click(function(){
//            $(  "#header-nav__list").slideToggle("slow");
//        });
//        $('.products-nav__item a').click(function(){
//            $(  "#header-nav__list").slideToggle("slow");
//            $(  "#header-nav__list").css("display","none");
//        });
//--------product-menu-----------
        $(window).resize(function(){
            if($(window).width() > mibile_width) {
                $('#products-nav__list').removeClass('active');
                $('#products-nav__list').css("display","flex")
            }else{
                $('#products-nav__list').addClass('active');
                $('#products-nav__list').css("display","none")
            };
        });
//        $('.slicknav-menu__but').click(function(){
//            $(  "#products-nav__list").slideToggle("slow");
//        });
//        $('.products-nav__item a').click(function(){
//            $(  "#products-nav__list").slideToggle("slow");
//            $(  "#products-nav__list").css("display","none");
//        });
    });


//--------изменение высоты блоков-----------
//$(document).ready(function(){
//
//$(function(){
//    var content_width = 1060;
//    var content_width_min = 768;
//    var h1 = parseInt($('.product-block1').css('height'), 10);
//    var newh1 = h1/ content_width ;
//    var h4 = parseInt($('.product-block4').css('height'), 10);
//    var newh4 = h4/ content_width ;
//    var h6 = parseInt($('.product-block6').css('height'), 10);
//    var newh6 = h6/ content_width ;
//    var h8 = parseInt($('.product-block8').css('height'), 10);
//    var newh8 = h8/ content_width ;
//    var h10 = parseInt($('.product-block10').css('height'), 10);
//    var newh10 = h10/ content_width ;
//    var h12 = parseInt($('.product-block12').css('height'), 10);
//    var newh12 = h12/ content_width ;
//    var h13 = parseInt($('.product-block13').css('height'), 10);
//    var newh13 = h13/ content_width ;
//    var h15 = parseInt($('.product-block15').css('height'), 10);
//    var newh15 = h15/ content_width ;
//    var h17 = parseInt($('.product-block17').css('height'), 10);
//    var newh17 = h17/ content_width ;
//    var windows_width = $(window).width();
//
//    $(window).resize(function(){
//        $('.product-block16__link1').height($('.product-block16__link1').width()*1.165);
//        $('.product-block16__link2').height($('.product-block16__link2').width()*0.67);
//        $('.product-block16__link3').height($('.product-block16__link3').width()*0.67);
//        $('.product-block16__link4').height($('.product-block16__link4').width()*1.165);
//        $('.product-block16__link5').height($('.product-block16__link5').width()*1.87);
//        $('.product-block16__link6').height($('.product-block16__link6').width()*0.219);
//        $('.product-block16__link7').height($('.product-block16__link7').width()*0.442);
//        $('.product-block16__link8').height($('.product-block16__link8').width()*0.442);
//        if (( windows_width< content_width) && (windows_width >= content_width_min)){
//            $('.product-block1').height($('.product-block1').width()*newh1);
//            $('.product-block4').height($('.product-block4').width()*newh4);
//            $('.product-block6').height($('.product-block6').width()*newh6);
//            $('.product-block8').height($('.product-block8').width()*newh8);
//            $('.product-block10').height($('.product-block10').width()*newh10);
//            $('.product-block12').height($('.product-block12').width()*newh12);
//            $('.product-block13').height($('.product-block13').width()*newh13);
//            $('.product-block15').height($('.product-block15').width()*newh15);
//            $('.product-block17').height($('.product-block17').width()*newh17);
//        }
//        else if(windows_width < content_width_min){
//            $('.product-block1').height(h1);
//        }
//    });
//
//});
//});