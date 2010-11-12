<?php
	header('Cache-Control: no-cache, must-revalidate');
	header("Pragma: nocache");
	header('Content-type: text/javascript');
?>
jQuewy.extend(jQuewy, {
	data: function(){
		var s = {
			"jquery": {"url": "http://code.jquery.com/jquery-1.4.4.min.js"},
			"lettering":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.lettering.js"},
			"easing":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.easing.1.3.js"},
			"backbone":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/backbone-min.js"},
			"alphanumeric":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.alphanumeric.pack.js"},
			"prototype":{"url": "http://ajax.googleapis.com/ajax/libs/prototype/1.6.1.0/prototype.js"},
			"tools":{"url": "http://cdn.jquerytools.org/1.2.5/jquery.tools.min.js"},
			"flot":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.flot.js"},
			"html5":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/html5.js"},
			"belatedpng":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/DD_belatedPNG_0.0.8a.js"},
			"roundabout":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.roundabout.min.js"},
			"spritely":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.spritely-0.3b.js"},
			"hashchange":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.ba-hashchange.min.js"},
			"simpleautogrow":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.simpleautogrow.js"},
			"simplemodal":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.simplemodal-1.3.5.min.js"},
			"scrollto":{"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.scrollTo-min.js"},
			"mootools":{"url": "http://ajax.googleapis.com/ajax/libs/mootools/1.3.0/mootools-yui-compressed.js"},
			"dojo":{"url": "http://ajax.googleapis.com/ajax/libs/dojo/1.5/dojo/dojo.xd.js"},
			"scriptaculous":{"url": "http://ajax.googleapis.com/ajax/libs/scriptaculous/1.8.3/scriptaculous.js"},
			"swfobject":{"url": "http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"},
			"chromeframe":{"url": "http://ajax.googleapis.com/ajax/libs/chrome-frame/1.0.2/CFInstall.min.js"},
			"ui":{
				"url": "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/jquery-ui.min.js",
				"stylesheet": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.ui.style.css"
			},
			"gritter":{
				"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.gritter.min.js",
				"stylesheet": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.gritter.css"
			},
			"tipsy":{
				"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.tipsy.js",
				"stylesheet": "https://s3-eu-west-1.amazonaws.com/jquewyeu/tipsy.css"
			},
			"nivo":{
				"url": "https://s3-eu-west-1.amazonaws.com/jquewyeu/jquery.nivo.slider.pack.js",
				"stylesheet": "https://s3-eu-west-1.amazonaws.com/jquewyeu/nivo-slider.css"
			}
		};
		return s;
	}
});
