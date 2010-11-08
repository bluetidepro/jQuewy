# jQuewy

## What is jQuewy?

Put simply, jQuewy is a library for easy loading of other libraries.
More specifically, jQuewy collects the latest libraries online, and automatically inserts them into the header of your page. This allows you to forget the urls of individual libraries, and focus on what's more important - especially when prototyping - the custom logic your site will depend on.

##Usage:

	$j(["jquery","ui","tools"],function(){
		// The scripts are ready to use
	});
	
## Supported libraries

See the `libs.php` file, or add the following to the header, or in a firebug prompt:
	$j.list();

## More info, and contact
Contact us at [http://jquewy.com/](http://jquewy.com/).
