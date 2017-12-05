//  ---------перелистывание к якорям-------------

$(document).ready(function() {
    var
    var adap = function(){
        var mibile_width = 767;

        if($(window).width() < mibile_width) {

            $(window).scroll(function () {
                console.log('<<<<');
                console.log($(window).width());

                var iCurScrollPos = $(this).scrollTop();
                $('header').removeClass('header-wrap-fixed');//rem2
                $('header').removeClass('header-wrap-fixed-top');//rem2
                $(".products-nav").removeClass('nav-lip0');
                $(".products-nav").removeClass('nav-lip1');
                $(".products-nav").removeClass('nav-lip2');
                if($(this).scrollTop() >= 55) {
                    $(".products-nav").addClass('nav-fixed'); //add2
                }
                else if ((iCurScrollPos < iScrollPos)  ) {
                    $(".products-nav").removeClass('nav-fixed');//rem2
//                    $('header').removeClass('header-wrap-fixed');//add1
                }
                var lastScrollTop = 0;
                iScrollPos = iCurScrollPos;

            });
        }
        else {
            console.log('>>>>>>>>>>');

            var tempScrollTop, currentScrollTop = 0;
            $(window).scroll(function(){
//                    $('.header-nav__container').css('background','red')
                currentScrollTop = $(window).scrollTop();
                if ((tempScrollTop < currentScrollTop ) && (tempScrollTop > 55)){
                    $('header').addClass('header-wrap-fixed');//add1
                    $('header').removeClass('header-wrap-fixed-top');//rem2
                    $(".products-nav").addClass('nav-fixed'); //add2
                    $(".products-nav").removeClass('nav-lip2');
                    $(".products-nav").addClass('nav-lip0');
                }
                else if (tempScrollTop > currentScrollTop ){
                    $('header').addClass('header-wrap-fixed');//rem2
                    $('header').addClass('header-wrap-fixed-top');//rem2
                    $(".products-nav").addClass('nav-lip2');
                }
                else if (tempScrollTop < 85){
                    $('header').removeClass('header-wrap-fixed');//add1
                    $('header').removeClass('header-wrap-fixed-top');//rem2
                    $(".products-nav").removeClass('nav-lip0');
                    $(".products-nav").removeClass('nav-lip1');
                    $(".products-nav").removeClass('nav-lip2');
                    $(".products-nav").removeClass('nav-fixed');
                }
                tempScrollTop = currentScrollTop;
            });

//*********************************

            $("#products-nav__list").show();
            $("#products-nav__list").css("display","flex");
            $("#header-nav__list").show();
            $("#header-nav__list").css("display","flex");
            $(".header-nav__list1-1").hide();
            $('.header-nav__item1').mouseover(function(){
                $(this).children(".header-nav__list1-1").show();
//                $(this).css("border-bottom","2px solid #556B2F");
                return false;
            });
            $('.header-nav__item1').mouseout(function(){
                $(".header-nav__list1-1").hide();
//                $(this).css("border-bottom","2px solid transparent");
                return false;
            });
        }
    };
    adap();
    $(window).on('resize',function () {
        adap();
    });
});




