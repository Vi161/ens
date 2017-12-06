$(document).ready(function() {
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
    var mark_menu = function(){
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
    };
    var window_width = function (){
        var mibile_width = 767;
        if($(window).width() < mibile_width) {
            isMobileWidth=true;
//            scroll_mobile();
//            menu_click_mobile()
        }
        else if($(window).width() >= mibile_width) {
            isMobileWidth=false;

//            scroll_desctop();
//            menu_click_desctop();
        }
    }
    function scroll_mobile(){
            var iScrollPos = 0;
            var tempScrollTop, currentScrollTop = 0;

        $(window).scroll(function () {
            if (isMobileWidth == true)
                {
                    console.log("<<<scroll");
                    var iCurScrollPos = $(this).scrollTop();
                    $('header').removeClass('header-wrap-fixed');//rem1
                    $('header').removeClass('header-wrap-fixed-top');//rem2
                    $(".products-nav").removeClass('nav-lip0');//rem3
                    $(".products-nav").removeClass('nav-lip2');//rem4
                    $(".products-nav").removeClass('nav-fixed');//rem5
                    if($(this).scrollTop() >= 55) {
                        $(".products-nav").addClass('nav-fixed'); //add5
                    }
                    else if ((iCurScrollPos < iScrollPos)  ) {
                        $(".products-nav").removeClass('nav-fixed');//rem5
                        //                    $('header').removeClass('header-wrap-fixed');//add1
                    }
                    var lastScrollTop = 0;
                    iScrollPos = iCurScrollPos;
                }
                else if (isMobileWidth == false){
                    currentScrollTop = $(window).scrollTop();
                $('header').addClass('header-wrap-fixed');//add1
                $('header').addClass('header-wrap-fixed-top');//add2

                if ((tempScrollTop < currentScrollTop ) && (tempScrollTop > 55)){
                        $('header').addClass('header-wrap-fixed');//add1
                        $('header').removeClass('header-wrap-fixed-top');//rem2
                        $(".products-nav").addClass('nav-fixed'); //add5
                        $(".products-nav").removeClass('nav-lip2');//rem4
                        $(".products-nav").addClass('nav-lip0');//add3
                    }
                    else if (tempScrollTop > currentScrollTop ){
                        $('header').addClass('header-wrap-fixed');//add1
                        $('header').addClass('header-wrap-fixed-top');//add2
                        $(".products-nav").addClass('nav-lip2');//add4
                    }
                    else if (tempScrollTop < 85){
                        $('header').removeClass('header-wrap-fixed');//rem1
                        $('header').removeClass('header-wrap-fixed-top');//rem2
                        $(".products-nav").removeClass('nav-lip0');//rem3
                        $(".products-nav").removeClass('nav-lip2');//rem4
                        $(".products-nav").removeClass('nav-fixed');//rem5
                    }
                    tempScrollTop = currentScrollTop;
                }
        });
    };
    function menu_mobile(){
        var checkblock;

        if (isMobileWidth == true){
                console.log("<<<click");
//                $("#header-nav__list").css("display","block");
//                $("#header-nav__list").hide();
////                $("#products-nav__list").css("display","block");
//                $("#products-nav__list").hide();
//
//                $(".icon-bars").removeClass("icon-close");
                $('.slicknav-menu__but').click(function(){
                        $("#products-nav__list").toggle(display);
                    console.log('click');
                });
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

                $('body').click(function(){
//                    $("#products-nav__list").hide();
                });

            checkblock = true;
            console.log(checkblock);

            function clickmob(){
                    if (checkblock){
                        $("#header-nav__list").addClass('header-nav__block');
                        $(".icon-bars").addClass("icon-close");
                        console.log(checkblock);
//                    $("#header-nav__list").toggleClass('header-nav__block');
                    }
                    else {
                        $("#header-nav__list").removeClass('header-nav__block');
                        $(".icon-bars").removeClass("icon-close");
                        console.log(checkblock);

                    }
                    checkblock = !checkblock;
                    return false;
                };
//                $('.slicknav-menu1__but').click(clickmob);
                $('.slicknav-menu1__but').bind( 'click', clickmob );
                $("body").click(function(e) {
                    if(($(e.target).closest("#header-nav__list").length==0)&&
                        ($(e.target).closest(".header-nav__logo").length==0)){
                        $("#header-nav__list").removeClass('header-nav__block');
                        $('.icon-bars').removeClass('icon-close');
                        checkblock = true;
                    }
                });
            }
            else if (isMobileWidth == false){
                console.log(">>>click");
                checkblock = false;
                $('.icon-bars').removeClass('icon-close');
                $("#header-nav__list").removeClass('header-nav__block');
//                $("#products-nav__list").show();
//                $("#products-nav__list").css("display","flex");
//                $("#header-nav__list").show();
//                $("#header-nav__list").css("display","flex");
//                $(".header-nav__list1-1").hide();
                $('.header-nav__item1').mouseover(function(){
                    $(this).children(".header-nav__list1-1").show();
                    $(this).css("border-bottom","2px solid #556B2F");
                });
                $('.header-nav__item1').mouseout(function(){
                    $(".header-nav__list1-1").hide();
                    $(this).css("border-bottom","2px solid transparent");
                });
            }

    };

//*************************************/
    golink();
//    mark_menu();
    window_width();
    $( window ).resize(function() {
        window_width();
        menu_mobile()
    });
    menu_mobile();
//    scroll_mobile();

});
