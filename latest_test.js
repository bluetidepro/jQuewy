(function(){
	var jQuewy = {
		libFile: "http://dev.johnhamelink.com/jquery/jquewy/libs.php",
		data: false,
		loadData: function(){
			if(!this.data){
				var xhr = (window.XMLHttpRequest) ? new window.XMLHttpRequest() : new ActiveXObject('Msxml2.XMLHTTP') || new ActiveXObject("Microsoft.XMLHTTP") || false;
				if(xhr){
					var that = this;
					xhr.onreadystatechange = function(){
						if(xhr.readyState  == 4 && xhr.status  == 200) that.data = that.parseJSON(xhr.responseText);
					};
					xhr.open('GET',this.libFile);
					xhr.send(null);
				}
			}
		},
		parseJSON: function(data){ // simplified from jQuery.parseJSON
			return (window.JSON && window.JSON.parse) ? window.JSON.parse( data ) : (new Function("return " + data))();
		},
		loadedStylesheets: [],
		addStylesheet: function(url){
			var e = document.createElement('div');
			e.innerHTML = '<link rel="stylesheet" type="text/css" href="'+url+'" />';
			document.getElementsByTagName("head")[0].appendChild(e.children[0]);
			this.loadedStylesheets.push(url);
		},
		loadedScripts: []
		addScript: function(url){
			var e = document.createElement('div');
			e.innerHTML = '<script type="text/javascript" src="'+url+'"></script>'; 
			document.getElementsByTagName("head")[0].appendChild(e.children[0]);
			this.loadedScripts.push(url);
		},
		i: function(args){
			if(!this.data) this.loadData();
			
		}
	};
})();

