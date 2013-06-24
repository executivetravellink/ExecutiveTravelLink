(function ($) {
    $(document).ready(function () {
		var top = $('.stickyNav').offset().top - parseFloat($('.stickyNav').css('marginTop').replace(/auto/, 0));
		$(window).scroll(function (event) {
			// what the y position of the scroll is
			var y = $(this).scrollTop();
		
			// whether that's below the form
			if (y >= top) {
				// if so, ad the fixed class
				$('.stickyNav').addClass('fixed');
			} else {
				// otherwise remove it
				$('.stickyNav').removeClass('fixed');
			}
		});
		$(".l1").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".personal").offset() .top
            }, 2000);
            return false;
        });
		$(".l2").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".info").offset() .top
            }, 1000);
            return false;
        });
		$(".l3").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".safe").offset() .top
            }, 1000);
            return false;
        });
		$(".l4").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".protect").offset() .top
            }, 1000);
            return false;
        });
		$(".l5").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".control").offset() .top
            }, 1000);
            return false;
        });
		$(".l6").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".send").offset() .top
            }, 1000);
            return false;
        });
		$(".l7").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".can").offset() .top
            }, 1000);
            return false;
        });
		$(".top").on("click", function () {
            $("html, body") .animate({
                scrollTop: $("body").offset() .top
            }, 1000);
            return false;
        });
		/*			About		*/
		$(".a1").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".love").offset() .top
            }, 1000);
            return false;
        });
		$(".a2").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".we").offset() .top
            }, 1000);
            return false;
        });
		$(".a3").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".goal").offset() .top
            }, 1000);
            return false;
        });
		$(".a4").on("click", function () {
            $("html, body") .animate({
                scrollTop: $(".do").offset() .top
            }, 1000);
            return false;
        });
		$(".a5").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".feed").offset().top
            }, 1000);
            return false;
        });
		/*  Contact     */
		$(".c1").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".question").offset().top
            }, 1000);
            return false;
        });
		$(".c2").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".map").offset().top
            }, 1000);
            return false;
        });
		$(".c3").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".call").offset().top
            }, 1000);
            return false;
        });
		$(".c4").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".email").offset().top
            }, 1000);
            return false;
        });
		$(".c5").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".address").offset().top
            }, 1000);
            return false;
        });
		$(".c6").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".lobby").offset().top
            }, 1000);
            return false;
        });
		/*  Terms     */
		$(".t1").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".exe").offset().top
            }, 1000);
            return false;
        });
		$(".t2").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".booking").offset().top
            }, 1000);
            return false;
        });
		$(".t3").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".note").offset().top
            }, 1000);
            return false;
        });
		$(".t4").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".full").offset().top
            }, 1000);
            return false;
        });
		$(".t5").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".transfer").offset().top
            }, 1000);
            return false;
        });
		$(".t6").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".services").offset().top
            }, 1000);
            return false;
        });
		$(".t7").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".acc").offset().top
            }, 1000);
            return false;
        });
		$(".t8").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".you").offset().top
            }, 1000);
            return false;
        });
		$(".t9").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".com").offset().top
            }, 1000);
            return false;
        });
		$(".t10").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".per").offset().top
            }, 1000);
            return false;
        });
		$(".t11").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".resp").offset().top
            }, 1000);
            return false;
        });
		/*   Accreditations     */
		$(".ac1").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".cruise").offset().top
            }, 1000);
            return false;
        });
		$(".ac2").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".hpartners").offset().top
            }, 1000);
            return false;
        });
		$(".ac3").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".travelC").offset().top
            }, 1000);
            return false;
        });
		$(".ac4").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".findU").offset().top
            }, 1000);
            return false;
        });
    });
})(jQuery);