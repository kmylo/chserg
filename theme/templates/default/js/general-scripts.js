/* Custom jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;
(function($, window, document, undefined) {
    //Genaral Global variables
    'use strict';
    var $win = $(window);
    var $doc = $(document);
    var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    $(document).ready(function() {
        /*--------------------------------------------------------------------------------------------------------------------------------------*/
        $('i').empty();
        jQuery('ul.navigation-menu.scrollnav >li:first').addClass('active');
        /*========================================================== 
         PRELOADER JS
        ========================================================== */
        $(window).on('load', function() {
            $('.preloader-bounce').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });

        /*========================================================== 
         MATCHHEIGHT JS
        ========================================================== */
        if ($('.matchheight').length) {
            $('.matchheight').matchHeight();
        }

        /*========================================================== 
         ANIMATIONS WITH WATPOINTS 
         ========================================================== */
        $('.animated-row').each(function() {
            var $this = $(this);
            $this.find('.animate').each(function(i) {
                var $item = $(this);
                var animation = $item.data('animate');
                $item.waypoint(function() {
                    setTimeout(function() {
                        $item.addClass('animated ' + animation).removeClass('animate');
                    }, i * 150);
                }, {
                    offset: '100%',
                    triggerOnce: true
                });
            });
        });

        /*========================================================== 
         LIGHTBOX
        ========================================================== */
        if ($('.project-box').length) {
            $('.project-box').magnificPopup({
                delegate: '.zoom-icon',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });
        }

        if ($('.video-popup').length) {
            $('.video-popup').magnificPopup({
                disableOn: 320,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: true
            });
        }


        /*========================================================== 
         HOME SLIDER
        ========================================================== */
        if ($('.main-slider').length) {
            $('.main-slider').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                items: 1,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 7000,
                responsive: {
                    0: {
                        nav: false,
                        dots: true
                    },
                    768: {
                        nav: true,
                        dots: false,
                    }
                }
            });
        }

        /*========================================================== 
         LATEST PROJECTS
        ========================================================== */
        if ($('.work-slider').length) {
            $('.work-slider').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                items: 4,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1441: {
                        items: 4
                    }
                }
            });
        }

        /*========================================================== 
         TEAM SLIDER
        ========================================================== */
        if ($('.team-slider').length) {
            $('.team-slider').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                        nav: false,
                        dots: true
                    },
                    768: {
                        items: 2,
                        margin: 20,
                        nav: false,
                        dots: true
                    },
                    992: {
                        items: 3,
                        margin: 30,
                        nav: false,
                        dots: true
                    },
                    1201: {
                        nav: true,
                        dots: false
                    }
                }
            });
        }

        /*========================================================== 
         TESTIMONIALS SLIDER
        ========================================================== */
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 9000
            });
        }

        /*========================================================== 
         PARTNERS SLIDER
        ========================================================== */
        if ($('.partners-slider').length) {
            $('.partners-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 4,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 2000,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3,
                        margin: 20
                    },
                    1024: {
                        items: 4
                    }
                }
            });
        }

        /*========================================================== 
         IMAGES SLIDER ( ABOUT US PAGE )
        ========================================================== */
        if ($('.img-slider').length) {
            $('.img-slider').owlCarousel({
                loop: true,
                dots: true,
                items: 1,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 3000
            });
        }

        /*========================================================== 
         STICKY HEADER
        ========================================================== */
        $(window).on('scroll', function() {
            if ($(document).scrollTop() > 5) {
                $('#header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
            }
            if ($(window).scrollTop() > 200) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });

        /*========================================================== 
         SMOOTH SCROLLING BACK TO TOP
        ========================================================== */
        $('.back-top').on('click', function() {
            $('html:not(:animated),body:not(:animated)').animate({
                scrollTop: 0
            }, 'normal');
            return false;
        });

        /*========================================================== 
         SCROLL SPY MENU
        ========================================================== */
        var lastId,
            topMenu = $('.scrollnav'),
            topMenuHeight = 68,
            // All list items
            menuItems = topMenu.find('a'),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function() {
                var item = $($(this).attr('href'));
                if (item.length) {
                    return item;
                }
            });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation

        menuItems.on('click', function(e) {
            $('.sidenav-wrapper').removeClass('visible');
            var href = $(this).attr("href");
            var offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 500);

            e.preventDefault();
        });

        // Bind to scroll
        $(window).on('scroll', function() {
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight;
            // Get id of current scroll item
            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass('active');
            }
        });

        /*========================================================== 
         GO TO NEXT SCREEN
        ========================================================== */
        $('.scroll-down').on('click', function() {
            var getOffsetTop = $('#main').offset().top - 68;
            $('html:not(:animated),body:not(:animated)').animate({
                scrollTop: getOffsetTop
            }, 'normal');
            return false;
        });

        /*========================================================== 
         SIDENAV
        ========================================================== */
        $('.side-menu-trigger').on('click', function() {
            $('.sidenav-wrapper').addClass('visible');
            return false;
        });

        $('.close-menu').on('click', function() {
            $('.sidenav-wrapper').removeClass('visible');
            return false;
        });

        $('.sidenav-wrapper, .search-wrapper').on('click tap', function(event) {
            event.stopPropagation();
        });

        $(document).on('click tap', function(e) {
            if ($(e.target).parent('.close-menu').length === 0) {
                $('.sidenav-wrapper').removeClass('visible');
            }
        });


        /*========================================================== 
         SIDENAV DROPDOWN
        ========================================================== */
        $('.sidenav-wrapper .nav > li > ul, .navigation-menu > li > ul').parent('li').addClass('hasmenu');
        $('.sidenav-wrapper .nav > li.hasmenu, .navigation-menu > li.hasmenu').prepend('<span class="navtrigger"><i class="fa fa-angle-down" aria-hidden="true"></i></span>');
        $('.navtrigger').on('click', function() {
            var accordion = $(this).parent('li').find('ul');
            if ($(accordion).is(':visible')) {
                $(this).removeClass('nav-open');
                $(accordion).slideUp('normal');
                return false;
            } else {
                $('.navtrigger').removeClass('nav-open');
                $('.sidenav-wrapper .nav > li > ul').slideUp('normal');
                $(this).addClass('nav-open');
                $(accordion).slideDown('normal');
            }
        });

        /*========================================================== 
         TOP SEARCHBAR
        ========================================================== */
        $('.search-trigger').on('click', function() {
            $('.search-wrapper').addClass('open');
            return false;
        });

        $('.close-search').on('click', function() {
            $('.search-wrapper').removeClass('open');
            return false;
        });


        /*========================================================== 
         COUNTERS
        ========================================================== */
        if ($('.count-number').length) {
            $('.count-number').counterUp({
                delay: 30,
                time: 1000
            });
        }

        /*========================================================== 
		 PROGRESS BARS
		========================================================== */
        if ($('.progress-section').length !== 0) {
            var skillbar_active = false;
            $('.progress-bar-value').hide();
            if ($(window).scrollTop() === 0 && isScrolledIntoView($('.progress-section')) === true) {
                skillbarActive();
                skillbar_active = true;
            } else if (isScrolledIntoView($('.progress-section')) === true) {
                skillbarActive();
                skillbar_active = true;
            }
            $(window).bind('scroll', function() {
                if (skillbar_active === false && isScrolledIntoView($('.progress-section')) === true) {
                    skillbarActive();
                    skillbar_active = true;
                }
            });
        }

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
            return ((elemBottom <= (docViewBottom + $(elem).height())) && (elemTop >= (docViewTop - $(elem).height())));
        }

        function skillbarActive() {
            setTimeout(function() {
                $('.progress-bar-value').each(function() {
                    $(this).data("origWidth", $(this)[0].style.width).css('width', '1%').show();
                    $(this).animate({
                        width: $(this).data("origWidth")
                    }, 1200);
                });
            }, 250);
        }
        $('.progress-bar-value').each(function() {
            var skillBarPercentage = $(this).attr('data-percentage');
            $(this).css('width', '' + skillBarPercentage + '');
        });

        //Show Team overlay for touch devices
        $('.team-box, .project-box, .service-col, .feature-col').on('touchstart', function(e) {
            fire(e);
        });

        /*========================================================== 
         TOOLTIPS
        ========================================================== */
        $('[data-toggle="tooltip"]').tooltip();


        /*========================================================
        NEW JS
        ==========================================================*/

        /*========================================================== 
         MASONRY LAYOUT
        ========================================================== */
        $(window).on('load', function() {
            if ($('.masonry').length) {
                $('.masonry').masonry({
                    columnWidth: '.grid-sizer',
                    itemSelector: '.grid-item',
                    percentPosition: true
                });
            }
        });

        if ($('.countdown').length) {
            $('.countdown').downCount({
                date: '06/10/2019 12:00:00',
                offset: +10
            });
        }

        /*--------------------------------------------------------------------------------------------------------------------------------------*/
    });

    /*All function nned to define here for use strict mode
    ----------------------------------------------------------------------------------------------------------------------------------------*/



    /*--------------------------------------------------------------------------------------------------------------------------------------*/
})(jQuery, window, document);