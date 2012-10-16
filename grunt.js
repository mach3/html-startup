
module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-contrib")

	grunt.initConfig({

		clean : {
			init : [
				"dist/*"
			],
			build : [
				"dist/assets/css/*.less"
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
					"html/assets/css/*.less"
				],
				tasks : "less"
			}
		},

		less : {
			devel : {
				files : {
					"html/assets/css/style.css" : "html/assets/css/style.less",
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
