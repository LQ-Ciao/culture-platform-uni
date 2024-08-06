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
    }
}
