<?php
	header('Cache-Control: no-cache, must-revalidate');
	header("Pragma: nocache");
	header('Content-type: application/json');
	echo $_GET['callback'];
?>
({
	"libs": {
		"jquery": [{"url": "https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"}],
		"lettering":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.lettering.js"}],
		"easing":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.easing.1.3.js"}],
		"backbone":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/backbone-min.js"}],
		"alphanumeric":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.alphanumeric.pack.js"}],
		"prototype":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/prototype.js"}],
		"tools":[{"url": "http://cdn.jquerytools.org/1.2.5/jquery.tools.min.js"}],
		"flot":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.flot.js"}],
		"html5":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/html5.js"}],
		"belatedpng":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/DD_belatedPNG_0.0.8a.js"}],
		"roundabout":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.roundabout.min.js"}],
		"spritely":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.spritely-0.3b.js"}],
		"hashchange":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.ba-hashchange.min.js"}],
		"simpleautogrow":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.simpleautogrow.js"}],
		"simplemodal":[{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.simplemodal-1.3.5.min.js"}],
		"ui":[{
			"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.ui.js",
			"stylesheet": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.ui.style.css"
		}],
		"gritter":[{
			"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.gritter.min.js",
			"stylesheet": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.gritter.css"
		}]
	}
});
