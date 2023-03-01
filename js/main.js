(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();




    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    $('.sabha').change(function () {
        debugger
        if ($('.sabha').val() == 3) {
            $('.m1').show();
            $('.m2').show();
            $('.m3').show();
            $('.m4').show();
            $('.n1').hide();
            $('.n2').hide();
            $('.n3').hide();
            $('.n4').hide();
            $('.nn1').hide();
            $('.nn2').hide();
            $('.nn3').hide();
            $('.nn4').hide();
        }
        else if ($('.sabha').val() == 1) {
            $('.m1').hide();
            $('.m2').hide();
            $('.m3').hide();
            $('.m4').hide();
            $('.n1').show();
            $('.n2').show();
            $('.n3').show();
            $('.n4').show();
            $('.nn1').hide();
            $('.nn2').hide();
            $('.nn3').hide();
            $('.nn4').hide();
        }
        else if ($('.sabha').val() == 2) {
            $('.nn1').show();
            $('.nn2').show();
            $('.nn3').show();
            $('.nn4').show();
            $('.m1').hide();
            $('.m2').hide();
            $('.m3').hide();
            $('.m4').hide();
            $('.n1').hide();
            $('.n2').hide();
            $('.n3').hide();
            $('.n4').hide();
        }
        else if ($('.sabha').val() == 0) {
            $('.m1').show();
            $('.m2').show();
            $('.m3').show();
            $('.m4').show();
            $('.n1').show();
            $('.n2').show();
            $('.n3').show();
            $('.n4').show();
            $('.nn1').show();
            $('.nn2').show();
            $('.nn3').show();
            $('.nn4').show();
        }
        else {
            $('.m1').hide();
            $('.m2').hide();
            $('.m3').hide();
            $('.m4').hide();
            $('.n1').hide();
            $('.n2').hide();
            $('.n3').hide();
            $('.n4').hide();
            $('.nn1').hide();
            $('.nn2').hide();
            $('.nn3').hide();
            $('.nn4').hide();
        }

    });



})(jQuery);

