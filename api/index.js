
import request from '../http/index'


export const apiTest = () => request.getData("/test", obj)

export const paramTest = (data) => request.getData("/paramTest", data)

export const postTest = (data) => request.postData('postTest',data);

export const removeTest = (data) => request.deleteData('remove/' + data.id)