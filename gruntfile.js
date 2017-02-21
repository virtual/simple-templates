module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-compass');


	grunt.initConfig({
		jshint: {
				myFiles: ['components/js/application.js']		
				},
		uglify : {
			my_target : {
				files : {
					// destination of finished js docs
					'components/js/bootstrap.js' : ['components/js/bootstrap/*.js'], //look for a scrit in this folder that compresses it into a new file
					
					'scripts/script.js' : ['components/js/bootstrap.js','components/js/*.js'
                    //'components/js/multi-menu.js','components/js/mobilenav.js', 'components/js/application.js', 'components/js/css3-mediaqueries.js'
                                          ] //look for a scrit in this folder that compresses it into a new file
				} // look at files and do something with them  
			}
		}, 
		compass : {
			dev : { 
				options : {
					config : 'config.rb'
				} // options
			} //dev
		},
		watch : {
			options : {
				livereload : true
			},
			scripts : {
				files : ['components/js/*.js'],
				tasks : ['uglify']
			}, // scripts
			sass : {
				files : ['components/sass/*.scss'],
				tasks : ['compass:dev']
			}, //sass
			html : {
				files : ['*.html']
				//tasks: ['htmlhint']
			},
			grunt: { files: ['gruntfile.js'] }
		}, // watch
		htmlhint : {
			build : {
				options : {
					'tag-pair' : true,
					'tagname-lowercase' : true,
					'attr-lowercase' : true,
					'attr-value-double-quotes' : true,
					'doctype-first' : true,
					'spec-char-escape' : true,
					'id-unique' : true,
					'head-script-disabled' : false,
					'style-disabled' : false 
				},
				src : ['index.php']
			}
		} // htmlhint
	});
	grunt.registerTask('default', 'watch');
}; //exports
