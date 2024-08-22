import {get, post, del, put} from '/utils/request'

export default {
    testApi: {
        0: 'test',
        1: 'paramTest',
        2: 'postTest',
        3: 'remove'
    },
    testOperate(data = {}, type = 0) {
        if (type === 0) return get(this.testApi[0]);
        if (type === 1) return get(this.testApi[1], data);
        if (type === 2) return post(this.testApi[2], data);
        if (type === 3) return del(this.testApi[3] + `/${data.id}`);
    },


    // 获取主题库信息
    getTopics(data) {
        return post("/getTopics", data);
    },

    // 获取福建省地市信息
    getDistricts(data) {
        return get("/getDistricts", data);
    },

    // 获取文化资源详情
    getCulturalResources(data) {
        return post("/getCulturalResources", data);
    },

    // 获取文物资源信息
    getCulturalRelics(data) {
        return get("/getCulturalRelics", data);
    },

    // 获取用户信息
    getUserinfo(data) {
        return get("/getUserinfo", data);
    },

    // 验证用户信息
    verifyUserinfo(data) {
        return get("/verifyUserinfo", data);
    },

    // 发送验证码
    sendCode(data) {
        return get("/sendCode", data);
    },


    // 修改密码
    modifyPassword(data) {
        return post("/modifyPassword", data);
    }


}
