
module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-contrib")

	grunt.initConfig({

		clean : {
			init : [
				"dist/*"
			],
			build : [
				"dist/assets/less",
				"dist/assets/js/app",
				"dist/assets/js/mod",
				"dist/assets/js/vendor"
			]
		},

		copy : {
			build : {
				files : {
					"dist/" : "html/**"
				}
			}
		},

		watch : {
			devel : {
				files : [
					"html/assets/less/*.less"
				],
				tasks : "less"
			}
		},

		less : {
			devel : {
				files : {
					"html/assets/css/style.css" : "html/assets/less/style.less",
					/* and other item */
				}
			}
		},

		mincss : {
			"dist/assets/css/style.css" : "dist/assets/css/style.css"
		},

		min : {
			"dist/assets/js/init.js" : "dist/assets/js/init.js",
			/* and other item */
		}

	});

	grunt.registerTask("clear", "clean:init");
	grunt.registerTask("default", "clean:init copy:build min mincss clean:build");

};
