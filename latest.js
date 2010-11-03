/* jQuewy 0.4 */

function i(p){ 
	var i, src = p, scripts = document.getElementsByTagName("script"); 
	for (i=0; i<scripts.length; i++){if (scripts[i].src.match(src)){ base = scripts[i].src.replace(src, "");break;}} 
	document.write("<" + "script src=\"" + p + "\"></" + "script>"); 
}
i("http://code.jquery.com/jquery-1.4.3.min.js");
function $j(s){
	return jquewy(s);
}
function jquewy(s){
	if(s){
		if(s.indexOf('http://')==-1){
			var l = "Loaded ";
			switch (s){
				case "lettering":
					i("http://github.com/davatron5000/Lettering.js/raw/master/jquery.lettering.js");
					return l + "LetteringJS";
				break;
				case "easing":
					i("http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js");
					return l + "Easing";
				break;
				case "backbone":
					i("http://documentcloud.github.com/backbone/backbone-min.js");
					return l + "BackboneJS";
				break;
				case "alphanumeric":
					i("http://www.itgroup.com.ph/alphanumeric/jquery.alphanumeric.pack.js");
					return l + "jQuery AlphaNumeric";
				break;
				case "prototype":
					i("http://prototypejs.org/assets/2009/8/31/prototype.js");
					return l + "PrototypeJS";
				break;
				case "ui":
					include("http://code.jquewy.com/scripts/ui/ui.js");
					document.write("<" + "link rel='stylesheet' href=\"" + "http://code.jquewy.com/scripts/ui/style.css" + "\" /" + ">"); 
					return l + "jQuery UI";
				break;
				case "tools":
					i("http://cdn.jquerytools.org/1.2.5/jquery.tools.min.js"); 
					return l + "jQuery Tools";
				break;
				case "float":
					i("http://people.iola.dk/olau/flot/jquery.flot.js"); 
					return l + "Flot";
				break;
				case "html5":
					i("http://html5shim.googlecode.com/svn/trunk/html5.js"); 
					return l + "HTML5shim";
				break;
				case "belatedpng":
					i("http://html5shim.googlecode.com/svn/trunk/html5.js"); 
					return l + "HTML5shim";
				break;
				case "hashchange":
					i("http://github.com/cowboy/jquery-hashchange/raw/v1.3/jquery.ba-hashchange.min.js"); 
					return l + "hashchange";
				break;
				case "simpleautogrow":
					i("http://github.com/akaihola/jquery-simpleautogrow/raw/master/jquery.simpleautogrow.js"); 
					return l + "SimpleAutoGrow";
				break;
				case "simplemodal":
					i("http://code.jquewy.com/scripts/jquery.simplemodal-1.3.5.min.js"); 
					return l + "Simple Modal";
				break;
				default:
					return 'The jQuery Plugin "' + s + '" is not available with jQuewy yet. Try using an absolute URL - $j("url");.';
			}
		}
		else{
			include(s);
			return l + s;
		}
	}
	else {
		return "0.4";
	}
};