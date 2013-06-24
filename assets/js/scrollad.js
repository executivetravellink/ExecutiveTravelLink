(function ($) {
    $(document).ready(function () {
		var top = $('.advertisment').offset().top - parseFloat($('.advertisment').css('marginTop').replace(/auto/, 0));
		$(window).scroll(function (event) {
			// what the y position of the scroll is
			var y = $(this).scrollTop();
		
			// whether that's below the form
			if (y >= top) {
				// if so, ad the fixed class
				$('.advertisment').addClass('fixed');
			} else {
				// otherwise remove it
				$('.advertisment').removeClass('fixed');
			}
		});
    });
})(jQuery);