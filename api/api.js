import http from '@/utils/request.js';

export default {
    test: {
        0: 'test'
    },
    testOperate(type = "0") {
        if (type === "0") return get(this.type["0"]);
    }
}

export function post(url, ...config) {
    return http.post(url, ...config);
}

export function put(url, ...config) {
    return http.put(url, ...config);
}

export function del(url, params, config) {
    return http.delete(url, {
        params,
        ...config,
    });
}

export function get(url, params, config) {
    return http.get(url, {
        params,
        ...config,
    });
}