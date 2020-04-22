const gulp = require('gulp');
const server = require('browser-sync').create();
const del = require('del')

const imageMinify = require('./imageMinify');
const svgSprite = require('./svgSprite');
const styles = require('./styles');
const pugToHtml = require('./pug-to-html');
const script = require('./script');

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })
  
  gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload)
  gulp.watch('src/img/icons/*.svg', gulp.series(svgSprite)).on('change', server.reload)
  gulp.watch('src/styles/**/*.scss', gulp.series(cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload)
  gulp.watch('src/pages/**/*.pug', gulp.series(pugToHtml))
  gulp.watch('build/*.html').on('change', server.reload)

  return cb()
}
