// vue.config.js
const {defineConfig} = require('@vue/cli-service')

module.exports = {
    transpileDependencies: ['@dcloudio/uni-ui', 'luch-request'],

    configureWebpack: {
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.runtime.esm-bundler.js'
            }
        }
    }
}
