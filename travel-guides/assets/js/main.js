(function ($) {
    $(document).ready(function () {
      $("img").on("dragstart", function () {
            return false;
        });
        $(".nav").on("click", function () {
            $(this).parent().find(".sub-nav").addClass("active").slideDown('fast');
            $(this).css({
                "background": "url('http://www.executivetravellink.com/assets/img/sprite_arrow.png') no-repeat bottom right"
            });
            $(this).parent().hover(function () {}, function () {
                $(this).parent().find(".sub-nav").removeClass("active").slideUp("slow");
                $(this).find(".nav").css({
                    "background": "url('http://www.executivetravellink.com/assets/img/sprite_arrow.png') no-repeat top right"
                });
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
        if ($.browser.msie && parseInt($.browser.version) <= 10) {
            $(".hotelname").css({
                "top": "791px",
                    "padding-right": "143px"
            });
            $(".sectier").css({
                "top": "1074px",
                    "padding-right": "143px"
            });
            $(".thirdtier").css({
                "top": "1360px",
                    "padding-right": "143px"
            });
        }

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
		$('#slider').nivoSlider({
			 effect: 'fade'
		});
		/*var animating = false;
		if(animating == false){
			animating = true;
			$(".hotels").mouseleave(function(){
				animating = true;
				console.log($(this).next());
				$(this).each(function(){
					$(this).next().css({"display": "none"	});
					$(this).next().animate({
						"top": "220px"	
					});
				});
				
			});
		} 
		if(animating == true){
			animating = false;
			$(".hotels").mouseenter(function(){
				$(this).each(function(){
					console.log($(this).next());
					$(this).next().css({"display": "block"	});
					$(this).next().animate({
						"top": "185px"
					});
				});
			});
		}*/
		
    });
})(jQuery);