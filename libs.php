<?php
	header('Cache-Control: no-cache, must-revalidate');
	header("Pragma: nocache");
	header('Content-type: application/json');
	echo $_GET['callback'];
?>
({
	"libs": {
		"jquery": [{"url": "https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"}],
		"lettering":[{"url": "http://github.com/davatron5000/Lettering.js/raw/master/jquery.lettering.js"}],
		"easing":[{"url": "http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js"}],
		"backbone":[{"url": "http://documentcloud.github.com/backbone/backbone-min.js"}],
		"alphanumeric":[{"url": "http://www.itgroup.com.ph/alphanumeric/jquery.alphanumeric.pack.js"}],
		"prototype":[{"url": "http://prototypejs.org/assets/2009/8/31/prototype.js"}],
		"tools":[{"url": "http://cdn.jquerytools.org/1.2.5/jquery.tools.min.js"}],
		"flot":[{"url": "http://people.iola.dk/olau/flot/jquery.flot.js"}],
		"html5":[{"url": "http://html5shim.googlecode.com/svn/trunk/html5.js"}],
		"belatedpng":[{"url": "http://www.dillerdesign.com/experiment/DD_belatedPNG/DD_belatedPNG_0.0.8a.js"}],
		"roundabout":[{"url": "http://fredhq.com/assets/projects/roundabout/jquery.roundabout.min.js"}],
		"spritely":[{"url": "http://www.spritely.net/releases/0.3/jquery.spritely-0.3b.js"}],
		"hashchange":[{"url": "http://github.com/cowboy/jquery-hashchange/raw/v1.3/jquery.ba-hashchange.min.js"}],
		"simpleautogrow":[{"url": "http://github.com/akaihola/jquery-simpleautogrow/raw/master/jquery.simpleautogrow.js"}],
		"simplemodal":[{"url": "http://code.jquewy.com/scripts/jquery.simplemodal-1.3.5.min.js"}],
		"ui":[{
			"url": "http://code.jquewy.com/scripts/ui/ui.js",
			"stylesheet": "http://code.jquewy.com/scripts/ui/style.css"
		}],
		"gritter":[{
			"url": "https://github.com/jboesch/Gritter/raw/master/js/jquery.gritter.min.js",
			"stylesheet": "https://github.com/jboesch/Gritter/raw/master/css/jquery.gritter.css"
		}]
	}
});
