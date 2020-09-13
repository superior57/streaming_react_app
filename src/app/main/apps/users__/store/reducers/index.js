import { combineReducers } from 'redux';
import contacts from './users.reducer';
import user from './user.reducer';

const reducer = combineReducers({
	contacts,
	user
});

export default reducer;
