(function($) {
	$(window).on('scroll', function() {
		var $scrollers = $('.scroller');
		$scrollers.each(function(i, s) {
			var $scroller = $(s),
				windowTop = $(window).scrollTop(),
				elementTop = $scroller.offset().top;

			if ( elementTop < windowTop ) {
				$scroller.css({'position': 'fixed', 'top': 0});
				$scroller.data('top', windowTop);
			}
		});
	});
})(window.jQuery);