import { combineReducers } from 'redux';
import labels from './labels.reducer';
import notes from './notes.reducer';

const reducer = combineReducers({
	notes,
	labels
});

export default reducer;
