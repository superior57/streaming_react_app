import { combineReducers } from 'redux';
import chat from './chat.reducer';
import contacts from './contacts.reducer';
import state from './state.reducer';
import user from './user.reducer';

const reducer = combineReducers({
	state,
	user,
	contacts,
	chat
});

export default reducer;
