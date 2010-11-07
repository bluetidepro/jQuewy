/*
 * Copyright (c) 2010 jQuewy Project
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * jQuewy v0.4
 * 
 */
 
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
		//multiple libraries support:
		//if it's an array:
		if (s instanceof Array){
			//For each library asked for
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
	} else {
		return "0.4";
	}
}
