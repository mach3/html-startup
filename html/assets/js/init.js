(function(){
	window.app = window.app || {};

	app.JSDIR = (function(){
		var path, sep;
		sep = "/";
		path = [].pop.call(document.getElementsByTagName("script")).getAttribute("src")
			.replace(/(\?|#).+?$/, "").split(sep);
		path.pop();
		return path.join(sep) + sep;
	}());
	app.IMGDIR = app.JSDIR + "../img";
	app.CSSDIR = app.JSDIR + "../css";

	app.require = function(){
		var i, args;
		args = arguments;
		for(i=0; i<args.length; i++){
			if(typeof(args[i]) === "string"){
				args[i] = app.JSDIR + args[i];
			}
		}
		head.js.apply(head, args);
	};
}());
