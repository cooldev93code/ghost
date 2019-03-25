// Global controller for scrollmagic scenes
let controller = new ScrollMagic.Controller();

$(document).ready(function () {
    $('body').removeClass('loading');

    if ($('html.no-touch').length) { // hide parallax background on touch devices
        $('.parallax-bg').each(function () {
            let tlBg = new TimelineMax(),
                self = $(this);
            if (self.hasClass('parallax-bg-large')) {
                let elemHeight = self.height() / 1.7;
                tlBg.fromTo(self, 1, { css: { backgroundPosition: 'center -100%' } }, { css: { backgroundPosition: 'center 100%' }, ease: Power0.easeNone });
                var scene = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 0.8,
                    duration: elemHeight
                })
                    .setTween(tlBg)
                    .addTo(controller)
                    ;
            } else {
                let elemHeight = self.height() * 1.7;
                tlBg.fromTo(self, 1, { css: { backgroundPosition: 'center 250px' } }, { css: { backgroundPosition: 'center -250px' }, ease: Power0.easeNone });
                var scene = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 0.9,
                    duration: elemHeight
                })
                    .setTween(tlBg)
                    .addTo(controller)
                    ;
            }
        });
    }



    //Hero Slider
    $('.hero__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    });

    // Parallax Background


    // Hero section animation
    let introTitle = new SplitText('.split-txt', { type: "words,chars" }),
        heroSlider = $('.hero__slider'),
        burgerBtn = $('.hamburger-box'),
        logo = $('.logo--header'),
        counterWidget = $('.counter-widget')
        ;

    let introTl = new TimelineMax();

    introTl
        .add('startanime')
        .fromTo(heroSlider, 1.2, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power2.easeIn })
        .staggerFromTo(introTitle.chars, 1.2, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power2.easeIn }, 0.04, "startanime+=0.7")
        .add('interval')
        .fromTo(burgerBtn, 0.8, { y: '-20', autoAlpha: '0' }, { y: '0', autoAlpha: '1', ease: Power3.easeIn }, "interval-=0.5")
        .fromTo(logo, 0.8, { y: '-20', autoAlpha: '0' }, { y: '0', autoAlpha: '1', ease: Power3.easeIn }, "interval-=0.5")
        .fromTo(counterWidget, 0.8, { y: '20', autoAlpha: '0' }, { y: '0', autoAlpha: '1', ease: Power3.easeIn }, "interval-=0.5")
        ;

    //Blog Panel Module
    $('.blog-wrap').each(function (count) {
        let tlBlog = new TimelineMax();
        let blogImg = $(this).find('.blog-panel__media'),
            blogDesc = $(this).find('.blog-panel__desc'),
            blogHead = $(this).find('.blog-panel__desc h2'),
            blogLink = $(this).find('.blog-panel__desc a.link');

        tlBlog
            .fromTo(blogImg, 0.5, { y: '50', autoAlpha: '0' }, { y: '0', autoAlpha: '1', ease: Power3.ease })
            .fromTo(blogDesc, 0.5, { y: '50', autoAlpha: '0' }, { y: '0', autoAlpha: '1', ease: Power3.ease }, '=-0.4')
            .fromTo(blogHead, 1, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power3.ease }, '=-0.4')
            .fromTo(blogLink, 1, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power3.ease }, '=-0.8');

        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.6
        })
            .setTween(tlBlog)
            .addTo(controller);
    });


    //Clientele Module

    //shuffle function
    function shuffle(o) {
        for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
    let tlClientele = new TimelineMax();
    let clienteleTitle = $('.clientele .section-title'),
        clientLIst = $('.clientele__list li');

    tlClientele
        .fromTo(clienteleTitle, 0.5, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power3.ease });


    shuffle(clientLIst).each(function () {
        tlClientele
            .fromTo(this, 0.5, { scale: 1.1, autoAlpha: '0' }, { scale: 1, autoAlpha: '1', ease: Power4.ease }, "-=0.3")

    });
    new ScrollMagic.Scene({
        triggerElement: '.clientele',
        triggerHook: 0.5
    })
        .setTween(tlClientele)
        .addTo(controller);






    //Services Panel Module
    //Services Sliders
    $('.services__nav').slick({
        asNavFor: '.services__slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    variableWidth: true
                }
            }
        ]
    });
    $('.services__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 9000,
        asNavFor: '.services__nav',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

    let tlServices = new TimelineMax();
    let servicesTitle = $('.services .section-title'),
        servicesLIst = ('.services__nav'),
        sericesDesc = $('.services__slider');

    tlServices
        .fromTo(servicesTitle, 0.5, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power3.ease })
        .fromTo(servicesLIst, 0.5, { autoAlpha: '0', y: '20' }, { autoAlpha: '1', y: '0', ease: Power3.ease }, "=-0.3")
        .fromTo(sericesDesc, 0.5, { autoAlpha: '0', y: '20' }, { autoAlpha: '1', y: '0', ease: Power3.ease }, "=-0.3")
        ;
    new ScrollMagic.Scene({
        triggerElement: '.services',
        triggerHook: 0.5
    })
        .setTween(tlServices)
        .on("enter", function (event) {
            $('.services__slider').slick('slickGoTo', 0);
        })
        .addTo(controller);




    //Technology  Module
    $('.app__list').slick({
        asNavFor: '.app--slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        arrows: false,
        variableWidth: true,
        infinite: false,
        fade: true
    });
    $('.app--slider').slick({
        autoplay: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        infinite: false,
        swipe: true,
        touchMove: true,
        speed: 1000,
        dots: true,
        useTransform: true,
        asNavFor: '.app__list',
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    });
    // Pause All Videos
    function pauseAllVideos() {
        $('.app--slider .slick-slide .app__video').each(function () {
            $(this).get(0).pause();
        });
    }
    // Play Active Video
    function playActiveVideo() {
        let currentVid = $('.app--slider .slick-active .app__video').get(0);
        currentVid.play();
    }
    // On before slide change
    $('.app--slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        pauseAllVideos();

    });
    // On after slide change
    $('.app--slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        playActiveVideo();
    });

    // Technology Section
    let tlApp = new TimelineMax();
    let appNav = $('.apps-panel .app__nav'),
        appSlider = ('.app--slider');

    tlApp
        .fromTo(appNav, 0.5, { autoAlpha: '0', y: '20' }, { autoAlpha: '1', y: '0', ease: Power3.ease }, "=-0.3")
        .fromTo(appSlider, 0.5, { autoAlpha: '0', y: '20' }, { autoAlpha: '1', y: '0', ease: Power3.ease }, "=-0.3")
        ;

    new ScrollMagic.Scene({
        triggerElement: '.app',
        triggerHook: 0.5
    })
        .setTween(tlApp)
        .addTo(controller);


    // Play/Pause video
    new ScrollMagic.Scene({
        triggerElement: '.app',
        triggerHook: 0.3,
        duration: "80%"
    })

        .on("enter", function (event) {
            playActiveVideo();
        })
        .on("leave", function (event) {
            pauseAllVideos();
        })
        // .addIndicators({
        //     name: "Slider Scene (duration: '100%')"
        // })
        // add indicators (requires plugin)         
        .addTo(controller);



    //Partners Panel Module
    let tlPartners = new TimelineMax();
    let partnersTitle = $('.partners .section-title'),
        partnersLIst = ('.partners__list li');

    tlPartners
        .fromTo(partnersTitle, 0.5, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power3.ease })
        .staggerFromTo(partnersLIst, 1, { autoAlpha: '0', y: '40' }, { autoAlpha: '1', y: '0', ease: Power3.ease }, 0.07, "=-0.4")
        ;
    new ScrollMagic.Scene({
        triggerElement: '.partners',
        triggerHook: 0.4
    })
        .setTween(tlPartners)
        .addTo(controller);

    //Footer Module
    let tlFooter = new TimelineMax();
    let footerMod = $('#footer');

    tlFooter
        .fromTo(footerMod, 2, { autoAlpha: '0' }, { autoAlpha: '1', ease: Power3.ease })
        ;
    new ScrollMagic.Scene({
        triggerElement: '#footer',
        triggerHook: 1
    })
        .setTween(tlFooter)
        .addTo(controller);






    $('.hamburger-box').on("click", function () {
        $('.primary-nav').toggleClass('open');
    });
    $('.close-btn').on("click", function () {
        $('.primary-nav').removeClass('open');
    });






});





