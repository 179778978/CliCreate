const program = require('commander')
module.exports = function mainCreate() {
  //文档： https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md
  program.command('init', 'output extra debugging') //使用链式调用的命令，需要在bin下建立相应的命令文件，eg:clicreate-init (以短横线连接)
  program.command('list', '列表')
  program.parse(precess.argv)
}
