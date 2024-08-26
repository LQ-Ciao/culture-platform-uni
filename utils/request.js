import Request from 'luch-request'

const http = new Request({
    baseURL: "https://192-168-154-7181-9p3p97oc71mow1.ztna-dingtalk.com/MiniproApi",
    // baseURL: "http://192.168.154.70:81/MiniproApi",
    timeout: 30000,
    header: {
        'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
    }
})

//请求拦截器
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
    const token = uni.getStorageSync('token');
    if (token) {
        config.headers.common["Authorization"] = token;
    }

    if (config.method === 'POST') {
        config.data = JSON.stringify(config.data);
    }
    return config
}, error => {
    return Promise.resolve(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    //未登录时清空缓存跳转
    if (error.statusCode == 401) {
        uni.clearStorageSync();
        uni.switchTab({
            url: "/pages/index/index.vue"
        })
    }
    return Promise.resolve(error)
})


export function get(url, data) {
    return http.get(url, {params: data});
}

export function post(url, data) {
    return http.post(url, data);
}

export function put(url, data) {
    return http.put(url, data);
}

export function del(url, data) {
    return http.delete(url, data);
}