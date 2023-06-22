$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });

    $(".core-menu li").hover(
        function () {
            //i used the parent ul to show submenu
            $(this).children('ul').slideDown('fast');
        },
        //when the cursor away 
        function () {
            $('ul', this).slideUp('fast');
        });
    //this feature only show on 600px device width
    $(".hamburger-menu").click(function () {
        $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").slideToggle("fast");
    });


    $('.catalog-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    var slickopts = {
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 900,
        rows: 2, // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/slide-left-arrow.svg"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="images/slide-right-arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    rows: 2 // This doesn't appear to work in responsive (Mac/Chrome)
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
                }
            }]
    };

    $('.carousel').slick(slickopts);

    // ////
    var slickopts = {
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 900,
        rows: 2, // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/slide-left-arrow.svg"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="images/slide-right-arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    rows: 2 // This doesn't appear to work in responsive (Mac/Chrome)
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
                }
            }]
    };

    $('.novelties-carousel').slick(slickopts);

    // ////////////////
    $('.sale-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/slide-left-arrow.svg"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="images/slide-right-arrow.svg"></button>',
        dots: false,
        speed: 900,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // ////////////////
    $('.discount-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/slide-left-arrow.svg"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="images/slide-right-arrow.svg"></button>',
        dots: false,
        speed: 900,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // ////////////////
    $('.best-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/slide-white-left-arrow.svg"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="images/slide-white-right-arrow.svg"></button>',
        dots: false,
        speed: 900,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});


try {
    (function () {

        var parent = document.querySelector(".range-slider");
        if (!parent) return;

        var
            rangeS = parent.querySelectorAll("input[type=range]"),
            numberS = parent.querySelectorAll("input[type=number]");

        rangeS.forEach(function (el) {
            el.oninput = function () {
                var slide1 = parseFloat(rangeS[0].value),
                    slide2 = parseFloat(rangeS[1].value);

                if (slide1 > slide2) {
                    [slide1, slide2] = [slide2, slide1];
                    // var tmp = slide2;
                    // slide2 = slide1;
                    // slide1 = tmp;
                }

                numberS[0].value = slide1;
                numberS[1].value = slide2;
            }
        });

        numberS.forEach(function (el) {
            el.oninput = function () {
                var number1 = parseFloat(numberS[0].value),
                    number2 = parseFloat(numberS[1].value);

                if (number1 > number2) {
                    var tmp = number1;
                    numberS[0].value = number2;
                    numberS[1].value = tmp;
                }

                rangeS[0].value = number1;
                rangeS[1].value = number2;

            }
        });

    })();
} catch (error) {
    console.log(error);
} try {
    const inctBtn = document.querySelector('.incr-btn'),
        decrBtn = document.querySelector('.decr-btn'),
        countvalue = document.querySelector('.countvalue');

    inctBtn.addEventListener('click', () => {
        console.log('ssd');
        countvalue.innerText = parseInt(countvalue.innerText) + 1;
    })
    decrBtn.addEventListener('click', () => {
        console.log('ssd');
        countvalue.innerText = parseInt(countvalue.innerText) - 1;
    })
} catch (error) {
    console.log(error);
}
try {
    // product settings
    const openBtn = document.querySelector('#media-block__btn'),
        productSettings = document.querySelector('#media-col');

    openBtn.addEventListener("click", () => {
        console.log(productSettings);
        productSettings.classList.toggle('active-show__hide')
    })
} catch (error) {
    console.log(error);
}
// slider
try {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
} catch (error) {
    console.log(error);
}


try {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 5,
            },
            640: {
                slidesPerView: 7,
            },
            780: {
                slidesPerView: 8,
            }
        }
    });

    var swiper = new Swiper(".mySwiperbottom", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    document.querySelector('.load3').addEventListener('click', function () {
        document.querySelector('.last3').classList.remove('pharhid')
        document.querySelector('.load3').style.display = 'none'
    })
} catch (error) {
    console.log(error);
}

try {
    var swiper = new Swiper(".mySwiperthird", {
        spaceBetween: 30,
        slidesPerView: 4,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            780: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
    });
} catch (error) {
    console.log(error);
}