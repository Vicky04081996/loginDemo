import * as type from '../types'

export function loginUsers(email, password) {
    return{
        type: type.LOGIN_REQUEST,
        payload: {
            email,
            password
        },
    }
}