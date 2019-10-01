'use strict';

var gulp = require('gulp');
var rename = require("gulp-rename");
var critical = require('critical').stream;

// have jekyll generate a site first
// then run gulp
gulp.task('default', function () {
  return gulp.src('index.html') // HTML source file
    .pipe(critical({
      base: '_site', // Base directory
      css: ['_site/style.css'], // Your CSS Files
      minify: true // Minify critical-path CSS
    }))
    .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
    .pipe(rename('critical-css.css'))
    .pipe(gulp.dest('_includes/'));
});
