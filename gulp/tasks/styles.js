const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(rename({basename: 'styles'}))
    .pipe(gulp.dest('build/css'))
}