import { combineReducers } from 'redux';
import users from './users'
import login from './login'
const rootReducer = combineReducers({
    login: login,
    users: users,
})

export default rootReducer;