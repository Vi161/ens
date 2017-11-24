//  ---------перелистывание к якорям-------------

$(document).ready(function() {
    golink();
//    $(window).resize(function(){
//        window.setTimeout('location.reload()', 500);
//    });
});
var display;

var golink = function(pad){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
};
<!-- скрипт для прилипания products-nav-->
var navmenu = function(class1){
    var iScrollPos = 0;
    var hproductsnav= $(".products-nav").outerHeight();
    var hheadernav= $(".header-nav").outerHeight();
    var mibile_width = 767;
    if($(window).width() > mibile_width) {
        var tempScrollTop, currentScrollTop = 0;

        $(window).scroll(function(){

            currentScrollTop = jQuery(window).scrollTop();

            if ((tempScrollTop < currentScrollTop ) && (tempScrollTop > 55)){
                $('header').addClass('header-wrap-fixed');//add1
                $('header').removeClass('header-wrap-fixed-top');//rem2
                $(class1).addClass('nav-fixed'); //add2
                $(class1).removeClass('nav-lip2');
                $(class1).addClass('nav-lip0');
            }
//            else if (tempScrollTop < currentScrollTop ){
//                $('header').addClass('header-wrap-fixed');//rem2
//                $('header').addClass('header-wrap-fixed-top');//rem2
//                $(class1).addClass('nav-lip1');
//            }
            else if (tempScrollTop > currentScrollTop ){
                $('header').addClass('header-wrap-fixed');//rem2
                $('header').addClass('header-wrap-fixed-top');//rem2
                $(class1).addClass('nav-lip2');
            }
            else if (tempScrollTop < 85){
                $('header').removeClass('header-wrap-fixed');//add1
                $('header').removeClass('header-wrap-fixed-top');//rem2
                $(class1).removeClass('nav-lip0');
                $(class1).removeClass('nav-lip1');
                $(class1).removeClass('nav-lip2');
                $(class1).removeClass('nav-fixed');


            }
                tempScrollTop = currentScrollTop;
        });
//        $(window).scroll(function () {
//            var iCurScrollPos = $(this).scrollTop();
//            if($(this).scrollTop() >= 55) {
//                $(class1).addClass('nav-fixed'); //add2
//                $(class1).css("top","0");
//            }
//            else if ($(this).scrollTop() < 95){
//                $(class1).removeClass('nav-fixed');//rem2
//                $('header').removeClass('header-wrap-fixed');//add1
//            }
//
//            if ((iCurScrollPos < iScrollPos) &&  ($(this).scrollTop() >= 55) ) {
//                $('header').addClass('header-wrap-fixed');//add1
//                $(class1).css("top",hheadernav);
//            }
//            else if (iCurScrollPos > iScrollPos){
//                $('header').removeClass('header-wrap-fixed');//add1
//
//            }
//            var lastScrollTop = 0;
//            iScrollPos = iCurScrollPos;
//        });

    }else{

        $(window).scroll(function () {
            var iCurScrollPos = $(this).scrollTop();
            paddingtop = hproductsnav;

            if($(this).scrollTop() >= 55) {
                $(class1).addClass('nav-fixed'); //add2
            }
            else if ((iCurScrollPos < iScrollPos)  ) {
                $(class1).removeClass('nav-fixed');//rem2
                $('header').removeClass('header-wrap-fixed');//add1
            }
            var lastScrollTop = 0;
            iScrollPos = iCurScrollPos;
        });
    };
};

//    ----адаптивное меню----------
$(document).ready(function(){
    var mibile_width = 767;

//    $('#header-nav__list').mouseover(function(){
//        $(this).hide();
//        $(".icon-bars").removeClass("icon-close");
//    });

    if($(window).width() < mibile_width) {
        $('.header-nav__item1-products').click(function(){
            $(".header-nav__item1-products>.header-nav__list1-1").toggle(display);
            $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
            $(".header-nav__item1-tech>.header-nav__list1-1").hide();
            $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
            $(this).css("border","none  ");
        });
        $('.header-nav__item1-tech').click(function(){
            $(".header-nav__item1-tech>.header-nav__list1-1").toggle(display);
            $(".header-nav__item1-products>.header-nav__list1-1").hide();
            $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
            $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
            $(this).css("border","none  ");
        });
        $('.header-nav__item1-hyst').click(function(){
            $(".header-nav__item1-hyst>.header-nav__list1-1").toggle(display);
            $(".header-nav__item1-products>.header-nav__list1-1").hide();
            $(".header-nav__item1-tech>.header-nav__list1-1").hide();
            $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
            $(this).css("border","none  ");
        });
        $('.header-nav__item1-aboutus').click(function(){
            $(".header-nav__item1-aboutus>.header-nav__list1-1").toggle(display);
            $(".header-nav__item1-products>.header-nav__list1-1").hide();
            $(".header-nav__item1-tech>.header-nav__list1-1").hide();
            $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
            $(this).css("border","none  ");
        });
    }else {
        $('.header-nav__item1').mouseover(function(){
            $(this).children(".header-nav__list1-1").show();
            $(this).css("border-bottom","2px solid #556B2F");
            return false;
        });
        $('.header-nav__item1').mouseout(function(){
            $(".header-nav__list1-1").hide();
            $(this).css("border-bottom","2px solid transparent");
            return false;
        });
    }

    if(window.matchMedia('all and (max-width: 768px)').matches)
    {
        $('.slicknav-menu__but').click(function(){
            $(  "#products-nav__list").toggle(display);
            return false;
        });


        $('body').click(function(){
            $("#products-nav__list").hide();
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $("#products-nav__list").slideUp();
            }
        });
        $('.slicknav-menu1__but').click(function(){
            $(".icon-bars").toggleClass("icon-close");
            $( "#header-nav__list").toggle(display);
            return false;
        });

        $("body").click(function(e) {
            if(($(e.target).closest("#header-nav__list").length==0)&&
                ($(e.target).closest(".header-nav__logo").length==0)){
                $("#header-nav__list").css("display","none");
                $('.icon-bars').removeClass('icon-close');
            }
        });
    }

//    $(window).resize(function(){
//        if($(window).width() > mibile_width) {
//
//            $('#products-nav__list').removeClass('active');
//            $('#products-nav__list').removeClass('flex-off');
//            $('#products-nav__list').addClass('flex-on');
//
//            $('#header-nav__list').removeClass('active');
////            $('#header-nav__list').removeClass('flex-off');
//            $('#header-nav__list').addClass('flex-on');
//        }else{
//            $('#header-nav__list').addClass('active');
//            $('#header-nav__list').addClass('flex-off');
//            $('#header-nav__list').removeClass('flex-on');
//
//            $('#products-nav__list').addClass('active');
//            $('#products-nav__list').addClass('flex-off');
//            $('#products-nav__list').removeClass('flex-on');
//            $( "#products-nav__list").toggle(false);
//            $( "#header-nav__list").toggle(false);
//
//            $('.icon-bars').removeClass('icon-close');
//        };
//
//    });
});

