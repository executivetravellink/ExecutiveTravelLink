/**
 *
 * Default
 * Author: Balaji Varatharajan
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
**/

var char = new Array('', '', 'B', 'C', 'D', 'E');
$(function() {  
	
	$( "#tabs").ready(function(){
        $( "#tabs" ).tabs({"active": 1});
    }); 
	$( "#acheckin" ).datepicker({
		defaultDate: "+1d",
		minDate: 0,
		onSelect: function( selectedDate ) {
			var option = this.id == "checkin" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			dates.not( this ).datepicker( "option", option, date );
		}
	});
	$( ".flight1" ).datepicker({
		defaultDate: "+1d",
		minDate: 0,
		onSelect: function( selectedDate ) {
			var option = this.id == "checkin" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			dates.not( this ).datepicker( "option", option, date );
		}
	});
	$( ".flight2" ).datepicker({
		defaultDate: "+1d",
		minDate: 0,
		onSelect: function( selectedDate ) {
			var option = this.id == "checkin" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			dates.not( this ).datepicker( "option", option, date );
		}
	});
	
	$('.CarRentals a').click(function(){
	
	var dates1 = $( "#checkin1, #checkout2" ).datepicker({
		defaultDate: "+1d",
		minDate: 0,
		onSelect: function( selectedDate ) {
			var option = this.id == "checkin1" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			dates.not( this ).datepicker( "option", option, date );
			if(this.id == "checkin1"){
				var checkout =  $("#checkin1").datepicker("getDate" , '+3d');
				checkout.setDate(checkout.getDate() + 3);
				$('#checkout2').datepicker('setDate', checkout);
			}
			if(this.id == "checkout"){
				var startdate = $("#checkin1").datepicker("getDate");
				var enddate = $("#checkout2").datepicker("getDate");
				if(enddate < startdate){
				var checkin =  $("#checkout2").datepicker("getDate" , '-3d');
				checkin.setDate(checkin.getDate() - 3);
				$('#checkin1').datepicker('setDate', checkin);
				}
			}
		}
	});
	});
	
	
	$('.Hotels a').click(function(){
	
	var dates = $( "#checkin, #checkout" ).datepicker({
		defaultDate: "+1d",
		minDate: 0,
		onSelect: function( selectedDate ) {
			var option = this.id == "checkin" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			dates.not( this ).datepicker( "option", option, date );
			if(this.id == "checkin"){
				var checkout =  $("#checkin").datepicker("getDate" , '+3d');
				checkout.setDate(checkout.getDate() + 3);
				$('#checkout').datepicker('setDate', checkout);
			}
			if(this.id == "checkout"){
				var startdate = $("#checkin").datepicker("getDate");
				var enddate = $("#checkout").datepicker("getDate");
				if(enddate < startdate){
				var checkin =  $("#checkout").datepicker("getDate" , '-3d');
				checkin.setDate(checkin.getDate() - 3);
				$('#checkin').datepicker('setDate', checkin);
				}
			}
		}
	});
	});

	var dates = $( "#checkin, #checkout" ).datepicker({
		defaultDate: "+1d",
		minDate: 0,
		onSelect: function( selectedDate ) {
			var option = this.id == "checkin" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			dates.not( this ).datepicker( "option", option, date );
			if(this.id == "checkin"){
				var checkout =  $("#checkin").datepicker("getDate" , '+3d');
				checkout.setDate(checkout.getDate() + 3);
				$('#checkout').datepicker('setDate', checkout);
			}
			if(this.id == "checkout"){
				var startdate = $("#checkin").datepicker("getDate");
				var enddate = $("#checkout").datepicker("getDate");
				if(enddate < startdate){
				var checkin =  $("#checkout").datepicker("getDate" , '-3d');
				checkin.setDate(checkin.getDate() - 3);
				$('#checkin').datepicker('setDate', checkin);
				}
			}
		}
	});
	
	

	$('#norooms').change(function(){
		
		for(i=1;i<=$(this).val();i++){
			
			$('#guestdetails'+i).show();
		}
		for(i=5;i>$(this).val();i--){
			
			$('#guestdetails'+i).hide();
		}
		
	});
	
	$('.child').change(function(){
		
		var value = $(this).attr('rel');
		var show = 0;
		if($(this).val()!=0){
			show=1;
		}
		if(show){
			$('#child_age_heading'+value).show();
		}else{
			$('#child_age_heading'+value).hide();
		}
		for(i=1;i<=$(this).val();i++){
			
			$('#childage'+char[value]+i).show();
		}
		for(i=4;i>$(this).val();i--){
			
			$('#childage'+char[value]+i).hide();
		}
		
	});
	
	$('#noofsnrs').change(function(){
		
		var show = 0;
		if($(this).val()!=0){
			
			show=1;
		}
		if(show){
			$('#asenior_age_heading').show();
		}else{
			$('#asenior_age_heading').hide();
		}
		for(i=1;i<=$(this).val();i++){
			
			$('#asnrage'+i).show();
		}
		for(i=4;i>$(this).val();i--){
			
			$('#asnrage'+i).hide();
		}
		
	});
	
	$('#anochild').change(function(){
		
		var show = 0;
		if($(this).val()!=0){
			show=1;
		}
		if(show){
			$('#achild_age_heading').show();
		}else{
			$('#achild_age_heading').hide();
		}
		for(i=1;i<=$(this).val();i++){
			
			$('#achildage'+i).show();
		}
		for(i=4;i>$(this).val();i--){
			
			$('#achildage'+i).hide();
		}
		
	});
	
	$('#SearchBtn').click(function(){
		
		var action = $('#deeplinksearch').attr('action');
		
		if($('#destination').val() == ''){
			
			alert("Enter a Valid Destination");
			return false;
		}
		if($('#checkin').val() == ''){
			
			alert("Select Check In date");
			return false;
		}
		if($('#checkout').val() == ''){
			
			alert("Select Check Out date");
			return false;
		}
		
		var url='';
		url += '?'+$('#destination').attr('name') + '=' + $('#destination').val();
		url += '&'+$('#checkin').attr('name') + '=' + $('#checkin').val();
		
		 var d1 = $('#checkin').datepicker('getDate');
     	 var d2 = $('#checkout').datepicker('getDate');
     	 var diff = 0;
      	 if (d1 && d2) {
       	     diff = Math.floor((d2.getTime() - d1.getTime()) / (86400000)); // ms per day
      	 }
		
		url += '&NumOfNights=' + diff;
		for(i=1;i<=$('#norooms').val();i++){
			
			url += '&'+$('#noguests'+i).attr('name')+ '=' + $('#noguests'+i).val();
			if($('#nochild'+i).val() != 0){
				
				url += '&'+$('#nochild'+i).attr('name')+ '=' + $('#nochild'+i).val();
				for(j=1;j <= $('#nochild'+i).val();j++){

					url += '&'+$('#childage'+char[i]+j).attr('name')+ '=' + $('#childage'+char[i]+j).val();
				}
			}
			
		}
		if(url ==""){
			
		}else{
			var active = new Boolean();
				active = true;
					window.onbeforeunload = function(e){
						$(".preloader").css({"display": "block"});
					};
					setTimeout(function(){
						$("body").html(
							'<div id="modal-content">'+
								'<p class="yournow">Searching for the best deals with Executive Travel Link</p>'+
								'<img src="http://www.executivetravellink.com/301.gif" style="display: block;" class="preloader"/>'+
								'<p class="bold">Loading Your Search Results...</p>'+
							'</div>'
							);
					}, 1000)

					if(active === true){
						$("#modal").delay(8000).fadeOut("slow");
						setTimeout(function(){
							$("#modal").remove();
						}, 9000);
					} 
			window.location.href=action + url;
		}
		return false;
	});
	
	
	$('#CSearchBtn').click(function(){
		
		var action = $('#carsearch').attr('action');
		
		if($('#cardestination').val() == ''){
			
			alert("Enter a Valid Destination");
			return false;
		}
		if($('#checkin1').val() == ''){
			
			alert("Select Pick up date");
			return false;
		}
		if($('#checkout2').val() == ''){
			
			alert("Select Drop off date");
			return false;
		}
		
		var url='';
		url += '?PickupPoint=airport';
		url += '&'+$('#pickuppoint').attr('name') + '=' + $('#pickuppoint').val();
		url += '&'+$('#pickupstation').attr('name') + '=' + $('#pickupstation').val();
		url += '&'+$('#checkin1').attr('name') + '=' + $('#checkin1').val();
		
		 var d1 = $('#checkin1').datepicker('getDate');
     	 var d2 = $('#checkout2').datepicker('getDate');
     	 var diff = 0;
      	 if (d1 && d2) {
       	     diff = Math.floor((d2.getTime() - d1.getTime()) / (86400000)); // ms per day
      	 }
		
		url += '&NumOfNights=' + diff;
		url += '&'+$('#driverage').attr('name') + '=' + $('#driverage').val();
		
		//alert(action + url);
		if(url ==""){
			
		}else{
			var active = new Boolean();
				active = true;
					
					if(active === true){
						$("#modal").delay(8000).fadeOut("slow");
						setTimeout(function(){
							$("#modal").remove();
						}, 9000);
					} 
			window.location.href=action + url;
		}
		return false;
	});
	
	
	$('#ASearchBtn').click(function(){
		
		var action = $('#activitiessearch').attr('action');
		
		if($('#adestination').val() == ''){
			
			alert("Enter a Valid Destination");
			return false;
		}
		if($('#acheckin').val() == ''){
			
			alert("Select a date");
			return false;
		}
		var url='';
		url += '?'+$('#adestination').attr('name') + '=' + $('#adestination').val();
		url += '&'+$('#acheckin').attr('name') + '=' + $('#acheckin').val();
		
		url += '&'+$('#anoguests').attr('name')+ '=' + $('#anoguests').val();
		if($('#anochild').val() != 0){
			
			url += '&'+$('#anochild').attr('name')+ '=' + $('#anochild').val();
			for(j=1;j <= $('#anochild').val();j++){

				url += '&'+$('#achildage'+j).attr('name')+ '=' + $('#achildage'+j).val();
			}
		}
		if($('#noofsnrs').val() != 0){
			
			url += '&'+$('#noofsnrs').attr('name')+ '=' + $('#noofsnrs').val();
			for(j=1;j <= $('#noofsnrs').val();j++){

				url += '&'+$('#asnrage'+j).attr('name')+ '=' + $('#asnrage'+j).val();
			}
		}
		if(url ==""){
			
		}else{
			var active = new Boolean();
				active = true;
					window.onbeforeunload = function(e){
						$(".preloader").css({"display": "block"});
					};
					setTimeout(function(){
							$("body").html(
								'<div id="modal-content">'+
									'<p class="yournow">Searching for the best deals with Executive Travel Link</p>'+
									'<img src="http://www.executivetravellink.com/301.gif" style="display: block;" class="preloader"/>'+
									'<p class="bold">Loading Your Search Results...</p>'+
								'</div>'
							);
					}, 1000)
					if(active === true){
						$("#modal").delay(8000).fadeOut("slow");
						setTimeout(function(){
							$("#modal").remove();
						}, 9000);
					} 
			window.location.href=action + url;
		}
		return false;
	});
});
$( "#destination").ready(function(){
var citylist = ["A Coruna","Aachen","Aalborg","Aalesund","Aarhus","Abaco, Bahamas","Aberdeen","Aberdeen, MD","Abidjan","Abilene, KS","Abilene, TX","Abrantes","Abu Dhabi","Abuja","Abuja International","Acapulco","Acapulco, Mexico","Accra","Adana","Adelaide, SA","Adler/Sochi","Agadir","Agen","Agra","Aguascalientes","Ahmedabad","Aix en Provence","Aix Les Bains","Ajaccio","Ajman","Akron, OH","Akumal, Mexico","Akureyri","Al Ain","Alajuela, Costa Rica","Alanya","Albacete","Albany, GA","Albany, NY","Alberobello","Albi","Albuquerque, NM","Aleppo","Alexandria","Alexandria, LA","Alfta, Sweden","Algarve","Algiers","Alicante","Alice Springs, NT","Almeria","Alpharetta, GA","Alta","Amarillo, TX","Amiens","Amman","Amritsar","Amsterdam","Amuru, Uganda","Anaheim, CA","Anchorage, AK","Ancona","Andorra","Angers","Angouleme","Anguilla","Ankara","Annaba","Annecy","Antalya","Antananarivo (Tanannarive","Antigua Guatemala","Antigua, V.C","Antigua, West Indies","Antwerp","Appleton, WI","Aqaba","Arboga, Sweden","Arcachon","Are, Sweden","Arenal, Costa Rica","Arezzo","Arild, Sweden","Arjeplog, Sweden","Arles","Arlington, TX","Arrecife/Lanzarote","Aruba","Arusha, Tanzania","Arvidsjaur, Sweden","Askersund, Sweden","Aspen, CO","Assisi","Astana","Asturias","Asuncion","Aswan","Athens","Athens, GA","Atlanta, GA","Atlantic City, NJ","Auckland","Augsburg","Augusta, ME","Aurangabad","Austin, TX","Auxerre","Avignon","Avila","Avon, CO","Ayia Napa","Azores","Bad Kissingen","Badajoz","Baden-Baden","Bahrain","Bakersfield, CA","Baku","Balestrand","Bali","Balikesir","Baltimore, MD","Bandar Seri Begawan","Bandung","Banff, AB","Bangalore","Bangkok, Thailand","Bangor, ME","Banjul","Bar Harbor, ME","Barahona","Barbados","Barcelona, Spain","Bariloche, Argentina","Baroda","Barrancas del Cobre","Barranquilla","Basel","Basingstoke","Bath","Baton Rouge, LA","Battambang","Bayreuth","Beaumont, TX","Beaune","Beauvais","Beckley, WV","Bedford","Beijing, China","Beira","Beirut","Belek","Belem, PA","Belfast","Belize","Belize City","Belleville, ON","Bellingham, WA","Belo Horizonte, MG","Benidorm","Berchtesgaden","Bergamo","Bergen","Bergkvara, Sweden","Berlin, Germany","Bermuda","Berne","Berry Islands, Bahamas","Besancon","Bhopal","Bhubaneswar","Biarritz","Bielefeld","Bilbao","Billings, MT","Biloxi, MS","Birmingham","Birmingham, AL","Bishop, CA","Blackpool","Bled","Blenheim","Bloemfontein","Blois","Bloomington, IL","Bloomington, IN","Bloomington, MN","Boca Chica","Boca Chica, Dominican Rep","Boca Raton, FL","Bocas Del Toro","Boden, Sweden","Bodrum","Bogota, Colombia","Bohol","Boise, ID","Bologna","Bolton","Bolzano","Bombay","Bora Bora","Boras","Bossier City, LA","Boston, MA","Botswana, Africa","Bourgas/Burgas","Bournemouth","Bozeman, MT","Brampton, ON","Branson, MO","Brasilia, DF","Bratislava","Braunschweig","Breckenridge, CO","Bregenz","Bremen","Brescia","Brest","Bridgetown","Brighton","Brisbane, QLD","Bristol","Brno","Brockville, ON","Broome, WA","Brugge","Brussels","Bryce Canyon National Par","Bucaramanga","Bucharest","Budapest","Buenos Aires, Argentina","Buffalo/Niagara Falls, NY","Bulawayo","Burgos","Burlington, VT","Bursa","Butte, MT","Buzios, RJ","Cabarete, Costa Rica","Cabarete, Dominican Repub","Cabo San Lucas, Mexico","Cabrera, Dominican Republ","Caceres","Cadiz","Caguas, Puerto Rico","Cairns, QLD","Cairo","Calama - El Loa","Calcutta (Kolkata)","Calgary, AB","Cali","Cambridge Bay","Cambrigde","Campeche","Canakkale","Canberra, ACT","Cancun, Mexico","Cannes","Cape Canaveral, FL","Cape Town","Cape Verde, Cape Verde","Capri","Caracas, Venezuela","Carcassonne","Cardiff","Carlisle","Carlsbad, CA","Carolina, Puerto Rico","Cartagena","Casablanca","Castellon","Cat Island, Bahamas","Cebu","Cedar Rapids, IA","Ceuta","Champaign, IL","Chandigarh","Changchun","Chantilly","Charleston, SC","Charlotte, NC","Charlottesville, VA","Chartres","Chattanooga, TN","Cheltenham","Chemnitz","Chengdu","Chennai (Madras)","Chester","Chetumal","Cheyenne, WY","Chiang Mai","Chiang Rai","Chicago, IL","Chihuahua","Chios","Chisinau","Chitose","Chongqing","Christ Church, Barbados","Christchurch","Chumphon","Cincinnati, OH","Ciudad Juarez","Ciudad Real","Ciudad Victoria","Clearwater, FL","Clermont Ferrand","Cleveland, OH","Cluj","Clute, TX","Coatzacoalcos","Cochabamba","Cochin","Colima","College Station, TX","Colmar","Colombo","Colon","Colorado Springs, CO","Columbia, MO","Columbia, SC","Columbus, GA","Columbus, OH","Como","Concord, NH","Constanta","Constantine","Copenhagen","Cordoba","Cordoba, Argentina","Corfu","Cork","Corpus Christi, TX","Costa Brava","Costa de Azahar","Costa de la Luz (Huelva)","Costa Rica","Cotonou","Cottbus","Coventry","Cozumel, Mexico","Crete","Cuernavaca","Culiacan","Curacao","Cuzco","Da Nang","Dakar","Dalaman","Dalian","Dallas, TX","Damascus","Dammam","Danville, VA","Darjeeling","Davao","Davenport, IA","Davos","Dayton, OH","Daytona Beach, FL","Dead Sea","Decatur, IL","Del City, OK","Del Rio, TX","Den Haag","Denton, TX","Denver, CO","Derby, UK","Dessau","Destin, FL","Detroit, MI","Dhaka","Diani Beach, Kenya","Dijon","Discovery Bay, Jamaica","Djerba","Doha","Dominical","Dortmund","Dresden","Drummondville, QC","Dubai, United Arab Emirat","Dublin","Dublin, OH","Dubois, PA","Dubrovnik","Duck Key, FL","Duisburg","Dundee","Dusseldorf","Eagle Pass, TX","Edinburgh","Edmonton, AB","Eilat","Eindhoven","El Jadida","El Paso, TX","Eleuthera, Bahamas","Elkhart, IN","Ensenada","Erfurt","Erie, PA","Espoo","Essen","Esterillos Oeste, Costa R","Eugene, OR","Evian les Bains","Exeter","Exuma, Bahamas","Fairbanks, AK","Falmouth, Jamaica","Faro","Fayetteville/Ft. Bragg, N","Fes","Flagstaff, AZ","Flint, MI","Florence","Fort de France","Fort Lauderdale, FL","Fort McMurray","Fort Myers, FL","Fort Stockton, TX","Fort Walton Beach, FL","Fort Worth, TX","Fortaleza, CE","Frankfurt","Fredericton, NB","Freeport, Bahamas","Freiburg","Fresno, CA","Freudenstadt","Fuengirola","Fuerteventura","Fukuoka","Funchal (Madeira)","Fuzhou","Gainesville, FL","Galway","Garmisch Partenkirchen","Gatlinburg, TN","Gaziantep","Gdansk","Geneva","Genoa","Gerona","Gettysburg, PA","Ghent (Gent)","Gibraltar","Girona","Gisakura-Rwanda","Glacier National Park, MT","Glasgow","Glendale, WI","Goa","Gold Coast, QLD","Golden, CO","Gothenburg","Gran Canaria","Granada","Granada, Nicaragua","Grand Bahama, Bahamas","Grand Canyon, AZ","Grand Cayman","Grand Junction, CO","Grand Rapids, MI","Graz","Great Smokey Mountain, NC","Green Bay, WI","Greenville, NC","Greenwood Village, CO","Grenada","Grenoble","Gretna, LA","Groningen","Grosseto","Guadalajara, ES","Guadalajara, Mexico","Guanacaste, Costa Rica","Guanajuato","Guangzhou","Guatemala City, Guatemala","Guayaquil","Guilin","Gulfport, MS","Haikou","Haines, AK","Hakone","Halifax, NS","Hamburg","Hameenlinna","Hamilton, New Zealand","Hamilton, ON","Hammamet","Hangzhou","Hannover","Hanoi","Harare","Harbin","Harbor Island, Bahamas","Harlingen, TX","Harrisburg, PA","Harstad","Hartford, CT","Hasselt","Havana","Heidelberg","Helena, MT","Helsingborg","Helsinki","Heredia, Costa Rica","Hermosa Palms, Costa Rica","Hermosillo","Big Island, HI","Hilton Head Island, SC","Hiroshima","Ho Chi Minh City (Saigon)","Hobart, TAS","Holguin","Homewood, AL","Hong Kong, China","Honolulu, HI","Hot Springs, AR","Houston, TX","Hsinchu","Hualien","Huatulco","Huelva","Huesca","Hull","Humacao, Puerto Rico","Huntington, WV","Huntsville, AL","Huntsville, TX","Hurghada","Hydaburg, AK","Iasi","Ibague","Ica","Idaho Falls, ID","Iguazu Falls (AR)","Imerovigli, Greece","Incheon","Independence, OH","Indianapolis, IN","Ingolstadt","Innsbruck","Interlaken","Inverness","Ipswich","Iquique","Isla Mujeres, Mexico","Isle of Skye","Istanbul, Turkey","Ithaca, NY","Ixtapa, Mexico","Izmir","Jackson Hole, WY","Jackson, MI","Jackson, MS","Jacksonville, FL","Jacksonville, IL","Jaco","Jaen","Jaipur","Jaisalmer","Jakarta","Jamestown, NY","Janesville, WI","Jeddah","Jeju (Cheju)","Jinan","Jodhpur","Johannesburg","Johnson City, NY","Joplin, MO","Juan Dolio, Dominican Rep","Jyvaskyla","Kahului, HI","Kaiserslautern","Kajaani","Kamloops, BC","Kamphaeng Phet","Kanab, UT","Kanchanaburi","Kanpur","Kansas City, KS","Kansas City, MO","Kaohsiung","Karlsruhe","Karlstad","Kasane, Botswana","Kassel","Kathmandu","Katowice","Katsiueli, Greece","Kauai Island, HI","Kaunas","Kazan (Ka San)","Kedah","Keetmanshoop","Kefalonia","Kemer","Kent","Kerry County","Key West, FL","Khajuraho","Kharkov","Khon Kaen","Kiel","Kiev","Kigali - Gregoire Kayiban","Killeen TX","Killington, VT","Kingscote","Kingsport, TN","Kingston, Jamaica","Kingston, NS","Klaipeda","Klamath Fall, OR","Knoxville, TN","Koblenz","Koh Lanta","Koh Samui Island","Kolding","Kolkata (Calcutta)","Koln","Kos","Kota Kinabalu","Krabi","Krakow","Kuala Lumpur, Malaysia","Kuantan","Kuching","Kunming","Kuopio","Kusadasi","Kuusamo","Kuwait","Kyoto","La Fortuna, Costa Rica","La Gomera","La Palma","La Paz","La Paz, MX","La Rioja","La Rochelle","La Romana, Dominican Repu","Lafayette, LA","Lagos","Lake Charles, LA","Lake Havasu City, AZ","Lake Tahoe, CA","Lakeland, FL","Lampang","Lanai City, HI","Lancaster","Lancaster, PA","Lanzarote","Lapland","Laredo, TX","Largo, FL","Larnaca","Las Cruces, NM","Las Palmas","Las Vegas, NV","Latakia","Latina","Lausanne","Lawton, OK","Layton, UT","Lazaro Cardenas","Lazaro Cardenas, Mexico","Leeds","Lefkada","Leicester","Leiden","Leipzig","Leon","Leon, ES","Lerida","Lesvos Island","Lexington, KY","Liege","Lihue, HI","Lille","Lima","Limassol","Limoges","Lincoln, NE","Linz","Lisbon","Liverpool","Livingstone","Livorno","Ljubljana","Loch Lomond","Lodz","Loei","Lombok","Lome","London, UK","Long Island, Bahamas","Loreto","Los Angeles, CA","Louisville, KY","Lourdes","Luanda","Luang Prabang","Lubbock, TX","Lubeck","Lublin","Lucca","Lucerne","Lucknow","Lufkin, TX","Luga","Lugano","Lugo","Lusaka","Luxembourg","Luxor","Lvov (Lwow, Lemberg)","Lynchburg, VA","Lyon","Maastricht","Macau","Maceio","Machu Picchu","Macon, GA","Madinah","Madison, WI","Madrid, Spain","Mae Hong Son","Magdeburg","Mahdia","Mahon","Maidenhead","Mainz","Malacca","Malaga","Malmo (Malmoe)","Malta","Mammoth Lakes, CA","Manado","Managua, Nicaragua","Manassas, VA","Manaus","Manchester","Manchester, NH","Manila","Manizales","Mannheim","Mansfield, OH","Mantova","Manukau City","Manzini","Maputo","Mar del Plata, Argentina","Marco Island, FL","Mardin","Margarita Island","Marianske Lazne","Maribor","Marmaris","Marrakech","Marsa Alam","Marseille","Martinique","Masvingo","Matera","Maui, HI","Mauritius","Mazatlan, Mexico","McAllen, TX","Mechelen","Medan","Medellin","Medford, OR","Melbourne, FL","Melbourne, VIC","Melilla","Memphis, TN","Mendoza, Argentina","Menorca","Merida","Meridian, MS","Merrillville, IN","Mesa Verde National Park,","Mesa, AZ","Metz","Mexicali","Mexico City, Mexico","Miami, FL","Miami Beach, FL","Midland, TX","Milan, Italy","Milwaukee, WI","Minneapolis, MN","Minsk","Missula, MT","Moab, UT","Mobile, AL","Modena","Moline, IL","Molokai, HI","Mombasa","Monaco","Monastir","Moncton, NB","Monroe, LA","Mont Tremblant, QC","Montego Bay, Jamaica","Monterrey, Mexico","Monteverde, Costa Rica","Montevideo, Uruguay","Montgomery, AL","Montpellier","Montreal, QC","Montreux","Monument Valley, UT","Morelia","Moscow","Mulhouse","Mumbai","Munich, Germany","Murcia","Murmansk","Muscat","Muskegon, MI","Muskoka, ON","Mykonos, Greece","Myrtle Beach, SC","Mysore","Nabeul","Nacogdoches, TX","Nagasaki","Nagoya","Nagpur","Nairobi, Kenya","Nakhon Ratchasima","Nakhon Si Thammarat","Namur","Nancy","Nanking (Nanjing)","Nantes","Napier-Hastings","Naples","Naples, FL","Narvik","Nashville, TN","Nassau, Bahamas","Natal, RN","Navarra","Naxos","Negril, Jamaica","Nelson","Nelspruit","Neuquen","Nevers","Nevis","New Delhi","New Haven, CT","New Orleans, LA","New Providence, Bahamas","New York, NY","Newburgh, NY","Newcastle, UK","Newport","Newport Beach, CA","Newport, RI","Nha Trang, Vietnam","Niagara Falls, NY","Niagara Falls, ON","Nice","Nicosia","Nimes","Norfolk, VA","Norrkoping","North Bay, ON","North Bend, OR","Northampton","Norwich","Nosara, Costa Rica","Nottingham","Novi Sad","Novosibirsk","Nuevo Laredo","Nuevo Vallerta, Mexico","Nuremberg, Germany","Oahu, HI","Oakland, CA","Oaxaca, Mexico","Oban","Ocala, FL","Ocean City, MD","Ocho Rios, Jamaica","Odense","Odessa","Odessa, TX","Offenburg","Ohrid","Okayama","Okeechobee, FL","Okinawa","Oklahoma City, OK","Olomouc","Olympia, WA","Omaha, NE","Ontario, CA","Oranjestad","Orem, UT","Orlando, FL","Orleans","Osaka","Oshkosh, WI","Oslo","Osorno","Ostende","Ottawa, ON","Ouagadougou","Oujda","Oulu","Ourense","Oviedo","Owen Sound","Oxford","Oxnard, CA","Padova","Paducah, KY","Paipa","Pakersburg, OH","Palembang","Palencia","Palm Beach, Aruba","Palm Coast, FL","Palm Desert, CA","Palma de Mallorca","Pamplona","Pamporovo","Panama","Panama City, FL","Panama City, Panama","Paphos","Paradise Island, Bahamas","Paramaribo","Paris","Park City, UT","Parma","Parnu","Paros, Greece","Pasco, WA","Patmos, Greece","Pattaya","Pekanbaru","Penang","Pensacola Beach, FL","Pensacola, FL","Penticton, BC","Peravia, Dominican Republ","Pereira","Perpignan","Perrysburg, OH","Perth, UK","Perth, WA","Perugia","Peterborough, ON","Petra","Phetchaboon","Phi Phi Island","Philadelphia, PA","Phitsanulok","Phnom Penh","Phoenix, AZ","Phuket, Thailand","Pigeon Forge, TN","Pisa","Pittsburgh, PA","Plantation, FL","Plattsburgh, NY","Playa Chiquita, Costa Ric","Playa Del Carmen, Mexico","Playa Ocotal, Costa Rica","Pleasant Prairie, WI","Plovdiv","Plymouth","Pocatello, ID","Poipu Beach, Kauai","Poitiers - Biard","Ponta Delgada","Pontevedra","Port Angeles, WA","Port Elizabeth","Port of Spain, Trinidad","Port Saint Lucie, FL","Portland, Jamaica","Portland, ME","Portland, OR","Porto","Portsmouth, NH","Poza Rica, Mexico","Poznan","Prague","Praslin Island","Preston","Protaras","Providence, RI","Providenciales","Pu San (Pusan)","Puebla, Mexico","Pueblo, CO","Puerto Escondido","Puerto Montt","Puerto Morelos, Mexico","Puerto Plata, Dominican R","Puerto Vallarta, Mexico","Puerto Varas","Pula","Pune (Poona)","Puno","Punta Arenas","Punta Arenas, Costa Rica","Punta Cana, Dominican Rep","Punta Del Este","Puntarenas","Qingdao","Quebec, QC","Queenstown, New Zealand","Quepos, Costa Rica","Queretaro","Queretaro, Mexico","Quimper","Quito","Rabat","Rajkot","Raleigh Durham, NC","Raleigh, NC","Rangoon","Rapid City, SD","Ras Al Khaymah","Ravenna","Rayong","Reading, PA","Recife, PE","Redding, CA","Regensburg","Regina, SK","Reims","Reina Sofia, Teneriffe","Rennes","Reno, NV","Reykjavik","Reynosa","Rhinelander, WI","Rhodos","Richmond, VA","Riga","Rijeka","Rimini","Rincon, Puerto Rico","Rio De Janeiro, RJ","Río Grande, Puerto Rico","Rio San Juan, Dominican R","Riverton, WY","Riviera Maya, Mexico","Riyadh","Roanoke, VA","Roatan","Roatan, Honduras","Rochester, MN","Rochester, NY","Rock Springs, WY","Rome, Italy","Rosario","Roswell, GA","Rothenburg","Rotterdam","Rovaniemi","Runaway Bay, Jamaica","Ruse","Sacramento, CA","Saginaw, MI","Saint Augustine, FL","Saint Brieuc","Saint John, NB","Saint Nazaire","Saint Paul, MN","Saint Petersburg, FL","Saint Tropez","Salalah","Salamanca","Salem, OR","Salerno","Salinas","Salt Lake City, UT","Salta","Saltillo","Salvador, BA","Salzburg","Samana","Samana, Dominican Republi","Samos","San Andres","San Angelo, TX","San Antonio, TX","San Bernardino, CA","San Diego, CA","San Francisco, CA","San Ignacio","San Jose del Cabo, Mexico","San Jose, CA","San Jose, Costa Rica","San Juan Del Sur","San Juan, Puerto Rico","San Luis Potosi","San Marcos, TX","San Miguel de Allende","San Pedro Sula","San Remo","San Sebastian","Santa Ana","Santa Ana, Costa Rica","Santa Barbara, CA","Santa Barbara, Costa Rica","Santa Cruz de la Palma","Santa Cruz, Argentina","Santa Fe, Argentina","Santa Fe, Mexico","Santa Fe, NM","Santa Marta","Santander","Santiago de Compostela","Santiago, Chile","Santiago, Cuba","Santiago, Dominican Repub","Santo Domingo, Dominican","Santorini Island, Greece","Santos, SP","Sanya","Sarajevo","Sarasota/Bradenton, FL","Saskatoon, SK","Sault Sainte Marie, ON","Savannah, GA","Schaumburg, IL","Schwerin","Scottsdale, AZ","Sea Horse Ranch, Dominica","Seattle, WA","Secaucus, NJ","Sedona, AZ","Segovia","Sendai","Seoul","Sevilla","Sfax","Shanghai, China","Sharjah","Sharm El Sheikh","Sheboygan, WI","Sheffield","Shenandoah, VA","Shenyang","Shenzhen","Sheridan, WY","Shreveport, LA","Sibiu","Sicily","Side","Siem Reap","Siena","Silkeborg","Singapore","Sioux Falls, SD","Skiathos","Skopje","Slidell, LA","Sofia","Sokcho","Solothurn","Sosua, Dominican Republic","Southampton","Southgate, MI","Spartanburg, SC","Split","Spokane, WA","Springdale, AR","Springdale, OH","Springfield, IL","Springfield, MO","Srinagar","St. Albans","St. Andrews","St. Andrews, NB","St. Croix","St. Etienne","St. James, Barbados","St. John","St. John's","St. Kitts","St. Louis, MO","St. Lucia","St. Malo","St. Martin","St. Michael, Barbados","St. Moritz","St. Peter","St. Peter, Barbados","St. Petersburg","St. Petersburg, FL","St. Thomas","Stafford, Texas","State College, PA","Stavanger","Stevenage","Stevens Point, WI","Stirling","Stockton, CA","Stoke on Trent","Strasbourg","Stratford Upon Avon","Stresa","Stuttgart","Sudbury, ON","Sukhothai","Sulphur, LA","Summerside","Sun City","Sun Valley, ID","Sunrise, FL","Sunshine Coast","Surabaya","Surat","Surrey","Suzhou","Swakopmund","Swansea","Swindon","Sydney","Sydney, NSW","Syracuse, NY","Taba Heights","Tabarka","Tacoma, WA","Taichung","Tainan","Taipei","Tak","Tallahassee, FL","Tallinn","Tamarindo, Costa Rica","Tampa, FL","Tampere","Tampico","Tanger","Taoyuan","Tartu","Tashkent","Taxco","Tbilisi","Te Anau","Tegucigalpa","Tel Aviv","Temple Hills, MD","Templepatrick","Temuco","Tenerife","Terni","Terre Haute, IN","Texarkana, AR","Texarkana, TX","The Woodlands, Texas","Thessaloniki","Tianjin","Tijuana","Timisoara","Tinos, Greece","Tirana","Tirgu Mures","Tivat","Tlaxcala","Tobago","Tokyo","Toledo","Toluca","Topeka, KS","Torola","Toronto, ON","Torreon","Tortola","Toulon","Toulouse","Tours","Trabzon","Trang","Traverse City, MI","Treviso","Trier","Trieste","Tromsoe","Trondheim","Trubsee, Switzerland","Tsumeb","Tucson, AZ","Tulepo, MS","Tulsa, OK","Tunis","Turin","Turks and Caicos Island","Turku","Tuscaloosa, AL","Twin Falls, ID","Tyler, TX","Ubon Ratchathani","Udaipur","Udon Thani","Uganda, Africa","Ulm","Umea","Uppsala","Ushuaia","Utrecht","Vail, CO","Valdosta, GA","Valence","Valencia, Spain","Valladolid","Valparaiso","Valverde","Van","Vancouver, BC","Vannes","Varadero","Varanasi","Varese","Varna","Veliko Turnovo","Venice","Veracruz, Mexico","Verona","Versailles","Vicenza","Vicksburg, MS","Victoria Falls","Victoria, BC","Victoria, TX","Vidin","Vienna","Vientiane","Vieques, Puerto Rico","Vigo","Villa la Angostura","Villahermosa","Vilnius","Virginia Beach, VA","Visalia, CA","Vitoria, Spain","Voss","Waco, TX","Wakefield","Walla Walla, WA","Warsaw","Warwick","Washington, DC","Waterloo, IA","Wausau, WI","Wavre","Weimar","Wellington","Wenatchee, WA","West Palm Beach, FL","West Yellowstone, MT","Whangarei","Whistler, BC","White House, Jamaica","Wichita Falls, TX","Wichita, KS","Wiesbaden","Waikiki Beach, HI","Williamsburg, VA","Wilmington, DE","Wilmington, NC","Wilna (Vilnius)","Winchester","Windermere","Windhoek","Windsor","Windsor, ON","Winnipeg, MB","Winston Salem, NC","Wismar","Woodstock","Wroclaw","Wuhan","Wurzburg","Xalapa","Xiamen","Xian","Xi'an - Xianyang","Yakima, WA","Yellowknife, NT","Yerevan","Yogyakarta","Yokohama","York","Yosemite Nat'l Park, CA","Yuma, AZ","Zacatecas","Zadar","Zagora","Zagreb","Zakopane","Zambia, South Africa","Zamora","Zanzibar, Tanzania","Zaragoza","Zermatt","Zion National Park, UT","Zugspitze, Germany","Zurich"];
	$( "#destination" ).autocomplete({
		source: citylist,
		max: 10,
		minLength: 2,
		change: function(event, ui){
			var userData = $.data(this);
			console.log(userData.autocomplete);
			// if(userData.autocomplete= "undefined"){
			// 	alert("sup");
			// }else{
				
			// }
		}
	});
var activitieslist = ["A Coruna","Aberdeen","Agadir","Alajuela, Costa Rica","Alanya","Alexandria","Algarve","Alicante","Amsterdam","Andorra","Antalya","Aqaba","Arrecife/Lanzarote","Aruba","Arusha, Tanzania","Asturias","Asuncion","Aswan","Athens, GA","Atlanta, GA","Austin, TX","Avignon","Baku","Bali","Bangkok, Thailand","Barahona","Barrancas del Cobre","Barranquilla","Bath","Beijing, China","Belek","Belfast","Benidorm","Berlin, Germany","Bilbao","Blackpool","Boca Chica","Bochum","Bogota, Colombia","Boston, MA","Bournemouth","Bratislava","Brighton","Brno","Brooklyn, NY","Brussels","Bucharest","Budapest","Buenos Aires, Argentina","Cabarete, Dominican Repub","Cabo San Lucas, Mexico","Cadiz","Cairo","Cali","Cambrigde","Cancun, Mexico","Cannes","Cape Town","Cardiff","Cartagena","Chiang Mai","Chiang Rai","Chicago, IL","Copenhagen","Costa de Azahar","Costa de la Luz (Huelva)","Costa Rica","Cozumel, Mexico","Cuzco","Da Nang","Dalaman","Den Haag","Denver, CO","Detroit, MI","Djerba","Dubai, United Arab Emirat","Dublin","Dubuque, IA","Edinburgh","Faro","Florence","Fuengirola","Fuerteventura","Gdansk","Geneva","Gerona","Girona","Glasgow","Gran Canaria","Granada","Grand Canyon, AZ","Guadalajara, Mexico","Guanacaste, Costa Rica","Guanajuato","Guatemala City, Guatemala","Guilin","Halifax, NS","Hammamet","Hanoi","Helsinki","Heredia, Costa Rica","Hilo, HI","Ho Chi Minh City (Saigon)","Hong Kong, China","Honolulu, HI","Houston, TX","Huatulco","Hurghada","Ibiza","Inverness","Istanbul, Turkey","Ixtapa, Mexico","Juan Dolio, Dominican Rep","Kauai Island, HI","Kedah","Kemer","Kingston, NS","Koh Samui Island","Koln","Konya","Kota Kinabalu","Krabi","Krakow","Kuala Lumpur, Malaysia","Kusadasi","La Paz, MX","Lanzarote","Las Palmas","Las Vegas, NV","Lausanne","Lihue, HI","Lima","Limassol","Lisbon","Liverpool","Livorno","London, UK","Los Angeles, CA","Luga","Luxembourg","Luxor","Lyon","Madrid, Spain","Mae Hong Son","Mahon","Malaga","Malta","Manchester","Manchester, NH","Marmaris","Marrakech","Marsa Alam","Marseille","Maui, HI","Mauritius","Medellin","Menorca","Mexico City, Mexico","Miami, FL","Milan, Italy","Moncton, NB","Montego Bay, Jamaica","Monterey, CA","Montreal, QC","Moscow","Munich, Germany","Nairobi, Kenya","Naples","Nashville, TN","New Orleans, LA","New York, NY","Newport News, VA","Nha Trang, Vietnam","Niagara Falls, ON","Nice","Oaxaca, Mexico","Oranjestad","Orlando, FL","Oslo","Ottawa, ON","Oxford","Padova","Palm Springs, CA","Palma de Mallorca","Panama City, Panama","Paphos","Paris","Pattaya","Penang","Petra","Philadelphia, PA","Phnom Penh","Phuket, Thailand","Pisa","Poipu Beach, Kauai","Poitiers - Biard","Poznan","Prague","Praslin Island","Providenciales","Puerto Plata, Dominican R","Puerto Vallarta, Mexico","Pula","Punta Cana, Dominican Rep","Quebec, QC","Quito","Reina Sofia, Teneriffe","Reykjavik","Riga","Rijeka","Rio De Janeiro, RJ","Riviera Maya, Mexico","Rome, Italy","Rotterdam","Sacramento, CA","Salzburg","San Andres","San Antonio, TX","San Diego, CA","San Francisco, CA","San Jose, Costa Rica","Santa Cruz, Bolivia","Santa Marta","Santander","Santiago de Compostela","Santo Domingo, Dominican","Savannah, GA","Seattle, WA","Sevilla","Shanghai","Sicily","Side","Siem Reap","Singapore","Sofia","St. Petersburg","St. Petersburg (Leningrad","Stratford Upon Avon","Taipei","Tallinn","Tel Aviv","Tenerife","Toledo","Toronto, ON","Trier","Turin","Utrecht","Valencia, Spain","Vancouver, BC","Venice","Veracruz, Mexico","Verona","Victoria, BC","Vienna","Vilnius","Warsaw","Warwick","Washington, DC","Whistler, BC","Wilna (Vilnius)","Windhoek","Windsor","Wroclaw","Xian","Xi'an - Xianyang","Yerevan","York","Zambia, South Africa"];


// var carlist = [{id:'1',label:'Aberdeen, SD',airportcode:'ABR'},{id:'2',label:'Abilene, TX',airportcode:'ABI'},{id:'3',label:'Akron, OH',airportcode:'CAK'},{id:'4',label:'Albany, GA',airportcode:'ABY'},{id:'5',label:'Albany, NY',airportcode:'ALB'},{id:'6',label:'Albuquerque, NM',airportcode:'ABQ'},{id:'7',label:'Alexandria, LA',airportcode:'AEX'},{id:'8',label:'Allentown, PA',airportcode:'ABE'},{id:'9',label:'Altoona, PA',airportcode:'AOO'},{id:'10',label:'Amarillo, TX',airportcode:'AMA'},{id:'11',label:'Anchorage, AK',airportcode:'ANC'},{id:'12',label:'Ann Arbor, MI',airportcode:'ARB'},{id:'13',label:'Anniston, AL',airportcode:'ANB'},{id:'14',label:'Appelton, WI',airportcode:'ATW'},{id:'15',label:'Asheville, NC',airportcode:'AVL'},{id:'16',label:'Aspen, CO',airportcode:'ASE'},{id:'17',label:'Athens, GA',airportcode:'AHN'},{id:'18',label:'Athens, OH',airportcode:'ATO'},{id:'19',label:'Atlanta, GA',airportcode:'ATL'},{id:'20',label:'Atlantic City, NJ',airportcode:'ACY'},{id:'21',label:'Augusta, GA',airportcode:'AGS'},{id:'22',label:'Augusta, ME',airportcode:'AUG'},{id:'23',label:'Austin, TX',airportcode:'AUS'},{id:'24',label:'Bakersfield, CA',airportcode:'BFL'},{id:'25',label:'Baltimore, MD',airportcode:'BWI'},{id:'26',label:'Bangor, ME',airportcode:'BGR'},{id:'27',label:'Bar Harbor, ME',airportcode:'BHB'},{id:'28',label:'Baton Rouge, LA',airportcode:'BTR'},{id:'29',label:'Billings, MT',airportcode:'BIL'},{id:'30',label:'Birmingham, AL',airportcode:'BHM'},{id:'31',label:'Boise, ID',airportcode:'BOI'},{id:'32',label:'Boston, MA',airportcode:'BOS'},{id:'33',label:'Bridgeport, CT',airportcode:'BDR'},{id:'34',label:'Buffalo/Niagara Falls, NY',airportcode:'BUF'},{id:'35',label:'Burbank, CA',airportcode:'BUR'},{id:'36',label:'Cambridge, MD',airportcode:'CGE'},{id:'37',label:'Carlsbad, CA',airportcode:'CLD'},{id:'38',label:'Casper, WY',airportcode:'CPR'},{id:'39',label:'Cedar City, UT',airportcode:'CDC'},{id:'40',label:'Cedar Rapids, IA',airportcode:'CID'},{id:'41',label:'Charleston, SC',airportcode:'CHS'},{id:'42',label:'Charleston, WV',airportcode:'CRW'},{id:'43',label:'Charlotte, NC',airportcode:'CLT'},{id:'44',label:'Chattanooga, TN',airportcode:'CHA'},{id:'45',label:'Chicago, IL',airportcode:'ORD'},{id:'46',label:'Chicago, IL',airportcode:'MDW'},{id:'47',label:'Cincinnati, OH',airportcode:'CVG'},{id:'48',label:'Cleveland, OH',airportcode:'CLE'},{id:'49',label:'Cody, WY',airportcode:'COD'},{id:'50',label:'Colorado Springs, CO',airportcode:'COS'},{id:'51',label:'Columbus, OH',airportcode:'CMH'},{id:'52',label:'Dallas, TX',airportcode:'DFW'},{id:'53',label:'Dayton, OH',airportcode:'DAY'},{id:'54',label:'Detroit, MI',airportcode:'DTW'},{id:'55',label:'Durango, CO',airportcode:'DRO'},{id:'56',label:'El Paso, TX',airportcode:'ELP'},{id:'57',label:'Fairbanks, AK',airportcode:'FAI'},{id:'58',label:'Flagstaff, AZ',airportcode:'FLG'},{id:'59',label:'Fort Lauderdale, FL',airportcode:'FLL'},{id:'60',label:'Fort Myers, FL',airportcode:'FMY'},{id:'61',label:'Fort Wayne, IN',airportcode:'FWA'},{id:'62',label:'Fresno, CA',airportcode:'FAT'},{id:'63',label:'Gatlinburg, TN',airportcode:'GKT'},{id:'64',label:'Grand Canyon, AZ',airportcode:'GCN'},{id:'65',label:'Grand Rapids, MI',airportcode:'GRR'},{id:'66',label:'Green Bay, WI',airportcode:'GRB'},{id:'67',label:'Greensboro, NC',airportcode:'GSO'},{id:'68',label:'Greenville, NC',airportcode:'PVG'},{id:'69',label:'Gulfport, MS',airportcode:'GPT'},{id:'70',label:'Hickory, NC',airportcode:'HKY'},{id:'71',label:'Honolulu, HI',airportcode:'HNL'},{id:'72',label:'Houston, TX',airportcode:'HOU'},{id:'73',label:'Houston, TX',airportcode:'IAH'},{id:'74',label:'Indianapolis, IN',airportcode:'IND'},{id:'75',label:'Jackson Hole, WY',airportcode:'JAC'},{id:'76',label:'Jackson, MI',airportcode:'JXN'},{id:'77',label:'Jackson, MS',airportcode:'JAN'},{id:'78',label:'Jacksonville, FL',airportcode:'JAX'},{id:'79',label:'Jamestown, ND',airportcode:'JMS'},{id:'80',label:'Jamestown, NY',airportcode:'JHW'},{id:'81',label:'Jefferson City, MO',airportcode:'JEF'},{id:'82',label:'Juneau, AK',airportcode:'JNU'},{id:'83',label:'Kahului, HI',airportcode:'OGG'},{id:'84',label:'Kansas City, MO',airportcode:'MCI'},{id:'85',label:'Key West, FL',airportcode:'EYW'},{id:'86',label:'Knoxville, TN',airportcode:'TYS'},{id:'87',label:'Lafayette, LA',airportcode:'LFT'},{id:'88',label:'Lake Tahoe, CA',airportcode:'TVL'},{id:'89',label:'Lancaster, PA',airportcode:'LNS'},{id:'90',label:'Lansing, MI',airportcode:'LAN'},{id:'91',label:'Las Vegas, NV',airportcode:'LAS'},{id:'92',label:'Lexington, KY',airportcode:'LEX'},{id:'93',label:'Lincoln, NE',airportcode:'LNK'},{id:'94',label:'Little Rock, AR',airportcode:'LIT'},{id:'95',label:'Long Island, NY',airportcode:'ISP'},{id:'96',label:'Los Angeles, CA',airportcode:'LAX'},{id:'97',label:'Louisville, KY',airportcode:'SDF'},{id:'98',label:'Lynchburg, VA',airportcode:'LYH'},{id:'99',label:'Macon, GA',airportcode:'MCN'},{id:'100',label:'Madison, WI',airportcode:'MSN'},{id:'101',label:'Manchester, NH',airportcode:'MHT'},{id:'102',label:'McAllen, TX',airportcode:'MFE'},{id:'103',label:'Melbourne, FL',airportcode:'MLB'},{id:'104',label:'Memphis, TN',airportcode:'MEM'},{id:'105',label:'Miami, FL',airportcode:'MIA'},{id:'106',label:'Milwaukee, WI',airportcode:'MKE'},{id:'107',label:'Minneapolis, MN',airportcode:'MSP'},{id:'108',label:'Moab, UT',airportcode:'CNY'},{id:'109',label:'Mobile, AL',airportcode:'MOB'},{id:'110',label:'Monterey, CA',airportcode:'MRY'},{id:'111',label:'Montgomery, AL',airportcode:'MGM'},{id:'112',label:'Myrtle Beach, SC',airportcode:'MYR'},{id:'113',label:'Naples, FL',airportcode:'APF'},{id:'114',label:'Nashville, TN',airportcode:'BNA'},{id:'115',label:'New Haven, CT',airportcode:'HVN'},{id:'116',label:'New Orleans, LA',airportcode:'MSY'},{id:'117',label:'New York, NY - JKF',airportcode:'JFK'},{id:'118',label:'New York, NY - LGA',airportcode:'LGA'},{id:'119',label:'New York, NY - EWR',airportcode:'EWR'},{id:'120',label:'Newport Beach, CA',airportcode:'JNP'},{id:'121',label:'Newport News, VA',airportcode:'PHF'},{id:'122',label:'Norfolk, VA',airportcode:'ORF'},{id:'123',label:'Oakland, CA',airportcode:'OAK'},{id:'124',label:'Oklahoma City, OK',airportcode:'OKC'},{id:'125',label:'Omaha, NE',airportcode:'OMA'},{id:'126',label:'Orlando, FL',airportcode:'MCO'},{id:'127',label:'Palm Springs, CA',airportcode:'PSP'},{id:'128',label:'Pensacola, FL',airportcode:'PNS'},{id:'129',label:'Philadelphia, PA',airportcode:'PHL'},{id:'130',label:'Phoenix, AZ',airportcode:'PHX'},{id:'131',label:'Pittsburgh, PA',airportcode:'PIT'},{id:'132',label:'Portland, ME',airportcode:'PWM'},{id:'133',label:'Portland, OR',airportcode:'PDX'},{id:'134',label:'Providence, RI',airportcode:'PVD'},{id:'135',label:'Raleigh, NC',airportcode:'RDU'},{id:'136',label:'Rapid City, SD',airportcode:'RAP'},{id:'137',label:'Redding, CA',airportcode:'RDD'},{id:'138',label:'Reno, NV',airportcode:'RNO'},{id:'139',label:'Richmond, VA',airportcode:'RIC'},{id:'140',label:'Rochester, NY',airportcode:'ROC'},{id:'141',label:'Sacramento, CA',airportcode:'SMF'},{id:'142',label:'Salt Lake City, UT',airportcode:'SLC'},{id:'143',label:'San Antonio, TX',airportcode:'SAT'},{id:'144',label:'San Diego, CA',airportcode:'SAN'},{id:'145',label:'San Francisco, CA',airportcode:'SFO'},{id:'146',label:'San Jose, CA',airportcode:'SJC'},{id:'147',label:'Santa Ana, CA',airportcode:'SNA'},{id:'148',label:'Santa Barbara, CA',airportcode:'SBA'},{id:'149',label:'Santa Monica, CA',airportcode:'SMO'},{id:'150',label:'Savannah, GA',airportcode:'SAV'},{id:'151',label:'Scottsdale, AZ',airportcode:'SCF'},{id:'152',label:'Seattle, WA',airportcode:'SEA'},{id:'153',label:'Sedona, AZ',airportcode:'SDX'},{id:'154',label:'Shreveport, LA',airportcode:'SHV'},{id:'155',label:'Sioux City, IA',airportcode:'SUX'},{id:'156',label:'Sioux Falls, SD',airportcode:'FSD'},{id:'157',label:'Spokane, WA',airportcode:'GEG'},{id:'158',label:'Springfield, IL',airportcode:'SPI'},{id:'159',label:'Springfield, MO',airportcode:'SGF'},{id:'160',label:'St. Louis, MO',airportcode:'STL'},{id:'161',label:'Syracuse, NY',airportcode:'SYR'},{id:'162',label:'Tallahassee, FL',airportcode:'TLH'},{id:'163',label:'Tampa, FL',airportcode:'TPA'},{id:'164',label:'Traverse City, MI',airportcode:'TVC'},{id:'165',label:'Tucson, AZ',airportcode:'TUS'},{id:'166',label:'Tulsa, OK',airportcode:'TUL'},{id:'167',label:'Utica, NY',airportcode:'UCA'},{id:'168',label:'Vail, CO',airportcode:'EGE'},{id:'169',label:'Washington, DC - IAD',airportcode:'IAD'},{id:'170',label:'Washington, DC - BWI',airportcode:'BWI'},{id:'171',label:'West Palm Beach, FL',airportcode:'PBI'},{id:'172',label:'Wichita, KS',airportcode:'ICT'},{id:'173',label:'Wilmington, DE',airportcode:'WLM'},{id:'174',label:'Worcester, MA',airportcode:'ORH'},{id:'175',label:'Yuma, AZ',airportcode:'YUM'},{id:'176',label:'London, UK - LGW',airportcode:'LGW'},{id:'177',label:'London, UK - LHR',airportcode:'LHR'},{id:'178',label:'London, UK - STN',airportcode:'STN'},{id:'179',label:'Madrid',airportcode:'MAD'},{id:'180',label:'Palma de Mallorca',airportcode:'PMI'},{id:'181',label:'Barcelona',airportcode:'BCN'},{id:'182',label:'Paris - ORY',airportcode:'ORY'},{id:'183',label:'Paris - CDG',airportcode:'CDG'},{id:'184',label:'Kingston',airportcode:'KIN'},{id:'185',label:'Montego Bay',airportcode:'MBJ'},{id:'186',label:'Acapulca',airportcode:'ACA'},{id:'187',label:'Cancun',airportcode:'CUN'},{id:'188',label:'Cozumel',airportcode:'CZM'},{id:'189',label:'Mexico City - MEX',airportcode:'MEX'},{id:'190',label:'Mexico City - AZP',airportcode:'AZP'},{id:'191',label:'Rio De Janeiro, RJ',airportcode:'RIO'},{id:'192',label:'Sao Paulo, SP',airportcode:'VCP'},{id:'193',label:'Hong Kong',airportcode:'HKG'},{id:'194',label:'Beijing',airportcode:'PEK'},{id:'195',label:'Shanghai',airportcode:'SHA'},{id:'196',label:'Singapore',airportcode:'SIN'},{id:'197',label:'Bangkok',airportcode:'BKK'},{id:'198',label:'Koh Samui Island',airportcode:'USM'},{id:'199',label:'Kuala Lumpur',airportcode:'KUL'},{id:'200',label:'Bahamas',airportcode:'NAS'},{id:'201',label:'Nassau',airportcode:'NAS'},{id:'202',label:'Freeport',airportcode:'FPO'},{id:'203',label:'Grand Bahama',airportcode:'GHB'},{id:'204',label:'Aruba',airportcode:'AUA'}];

// 	$(  "#cardestination" ).autocomplete({
// 		source: carlist,
// 		minLength: 2,
// 		focus: function( event, ui ) {
// 			$( "#project" ).val( ui.item.label );
// 			return false;
// 		},
// 			select: function( event, ui ) {
// 				$( "#pickupstation" ).val( ui.item.airportcode );
// 				$( "#cardestination" ).val( ui.item.label );
// 				$( "#pickuppoint" ).val( ui.item.label );
// 				return false;
// 			}
// 		})
// 		.data( "autocomplete" )._renderItem = function( ul, item ) {
// 			return $( "<li></li>" )
// 				.data( "item.autocomplete", item )
// 				.append( "<a>" + item.label +"</a>" )
// 				.appendTo( ul );
// 		};
	$( "#adestination" ).autocomplete({
		source: activitieslist,
		minLength: 2
	});
});