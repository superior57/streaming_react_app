import { combineReducers } from 'redux';
import login from './login.reducer';
import register from './register.reducer';
import user from './user.reducer';

const authReducers = combineReducers({
	user,
	login,
	register
});

export default authReducers;
