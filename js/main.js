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
        hideshowMandalWise(true);
        hideshowDayWise(false);
    });
    $('.day').change(function () {
        hideshowDayWise(true);
        hideshowMandalWise(false);
    })

    function hideshowMandalWise(flag) {
        var sabhaVal = $('.sabha').val();
        if (sabhaVal == 3) {
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
        else if (sabhaVal == 1) {
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
        else if (sabhaVal == 2) {
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
        else if (sabhaVal == 0) {
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
            if(flag)
            {
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
        }
    }
    function hideshowDayWise(flag) {
        var dayVal = $('.day').val();
        if (dayVal == 1) {
            $('.m1').show();
            $('.t2').hide();
            $('.w3').hide();
            $('.t4').hide();
            $('.f5').hide();
            $('.s6').hide();
            $('.s7').hide();
        }
        else if (dayVal == 2) {
            $('.m1').hide();
            $('.t2').show();
            $('.w3').hide();
            $('.t4').hide();
            $('.f5').hide();
            $('.s6').hide();
            $('.s7').hide();
        }
        else if (dayVal == 3) {
            $('.m1').hide();
            $('.t2').hide();
            $('.w3').show();
            $('.t4').hide();
            $('.f5').hide();
            $('.s6').hide();
            $('.s7').hide();
        }
        else if (dayVal == 4) {
            $('.m1').hide();
            $('.t2').hide();
            $('.w3').hide();
            $('.t4').show();
            $('.f5').hide();
            $('.s6').hide();
            $('.s7').hide();
        }
        else if (dayVal == 5) {
            $('.m1').hide();
            $('.t2').hide();
            $('.w3').hide();
            $('.t4').hide();
            $('.f5').show();
            $('.s6').hide();
            $('.s7').hide();
        }
        else if (dayVal == 6) {
            $('.m1').hide();
            $('.t2').hide();
            $('.w3').hide();
            $('.t4').hide();
            $('.f5').hide();
            $('.s6').show();
            $('.s7').hide();
        }
        else if (dayVal == 7) {
            $('.m1').hide();
            $('.t2').hide();
            $('.w3').hide();
            $('.t4').hide();
            $('.f5').hide();
            $('.s6').hide();
            $('.s7').show();
        }
        else {
            if(flag)
            {
            $('.m1').hide();
            $('.t2').hide();
            $('.w3').hide();
            $('.t4').hide();
            $('.f5').hide();
            $('.s6').hide();
            $('.s7').hide();
            }
        }
    }


})(jQuery);

