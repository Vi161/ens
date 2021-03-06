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

    function mouseover_header_menu(){
        $(this).children(".header-nav__list1-1").show();
        $(this).css("border-bottom","2px solid #556B2F");
        console.log("mouse")
    };
    function mouseout_header_menu(){
//                $(this).children(".header-nav__list1-1").removeClass('header-nav__block');
        $(this).children(".header-nav__list1-1").hide();
        $(this).css("border-bottom","2px solid transparent");
    };
    function click_header_menu(){
        console.log('click mob')
        var thisclass = $(this).find(".header-nav__list1-1");
        var notthisclass = $('.header-nav__item1').not(this).find(".header-nav__list1-1");
        $(this).css("border","none");
        notthisclass.hide();
        thisclass.toggle(display);
        $('.header-nav__item1').not(this).removeClass('weight_bold');
        $(this).toggleClass('weight_bold');
    };
    function scroll_window(){
        var iScrollPos = 0;
        var tempScrollTop, currentScrollTop = 0;
        if (isMobileWidth == true){
            $('header').removeClass('header-wrap-fixed');//rem1
            $('header').removeClass('header-wrap-fixed-top');//rem2
            $(".products-nav").removeClass('nav-lip0');//rem3
            $(".products-nav").removeClass('nav-lip2');//rem4
            $(".products-nav").removeClass('nav-fixed');//rem5
            function scroll_mobile(){
                var iCurScrollPos = $(this).scrollTop();
                if($(this).scrollTop() >= 55) {
                    $(".products-nav").addClass('nav-fixed'); //add5
                }
                else if ((iCurScrollPos < iScrollPos)  ) {
                    $(".products-nav").removeClass('nav-fixed');//rem5
                }
                var lastScrollTop = 0;
                iScrollPos = iCurScrollPos;
            }
            $(window).unbind('scroll',scroll_desktop);
            $(window).bind('scroll',scroll_mobile);
        }
        else if (isMobileWidth == false){
            $('header').addClass('header-wrap-fixed');//add1
            $('header').addClass('header-wrap-fixed-top');//add2
            function scroll_desktop(){
                currentScrollTop = $(window).scrollTop();
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
            $(window).unbind('scroll',scroll_mobile);
            $(window).bind('scroll',scroll_desktop);
        }
    };
    var window_width = function (){
        var mibile_width = 767;
        if($(window).width() < mibile_width) {
            isMobileWidth=true;
            console.log('width mob')
            $('.header-nav__item1').unbind( 'mouseover',mouseover_header_menu);
            $('.header-nav__item1').unbind( 'mouseout',mouseout_header_menu);
            $('.header-nav__item1').bind('click',click_header_menu);

        }
        else if($(window).width() >= mibile_width) {
            isMobileWidth=false;
            console.log('width desc')
            $('.header-nav__item1').unbind( 'click',click_header_menu);
            $('.header-nav__item1').bind( 'mouseover',mouseover_header_menu);
            $('.header-nav__item1').bind( 'mouseout',mouseout_header_menu);
        }
    }
    function medias(){
        var mq = window.matchMedia('(max-width: 767px)');
        if(mq.matches) {
            console.log('<700');
            isMobileWidth=true;
            console.log('width mob')
            $('.header-nav__item1').unbind( 'mouseover',mouseover_header_menu);
            $('.header-nav__item1').unbind( 'mouseout',mouseout_header_menu);
            $('.header-nav__item1').bind('click',click_header_menu);

        } else {
            isMobileWidth=false;
            console.log('>700');
            console.log('width desc')
            $('.header-nav__item1').unbind( 'click',click_header_menu);
            $('.header-nav__item1').bind( 'mouseover',mouseover_header_menu);
            $('.header-nav__item1').bind( 'mouseout',mouseout_header_menu);
        }
        mq.addListener(function(changed) {
            if(changed.matches) {
                console.log('<700');
                $('.header-nav__item1').unbind( 'mouseover',mouseover_header_menu);
                $('.header-nav__item1').unbind( 'mouseout',mouseout_header_menu);
                $('.header-nav__item1').bind('click',click_header_menu);
                isMobileWidth=true;
            } else {
                console.log('>700');
                isMobileWidth=false;
                $('.header-nav__item1').unbind( 'click',click_header_menu);
                $('.header-nav__item1').bind( 'mouseover',mouseover_header_menu);
                $('.header-nav__item1').bind( 'mouseout',mouseout_header_menu);
            }
        });
    }

    function menu_mobile(){
        var checkblock;
        var checkblock2;
//        $(".background_op").hide();
        checkblock = false;
        checkblock2 = false;
        function click_slick(){
            $('.header-nav__item1').not(this).removeClass('weight_bold');
            if (checkblock){
                $("#header-nav__list").addClass('header-nav__block');
                $(".icon-bars").addClass("icon-close");
                $(".background_op").show();
                $("#products-nav__list").removeClass('header-nav__block');
                checkblock2 = true;
                console.log('cliKc');
            }
            else {
                $("#header-nav__list").removeClass('header-nav__block');
                $(".icon-bars").removeClass("icon-close");
                $(".background_op").hide();
                $('.header-nav__list1-1').hide();
            }
            checkblock = !checkblock;
            return false;
        };
        $('.slicknav-menu1__but').bind('click', click_slick );
        $('.slicknav-menu__but').bind('click', click_slick_prod );

        function click_slick_prod(){
            console.log('prodslick')
            if (checkblock2){
                $("#products-nav__list").addClass('header-nav__block');
            }
            else {
                $("#products-nav__list").removeClass('header-nav__block');
            }
            checkblock2 = !checkblock2;
            return false;
        };
//        $("body").click(function(e) {
//            if(($(e.target).closest("#header-nav__list").length==0)&&
//                ($(e.target).closest(".header-nav__logo").length==0)){
//                $("#header-nav__list").removeClass('header-nav__block');
//                $('.icon-bars').removeClass('icon-close');
//                $(".background_op").hide();
//                $("#products-nav__list").removeClass('header-nav__block');
//                $(".header-nav__list1-1").hide();
//                $(".background_op").hide();
//                checkblock = true;
//            }
//        });
        $(".background_op").click(function() {
                $("#header-nav__list").removeClass('header-nav__block');
                $('.icon-bars').removeClass('icon-close');
                $(".background_op").hide();
                $("#products-nav__list").removeClass('header-nav__block');
                $(".header-nav__list1-1").hide();
                $(".background_op").hide();
                checkblock = true;
        });

        if (isMobileWidth == true){
//            $('.header-nav__item1').unbind('mouseover',mouseover_header_menu);
//            $('.header-nav__item1').unbind('mouseout',mouseout_header_menu);
//            $('.header-nav__item1-products').bind('click',click_prod);

//            $('.header-nav__item1').bind('click',click_header_menu);
            checkblock = true;

            checkblock2 = true;
        }
        else if (isMobileWidth == false){
//            $('.header-nav__item1').unbind( 'click',click_header_menu);
            checkblock = false;
            $('.icon-bars').removeClass('icon-close');
            $("#header-nav__list").removeClass('header-nav__block');
                    $(".background_op").hide();

//            $('.header-nav__item1').bind('mouseover',mouseover_header_menu);
//            $('.header-nav__item1').bind('mouseout',mouseout_header_menu);
        }
    };

//*************************************/
    golink();
//    mark_menu();
//    window_width();
    $(window).on('resize', function() {
//        window_width();
        scroll_window();
        menu_mobile()
    });
    medias();
    menu_mobile();
    scroll_window();

});
