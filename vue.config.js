// vue.config.js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.runtime.esm-bundler.js'
            }
        }
    }
}
