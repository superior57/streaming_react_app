import _ from '@lodash';
import * as Actions from '../actions';

const filesReducer = (state = {}, action) => {
	switch (action.type) {
		case Actions.GET_FILES:
			return _.keyBy(action.payload, 'id');
		default:
			return state;
	}
};

export default filesReducer;
