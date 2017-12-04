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
    <script src="js/slick.min.js"></script>

    <script type="text/javascript" src="js/script.js"></script>

    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/slick-theme.css" />


    <link rel="stylesheet" type="text/css" href="css/styleico.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<?php include_once 'header/header.php'; ?>
<div class="content">
    <ul class="main-carousel owl-carousel owl-theme slick">
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
            <div class="main-block1 main-block1-2">
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
            <div class="main-block1 main-block1-3">
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
                $('.slick').slick({
                    autoplay: true,
                    autoplaySpeed: 900,
        //            appendArrows: true,
                    dots: true,
                    infinite: true,
                    speed: 800,
                    fade: true
                });
            };
        };
        $(window).load(windowSize); // при загрузке
        $(window).resize(windowSize)
        $('.slick').slick('unslick');

    });
</script>

</body>
</html>