module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
        	vendor: {
                src: [
                    'resources/scripts/jquery.min.js',
                    'resources/scripts/bootstrap.min.js',
                    'resources/scripts/typed.min.js',
                    'resources/scripts/angular.min.js',
                    'resources/scripts/angular-route.min.js',
                    'resources/scripts/angular-animate.min.js',
                    'resources/scripts/loading-bar.min.js'
                ],
                dest: 'resources/dist/js/vendor.js',
            },
            app: {
                src: [
                    'resources/app/**/*.js'
                ],
                dest: 'resources/dist/js/app.js',
			},
            onepage: {
                src: [
                    'js/*.js','!js/plugins.js'
                ],
                dest: 'js/dist/onepage-scripts.js',
            }
        },
    
	    uglify: {
	        vendor: {
	            src: 'resources/dist/js/vendor.js',
	            dest: 'resources/dist/js/vendor.min.js'
	        },
	        app: {
	            src: 'resources/dist/js/app.js',
	            dest: 'resources/dist/js/app.min.js'
			},
			onepage: {
	            src: 'js/dist/onepage-scripts.js',
	            dest: 'js/dist/onepage-scripts.min.js'
	        }
	    },
	    
	    cssmin: {
    	   dist: {
    	      files: {
    	         'resources/styles/style.min.css': ['resources/styles/*.css','!resources/styles/style.min.css']
    	      }
		  },
		  onepage: {
			files: {
			   'css/dist/styles.min.css': ['css/*/*.css','!css/style.min.css']
			}
		 }
	    },
	    	    
	    imagemin: {
	        dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'resources/images',
	                src: ['**/*.{png,jpg,gif}'],
	                dest: 'resources/dist/images/'
	            }]
	        }
	    },
	    watch: {
	        scripts: {
	            files: ['resources/scripts/*.js','resources/app/*/*.js'],
	            tasks: ['concat', 'uglify'],
	            options: {
	                spawn: false,
	            },
	        } 
	    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify','cssmin','imagemin']);


};