import {put,call,takeEvery} from 'redux-saga/effects';


const userLogin = async (email, password) => {
    //console.log(email);
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    //console.log(formdata);
    const login = 'https://e-prathibha.com/apis/login'
    const response = await fetch(login,{method: 'POST',body: formdata})
    
    const responseData = await response.json()
    console.log(responseData);
    return responseData
}

function* fetchlogin(action) {

    try{
        const {email, password} = action.payload;
        const data = yield userLogin(email, password)
        //console.log("return",data);
        yield put({type:'LOGIN_SUCCESS', user: data});
    } catch(e){
        yield put({type:'LOGIN_FAILED', message: e.message});
    }
}


function* loginSaga(){
    yield takeEvery('LOGIN_REQUEST', fetchlogin);
}

export default loginSaga