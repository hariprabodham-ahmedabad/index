(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();




    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    /*** ****/
    function addClassAll(el, cls) {
        for (var i = 0; i < el.length; ++i) {
            if (!el[i].className.match('(?:^|\\s)' + cls + '(?!\\S)')) { el[i].className += ' ' + cls; } // if input element (.mask) does not have a class of cls (filter-mask-active) (REGEX to find a match btn other classes (or no other classes btn)).. if not there.... add the class
        }
    }

    function delClassAll(el, cls) {
        for (var i = 0; i < el.length; ++i) {
            el[i].className = el[i].className.replace(new RegExp('(?:^|\\s)' + cls + '(?!\\S)'), '');
        }
    }

    function contentFilter(filterID, filterType) {
        var id = filterID;
        document.querySelector(id + ' .filter-categories').onclick = function(evt) {
            var elem = evt.target || evt.srcElement, // .target --> get the element that triggered the event
                wrap = document.querySelectorAll(id + ' .filter-wrap'), // card container
                items = document.querySelectorAll(id + ' .filter-item'), // card
                inputs = document.querySelectorAll(id + ' .filter-input'),
                filters = [],
                noitem = document.querySelectorAll(id + ' .filter-no-item'),
                mask = document.querySelectorAll(id + ' .filter-mask'), // hide cards (covers filter wrap... when filter-mask-active (defined in CSS))
                type = filterType;
            addClassAll(mask, 'filter-mask-active'); // mask all cards, animated in CSS
            setTimeout(function() { delClassAll(mask, 'filter-mask-active'); }, 1000); // create some delay (animation) when unveiling cards
            if (elem.className.match('(?:^|\\s)filter-all(?!\\S)')) { //  if filter-all checkbox clicked...
                for (var i = 1; i < inputs.length; ++i) { // loop through inputs but ignore [0] (skip 1st input in loop) - filter-all
                    inputs[i].checked = false; // uncheck all  inputs (excl. filter all)
                }
                delClassAll(items, 'selected'); // remove selected class from all items 
                delClassAll(wrap, 'filtered-' + type);
                delClassAll(noitem, 'filter-no-item-active'); // make sure no-filter item message does not show (display: none)
            } else { // ----> another filter is checked.... -------------> WHEN A FILTER OTHER THAN ALL IS CHECKED <----------------------
                inputs[0].checked = false; // uncheck #filter-all
                for (var i = 1; i < inputs.length; ++i) { // loop through inputs but ignore [0] - #filter-all
                    if (inputs[i].checked) { filters.push(inputs[i].id); } // add checked inputs to filters array 
                }
                delClassAll(items, 'selected'); // remove selected from all items (will display:none;)
                addClassAll(wrap, 'filtered-' + type);

                for (var i = 0; i < filters.length; ++i) { // LOOOPING THROUGH FILTER array
                    // if there was at least one checked input (other than all...)  run the addClassAll function adds selected class to filter-items that match checked (checkbox) class
                    if (filters.length > 0) { addClassAll(document.querySelectorAll(id + ' .filter-item.' + filters.join('.')), 'selected'); } // build css selector from filters array (add selected class to filter items (all except show all))
                    document.querySelectorAll(id + ' .selected').length == 0 ? addClassAll(noitem, 'filter-no-item-active') : delClassAll(noitem, 'filter-no-item-active'); // if no checkboxes (other than all) are checked, display no matches message
                }
                var checkCount = 0;
                for (var i = 0; i < inputs.length; ++i) {
                    checkCount += inputs[i].checked ? 1 : 0; // if inputs[i].checked is true --> add 1, else add 0 
                }
                if (checkCount == 0) { inputs[0].checked = true; }
                if (inputs[0].checked) {
                    delClassAll(wrap, 'filtered-' + type);
                    delClassAll(noitem, 'filter-no-item-active');
                }
            }
        }
    }

    contentFilter('#gridCardsWithFilter', 'inclusive'); // unique wrapper id, filter type (inclusive/exclusive)



    // $('.sabha').change(function() {
    //     hideshowMandalWise(true);
    // });
    // $('.day').change(function() {
    //     hideshowDayWise(true);
    // })

    // function hideshowMandalWise() {
    //     var sabhaVal = $('.sabha').val();
    //     var dayVal = $('.day').val();
    //     $('.m1').hide();
    //     $('.m2').hide();
    //     $('.m3').hide();
    //     $('.m4').hide();
    //     $('.n1').hide();
    //     $('.n2').hide();
    //     $('.n3').hide();
    //     $('.n4').hide();
    //     $('.nn1').hide();
    //     $('.nn2').hide();
    //     $('.nn3').hide();
    //     $('.nn4').hide();
    //     $('.b1').hide();
    //     $('.b2').hide();
    //     $('.b3').hide();
    //     $('.g1').hide();
    //     if (sabhaVal == 0) {
    //         $('.m1').hide();
    //         $('.m2').hide();
    //         $('.m3').hide();
    //         $('.m4').hide();
    //         $('.n1').hide();
    //         $('.n2').hide();
    //         $('.n3').hide();
    //         $('.n4').hide();
    //         $('.nn1').hide();
    //         $('.nn2').hide();
    //         $('.nn3').hide();
    //         $('.nn4').hide();
    //         $('.b1').hide();
    //         $('.b2').hide();
    //         $('.b3').hide();
    //         $('.g1').hide();
    //         hideshowDayWise();
    //     } else if (sabhaVal == 1) {

    //         if (dayVal == 1) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (dayVal == 2) {
    //             $('.nt2').show();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (dayVal == 3) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (dayVal == 4) {
    //             $('.nt2').hide();
    //             $('.nt4').show();
    //             $('.nf5').hide();
    //         } else if (dayVal == 5) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').show();
    //         } else if (dayVal == 6) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (dayVal == 7) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else {
    //             $('.m1').hide();
    //             $('.m2').hide();
    //             $('.m3').hide();
    //             $('.m4').hide();
    //             $('.n1').show();
    //             $('.n2').show();
    //             $('.n3').show();
    //             $('.n4').show();
    //             $('.nn1').hide();
    //             $('.nn2').hide();
    //             $('.nn3').hide();
    //             $('.nn4').hide();
    //             $('.b1').hide();
    //             $('.b2').hide();
    //             $('.b3').hide();
    //             $('.g1').hide();
    //         }
    //     } else if (sabhaVal == 2) {

    //         if (dayVal == 1) {
    //             $('.nnm1').show();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (dayVal == 2) {
    //             $('.nnm1').hide();
    //             $('.nnt2').show();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (dayVal == 3) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (dayVal == 4) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').show();
    //             $('.nns6').hide();
    //         } else if (dayVal == 5) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (dayVal == 6) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').show();
    //         } else if (dayVal == 7) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else {
    //             $('.nn1').show();
    //             $('.nn2').show();
    //             $('.nn3').show();
    //             $('.nn4').show();
    //             $('.m1').hide();
    //             $('.m2').hide();
    //             $('.m3').hide();
    //             $('.m4').hide();
    //             $('.n1').hide();
    //             $('.n2').hide();
    //             $('.n3').hide();
    //             $('.n4').hide();
    //             $('.b1').hide();
    //             $('.b2').hide();
    //             $('.b3').hide();
    //             $('.g1').hide();
    //         }
    //     } else if (sabhaVal == 3) {

    //         if (dayVal == 1) {
    //             $('.mt2').hide();
    //         } else if (dayVal == 2) {
    //             $('.mt2').show();
    //         } else if (dayVal == 3) {
    //             $('.mt2').hide();
    //         } else if (dayVal == 4) {
    //             $('.mt2').hide();
    //         } else if (dayVal == 5) {
    //             $('.mt2').hide();
    //         } else if (dayVal == 6) {
    //             $('.mt2').hide();
    //         } else if (dayVal == 7) {
    //             $('.mt2').hide();
    //         } else {
    //             $('.m1').show();
    //             $('.m2').show();
    //             $('.m3').show();
    //             $('.m4').show();
    //             $('.n1').hide();
    //             $('.n2').hide();
    //             $('.n3').hide();
    //             $('.n4').hide();
    //             $('.nn1').hide();
    //             $('.nn2').hide();
    //             $('.nn3').hide();
    //             $('.nn4').hide();
    //             $('.b1').hide();
    //             $('.b2').hide();
    //             $('.b3').hide();
    //             $('.g1').hide();
    //         }
    //     } else if (sabhaVal == 4) {
    //         if (dayVal == 1) {
    //             $('.bm1').show();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (dayVal == 2) {
    //             $('.bm1').hide();
    //             $('.bt2').show();
    //             $('.bw3').hide();
    //         } else if (dayVal == 3) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').show();
    //         } else if (dayVal == 4) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (dayVal == 5) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (dayVal == 6) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (dayVal == 7) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else {
    //             $('.m1').hide();
    //             $('.m2').hide();
    //             $('.m3').hide();
    //             $('.m4').hide();
    //             $('.n1').hide();
    //             $('.n2').hide();
    //             $('.n3').hide();
    //             $('.n4').hide();
    //             $('.nn1').hide();
    //             $('.nn2').hide();
    //             $('.nn3').hide();
    //             $('.nn4').hide();
    //             $('.b1').show();
    //             $('.b2').show();
    //             $('.b3').show();
    //             $('.g1').hide();
    //         }
    //     } else if (sabhaVal == 5) {
    //         if (dayVal == 1) {
    //             $('.gt2').hide();
    //         } else if (dayVal == 2) {
    //             $('.gt2').show();
    //         } else if (dayVal == 3) {
    //             $('.gt2').hide();
    //         } else if (dayVal == 4) {
    //             $('.gt2').hide();
    //         } else if (dayVal == 5) {
    //             $('.gt2').hide();
    //         } else if (dayVal == 6) {
    //             $('.gt2').hide();
    //         } else if (dayVal == 7) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.m1').hide();
    //             $('.m2').hide();
    //             $('.m3').hide();
    //             $('.m4').hide();
    //             $('.n1').hide();
    //             $('.n2').hide();
    //             $('.n3').hide();
    //             $('.n4').hide();
    //             $('.nn1').hide();
    //             $('.nn2').hide();
    //             $('.nn3').hide();
    //             $('.nn4').hide();
    //             $('.b1').hide();
    //             $('.b2').hide();
    //             $('.b3').hide();
    //             $('.g1').show();
    //         }
    //     }
    // }

    // function hideshowDayWise() {
    //     var dayVal = $('.day').val();
    //     var sabhaVal = $('.sabha').val();

    //     $('.m1').hide();
    //     $('.m2').hide();
    //     $('.m3').hide();
    //     $('.m4').hide();
    //     $('.n1').hide();
    //     $('.n2').hide();
    //     $('.n3').hide();
    //     $('.n4').hide();
    //     $('.nn1').hide();
    //     $('.nn2').hide();
    //     $('.nn3').hide();
    //     $('.nn4').hide();
    //     $('.b1').hide();
    //     $('.b2').hide();
    //     $('.b3').hide();
    //     $('.g1').hide();
    //     if (dayVal == 1) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').show();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').hide();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').show();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.nnm1').show();
    //             $('.bm1').show();
    //             $('.nt2').hide();
    //             $('.nnt2').hide();
    //             $('.bt2').hide();
    //             $('.mt2').hide();
    //             $('.bw3').hide();
    //             $('.nt4').hide();
    //             $('.nnt4').hide();
    //             $('.nf5').hide();
    //             $('.nns6').hide();
    //             $('.gt2').hide();
    //         }
    //     } else if (dayVal == 2) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').hide();
    //             $('.nnt2').show();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').show();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').show();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').hide();
    //             $('.bt2').show();
    //             $('.bw3').hide();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').show();
    //         } else {
    //             $('.nnm1').hide();
    //             $('.bm1').hide();
    //             $('.nt2').show();
    //             $('.nnt2').show();
    //             $('.gt2').show();
    //             $('.bt2').show();
    //             $('.mt2').show();
    //             $('.bw3').hide();
    //             $('.nt4').hide();
    //             $('.nnt4').hide();
    //             $('.nf5').hide();
    //             $('.nns6').hide();
    //         }


    //     } else if (dayVal == 3) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').hide();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').show();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.nnm1').hide();
    //             $('.bm1').hide();
    //             $('.nt2').hide();
    //             $('.nnt2').hide();
    //             $('.bt2').hide();
    //             $('.mt2').hide();
    //             $('.bw3').show();
    //             $('.nt4').hide();
    //             $('.nnt4').hide();
    //             $('.nf5').hide();
    //             $('.nns6').hide();
    //             $('.gt2').hide();
    //         }


    //     } else if (dayVal == 4) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').show();
    //             $('.nns6').hide();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').hide();
    //             $('.nt4').show();
    //             $('.nf5').hide();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').hide();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.nnm1').hide();
    //             $('.bm1').hide();
    //             $('.nt2').hide();
    //             $('.nnt2').hide();
    //             $('.bt2').hide();
    //             $('.mt2').hide();
    //             $('.bw3').hide();
    //             $('.nt4').show();
    //             $('.nnt4').hide();
    //             $('.nf5').hide();
    //             $('.nns6').hide();
    //             $('.gt2').hide();
    //         }


    //     } else if (dayVal == 5) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').show();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').hide();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.nnm1').hide();
    //             $('.bm1').hide();
    //             $('.nt2').hide();
    //             $('.nnt2').hide();
    //             $('.bt2').hide();
    //             $('.mt2').hide();
    //             $('.bw3').hide();
    //             $('.nt4').hide();
    //             $('.nnt4').hide();
    //             $('.nf5').show();
    //             $('.nns6').hide();
    //             $('.gt2').hide();
    //         }


    //     } else if (dayVal == 6) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').show();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').hide();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.nnm1').hide();
    //             $('.bm1').hide();
    //             $('.nt2').hide();
    //             $('.nnt2').hide();
    //             $('.bt2').hide();
    //             $('.mt2').hide();
    //             $('.bw3').hide();
    //             $('.nt4').hide();
    //             $('.nnt4').hide();
    //             $('.nf5').hide();
    //             $('.nns6').show();
    //             $('.gt2').hide();
    //         }


    //     } else if (dayVal == 7) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').hide();
    //             $('.nnt2').hide();
    //             $('.nnt4').hide();
    //             $('.nns6').hide();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').hide();
    //             $('.nt4').hide();
    //             $('.nf5').hide();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').hide();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').hide();
    //             $('.bt2').hide();
    //             $('.bw3').hide();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.nnm1').hide();
    //             $('.bm1').hide();
    //             $('.nt2').hide();
    //             $('.nnt2').hide();
    //             $('.bt2').hide();
    //             $('.mt2').hide();
    //             $('.bw3').hide();
    //             $('.nt4').hide();
    //             $('.nnt4').hide();
    //             $('.nf5').hide();
    //             $('.nns6').hide();
    //             $('.gt2').hide();
    //         }


    //     } else if (dayVal == 0) {
    //         if (sabhaVal == 2) {
    //             $('.nnm1').show();
    //             $('.nnt2').show();
    //             $('.nnt4').show();
    //             $('.nns6').show();
    //         } else if (sabhaVal == 1) {
    //             $('.nt2').show();
    //             $('.nt4').show();
    //             $('.nf5').show();
    //         } else if (sabhaVal == 3) {
    //             $('.mt2').show();
    //         } else if (sabhaVal == 4) {
    //             $('.bm1').show();
    //             $('.bt2').show();
    //             $('.bw3').show();
    //         } else if (sabhaVal == 5) {
    //             $('.gt2').hide();
    //         } else {
    //             $('.nnm1').show();
    //             $('.bm1').show();
    //             $('.nt2').show();
    //             $('.nnt2').show();
    //             $('.bt2').show();
    //             $('.mt2').show();
    //             $('.bw3').show();
    //             $('.nt4').show();
    //             $('.nnt4').show();
    //             $('.nf5').show();
    //             $('.nns6').show();
    //             $('.gt2').show();
    //         }



    //     }
    // }
})(jQuery);