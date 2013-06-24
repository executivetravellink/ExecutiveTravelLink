(function ($) {
    $(document).ready(function () {
      $("img").on("dragstart", function () {
            return false;
        });
        $(".supportlink").on("click", function () {
			$('.support').css({"background":"#125e8a"});
			$('.support>a').css({"color": "#fff"});
            $(".drop").addClass("active").slideDown(300);
            $(this).parent().hover(function () {}, function () {
					$(".support").css({"background":"#f5f5f5"});
					$(".support>a").css({"color": "#125e8a"});
                $(this).parent().find(".drop").removeClass("active").slideUp(500);
            });
            return false;
        });
        $(".topQuestions").addClass("active");
        $(".f1").on("click", function () {
            $("*").removeClass("active");
            $(".topQuestions").addClass("active");
            return false;
        });
        $(".f2").on("click", function () {
            $("*").removeClass("active");
            $(".searching").addClass("active");
            return false;
        });
        $(".f3").on("click", function () {
            $("*").removeClass("active");
            $(".roomtype").addClass("active");
            return false;
        });
        $(".f4").on("click", function () {
            $("*").removeClass("active");
            $(".prices").addClass("active");
            return false;
        });
        $(".f5").on("click", function () {
            $("*").removeClass("active");
            $(".payment").addClass("active");
            return false;
        });
        $(".f6").on("click", function () {
            $("*").removeClass("active");
            $(".reservations").addClass("active");
            return false;
        });
        $(".f7").on("click", function () {
            $("*").removeClass("active");
            $(".confirmation").addClass("active");
            return false;
        });
        $(".f8").on("click", function () {
            $("*").removeClass("active");
            $(".cancellation").addClass("active");
            return false;
        });
		$(".z1").on("click", function () {
            $("*").removeClass("active");
            $(".P1").addClass("active");
            return false;
        });
        $(".z2").on("click", function () {
            $("*").removeClass("active");
            $(".P2").addClass("active");
            return false;
        });
        $(".z3").on("click", function () {
            $("*").removeClass("active");
            $(".P3").addClass("active");
            return false;
        });
		$(".stickyNav li").on("click", function () {
            $("*").removeClass("activenav");
            $(this).addClass("activenav");
        });
		$(".travelWord p").on("click",function(){
			$("*").removeClass("activenav");
            $(this).addClass("activenav");
		});
        var showChar = 850;
        var ellipsestext = "...";
        var moretext = "more";
        var lesstext = "less";
        $('.more').each(function () {
            var content = $(this).html();

            if (content.length > showChar) {

                var c = content.substr(0, showChar);
                var h = content.substr(showChar - 1, content.length - showChar);

                var html = c + '<span class="moreelipses">' + ellipsestext + '</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                $(this).html(html);
            }
        });
        $(".morelink").on("click", function () {
            if ($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });
		$(window).scroll(function() {
		   if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
			   $(".feedcontainer>p").css({
					"background": "url(http://www.executivetravellink.com/assets/img/promo/feedback-sprite.png)",
					"background-position": "0 -86px"
				});
		   }else{
				$(".feedcontainer>p").css({
					"background": "url(http://www.executivetravellink.com/assets/img/promo/feedback-sprite.png)",
					"background-position": "0 0"
				});
		   }
		});
    });
})(jQuery);