////    ----адаптивное меню----------
//var adapmenu = function(){
//        var iScrollPos = 0;
//        var mibile_width = 767;
//        if($(window).width() < mibile_width) {
//            var mob_win = function(){
//                console.log('<<<<<<<');
//
//                $(window).scroll(function () {
//                    var iCurScrollPos = $(this).scrollTop();
//                    $('header').removeClass('header-wrap-fixed');//rem2
//                    $('header').removeClass('header-wrap-fixed-top');//rem2
//                    $(".products-nav").removeClass('nav-lip0');
//                    $(".products-nav").removeClass('nav-lip1');
//                    $(".products-nav").removeClass('nav-lip2');
//                    if($(this).scrollTop() >= 55) {
//                        $(".products-nav").addClass('nav-fixed'); //add2
//                    }
//                    else if ((iCurScrollPos < iScrollPos)  ) {
//                        $(".products-nav").removeClass('nav-fixed');//rem2
////                    $('header').removeClass('header-wrap-fixed');//add1
//                    }
//                    var lastScrollTop = 0;
//                    iScrollPos = iCurScrollPos;
//
//                });
////************************************************
//
//                $("#header-nav__list").css("display","block");
//                $("#header-nav__list").hide();
//                $("#products-nav__list").css("display","block");
//                $("#products-nav__list").hide();
//
//
//                $(".icon-bars").removeClass("icon-close");
////            $('.header-nav__item1-products').click(function(){
////                $(".header-nav__item1-products>.header-nav__list1-1").show();
////                $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
////                $(".header-nav__item1-tech>.header-nav__list1-1").hide();
////                $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
////                $(this).css("border","none  ");
////            });
//                $('.header-nav__item1-products').click(function(){
//                    $(".header-nav__item1-products>.header-nav__list1-1").toggle(display);
//                    $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-tech>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
//                    $(this).css("border","none  ");
//                });
//                $('.header-nav__item1-tech').click(function(){
//                    $(".header-nav__item1-tech>.header-nav__list1-1").toggle(display);
//                    $(".header-nav__item1-products>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
//                    $(this).css("border","none  ");
//                });
//                $('.header-nav__item1-hyst').click(function(){
//                    $(".header-nav__item1-hyst>.header-nav__list1-1").toggle(display);
//                    $(".header-nav__item1-products>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-tech>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
//                    $(this).css("border","none  ");
//                });
//                $('.header-nav__item1-aboutus').click(function(){
//                    $(".header-nav__item1-aboutus>.header-nav__list1-1").toggle(display);
//                    $(".header-nav__item1-products>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-tech>.header-nav__list1-1").hide();
//                    $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
//                    $(this).css("border","none  ");
//                });
//                $('.slicknav-menu__but').click(function(){
//                    $(  "#products-nav__list").toggle(display);
//                    return false;
//                });
//                $('body').click(function(){
//                    $("#products-nav__list").hide();
//                });
//                $(window).scroll(function() {
//                    if ($(this).scrollTop() > 0) {
//                        $("#products-nav__list").slideUp();
//                    }
//                });
//                $('.slicknav-menu1__but').click(function(){
//                    $(".icon-bars").toggleClass("icon-close");
//                    $("#header-nav__list").toggle(display);
//                    return false;
//                });
//                $("body").click(function(e) {
//                    if(($(e.target).closest("#header-nav__list").length==0)&&
//                        ($(e.target).closest(".header-nav__logo").length==0)){
//                        $("#header-nav__list").css("display","none");
//                        $('.icon-bars').removeClass('icon-close');
//                    }
//                });
//                return false;
//            };
//            mob_win();
//            $(window).on('resize',function () {
//                mob_win();
//            });
//        }
//        else if($(window).width() >= mibile_width) {
//            var desctop_win = function(){
//                console.log('>>>>>>>>>');
//
//                var tempScrollTop, currentScrollTop = 0;
//                $(window).scroll(function(){
////                    $('.header-nav__container').css('background','red')
//                    currentScrollTop = $(window).scrollTop();
//                    if ((tempScrollTop < currentScrollTop ) && (tempScrollTop > 55)){
//                        $('header').addClass('header-wrap-fixed');//add1
//                        $('header').removeClass('header-wrap-fixed-top');//rem2
//                        $(".products-nav").addClass('nav-fixed'); //add2
//                        $(".products-nav").removeClass('nav-lip2');
//                        $(".products-nav").addClass('nav-lip0');
//                    }
//                    else if (tempScrollTop > currentScrollTop ){
//                        $('header').addClass('header-wrap-fixed');//rem2
//                        $('header').addClass('header-wrap-fixed-top');//rem2
//                        $(".products-nav").addClass('nav-lip2');
//                    }
//                    else if (tempScrollTop < 85){
//                        $('header').removeClass('header-wrap-fixed');//add1
//                        $('header').removeClass('header-wrap-fixed-top');//rem2
//                        $(".products-nav").removeClass('nav-lip0');
//                        $(".products-nav").removeClass('nav-lip1');
//                        $(".products-nav").removeClass('nav-lip2');
//                        $(".products-nav").removeClass('nav-fixed');
//                    }
//                    tempScrollTop = currentScrollTop;
//                });
//
////*********************************
//
//                $("#products-nav__list").show();
//                $("#products-nav__list").css("display","flex");
//                $("#header-nav__list").show();
//                $("#header-nav__list").css("display","flex");
//                $(".header-nav__list1-1").hide();
//                $('.header-nav__item1').mouseover(function(){
//                    $(this).children(".header-nav__list1-1").show();
////                $(this).css("border-bottom","2px solid #556B2F");
//                    return false;
//                });
//                $('.header-nav__item1').mouseout(function(){
//                    $(".header-nav__list1-1").hide();
////                $(this).css("border-bottom","2px solid transparent");
//                    return false;
//                });
//            }
//            desctop_win();
//            $(window).on('resize',function () {
//                desctop_win();
//            });
//        }
//
//
//};
