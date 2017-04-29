import yargs from 'yargs'

const args = yargs
  //开发模式
  .option('production', {
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })
  //监听文件的修改...
  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })
  //详细输出控制台输出的日志
  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })
  //强制生成sourcemap
  .option('sourcemaps', {
    describe: 'force the creation of sroucemaps'
  })
  //生成服务器端口
  .option('port', {
    string: true,
    default: 8080,
    describe: 'server port'
  })

  .argv //对输入的命令行以字符串进行解析

export default args
