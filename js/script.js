
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
    var mibile_width = 767;
        if($(window).width() > mibile_width) {
            $(window).scroll(function () {
                var iCurScrollPos = $(this).scrollTop();
                if($(this).scrollTop() >= 55) {
                    $(class1).addClass('nav-fixed'); //add2
                }
                else if ($(this).scrollTop() < 85){
                    $('.header-wrap').removeClass('header-wrap-fixed');//rem1
                    $('.product-block1').css("top","80px")

                }
                if ((iCurScrollPos < iScrollPos) &&  ($(this).scrollTop() >= 55) ) {
                    $('.header-wrap').addClass('header-wrap-fixed');//add1
                    $(class1).removeClass('nav-fixed');//rem2
                    $('.product-block1').css("top","0")
                }
                else if (iCurScrollPos > iScrollPos){
                    $('.header-wrap').removeClass('header-wrap-fixed');//rem1
                }
                var lastScrollTop = 0;
                iScrollPos = iCurScrollPos;
            });
        }else{
            $(window).scroll(function () {
                var iCurScrollPos = $(this).scrollTop();
                if($(this).scrollTop() >= 55) {
                    $(class1).addClass('nav-fixed'); //add2
                }
                else if ((iCurScrollPos < iScrollPos)  ) {
                    $(class1).removeClass('nav-fixed');//rem2
                }
                var lastScrollTop = 0;
                iScrollPos = iCurScrollPos;
            });
        };
};


//    ----адаптивное меню----------

$(document).ready(function(){
    var mibile_width = 767;
    $(window).resize(function(){
        if($(window).width() > mibile_width) {
            $('#products-nav__list').removeClass('active');
            $('#products-nav__list').removeClass('flex-off');
            $('#products-nav__list').addClass('flex-on');

            $('#header-nav__list').removeClass('active');
            $('#header-nav__list').addClass('flex-off');
            $('#header-nav__list').removeClass('flex-on');
        }else{
            $('#products-nav__list').addClass('active');
            $('#products-nav__list').removeClass('flex-off');
            $('#products-nav__list').addClass('flex-on');
            $('#header-nav__list').addClass('active');
            $('#header-nav__list').addClass('flex-off');
            $('#header-nav__list').removeClass('flex-on');

        };
    });
    $('.slicknav-menu__but').click(function(){
        $(  "#products-nav__list").slideToggle("slow");
//        $('.slicknav-menu1__but').css("background","red")
    });
    $('.slicknav-menu1__but').click(function(){
        $(".header-nav__wrap").toggleClass("header-nav__wrap__toggle");
        $(".icon-bars").toggleClass("icon-close");
        $(".header-nav").toggleClass("header-nav__toggle");
        $( "#header-nav__list").slideToggle("slow");
    });
});
//        var mibile_width = 767;
////--------header-menu----------
//        $(window).resize(function(){
//            if($(window).width() > mibile_width) {
//                $('#header-nav__list').removeClass('active');
//                $('#header-nav__list').css("display","flex")
//            }else{
//                $('#header-nav__list').addClass('active');
//                $('#header-nav__list').css("display","none")
//            };
//        });
////        $('.slicknav-menu1__but').click(function(){
////            $(  "#header-nav__list").slideToggle("slow");
////        });
////        $('.products-nav__item a').click(function(){
////            $(  "#header-nav__list").slideToggle("slow");
////            $(  "#header-nav__list").css("display","none");
////        });
////--------product-menu-----------
//        $(window).resize(function(){
//            if($(window).width() > mibile_width) {
//                $('#products-nav__list').removeClass('active');
//                $('#products-nav__list').css("display","flex")
//            }else{
//                $('#products-nav__list').addClass('active');
//                $('#products-nav__list').css("display","none")
//            };
//        });
////        $('.slicknav-menu__but').click(function(){
////            $(  "#products-nav__list").slideToggle("slow");
////        });
////        $('.products-nav__item a').click(function(){
////            $(  "#products-nav__list").slideToggle("slow");
////            $(  "#products-nav__list").css("display","none");
////        });
//    });

