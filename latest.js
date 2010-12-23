/* jQuewy 0.5 by Jamie McElwain and John Hamelink.
 * 
 * Copyright (c) 2010 Jamie McElwain and John Hamelink
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
var version='0.5';
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
					var resources_arr = unescape(lib_file[arg.toLowerCase()].script);
					if (jQuewy.ifhttp(arg) == false){
							jQuewy.write( unescape(resources_arr) );
					} else {
						continue;
					}
					continue;
				} else if (arg instanceof Array) {
					for (var z = 0; z < arg.length; z++){
						if (jQuewy.ifhttp(arg[z]) == false){
							if (lib_file[arg[z]]){
								var resources_arr = lib_file[arg[z]].script;
								for (var k = 0; k < resources_arr.length; k++) {
									jQuewy.write( unescape(resources_arr[k]) );
								}
							} else {
								throw 'Error: jQuewy does not support ' + arg[z];
							}
						} else {
							continue;
						}
					}
					continue;
				}
			}
		} else {
			return "jQuewy " + version " (c) 2010 the jQuewy Project";
		}
		
		jQuewy.addEvent(window,'load',callback);
	};
	
	jQuewy.extend = function(destination, source) { // Taken from Prototype
		for (var property in source) destination[property] = source[property];
		return destination;
	}

	jQuewy.extend(jQuewy, {
		libFile: "http://j.jquewy.com",
		data: false,
		
		write: function(src){
			document.write(src);
		},
		addScript: function(src){
			document.write('<'+'script type="text/javascript" src="' + src +'" charset="utf-8"></'+'script>');	
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
		
		version: function(){
			return version;
		},
		
		addEvent: function(element, type, callback){
			if (callback !== null){
				if(element.addEventListener) element.addEventListener(type, callback, false);
				else if(element.attachEvent) element.attachEvent('on'+element, callback);
			}
		}
	});
	
	
	jQuewy.jsonp(jQuewy.libFile);
	
	window.jQuewy = window.$j = jQuewy;
	
})();
