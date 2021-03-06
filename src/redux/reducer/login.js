import * as type from '../types'

const initialState ={
    user:[],
    loading: false,
    error:null,
}
export default function login(state = initialState, action ) {
    
    switch(action.type){
        case type.LOGIN_REQUEST:
            //console.log("reducer", action.payload.email);
            return{
                ...state,
                loading: true,
                email: action.payload.email,
                password: action.payload.password,
            }
            
        case type.LOGIN_SUCCESS:
           console.log("suss", action.user.data);
            return{
                ...state,
                loading: false,
                user: action.user,
            }
            
        case type.LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                error: action.message,
            }
        default: 
            return state 
    }

}
