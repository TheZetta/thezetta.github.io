

$(document).ready(function() {
    "use strict";

    /*$(document).on("contextmenu",function(e){
        if(e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA")
           e.preventDefault();
   });*/

    $(window).on("load", function() {

        /*-- Isotope js
        ------------------------------------ --*/
        var $grid = $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true
        });


        // filter items on button click
        $('.filter-button-group').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        $('.button-group').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });


    // Boostrap navigation modification
    jQuery(function($) {
        if ($(window).width() > 767) {

            $('.navbar .dropdown > a').click(function() {
                location.href = this.href;
            });

        }
    });


    // script for tab steps
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

        var href = $(e.target).attr('href');
        var $curr = $(".process-model  a[href='" + href + "']").parent();

        $('.process-model li').removeClass();

        $curr.addClass("active");
        $curr.prevAll().addClass("visited");
    });
    // end  script for tab steps


    $('.carousel').carousel({
        interval: 5000
    });

    //script for page scroll to top and bottom
    $('.page-scroll ').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    //end script for page scroll to top and bottom


    //script for parallex
    function parallaxIt() {

        // create variables
        var $fwindow = $(window);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // on window scroll event
        $fwindow.on('scroll resize', function() {
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        });

        // for each of content parallax element
        $('[data-type="content"]').each(function(index, e) {
            var $contentObj = $(this);
            var fgOffset = parseInt($contentObj.offset().top);
            var yPos;
            var speed = ($contentObj.data('speed') || 1);

            $fwindow.on('scroll resize', function() {
                yPos = fgOffset - scrollTop / speed;

                $contentObj.css('top', yPos);
            });
        });

        // for each of background parallax element
        $('[data-type="background"]').each(function() {
            var $backgroundObj = $(this);
            var bgOffset = parseInt($backgroundObj.offset().top);
            var yPos;
            var coords;
            var speed = ($backgroundObj.data('speed') || 0);

            $fwindow.on('scroll resize', function() {
                yPos = -((scrollTop - bgOffset) / speed);
                coords = '50% ' + yPos + 'px';

                $backgroundObj.css({
                    backgroundPosition: coords
                });
            });
        });

        // triggers winodw scroll for refresh
        $fwindow.trigger('scroll');
    }

    parallaxIt();
    //end script for parallex

    //script for owl carousel 
    $('.blog-media .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        singleItem: true,
        navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                nav: false
            },
            900: {
                items: 1,
                loop: true
            },
            1100: {
                items: 1,
                loop: true
            }
        }
    });

    $(".clients .owl-carousel").owlCarousel({
        loop: true,
        margin: 13,
        navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        smartSpeed: 600,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true
            },
            1600: {
                items: 5,
                nav: true
            }
        }
    });

    //end script for owl carousel 

    //script for video modal 
    $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    });
    //end script for video modal 

    //magnific popup
    $('.product-section .grid').each(function() {
        $(this).magnificPopup({
            delegate: '.magnify',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    //script for number counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //end script for number counter

    //script for full view port slider 
    $(window).on('resize', fullViewPort);
    fullViewPort();

    function fullViewPort() {
        if ($(window).width() < 992) {
            var height = $(window).height() - 100;
            $(".top-carousel .item, .top-carousel").height(height);
        } else {
            var height = $(window).height() - 154;
            $(".top-carousel .item, .top-carousel").height(height);
        }

    }
    //end script for full view port slider



    //script for portfolio details modal tigger
    $(".proDetModal").click(function() {
        $("#portfolioDetModal").modal('show');
    });
    //end script for portfolio details modal tigger

    // protfolio modal's slider script
    $('#myCarousel').carousel({
        interval: 4000
    });

    var selectorIdx = 1;
    var numItems = 12;
    // handles the carousel thumbnails
    $('.carousel-selector').click(function() {
        selectorIdx = $(this).closest('li').index();
        $('#myCarousel').carousel(selectorIdx);
    });

    $('#myCarousel').on('slide.bs.carousel', function(e) {
        selectorIdx = $(e.relatedTarget).index();
        $(this)
            .find('.carousel-selector').removeClass('selected')
            .eq(selectorIdx).addClass('selected')
            .end()
            .find('.item').removeClass('selected')
            .eq(selectorIdx).addClass('active');
    });
    // end protfolio modal's slider script

    //script for box equal height
    var equalheight;
    equalheight = function(t) {
        var i, n = 0,
            e = 0,
            topPostion,
            currentDiv,
            o = new Array;
        $(t).each(function() {
            if (i = $(this), $(i).outerHeight("auto"), topPostion = i.position().top, e != topPostion) {
                for (currentDiv = 0; currentDiv < o.length; currentDiv++)
                    o[currentDiv].outerHeight(n);
                o.length = 0, e = topPostion, n = i.outerHeight(), o.push(i);
            } else
                o.push(i), n = n < i.outerHeight() ? i.outerHeight() : n;
            for (currentDiv = 0; currentDiv < o.length; currentDiv++)
                o[currentDiv].outerHeight(n);
        });
    }, $(window).load(function() {
            if ($(window).width() > 560) {
                equalheight(".equalheight");
            }
    }), $(window).resize(function() {
            if ($(window).width() > 560) {
                equalheight(".equalheight");
            }
    });
    //end script for box equal height    


    //Revolution slider script
    var tpj = jQuery;
    var revapi1078;
    tpj(document).ready(function() {
        revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            gridwidth: 1140,
            navigation: {
                arrows: {
                    style: "uranus",
                    enable: true,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 50,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 50,
                        v_offset: 0
                    }
                }
            }

        });

    }); /*ready*/

    /*Js for sending email and validation*/
    $('.email_form').on('submit', function(e) {
        e.preventDefault();
        var _self = $(this);
        var __selector = _self.closest('input,textarea');
        _self.closest('div').find('input,textarea').removeAttr('style');
        _self.find('.msg').remove();
        _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
        var data = $(this).serialize();
        $.ajax({
            url: 'scripts/email.php',
            type: "post",
            dataType: 'json',
            data: data,
            success: function(data) {
                _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                if (data.code == false) {
                    _self.closest('div').find('[name="' + data.field + '"]').css('border-bottom', 'solid 2px red');
                    _self.find('.customised-formgroup').last().after('<div class="msg"><p style="color:red;padding:0;font-size:13px;font-weight:bold;position:absolute">*' + data.err + '</p></div>');
                } else {
                    $('.msg').html('<p style="color:green;padding:0;font-size:13px;font-weight:bold;position:absolute">' + data.success + '</p>');
                    _self.find('.customised-formgroup').last().after('<div class="msg"><p style="color:green;padding:0;font-size:13px;font-weight:bold;position:absolute">' + data.success + '</p></div>');
                    _self.closest('div').find('input,textarea').val('');
                }
            }
        });
    });

    //Google map pointer events issue
    $('.tab-content .tab-pane').click(function() {
        $(this).find('iframe').addClass('clicked');
        $(this).addClass("clicked");
    });
    $('.tab-content .tab-pane').mouseleave(function() {
        $(this).find('iframe').removeClass('clicked');
        $(this).removeClass("clicked");
    });




    /*accordion*/


    function toggleIcon(e) {
        $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('icon-plus icon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


    document.onkeydown = function(e) {
        if(e.keyCode == 123) {
           return false;
       }
       if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
           return false;
       }
       if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
           return false;
       }
       if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
           return false;
       }

       if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
           return false;
       }      
   }

});
