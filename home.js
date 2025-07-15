document.addEventListener('DOMContentLoaded', function () {
    // Slider Topo
    const swiperTopo = new Swiper('#swiper-topo', {
        loop: true,
        spaceBetween: 40,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true
    });

    // Slider de Notícias
    const swiperNoticias = new Swiper('#swiper-noticias', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            el: '.slider-noticias-pagination',
            clickable: true,
            dynamicBullets: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.slider-noticias-button-next',
            prevEl: '.slider-noticias-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        },
    });

    // Slider de Cursos
    const swiperCursos = new Swiper('.cursos-swiper', {
        loop: true,
        spaceBetween: 40,
        slidesPerView: 1,
        pagination: {
            el: '.cursos-swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.cursos-swiper-button-next',
            prevEl: '.cursos-swiper-button-prev',
        }
    });
});