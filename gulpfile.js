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
    src: 'index.html',
    // CSS output file
    dest: '../_includes/critical-css.css',
    // Viewport width
    width: 640,
    // Viewport height
    height: 360,
    // Minify critical-path CSS
    minify: true
  });
});
