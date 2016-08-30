/**
 * backToTop [c]2016, @n_cholas, OmCore Ltd. MIT/GPL
 *
 * https://github.com/nicholaswright/back-to-top
 */
;(function($) {
    'use strict';
    $.fn.backToTop = function(options) {
        return this.each(function() {
            
            var defaults = {
                    className: 'backToTopVisible'
                },
                settings = $.extend({}, defaults, options),
                el = $(this),
                
                offset = 300,
            	fadeoutTimer;
            
            $(window)
                .on('scroll', function() {
                    
                    // Only show once the user has scrolled down
                    ($(this).scrollTop() > offset)
                    	? el.addClass(settings.className)
                    	: el.removeClass(settings.className);
                    
                    // Hide the link after a couple of seconds to avoid it masking content
                    // If the user wants to see it again they can scroll slightly 
                    if (fadeoutTimer) {
                        clearTimeout(fadeoutTimer);
                    }
                    fadeoutTimer = setTimeout(function(){
                    	el.removeClass(settings.className);
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