import * as Actions from '../actions';

const labelsReducer = (state = null, action) => {
	switch (action.type) {
		case Actions.GET_LABELS:
			return [...action.payload];
		default:
			return state;
	}
};

export default labelsReducer;
