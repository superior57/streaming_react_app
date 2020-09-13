import auth from 'app/auth/store/reducers';
import { combineReducers } from 'redux';
import fuse from './fuse';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		...asyncReducers
	});

export default createReducer;
