"use strict";

jQuery(document).ready(function ($) {
    if (document.documentElement.clientWidth > 991 && $('.grid').length) {
        var scroll = function scroll() {
            TweenMax.to($('.grid'), gridSpeed, {
                y: "-".concat(gridOffset, "px"),
                ease: Linear.easeNone,
                onComplete: setStart
            });
            console.log('+');
        };

        var setStart = function setStart() {
            $('.book-item').removeClass('faded');
            TweenMax.set($('.grid'), {
                y: "".concat(colGridH, "px"),
                onComplete: scroll
            });
        };

        var step = function step() {
            requestAnimationFrame(step);
            $('.book-item').each(function () {
                if ($(this).offset().top < -($(this).outerHeight() / 3.5)) {
                    $(this).addClass('faded');
                }
            });
        };

        $('.grid-scroll').css({
            'height': "".concat($('.grid-scroll').offset().top, "px")
        });

        var _offset = $('.grid-wrapper').offset().top + 60;

        $('.grid-scroll').css({
            'padding-top': "".concat(_offset, "px")
        });
        var gridOffset = $('.grid').outerHeight() + $('.grid').offset().top;
        var colGridH = $('.col-grid').outerHeight();
        var gridSpeed = $('.book-item').length * 3.5;
        $(window).on('load', function () {
            scroll();
        });
        requestAnimationFrame(step);
    } // Features Section Animations


    {
        if ($('.feature-item').length) {
            // Mobile Animation
            if (document.documentElement.clientWidth < 992) {
                TweenMax.set($('.feature-item'), {
                    opacity: 0,
                    y: '35px'
                });
                $('.feature-item:not(.animated)').on('inview', function (event, isInView) {
                    if (isInView) {
                        var item = $(this);
                        TweenMax.to(item, 2.5, {
                            opacity: 1,
                            y: '0px',
                            ease: Power4.easeOut,
                            onComplete: function onComplete() {
                                item.addClass('animated');
                            }
                        });
                    }
                });
            } else {
                // Desktop Animation
                TweenMax.set($('.feature-item'), {
                    opacity: 0,
                    y: '35px'
                });
                $('.features-section .container').on('inview', function (event, isInView) {
                    if (isInView) {
                        var item = $(this);
                        TweenMax.staggerTo($('.feature-item'), 1.5, {
                            y: 0,
                            opacity: 1,
                            ease: Power3.easeOut,
                            onComplete: function onComplete() {
                                item.addClass('animated');
                            }
                        }, 0.15);
                    }
                });
            }
        }
    } // Section Bestsellers

    {
        if ($('.section-bestsellers').length && document.documentElement.clientWidth > 991) {
            var roundSize = 1440;
            var offset = $('.section-bestsellers').offset().top - $('.section-partners').offset().top;
            var roundOffset = 570;
            var roundBottomOffset = 400;
            var browserW = document.documentElement.clientWidth;

            if (browserW >= 1600) {
                roundSize = 1400;
                roundOffset = 500;
            } else if (browserW >= 1440 && browserW < 1600) {
                roundSize = 1250;
                roundOffset = 400;
            } else if (browserW >= 1366 && browserW < 1440) {
                roundSize = 1080;
                roundOffset = 100;
            } else if (browserW >= 1200 && browserW < 1366) {
                roundBottomOffset = 300;
                roundSize = 950;
                roundOffset = 200;
            } else if (browserW >= 992 && browserW < 1200) {
                roundBottomOffset = 300;
                roundSize = 850;
                roundOffset = 150;
            } // Partners Section


            $('.part-partners:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to(item, 1.2, {
                        width: "55%",
                        ease: Power4.easeInOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            var controller = new ScrollMagic.Controller(); // --------------------------------------------------------------------------- Set Round to Red

            var timeline1 = new TimelineMax();
            timeline1.set($(".round"), {
                y: 0,
                x: 0
            });
            timeline1.to($(".round img"), 0.5, {
                opacity: 0,
                ease: Power3.easeInOut
            }, 'start');
            timeline1.to($(".round"), 1.5, {
                backgroundColor: '#FF6B56',
                width: "".concat(roundSize, "px"),
                height: "".concat(roundSize, "px"),
                left: 'auto',
                right: '50%',
                x: '50%',
                y: "".concat(offset - roundOffset, "px"),
                ease: Power4.easeInOut
            }, 'start');
            timeline1.add('start', 1.5);
            var scene1 = new ScrollMagic.Scene({
                triggerElement: ".books-grid",
                offset: -200
            }).setTween(timeline1).addTo(controller); //   .addIndicators({name: "Round to red"});
            // ----------------------------------------------------------------------- Set Round to Center

            var timeline2 = new TimelineMax();
            timeline2.to($('.round'), 1, {
                backgroundColor: '#E7E0D0',
                y: "".concat(offset, "px"),
                ease: Power3.easeInOut
            });
            var scene2 = new ScrollMagic.Scene({
                triggerElement: ".books-grid",
                offset: 350
            }).setTween(timeline2).addTo(controller); //  .addIndicators({name: "Round to Center"});
            // ----------------------------------------------------------------------- Set Round to Bottom

            var timeline3 = new TimelineMax();
            timeline3.to($('.round'), 1, {
                backgroundColor: '#E6ECEF',
                y: "".concat(offset + roundBottomOffset, "px"),
                ease: Power3.easeInOut
            });
            var scene3 = new ScrollMagic.Scene({
                triggerElement: ".books-grid",
                offset: 850
            }).setTween(timeline3).addTo(controller); //  .addIndicators({name: "Round to Bottom"});
        }
    } // About Section Animations

    {
        if ($('.brain-part-animated').length) {
            if (document.documentElement.clientWidth >= 992) {
                $('.brain-part-animated:not(.animated)').on('inview', function (event, isInView) {
                    if (isInView) {
                        var item = $(this);
                        TweenMax.to(item, 1.5, {
                            width: '28%',
                            ease: Power4.easeOut,
                            onComplete: function onComplete() {
                                item.addClass('animated');
                            }
                        });
                    }
                });
            }

            TweenMax.set($('.section-about .section-title, .section-about .section-subtitle'), {
                opacity: 0,
                y: '15px'
            });
            TweenMax.set($('.section-about .counter'), {
                opacity: 0,
                y: '35px'
            });
            $('.section-about .section-title:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-about .section-title'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            $('.section-about .section-subtitle:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-about .section-subtitle:not(.animated)'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            $('.section-about .counters').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.staggerTo($('.section-about .counters .counter'), 1.5, {
                        y: 0,
                        opacity: 1,
                        ease: Power3.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    }, 0.15);
                }
            });
        }
    } // Contact Section Animations

    {
        if ($('.section-contact').length) {
            TweenMax.set($('.section-contact .section-title, .section-contact .section-subtitle, .section-contact .btn-wrapper ,  .section-contact .socials-btn .btn-wrap'), {
                opacity: 0,
                y: '15px'
            });
            $('.section-contact .section-title:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-contact .section-title:not(.animated)'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            $('.section-contact .section-subtitle:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-contact .section-subtitle:not(.animated)'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            $('.section-contact .btn-wrapper:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-contact .btn-wrapper:not(.animated)'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            $('.section-contact .socials-btn:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.staggerTo($('.section-contact .socials-btn:not(.animated) .btn-wrap'), 1.5, {
                        y: 0,
                        opacity: 1,
                        ease: Power3.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    }, 0.15);
                }
            });
        }
    } // Section Partners

    {
        if ($('.section-partners').length && document.documentElement.clientWidth < 992) {
            TweenMax.set($('.section-partners .section-title, .section-partners .part-partners, .section-partners .part-author'), {
                opacity: 0,
                y: '15px'
            });
            $('.section-partners .section-title:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-partners .section-title:not(.animated)'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            $(' .section-partners .part-partners:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-partners .part-partners:not(.animated)'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
            $('.section-partners .part-author:not(.animated)').on('inview', function (event, isInView) {
                if (isInView) {
                    var item = $(this);
                    TweenMax.to($('.section-partners .part-author:not(.animated)'), 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onComplete: function onComplete() {
                            item.addClass('animated');
                        }
                    });
                }
            });
        }
    } // Remove  Elements

    {
        if (document.documentElement.clientWidth <= 991) {
            $('.col-grid, .video-popup, .background-part').remove();
        } else {
            $('.mobile-video').remove();
        }
    }
});