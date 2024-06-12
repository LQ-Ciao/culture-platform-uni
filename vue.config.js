// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = {
    transpileDependencies: [
    ],

    configureWebpack: {
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.runtime.esm-bundler.js'
            }
        }
    }
}
