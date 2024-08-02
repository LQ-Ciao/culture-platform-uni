// request.js
import Request from 'luch-request';

const http = new Request();

http.setConfig((config) => {
    config.baseURL = 'http://127.0.0.1:8081/admin'; // 设置请求的base URL
    config.timeout = 10000; // 设置请求超时时间
    config.header = {
        'Content-Type': 'application/json',
    };
    return config;
});

// 请求拦截器
http.interceptors.request.use((config) => {
    // 在发送请求之前做些什么，比如添加token
    const token = uni.getStorageSync('token');
    if (token) {
        config.header.Authorization = `Bearer ${token}`;
    }
    return config;
}, (config) => {
    return Promise.reject(config);
});

// 响应拦截器
http.interceptors.response.use((response) => {
    // 对响应数据做点什么
    return response.data;
}, (response) => {
    // 对响应错误做点什么
    return Promise.reject(response);
});

export default http;