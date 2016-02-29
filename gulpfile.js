'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var argv = require('yargs').argv;

gulp.task('sass', function () {
  var src = './scss/style.scss';
  var options = {
    outputStyle: (argv.prod)?'compressed':'expanded'
  };

  var path = argv.component;

  if (path && path !== true) {
    path = path.replace('.scss','');
    if (path.search('/') < 0) {
      path = path+'/'+path;
    }
    src = './scss/'+path+'.scss';
  } else {
    console.error('Escribe el nombre de un componente o la ruta a él dentro '+
        'de la carpeta scss');
  }

  return gulp.src(src)
    .pipe(sass(options).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
