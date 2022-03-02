//Derived from Stack overflow
// https://stackoverflow.com/questions/61904836/initialize-swiper
// https://stackoverflow.com/questions/70011613/swiper-js-carousel-not-working-pagination-and-navigation-in-joomla-bootstrap-5
// https://stackoverflow.com/questions/69377166/the-slider-on-swiper-js-is-not-displayed-correctly-in-the-mobile-version
// https://stackoverflow.com/questions/56337412/set-slider-swiper-to-autoplay-from-1st-slide

// Needed to make the swiper and slides appear and behave correctly

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});
