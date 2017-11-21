<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
    <meta name="keywords" content="ens, cosmodic, scenar, let medical, scenar-therapy">
    <meta name="viewport" content="width=device-width">

    <title>“LET Medical” Research Lab | ENS</title>
    <script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script type="text/javascript" src="js/script.js"></script>

    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/owl.theme.default.css" />


    <link rel="stylesheet" type="text/css" href="css/styleico.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<?php include_once 'header/header.php'; ?>
<div class="content">
    <ul class="main-carousel owl-carousel owl-theme">
        <li class="main-carousel__item">
            <div class="main-block1">
                <a href="products/ps705/ps705.php" class="content__container">
                    <div class="main-block1__txt1__wrap">
                        <div class="main-block1__txt1">
                            <p class="main-block1__txt1__p1">
                                ps<span class="main-block1__txt1__span">705</span>
                            </p>
                            <p class="main-block1__txt1__p2">
                                cosmodic
                            </p>
                        </div>
                    </div>
                    <div class="main-block1__txt2__wrap">
                        <div class="main-block1__txt2">
                            <p class="main-block1__txt2__p1">
                                Everything simple is just an ingenious camouflage of the complicated.
                            </p>
                            <p class="main-block1__txt2__p2">
                                A. A. Karasev
                            </p>
                        </div>
                    </div>
                </a>
            </div>

        </li>
        <li class="main-carousel__item main-carousel__item-temp">
            <div class="main-block1">
                <a href="products/ps705/ps705.php" class="content__container">
                    <div class="main-block1__txt1__wrap">
                        <div class="main-block1__txt1">
                            <p class="main-block1__txt1__p1">
                                ps<span class="main-block1__txt1__span">705</span>
                            </p>
                            <p class="main-block1__txt1__p2">
                                cosmodic
                            </p>
                        </div>
                    </div>
                    <div class="main-block1__txt2__wrap">
                        <div class="main-block1__txt2">
                            <p class="main-block1__txt2__p1">
                                Everything simple is just an ingenious camouflage of the complicated.
                            </p>
                            <p class="main-block1__txt2__p2">
                                A. A. Karasev
                            </p>
                        </div>
                    </div>
                </a>
            </div>

        </li>
        <li class="main-carousel__item main-carousel__item-temp">
            <div class="main-block1">
                <a href="products/ps705/ps705.php" class="content__container">
                    <div class="main-block1__txt1__wrap">
                        <div class="main-block1__txt1">
                            <p class="main-block1__txt1__p1">
                                ps<span class="main-block1__txt1__span">705</span>
                            </p>
                            <p class="main-block1__txt1__p2">
                                cosmodic
                            </p>
                        </div>
                    </div>
                    <div class="main-block1__txt2__wrap">
                        <div class="main-block1__txt2">
                            <p class="main-block1__txt2__p1">
                                Everything simple is just an ingenious camouflage of the complicated.
                            </p>
                            <p class="main-block1__txt2__p2">
                                A. A. Karasev
                            </p>
                        </div>
                    </div>
                </a>
            </div>

        </li>


    </ul>
    <div class="main-block2">
        <a href="products/ens/ens.php" class="content__container">
            <div class="main-block2__txt">
                <p class="main-block2__txt__p1">
                    ens
                </p>
            </div>
        </a>
    </div>
</div>
<?php include_once 'footer/footer.php'; ?>

<script>
    $(document).ready(function(){

        function windowSize(){
            if($(window).width() > 768){

                $('.owl-carousel').owlCarousel({

//        loop:true, //Зацикливаем слайдер
                    margin:0, //Отступ от элемента справа в 50px
                    nav: false, //Отключение навигации
                    autoplay: true,
                    loop: true,
//                    autoplay:true, //Автозапуск слайдера
                    smartSpeed:1000, //Время движения слайда
//                    autoplayTimeout: 1000, //Время смены слайда
//                    autoplayHoverPause: true,
                    autoplaySpeed: 500,
                    mouseDrag: true,
                    touchDrag: true,
                    navText: false,
                    dots: true,
//                    dotsEach: 3,
                    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                        0:{
                        },
                        780:{
                            items:1
                        },
                        1000:{
                            items:1
                        }
                    }
                });
                
                $('.owl-carousel').owlCarousel({

//        loop:true, //Зацикливаем слайдер
                    margin:0, //Отступ от элемента справа в 50px
                    nav: false, //Отключение навигации
                    autoplay: true
                }

            }
        }
        $(window).load(windowSize); // при загрузке
        $(window).resize(windowSize)
    });
</script>
<script>
    $(document).ready(function(){
        navmenu('.products-nav');
//        navmenu('.tech-nav');
    });
</script>

</body>
</html>