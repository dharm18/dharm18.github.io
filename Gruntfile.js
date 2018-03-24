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
					'js/vendor/jquery.min.js','js/jquery.queryloader2.js','js/modernizr-2.6.2.min.js',
					'js/jquery.fitvids.js','js/jquery.appear.js','js/jquery.slabtext.min.js',
					'js/jquery.fittext.js','js/jquery.easing.min.js','js/jquery.parallax-1.1.3.js',
					'js/jquery.prettyPhoto.js','js/jquery.sticky.js','js/selectnav.min.js',
					'js/SmoothScroll.js','js/jquery.flexslider-min.js','js/isotope.js','js/bootstrap-modal.js',
					'js/shortcodes.js','js/scripts.js'
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
			   'css/styles.min.css': ['css/skeleton.css','css/reset.css','css/style.css','css/social.css','css/flexslider.css','css/prettyPhoto.css','css/font-awesome.css','css/shortcodes.css','css/media.css','css/light.css']
			}
		 }
	    },
	    	    
	    imagemin: {
	        dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'images/',
	                src: ['**/*.{png,jpg,gif}'],
	                dest: 'images/dist/'
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