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

                var html = c + '<span class="moreelipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
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
		$("body").append(
	    	'<img src="http://www.executivetravellink.com/301.gif" style="display: none;" class="preloader"/>'
		);
		var active = new Boolean();
		$("li>a>.destination, .clickhere p>a, a>.hotels, a>.view, .bigdeals>a, a>.view").on("click", function(){
			active = true;
			window.onbeforeunload = function(e){
				$(".preloader").css({"display": "block"});
			};
			setTimeout(function(){
				$(".preloader").css({"display": "block"});
				$("body").html(
					'<div id="modal-content">'+
						'<p class="yournow">Searching for the best deals with Executive Travel Link</p>'+
						'<img src="http://www.executivetravellink.com/301.gif" style="display: block;" class="preloader"/>'+
						'<p class="bold">Loading Your Search Results...</p>'+
					'</div>'
				);
			}, 500);
			if(active === true){
					$("#modal").delay(8000).fadeOut("slow");
					setTimeout(function(){
						$("#modal").remove();
					}, 9000);
				} 
		});
		if(window.location.href.indexOf("#list") > -1){
			$(".list").addClass("optionsactive");
			$(".grid").removeClass("optionsactive");
			$(".view").removeClass("dealsgridview").addClass("dealslistview");
		}else if(window.location.href.indexOf("#grid") >- 1){
			$(".grid").addClass("optionsactive");
			$(".list").removeClass("optionsactive");
			$(".view").removeClass("dealslistview").addClass("dealsgridview");
		}
		$(".grid").on("click", function(){
			$(this).addClass("optionsactive");
			$(".list").removeClass("optionsactive");
			$(".view").removeClass("dealslistview").addClass("dealsgridview");
		});
		$(".list").on("click", function(){
			$(this).addClass("optionsactive");
			$(".grid").removeClass("optionsactive");
			$(".view").removeClass("dealsgridview").addClass("dealslistview");
		});
		if($.browser.msie){
			$("#widget-404").css({
				"margin-bottom":"20px"	
			});		
		};
		if($.browser.mozilla){
			$("#widget-404").css({
				"margin-bottom":"20px"	
			});	
		}
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