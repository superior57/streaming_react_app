import { combineReducers } from 'redux';
import dialog from './dialog.reducer';
import message from './message.reducer';
import navbar from './navbar.reducer';
import navigation from './navigation.reducer';
import routes from './routes.reducer';
import settings from './settings.reducer';

const fuseReducers = combineReducers({
	navigation,
	settings,
	navbar,
	message,
	dialog,
	routes
});

export default fuseReducers;
