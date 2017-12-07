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
        var checkblock1;
        var checkblock2;


        if (isMobileWidth == true){
            checkblock = true;
            function click_slick(){
                if (checkblock){
                    $("#header-nav__list").addClass('header-nav__block');
                    $(".icon-bars").addClass("icon-close");
                    console.log('cliKc');
                    $('.header-nav__item1').unbind( 'mouseover',mouseover_header_menu);
                    $('.header-nav__item1').unbind( 'mouseout',mouseout_header_menu);
                }
                else {
                    $("#header-nav__list").removeClass('header-nav__block');
                    $(".icon-bars").removeClass("icon-close");
                }
                checkblock = !checkblock;
                return false;
            };
//                $('.slicknav-menu1__but').click(click_slick);
            $('.slicknav-menu1__but').bind( 'click', click_slick );
            $("body").click(function(e) {
                if(($(e.target).closest("#header-nav__list").length==0)&&
                    ($(e.target).closest(".header-nav__logo").length==0)){
                    $("#header-nav__list").removeClass('header-nav__block');
                    $('.icon-bars').removeClass('icon-close');
                    checkblock = true;
                }
            });
            checkblock2 = true;
            function click_slick_prod(){
                if (checkblock2){
                    $("#products-nav__list").addClass('header-nav__block');
                }
                else {
                    $("#products-nav__list").removeClass('header-nav__block');
                }
                checkblock2 = !checkblock2;
                return false;
            };
            $('.slicknav-menu__but').bind( 'click', click_slick_prod );

            checkblock1 = true;
            function click_header_menu(){
                $('.header-nav__item1').unbind( 'mouseover',mouseover_header_menu);
                $('.header-nav__item1').unbind( 'mouseout',mouseout_header_menu);
                var thisclass = $(this).find(".header-nav__list1-1");
                $(this).css("border","none  ");
                $('.header-nav__item1>.header-nav__block').removeClass('header-nav__block');
                if (checkblock1){
                    thisclass.addClass('header-nav__block');
                }
                else {
                    thisclass.removeClass('header-nav__block');
                }
                checkblock1 = !checkblock1;
            };
            $('.header-nav__item1').bind( 'click',
                click_header_menu
//                $(this).find(".header-nav__list1-1").toggle(display)
            );

            $('body').click(function(){
                $("#products-nav__list").removeClass('header-nav__block');
            });
        }
        else if (isMobileWidth == false){
            checkblock = false;
            $('.header-nav__item1').unbind( 'click', click_header_menu);
            $('.slicknav-menu__but').unbind( 'click', click_slick_prod );

            $('.icon-bars').removeClass('icon-close');
            $("#header-nav__list").removeClass('header-nav__block');
            function mouseover_header_menu(){
                $(this).children(".header-nav__list1-1").addClass('header-nav__block');
                $(this).css("border-bottom","2px solid #556B2F");
                console.log("mouse")
            };
            function mouseout_header_menu(){
                $(this).children(".header-nav__list1-1").removeClass('header-nav__block');
                $(this).css("border-bottom","2px solid transparent");

            };
            $('.header-nav__item1').bind('mouseover',mouseover_header_menu);
            $('.header-nav__item1').bind('mouseout',mouseout_header_menu);
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
