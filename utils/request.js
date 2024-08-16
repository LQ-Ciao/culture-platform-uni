import Request from 'luch-request'

const http = new Request({
    baseURL: "http://192.168.154.70:81/MiniproApi", //设置请求的base url
    timeout: 300000, //超时时长5分钟,
    // header: {
    //     'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
    // }
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
    console.log(response)
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

// export default {
//     // get请求 可以拼接url或者传入数据对象 二选一
//     getData(url, data) {
//         // 传入的data对象  {name:'abc'};
//         return http.get(url, {params: data});
//     },
//     // post请求
//     postData(url, data) {
//         // 传入的data对象  {name:'abc'};
//         return http.post(url, data);
//     },
//     // put请求
//     putData(url, data) {
//         // 传入的data对象  {name:'abc'};
//         return http.put(url, data);
//     },
//     // delete请求
//     deleteData(url, data) {
//         // 传入的data对象  {name:'abc'};
//         return http.delete(url, data);
//     }
// }

export function get(url, data) {
    return http.get(url, {params: data});
}

export function post(url, data) {
    return http.put(url, data);
}

export function put(url, data) {
    return http.put(url, data);
}

export function del(url, data) {
    return http.delete(url, data);
}