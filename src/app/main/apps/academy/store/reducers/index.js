import { combineReducers } from 'redux';
import course from './course.reducer';
import courses from './courses.reducer';

const reducer = combineReducers({
	courses,
	course
});

export default reducer;
