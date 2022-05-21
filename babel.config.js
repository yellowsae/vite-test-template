module.exports = {
  // jest 官网提供的 babel 转换
  presets: [['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',  // 如果使用 ts  测试 jest  需要添加 @babel/preset-typescript  安装
  ],  // 需要安装 @babel/preset-env 这个预设
}

