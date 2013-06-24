(function ($) {
    $(document).ready(function () {
		$(window).load(function(){
		var ft =$.filtrify("container", "placeHolder", {
				hide     : false,
				callback : function ( query, match, mismatch ) {
					if ( mismatch.length ) $("div#reset").show();
            		else $("div#reset").hide();
					container.isotope({ filter : $(match) });
			}
		});
		$("div#reset span").click(function() {
        	ft.reset();
   		 });
		 
			 var container = $("#container");
				container.isotope({
					itemSelector : 'ul#container > li',
					layoutMode : 'masonry'
			});
		});
		
		   });
})(jQuery);