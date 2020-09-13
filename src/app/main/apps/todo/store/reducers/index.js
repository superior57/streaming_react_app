import { combineReducers } from 'redux';
import filters from './filters.reducer';
import folders from './folders.reducer';
import labels from './labels.reducer';
import todos from './todos.reducer';

const reducer = combineReducers({
	todos,
	folders,
	labels,
	filters
});

export default reducer;
