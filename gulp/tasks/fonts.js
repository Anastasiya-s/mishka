const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('src/pages/fonts/*.*')
    .pipe(gulp.dest('build/fonts'))
}