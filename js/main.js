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
        //hideshowDayWise(false);
    });
    $('.day').change(function () {
        hideshowDayWise(true);
        hideshowMandalWise(false);
    })

    function hideshowMandalWise(flag) {
        var sabhaVal = $('.sabha').val();
        var dayVal = $('.day').val();
        if (sabhaVal == 0) {
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
            $('.b1').hide();
            $('.b2').hide();
            $('.b3').hide();
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
            $('.b1').hide();
            $('.b2').hide();
            $('.b3').hide();
            if (dayVal == 1) {
                $('.nt2').hide();
                $('.nt4').hide();
                $('.nf5').hide();
            }
            else if (dayVal == 2) {
                $('.nt2').show();
                $('.nt4').hide();
                $('.nf5').hide();
            }
            else if (dayVal == 3) {
                $('.nt2').hide();
                $('.nt4').hide();
                $('.nf5').hide();
            }
            else if (dayVal == 4) {
                $('.nt2').hide();
                $('.nt4').show();
                $('.nf5').hide();
            }
            else if (dayVal == 5) {
                $('.nt2').hide();
                $('.nt4').hide();
                $('.nf5').show();
            }
            else if (dayVal == 6) {
                $('.nt2').hide();
                $('.nt4').hide();
                $('.nf5').hide();
            }
            else if (dayVal == 7) {
                $('.nt2').hide();
                $('.nt4').hide();
                $('.nf5').hide();
            }
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
            $('.b1').hide();
            $('.b2').hide();
            $('.b3').hide();
            if (dayVal == 1) {
                $('.nnm1').show();
                $('.nnt2').hide();
                $('.nnt4').hide();
                $('.nns6').hide();
            }
            else if (dayVal == 2) {
                $('.nnm1').hide();
                $('.nnt2').show();
                $('.nnt4').hide();
                $('.nns6').hide();
            }
            else if (dayVal == 3) {
                $('.nnm1').hide();
                $('.nnt2').hide();
                $('.nnt4').hide();
                $('.nns6').hide();
            }
            else if (dayVal == 4) {
                $('.nnm1').hide();
                $('.nnt2').hide();
                $('.nnt4').show();
                $('.nns6').hide();
            }
            else if (dayVal == 5) {
                $('.nnm1').hide();
                $('.nnt2').hide();
                $('.nnt4').hide();
                $('.nns6').hide();
            }
            else if (dayVal == 6) {
                $('.nnm1').hide();
                $('.nnt2').hide();
                $('.nnt4').hide();
                $('.nns6').show();
            }
            else if (dayVal == 7) {
                $('.nnm1').hide();
                $('.nnt2').hide();
                $('.nnt4').hide();
                $('.nns6').hide();
            }
        }
        else if (sabhaVal == 3) {
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
            $('.b1').hide();
            $('.b2').hide();
            $('.b3').hide();
        }
        else if (sabhaVal == 4) {
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
            $('.b1').show();
            $('.b2').show();
            $('.b3').show();

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
            $('.b1').hide();
            $('.b2').hide();
            $('.b3').hide();
        }
    }
    function hideshowDayWise(flag) {
        var dayVal = $('.day').val();
        if (dayVal == 1) {
            $('.nnm1').show();
            $('.bm1').show();
            $('.nt2').hide();
            $('.nnt2').hide();
            $('.bt2').hide();
            $('.mt2').hide();
            $('.bw3').hide();
            $('.nt4').hide();
            $('.nnt4').hide();
            $('.nf5').hide();
            $('.nns6').hide();
        }
        else if (dayVal == 2) {
            $('.nnm1').hide();
            $('.bm1').hide();
            $('.nt2').show();
            $('.nnt2').show();
            $('.bt2').show();
            $('.mt2').show();
            $('.bw3').hide();
            $('.nt4').hide();
            $('.nnt4').hide();
            $('.nf5').hide();
            $('.nns6').hide();
        }
        else if (dayVal == 3) {
            $('.nnm1').hide();
            $('.bm1').hide();
            $('.nt2').hide();
            $('.nnt2').hide();
            $('.bt2').hide();
            $('.mt2').hide();
            $('.bw3').show();
            $('.nt4').hide();
            $('.nnt4').hide();
            $('.nf5').hide();
            $('.nns6').hide();
        }
        else if (dayVal == 4) {
            $('.nnm1').hide();
            $('.bm1').hide();
            $('.nt2').hide();
            $('.nnt2').hide();
            $('.bt2').hide();
            $('.mt2').hide();
            $('.bw3').hide();
            $('.nt4').show();
            $('.nnt4').hide();
            $('.nf5').hide();
            $('.nns6').hide();
        }
        else if (dayVal == 5) {
            $('.nnm1').hide();
            $('.bm1').hide();
            $('.nt2').hide();
            $('.nnt2').hide();
            $('.bt2').hide();
            $('.mt2').hide();
            $('.bw3').hide();
            $('.nt4').hide();
            $('.nnt4').hide();
            $('.nf5').show();
            $('.nns6').hide();
        }
        else if (dayVal == 6) {
            $('.nnm1').hide();
            $('.bm1').hide();
            $('.nt2').hide();
            $('.nnt2').hide();
            $('.bt2').hide();
            $('.mt2').hide();
            $('.bw3').hide();
            $('.nt4').hide();
            $('.nnt4').hide();
            $('.nf5').hide();
            $('.nns6').show();
        }
        else if (dayVal == 7) {
            $('.nnm1').hide();
            $('.bm1').hide();
            $('.nt2').hide();
            $('.nnt2').hide();
            $('.bt2').hide();
            $('.mt2').hide();
            $('.bw3').hide();
            $('.nt4').hide();
            $('.nnt4').hide();
            $('.nf5').hide();
            $('.nns6').hide();
        }
        else if (dayVal == 0) {
            $('.nnm1').show();
            $('.bm1').show();
            $('.nt2').show();
            $('.nnt2').show();
            $('.bt2').show();
            $('.mt2').show();
            $('.bw3').show();
            $('.nt4').show();
            $('.nnt4').show();
            $('.nf5').show();
            $('.nns6').show();
        }
    }


})(jQuery);

