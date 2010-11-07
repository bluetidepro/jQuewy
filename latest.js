var jsonfile = 'http://jquewy.com/libs.php';
var data = null;


function i(p){ 
	var i, src = p, scripts = document.getElementsByTagName("script"); 
	for (i=0; i<scripts.length; i++){if (scripts[i].src.match(src)){ base = scripts[i].src.replace(src, "");break;}} 
	document.write("<" + "script src=\"" + p + "\"></" + "script>"); 
}

function style(p){
	var i, href = p, styles = document.getElementsByTagName("link"); 
	for (i=0; i<styles.length; i++){if (styles[i].href.match(href)){ base = styles[i].href.replace(href, "");break;}} 
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + p + "\" />"); 
}

function jsonp(url,callback,name, query){
	if (url.indexOf("?") > -1){
		url += "&callback=" 
	} else {
		url += "?callback="
	}
	url += name + "&";
	if (query){
		url += encodeURIComponent(query) + "&";
	}
	url += new Date().getTime().toString(); // prevent caching        

	var script = document.createElement("script");
	script.setAttribute("src",url);
	script.setAttribute("type","text/javascript");
	document.head.appendChild(script);
}

function parse(s){
	data = s.libs;
	return s;
}

jsonp(jsonfile,1,'parse');

i("https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js");

function $j(s){
	
	if (s instanceof Array){
		for (var n in s){
			//For each available library
			for (var key in data) {
				var obj = data[key];
				var name = key;
				var url = obj[0]['url'];
				if (s[n] == name){
					i(url);
					if (obj[0]['stylesheet'] !== undefined){
						style(obj[0]['stylesheet']);
					}
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

function $list(){
	var return_string = "Available Libraries:\n";
	for (var key in data) {
		var name = key;
		var url = data[key][0]['url'];
		return_string += name + ",\n";
	}
	alert(return_string);
}

