import { combineReducers } from 'redux';
import filters from './filters.reducer';
import folders from './folders.reducer';
import labels from './labels.reducer';
import mail from './mail.reducer';
import mails from './mails.reducer';

const reducer = combineReducers({
	mails,
	mail,
	folders,
	labels,
	filters
});

export default reducer;
