import * as type from '../types'

export function loginUsers(data) {
    //console.log("action",data);
    return{
        type: type.LOGIN_REQUEST,
        payload: data,
    }
}