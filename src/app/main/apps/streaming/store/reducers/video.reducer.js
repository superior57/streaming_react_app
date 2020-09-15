import * as Actions from '../actions';

const initialState = null;

const video = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_VIDEO: {
			return {
				...state,
				video: [...state.video, action.data]
			};
		}
		default: {
			return state;
		}
	}
};

export default video;
