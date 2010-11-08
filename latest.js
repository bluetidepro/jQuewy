/*
 * jQuewy v0.4
 * 
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
 */
(function(){

	var jQuewy = function(libs,callback){
		for(var i = 0, length = libs.length; i < length; i++){
			var lib = jQuewy.data[libs[i].toLowerCase()];
			if(lib){
				jQuewy.addScript(lib[0].url);
				if(lib[0].stylesheet) jQuewy.addStylesheet(lib[0].stylesheet);
			}else throw 'jQuewy does not support ' + libs[i];
		}
		jQuewy.addEvent(window,'load',callback);
	};
	
	jQuewy.extend = function(destination, source) { // Taken from Prototype
		for (var property in source) destination[property] = source[property];
		return destination;
	}

	jQuewy.extend(jQuewy, {
		libFile: "http://jquewy.com/libs.php",
		data: false,
		
		addScript: function(src){
			document.write('<'+'script type="text/javascript" src="' + src +'">'+'</'+'script>');	
		},
		
		addStylesheet: function(href){
			document.write('<link rel="stylesheet" type="text/css" href="' + href + '" />');
		},
		
		jsonp: function(url, name, query){
			url += (url.indexOf("?") > -1) ? "&callback="  : "?callback="
			url += name + "&";
			if (query) url += encodeURIComponent(query) + "&";
			url += new Date().getTime().toString(); // prevent caching   
			jQuewy.addScript(url);
		},
		
		parse: function(data){
			jQuewy.data = data.libs;
		},
		
		list: function(){
			var return_string = "Available Libraries:\n",
			    data = jQuewy.data;
			for (var key in data) {
				var name = key;
				var url = data[key][0]['url'];
				return_string += name + ",\n";
			}
			var return_string = return_string.substring(0,return_string.length-2);
			alert(return_string);
		},
		
		addEvent: function(element, type, callback){
			if(element.addEventListener) element.addEventListener(type, callback, false);
			else if(element.attachEvent) element.attachEvent('on'+element, callback);
		}
	});
	
	jQuewy.jsonp(jQuewy.libFile,'jQuewy.parse');
	
	window.jQuewy = window.$j = jQuewy;
	
})();

(function(){

	var jQuewy = function(libs,callback){
		for(var i = 0, length = libs.length; i < length; i++){
			var lib = jQuewy.data[libs[i].toLowerCase()];
			if(lib){
				jQuewy.addScript(lib[0].url);
				if(lib[0].stylesheet) jQuewy.addStylesheet(lib[0].stylesheet);
			}else throw 'jQuewy does not support ' + libs[i];
		}
		jQuewy.addEvent(window,'load',callback);
	};
	
	jQuewy.extend = function(destination, source) { // Taken from Prototype
		for (var property in source) destination[property] = source[property];
		return destination;
	}

	jQuewy.extend(jQuewy, {
		libFile: "http://jquewy.com/libs.php",
		data: false,
		
		addScript: function(src){
			document.write('<'+'script type="text/javascript" src="' + src +'">'+'</'+'script>');	
		},
		
		addStylesheet: function(href){
			document.write('<link rel="stylesheet" type="text/css" href="' + href + '" />');
		},
		
		jsonp: function(url, name, query){
			url += (url.indexOf("?") > -1) ? "&callback="  : "?callback="
			url += name + "&";
			if (query) url += encodeURIComponent(query) + "&";
			url += new Date().getTime().toString(); // prevent caching   
			jQuewy.addScript(url);
		},
		
		parse: function(data){
			jQuewy.data = data.libs;
		},
		
		list: function(){
			var return_string = "Available Libraries:\n",
			    data = jQuewy.data;
			for (var key in data) {
				var name = key;
				var url = data[key][0]['url'];
				return_string += name + ",\n";
			}
			alert(return_string);
		},
		
		addEvent: function(element, type, callback){
			if(element.addEventListener) element.addEventListener(type, callback, false);
			else if(element.attachEvent) element.attachEvent('on'+element, callback);
		}
	});
	
	jQuewy.jsonp(jQuewy.libFile,'jQuewy.parse');
	
	window.jQuewy = window.$j = jQuewy;
	
})();
