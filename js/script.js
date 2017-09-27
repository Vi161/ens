//--------обновление страницы при изменении ширины экрана----------------
$(document).ready(function() {
    golink(30);
//    $(window).resize(function(){
//        window.setTimeout('location.reload()', 500);
//    });
});

//  ---------перелистывание к якорям-------------
var golink = function(pad){
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top - pad}, 500);

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

        $(window).scroll(function () {
            var iCurScrollPos = $(this).scrollTop();
            if($(this).scrollTop() >= 55) {
                $(class1).addClass('nav-fixed'); //add2
                $(class1).css("top","0")
            }
            else if ($(this).scrollTop() < 95){
                $(class1).removeClass('nav-fixed');//rem2
                $('header').removeClass('header-wrap-fixed');//add1
            }

            if ((iCurScrollPos < iScrollPos) &&  ($(this).scrollTop() >= 55) ) {
                $('header').addClass('header-wrap-fixed');//add1
                $(class1).css("top",hheadernav);
            }
            else if (iCurScrollPos > iScrollPos){
                $('header').removeClass('header-wrap-fixed');//add1
            }
            var lastScrollTop = 0;
            iScrollPos = iCurScrollPos;
        });

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
    $(window).resize(function(){
        if($(window).width() > mibile_width) {
            $('#products-nav__list').removeClass('active');
            $('#products-nav__list').removeClass('flex-off');
            $('#products-nav__list').addClass('flex-on');

            $('#header-nav__list').removeClass('active');
            $('#header-nav__list').addClass('flex-off');
            $('#header-nav__list').removeClass('flex-on');
        }else{
            $('#header-nav__list').addClass('active');
            $('#header-nav__list').addClass('flex-off');
            $('#header-nav__list').removeClass('flex-on');

            $('#products-nav__list').addClass('active');
            $('#products-nav__list').removeClass('flex-off');
            $('#products-nav__list').addClass('flex-on');

        };

    });
    if(window.matchMedia('all and (max-width: 768px)').matches)
    {
        $('.slicknav-menu__but').click(function(){
            $(  "#products-nav__list").slideToggle("slow");
            return false;
        });
        $('body').click(function(){
            $("#products-nav__list").hide();
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $("#products-nav__list").hide();
            }
        });
        $('.slicknav-menu1__but').click(function(){
            $(".icon-bars").toggleClass("icon-close");
            $( "#header-nav__list").slideToggle("slow");
            $("#products-nav__list").hide();
            $(".header-nav").toggleClass("header-nav__fixed");
            $("body").toggleClass("no-overflow");
            return false;
        });
    }

});

