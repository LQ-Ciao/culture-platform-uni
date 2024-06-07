// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = {
    transpileDependencies: [
        '@element-plus/icons-vue'
    ],

    configureWebpack: {
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.runtime.esm-bundler.js'
            }
        }
    }
}
