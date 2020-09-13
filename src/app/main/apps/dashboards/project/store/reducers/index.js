import { combineReducers } from 'redux';
import projects from './projects.reducer';
import widgets from './widgets.reducer';

const reducer = combineReducers({
	widgets,
	projects
});

export default reducer;
