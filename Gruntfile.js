module.exports = function(grunt) {

  grunt.initConfig({
    jsDir: 'assets/src/js/',
    jsDistDir: 'assets/dist/js/',
    sassDir: 'assets/src/sass/',
    sassSrc: 'assets/src/sass/src/',
    cssDistDir: 'assets/dist/css/',
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['<%=jsDir%>*.js'],
        dest: '<%=jsDistDir%><%= pkg.name %>.js'
      },
      css: {
        src: [
            '<%=sassSrc%>*.scss'
        ],
        dest: '<%=sassDir%><%= pkg.name %>.scss'
      }
    },
    sass:   {
        all: {
            files: {
                '<%=cssDistDir%><%= pkg.name %>.css': '<%=sassDir%><%= pkg.name %>.scss'
            }
        }
    },
    uglify: {
      //options: {
        //banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy H:MM") %> */\n'
      //},
      dist: {
        files: {
          '<%=jsDistDir%><%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      add_banner: {
        //options: {
        //  banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy H:MM") %> */\n'
        //},
        files: {
          '<%=cssDistDir%><%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [
          {
            expand: true,
            cwd: 'assets/src/images/',
            src: ['**/*.jpg'],
            dest: 'assets/dist/images/',
            ext: '.jpg'
          },
          {
            expand: true,
            cwd: 'assets/src/images/',
            src: ['**/*.png'],
            dest: 'assets/dist/images/',
            ext: '.png'
          }
        ]
      }
    },
    watch: {
    files: ['<%=jsDir%>*.js', '<%=cssDir%>*.css'],
    tasks: ['concat', 'uglify', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-wp-i18n');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'concat',
    'sass',
    'uglify',
    'cssmin',
    'imagemin',
    'watch'
  ]);

};
