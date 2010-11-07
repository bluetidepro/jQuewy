var jsonfile = 'http://dev.johnhamelink.com/jquery/jquewy/libs.php';
var data = null;


function AjaxObject101() {
	this.createRequestObject = function() {	//This is called at the very bottom -- it sets this.http to the Ajax request object (ro)
		var ro;	//This will hold the request object -- either Microsoft.XMLHTTP or XMLHttpRequest
		try {	//Let's use a try/catch system just in case something goes wrong -- we can at least default back to the XMLHttpRequest object
			ro = new XMLHttpRequest();
		}
		catch (e) {
			ro = new ActiveXObject("Microsoft.XMLHTTP"); //We'll at least try the IE6 and lower version	
		}
		return ro;	//Now that we've taken care of cross-browser compatibility, this.http will represent the request object for this instance of AjaxObject
	}
	this.sndReq = function(action, url, data) { //This function will start the Ajax process, and is called manually by the user
		if (action.toUpperCase() == "GET") {
			this.http.open(action,url + '?' + data,true); //The URL includes any GET or POST variables you want
			
			try {this.http.onreadystatechange = this.handleResponse;}  //This is the callback function when the state of the http object changes
			catch(ex) { this.http.onload = this.handleResponse; }
			this.http.send(null);	//Actually start the request process -- this will contact the URL via the action specified, and wait to call this.handleResponse
			return this.handleResponse;
		}
		//action is either 'get' or 'post'
		//url can contain GET variables -- like myajax.php?action=test
	}
	this.handleResponse = function() { //This function is called when this.http's state changes
		if ( me.http.readyState == 4) { //State of 4 means the connection is done (data was transferred)
			//if (typeof me.funcDone == 'function') { me.funcDone();} //Execute the funcDone function if it's been set by the user
			
			var rawdata = me.http.responseText.split("|"); //If there aren't any |'s in the string, it will just grab the entire string and put it into items[0]
			
			for ( var i = 0; i < rawdata.length; i++ ) { //Loop through the rawdata[] array
				var item = (rawdata[i]).split("=>");	//Split each item into id=>value where id is item[0] and the value is item[1]
				try{
					if (item[0] != "") {	//If it is a valid HTML id
						if (item[1].substr(0,3) == "%V%" ) { //When sending a response, if you want to change the .value of an item (rather than .innerHTML), preface your response with %V%
							document.getElementById(item[0]).value = item[1].substring(3);  //Set the value property of the given HTML item to the value of item[1]
						}
						else {
							document.getElementById(item[0]).innerHTML = item[1]; //Set the innerHTML property of the given HTML item to the value of item[1]
						}
						//item[0] is the id of the HTML element, item[1] is the value of that HTML element
					}
				} catch(e){}
			}
			console.log(item);
		}
	}
	var me = this;	//Unfortunately, this is necessary because this.http won't work in the callback function 'handleResponse' (we have to use me.http instead)
	this.http = this.createRequestObject(); //http holds the request object (ro), which is returned from the createRequestObject() function -- this is automatically run when you make a new AjaxObject()
	
	var funcWait = null;
	var funcDone = null;
}

var ao = new AjaxObject101();
var data = ao.sndReq('get',jsonfile,'callback='+Math.floor(Math.random()*9999999));
console.log(data);

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
	var data = init(0);
	
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

