$(document).ready(function () {
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $("#totop").stop(true, false).animate({"bottom": "20", "opacity": "1"}, 500);
        } else {
            $("#totop").stop(true, false).animate({"bottom": "-45", "opacity": "0"}, 500);
        }
    });

    // Click event to scroll to top
    $('#totop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //mobile menu script
    //$("body").attr('id', 'page');
    $("#main-menu ul.nav").clone().appendTo("#mobile-menu");
    //$("#top-menu ul").clone().appendTo("#mobile-menu");
    $("#mobile-menu-icon").click(function () {
        if ($(this).hasClass("active"))
        {
            $(this).removeClass("active");
            $("#wrapper").animate({"left": "0"}, 500);
        } else
        {
            $(this).addClass("active");
            $("#wrapper").animate({"left": "-250px"}, 500);

        }

        if ($("#mobile-menu").hasClass("active")) {
            $("#mobile-menu").removeClass("active");
            $("#mobile-menu").animate({"right": "-250px"}, 500);
        } else
        {
            $("#mobile-menu").addClass("active");
            $("#mobile-menu").animate({"right": "0"}, 500);
        }
    });

    $('#mobile-menu ul li.submenu-one>a').prepend('<span class="submenu"></span>');
    $('#mobile-menu ul li.submenu-one>a').click(function (e) {
        $(this).parent().children().eq(1).slideToggle(500);
        $(this).parent().toggleClass('changebg');
        return false;
    });

    $('#mobile-menu ul li ul li.submenu-two>a').prepend('<span class="submenu"></span>');
    $('#mobile-menu ul li ul li.submenu-two>a').click(function (e) {
        $(this).parent().children().eq(1).slideToggle(500);
        $(this).parent().toggleClass('changebg');
        return false;
    });

    $('#mobile-menu ul li ul li ul li.submenu-three>a').prepend('<span class="submenu"></span>');
    $('#mobile-menu ul li ul li ul li.submenu-three>a').click(function (e) {
        $(this).parent().children().eq(1).slideToggle(500);
        $(this).parent().toggleClass('changebg');
        return false;
    });

    $('#testimonials .items').owlCarousel({
        autoPlay: false, //Set AutoPlay to 3 seconds
        items: 1,
        itemsMobile: [480, 1],
        itemsTablet: [768, 1],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        navigation: false
    });
    
});