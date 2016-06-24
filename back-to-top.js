/**
 * backToTop [c]2016, @n_cholas, OmCore Ltd. MIT/GPL
 *
 * https://github.com/nicholaswright/back-to-top
 */
;(function($) {
    'use strict';
    $.fn.backTop = function(options) {
        return this.each(function() {
            
            var el = $(this),
                offset = 300,
            	fadeoutTimer;
            
            $(window)
                .on('scroll', function(){
                    
                    // Only show once the user has scrolled down
                    if ($(this).scrollTop() > offset) {
                    	el.addClass('back-top-visible');
                    } else {
                    	el.removeClass('back-top-visible');
                    }
                    
                    // Hide the link after a couple of seconds to avoid it masking content
                    // If the user wants to see it again they can scroll slightly 
                    if (fadeoutTimer) {
                        clearTimeout(fadeoutTimer);
                        fadeoutTimer = false;
                    }
                    fadeoutTimer = setTimeout(function(){
                    	el.removeClass('back-top-visible');
                    }, 1000);
                    
                });
            
            // Scroll to top
            el
                .on('click', function(e){
                	e.preventDefault();
                    
                    $('body,html').animate({
                        scrollTop: 0
                    }, 'fast');
                });

        });
    };
})(jQuery);