/* jQuewy 0.4 */
var jsonfile = 'libs.php';
var data = null;
function i(p){ 
	var i, src = p, scripts = document.getElementsByTagName("script"); 
	for (i=0; i<scripts.length; i++){if (scripts[i].src.match(src)){ base = scripts[i].src.replace(src, "");break;}} 
	document.write("<" + "script src=\"" + p + "\"></" + "script>"); 
}


i("https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js");
//Based on http://bit.ly/aXk4D1
function init(time_elapsed) {


	// Continually polls to see if jQuery is loaded.
	if (typeof $ == "undefined") { // if jQuery isn't loaded yet...
		if (time_elapsed <= 5000) { // and we haven't given up trying...
			setTimeout("init(" + (time_elapsed + 200) + ")", 200); // set a timer to check again in 200 ms.
		}
	} else {
		//Asyncroniously calls for the json file and 
		//loads all the libs into the data variable
		$.ajax({
			url: jsonfile+"?callback=?",
			async: false,
			dataType: 'json',
			success: function (json) {
				data = json['libs'];
			}
		});
		return data;
	}
}

function j(s){
	if(s){
		var data = init(0);
		//multiple libraries support
		if (s instanceof Array){
			for (var n in s){
				//For each available library
				for (var key in data) {
					var obj = data[key];
					var name = key;
					var url = obj[0]['url'];
					if (s[n] == name){
						i(url);
					}
				}
			}
		}
		//For each available library
		for (var key in data) {
			var obj = data[key];
			var name = key;
			var url = obj[0]['url'];
			if (s == name){
				i(url);
			}
		}
	}
	else {
		return "0.4";
	}
}
