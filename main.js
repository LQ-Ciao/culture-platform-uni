// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// http加载
import {http} from '@/utils/request.js'
// api加载
import {api} from "@/api/api.js";

Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.prototype.$api = api;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
    createSSRApp
} from 'vue'

export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}

// #endif

