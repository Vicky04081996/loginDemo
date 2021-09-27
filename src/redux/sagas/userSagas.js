import {call, put, takeEvery} from 'redux-saga/effects';
const apiUrl = 'https://jsonplaceholder.typicode.com/users'

function getApi(){
    return fetch(apiUrl).then(response => response.json())
    //.then(json => console.log(json))
    .catch((error) => {throw error})
}
function* fetchUsers(action){
    try{
        const users = yield call(getApi);
        yield put({type:'GET_USERS_SUCCESS', users: users});
        //console.log(users);
    } catch(e){
        yield put({type:'GET_USERS_FAILED', message: e.message});
    }
}

function* userSaga(){
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;