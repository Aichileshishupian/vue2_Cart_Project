const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// vue.config.js
module.exports = {
  // 这里填你的 GitHub 仓库名，前后必须加斜杠
  publicPath: '/vue2_Cart_Project/'
}