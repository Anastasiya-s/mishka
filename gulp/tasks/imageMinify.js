const gulp = require('gulp');
const minify = require('gulp-imagemin');

module.exports = function imageMinify() {
  return gulp.src('src/pages/img/*.*')
    .pipe(minify())
    .pipe(gulp.dest('build/img'))
}