const gulp = require('gulp');
const svgstore = require('gulp-svgstore');

module.exports = function svgSprite() {
  return gulp.src('src/pages/img/icons/*.svg')
    .pipe(svgstore())
    .pipe(gulp.dest('build/img/icons'))
}