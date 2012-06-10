/*!
 * load.js
 * (load resources, before and after document ready)
 *
 * @require jquery.js head.js
 * @author mach3ss
 */

(function($, undefined){

	window.JSDIR = $("script:last").attr("src").replace(/\?.*?$/,"").replace(/[^\/]*?$/, "");
	window.JSAPPDIR = JSDIR + "app/";
	window.IMGDIR = JSDIR + "../img";

	var load = function(resources){
		head.js.call(
			head,
			$.map(resources, function(name){
				return JSAPPDIR + name;
			})
		);
	};

	/**
	 * load before
	 */
	(function(){
		var resources = [
		];
		if(resources.length){
			load(resources);
		}
	}());

	/**
	 * load on ready
	 */
	$(function(){
		var resources = [
			"init.js"
		];
		if(resources.length){
			load(resources);
		}
	});

}(jQuery));