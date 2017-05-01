import gulp from 'gulp' //gulp服务器
import gulpif from 'gulp-if' //gulp if判断命令
import concat from 'gulp-concat' //gulp 连接字符串
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named' //对文件重命名做标志
import livereload from 'gulp-livereload' //热更新,文件修改以后自动刷新
import plumber from 'gulp-plumber' //处理文件信息流
import rename from 'gulp-rename' //对文件重命名
import uglify from 'gulp-uglify' //处理js,css的压缩
import {
  log,
  colors
} from 'gulp-util'
import args from './util/args'

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle: function() {

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    .pipe(gulp.dest('server/public/js')) //打包编译的js的路径
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    })) //对文件进行重命名
    .pipe(uglify({
      compress: {
        properties: false
      },
      output: {
        'quote_keys': true
      }
    })) //压缩文件
    .pipe(gulp.dest('server/public/js')) //压缩后的文件存储的目录
    .pipe(gulpif(args.watch, livereload())) //监听文件,自动刷新
})
