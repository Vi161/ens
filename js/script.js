//  ---------перелистывание к якорям-------------

$(document).ready(function() {
    golink();
    navmenu('.products-nav');
    adapmenu();
//    $(window).load(navmenu('.products-nav')); // при загрузке
//    $(window).resize(navmenu('.products-nav'))
//    $(window).load(adapmenu()); // при загрузке
//    $(window).resize(adapmenu())
});
var display;

var golink = function(){
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
    function navmenuin(){
            var iScrollPos = 0;
            var mibile_width = 767;
            if($(window).width() > mibile_width) {
                var tempScrollTop, currentScrollTop = 0;
                $(window).scroll(function(){
//                    $('.header-nav__container').css('background','red')
                    currentScrollTop = $(window).scrollTop();
                    if ((tempScrollTop < currentScrollTop ) && (tempScrollTop > 55)){
                        $('header').addClass('header-wrap-fixed');//add1
                        $('header').removeClass('header-wrap-fixed-top');//rem2
                        $(class1).addClass('nav-fixed'); //add2
                        $(class1).removeClass('nav-lip2');
                        $(class1).addClass('nav-lip0');
                    }
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
                return false;
            }
            else{
                $(window).scroll(function () {
                    var iCurScrollPos = $(this).scrollTop();
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
    navmenuin();
    $(window).on('resize',function () {
        navmenuin();
    });
};

//    ----адаптивное меню----------
var adapmenu = function(){
    function adap(){
        var mibile_width = 767;
        if($(window).width() < mibile_width) {
            $('.header-nav__container').css('background','red')

            $("#header-nav__list").css("display","none");
            $(".icon-bars").removeClass("icon-close");
            $('.header-nav__item1-products').mouseover(function(){
                $(".header-nav__item1-products>.header-nav__list1-1").show();
                $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
                $(".header-nav__item1-tech>.header-nav__list1-1").hide();
                $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
                $(this).css("border","none  ");
            });
            $('.header-nav__item1').mouseout(function(){
                $(".header-nav__item1-products>.header-nav__list1-1").hide();
            });

//            $('.header-nav__item1-products').click(function(){
//                $(".header-nav__item1-products>.header-nav__list1-1").toggle(display);
//                $(".header-nav__item1-hyst>.header-nav__list1-1").hide();
//                $(".header-nav__item1-tech>.header-nav__list1-1").hide();
//                $(".header-nav__item1-aboutus>.header-nav__list1-1").hide();
//                $(this).css("border","none  ");
//            });
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
                $("#header-nav__list").toggle(display);
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
        else if($(window).width() >= mibile_width) {
                                $('.header-nav__container').css('background','white')

            $("#header-nav__list").css("display","flex");
            $(".header-nav__list1-1").hide();
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
    }
    adap();
    $(window).on('resize',function () {
        adap();
    });
    //    -------выделение пункта меню в хэдере на странице которого находишься----------
    var thisUrl = document.location.pathname.split("/");
    //    console.log(thisUrl[thisUrl.length - 1]);
    $(".header-nav__item-a").each(function(){
        var thisLink = $(this).attr("href").split("/");
        if (thisLink[thisLink.length - 1] == thisUrl[thisUrl.length - 1]){
            //                $(".header-nav-active").removeClass("header-nav-active");
            $(this).addClass("header-nav-active");
            $(this).parents('.header-nav__item').addClass("header-nav-active");
            return false;
        }
    });
}
