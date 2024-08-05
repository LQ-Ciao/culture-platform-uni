// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import http from "@/utils/request";
// api加载
// import api from "@/api/api";


Vue.config.productionTip = false

// Vue.prototype.$http = http;
// Vue.prototype.$api = api;

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
import App from './App.vue'

export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}

// #endif

