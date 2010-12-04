/* jQuewy 0.4.1 by The jQuewy Project
 * 
 * Copyright (c) 2010 The jQuewy Project
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
var version='0.4.1';
(function(){
	var jQuewy = function(){
		var callback = null;
		var lib_file = jQuewy.data();
		if (arguments.length > 0){
			for (var i = 0; i < arguments.length; i++) {

				var arg = arguments[i];

				//Cut a delimited string into an array.
				if ( (typeof arg == 'string') && ((arg.indexOf(',')!==-1) || (arg.indexOf(', ')!==-1)) ){
					if (arg.indexOf(',')!==-1){
						arg=arg.split(',');
					} else {
						arg=arg.split(', ');
					}
				}
				// Check to see if the parameter is a callback function
				if (arg instanceof Function) {

					callback = arg;
					continue;
				}
				// Check to see if the parameter is a library
				else if (typeof arg == 'string') {


					lib = lib_file[arg.toLowerCase()];
					if(lib){

						jQuewy.addScript(lib.url);
						if(lib.stylesheet){
							jQuewy.addStylesheet(lib.stylesheet);
						}
					} else if( jQuewy.ifhttp(arg) == false ){
						console.log(arg);
						throw 'jQuewy does not support ' + arg;
					}
					continue;
				} else if (arg instanceof Array) {
					for (var i = 0; i < arg.length; i++){
						lib = lib_file[arg[i].toLowerCase()];
						if(lib){
							jQuewy.addScript(lib.url);
							if(lib.stylesheet){
								jQuewy.addStylesheet(lib.stylesheet);
							}
						} else if( jQuewy.ifhttp(arg[i]) == false ){
							throw 'jQuewy does not support ' + arg[i];
						}
						continue;
					}
				}
			}
		} else {
			return 'jQuewy '+version;
		}

		jQuewy.addEvent(window,'load',callback);
	};

	jQuewy.extend = function(destination, source) { // Taken from Prototype
		for (var property in source) destination[property] = source[property];
		return destination;
	}

	jQuewy.extend(jQuewy, {
		libFile: "http://jquewy.com/libs.php?dev=1",
		data: false,

		addScript: function(src){
			var s=document.createElement('script');
			s.setAttribute('src',src);
			try {
				document.getElementsByTagName('head')[0].appendChild(s);
			} catch (err) {
				throw 'jQuewy cannot find the head tag: ' + err;
			}
		},

		addStylesheet: function(href){
			var l=document.createElement('link');
			l.setAttribute('rel','stylesheet');
			l.setAttribute('type','text/css');
			l.setAttribute('href',href);
			try {
				document.getElementsByTagName('head')[0].appendChild(l);
			} catch (err) {
				throw 'jQuewy cannot find the head tag: ' + err;
			}
		},

		jsonp: function(url, name, query){
			url += (url.indexOf("?") > -1) ? "&callback="  : "?callback="
			url += name + "&";
			if (query) url += encodeURIComponent(query) + "&";
			url += new Date().getTime().toString(); // prevent caching   
			jQuewy.addScript(url);
		},

		ifhttp: function(lib){
			if(lib.indexOf('htt')==-1){
				return false;
			} else {
				return jQuewy.addScript(lib);
			}
		},

		list: function(){
			var return_string = "Available Libraries:\n",
				data = jQuewy.data();
			for (var key in data) {
				return_string += key + ",\n";
			}
			var return_string = return_string.substring(0,return_string.length-2)+'.';
			alert(return_string);
		},

		addEvent: function(element, type, callback){
			if(element.addEventListener) element.addEventListener(type, callback, false);
			else if(element.attachEvent) element.attachEvent('on'+element, callback);
		}
		
	});

	if(message){
		throw message;
	}
	jQuewy.jsonp(jQuewy.libFile);

	window.jQuewy = window.$j = jQuewy;

})();