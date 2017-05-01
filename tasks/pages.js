import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('pages', () => {
  return gulp.src('app/**/*.ejs') //打开源ejs
    .pipe(gulp.dest('server')) //压缩的目录
    .pipe(gulpif(args.watch, livereload()))
})
