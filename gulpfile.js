var gulp = require('gulp');
var critical = require('critical');

gulp.task('critical-css', function() {
  critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: false,
    // Base directory
    base: '_site/',
    // HTML source file
    src: 'bottlehead-crack-build-log/index.html',
    // CSS output file
    dest: '../_includes/critical-css.css',
    // Viewport width
    width: 1280,
    // Viewport height
    height: 900,
    // Minify critical-path CSS
    minify: true
  });
});
