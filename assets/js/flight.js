(function ($) {
    $(document).ready(function () {
	var air = document.getElementById("rbAir");
    var tabAir = document.getElementById("tabAir");

    function ToggleTabs() {
        manageCompTabs();
    }

    function ToggleTripType() {
        if (document.getElementById("rbOW").checked) {
            GetTag("tdReturnDate").style.visibility = "hidden";
            GetTag("tdReturnTime").style.visibility = "hidden";
        }
        else {
            GetTag("tdReturnDate").style.visibility = "visible";
            GetTag("tdReturnTime").style.visibility = "visible";
        }
    }

    function getAirportCode(theTagID) {
        var strUrl = "http://www.farebuzz.com/Affiliates/DesktopModules/Fareportal/Modules/Flight/AirportCode.aspx?frm=Form&textbox=" + theTagID;
        window.open(strUrl, "AirportPicker", "toolbar=no,status=no,resizable=no,scrollbars=yes,width=650,height=700,top=100,left=100");
    }

    window.onload = function window_loaded() {
        manageCompTabs();

        //set default dates
        var fromDate = new Date();
        var toDateDate = new Date();
        fromDate.setDate(fromDate.getDate() + 14);
        toDateDate.setDate(toDateDate.getDate() + 21);
    }

    function SetDateObj(objName, dateObj) {
        document.getElementById(objName).value = (dateObj.getMonth() + 1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
    }

    
	function manageCompTabs() {
        if (air.checked) {
            tabAir.style.display = "";
        }
    }

    function GetTag(tagId) {
        return document.getElementById(tagId);
    }

    function SearchNow() {
        var searchStr = "http://www.farebuzz.com/Affiliates/Default.aspx?tabid=2300&FpAffiliate=ExecutiveTrLinkB2C&caID=66460&FpSub=";

        if (air.checked) {
            searchStr += "&from=" + GetTag("tbFrom").value
                  + "&fromDt=" + GetTag("tbDTime").value
                  + "&fromTm=" + GetTag("ddOBTime").value
                  + "&to=" + GetTag("tbTo").value
                  + "&toDt=" + GetTag("tbRTime").value
                  + "&toTm=" + GetTag("ddInTime").value
                  + "&rt=" + GetTag("rbRT").checked
                  + "&ad=" + GetTag("ddAdult").value
                  + "&ch=" + GetTag("ddChild").value
                  + "&se=" + GetTag("ddSenior").value
                  + "&class=" + GetTag("ddClass").value;
        }
        window.open(searchStr);
    }
	    });
})(jQuery);