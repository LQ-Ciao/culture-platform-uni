import {get, post, del, put} from '/http/index'

export const apiTest = (obj) => get("/test", obj)

export const paramTest = (data) => get("/paramTest", data)

export const postTest = (data) => post('postTest', data);

export const removeTest = (data) => del('remove/{}' + data.id)

export default {
    testApi:
        {0: '/test'},
    testOperate(data = {}, type = 0) {
        if (type === 0) return get(this.testApi[0], data);
    }
}
