// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = {
    transpileDependencies: ['@dcloudio/uni-ui'],

    configureWebpack: {
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.runtime.esm-bundler.js'
            }
        }
    }
}
