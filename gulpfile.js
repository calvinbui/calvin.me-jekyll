const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require("gulp-rename");
const critical = require('critical').stream;

gulp.task('critical', function () {
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