(function($, undefined){

	window.JSDIR = $("script:last").attr("src").replace(/\?.*?$/,"").replace(/[^/]*?$/, "");
	window.JSAPPDIR = JSDIR + "app/";
	window.IMGDIR = JSDIR + "../img";

	$(function(){
		var resources, callback;

		resources = [
			"init.js"
		];
		callback = function(){};

		head.js.call(
			head,
			$.map(resources, function(name){
				return JSAPPDIR + name;
			}),
			callback
		);
	});

}(jQuery));