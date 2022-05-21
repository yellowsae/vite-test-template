module.exports = {
  transform: {
    "^.+\\.jsx?$": 'babel-jest',  // 使用 babel 匹配到 js 文件， 将其转为可以识别的文件 需要安装  babel-jest
    "^.+\\.tsx?$": 'ts-jest',  // 处理 ts 文件
    // 解析 测试 vue 文件的
    "^.+\\.vue?$": 'vue-jest',  // 匹配所有的 vue 文件， 使用vue-jest 去解析， 需要安装 vue-jest@next  @next 支持vue3
  }

  // 总结注意 安装的 版本
}
