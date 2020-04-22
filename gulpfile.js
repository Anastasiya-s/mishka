const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const pugToHtml = require('./gulp/tasks/pug-to-html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const lighthouse = require('./gulp/tasks/lighthouse')
const svgSprite = require('./gulp/tasks/svgSprite')

const dev = gulp.parallel(pugToHtml, styles, script, fonts, imageMinify, svgSprite)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = build

module.exports.lighthouse = gulp.series(lighthouse)