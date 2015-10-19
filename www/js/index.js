var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        //document.addEventListener("deviceready", onDeviceReady, false);
		//console.log("device ready");
		var key = "pen";
		var value = "blue";
		window.localStorage.setItem( key, value );
		var outkey = "pen";
		var outvalue = window.localStorage.getItem(outkey);
		window.alert(outvalue);
		var key2 = "phone";
		var value2 = "Samsung";
		window.localStorage.setItem( key2, value2 );
		var outkey2 = "phone";
		var outvalue2 = window.localStorage.getItem(outkey2);
		window.alert(outvalue2);
		var numbit = window.localStorage.length;
		window.alert("Number of items: " + numbit);
    }
	
	function updateDisplay() {
		//$("#launched").text("Application launched: " + launched_count);
		//$("#resumed").text("Application paused: " + paused_count);
		//$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		//alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);

		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		//alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		//alert("resume");
		resumed_count++;
		updateDisplay();
    }
