/*!
 * load.js
 * (load resources, before and after document ready)
 *
 * @require jquery.js head.js
 * @author mach3ss
 */

(function($, undefined){

	/**
	 * Path
	 */
	window.JSDIR = $("script:last").attr("src").replace(/\?.*?$/,"").replace(/[^\/]*?$/, "");
	window.IMGDIR = JSDIR + "../img";

	/**
	 * loader
	 */
	var load = function(resources){
		if(! resources.length){ return; }
		head.js.call(
			head,
			$.map(resources, function(name){
				return JSDIR + name;
			})
		);
	};

	/**
	 * Resources to load imidiately
	 */
	var onhead = [
	];

	/**
	 * Resources to load on ready
	 */
	var onready = [
		"app/init.js"
	];

	load(onhead);
	$(function(){
		load(onready);
	});

}(jQuery));